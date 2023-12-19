import { ImageBase, Linkable, LinkedType } from "@/types";

export type UserBasic = {
    id: number;
    nickname: string;
    avatar: string;
    image: ImageBase;
    last_online_at: Date | null;
    url: string;
}

export type MessageKind = 'Private' | 'FriendRequest' | 'anons' | 'ongoing' | 'released';
export type Message<T extends Linkable = Linkable> = {
    id: number;
    kind: MessageKind;
    real: boolean;
    body: string;
    html_body: string;
    created_at: Date;
    linked_id: number;
    linked_type: LinkedType;
    linked: T | null;
    from: UserBasic;
    to: UserBasic;
}

type Notice = Record<'notice', string>
export type NoticeSuccess = Notice & Record<'success', boolean>

export interface UserFavourite {
    id: number,
    name: string,
    russian: string,
    image: string,
    url: null,
  }
  
export type UserFavourites = Record<'animes' | 'mangas' | 'ranobe' | 'characters' | 'people' | 'mangakas' | 'seyu' | 'producers', UserFavourite>;