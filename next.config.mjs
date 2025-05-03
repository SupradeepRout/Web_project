/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.bitdegree.org',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  output: 'standalone',
};

export default nextConfig;
