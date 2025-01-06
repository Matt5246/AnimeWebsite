import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const docid = url.searchParams.get('docid');
        console.log(docid)
        if (!docid) {
            return NextResponse.json({ error: 'Missing docid parameter.' });
        }

        // Google Docs API endpoint
        const apiUrl = 'https://docs.google.com/get_video_info';

        // Fetch video info from Google
        const response = await axios.get(apiUrl, {
            params: { docid },
        });

        const videoInfo = response.data;
        console.log("videoInfo:", videoInfo)
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
                const adjustedUrl = url.replace(/\/[^\/]+\.google\.com/, "/redirector.googlevideo.com");
                qualityMap[quality] = adjustedUrl;
            }
        });

        // Return the processed data
        return NextResponse.json({ data: qualityMap });
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
