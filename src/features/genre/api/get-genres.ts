import { axios } from "@/lib/axios"
import { Genre, GenreEntryType } from "../types"
import { useQuery } from "@tanstack/react-query"

export const getGenres = (): Promise<Genre[]> => {
    return axios.get('/genres')
}

export const useGenres = ({ entry_type }: { entry_type: GenreEntryType }) => {
    return useQuery({
        queryKey: ['genres'],
        queryFn: async () => {
            const genres = await getGenres()
            return genres.filter((x) => x.entry_type === entry_type)
        }
    })
}