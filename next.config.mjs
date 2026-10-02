import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable webpack filesystem cache in local dev to prevent stale cache chunk snapshot conflicts on Windows
      config.cache = false
    }
    return config
  },
}

const withMDX = createMDX({
  // Markdown plugins
})

export default withMDX(nextConfig)
