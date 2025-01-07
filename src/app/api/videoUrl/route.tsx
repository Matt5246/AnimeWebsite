import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const docid = url.searchParams.get('docid');
        if (!docid) {
            return NextResponse.json({ error: 'Missing docid parameter.' });
        }

        const apiUrl = "https://drive.google.com/get_video_info?authuser=";
        const response = await axios.get(`${apiUrl}&docid=${docid}&sle=true&hl=de&ipbypass=yes&ipbits=0`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Authorization': `Bearer ${process.env.GOOGLE_ACCESS_TOKEN}`,
            },
        });

        // Extract cookies from the response headers
        const cookies = response.headers['set-cookie'];
        if (!cookies || !cookies.some((cookie) => cookie.includes('DRIVE_STREAM'))) {
            return NextResponse.json({ error: 'Missing DRIVE_STREAM cookie.' });
        }

        const videoInfo = response.data;

        // Extract `fmt_stream_map` key
        const fmtStreamMap = getQueryVariable(videoInfo, 'fmt_stream_map');
        if (!fmtStreamMap) {
            return NextResponse.json({ error: 'Could not retrieve video streams.' });
        }

        // Decode and process streams
        const maps = decodeURIComponent(fmtStreamMap).split(',');
        const qualityMap: { [key: string]: string } = {};
        maps.forEach((map) => {
            const [formatCode, url] = decodeURIComponent(map).split('|');
            const quality = getQualityLabel(parseInt(formatCode, 10));
            if (quality) {
                qualityMap[quality] = url;
            }
        });

        // Include cookies for video playback links
        const playbackLinks = Object.entries(qualityMap).reduce((acc, [quality, link]) => {
            acc[quality] = { url: link, cookies };
            return acc;
        }, {} as { [key: string]: { url: string; cookies: string[] } });

        return NextResponse.json({ data: playbackLinks });
    } catch (error) {
        console.error('Error fetching video URL:', error);
        return NextResponse.json({ error: 'Failed to retrieve video URL.' });
    }
}

// Helper to extract query variables
function getQueryVariable(query: string, variable: string) {
    const vars = query.split('&');
    for (const pair of vars) {
        const [key, value] = pair.split('=');
        if (decodeURIComponent(key) === variable) {
            return value;
        }
    }
    return null;
}

// Helper to map format codes to quality descriptions
function getQualityLabel(formatCode: number) {
    switch (formatCode) {
        case 5: return 'Low Quality, 240p, FLV, 400x240';
        case 18: return 'Medium Quality, 360p, MP4, 480x360';
        case 22: return 'High Quality, 720p, MP4, 1280x720';
        case 37: return 'Full High Quality, 1080p, MP4, 1920x1080';
        default: return null;
    }
}
