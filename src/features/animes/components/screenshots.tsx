'use client'

import Image from 'next/image'

import { Gallery, GalleryScrollContainer, GalleryTitle } from "@/components/gallery";
import { BASE_URL } from '@/config/api';
import { useScreenshots } from '../api';

type ScreenshotsProps = {
    animeId: number;
}

export const Screeshots = ({ animeId }: ScreenshotsProps) => {
    const { data: screenshots } = useScreenshots({ animeId })

    return (
        <Gallery>
            <GalleryTitle>Screenshots</GalleryTitle>
            <GalleryScrollContainer>
                {screenshots.map((item) => (
                    <div key={item.original} className='h-44 w-44 relative overflow-hidden'>
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