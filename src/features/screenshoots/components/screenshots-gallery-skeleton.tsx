import { Gallery, GalleryScrollContainer } from "@/components/gallery";
import { Skeleton } from '@/components/ui';

export const ScreeshotsGallerySkeleton = () => {
    return (
        <Gallery>
            <Skeleton className='h-9 w-40' />
            <GalleryScrollContainer arrowClassName="hidden">
                {Array(6).fill({}).map((_, index) => (
                    <Skeleton key={'screenshot-skeleton' + index} className='h-44 w-44' />
                ))}
            </GalleryScrollContainer>
        </Gallery>
    )
}