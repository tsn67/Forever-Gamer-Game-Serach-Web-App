import type { Game } from "../hooks/useFetchGames"
import PlatformIconBox from "./PlatformIconBox"
import ScoreBadge from "./ScoreBadge"
import getCropedImageUrl from '../utils/img-url'


const GameCard = ({game}: {game: Game}) => {


    return (
        <div className="flex flex-col w-full md:max-w-[300px] rounded-lg  bg-gray-100 dark:bg-slate-900 p-0 overflow-hidden dark:outline-slate-700 outline-gray-300 outline-1">
            <img className="object-fill w-full md:h-[140px] md:w-[300px]" src={getCropedImageUrl(game.background_image)}/>
            <h1 className="dark:text-slate-400 font-normal text-lg px-2 py-1 line-clamp-1">{game.name}</h1>
            <div className="w-full flex justify-between">
                <PlatformIconBox platforms={game.parent_platforms.map((item) => item.platform)}/>
                <ScoreBadge score={game.metacritic}/>
            </div>
        </div>
    )
}

export default GameCard