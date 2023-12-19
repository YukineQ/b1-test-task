export type FavoritesLinkedType = 'Anime' | 'Manga' | 'Ranobe' | 'Person' | 'Character';
export type FavoritesKind = 'common' | 'seyu' | 'mangaka' | 'producer' | 'person';

export type FavoriteCreateParams = {
    linked_id: number;
    linked_type: FavoritesLinkedType;
    kind?: FavoritesKind;
}