import type { Metadata } from 'next'
import './globals.css'
import StyledComponentsRegistry from '@/lib/registry'
import { Toaster } from '@/components/ui/sonner'
import { Tabbar } from '@/components/Tabbar'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Coupang',
  description: 'Coupang',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="bg-[#DFE7EB]">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen san-francisco">
        <StyledComponentsRegistry>
          {children}; <Tabbar />
        </StyledComponentsRegistry>
      </body>
      <Toaster />
    </html>
  )
}
