import { Header } from "@/components/layout/header";

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            <main className="max-w-6xl mx-auto py-8">{children}</main>
        </>
    )
}