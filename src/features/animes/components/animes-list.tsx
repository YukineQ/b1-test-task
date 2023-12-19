'use client'

import React from "react";

import { Button } from "@/components/ui/button/button";
import { ContentList } from "@/features/content/components/content-list";
import { ContentParamsBase } from "@/types";
import { useAnimeListPagination } from "../api";
import { AnimeFilter } from "./anime-filter";
import { AnimeCard } from "./anime-card";

type AnimeListProps = {
    query: Partial<ContentParamsBase>;
}

export const AnimesList = ({ query }: AnimeListProps) => {
    const { data: animes, fetchNextPage, hasNextPage } = useAnimeListPagination({
        ...query,
        limit: 28,
    })

    return (
        <>
            <div className="pb-10">
                <AnimeFilter />
            </div>
            <ContentList data={animes}>
                {(item) => (
                    <AnimeCard data={item} />
                )}
            </ContentList>
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