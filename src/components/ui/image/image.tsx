import NextImage, { ImageProps as NextImageProps } from 'next/image'
import React from 'react'
import { Skeleton } from '..'
import { BASE_URL } from '@/config/api';
import { twMerge } from 'tailwind-merge';

type ImageProps = NextImageProps & {
    fromBaseApi?: boolean;
}

export const Image = ({ fromBaseApi = true, src, ...props }: ImageProps) => {
    const [isLoaded, setIsLoaded] = React.useState(false)
    const [isBroken, setIsBroken] = React.useState(false)

    const srcSource = fromBaseApi ? BASE_URL + src : src

    if (!isBroken) {
        return (
            <>
                <NextImage
                    src={srcSource}
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setIsBroken(true)}
                    sizes='100vw'
                    className={twMerge(!isLoaded ? 'opacity-0' : 'opacity-100', 'transition')}
                    {...props}
                />
                {!isLoaded &&
                    (<Skeleton className='w-full h-full rounded-none animate-none' />)}
            </>
        )
    }
    return (
        <span>
            Error
        </span>
    )
}