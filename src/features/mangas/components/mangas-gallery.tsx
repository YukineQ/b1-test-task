'use client'

import { RoutePath } from "@/config/routes";
import { useMangas } from "../api/get-mangas"
import { MangaParams } from "../types";
import { objectToParamsQuery } from "@/utils/objectToQuery";
import { Gallery, GalleryLink, GalleryScrollContainer } from "@/components/gallery";
import { ContentCard } from "@/features/content/components/content-card";

type MangasGalleryProps = {
    query: Partial<MangaParams>;
    label: string;
}

export const MangasGallery = ({ query, label }: MangasGalleryProps) => {
    const { data: mangas } = useMangas({ ...query, limit: 21 })

    const linkToMangas = `${RoutePath.Manga}?${objectToParamsQuery(query)}`

    return (
        <Gallery>
            <GalleryLink href={linkToMangas}>{label}</GalleryLink>
            <GalleryScrollContainer>
                {mangas.map((item) => (
                    <ContentCard
                        key={item.id}
                        data={item}
                        link=""
                    />
                ))}
            </GalleryScrollContainer>
        </Gallery>
    )
}