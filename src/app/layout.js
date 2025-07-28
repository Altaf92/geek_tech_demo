// src/app/layout.jsx
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'
import BodyWrapper from '@/components/BodyWrapper'
import TawkToWidget from '@/components/TawkToWidget'

import 'bootstrap/dist/css/bootstrap.min.css'; 

export const metadata = {
  title: 'Geek Techbuzz',
  description: 'Your website description',
  icons: {
    icon: '../../public/assets/images/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/plugins.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="icon" href="/assets/images/favicon.png" />

      </head>
      <body>
        <BodyWrapper>
        
          <TawkToWidget />
          <Header />
          {children}
          <Footer />

        </BodyWrapper>

        {/* Load JS scripts AFTER page is interactive */}
        <Script src="/assets/js/plugins.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />

      </body>
    </html>
  )
}
