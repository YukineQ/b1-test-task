import React from "react"
import { usePathname } from 'next/navigation'

export const ScrollTop = () => {
    const pathname = usePathname()

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}