'use client';
import React from 'react';
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


const fetchStreamLink = async (fileId: string) => {
  fetch(`/api/getFile?fileId=${fileId}`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      if (data.data) {
        console.log('File Data:', data.data);
        // Handle the file data (e.g., display or download it)
      } else {
        console.error('Error:', data.error);
      }
    })
    .catch(error => console.error('Error fetching file:', error));
};

export default function AnimeDetails() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const user = useSession();
  console.log(user);

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
              <video src={anime.videoUrl} controls className="w-full h-full"></video>

              {/* <video id="video" width="320" height="240" controls>
                <source src="" type='video/mp4' />
                Your browser does not support the video tag.
              </video> */}

            </div>
          </CardContent>
          <CardFooter className="p-6 bg-muted/50 space-x-4">
            <Button className="w-full">Watch Next Episode</Button>
            <Button className="w-full" onClick={() => fetchStreamLink('1r98AIUXZVksPibm5ZRxMZ17La8S4ZOn6')}>Fetch Stream Link</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
