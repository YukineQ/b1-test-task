'use client'

import { useSession } from 'next-auth/react'

import { AuthTriggerButton } from "./auth-trigger-button"
import { IconButton, Spinner } from '@/components/ui'
import { UserAccountNav } from './user-account-nav'
import { Icons } from '@/components/icons'

export const Auth = () => {
    const { data, status } = useSession()

    if (status === 'loading') {
        return (
            <div className='inline-flex justify-center items-center p-1'>
                <Spinner size='xs' />
            </div>
        )
    }
    console.log(data?.user.accessToken)
    if (data?.user) {
        return (
            <div className='inline-flex items-center justify-center gap-4'>
                <IconButton
                    size='md'
                    content='Notifications'
                    direction='bottom'
                    Icon={Icons.bellRing}
                />
                <UserAccountNav user={{ ...data.user }} />
            </div>
        )
    }

    return <AuthTriggerButton />
}