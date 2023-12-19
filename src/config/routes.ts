export enum RoutePath {
    Home = '/',
    Anime = '/animes',
    Manga = '/mangas',
}

export const ROUTES = {
    HOME: '/',
    ANIME: '/animes',
    ANIME_DETAILS: {
        route: '/animes/:animeID',
        getRoute: (animeId: number) => `/animes/${animeId}` as const
    },
    ANIME_SIMILAR: {
        route: '/animes/:animeID/similar',
        getRoute: (animeId: number) => `/animes/${animeId}/similar` as const
    }
}