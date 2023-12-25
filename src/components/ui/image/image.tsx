import NextImage, { ImageProps as NextImageProps } from 'next/image'
import React from 'react'
import { Skeleton } from '..'
import { BASE_URL } from '@/config/api';
import { twMerge } from 'tailwind-merge';

type ImageProps = NextImageProps & {
    fromBaseApi?: boolean;
    className?: string;
}

export const Image = ({ fromBaseApi = true, src, className, ...props }: ImageProps) => {
    const [isLoaded, setIsLoaded] = React.useState(false)
    const [isBroken, setIsBroken] = React.useState(false)

    const pathToImage = fromBaseApi ? BASE_URL + src : src

    if (!isBroken) {
        return (
            <div className={twMerge('transition-opacity', className)}>
                <NextImage
                    src={pathToImage}
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setIsBroken(true)}
                    sizes='100vw'
                    className={twMerge(
                        'opacity-0 transition-opacity',
                        isLoaded && 'opacity-100',
                    )}
                    {...props}
                />
                {!isLoaded &&
                    (<Skeleton className='w-full h-full rounded-none' />)}
            </div>
        )
    }
    return (
        <span>
            Error
        </span>
    )
}