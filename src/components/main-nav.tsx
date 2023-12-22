import Link from 'next/link'
import { MainNavItem } from '@/types';
import { Icons } from './icons';
import { siteConfig } from '@/config/site';
import { twMerge } from 'tailwind-merge';

import { Auth } from '@/features/auth/components';
import { IconButton } from './ui';
import { Search } from '@/features/search/components';

type MainNavProps = {
    items?: MainNavItem[];
    children?: React.ReactNode;
}

export const MainNav = ({ items, children }: MainNavProps) => {
    return (
        <header className="bg-transparent max-w-6xl mx-auto">
            <div className="py-1 border-b border-white/10">
                <div className="h-11 flex items-center justify-between">
                    <Link href='/' className="text-white inline-flex justify-center items-center gap-1.5">
                        <Icons.logo className='text-danger' />
                        <h2 className="text-xl font-bold">{siteConfig.name}</h2>
                    </Link>
                    {items?.length ? (
                        <nav className="inline-flex justify-center items-center gap-1">
                            {items.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href={item.disabled ? '#' : item.href}
                                    className={twMerge(
                                        'text-sm font-semibold text-white px-3 py-1.5 rounded-full hover:bg-secondary transition',
                                        item.disabled && 'cursor-not-allowed opacity-80'
                                    )}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </nav>
                    ) : null}
                    <div className='inline-flex items-center justify-center gap-2'>
                        <Search />
                        <Auth />
                    </div>
                </div>
            </div>
        </header>
    )
}