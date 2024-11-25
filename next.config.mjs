/** @type {import('next').NextConfig} */
const nextConfig = {};

const path = require('path');

nextConfig.webpack = (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '.');
    return config;
}

export default nextConfig;
