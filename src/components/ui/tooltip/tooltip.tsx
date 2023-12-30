import React, { RefObject } from 'react'
import { twMerge } from 'tailwind-merge';

import './styles.css'

type TooltipProps = {
    content: React.ReactElement | string;
    delay?: number;
    direction?: 'top' | 'bottom' | 'left' | 'right';
} & React.HTMLAttributes<HTMLDivElement>

export type TooltipPassThroughProps = Pick<TooltipProps, 'content' | 'delay' | 'direction'>

export const Tooltip = ({
    className,
    content,
    delay = 200,
    direction = 'top',
    ...props
}: TooltipProps) => {
    let timeout: ReturnType<typeof setTimeout>;
    const [active, setActive] = React.useState(false)

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true)
        }, delay)
    }

    const hideTip = () => {
        clearInterval(timeout)
        setActive(false)
    }

    if (!content) return null

    return (
        <div
            className="Tooltip-Wrapper"
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
        >
            {props.children}
            {active && (
                <div
                    className={twMerge(
                        'Tooltip-Tip',
                        direction,
                        className
                    )}
                    {...props}
                >
                    {content}
                </div>
            )}
        </div>
    )
}
