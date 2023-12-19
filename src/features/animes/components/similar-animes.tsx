'use client'

import { Gallery, GalleryScrollContainer, GalleryTitle } from "@/components/gallery";
import { useAnimeSimilar } from "../api";
import { AnimeCard } from "./anime-card";

type SimilarAnimesProps = {
    animeId: number;
    label?: string;
}

export const SimilarAnimes = ({ animeId, label = 'Similar animes' }: SimilarAnimesProps) => {
    const { data: animes, isFetched } = useAnimeSimilar({ animeId })

    if (isFetched && animes.length === 0) return null

    return (
        <Gallery>
            <GalleryTitle>{label}</GalleryTitle>
            <GalleryScrollContainer>
                {animes.map((item) => (
                    <AnimeCard
                        key={item.id}
                        data={item}
                    />
                ))}
            </GalleryScrollContainer>
        </Gallery>
    )
}