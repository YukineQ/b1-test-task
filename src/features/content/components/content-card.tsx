import Image from 'next/image'
import Link from 'next/link'

import { formatDate } from '@/utils/format';
import { ContentEntityBase } from "@/types"
import { BASE_URL } from '@/config/api';
import { Icons } from '../../../components/icons';
import { IconButton } from '../../../components/ui';
import React from 'react';
import { Transition } from '@headlessui/react';

export type ContentCardProps = {
    data: ContentEntityBase;
    link: string;
}

export const ContentCard = ({ data, link }: ContentCardProps) => {
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
                transition
                duration-300
                w-[149px] 
            "
        >
            <div className="relative flex rounded-md">
                <div className="w-full h-[230px]">
                    <Image
                        src={BASE_URL + data.image.preview}
                        fill
                        className="object-cover rounded-md"
                        loading='eager'
                        alt={data.name}
                    />
                </div>
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
                                <IconButton
                                    size='sm'
                                    Icon={Icons.link}
                                    content="Share"
                                    onClick={(e) => {
                                        e.preventDefault()
                                    }}
                                />
                                <IconButton
                                    size='sm'
                                    Icon={Icons.sparkles}
                                    content="Similar"
                                />
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