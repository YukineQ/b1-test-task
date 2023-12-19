import Image from 'next/image'

import { Gallery, GalleryScrollContainer, GalleryTitle } from "@/components/gallery";
import { BASE_URL } from '@/config/api';
import { Screenshot } from '../types';

type ScreenshotsProps = {
    screenshots: Screenshot[];
}

export const Screeshots = ({ screenshots }: ScreenshotsProps) => {
    return (
        <Gallery>
            <GalleryTitle>Screenshots</GalleryTitle>
            <GalleryScrollContainer>
                {screenshots.map((item, index) => (
                    <div key={'screenshot' + index} className='h-44 w-44 relative overflow-hidden'>
                        <Image
                            fill
                            className='object-cover'
                            src={BASE_URL + item.original}
                            alt='screenshot'
                            loading='eager'
                        />
                    </div>
                ))}
            </GalleryScrollContainer>
        </Gallery>
    )
}