// export default {
//   output: 'export', // Enables static HTML export
//   images: {
//     unoptimized: true, // Disable image optimization for static export
//   },
//   trailingSlash: true, // Optional: Ensure URLs have trailing slashes
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'webservicesindia.info',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

// module.exports = nextConfig;
