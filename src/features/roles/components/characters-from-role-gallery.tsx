import Image from 'next/image'
import { Gallery, GalleryScrollContainer, GalleryTitle } from "@/components/gallery";
import { BASE_URL } from '@/config/api';
import { Role } from '../types';

type CharactersFromRolesGalleryProps = {
    roles: Role[];
}

export const CharactersFromRolesGallery = ({ roles }: CharactersFromRolesGalleryProps) => {
    const characters = roles
        .map((item) => item.character)
        .filter((character) => character)

    return (
        <Gallery>
            <GalleryTitle>Characters</GalleryTitle>
            <GalleryScrollContainer arrowClassName='top-[22%]'>
                {characters.map((item) => (
                    <div key={item.id} className='flex flex-col items-center justify-center h-fit space-y-1.5'>
                        <div className='h-20 w-20 rounded-full relative overflow-hidden'>
                            <Image
                                fill
                                className='object-cover bg-secondary animate-pulse'
                                src={BASE_URL + item.image.preview}
                                alt={item.name}
                                loading='lazy'
                            />
                        </div>
                        <p className='text-white/80 text-center text-sm font-semibold'>{item.name}</p>
                    </div>
                ))}
            </GalleryScrollContainer>
        </Gallery>
    )
}