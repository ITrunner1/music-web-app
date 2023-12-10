import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { NextUIProv } from '@/providers/NextUIProvider';
import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/userProvider'
import ModalProvider from '@/providers/ModalProvider'
import Player from '@/components/Player'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HarmonyHub',
  description: 'Spotify 2.0',
}

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,  
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
              <Player />
            </NextUIProv>
          </UserProvider>          
        </SupabaseProvider>           
      </body>
    </html>
  )
}
