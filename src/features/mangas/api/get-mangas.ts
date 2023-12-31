import { useSuspenseInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query'

import { axios } from "@/lib/axios"
import { Manga, MangaParams } from "../types"

export const getMangas = (params: Partial<MangaParams>): Promise<Manga[]> => {
    return axios.get('/mangas', { params: params })
}

export const useMangasInfinite = (params: Partial<MangaParams>) => {
    return useSuspenseInfiniteQuery({
        queryKey: ['mangas', params],
        queryFn: (data) => getMangas({ ...params, page: data.pageParam }),
        initialPageParam: 1,
        getNextPageParam: (_, __, lastPageParams) => {
            return lastPageParams + 1
        },
        retry: false,
    })
}

export const useMangas = (params: Partial<MangaParams>) => {
    return useSuspenseQuery({
        queryKey: ['mangas', params],
        queryFn: () => getMangas(params)
    })
}