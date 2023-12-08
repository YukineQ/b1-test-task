'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { RiArrowRightSLine } from "react-icons/ri";

type LinkBreadCrumbsProps = {
    homeElement?: React.ReactNode;
    separator?: React.ReactNode;
    containerClasses?: string;
    listClasses?: string;
    activeClasses?: string;
    capitalizeLinks?: boolean;
}

export const LinkBreadCrumbs = ({
    homeElement = 'Home',
    separator = '/',
    containerClasses = 'inline-flex items-center justify-center text-white/50 text-sm font-semibold gap-0.5 mb-4',
    listClasses = 'p-0.5 px-1 rounded-md hover:bg-[#1f2024] transition',
    activeClasses = 'text-white',
    capitalizeLinks = true,
}: LinkBreadCrumbsProps) => {
    const paths = usePathname()
    const pathNames = paths.split('/').filter(path => path)

    return (
        <div>
            <ul className={containerClasses}>
                <li className={listClasses}>
                    <Link href={'/'}>{homeElement}</Link>
                </li>
                {pathNames.length > 0 && separator}
                {pathNames.map((link, index) => {
                    let href = `/${pathNames.slice(0, index + 1).join('/')}`
                    let itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses
                    let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
                    return (
                        <React.Fragment key={index}>
                            <li className={itemClasses}>
                                <Link href={href}>{itemLink}</Link>
                            </li>
                            {pathNames.length !== index + 1 && separator}
                        </React.Fragment>
                    )
                })}
            </ul>
        </div>
    )
}