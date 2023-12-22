'use client'

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui"
import { SearchModal } from "./search-modal"
import { useDisclosure } from "@/hooks/use-disclosure"

export const Search = () => {
    const { open, close, isOpen } = useDisclosure()

    return (
        <>
            <Button
                size='md'
                variant='ghost'
                className="w-fit"
                startIcon={<Icons.search size={20} />}
                onClick={open}
            >
                Search...
            </Button>
            <SearchModal isOpen={isOpen} onClose={close} />
        </>
    )
}