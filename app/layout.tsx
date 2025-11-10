import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import './globals.css'
import Providers from './providers'

export const metadata = {
  title: 'Crypto Tracker',
  description: 'Live crypto charts for BTC & SOL',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>{<Providers>{children}</Providers>}</body>
    </html>
  )
}
