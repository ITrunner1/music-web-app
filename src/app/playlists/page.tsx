import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";

interface PlaylistsProps { 
    searchParams: {
        title: string;
    }
};

const Playlists = async ({ searchParams }: PlaylistsProps) => {
    const songs = await getSongsByTitle(searchParams.title);

    return (
        <main 
            className="
                dark
                text-foreground            
                min-h-screen
                min-w-max                      
        ">
            <Header>                
            </Header>            
        </main>
    )
}

export default Playlists;