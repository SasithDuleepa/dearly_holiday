// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {

//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'https://flowbite.s3.amazonaws.com', // Replace with your image host domain
//         port: '',
//         pathname: '/blocks/marketing-ui/avatars/**', // Optional: restrict to a specific path
//       },
//     ],
//   },
// };

// export default nextConfig;


// module.exports = nextConfig;


// next.config.js

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   images: {
//     unoptimized: true, // required for static export (Next/Image cannot run on Surge)
//   },
//   trailingSlash: true, // optional (avoids some export issues)
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;

