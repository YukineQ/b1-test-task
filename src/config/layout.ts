import { RoutePath } from "./routes";

export const layoutConfig = {
    mainNav: [
        {
            title: 'Home',
            href: RoutePath.Home,
        },
        {
            title: 'Animes',
            href: RoutePath.Anime,
        },
        {
            title: 'Mangas',
            href: RoutePath.Manga,
        },
        {
            title: 'Light Novel',
            href: '#',
            disabled: true,
        }
    ]
}