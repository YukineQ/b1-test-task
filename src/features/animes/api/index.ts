import { useSuspenseInfiniteQuery, useSuspenseQuery } from "@tanstack/react-query"

import { axios } from "@/lib/axios"
import { Anime, AnimeBase, AnimeParams } from "../types"
import { ExternalLink } from "@/features/external-links/types"
import { Role } from "@/features/roles"
import { Screenshot } from "@/features/screenshoots/types"

const ANIME_BASE_URL = '/animes'

const getAnimes = (params: Partial<AnimeParams>): Promise<Anime[]> => {
    return axios.get(ANIME_BASE_URL, { params: params })
}

export const useAnimeListPagination = (params: Partial<AnimeParams>) => {
    return useSuspenseInfiniteQuery({
        queryKey: ['animes', params],
        queryFn: (data) => getAnimes({ ...params, page: data.pageParam }),
        initialPageParam: 1,
        getNextPageParam: (_, __, lastPageParams) => {
            return lastPageParams + 1
        },
    })
}

export const useAnimeList = (params: Partial<AnimeParams>) => {
    return useSuspenseQuery({
        queryKey: ['animes', params],
        queryFn: () => getAnimes(params),
    })
}

const getAnime = ({ animeId }: { animeId: number }): Promise<Anime> => {
    return axios.get(`${ANIME_BASE_URL}/${animeId}`)
}

export const useAnime = ({ animeId }: { animeId: number }) => {
    return useSuspenseQuery({
        queryKey: ['anime', animeId],
        queryFn: () => getAnime({ animeId }),
    },)
}

const getSimilar = ({ animeId }: { animeId: number }): Promise<AnimeBase[]> => {
    return axios.get(`${ANIME_BASE_URL}/${animeId}/similar`)
}

export const useAnimeSimilar = ({ animeId }: { animeId: number }) => {
    return useSuspenseQuery({
        queryKey: ['animes-similar', animeId],
        queryFn: () => getSimilar({ animeId }),
    })
}

const getExternalLinks = ({ animeId }: { animeId: number }): Promise<ExternalLink[]> => {
    return axios.get(`${ANIME_BASE_URL}/${animeId}/external_links`)
}

export const useExternalLinks = ({ animeId }: { animeId: number }) => {
    return useSuspenseQuery({
        queryKey: ['animes-external-links', animeId],
        queryFn: () => getExternalLinks({ animeId }),
    })
}

const getRoles = ({ animeId }: { animeId: number }): Promise<Role[]> => {
    return axios.get(`${ANIME_BASE_URL}/${animeId}/roles`)
}

export const useRoles = ({ animeId }: { animeId: number }) => {
    return useSuspenseQuery({
        queryKey: ['roles', animeId],
        queryFn: () => getRoles({ animeId })
    })
}

const getScreenshots = ({ animeId }: { animeId: number }): Promise<Screenshot[]> => {
    return axios.get(`${ANIME_BASE_URL}/${animeId}/screenshots`)
}

export const useScreenshots = ({ animeId }: { animeId: number }) => {
    return useSuspenseQuery({
        queryKey: ['screenshots', animeId],
        queryFn: () => getScreenshots({ animeId })
    })
}