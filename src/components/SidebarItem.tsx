import Link from 'next/link';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';
import {
    
    ClockIcon,   
    HomeIcon,
  } from "@heroicons/react/24/solid";



interface SidebarItemProps { 
    icon: IconType;
    active?: boolean;
    href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, active, href}) => {
    
    return (
        <Link
            href={href}
            className={twMerge(`
                flex
                flex-row
                h-auto
                items-center
                w-[30px]      
                hover:text-lightcarrot
                text-mattewhite
                transition                
                py-4       
            `,
                active && "text-lightcarrot"
            )}
        >
            <Icon size={26}/>          
        </Link>
     )
}

export default SidebarItem;