/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/bfukumori.png',
      },
    ],
  },
};

module.exports = nextConfig;
