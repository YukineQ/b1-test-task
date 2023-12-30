import Link from 'next/link'

import { formatDate } from '@/utils/format';
import { ContentEntityBase } from "@/types"
import { Icons } from '@/components/icons';
import { IconButton, Image } from '@/components/ui';
import React from 'react';
import { Transition } from '@headlessui/react';
import { Share } from '@/features/share';

export type ContentCardProps = {
    data: ContentEntityBase;
    link: string;
    imagePriority?: boolean;
}

export const ContentCard = ({ data, link, imagePriority }: ContentCardProps) => {
    const [isVisible, setIsVisible] = React.useState(false)

    return (
        <Link
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            href={link}
            className="
                flex 
                flex-col 
                gap-2 
                group 
                hover:scale-105 
                will-change-transform
                transition
                duration-300 
                ease-in-out
                w-[149px] 
            "
        >
            <div className="relative flex rounded-md overflow-hidden">
                <Image
                    src={data.image.original}
                    fill
                    className="object-cover w-full h-[230px]"
                    priority={imagePriority}
                    alt={data.name}
                />
                <Transition
                    as={React.Fragment}
                    show={isVisible}
                    enter="ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="
                        absolute
                        bg-black/80
                        w-full 
                        h-full 
                        transition
                        rounded-md
                        p-3
                    "
                    >
                        <div className="relative flex flex-col h-full items-start justify-end">
                            <div className="absolute flex flex-col right-0 top-0 text-white gap-2">
                                <Share data={data}>
                                    <IconButton content="Share">
                                        <Icons.link size={20} />
                                    </IconButton>
                                </Share>
                                <IconButton content="Similar">
                                    <Icons.sparkles size={20} />
                                </IconButton>
                            </div>
                            <div className="inline-flex items-center justify-center gap-1 text-white">
                                <Icons.star fill='white' size={18} />
                                <p className="text-lg font-bold leading-none">{data.score}</p>
                            </div>
                            <p className="text-white text-sm">{data.kind}, {formatDate(data.aired_on)}</p>
                        </div>
                    </div>
                </Transition>
            </div>
            <p className="text-white/80 text-xs">{data.name}</p>
        </Link>
    )
}