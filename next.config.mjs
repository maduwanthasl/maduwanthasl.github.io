import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export (needed for GitHub Pages)
  output: 'export',

  // Optional: put the static site into `docs/` so GitHub Pages can serve it
  // (after build you'll get docs/index.html etc.)
  distDir: 'docs',

  // GitHub Pages can't use Next image optimization
  images: {
    unoptimized: true,
  },

  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],

  experimental: {
    outputFileTracingIncludes: {
      '/articles/*': ['./src/app/articles/**/*.mdx'],
    },
  },
}

export default withMDX(nextConfig)
