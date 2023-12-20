'use client'

import { useScreenshots } from '../api';
import { ScreeshotsGallery } from '@/features/screenshoots/components/screenshots-gallery';

type ScreenshotsProps = {
    animeId: number;
}

export const Screeshots = ({ animeId }: ScreenshotsProps) => {
    const { data: screenshots } = useScreenshots({ animeId })

    return <ScreeshotsGallery screenshots={screenshots} />
}