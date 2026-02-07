/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio-fataharul",
  assetPrefix: "/portfolio-fataharul/",
};

module.exports = nextConfig;
