import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css'
import './homepage.css'
import './utilities.css'
import './detail.css'
import './checkout.css'
import './complete-checkout.css'
import './sign-in.css'
import './sign-up.css'
import './sign-up-photo.css'
import './sign-up-success.css'
import './404-not-found.css'
import './overview.css'
import './sidebar.css'
import './transactions.css'
import './transactions-detail.css'
import './edit-profile.css'


const popins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], style: ['normal', 'italic'], display: 'swap'})

export const metadata: Metadata = {
  title: 'Elwin Gaming Store',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={popins.className}>{children}</body>
    </html>
  )
}