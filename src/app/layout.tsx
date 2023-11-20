import './globals.css'

import type { Metadata } from 'next'
import { Inter, Play } from 'next/font/google'

import Sidebar from '@/components/Sidebar'
import SupabaseProvider from '@/providers/SupabaseProvider'
import UserProvider from '@/providers/userProvider'
import ModalProvider from '@/providers/ModalProvider'
import getSongsByUserId from '@/actions/getSongsByUserId'
import Player from '@/components/Player'
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
              <Player />
            </NextUIProv>
          </UserProvider>          
        </SupabaseProvider>           
      </body>
    </html>
  )
}
