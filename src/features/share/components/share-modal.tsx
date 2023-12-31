import { Drawer, Image } from "@/components/ui"
import { Separator } from '@/components/ui'

import { ShareCopyLink } from "./share-via-copy-link"
import { ShareSocialLink } from './share-via-social-link'
import { useShareModal } from "../hooks/use-share-modal"

export const ShareModal = () => {
    const { isOpen, onClose, data } = useShareModal()

    if (!data) return null

    const currentLocation = window.location.href
    const pathToContent = `${currentLocation}/${data.id}`

    return (
        <Drawer
            title="Share"
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="flex flex-col items-center">
                <div className='flex w-full gap-4'>
                    <Image
                        src={data.image.preview}
                        alt={data.name}
                        className='rounded-xl w-[50px] h-[70px]'
                        fill
                        priority
                    />
                    <div>
                        <h4 className='text-white font-bold line-clamp-2 max-h-14'>{data.name}</h4>
                        <p className='text-white/60 text-xs'>
                            {data.score} • {data.status}
                        </p>
                    </div>
                </div>
                <Separator />
                <div className='flex flex-col w-full gap-4 pt-8'>
                    <ShareCopyLink stringToCopy={pathToContent} />
                    <ShareSocialLink link={pathToContent} data={data} />
                </div>
            </div>
        </Drawer>
    )
}