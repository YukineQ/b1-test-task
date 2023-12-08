import { ContentEntityBase, ContentParamsBase, StatusParamsBase } from "@/types";

export type Anime = {
    episodes: number;
    episodes_aired: number;
} & ContentEntityBase

export type AnimeParams = ContentParamsBase & {
    kind: 'tv' | 'movie' | 'ova' | 'ona' | 'special' | 'music' | 'tv_13' | 'tv_24' | 'tv_48';
    status: StatusParamsBase;
    duration: 'S' | 'D' | 'F';
}