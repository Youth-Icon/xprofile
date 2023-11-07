/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
};

module.exports = {
  nextConfig,
  images: {
    domains: ["avatars.githubusercontent.com", "s2.googleusercontent.com", "www.google.com", "icon.horse"],
  },
};
