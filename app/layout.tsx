import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'News of the Tribe | Share Family Stories with Grandparents Monthly',
  
  description: 'Bridge generations with printed family newspapers. Share stories & photos monthly with grandparents who aren\'t online. From $19.99 AUD. Try free!',
  
  authors: [{ name: 'News of the Tribe' }],
  creator: 'News of the Tribe',
  publisher: 'News of the Tribe',
  
  applicationName: 'News of the Tribe',
  category: 'Family Communication Services',
  
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://www.newsofthetribe.com',
    siteName: 'News of the Tribe',
    title: 'Bridge Generations with Printed Family Newspapers',
    description: 'Share family stories, photos, and updates monthly with grandparents. Printed newspapers delivered worldwide.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'News of the Tribe - Bridging Generational Distance',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    site: '@newsofthetribe',
    creator: '@newsofthetribe',
    title: 'Bridge Generations with Family Stories & Photos',
    description: 'Share family updates monthly with grandparents through printed newspapers.',
    images: ['/images/twitter-card.jpg'],
  },
  
  alternates: {
    canonical: 'https://www.newsofthetribe.com',
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}