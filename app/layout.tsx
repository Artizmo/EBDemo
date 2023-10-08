import type { Metadata } from 'next';
import localFont from 'next/font/local'
import './globals.css';

const Interstate = localFont({
  src: [
    {
      path: '../public/fonts/Interstate-ExtraLight.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/Interstate-Light.woff',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../public/fonts/Interstate-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Interstate-Bold.woff',
      weight: '600',
      style: 'italic',
    },
  ],
  variable: '--font-interstate'
})

export const metadata: Metadata = {
  title: 'Eddie Bauer Demo',
  description: 'This is a tech stack demo',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
  
}

export default function RootLayout({ children }: { children:React.ReactNode }) {
  return (
    <html lang="en" className={`${Interstate.variable}`}>
      <body className="bg-white">{children}</body>
    </html>
  )
}
