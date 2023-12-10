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
            className="fixed  bottom-0 px-4 py-2 z-30 h-[80px] w-full bg-darkgray text-mattewhite">
                <PlayerContent
                    key={songUrl}
                    song={song}
                    songUrl={songUrl}
                />
        </motion.div>
    );
};

export default Player;