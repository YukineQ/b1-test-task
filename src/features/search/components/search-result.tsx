'use client'

import Link from "next/link"
import { LucideIcon } from "lucide-react"

import { Icons } from "@/components/icons"
import { ROUTES } from "@/config/routes"
import { useAnimeList } from "@/features/animes/api"
import { useMangas } from "@/features/mangas/api/get-mangas"
import { ContentEntityBase } from "@/types"
import { formatDate } from "@/utils/format"

export const SearchResult = ({
    search,
    closeModal
}: {
    search: string,
    closeModal: () => void;
}) => {
    const { data: animes } = useAnimeList({ search: search, limit: 4 })
    const { data: mangas } = useMangas({ search: search, limit: 4 })

    if (!animes.length && !mangas.length) return <h3 className="text-white font-medium text-lg">No results</h3>

    return (
        <div className="flex flex-wrap">
            {animes.map((item) => (
                <ResultCard
                    key={item.id}
                    data={item}
                    Icon={Icons.shell}
                    link={ROUTES.ANIME_DETAILS.getRoute(item.id)}
                    onClick={closeModal}
                />
            ))}
            {mangas.map((item) => (
                <ResultCard
                    key={item.id}
                    data={item}
                    Icon={Icons.book}
                    link={ROUTES.MANGA_DETAILS.getRoute(item.id)}
                    onClick={closeModal}
                />
            ))}
        </div>
    )
}

type ResultCardProps = {
    data: ContentEntityBase;
    Icon: LucideIcon;
    link: string;
    onClick?: () => void;
}

const ResultCard = ({ data, Icon, link, onClick }: ResultCardProps) => {
    return (
        <Link href={link} onClick={onClick} className="flex gap-2 w-1/2 py-3 group">
            <Icon className="text-danger" />
            <div className="flex flex-col items-start">
                <span className="text-white text-sm font-medium text-left pr-2 group-hover:text-danger transition-colors">
                    {data.name}
                </span>
                <span className="text-white/70 text-xs">
                    {formatDate(data.aired_on)}
                </span>
            </div>
        </Link>
    )
}