'use client'

import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IoIosClose } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'

const sizes = {
    xs: 'max-w-[380px]',
    sm: 'max-w-sm',
    md: 'max-w-md',
}

export type DrawerProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    size?: keyof typeof sizes;
    renderFooter?: () => React.ReactNode;
    initialFocus?: React.MutableRefObject<null>;
}

export const Drawer = ({
    title,
    children,
    isOpen,
    onClose,
    renderFooter,
    size = 'xs',
    initialFocus,
}: DrawerProps) => {
    return (
        <Transition appear show={isOpen} as={React.Fragment}>
            <Dialog
                as='div'
                className='relative z-10'
                onClose={onClose}
                initialFocus={initialFocus}
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
                        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
                    </Transition.Child>
                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={React.Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className={twMerge(`
                                        w-full 
                                        transform 
                                        overflow-hidden 
                                        rounded-2xl 
                                        bg-primary
                                        text-left 
                                        align-middle 
                                        shadow-xl 
                                        transition-all
                                        p-6
                                        border
                                        border-white/10
                                    `,
                                        sizes[size]
                                    )}
                                >
                                    <div className='flex flex-col'>
                                        <div className='
                                                absolute 
                                                flex 
                                                items-center 
                                                justify-center 
                                                right-2 
                                                top-2 
                                                p-0.5 
                                                bg-red-500/10 
                                                hover:ring-1 
                                                ring-red-500 
                                                rounded-xl 
                                                text-red-500 
                                                transition'
                                        >
                                            <IoIosClose size={28} />
                                        </div>
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-white"
                                        >
                                            {title}
                                        </Dialog.Title>
                                        <div className="mt-6">
                                            {children}
                                        </div>
                                        {renderFooter && (
                                            <div className='w-full flex justify-end'>
                                                <div className="mt-4">
                                                    {renderFooter()}
                                                </div>
                                            </div>
                                        )}
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