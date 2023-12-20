import Image from 'next/image'

import { Gallery, GalleryScrollContainer, GalleryTitle } from "@/components/gallery";
import { BASE_URL } from '@/config/api';
import { Screenshot } from '../types';

type ScreenshotsProps = {
    screenshots: Screenshot[];
}

export const ScreeshotsGallery = ({ screenshots }: ScreenshotsProps) => {
    return (
        <Gallery>
            <GalleryTitle>Screenshots</GalleryTitle>
            <GalleryScrollContainer>
                {screenshots.map((item, index) => (
                    <div key={'screenshot' + index} className='relative overflow-hidden h-44 w-44'>
                        <Image
                            fill
                            className='object-cover bg-secondary'
                            src={BASE_URL + item.preview}
                            alt='screenshots'
                            priority={index < 6}
                        />
                    </div>
                ))}
            </GalleryScrollContainer>
        </Gallery>
    )
}