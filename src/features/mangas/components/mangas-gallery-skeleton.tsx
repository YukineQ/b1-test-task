import { Skeleton } from "@/components/ui"
import { ContentCardSkeleton } from "@/features/content/components/content-card-skeleton"
import { twMerge } from "tailwind-merge"

export const MangasGallerySkeleton =  ({ className }: { className?: string }) => {
    return (
        <div>
            <Skeleton className="h-10 w-96 mb-4 mt-10" />
            <div className={twMerge("flex justify-between", className)}>
                {Array(7).fill({}).map((_, index) => (
                    <ContentCardSkeleton key={'card-skeleton' + index} />
                ))}
            </div>
        </div>
    )
}