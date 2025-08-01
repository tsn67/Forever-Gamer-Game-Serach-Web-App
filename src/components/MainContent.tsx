import type { GameQuery } from "../App"
import useFetchGames from "../hooks/useFetchGames"
import GameCard from "./GameCard"
import LoadingSkeltons from "./LoadingSkeltons"

interface Prop {
    gameQuery: GameQuery
}

const MainContent = ({gameQuery}: Prop) => {

    const { data, error, loading } = useFetchGames(gameQuery?.category? gameQuery.category : undefined, gameQuery?.platform? gameQuery.platform: undefined, gameQuery?.searchTag? gameQuery.searchTag: undefined, gameQuery?.searchText? gameQuery.searchText: undefined)

    //refactoriing to get rid of error
    if (error)
        return <p className="ml-2 text-red-400">{error}</p>

    return (
        <div className=" h-full grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1  sm:grid-cols-2 gap-3 px-2 place-content-around">
            {loading && <LoadingSkeltons count={30} />}
            {!loading && data && data.map((game) => {
                return <div key={game.id}>
                    <GameCard game={game} />
                </div>
            })}

        </div>

    )
}

export default MainContent