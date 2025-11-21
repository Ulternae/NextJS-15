/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverExternalPackages: ['import-in-the-middle']
  }
}

module.exports = nextConfig
