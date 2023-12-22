'use client'

import React, { Suspense } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { IconButton, Input, Spinner } from "@/components/ui"
import { Icons } from "@/components/icons"
import { SearchResult } from "./search-result"
import { useDebounce } from "@/hooks/use-debounce"

type SearchModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
    const [search, setSearch] = React.useState('')
    const debouncedSearch = useDebounce(search, 300)

    const handleClose = () => {
        setSearch('')
        onClose()
    }

    return (
        <Transition appear show={isOpen} as={React.Fragment}>
            <Dialog
                as='div'
                className='relative z-10'
                onClose={handleClose}
            >
                <div className='absolute inset-0 overflow-hidden'>
                    <Dialog.Overlay className='absolute inset-0' />
                    <Transition.Child
                        as={React.Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm" />
                    </Transition.Child>
                    <div className='fixed inset-0 overflow-y-auto w-full'>
                        <div className="flex min-h-full items-start justify-center p-4 text-center w-full">
                            <Transition.Child
                                as={React.Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className='w-full relative'>
                                    <div className="absolute right-5 top-4">
                                        <IconButton
                                            content="Click to close search."
                                            onClick={handleClose}
                                        >
                                            <Icons.cross size={30}/>
                                        </IconButton>
                                    </div>
                                    <div className="max-w-4xl mx-auto">
                                        <div className="flex flex-col items-start pt-14 gap-10">
                                            <h2 className="text-white text-5xl font-bold tracking-tight">Search</h2>
                                            <Input
                                                className='shadow-bottom border-none'
                                                placeholder="Animes, Mangas"
                                                value={search}
                                                onChange={e => setSearch(e.target.value)}
                                            />
                                            <div className="flex items-center justify-center w-full">
                                                {!!search && (
                                                    <Suspense fallback={<Spinner size='sm' />}>
                                                        <SearchResult
                                                            search={debouncedSearch}
                                                            closeModal={handleClose}
                                                        />
                                                    </Suspense>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}