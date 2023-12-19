import { axios } from "@/lib/axios"
import { Message } from "../types"
import { useQuery } from "@tanstack/react-query"

export const getMessages = ({ userId }: { userId: number | string }): Promise<Message[]> => {
    return axios.get(`/users/${userId}/messages`)
}

export const useMessages = ({ userId }: { userId: number | string }) => {
    return useQuery({
        queryKey: ['messages', userId],
        queryFn: () => getMessages({ userId })
    })
}