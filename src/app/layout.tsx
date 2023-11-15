import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/userProvider'
import ModalProvider from '@/providers/ModalProvider'
import { NextUIProv } from '@/providers/NextUIProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HarmonyHub',
  description: 'Spotify 2.0',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
  setIsLibraryOpen: (isLibraryOpen: boolean) => void,
}) {  
  
  return (
    <html lang="en">
      <body className={inter.className}> 
        <SupabaseProvider>          
          <UserProvider>
            <NextUIProv> 
              <ModalProvider />             
              <Sidebar>              
                {children}                                 
              </Sidebar>              
            </NextUIProv>
          </UserProvider>          
        </SupabaseProvider>           
      </body>
    </html>
  )
}
