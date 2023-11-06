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
                hover:text-[#ed8927]
                text-[#F2F3F4]
                transition                
                py-4       
            `,
                active && "text-[#ed8927]"
            )}
        >
            <Icon size={26}/>          
        </Link>
     )
}

export default SidebarItem;