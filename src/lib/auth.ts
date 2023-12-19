import { type NextAuthOptions } from "next-auth";
import ShikimoriProvider from "@/lib/shikimori";

export const authOptions: NextAuthOptions = {
    callbacks: {
        async jwt({ token, user, account }) {
            if (user) {
                token.id = user.id
            }
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token }) {
            session.user.id = token.id
            session.user.accessToken = token.accessToken
            return session
        }
    },
    providers: [
        ShikimoriProvider({
            clientId: process.env.SHIKIMORI_CLIENT_ID as string,
            clientSecret: process.env.SHIKIMORI_CLIENT_SECRET as string,
        }),
    ],
};