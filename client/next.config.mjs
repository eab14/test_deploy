/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
    async rewrites() {
      return [
        {
          source: '/api/:slug*',
          destination: 'https://test-deploy-r1ij.onrender.com/api/:slug*',
        },
      ]
    },
};

export default nextConfig;
