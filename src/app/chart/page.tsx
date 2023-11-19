import getSongsByTitle from "@/actions/getSongsByTitle";
import Header from "@/components/Header";

interface ChartProps { 
    searchParams: {
        title: string;
    }
};

const Chart = async ({ searchParams }: ChartProps) => {
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

export default Chart;