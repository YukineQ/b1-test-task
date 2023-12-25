'use client'

import Image from 'next/image'

import { User } from 'next-auth';
import { IconButton, Menu, MenuButton, MenuItem, MenuItems, Separator } from '@/components/ui';
import { Icons } from '@/components/icons';

type UserAccountNavProps = {
    user: User;
}

export const UserAccountNav = ({ user }: UserAccountNavProps) => {
    return (
        <div className='flex items-center justify-center gap-6 -mb-1'>
            <IconButton
                content='Notifications'
                direction='bottom'
            >
                <Icons.bellRing size={19}/>
            </IconButton>
            <Menu>
                <MenuButton>
                    <Image
                        width={26}
                        height={26}
                        className="rounded-full"
                        src={user.image!}
                        alt={user.name!}
                    />
                </MenuButton>
                <MenuItems className='overflow-hidden'>
                    <MenuItem>
                        <div>
                            {user.name}
                        </div>
                    </MenuItem>
                    <Separator className='my-1' />
                    <MenuItem>
                        <div>
                            Anime list
                        </div>
                    </MenuItem>
                    <MenuItem>
                        <div>
                            Manga list
                        </div>
                    </MenuItem>
                    <MenuItem>
                        <div>
                            Achivements
                        </div>
                    </MenuItem>
                    <Separator className='my-1' />
                    <MenuItem>
                        <div>
                            Sign out
                        </div>
                    </MenuItem>
                </MenuItems>
            </Menu >
        </div>
    )
}