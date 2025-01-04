'use client'
import React, { useEffect } from 'react';

async function fetchGoogleVideoUrls(docid: string) {
    const response = await fetch(`/api/videoUrl?docid=${docid}`);
    const data = await response.json();
    console.log(data);
    return data;
}

const AnimeDecodePage = () => {
    const [data, setData] = React.useState<{ [key: string]: string } | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            setData(await fetchGoogleVideoUrls('1m0K4R4wX_KRavAmDWn8zZQ3xDjFGBi0c'));
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Anime Decode Page</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default AnimeDecodePage;