import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { layoutConfig } from "@/config/layout";

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <MainNav items={layoutConfig.mainNav} />
            <main className="max-w-6xl mx-auto py-8">{children}</main>
            <SiteFooter />
            <TailwindIndicator />
        </>
    )
}