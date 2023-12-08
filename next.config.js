/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'shikimori.one'
            }
        ],
        domains: ['https://shikimori.one']
    }
}

module.exports = nextConfig
