'use client'

import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const animeList = [
    {
        id: 1,
        title: "Naruto",
        rating: 4.8,
        episodes: 720,
        description: "A young ninja who seeks recognition from his peers and dreams of becoming the Hokage.",
        image: "https://m.media-amazon.com/images/S/pv-target-images/0c9ce4e037546965d6b1f3807e9f8f549a113d32066b2bdb22ada5d179c0d89a.jpg",
        genres: ["Action", "Adventure"]
    },
    {
        id: 2,
        title: "One Piece",
        rating: 4.9,
        episodes: 1000,
        description: "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger.",
        image: "https://a.storyblok.com/f/178900/960x540/3e0ac3e134/nami-one-piece-25th-anniversary.jpg/m/filters:quality(95)format(webp)",
        genres: ["Adventure", "Fantasy"]
    },
    {
        id: 3,
        title: "Attack on Titan",
        rating: 4.9,
        episodes: 87,
        description: "Humanity's last stand against man-eating giants known as Titans.",
        image: "https://fwcdn.pl/fpo/62/27/636227/7548140_1.3.jpg",
        genres: ["Action", "Drama"]
    },
    {
        id: 4,
        title: "My Hero Academia",
        rating: 4.7,
        episodes: 138,
        description: "A superhero-loving boy without any powers is determined to enroll in a prestigious hero academy and learn what it really means to be a hero.",
        image: "https://m.media-amazon.com/images/M/MV5BNzgxMzI3NzgtYzE2Zi00MzlmLThlNWEtNWVmZWEyZjNkZWYyXkEyXkFqcGc@._V1_QL75_UY281_CR5,0,190,281_.jpg",
        genres: ["Action", "Superhero"]
    },
];

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
            <div className="container mx-auto px-4 py-8">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                        Popular Anime Series
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Discover the most beloved anime series of all time, featuring epic stories,
                        unforgettable characters, and stunning animation.
                    </p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {animeList.map((anime) => (
                        <Card key={anime.id} className="group relative hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-primary/50">
                            <CardHeader className="p-0">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={anime.image}
                                        alt={anime.title}
                                        width={500}
                                        height={300}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </CardHeader>
                            <CardContent className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <h2 className="text-xl font-bold tracking-tight">{anime.title}</h2>
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                                        <span className="text-sm font-medium">{anime.rating}</span>
                                    </div>
                                </div>
                                <div className="flex gap-2 mb-3">
                                    {anime.genres.map((genre) => (
                                        <Badge key={genre} variant="secondary" className="text-xs">
                                            {genre}
                                        </Badge>
                                    ))}
                                </div>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {anime.description}
                                </p>
                                <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                                    <Play className="w-4 h-4" />
                                    <span>{anime.episodes} Episodes</span>
                                </div>
                            </CardContent>
                            <CardFooter className="p-4 pt-0">
                                <Link href={`/anime/${anime.id}`} className="w-full">
                                    <Button className="w-full group-hover:bg-primary/90" variant="secondary">
                                        Learn More
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}