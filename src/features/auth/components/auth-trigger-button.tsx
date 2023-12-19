'use client'

import { signIn } from 'next-auth/react'

import { Icons } from "@/components/icons"
import {
    Alert,
    AlertDescription,
    Button,
    TriggeredDrawer
} from "@/components/ui"

export const AuthTriggerButton = () => {
    return (
        <TriggeredDrawer
            title='Sign in with shikimori'
            triggerButton={
                <Button size='sm'>
                    Shikimori sign in
                </Button>
            }
        >
            <div className='flex flex-col gap-3'>
                <Alert>
                    <Icons.candy />
                    <AlertDescription>
                        Shikimori sign in can give you some extra functionality. Such as moderating your anime list.
                    </AlertDescription>
                </Alert>
                <Button
                    onClick={() => signIn('shikimori')}
                    variant='bright'
                >
                    Go auth page
                </Button>
            </div>
        </TriggeredDrawer>
    )
}