import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Orji Franklin - Full-Stack Developer',
  description: 'Portfolio of Orji Franklin, a Full-Stack & Mobile Developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <head>
        {/* Theme flash fix */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
      (function() {
        try {
          const theme = localStorage.getItem('theme')
            || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
          if (theme === 'dark') document.documentElement.classList.add('dark');
          else document.documentElement.classList.remove('dark');
        } catch(e) {}
      })();
    `,
          }}
        />

      </head>
      <body className={`${poppins.className} font-sans antialiased`} >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
