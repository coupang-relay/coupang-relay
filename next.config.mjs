/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [{ hostname: 'cataas.com' }],
  },
}

export default nextConfig
