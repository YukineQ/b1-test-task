import { create } from "zustand";
import { Anime } from "../types";

type useShareModalStore<Anime> = {
    isOpen: boolean;
    data: Anime | null;
    onOpen: (data: Anime) => void;
    onClose: () => void;
}

export const useShareModal = create<useShareModalStore<Anime>>((set) => ({
    isOpen: false,
    data: null,
    onOpen: (data) => set({ isOpen: true, data: data }),
    onClose: () => set({ isOpen: false, data: null }),
}))