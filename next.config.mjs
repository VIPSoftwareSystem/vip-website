/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,       // Enable React Strict Mode
  swcMinify: true,             // Enable fast SWC minification

  // Generate a standalone build for Plesk Node.js
  output: 'standalone',

  // Base path if your site is served from a subfolder
  // basePath: '',             // Uncomment and set if needed, e.g., '/app'

  // Asset prefix for static files (helps with IIS path issues)
  assetPrefix: '',

  // Optional: Enable trailing slashes if your host requires them
  trailingSlash: false,

  // Optional: Configure redirects or rewrites if needed
  // rewrites: async () => [
  //   { source: '/old-path', destination: '/new-path' },
  // ],
};

export default nextConfig