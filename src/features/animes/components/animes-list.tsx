'use client'

import { useAnimes } from "../api/get-animes"
import { Button } from "@/components/ui/button/button";
import React from "react";
import { useShareModal } from "../hooks/use-share-modal";
import { ContentCard } from "@/components/content-card";

export const AnimesList = () => {
    const { data: animes, fetchNextPage, hasNextPage } = useAnimes({
        limit: 28,
        order: 'popularity'
    })
    const shareAnime = useShareModal()

    if (!animes) return null

    const renderAnimes = () => {
        return animes.pages.map((page, idx) => (
            <React.Fragment key={'page' + idx}>
                {page.map(anime => (
                    <ContentCard
                        key={anime.id}
                        data={anime}
                    />
                ))}
            </React.Fragment>
        ))
    }

    return (
        <>
            <div className="grid grid-cols-7 gap-3">
                {renderAnimes()}
            </div>
            <Button
                variant='outline'
                onClick={() => fetchNextPage()}
                className="mt-6"
            >
                Show more
            </Button>
        </>
    )
}