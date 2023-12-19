import { DefaultOptions } from "@tanstack/react-query";

export const queryConfig: DefaultOptions = {
    queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
    }
}