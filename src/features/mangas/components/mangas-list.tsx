'use client'

import { Button } from "@/components/ui/button/button";
import React from "react";
import { ContentCard } from "@/components/content-card";
import { useMangas } from "../api/get-mangas";

export const MangasList = () => {
    const { data: mangas, fetchNextPage, hasNextPage } = useMangas({
        limit: 28,
        order: 'popularity'
    })

    if (!mangas) return null

    const renderMangas = () => {
        return mangas.pages.map((page, idx) => (
            <React.Fragment key={'page' + idx}>
                {page.map(manga => (
                    <ContentCard
                        key={manga.id}
                        data={manga}
                    />
                ))}
            </React.Fragment>
        ))
    }

    return (
        <>
            <div className="grid grid-cols-7 gap-3">
                {renderMangas()}
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