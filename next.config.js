/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com'
      },
      {
        protocol: 'http',
        hostname: 'img.clerk.com'
      },
      {
        protocol: 'https',
        hostname: 'flagsapi.com'
      },
    ]
  }
}

module.exports = nextConfig
