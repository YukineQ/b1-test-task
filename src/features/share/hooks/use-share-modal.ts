import { create } from "zustand";

import { ContentEntityBase } from "@/types";

type useShareModalStore<T extends ContentEntityBase> = {
    isOpen: boolean;
    data: T | null;
    onOpen: (data: T) => void;
    onClose: () => void;
}

export const useShareModal = create<useShareModalStore<ContentEntityBase>>((set) => ({
    isOpen: false,
    data: null,
    onOpen: (data) => set({ isOpen: true, data: data }),
    onClose: () => set({ isOpen: false, data: null }),
}))