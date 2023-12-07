'use client'

import SongItem from "@/components/SongItem";
import useOnPlay from "@/hooks/useOnPlay";
import { Song } from "../../../../types";

import { motion } from "framer-motion";

interface PageContentProps { 
    songs: Song[];
}

const PageContent: React.FC<PageContentProps> = ({
    songs
}) => {
    const onPlay = useOnPlay(songs);

    if (songs.length === 0) { 
        return (
            <div className="mb-2 text-mattewhite">
                <h1 className="text-4xl sm:text-5xl lg-6xl font-bold">
                    No songs available here.
                </h1>        
        </div> 
        )
    }
    return (
        <div>
            <h1 className="text-mattewhite text-[24px] font-semibold">
                Newest songs
            </h1>      
            <motion.div 
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                className="            
                    grid
                    grid-cols-2
                    sm:grid-cols-3
                    md:grid-cols-3
                    lg-grid-cols-4
                    xl:grid-cols-5
                    2xl:grid-cols-7
                    gap-4 
                    pt-4"
                >                
                    {songs.map((item) => 
                        <SongItem 
                            key={item.id}
                            onClick={(id: string) => onPlay(id)} 
                            data={item}
                        />
                    )} 
            </motion.div>
        </div>
    );
};

export default PageContent;