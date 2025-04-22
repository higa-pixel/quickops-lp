import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}