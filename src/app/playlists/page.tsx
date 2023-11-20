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
            className="dark text-foreground min-h-screen min-w-max"> 
            <Header>
            <div className="flex flex-col gap-y-2 mt-4 md:mt-0">                  
                    <h1 className="
                      text-mattewhite
                        text-4xl
                        sm:text-5xl
                        lg-7xl
                        font-bold
                    ">
                        Playlists
                    </h1>
                </div>                 
            </Header>            
        </main>
    )
}

export default Playlists;