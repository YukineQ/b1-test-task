'use client'

import { CharactersFromRolesGallery } from '@/features/roles';
import { useRoles } from '../api';

type RolesGalleryProps = {
    animeId: number;
}

export const RolesGallery = ({ animeId }: RolesGalleryProps) => {
    const { data: roles } = useRoles({ animeId })

    return <CharactersFromRolesGallery roles={roles} />

}