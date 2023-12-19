'use client'

import Image from 'next/image'

import { BASE_URL } from '@/config/api';
import { Badge, Button } from '@/components/ui';
import { formatDate } from '@/utils/format';
import { ExternalLinks } from './external-links';
import { List } from '@/components/expandable-list';
import { useAnime } from '../api';

type AnimeDetailsProps = {
    animeId: number;
}

export const AnimeDetails = ({ animeId }: AnimeDetailsProps) => {
    const { data: anime } = useAnime({ animeId })

    return (
        <>
            <div className='inline-flex items-center gap-2'>
                {anime.genres.map((item) => (
                    <Badge key={item.id}>{item.name}</Badge>
                ))}
            </div>
            <h2 className='text-4xl font-bold tracking-tight text-white pt-4'>{anime.name}</h2>
            <div className='flex items-start justify-between pt-4 gap-8'>
                <div className='flex flex-row gap-10'>
                    <Image
                        src={BASE_URL + anime.image.original}
                        className='rounded-xl border border-white/10'
                        alt={anime.name}
                        width={200}
                        height={300}
                        priority
                    />
                    <div className='p-6 bg-secondary rounded-lg min-h-[320px]'>
                        <div className='flex flex-col space-y-5'>
                            <div className='inline-flex gap-1'>
                                <div className='w-40 text-sm text-white/80'>Studios</div>
                                {anime.studios.map((item) => (
                                    <Badge key={item.id}>{item.name}</Badge>
                                ))}
                            </div>
                            <div className='inline-flex gap-1'>
                                <div className='w-40 text-sm text-white/80'>Kind</div>
                                <Badge>{anime.kind}</Badge>
                            </div>
                            <div className='inline-flex gap-1'>
                                <div className='w-40 text-sm text-white/80'>Status</div>
                                <Badge>{anime.status}</Badge>
                            </div>
                            <div className='inline-flex gap-1 text-white'>
                                <div className='w-40 text-sm text-white/80'>Aired on</div>
                                <Badge>{formatDate(anime.aired_on)}</Badge>
                            </div>
                            <div className='inline-flex gap-1 text-white'>
                                <div className='w-40 text-sm text-white/80'>Total episodes</div>
                                {anime.episodes}
                            </div>
                            <div className='inline-flex gap-1 text-white'>
                                <div className='w-40 text-sm text-white/80'>Rating</div>
                                <Badge>{anime.rating}</Badge>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-6 bg-secondary rounded-lg flex-1 min-h-[320px]'>
                    <div className='flex flex-col'>
                        <h6 className='text-lg text-white/70'>Dubbers</h6>
                        <List amountToRender={10} emptyTitle='No dubbers'>
                            {anime.fandubbers.map((name) => (
                                <p key={name} className='text-white font-thin text-sm'>
                                    {name}
                                </p>
                            ))}
                        </List>
                    </div>
                </div>
                <div className='p-6 bg-secondary rounded-lg min-h-[320px]'>
                    <div className='flex flex-col space-y-4'>
                        <div className='bg-primary rounded-lg py-3 px-4 inline-flex gap-4 shrink-0'>
                            <div className='p-4 inline-flex items-center justify-center shrink-0 bg-secondary rounded-md text-white text-3xl font-bold'>
                                {anime.score}
                            </div>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <h5 className='text-white text-xl font-semibold tracking-tight'>Shikimori rate</h5>
                                <Button disabled variant='accent'>Rate anime</Button>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <h6 className='text-lg text-white/70'>External links</h6>
                            <ExternalLinks animeId={animeId} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}