import useFetchGames from "../hooks/useFetchGames"
import GameCard from "./GameCard"



const MainContent = () => {

    const { games, error } = useFetchGames()

    return (
        <div className=" h-full grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1  sm:grid-cols-2 gap-3 px-2 place-items-center">
                {error && <p className="text-red-400">{error}</p>}
                {games && games.map((game) => {
                    return <div>
                        <GameCard game={game}/>
                    </div>
                })}
        </div>
    )
}

export default MainContent