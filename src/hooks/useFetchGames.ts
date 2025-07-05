import type { Platform } from "../components/PlatformIconBox";
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

function useFetchGames(selectedCategory?: Category, selectedPlatform?: Platform, searchTag?: string) {
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

    let platformFilterParam: Param | null = null;
    platformFilterParam = selectedPlatform ? {key: 'platforms', value: `${selectedPlatform.id}`}: null


    let searchParam: Param | null = null;
    searchParam = searchTag ? {key: 'ordering', value: `${searchTag}`}: null

    const params: Param[] = []
    if (filterParam)
        params.push(filterParam)
    if (platformFilterParam)
        params.push(platformFilterParam)
    if (searchParam)
        params.push(searchParam)

    return useFetchData<Game>('/games', params, [selectedCategory, selectedPlatform, searchTag]);
}

export default useFetchGames;
