/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        //pathname: "/api/**",
      },
      {
        protocol: "https",
        hostname: "assets.nflxext.com",
        port: "",
        //pathname: "/api/**",
      },
    ],
  },
};

module.exports = nextConfig;
