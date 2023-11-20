'use client'

import { AiOutlinePlus } from "react-icons/ai"
import { motion } from "framer-motion";

import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { Song } from "../../types";
import MediaItem from "./MediaItem";
import useOnPlay from "@/hooks/useOnPlay";

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
        <div className="flex flex-col">
            <div className="flex items-center justify pt-4">           
                    <div className="
                           text-mattewhite
                            inline-flex
                            items-center
                            gap-x-6
                            px-3
                            pr-2
                            ">                                                       
                        <h1 className="
                            text-mattewhite
                            text-2xl
                            sm:text-2xl
                            lg-7xl
                            font-bold
                        ">
                            Add song
                        </h1>                                               
                    </div> 
                    <motion.div whileHover={{ scale: 1.2 }}>
                        <AiOutlinePlus
                            size={30}
                            onClick={onClick}
                            className="
                              text-gray
                                cursor-pointer
                              hover:text-mattewhite
                                transition
                            "                      
                        />         
                    </motion.div>         
            </div>        
            <div className="flex flex-col gap-y-2 mt-4 px-3">
                {songs?.map((item) => (
                    <MediaItem
                        onClick={(id: string) => onPlay(id)}
                        key={item.id}
                        data={item}
                    />
                ))} 
            </div>          
        </div>
    );
};

export default Library;