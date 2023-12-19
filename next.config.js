/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'shikimori.one'
            },
            {
                protocol: 'https',
                hostname: 'desu.shikimori.one'
            }
        ],
        domains: ['https://shikimori.one']
    }
}

module.exports = nextConfig
