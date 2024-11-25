/** @type {import('next').NextConfig} */
const nextConfig = {};

import path from 'path';

nextConfig.webpack = (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, './src');
    return config;
}

export default nextConfig;
