'use client'

import { useRouter } from 'next/navigation'
import { twMerge } from "tailwind-merge";

import { clearString } from '@/utils/clear-string';
import { Alert, AlertDescription, Button, ConfirmationDialog } from '@/components/ui';
import { Icons } from '@/components/icons';
import { List } from '@/components/expandable-list';
import { useExternalLinks } from '../api';

type ExternalLinksProps = {
    animeId: number;
    className?: string;
}

export const ExternalLinks = ({ animeId, className }: ExternalLinksProps) => {
    const router = useRouter()
    const { data: externalLinks } = useExternalLinks({ animeId })

    return (
        <>
            <List emptyTitle='No links'>
                {externalLinks.map((item) => (
                    <ConfirmationDialog
                        key={item.url}
                        title='Redirecting to External Resource'
                        confirmButton={
                            <Button onClick={() => router.push(item.url)}>
                                Redirect
                            </Button>
                        }
                        triggerButton={
                            <div
                                className={twMerge(
                                    'text-white hover:text-white/70 font-thin text-sm transition',
                                    className
                                )}
                            >
                                {clearString(item.kind, ' ')}
                            </div>
                        }
                    >
                        <Alert>
                            <Icons.alert />
                            <AlertDescription>
                                Click here to be redirected to an external resource for more information.
                            </AlertDescription>
                        </Alert>
                    </ConfirmationDialog>
                ))}
            </List>
        </>
    )
}