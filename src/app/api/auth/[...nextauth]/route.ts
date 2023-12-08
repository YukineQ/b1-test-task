import NextAuth, { AuthOptions } from "next-auth";

import Shikimori from "@/providers/shikimori";

const authOptions: AuthOptions = {
    providers: [
        Shikimori({
            clientId: 'qiY_yWBsGlFUm74WXk9fThWbbDjoB_w437r5GC10w1w',
            clientSecret: 'uslyjINgzy3sENqlC-ZfnKvGVO3ewCWMyH96_mkOHTM'
        })
    ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }