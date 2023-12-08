import Link from 'next/link'
import { LuCommand } from "react-icons/lu";
import { Button } from '@/components/ui/button';
import { SiShikimori } from "react-icons/si";

const navigation = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Anime',
        href: '/animes'
    },
    {
        label: 'Manga',
        href: '/mangas'
    }
]

export const Header = () => {
    return (
        <header>
            <div className="bg-transparent max-w-6xl mx-auto">
                <div className="py-1 border-b border-white/10">
                    <div className="h-11 flex items-center justify-between">
                        <div className="text-white inline-flex justify-center gap-1.5">
                            <LuCommand className='text-[#EA003D]' size={26} />
                            <h2 className="text-xl font-bold">AniDB</h2>
                        </div>
                        <div className="inline-flex justify-center items-center gap-1">
                            {navigation.map((item, idx) => (
                                <Link
                                    key={'nav' + idx}
                                    href={item.href}
                                    className='text-sm font-semibold text-white px-3 py-1.5 rounded-full hover:bg-[#202122] transition'
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                        <div className=''>
                            <Button size='sm'>Shikimori sign in</Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}