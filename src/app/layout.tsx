import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/userProvider'
import ModalProvider from '@/providers/ModalProvider'
import getSongsByUserId from '@/actions/getSongsbyUserId'
import { NextUIProv } from '@/providers/NextUIProvider';

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
  setIsLibraryOpen: (isLibraryOpen: boolean) => void,
}) {  
  const userSongs = await getSongsByUserId();
  return (    
    <html lang="en">
      <body className={inter.className}> 
        <SupabaseProvider>          
          <UserProvider>
            <NextUIProv> 
              <ModalProvider />             
              <Sidebar songs={userSongs}>              
                {children}                                 
              </Sidebar>              
            </NextUIProv>
          </UserProvider>          
        </SupabaseProvider>           
      </body>
    </html>
  )
}
