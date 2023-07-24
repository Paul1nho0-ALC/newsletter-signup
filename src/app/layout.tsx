import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  style: 'normal',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Newsletter signup',
  description: 'Sign Up to our newsletter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={roboto.style}>
      <body className="h-screen bg-dark w-full max-w-screen">{children}</body>
    </html>
  )
}
