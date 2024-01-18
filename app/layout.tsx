import type { Metadata } from 'next'
import { relative } from 'path'
import { Footer, Navbar } from '@/components'

import './globals.css'


export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Encuentra los mejores autos del mundo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
