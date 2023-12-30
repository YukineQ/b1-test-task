import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import { BASE_URL } from '@/config/api';
import { Screenshot } from '../types';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselTitle, Image } from '@/components/ui';

type ScreenshotsProps = {
    screenshots: Screenshot[];
}

export const ScreeshotsGallery = ({ screenshots }: ScreenshotsProps) => {
    return (
        <Carousel
            opts={{
                slidesToScroll: 6,
                align: 'center'
            }}
        >
            <CarouselTitle>Screenshots</CarouselTitle>
            <PhotoProvider>
                <CarouselContent>
                    {screenshots.map((item, index) => (
                        <PhotoView key={index} src={BASE_URL + item.original}>
                            <CarouselItem className='basis-[0.1428]'>
                                <Image
                                    fill
                                    className='h-44 w-44 relative'
                                    src={item.preview}
                                    alt='screenshots'
                                    priority={index < 6}
                                />
                            </CarouselItem>
                        </PhotoView>
                    ))}
                </CarouselContent>
            </PhotoProvider>
            <CarouselNext />
            <CarouselPrevious />
        </Carousel>
    )
}