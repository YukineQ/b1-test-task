import NextImage, { ImageProps as NextImageProps } from 'next/image'
import React from 'react'
import { Skeleton } from '..'
import { BASE_URL } from '@/config/api';

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
                    {...props}
                />
                {!isLoaded &&
                    (<Skeleton className='w-full h-full rounded-none' />)}
            </>
        )
    }
    return (
        <span>
            Error
        </span>
    )
}