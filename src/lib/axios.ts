import Axios from "axios";

import { API_URL } from "@/config/api";

import { notFound } from 'next/navigation'
import { getSession } from "next-auth/react";

export const axios = Axios.create({
    baseURL: API_URL,
})

axios.interceptors.request.use(
    async (config) => {
        const session = await getSession()
        if (session) {
            config.headers.Authorization = `Bearer ${session.user.accessToken}`
        }

        config.headers.Accept = 'application/json';
        return config;
    }
)
axios.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        // if (error.response.status === 404) {
        //     return notFound()
        // }
        return Promise.reject(error)
    }
)