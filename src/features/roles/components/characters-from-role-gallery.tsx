import { BASE_URL } from '@/config/api';
import { Role } from '../types';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselTitle, Image } from '@/components/ui';

type CharactersFromRolesGalleryProps = {
    roles: Role[];
}

export const CharactersFromRolesGallery = ({ roles }: CharactersFromRolesGalleryProps) => {
    const characters = roles
        .map((item) => item.character)
        .filter((character) => character)

    return (
        <Carousel
            opts={{
                slidesToScroll: 12,
                align: 'center'
            }}
        >
            <CarouselTitle>Characters</CarouselTitle>
            <CarouselContent>
                {characters.map((item, index) => (
                    <CarouselItem key={item.id} className='basis-[8.3333%] w-20 h-fit flex flex-col items-center justify-center space-y-1.5'>
                        <Image
                            fill
                            className='object-cover bg-secondary h-20 w-20 rounded-full'
                            src={item.image.preview}
                            alt={item.name}
                            priority={index < 12}
                        />
                        <p className='text-white/80 text-center text-sm font-semibold break-words'>{item.name}</p>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
        </Carousel>
    )
}