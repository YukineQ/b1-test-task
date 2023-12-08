import { ContentEntityBase, ContentParamsBase, StatusParamsBase } from "@/types";

export type Manga = {
    volumes: number;
    chapters: number;
} & ContentEntityBase

export type MangaParams = ContentParamsBase & {
    kind: 'manga' | 'manhwa' | 'manhua' | 'light_novel' | 'novel' | 'one_shot' | 'doujin';
    status: StatusParamsBase & 'paused' | 'discontinued';
}