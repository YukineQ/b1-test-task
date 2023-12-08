import Image from 'next/image'

import { Drawer } from "@/components/ui/drawer"
import { Separator } from '@/components/ui'

import { ShareCopyLink } from "./share-via-copy-link"
import { ShareSocialLink } from './share-via-social-link'
import { useShareModal } from "../../hooks/use-share-modal"

export const ShareAnimeModal = () => {
    const { isOpen, onClose, data: anime } = useShareModal()

    if (!anime) return null

    const currentLocation = window.location.href
    const pathToAnime = `${currentLocation}/${anime.id}`

    return (
        <Drawer
            title="Share"
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="flex flex-col items-center">
                <div className='flex w-full gap-4'>
                    <Image
                        src={'https://shikimori.one/' + anime.image.preview}
                        alt={anime.name}
                        className='rounded-xl'
                        priority
                        width={50}
                        height={80}
                    />
                    <div>
                        <h4 className='text-white font-bold line-clamp-2 max-h-14'>{anime.name}</h4>
                        <p className='text-white/60 text-xs'>
                            {anime.score} • {anime.status}
                        </p>
                    </div>
                </div>
                <Separator />
                <div className='flex flex-col w-full gap-4 pt-8'>
                    <ShareCopyLink stringToCopy={pathToAnime} />
                    <ShareSocialLink link={pathToAnime} anime={anime} />
                </div>
            </div>
        </Drawer>
    )
}