import React from "react"

import { ContentEntityBase } from "@/types"
import { useShareModal } from "../hooks/use-share-modal"

type ShareProps = {
    data: ContentEntityBase;
    children: React.ReactElement;
}

export const Share = ({ data, children }: ShareProps) => {
    const { onOpen } = useShareModal()

    return React.cloneElement(children, {
        onClick: (e: React.ChangeEvent) => {
            e.preventDefault()
            onOpen(data)
        }
    })
}