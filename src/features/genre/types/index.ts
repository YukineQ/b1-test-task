export type GenreEntryType = 'Anime' | 'Manga'

export type Genre = {
    id: number;
    name: string;
    russian: string;
    kind: string;
    entry_type: GenreEntryType;
}