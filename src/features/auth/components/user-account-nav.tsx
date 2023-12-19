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
        <div className='inline-flex items-center justify-center gap-4'>
            <IconButton
                size='md'
                content='Notifications'
                direction='bottom'
                Icon={Icons.bellRing}
            />
            <Menu>
                <MenuButton className='p-0'>
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