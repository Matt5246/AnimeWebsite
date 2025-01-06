'use client';
import React, { useEffect, useState } from "react";

const fetchGoogleVideoUrls = async (docid) => {
    const apiUrl = "https://docs.google.com/get_video_info";
    const response = await fetch(`${apiUrl}?docid=${docid}`);
    const videoInfoText = await response.text();
    console.log("Video Info Response:", videoInfoText);
    return parseVideoInfo(videoInfoText);
};

const parseVideoInfo = (query) => {
    const params = {};
    query.split("&").forEach((pair) => {
        const [key, value] = pair.split("=");
        if (key && value) {
            params[decodeURIComponent(key)] = decodeURIComponent(value);
        }
    });
    return params;
};

const parseFmtStreamMap = (fmtStreamMap) => {
    const maps = fmtStreamMap.split(",");
    const qualityMap = {};

    maps.forEach((map) => {
        const [formatCode, url] = decodeURIComponent(map).split("|");
        const quality = getQualityLabel(parseInt(formatCode, 10));
        if (quality) {
            // Replace server paths for proper redirects
            const adjustedUrl = url.replace(/\/[^\/]+\.google\.com/, "/redirector.googlevideo.com");
            qualityMap[quality] = adjustedUrl;
        }
    });

    return qualityMap;
};

const getQualityLabel = (formatCode) => {
    switch (formatCode) {
        case 18:
            return "360P";
        case 22:
            return "720P";
        case 37:
            return "1080P";
        case 59:
            return "480P";
        default:
            return null;
    }
};

export default function Home() {
    const [videoLinks, setVideoLinks] = useState(null);
    const [error, setError] = useState(null);
    const docid = "12zMbQMRahxP4y1Zooo0xQATk6wOS1Egp"; // Replace with your docid

    useEffect(() => {
        const fetchData = async () => {
            try {
                const videoInfo = await fetchGoogleVideoUrls(docid);

                if (!videoInfo || !videoInfo["fmt_stream_map"]) {
                    throw new Error("No fmt_stream_map found in video info");
                }

                const links = parseFmtStreamMap(videoInfo["fmt_stream_map"]);
                setVideoLinks(links);
            } catch (error) {
                console.error("Error fetching video URLs:", error);
                setError("Failed to fetch video links. Please try again later.");
            }
        };

        fetchData();
    }, [docid]);

    return (
        <div>
            <h1>Google Video Links</h1>
            {error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : videoLinks ? (
                <div>
                    {Object.entries(videoLinks).map(([quality, url]) => (
                        <div key={quality} style={{ marginBottom: "20px" }}>
                            <strong>{quality}:</strong>{" "}
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                {url}
                            </a>
                            <iframe
                                src={url}
                                title={quality}
                                width="100%"
                                height="400"
                                style={{ border: "1px solid #ddd", marginTop: "10px" }}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading video links...</p>
            )}
        </div>
    );
}
