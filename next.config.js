/**
 @type {import('next').NextConfig}
 */
const nextConfig = {
  images: { unoptimized: true },
  trailingSlash: true,
  //distDir: 'next-in-browser-markdown-editor',
  reactStrictMode: true,
  output: 'export',
};

//if (process.env.NODE_ENV !== 'development') {
// nextConfig.assetPrefix = '/server/app';
// nextConfig.basePath = '/server/app';
//}


module.exports = nextConfig;
