import { NoticeSuccess } from "@/features/users/types"
import { axios } from "@/lib/axios"
import { FavoriteCreateParams } from "../types"
import { useMutation } from "@tanstack/react-query"

export const createFavorite = (params: FavoriteCreateParams): Promise<NoticeSuccess> => {
    const { linked_id, linked_type, kind } = params
    const favoriteKind = kind ? `/${kind}` : ''
    return axios.post(`/favorites/${linked_type}/${linked_id}${favoriteKind}`)
}

export const useCreateFavorite = (params: FavoriteCreateParams) => {
    return useMutation({
        mutationFn: () => createFavorite(params),
    })
}