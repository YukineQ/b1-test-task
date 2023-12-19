'use client'

import dynamic from "next/dynamic";

import { AnimeDetails } from "@/features/animes/components/anime-details";
import { SimilarAnimes } from "@/features/animes/components/similar-animes";
import { CharactersFromRolesSkeleton } from "@/features/roles/components/characters-from-roles-skeleton";
import { ScreeshotsGallerySkeleton } from "@/features/screenshoots/components/screenshots-gallery-skeleton";

const RolesGallery = dynamic(
    () => import('@/features/animes/components/roles-gallery')
        .then(module => module.RolesGallery), {
    ssr: false,
    loading: () => <CharactersFromRolesSkeleton />
})

const ScreenshootsGallery = dynamic(
    () => import('@/features/animes/components/screenshots')
        .then(module => module.Screeshots), {
    ssr: false,
    loading: () => <ScreeshotsGallerySkeleton />
})

type AnimePageProps = {
    params: {
        animeId: number;
    },
}

export default function AnimePage({
    params
}: AnimePageProps) {
    return (
        <>
            <AnimeDetails animeId={params.animeId} />
            <div className="pt-20">
                <SimilarAnimes animeId={params.animeId} />
            </div>
            <RolesGallery animeId={params.animeId} />
            <ScreenshootsGallery animeId={params.animeId} />
        </>
    )
}
