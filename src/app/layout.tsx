import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Banner } from '@/components/banner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Animals App',
  description: 'Generated by create animals app',
  icons: '/logo.JPG'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Banner/>
          {children}
        </ThemeProvider >
      </body>
    </html>
  )
}
