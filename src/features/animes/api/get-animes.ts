import { useSuspenseInfiniteQuery } from '@tanstack/react-query'

import { axios } from "@/lib/axios"
import { Anime, AnimeParams } from "../types"

export const getAnimes = (params: Partial<AnimeParams>): Promise<Anime[]> => {
    return axios.get('/api/animes', { params: params })
}

export const useAnimes = (params: Partial<AnimeParams>) => {
    return useSuspenseInfiniteQuery({
        queryKey: ['animes', params],
        queryFn: (data) => getAnimes({ ...params, page: data.pageParam }),
        initialPageParam: 1,
        getNextPageParam: (_, __, lastPageParams) => {
            return lastPageParams + 1
        },
        retry: false,
    })
}