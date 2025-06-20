/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/aiveen-labs-website',
  assetPrefix: '/aiveen-labs-website',
}

module.exports = nextConfig 