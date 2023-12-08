import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

import { formatDate } from '@/utils/format';
import { ContentEntityBase } from "@/types"
import { BsLink45Deg } from 'react-icons/bs';
import { FaWandMagicSparkles } from 'react-icons/fa6';

type ContentCardProps = {
    data: ContentEntityBase;
    className?: string;
}

export const ContentCard = ({ data, className }: ContentCardProps) => {
    return (
        <div
            className="
                flex 
                flex-col 
                overflow-hidden 
                gap-2 
                group 
                hover:scale-105 
                transition
            "
        >
            <div className="relative flex rounded-md overflow-hidden">
                <div className="relative w-full h-[230px]">
                    <Image
                        src={'https://shikimori.one/' + data.image.preview}
                        fill
                        className="object-cover"
                        priority
                        alt={data.name}
                    />
                </div>
                <div className="
                        absolute
                        opacity-0 
                        group-hover:opacity-100 
                        bg-black/40 
                        backdrop-blur-sm 
                        w-full 
                        h-full 
                        transition 
                        p-3
                    "
                >
                    <div className="relative flex flex-col h-full items-start justify-end">
                        <div className="absolute flex flex-col right-0 top-0 text-white gap-2">
                            <div className="inline-flex items-center justify-center">
                                <BsLink45Deg size={22} />
                            </div>
                            <div className="inline-flex items-center justify-center">
                                <FaWandMagicSparkles size={16} />
                            </div>
                        </div>
                        <div className="inline-flex items-center justify-center gap-1 text-white">
                            <FaStar />
                            <p className="text-lg font-bold leading-none">{data.score}</p>
                        </div>
                        <p className="text-white text-sm">{data.kind}, {formatDate(data.aired_on)}</p>
                    </div>
                </div>
            </div>
            <p className="text-white/80 text-xs">{data.name}</p>
        </div>
    )
}