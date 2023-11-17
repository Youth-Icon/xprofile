/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['icons.duckduckgo.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "**",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
