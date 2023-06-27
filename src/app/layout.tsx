'use client'

import { ReactNode } from 'react'
import { Poppins } from 'next/font/google'
import { queryClient } from '@/services/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'
import { ShoeContextProvider } from '@/context/shoeContext'
import './globals.css'

const poppins = Poppins({ weight: ['400', '500', '700'], subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <QueryClientProvider client={queryClient}>
          <ShoeContextProvider>{children}</ShoeContextProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
