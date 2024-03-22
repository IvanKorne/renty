/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ca-central-1.graphassets.com"],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

export default nextConfig;
