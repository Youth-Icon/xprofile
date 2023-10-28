/** @type {import('next').NextConfig} */
const nextConfig = {
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
      {
        protocol: "https",
        hostname: "icon.horse",
        pathname: "**",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
