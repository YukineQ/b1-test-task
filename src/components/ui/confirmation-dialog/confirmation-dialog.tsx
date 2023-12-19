import React from 'react'

import { useDisclosure } from "@/hooks/use-disclosure";
import { Button, Drawer } from '..';

type ConfirmationDialogProps = {
    triggerButton: React.ReactElement;
    confirmButton: React.ReactElement;
    title: string;
    children?: React.ReactNode;
    cancelButtonText?: string;
    isDone?: boolean;
}

export const ConfirmationDialog = ({
    triggerButton,
    confirmButton,
    title,
    children,
    cancelButtonText = 'Cancel',
    isDone = false
}: ConfirmationDialogProps) => {
    const { close, isOpen, open } = useDisclosure()

    const cancelButtonRef = React.useRef(null)

    React.useEffect(() => {
        if (!isDone) {
            close()
        }
    }, [isDone, close])

    return (
        <>
            {React.cloneElement(triggerButton, { onClick: open })}
            <Drawer
                isOpen={isOpen}
                onClose={close}
                title={title}
                renderFooter={() => (
                    <div className='inline-flex justify-center items-center gap-4 w-full'>
                        <Button
                            variant='accent'
                            onClick={close}
                            ref={cancelButtonRef}
                        >
                            {cancelButtonText}
                        </Button>
                        {confirmButton}
                    </div>
                )}
            >
                {children}
            </Drawer>
        </>
    )
}