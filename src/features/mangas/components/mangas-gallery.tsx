'use client'

import { RoutePath } from "@/config/routes";
import { useMangas } from "../api/get-mangas"
import { MangaParams } from "../types";
import { objectToParamsQuery } from "@/utils/objectToQuery";
import { ContentCarousel } from "@/features/content/components/content-carousel";
import { MangaCard } from "./manga-card";

type MangasGalleryProps = {
    query: Partial<MangaParams>;
    title: string;
}

export const MangasGallery = ({ query, title }: MangasGalleryProps) => {
    const { data: mangas } = useMangas({ ...query, limit: 21 })

    const linkToMangas = `${RoutePath.Manga}?${objectToParamsQuery(query)}`

    return (
        <ContentCarousel
            data={mangas}
            href={linkToMangas}
            title={title}
            CardComponent={MangaCard}
        />
    )
}