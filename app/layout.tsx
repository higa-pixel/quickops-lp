// app/layout.tsx の修正案
import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'QuickOps',
  description: 'AIとノーコードで日常業務を最短3営業日で自動化するサービス',
  generator: 'QuickOps',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        {/* Google Tag Manager - 外部スクリプトとして読み込む */}
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          src={`https://www.googletagmanager.com/gtm.js?id=GTM-NJMDC4FB`}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NJMDC4FB"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        {children}
      </body>
    </html>
  )
}