/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./contentfulImageLoader.ts",
  },
};

module.exports = nextConfig;
