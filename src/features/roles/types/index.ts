import { ImageBase } from "@/types";

type Character = {
    id: number;
    name: string;
    russian: string;
    image: ImageBase;
    url: string;
}

export type Role = {
    roles: string[];
    roles_russian: string[];
    character: Character;
}