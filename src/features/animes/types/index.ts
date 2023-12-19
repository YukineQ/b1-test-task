import { ContentEntityBase, ContentParamsBase, StatusParamsBase } from "@/types";
import { Genre } from "../../genre/types";
import { Studio } from "../../studios/type";
import { Screenshot } from "../../screenshoots/types";
import { Video } from "../../videos/types";

type AnimeKind = 'tv'
    | 'movie'
    | 'ova'
    | 'ona'
    | 'special'
    | 'music'
    | 'tv_13'
    | 'tv_24'
    | 'tv_48'
type AnimeDuration = 'S' | 'D' | 'F'

export type AnimeParams = ContentParamsBase & {
    kind: AnimeKind;
    status: StatusParamsBase;
    duration: AnimeDuration;
    studios: number[];
}

export type AnimeBase = {
    episodes: number;
    episodes_aired: number;
} & ContentEntityBase

export type Anime = {
    id: number;
    rating: string;
    english: string[] | null,
    japanese: string[] | null,
    synonyms: string[] | null,
    license_name_ru: string | null,
    duration: number,
    description: string | null,
    description_html: string | null,
    description_source: string | null,
    franchise: string | null,
    favoured: boolean,
    anons: boolean,
    ongoing: boolean,
    thread_id: number,
    topic_id: number,
    myanimelist_id: number,
    rates_scores_stats: { name: number; value: number }[],
    rates_statuses_stats: { name: string; value: number }[],
    updated_at: Date,
    next_episode_at: Date | null,
    fansubbers: string[],
    fandubbers: string[],
    licensors: string[],
    genres: Genre[],
    studios: Studio[],
    videos: Video[],
    screenshots: Screenshot[],
    user_rate: number | null;
} & AnimeBase