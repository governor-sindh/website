/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    minimumCacheTTL: 60,
  }
}

module.exports = nextConfig
