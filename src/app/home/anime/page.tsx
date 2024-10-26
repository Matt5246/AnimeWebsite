'use client'

import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Star, ImageIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useMemo } from "react"
import { Filters } from "./filters"

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
    {
        id: 5,
        title: "Demon Slayer",
        rating: 4.9,
        episodes: 55,
        description: "A young man becomes a demon slayer after his family is slaughtered and his sister turned into a demon.",
        image: "https://image.tmdb.org/t/p/original/r9Rx67TBbIm5XoTcefsNcUhgKth.jpg",
        genres: ["Action", "Supernatural"]
    },
    {
        id: 6,
        title: "Death Note",
        rating: 4.8,
        episodes: 37,
        description: "A high school student discovers a supernatural notebook that allows him to kill anyone by writing the victim's name.",
        image: "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        genres: ["Thriller", "Supernatural"]
    },
    {
        id: 7,
        title: "Fullmetal Alchemist: Brotherhood",
        rating: 4.9,
        episodes: 64,
        description: "Two brothers search for the Philosopher's Stone to restore their bodies after a failed alchemical ritual.",
        image: "https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        genres: ["Action", "Fantasy"]
    },
    {
        id: 8,
        title: "Jujutsu Kaisen",
        rating: 4.8,
        episodes: 46,
        description: "A boy joins a high school for sorcerers to help people haunted by Curses, supernatural creatures.",
        image: "https://image.tmdb.org/t/p/original/btFclZIXhzE6qHbnvAURDtzD2ks.jpg",
        genres: ["Action", "Supernatural"]
    },
    {
        id: 9,
        title: "Steins;Gate",
        rating: 4.9,
        episodes: 24,
        description: "A self-proclaimed mad scientist discovers a way to send messages to the past, leading to dire consequences.",
        image: "https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg",
        genres: ["Sci-Fi", "Thriller"]
    },
    {
        id: 10,
        title: "Spy x Family",
        rating: 4.7,
        episodes: 37,
        description: "A spy must create a fake family to complete his mission, unknowingly adopting a telepath daughter and marrying an assassin.",
        image: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/689e2efcf9f192ba6c0f7a538ee99027.jpe",
        genres: ["Comedy", "Action"]
    },
    {
        id: 11,
        title: "Tokyo Ghoul",
        rating: 4.6,
        episodes: 48,
        description: "A college student becomes half-ghoul after surviving a deadly encounter, forcing him to navigate between human and ghoul worlds.",
        image: "https://m.media-amazon.com/images/M/MV5BN2E2OTgzODktMjBhYy00MjJjLWI0OTgtNGYxOGNhMWMxOWE4XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
        genres: ["Horror", "Action"]
    },
    {
        id: 12,
        title: "Hunter x Hunter",
        rating: 4.9,
        episodes: 148,
        description: "Gon Freecss aspires to become a Hunter, an elite member of society, while searching for his father.",
        image: "https://m.media-amazon.com/images/M/MV5BZjNmZDhkN2QtNDYyZC00YzJmLTg0ODUtN2FjNjhhMzE3ZmUxXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_FMjpg_UX1000_.jpg",
        genres: ["Adventure", "Fantasy"]
    },
    {
        id: 13,
        title: "Cowboy Bebop",
        rating: 4.8,
        episodes: 26,
        description: "Follow the adventures of bounty hunters in space as they chase down the galaxy's most dangerous criminals.",
        image: "https://m.media-amazon.com/images/M/MV5BMTc1ZTdlYWUtY2NhZS00OTIxLTgzNjYtN2YxNTBmOTVkMjk4XkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg",
        genres: ["Sci-Fi", "Action"]
    },
    {
        id: 14,
        title: "Neon Genesis Evangelion",
        rating: 4.7,
        episodes: 26,
        description: "Teenagers pilot giant robots to defend humanity against mysterious beings known as Angels.",
        image: "https://m.media-amazon.com/images/M/MV5BNDc5M2FkMGItMDY3Yy00NjMwLTlkZjQtMDc3MTQ3M2I5N2E5XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_FMjpg_UX1000_.jpg",
        genres: ["Psychological", "Mecha"]
    }
];


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
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent 
                                                      dark:from-background/95 dark:to-transparent 
                                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                                    <Link href={`/anime/${anime.id}`} className="w-full">
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