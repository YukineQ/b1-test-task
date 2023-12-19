'use client'

import {
    Menu as UIMenu,
    MenuItemsProps,
    MenuItemProps,
    MenuProps,
    Transition,
} from "@headlessui/react"
import React from "react";
import { twMerge } from "tailwind-merge";

const MenuButton = UIMenu.Button

const Menu = ({
    className,
    as = 'div',
    ...props
}: MenuProps<React.ElementType>) => {
    return (
        <UIMenu
            as={as}
            className={twMerge(
                'relative inline-block text-left',
                className
            )}
            {...props}
        >
            {props.children}
        </UIMenu>
    )
}

const MenuItems = ({ className, ...props }: MenuItemsProps<React.ElementType>) => {
    return (
        <Transition
            as={React.Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <UIMenu.Items
                className={twMerge(
                    'absolute p-1 right-0 mt-2 origin-top bg-secondary rounded-md border border-white/10 py-1.5 text-white/70 w-52 z-50 shadow',
                    className
                )}
            >
                {props.children}
            </UIMenu.Items>
        </Transition>
    )
}

const MenuItem = ({ className, ...props }: MenuItemProps<React.ElementType>) => {
    return (
        <UIMenu.Item
            className={twMerge('relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50', className)}
            {...props}
        >
            {props.children}
        </UIMenu.Item>
    )
}

export { Menu, MenuButton, MenuItems, MenuItem }