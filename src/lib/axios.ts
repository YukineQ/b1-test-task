import Axios from "axios";

export const axios = Axios.create({
    baseURL: 'https://shikimori.one'
})

axios.interceptors.request.use(
    (config) => {
        config.headers.Accept = 'application/json';
        return config;
    }
)
axios.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        return Promise.reject(error)
    }
)