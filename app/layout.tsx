import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ConvexClerkProvider from './providers/ConvexProvider/ConvexClerkProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PodAi',
  description: 'Generate Your Podcast Using Ai',
  icons:{
    icon: '/icons/logo.svg'
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><ConvexClerkProvider>{children}</ConvexClerkProvider></body>
    </html>
  )
}
