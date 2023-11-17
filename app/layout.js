import { NavBar } from '@/components/navbar/NavBar'
import './globals.css'

 

export const metadata = {
  title: 'Pixel Innovations',
  description: 'Video training for web application developers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
        </body>
    </html>
  )
}
