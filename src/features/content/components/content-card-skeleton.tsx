import { Skeleton } from "@/components/ui"

export const ContentCardSkeleton = () => {
    return (
        <>
            <div className="flex flex-col gap-2 w-[149px]">
                <Skeleton className="w-full h-[230px] rounded-md" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
            </div>
        </>
    )
}