import React from 'react'
import { twMerge } from 'tailwind-merge';

import { Spinner } from '@/components/ui/spinner';

const variants = {
    default: 'bg-secondary text-white hover:bg-secondary/70',
    accent: 'bg-danger text-white shadow hover:bg-danger/80',
    outline: 'border border-white/10 text-white hover:border-white/50',
    muted: 'bg-muted-secondary text-white',
    bright: 'bg-bright',
    ghost: 'bg-transparent text-white hover:opacity-80'
}

const sizes = {
    sm: 'text-xs tracking-wide h-[30px] px-3',
    md: 'h-9 px-4',
    lg: 'h-10 px-4'
}

type IconProps =
    | { startIcon: React.ReactElement; endIcon?: never; }
    | { startIcon?: never; endIcon: React.ReactElement; }
    | { startIcon?: undefined; endIcon?: undefined; }

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    variant?: keyof typeof variants;
    size?: keyof typeof sizes;
    isLoading?: boolean;
} & IconProps

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = 'default',
            size = 'md',
            isLoading = false,
            type = 'button',
            startIcon,
            endIcon,
            ...props
        },
        ref
    ) => {
        return (
            <button
                ref={ref}
                type={type}
                className={twMerge(
                    'inline-flex w-full justify-center items-center font-medium transition rounded-md text-sm disabled:opacity-70 disabled:pointer-events-none',
                    sizes[size],
                    variants[variant],
                    className,
                )}
                {...props}
            >
                {isLoading && <Spinner size='xs' />}
                {!isLoading && startIcon}
                <span className='mx-1.5'>{props.children}</span>
                {!isLoading && endIcon}
            </button>
        )
    }
)
Button.displayName = 'Button'