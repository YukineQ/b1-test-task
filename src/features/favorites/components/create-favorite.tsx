'use client'

import React from "react";
import { useCreateFavorite } from "../api/create-favorite"
import { FavoriteCreateParams } from "../types";

type CreateFavoriteProps = {
    children: React.ReactElement;
} & FavoriteCreateParams

export const CreateFavorite = ({ children, ...params }: CreateFavoriteProps) => {
    const { mutateAsync: createFavorite } = useCreateFavorite(params)

    return (
        <>
            {React.cloneElement(
                children, {
                onClick:
                    async () => await createFavorite()
            })}
        </>
    )
}