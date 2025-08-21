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
  // Indicate that the exported app will be deployed to a subdirectory
  basePath: '',
  // Image configuration
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  // Disable the @next/next/no-img-element rule
  eslint: {
    ignoreDuringBuilds: true,
    rules: {
      '@next/next/no-img-element': 'off'
    }
  }
}
