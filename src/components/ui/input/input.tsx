import React from "react";
import { twMerge } from 'tailwind-merge'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ type = 'text', className, ...props }, ref) => {
        return (
            <input
                ref={ref}
                type={type}
                className={twMerge(
                    'h-9 px-3 py-1 w-full rounded-lg bg-white/90 border text-sm shadow outline-none font-medium transition placeholder:font-medium text-foreground disabled:text-opacity-50',
                    className
                )}
                {...props}
            />
        )
    }
)
Input.displayName = 'Input'