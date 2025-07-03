import type { Category } from "./useFetchCategories";
import useFetchData, { type Param } from "./useFetchData";

export interface Game {
    id: number
    slug: string
    name: string
    background_image: string
    parent_platforms: { platform: platform }[] 
    metacritic: number
}

interface platform {
    id: number,
    name: string,
    slug: string
}


// export interface ApiResponse {
//     count: number;
//     results: Game[];
// }

function useFetchGames(selectedCategory?: Category) {
    // const [games, setGames] = useState<Game[]>([]);
    // const [error, setError] = useState("");
    // const [loading, setLoading] = useState(false)

    //you may also make a cancel controller (use chat gpt)
    //not so important

    // useEffect(() => {
    //     setLoading(true)
    //     apiClient.get<ApiResponse>("/games")
    //         .then((res) => {
    //             setGames(res.data.results);
    //             setLoading(false)
    //         })
    //         .catch((err: AxiosError) => {
    //             setError(err.message);
    //             setLoading(false)
    //         });
    // }, []);

    let filterParam: Param | null = null; 
    filterParam = selectedCategory ? {key: 'genres', value: `${selectedCategory.id}`}: null

    return useFetchData<Game>('/games', filterParam ? [filterParam]: undefined, [selectedCategory]);
}



export default useFetchGames;
