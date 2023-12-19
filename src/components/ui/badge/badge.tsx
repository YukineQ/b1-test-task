import { twMerge } from "tailwind-merge";

const variants = {
    default: 'text-white border-white/10 hover:opacity-80'
}

type BadgeProps = {
    variant?: keyof typeof variants;
} & React.HTMLAttributes<HTMLDivElement>

export const Badge = ({
    variant = 'default',
    className,
    ...props
}: BadgeProps) => {
    return (
        <div
            className={twMerge(
                'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition',
                variants[variant],
                className,
            )}
            {...props}
        />
    )
}