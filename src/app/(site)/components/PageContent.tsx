'use client'

import SongItem from "@/components/SongItem";
import { Song } from "../../../../types";

import { Card, CardHeader, CardBody, Image } from "@nextui-org/react"
import useOnPlay from "@/hooks/useOnPlay";

interface PageContentProps { 
    songs: Song[];
}

const PageContent: React.FC<PageContentProps> = ({
    songs
}) => {
    const onPlay = useOnPlay(songs);

    if (songs.length === 0) { 
        return (
            <Card className="py-4">
                <CardHeader>
                No songs available.
                </CardHeader>
            </Card>
        )
    }
    return (
        <div className="            
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-3
            lg-grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-7
            gap-4            
            "
        >
            {songs.map((item) => 
                <SongItem 
                    key={item.id}
                    onClick={(id: string) => onPlay(id)} 
                    data={item}
                />
            )}            
        </div>
    );
};

export default PageContent;