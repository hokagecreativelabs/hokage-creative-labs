/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["yourdomain.com"],
  },
  experimental: {
    optimizeCss: true, // Improves CSS loading
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
};

export default nextConfig;
