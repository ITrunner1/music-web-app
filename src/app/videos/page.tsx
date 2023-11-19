import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";

interface VideosProps { 
    searchParams: {
        title: string;
    }
};

const Videos = async ({ searchParams }: VideosProps) => {
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

export default Videos;