import React from 'react'
import { twMerge } from 'tailwind-merge'

const variants = {
    default: 'hover:opacity-70 text-white',
    rounded: 'bg-secondary rounded-full p-1 border border-white/10 shadow text-white hover:bg-muted-secondary easy-in-out'
}

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    variant?: keyof typeof variants;
    children: React.ReactElement;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    (
        {
            type = 'button',
            className,
            variant = 'default',
            content,
            children,
            ...props
        },
        ref
    ) => {
        return (
            <button
                ref={ref}
                type={type}
                className={twMerge(
                    'inline-flex items-center justify-center transition',
                    variants[variant],
                    className,
                )}
                {...props}
            >
                {children}
            </button>
        )
    }
)
IconButton.displayName = 'IconButton'