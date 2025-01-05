'use client'
import React, { useEffect } from 'react';

import { fetchGoogleVideoUrls } from '@/lib/utils';

const AnimeDecodePage = () => {
    const [data, setData] = React.useState<{ [key: string]: string } | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            setData(await fetchGoogleVideoUrls('1xgnaMsNrvjBsa25nYIV-A1g5WEiJELfR'));
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Anime Decode Page</h1>
            <pre className='text-wrap w-full whitespace-pre-wrap break-all'>{JSON.stringify(data, null, 2)}</pre>
            <a>{data?.videoUrl}</a>
        </div>
    );
};

export default AnimeDecodePage;