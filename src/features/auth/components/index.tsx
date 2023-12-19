import { AuthTriggerButton } from "./auth-trigger-button"
import { UserAccountNav } from './user-account-nav'
import { getCurrentUser } from "@/lib/session"

export const Auth = async () => {
    const user = await getCurrentUser()

    if (user) return <UserAccountNav user={{ ...user }} />

    return <AuthTriggerButton />
}