'use client'

import { Spinner } from "@/components/ui"
import { useMessages } from "../api/get-messages"

export const MessagesDropdown = ({ userId }: { userId: number | string }) => {
    const { data: messages, isLoading } = useMessages({ userId })

    if (isLoading) return <Spinner size="xs" />

    if (!messages) return null

    return (
        <>
            {messages.map((item, index) => (
                <div key={item.id}>
                    {item.body}
                </div>
            ))}
        </>
    )
}