/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "s2.googleusercontent.com",
        pathname: "**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
