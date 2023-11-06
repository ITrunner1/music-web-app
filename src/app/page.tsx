import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

export default function Home() {
  return (
    <main className="
            min-h-screen
            min-w-max
            bg-blakishgray
    ">   
      <Header>
        <div className="mb-2">
          <h1 className="
            text-mattewhite
            text-3xl
            font-semibold
          ">
            Welcome back
          </h1>
          <div className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  xl:grid-cols-3
                  2xl:grid-cols-4
                  gap-3
                  mt-4
          ">
            <ListItem />
          </div>
        </div>
      </Header>   
    </main>
  )
}
