/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Set this to false if you want production builds to abort if there are type errors
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Indicate that the exported app will be deployed to a subdirectory
  basePath: '',
  // Disable image optimization because it's not supported with 'output: export'
  images: {
    unoptimized: true,
  },
}
