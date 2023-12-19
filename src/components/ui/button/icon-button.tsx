import React from 'react'
import { LucideIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { Tooltip, TooltipPassThroughProps } from '@/components/ui/tooltip'

const variants = {
    default: 'hover:opacity-70 text-white',
}

const sizes = {
    sm: 'h-5 w-5',
    md: 'h-[27px] w-[27px] p-1',
}

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    Icon: LucideIcon;
    size?: keyof typeof sizes;
    variant?: keyof typeof variants;
} & TooltipPassThroughProps

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    (
        {
            type = 'button',
            className,
            Icon,
            size = 'md',
            variant = 'default',
            delay = 500,
            direction = 'left',
            content,
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
                        sizes[size],
                        variants[variant],
                        className,
                    )}
                    {...props}
                >
                        <Icon />
                </button>
            </Tooltip>
        )
    }
)
IconButton.displayName = 'IconButton'