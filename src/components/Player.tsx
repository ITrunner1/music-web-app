'use client';

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";
import PlayerContent from "./PlayerContent";

import { motion } from "framer-motion";

const Player = () => {
    const player = usePlayer();
    const { song } = useGetSongById(player.activeId);

    const songUrl = useLoadSongUrl((song!));

    if (!song || !songUrl || !player.activeId) {
        return null;
    }

    return (
        <motion.div                      
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}           
            className=" 
                fixed                                            
                bottom-0
                bg-blakishgray
                text-mattewhite
                w-full
                py-2
                h-[80px]
                px-4
                z-30            
            "
        >
            <PlayerContent
                key={songUrl}
                song={song}
                songUrl={songUrl}
            />
        </motion.div>
    );
};

export default Player;