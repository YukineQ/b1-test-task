'use client'

import React from 'react'

import { useDisclosure } from '@/hooks/use-disclosure';
import { DrawerProps, Drawer } from "@/components/ui/drawer";

type TriggeredDrawerProps = {
    triggerButton: React.ReactElement;
    title: string;
    children: React.ReactNode;
    size?: DrawerProps['size'];
}

export const TriggeredDrawer = ({
    triggerButton,
    title,
    children,
    size = 'xs'
}: TriggeredDrawerProps) => {
    const { isOpen, open, close } = useDisclosure()

    return (
        <>
            {React.cloneElement(triggerButton, { onClick: open })}
            <Drawer
                isOpen={isOpen}
                onClose={close}
                title={title}
                size={size}
            >
                {children}
            </Drawer>
        </>
    )
}