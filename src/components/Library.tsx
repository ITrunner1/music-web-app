'use client'

import { AiOutlinePlus } from "react-icons/ai"
import { motion } from "framer-motion";

import { useUser } from "@/hooks/useUser";
import { Song } from "../../types";
import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";
import DeleteButton from "./DeleteButton";

interface LibraryProps {   
    songs: Song[];
}

const Library: React.FC<LibraryProps> = ({ songs }) => {     
    const authModal = useAuthModal();
    const uploadModal = useUploadModal();
    const { user } = useUser();

    const onPlay = useOnPlay(songs);    

    const onClick = () => {        
        if (!user) {            
            return authModal.onOpen();
        }       
        
        return uploadModal.onOpen();
    }   

    return ( 
        <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
        >            
            <div className="flex items-center justify pt-4">           
                    <div className="text-mattewhite inline-flex gap-x-6 px-3 pr-2">                                                                                   
                        <h1 className="text-mattewhite text-2xl sm:text-2xl lg-7xl font-bold">                         
                            Добавить песню
                        </h1>                                               
                    </div> 
                    <motion.button 
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    >
                        <AiOutlinePlus
                            size={32}
                            onClick={onClick}
                            className="t-1 ml-2 cursor-pointer text-gray hover:text-mattewhite transition"/>
                    </motion.button>         
            </div>
            <div className="flex flex-col gap-y-2 mt-4 px-3">
                {songs?.map((item) => (
                    <div className="flex items-center">
                        
                        <div className="flex-1">
                            <MediaItem
                                onClick={(id: string) => onPlay(id)}
                                key={item.id}
                                data={item}
                            />
                        </div>  
                        <div className="right-2">                  
                            <DeleteButton songId={item.id} />
                        </div>
                    </div>
                ))}                
            </div>          
        </motion.div>
    );
};

export default Library;