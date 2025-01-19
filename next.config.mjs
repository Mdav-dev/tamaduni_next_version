/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**', // Allow all paths
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/**', // Allow all paths
      },
    ],
  },
  // output: 'export'
};

export default nextConfig;

