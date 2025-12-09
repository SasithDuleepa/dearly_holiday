import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // generates /out folder
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://flowbite.s3.amazonaws.com', // Replace with your image host domain
        port: '',
        pathname: '/blocks/marketing-ui/avatars/**', // Optional: restrict to a specific path
      },
    ],
  },
};

export default nextConfig;


module.exports = nextConfig;
