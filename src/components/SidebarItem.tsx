import Link from 'next/link';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';
import { Tooltip } from '@nextui-org/react';
import { motion } from 'framer-motion';

interface SidebarItemProps {     
    icon: IconType;
    active?: boolean;
    href: string;    
    label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({icon: Icon, active, href, label}) => {
    
    return (
        <Tooltip                                    
            placement="right"
            content={label}
            delay={0}
            closeDelay={0}
            motionProps={{
                variants: {
                  exit: {
                    opacity: 0,
                    transition: {
                      duration: 0.1,
                      ease: "easeIn",
                    }
                  },
                  enter: {
                    opacity: 1,
                    transition: {
                      duration: 0.15,
                      ease: "easeOut",
                    }
                  },
                },
            }}
            classNames={{
                base: [
                    "border-none"
                ],
                content: [
                    "bg-inherit border-none text-mattewhite"
                ]
            }}       
        >   
            <motion.div
              whileHover={{ scale: 1.2 }}              
            >
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
                  <Icon size={36}/>                     
              </Link>
            </motion.div>
        </Tooltip>
     )
}

export default SidebarItem;