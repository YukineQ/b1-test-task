'use client'

import { SessionProvider } from 'next-auth/react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import './globals.css'
import React from 'react'
import { ShareAnimeModal } from '@/features/animes/components/share/share-anime-modal'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [queryClient] = React.useState(() => new QueryClient())

    return (
        <html lang="en">
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools />
                <SessionProvider>
                    <ShareAnimeModal />
                    <body>{children}</body>
                </SessionProvider>
            </QueryClientProvider>
        </html >
    )
}
