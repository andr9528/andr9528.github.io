import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'André\'s Info Page',
  description: "Generated by Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
