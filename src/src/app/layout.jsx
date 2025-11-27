import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Hirusha Maduwantha',
    default: 'Hirusha Maduwantha - Robotics Enthusiast.',
  },
  description:
    'Portfolio of Hirusha Maduwantha: Robotics, AI, ROS2, 3D printing, computer vision, soft robotics, and embedded electronics. Explore research, projects, and engineering work in advanced manufacturing and intelligent robotic systems',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>
              {children}
              <Analytics />
            </Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
