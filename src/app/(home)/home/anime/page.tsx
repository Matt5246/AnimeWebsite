'use client'

import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Star, ImageIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useMemo } from "react"
import { Filters } from "./filters"
import { animeList } from "@/lib/utils"




const ImageWithFallback = ({ src, alt, ...props }: { src: string; alt: string;[key: string]: any }) => {
    const [error, setError] = useState(false);

    return error ? (
        <div className="w-full h-full bg-muted dark:bg-muted/20 flex items-center justify-center">
            <ImageIcon className="w-12 h-12 text-muted-foreground/50" />
        </div>
    ) : (
        <Image
            src={src}
            alt={alt}
            {...props}
            onError={() => setError(true)}
        />
    );
};

export default function Home() {
    const [search, setSearch] = useState("")
    const [selectedGenres, setSelectedGenres] = useState<string[]>([])

    const availableGenres = useMemo(() => {
        const genres = new Set<string>()
        animeList.forEach(anime => {
            anime.genres.forEach(genre => genres.add(genre))
        })
        return Array.from(genres).sort()
    }, [])

    const filteredAnime = useMemo(() => {
        return animeList.filter(anime => {
            const matchesSearch = anime.title.toLowerCase().includes(search.toLowerCase())
            const matchesGenres = selectedGenres.length === 0 ||
                selectedGenres.every(genre => anime.genres.includes(genre))
            return matchesSearch && matchesGenres
        })
    }, [search, selectedGenres])

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted dark:from-background dark:to-background/80">
            <div className="container mx-auto px-4 py-8">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 dark:from-primary dark:to-primary/80">
                        Popular Anime Series
                    </h1>
                    <p className="text-muted-foreground dark:text-muted-foreground/90 max-w-2xl mx-auto">
                        Discover the most beloved anime series of all time, featuring epic stories,
                        unforgettable characters, and stunning animation.
                    </p>
                </header>

                <Filters
                    search={search}
                    setSearch={setSearch}
                    selectedGenres={selectedGenres}
                    setSelectedGenres={setSelectedGenres}
                    availableGenres={availableGenres}
                />

                {filteredAnime.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">No anime found matching your criteria.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredAnime.map((anime) => (
                            <Card
                                key={anime.id}
                                className="group relative hover:shadow-xl transition-all duration-300 overflow-hidden 
                                         border hover:border-primary/50 bg-card dark:bg-card/95 
                                         dark:hover:shadow-primary/5"
                            >
                                <CardHeader className="p-0">
                                    <div className="relative h-48 overflow-hidden bg-muted dark:bg-muted/20">
                                        <ImageWithFallback
                                            src={anime.image}
                                            alt={anime.title}
                                            width={500}
                                            height={300}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent dark:from-background/95 dark:to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-500" />

                                    </div>
                                </CardHeader>
                                <CardContent className="p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h2 className="text-xl font-bold tracking-tight dark:text-foreground/90">{anime.title}</h2>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400 dark:fill-yellow-500 dark:stroke-yellow-500" />
                                            <span className="text-sm font-medium dark:text-foreground/90">{anime.rating}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 mb-3 flex-wrap">
                                        {anime.genres.map((genre) => (
                                            <Badge
                                                key={genre}
                                                variant="secondary"
                                                className="text-xs dark:bg-secondary/80 dark:text-secondary-foreground/90"
                                            >
                                                {genre}
                                            </Badge>
                                        ))}
                                    </div>
                                    <p className="text-sm text-muted-foreground dark:text-muted-foreground/80 line-clamp-2">
                                        {anime.description}
                                    </p>
                                    <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground dark:text-muted-foreground/70">
                                        <Play className="w-4 h-4" />
                                        <span>{anime.episodes} Episodes</span>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-4 pt-0">
                                    <Link href={`/home/anime/${anime.id}`} className="w-full">
                                        <Button
                                            className="w-full transition-colors dark:hover:bg-primary/10"
                                            variant="secondary"
                                        >
                                            Learn More
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}