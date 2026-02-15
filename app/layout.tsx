import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  // TITRE OPTIMISÉ - Option 4 (ma préférée)
  title:  ['News of the Tribe | Share Family Stories with Grandparents Monthly' ],
  
  // DESCRIPTION OPTIMISÉE - Option 2
  description:  ['Bridge generations with printed family newspapers. Share stories & photos monthly with grandparents who are not online. From $19.99 AUD. Try it!' ],
  
  // MOTS-CLÉS AMÉLIORÉS
  keywords: [
    'bridge generational distance',
    'connect grandparents grandchildren',
    'family newspaper printing',
    'share family stories grandparents',
    'printed family newsletter',
    'family communication across generations',
    'elderly family updates',
    'monthly family newspaper',
    'family news and photos printed',
    'generational connection service',
    'family storytelling newspaper',
    'grandparent communication tool'
  ].join(', '),
  
  authors: [{ name: 'News of the Tribe' }],
  creator: 'News of the Tribe',
  publisher: 'News of the Tribe',
  
  applicationName: 'News of the Tribe',
  category: 'Family Communication Services',
  
  // OPEN GRAPH AMÉLIORÉ
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://www.newsofthetribe.com',
    siteName: 'News of the Tribe',
    title: 'Bridge Generations with Printed Family Newspapers',
    description: 'Share family stories, photos, and updates monthly with grandparents. Printed newspapers delivered worldwide. Perfect for elderly relatives not online.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'News of the Tribe - Bridging Generational Distance with Family Newspapers',
      }
    ],
  },
  
  // TWITTER CARD AMÉLIORÉE
  twitter: {
    card: 'summary_large_image',
    site: '@newsofthetribe',
    creator: '@newsofthetribe',
    title: 'Bridge Generations with Family Stories & Photos',
    description: 'Share family updates monthly with grandparents through printed newspapers. No internet needed.',
    images: ['/images/twitter-card.jpg'],
  },
  
  alternates: {
    canonical: 'https://www.newsofthetribe.com',
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  verification: {
    google: 'your-google-verification-code-here',
  },
  
  other: {
    'price:currency': 'AUD',
    'price:amount': '19.99',
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* SCHEMA.ORG AMÉLIORÉ */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.newsofthetribe.com/#organization",
                  "name": "News of the Tribe",
                  "url": "https://www.newsofthetribe.com",
                  "description": "Bridging generational distance through printed family newspapers",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.newsofthetribe.com/images/logo.png",
                    "width": 400,
                    "height": 400
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "support@newsofthetribe.com",
                    "contactType": "Customer Support",
                    "availableLanguage": ["English"],
                    "areaServed": "Worldwide"
                  }
                },
                {
                  "@type": "Service",
                  "serviceType": "Family Communication and Memory Preservation",
                  "provider": {
                    "@id": "https://www.newsofthetribe.com/#organization"
                  },
                  "name": "Printed Family Newspaper Service",
                  "description": "Monthly printed newspapers featuring family stories, photos, and updates delivered to grandparents and elderly relatives",
                  "areaServed": "Worldwide",
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Family Newspaper Plans",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "The Update - 12 Page Family Newspaper",
                          "description": "Monthly 12-page newspaper with 21 posts and up to 63 photos"
                        },
                        "price": "19.99",
                        "priceCurrency": "AUD"
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "The Essential - 16 Page Family Newspaper",
                          "description": "Monthly 16-page newspaper with 29 posts and up to 87 photos"
                        },
                        "price": "22.99",
                        "priceCurrency": "AUD"
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Family Journal - 20 Page Family Newspaper",
                          "description": "Monthly 20-page newspaper with 37 posts and up to 111 photos"
                        },
                        "price": "24.99",
                        "priceCurrency": "AUD"
                      }
                    ]
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "reviewCount": "10000",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.newsofthetribe.com/#website",
                  "url": "https://www.newsofthetribe.com",
                  "name": "News of the Tribe",
                  "description": "Bridge generational distance with printed family newspapers",
                  "publisher": {
                    "@id": "https://www.newsofthetribe.com/#organization"
                  }
                }
              ]
            })
          }}
        />

        {/* GOOGLE ANALYTICS */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}

