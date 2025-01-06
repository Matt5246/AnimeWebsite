import axios from 'axios';
import { NextResponse } from 'next/server';

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export async function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const fileId = url.searchParams.get('fileId');
        console.log('File ID:', fileId);

        if (!fileId) {
            return NextResponse.json({ error: 'Missing fileId parameter.' });
        }

        // Google Drive API endpoint for media file
        const apiUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?access_token=ya29.a0ARW5m75wcvmt1NCV_Qx21OxEpt0y-sZGYact6C_MiosLbBHWpIX7azC_BhQU-_I3SOXMlEWp64inzFMAy0Qft0Nh7ekzlP2eEqmwldiQEb_bkQWH22mEDtyA64rR7sQ-2k0-JOGr9F48Ta5YunPJe3Q49qD_bCcZM6VdzCoDaCgYKAZYSARESFQHGX2Miq4Nvh4XQn5FqeZhCQUJsbQ0175&prettyPrint=true&alt=media&key=${GOOGLE_API_KEY}`;

        // Fetch file from Google Drive
        const response = await axios.get(apiUrl, {
            headers: {
                'Authorization': `Bearer ${process.env.GOOGLE_ACCESS_TOKEN}`,
            },
        });

        const fileData = response.data;
        console.log('File Data:', fileData);

        // You could process the file or send it directly if it's a stream
        // Return the response as is, for now, or handle the file as needed
        return NextResponse.json({ data: fileData });

    } catch (error) {
        console.error('Error fetching file:', error);
        return NextResponse.json({ error: 'Failed to retrieve file from Google Drive.' });
    }
}
