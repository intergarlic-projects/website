import path from 'path';
import { fileURLToPath } from 'url';

/** Emulate __dirname for ES Modules */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {};

nextConfig.webpack = (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, './src');
    return config;
};

export default nextConfig;
