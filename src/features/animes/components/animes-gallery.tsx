'use client'

import { ContentCard } from "@/features/content/components/content-card";
import { Gallery, GalleryLink, GalleryScrollContainer } from "@/components/gallery";
import { ROUTES, RoutePath } from "@/config/routes";
import { objectToParamsQuery } from "@/utils/objectToQuery";
import { AnimeParams } from "../types";
import { useAnimeList } from "../api";
import { AnimeCard } from "./anime-card";

type AnimesGalleryProps = {
    query: Partial<AnimeParams>;
    label: string;
}

export const AnimesGallery = ({ query, label }: AnimesGalleryProps) => {
    const { data: animes } = useAnimeList({ ...query, limit: 21 })

    const linkToAnimes = `${RoutePath.Anime}?${objectToParamsQuery(query)}`

    return (
        <Gallery>
            <GalleryLink href={linkToAnimes}>{label}</GalleryLink>
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