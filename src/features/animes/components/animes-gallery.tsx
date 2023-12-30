'use client'

import { RoutePath } from "@/config/routes";
import { objectToParamsQuery } from "@/utils/objectToQuery";
import { AnimeParams } from "../types";
import { useAnimeList } from "../api";
import { AnimeCard } from "./anime-card";
import { ContentCarousel } from "@/features/content/components/content-carousel";

type AnimesGalleryProps = {
    query: Partial<AnimeParams>;
    title: string;
}

export const AnimesGallery = ({ query, title }: AnimesGalleryProps) => {
    const { data: animes } = useAnimeList({ ...query, limit: 21 })

    const linkToAnimes = `${RoutePath.Anime}?${objectToParamsQuery(query)}`

    return (
        <ContentCarousel
            data={animes}
            CardComponent={AnimeCard}
            title={title}
            href={linkToAnimes}
        />
    )
}