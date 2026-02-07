/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? "/portfolio-fataharul" : "",
  assetPrefix: isGithubPages ? "/portfolio-fataharul/" : "",
};

module.exports = nextConfig;
