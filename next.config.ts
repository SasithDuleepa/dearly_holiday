// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 Important: makes a static export
  images: {
    unoptimized: true, // 👈 Needed because Next/Image uses optimization by default
  },
};

module.exports = nextConfig;
