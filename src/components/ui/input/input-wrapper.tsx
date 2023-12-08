import { FieldError } from "react-hook-form";
import { twMerge } from 'tailwind-merge'

type InputWrapperProps = {
    label?: string;
    className?: string;
    children: React.ReactNode;
    description?: string;
    error?: FieldError | undefined;
}

export type InputWrapperPassThroughProps = Omit<
    InputWrapperProps,
    "className" | "children"
>

export const InputWrapper = ({
    label,
    className,
    children,
    description,
    error,
}: InputWrapperProps) => {
    return (
        <>
            <label className={twMerge('', className)}>
                {label}
                <div className="my-1.5">{children}</div>
            </label>
            {description && (
                <div role='contentinfo' aria-label={description} className="">
                    {description}
                </div>
            )}
            {error?.message && (
                <div role='alert' aria-label={error.message} className="">
                    {error.message}
                </div>
            )}
        </>
    )
}