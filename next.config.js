/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["randomuser.me"], // Add the hostname(s) you want to allow
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
