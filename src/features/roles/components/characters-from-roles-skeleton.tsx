import { Gallery, GalleryScrollContainer } from '@/components/gallery';
import { Skeleton } from '@/components/ui';

export const CharactersFromRolesSkeleton = () => {
    return (
        <Gallery>
            <Skeleton className='h-9 w-40' />
            <GalleryScrollContainer arrowClassName='hidden'>
                {Array(12).fill({}).map((_, index) => (
                    <div key={'character-sckeleton' + index} className='flex flex-col items-center justify-center space-y-1.5'>
                        <Skeleton className='h-20 w-20 rounded-full' />
                        <Skeleton className='h-4 w-12' />
                        <Skeleton className='h-4 w-12' />
                        <Skeleton className='h-4 w-12' />
                    </div>
                ))}
            </GalleryScrollContainer>
        </Gallery>
    )
}