const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    // Ensure that TypeScript files outside `src` are properly processed
    //config.module.rules.push({
      //test: /\.tsx?$/,
      //use: 'ts-loader',
      //exclude: /node_modules/,
      //include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, '../utils')] // Include utils folder
    ///});

    return config;
  },
}

module.exports = nextConfig;
