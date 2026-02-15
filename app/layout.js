import './globals.css'

export const metadata = {
  title: 'News of the Tribe - Print Family Photos into Monthly Newspapers | Connect Grandparents',
  description: 'Transform your family photos into beautiful printed newspapers. Perfect for grandparents and elderly relatives who aren\'t on social media. Monthly delivery worldwide. Start free trial.',
  keywords: 'family newspaper, print family photos, connect grandparents, family newsletter, printed family memories, elderly communication, family photo service, personalized newspaper',
  
  openGraph: {
    title: 'Turn Family Photos into Printed Newspapers for Grandparents',
    description: 'Monthly printed family newspapers delivered worldwide. Perfect for keeping elderly relatives connected.',
    images: ['/og-image.jpg'],
    type: 'website',
    locale: 'en_AU',
    siteName: 'News of the Tribe',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Family Photos Printed & Mailed Monthly',
    description: 'Keep grandparents connected with printed family newspapers',
  },
  
  alternates: {
    canonical: 'https://www.newsofthetribe.com',
  },
  
  robots: {
    index: true,
    follow: true,
  },
  
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "News of the Tribe",
              "applicationCategory": "LifestyleApplication",
              "offers": {
                "@type": "AggregateOffer",
                "lowPrice": "19.99",
                "highPrice": "24.99",
                "priceCurrency": "AUD",
                "offerCount": "3"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "10000"
              },
              "description": "Transform family photos into printed newspapers for grandparents and elderly relatives",
              "operatingSystem": "iOS, Android"
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}