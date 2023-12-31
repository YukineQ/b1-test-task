'use client'

import { Icons } from "@/components/icons";
import { Alert, AlertDescription, AlertTitle, Skeleton } from "@/components/ui";
import { AnimesGallery } from "@/features/animes/components/animes-gallery"
import { MangasGallerySkeleton } from "@/features/mangas/components/mangas-gallery-skeleton";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const MangasGallery = dynamic(() => import("@/features/mangas/components/mangas-gallery")
    .then(module => module.MangasGallery),
    {
        ssr: false,
        loading: () => <MangasGallerySkeleton />
    }
)

export default function HomePage() {
    return (
        <div className="flex flex-col justify-center gap-6">
            <Alert>
                <Icons.alert />
                <AlertTitle>Dev mode</AlertTitle>
                <AlertDescription>
                    The website is currently in development mode, which means that some features may not be implemented.
                    If you have any suggestions, please, let as know.
                </AlertDescription>
            </Alert>
            <AnimesGallery query={{ order: 'popularity' }} title="Most popular animes" />
            <AnimesGallery query={{ order: 'ranked' }} title="Top ranked animes" />
            <MangasGallery query={{ kind: 'manga', order: 'popularity' }} title="Most popular manga" />
            <MangasGallery query={{ kind: 'one_shot', order: 'popularity' }} title="One shot manga" />
        </div>
    )
}