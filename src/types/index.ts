export type ImageBase = {
    original: string;
    preview: string;
    x96: string;
    x48: string;
}

export type ContentEntityBase = {
    id: number,
    name: string,
    russian: string,
    image: ImageBase;
    url: string;
    kind: string,
    score: string,
    status: string,
    aired_on: Date;
    released_on: Date | null;
}

type OrderParams = 'id' | 'id_desc' | 'ranked' | 'popularity' | 'name' | 'aired_on' | 'episodes' | 'status' | 'random';
export type StatusParamsBase = 'anons' | 'ongoing' | 'released';

export type ContentParamsBase = {
    page: number;
    limit: number;
    order: OrderParams;
    score: number;
    genre: number[];
    search: string;
}

export type MainNavItem = {
    title: string;
    href: string;
    disabled?: boolean;
}

export type Linkable = {}
export type LinkedType = 'Anime'
    | 'Manga'
    | 'Ranobe'
    | 'Character'
    | 'Person'
    | 'Club'
    | 'ClubPage'
    | 'Critique'
    | 'Review'
    | 'Contest'
    | 'CosplayGallery'
    | 'Collection'
    | 'Article'
    | null;
