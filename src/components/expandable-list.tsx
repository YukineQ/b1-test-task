'use client'

import React, { useState } from 'react'
import { Button } from './ui';

type ListProps = {
    children: React.ReactElement | React.ReactElement[];
    amountToRender?: number;
    emptyTitle?: string;
}

export const List = React.memo(
    ({ children, amountToRender = 5, emptyTitle = 'No data' }: ListProps) => {
        const [showAll, setShowAll] = useState(false)

        const childrenCount = React.Children.count(children)

        if (childrenCount === 0) {
            return (
                <h5 className='
                    text-white 
                    text-center 
                    text-2xl 
                    font-bold 
                    tracking-tight 
                    text-white/30 
                    py-10
                '
                >
                    {emptyTitle}
                </h5>
            )
        }

        if (amountToRender > childrenCount) {
            return (
                <div className='flex flex-col w-full items-start'>
                    {children}
                </div>
            )
        }

        const initRender = React.Children
            .toArray(children)
            .filter((_, index) => index < amountToRender)

        return (
            <div className='flex flex-col w-full items-start'>
                {showAll ? children : initRender}
                <Button
                    className='mt-2 h-6'
                    size='sm'
                    variant='ghost'
                    onClick={() => setShowAll((state) => !state)}
                >
                    {showAll ? 'hide' : 'show all'}
                </Button>
            </div>
        )
    })
List.displayName='List'