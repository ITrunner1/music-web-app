'use client'

import usePlayer from "@/hooks/usePlayer";
import { twMerge } from "tailwind-merge";

interface MaincontentProps { 
    children: React.ReactNode;
    className?: string;
    setIsLibraryOpen: (isLibraryOpen: boolean) => void,
  }

const Maincontent: React.FC<MaincontentProps> = ({ children }) => {
    const player = usePlayer();
    return (
        <div 
          className={twMerge(`
                      h-full
                      flex-1
                      overflow-y-auto
                      py-0
                      z-10`, player.activeId && "h-[calc(100%-80px)]" )}>
            {children}                     
        </div>
      );
    };      
export default Maincontent;
