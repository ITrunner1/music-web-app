import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import Dashboard from '@/components/Dashboard'
import Rightside from '@/components/Rightside'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HarmonyHub',
  description: 'Spotify 2.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>  
      {children}      
      <Dashboard />          
        <Sidebar>
        </Sidebar>
        <Rightside>         
        </Rightside>
      </body>
    </html>
  )
}
