'use client'

import useAuthModal from "@/hooks/useAuthModal";
import usePlayer from "@/hooks/usePlayer";
import { useUser } from "@/hooks/useUser";
import { twMerge } from "tailwind-merge";

import { FaMicrophoneAlt, FaHeart } from "react-icons/fa";
import { BsCompassFill, BsMusicNote } from "react-icons/bs"; 
import { MdLibraryMusic, MdFeaturedPlayList } from "react-icons/md";
import { Avatar, Button } from "@nextui-org/react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

interface HeaderProps { 
    children: React.ReactNode;
    className?: string;    
  }

const Header: React.FC<HeaderProps> = ({ children, className }) => {
    const authModal = useAuthModal();
    const router = useRouter();
    const supabaseClient = useSupabaseClient();
    const player = usePlayer();
    const { user } = useUser();
    const handleLogout = async () => {
        const { error } = await supabaseClient.auth.signOut();
        player.reset();
        router.refresh();

        if (error) {
            console.log(error);
        }
    }    

    return (
        <motion.div
            className={twMerge(`p-6`, className)}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
        >        
            <div className="w-full mb-4 flex items-center justify-between">
                <div className="z-30 flex md:hidden gap-x-6 pr-0">
                    <motion.div                         
                        className="cursor-pointer mt-2"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >                       
                        <Link href="/"> 
                            <BsMusicNote size={36} className="text-mattewhite"/>  
                        </Link>                         
                    </motion.div> 
                    <motion.div                         
                        className="cursor-pointer mt-2"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <Link href="/liked"> 
                            <FaHeart size={36} className="text-mattewhite" />  
                        </Link>                      
                    </motion.div>  
                    <motion.div                         
                        className="cursor-pointer mt-2"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >        
                        <Link href="/search"> 
                            <BsCompassFill size={36} className="text-mattewhite" />
                        </Link>                    
                    </motion.div>
                    <motion.div                         
                        className="cursor-pointer mt-2"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <Link href="/library">                                                          
                            <MdLibraryMusic size={36} className="text-mattewhite" /> 
                        </Link>                   
                    </motion.div>
                    <motion.div                         
                        className="cursor-pointer mt-2"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >          
                        <Link href="/playlists">         
                            <MdFeaturedPlayList size={36} className="text-mattewhite" />  
                        </Link>                   
                    </motion.div>
                    <motion.div                         
                        className="cursor-pointer mt-2"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <Link href="/podcasts"> 
                            <FaMicrophoneAlt size={36} className="text-mattewhite" />
                        </Link>                         
                    </motion.div>
                </div> 
                <div></div>                   
                <div className="
                        text-mattewhite
                        flex
                        justify-between
                        items-center
                        gap-x-4
                        ">                            
                        {user ? (                            
                            <div className="flex gap-x-4 items-center">
                                <motion.div 
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }}
                                >
                                    <Button onPress={handleLogout}>                                    
                                        Log out
                                    </Button>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.8 }} 
                                >
                                    <Avatar
                                        className="cursor:pointer"
                                        onClick={() => router.push('/account')}
                                        isBordered
                                        radius="sm"
                                        color="warning"
                                        src="https://i.ibb.co/jZh9jBd/cfca9c80-5351-4872-bd91-4413ce15ca22.webp">
                                    </Avatar>
                                </motion.div>
                            </div>
                        ) : (      
                        <div className="flex flex-1 gap-x-4">
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <Button onPress={authModal.onOpen}>                                
                                    Sign Up                                                                 
                                </Button>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                            >
                                <Button onPress={authModal.onOpen}>
                                    Log In
                                </Button>
                            </motion.div>
                        </div> 
                        )}                  
                </div>              
            </div>
            {children}
        </motion.div>
    )
}

export default Header;