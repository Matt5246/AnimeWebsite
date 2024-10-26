"use client"

import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

interface FiltersProps {
    search: string
    setSearch: (value: string) => void
    selectedGenres: string[]
    setSelectedGenres: (value: string[]) => void
    availableGenres: string[]
}

export function Filters({
    search,
    setSearch,
    selectedGenres,
    setSelectedGenres,
    availableGenres,
}: FiltersProps) {
    const toggleGenre = (genre: string) => {
        setSelectedGenres(
            selectedGenres.includes(genre)
                ? selectedGenres.filter((g) => g !== genre)
                : [...selectedGenres, genre]
        )
    }

    const clearSelection = () => {
        setSelectedGenres([])
    }

    return (
        <div className="space-y-4 mb-8">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-9"
                    placeholder="Search anime by title..."
                />
            </div>

            <div className="flex flex-wrap gap-2 items-center">
                {availableGenres.map((genre) => (
                    <Badge
                        key={genre}
                        variant={selectedGenres.includes(genre) ? "default" : "outline"}
                        className={cn(
                            "cursor-pointer hover:bg-primary/90 transition-colors",
                            selectedGenres.includes(genre)
                                ? "hover:bg-primary/90"
                                : "hover:bg-primary/10 dark:hover:bg-primary/20"
                        )}
                        onClick={() => toggleGenre(genre)}
                    >
                        {genre}
                    </Badge>
                ))}
                {selectedGenres.length > 0 && (
                    <Badge
                        onClick={clearSelection}
                        variant="destructive"
                        className={cn(
                            "cursor-pointer hover:bg-primary/30 transition-colors"
                        )}
                    >
                        X
                    </Badge>
                )}
            </div>
        </div>
    )
}
