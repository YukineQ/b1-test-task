import React from 'react'
import { twMerge } from "tailwind-merge";

const alertVariants = {
    default: 'border-secondary text-white',
    info: 'border-blue-500 bg-blue-500/10 text-white',
    error: 'border-red-500 bg-red-500/10 text-white'
}

type AlertProps = {
    variant?: keyof typeof alertVariants;
}

const Alert = React.forwardRef<
    HTMLDivElement,
    React.HtmlHTMLAttributes<HTMLDivElement> & AlertProps
>(({ className, variant = 'default', ...props }, ref) => (
    <div
        ref={ref}
        role="alert"
        className={twMerge(
            'relative w-full rounded-xl border-2 p-3 [&>svg]:absolute [&>svg]:left-3 [&>svg]:top-3 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11',
            alertVariants[variant],
            className
        )}
        {...props}
    />
))
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h5
        ref={ref}
        className={twMerge('mb-1 font-medium leading-none tracking-tight', className)}
        {...props}
    />
))
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={twMerge('text-sm [&_p]:leading-relaxed', className)}
        {...props}
    />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription }