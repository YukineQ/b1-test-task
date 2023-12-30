'use client'

import { useAnimeSimilar } from "../api";
import { AnimeCard } from "./anime-card";
import { ContentCarousel } from "@/features/content/components/content-carousel";

type SimilarAnimesProps = {
    animeId: number;
    title?: string;
}

export const SimilarAnimes = ({ animeId, title = 'Similar animes' }: SimilarAnimesProps) => {
    const { data: animes, isFetched } = useAnimeSimilar({ animeId })

    if (isFetched && animes.length === 0) return null

    return (
        <ContentCarousel
            data={animes}
            CardComponent={AnimeCard}
            title={title}
            href="#"
        />
    )
}