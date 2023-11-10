import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'

const fontBody = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MDC Support Team',
  description: 'Generated by MDC Team',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={fontBody.className}>{children}</body>
      </html>
    </ClerkProvider>
    
  )
}
