'use client';

import MediaItem from "@/components/MediaItem";
import LikeButton from "@/components/LikeButton";
import { Song } from "../../../../types";
import useOnPlay from "@/hooks/useOnPlay";
import { motion } from "framer-motion";

interface SearchContentProps {
    songs: Song[];
}

const SearchContent: React.FC<SearchContentProps> = ({
    songs
}) => {
    const onPlay = useOnPlay(songs);
    if (songs.length === 0) {
        return (
            <div
                className="
                    flex
                    flex-col
                    gap-y-2
                    w-full
                    px-6
                    text-gray
            ">
                No songs found.
            </div>
        );
    };
    
    return (
        <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-y-2 w-full px-6"
        >
            {songs.map((song) => 
                <div
                    key={song.id}
                    className="flex items-center gap-x-4 w-full"
                >
                    <div className="flex-1">
                        <MediaItem
                            onClick={(id: string) => onPlay(id)}
                            data={song}
                        />
                    </div>
                    <LikeButton songId={song.id}/>
                </div>
            )}
        </motion.div>
    )
}

export default SearchContent;