/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = {
  images: {
    domains: ['mks-sistemas.nyc3.digitaloceanspaces.com'],
  },
  nextConfig
}
// module.exports = 
