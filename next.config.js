/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.brchallenges.com',
      },
    ],
  },
}

module.exports = nextConfig
