import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sporttourshungary.com'),
  title: 'SportToursHungary – Sportjegy-összehasonlítás Magyarországon',
  description:
    'A legjobb sportesemény-jegyek összehasonlítása Magyarországon és az EU-ban. Labdarúgás, Forma–1, kosárlabda, tenisz – másodlagos piac, az árak a névértéknél magasabbak lehetnek.',
  keywords: ['sportjegy', 'labdarúgás', 'Forma-1', 'Budapest', 'Hungaroring', 'kosárlabda', 'másodlagos piac'],
  openGraph: {
    title: 'SportToursHungary – Sportjegy-összehasonlítás',
    description: 'Hasonlítsd össze a legjobb sportesemény-jegy-ajánlatokat Magyarországon és Európában.',
    locale: 'hu_HU',
    type: 'website',
    url: 'https://sporttourshungary.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
