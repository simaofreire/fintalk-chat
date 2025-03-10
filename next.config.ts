import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['framerusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
