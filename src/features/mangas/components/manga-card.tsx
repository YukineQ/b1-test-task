import { ROUTES } from "@/config/routes";
import { ContentCard, ContentCardProps } from "@/features/content";

type MangaCardProps = Omit<ContentCardProps, 'link'> & {
    link?: string;
}

export const MangaCard = ({
    link,
    data
}: MangaCardProps) => {
    const linkToManga = link ? link : ROUTES.MANGA_DETAILS.getRoute(data.id)

    return <ContentCard data={data} link={linkToManga} />
}