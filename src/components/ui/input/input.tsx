import React from "react";
import { twMerge } from 'tailwind-merge'

import { InputWrapper, InputWrapperPassThroughProps } from "./input-wrapper";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
} & InputWrapperPassThroughProps

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ type = 'text', className, label, description, error, ...props }, ref) => {
        return (
            <InputWrapper label={label} description={description} error={error}>
                <input
                    ref={ref}
                    type={type}
                    className={twMerge(
                        '',
                        className
                    )}
                    {...props}
                />
            </InputWrapper>
        )
    }
)
Input.displayName = 'Input'