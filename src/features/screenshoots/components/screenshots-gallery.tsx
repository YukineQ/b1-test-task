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
                            width={176}
                            height={176}
                            className='object-cover bg-secondary'
                            src={BASE_URL + item.preview}
                            alt='screenshot'
                        />
                    </div>
                ))}
            </GalleryScrollContainer>
        </Gallery>
    )
}