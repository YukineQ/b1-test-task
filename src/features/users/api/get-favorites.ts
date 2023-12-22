import { axios } from "@/lib/axios"
import { UserFavourite } from "../types"

export const getFavorites = ({ userId }: { userId: number | string}): Promise<UserFavourite> => {
    return axios.get(`/api/users/${userId}/favourites`)
}