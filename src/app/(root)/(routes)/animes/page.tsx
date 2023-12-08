import { LinkBreadCrumbs } from "@/components/link-breadcrumbs";
import { AnimesList } from "@/features/animes/components/animes-list";

export default function AnimesPage() {
    return (
        <>
            <LinkBreadCrumbs />
            <AnimesList />
        </>
    )
}