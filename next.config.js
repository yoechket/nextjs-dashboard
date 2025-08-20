/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        ppr: 'incremental'
    },
    eslint: {
        ignoreDuringBuilds: true
    }
};

module.exports = nextConfig;
