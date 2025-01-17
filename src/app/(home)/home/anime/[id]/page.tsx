'use client';
import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Star, Play, ArrowLeft } from 'lucide-react';
import { animeList } from '@/lib/utils';
import { useSession } from 'next-auth/react';

const fetchGoogleVideoUrls = async (docid: string) => {
  return fetch(`/api/videoUrl?docid=${docid}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.data) {
        console.log('Video Links:', data.data);
        return data.data; // This is the quality map returned from the server
      } else {
        console.error('Error:', data.error);
        return null;
      }
    })
    .catch((error) => {
      console.error('Error fetching video URLs:', error);
      return null;
    });
};

export default function AnimeDetails() {
  const [videoLinks, setVideoLinks] = useState<{ [key: string]: string } | null>(null);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const user = useSession();
  console.log(user);
  console.log(selectedVideoUrl?.url)
  const anime = animeList.find((a) => a.id === Number(id));

  if (!anime) {
    return <div>Anime not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted dark:from-background dark:to-background/80 p-8">
      <Button
        variant="ghost"
        onClick={() => router.back()}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to List
      </Button>
      <div className="max-w-6xl mx-auto">
        <Card className="overflow-hidden">
          <CardHeader className="relative h-96">
            <Image
              src={anime.image}
              alt={anime.title}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <CardTitle className="text-4xl font-bold text-white mb-2">
                {anime.title}
              </CardTitle>
              <CardDescription className="text-lg text-white/80">
                {anime.description}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                <span className="text-lg font-semibold">
                  {anime.rating}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>{anime.episodes} Episodes</span>
              </div>
            </div>
            <div className="mb-6">
              {anime.genres.map((genre) => (
                <Badge key={genre} variant="secondary" className="mr-2">
                  {genre}
                </Badge>
              ))}
            </div>
            <div className="aspect-video bg-muted relative">
              {/* Video Element */}

              <video src={selectedVideoUrl?.url || ''} controls className="w-full h-full">
                Your browser does not support the video tag.
              </video>
            </div>
          </CardContent>
          <CardFooter className="p-6 bg-muted/50 space-x-4">
            <Button
              className="w-full"
              onClick={() =>
                fetchGoogleVideoUrls('1cEFLV_UoA_9PJYH65YtPiKz56wMEFBFV').then((data) => {
                  setVideoLinks(data);
                  if (data) {
                    const firstQuality = Object.keys(data)[0];
                    setSelectedVideoUrl(data[firstQuality]);
                  }
                })
              }
            >
              Fetch Google Video URLs
            </Button>
          </CardFooter>
        </Card>
        {videoLinks && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Available Video Links</h2>
            <div className="space-y-4">
              {Object.entries(videoLinks).map(([quality, url]) => (
                <div key={quality} className="flex items-center justify-between">
                  <span className="font-medium">{quality}</span>
                  <Button onClick={() => setSelectedVideoUrl(url)}>Play</Button>
                  {/* <a href={url} target="_blank" rel="noopener noreferrer">
                    {url}</a> */}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
