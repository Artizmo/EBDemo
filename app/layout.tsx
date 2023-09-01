import './globals.scss';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

// const overpass = Overpass_Mono({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'], })

export const metadata: Metadata = {
  title: 'Eddie Bauer Demo',
  description: 'This is a tech stack demo'
}

export default function RootLayout({ children }: { children:React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
