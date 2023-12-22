import React from 'react'
import { LucideIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { Tooltip, TooltipPassThroughProps } from '@/components/ui/tooltip'

const variants = {
    default: 'hover:opacity-70 text-white',
}

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    variant?: keyof typeof variants;
    children: React.ReactElement;
} & TooltipPassThroughProps

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    (
        {
            type = 'button',
            className,
            variant = 'default',
            delay = 500,
            direction = 'left',
            content,
            children,
            ...props
        },
        ref
    ) => {
        return (
            <Tooltip content={content} direction={direction} delay={delay}>
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
            </Tooltip>
        )
    }
)
IconButton.displayName = 'IconButton'