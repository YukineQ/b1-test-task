import React from 'react'
import Link, { LinkProps } from 'next/link'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import 'react-horizontal-scrolling-menu/dist/styles.css';

import { Icons } from './icons';
import { twMerge } from 'tailwind-merge';

const Gallery = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={twMerge(className)}
        {...props}
    />
))
Gallery.displayName = 'Gallery'

type GalleryLinkProps = {
    className?: string;
    children: React.ReactNode;
} & LinkProps

const GalleryLink = ({ className, children, ...props }: GalleryLinkProps) => {
    return (
        <Link
            className={twMerge(
                'inline-flex items-center text-white text-3xl font-bold px-2 gap-1.5 hover:underline transition',
                className
            )}
            {...props}
        >
            {children}
            <Icons.arrowRight className='mt-2' strokeWidth={3} />
        </Link>
    )
}

const GalleryTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={twMerge(
            'text-white text-3xl font-bold px-2',
            className
        )}
        {...props}
    />
))
GalleryTitle.displayName = 'GalleryTitle'

type GalleryScrollContainerProps = {
    children: React.ReactElement | React.ReactElement[];
    arrowClassName?: string;
    scrollContainerClassName?: string;
}

const GalleryScrollContainer = ({
    children,
    arrowClassName,
    scrollContainerClassName
}: GalleryScrollContainerProps) => {
    return (
        <ScrollMenu
            RightArrow={<RightArrow className={arrowClassName} />}
            LeftArrow={<LeftArrow className={arrowClassName} />}
            scrollContainerClassName={twMerge("py-4 px-2 md:overflow-x-hidden w-full gap-2 h-fit", scrollContainerClassName)}
            wrapperClassName='relative'
        >
            {children}
        </ScrollMenu>
    )
}

const RightArrow = ({ className }: { className?: string }) => {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext)

    if (isLastItemVisible) return null

    return (
        <div
            onClick={() => scrollNext()}
            className={twMerge('absolute flex justify-center items-center text-white/80 -right-12 top-[36%]', className)}>
            <Icons.arrowRight size={55} />
        </div>
    )
}

const LeftArrow = ({ className }: { className?: string }) => {
    const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext)

    if (isFirstItemVisible) return null

    return (
        <div
            onClick={() => scrollPrev()}
            className={twMerge('absolute flex justify-center items-center text-white/80 z-50 -left-12 top-[36%]', className)}
        >
            <Icons.arrowLeft size={55} />
        </div>
    )
}

export { Gallery, GalleryLink, GalleryTitle, GalleryScrollContainer }