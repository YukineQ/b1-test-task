import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import { Gallery, GalleryScrollContainer, GalleryTitle } from "@/components/gallery";
import { BASE_URL } from '@/config/api';
import { Screenshot } from '../types';
import { Image } from '@/components/ui';

type ScreenshotsProps = {
    screenshots: Screenshot[];
}

export const ScreeshotsGallery = ({ screenshots }: ScreenshotsProps) => {
    return (
        <Gallery>
            <GalleryTitle>Screenshots</GalleryTitle>
            <PhotoProvider>
                <GalleryScrollContainer>
                    {screenshots.map((item, index) => (
                        <PhotoView key={index} src={BASE_URL + item.original}>
                            <div className='relative overflow-hidden h-44 w-44'>
                                <Image
                                    fill
                                    className='object-cover'
                                    src={BASE_URL + item.preview}
                                    alt='screenshots'
                                    priority={index < 6}
                                />
                            </div>
                        </PhotoView>
                    ))}
                </GalleryScrollContainer>
            </PhotoProvider>
        </Gallery>
    )
}