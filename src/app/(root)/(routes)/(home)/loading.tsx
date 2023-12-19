import { MangasGallerySkeleton } from "@/features/mangas/components/mangas-gallery-skeleton"

export default async function Loading() {
    return (
        <div className="flex flex-col gap-6">
            <MangasGallerySkeleton />
            <MangasGallerySkeleton />
        </div>
    )
}