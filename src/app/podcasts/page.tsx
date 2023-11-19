import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";

interface PodcastsProps { 
    searchParams: {
        title: string;
    }
};

const Podcasts = async ({ searchParams }:PodcastsProps) => {
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

export default Podcasts;