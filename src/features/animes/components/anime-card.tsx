import { ROUTES } from "@/config/routes";
import { ContentCard, ContentCardProps } from "@/features/content";

type AnimeCardProps = Omit<ContentCardProps, 'link'> & {
    link?: string;
}

export const AnimeCard = ({
    link,
    data
}: AnimeCardProps) => {
    const linkToAnime = link ? link : ROUTES.ANIME_DETAILS.getRoute(data.id)

    return <ContentCard data={data} link={linkToAnime} />
}