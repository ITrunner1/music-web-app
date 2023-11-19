import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";

interface SearchProps { 
    searchParams: {
        title: string;
    }
};

const Search = async ({ searchParams }: SearchProps) => {
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

export default Search;