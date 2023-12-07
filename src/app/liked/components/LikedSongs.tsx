'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";

import { Song } from "../../../../types";
import { useUser } from "@/hooks/useUser";
import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";
import useOnPlay from "@/hooks/useOnPlay";

interface LikedContentProps {
    songs: Song[];
}

const LikedContent: React.FC<LikedContentProps> = ({
    songs
}) => {
    const router = useRouter();    
    const onPlay = useOnPlay(songs);

    if (songs.length === 0) {
        return (
            <div className="flex flex-col gap-y-2 w-full px-6 text-gray">
                No liked songs.
            </div>
        );
    };
    
    return (
        <motion.div 
            className="flex flex-col gap-y-2 w-full p-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
        >
            {songs.map((song) => (
                <div
                    key={song.id}
                    className="flex items=center gap-x-4 w-full"
                >
                    <div className="flex-1">
                        <MediaItem 
                            onClick={(id: string) => onPlay(id)}
                            data={song}
                        />
                    </div>
                    <LikeButton songId={song.id} />                    
                </div>
            ))}
        </motion.div>
    );
};

export default LikedContent;