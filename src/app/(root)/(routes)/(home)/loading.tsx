'use client'

import { MangasGallerySkeleton } from "@/features/mangas/components/mangas-gallery-skeleton"

export default function Loading() {
    return (
        <div className="flex flex-col gap-6">
            <MangasGallerySkeleton />
            <MangasGallerySkeleton />
        </div>
    )
}