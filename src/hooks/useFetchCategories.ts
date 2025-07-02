import useFetchData from "./useFetchData";

interface Category {
    id: number
    name: string
}

//removed due to refactoring (general daat fetching)
// interface ApiResponseCategories {
//     count: number
//     results: Category[]
// }

const useFetchCategoreies = () => {

    // const [categories, setCategories] = useState<Category[]>([]);
    // const [error, setError] = useState("");
    // const [loading, setLoading] = useState(false)

    //you may also make a cancel controller (use chat gpt)
    //not so important

    // useEffect(() => {
    //     setLoading(true)
    //     apiClient.get<ApiResponseCategories>("/genres")
    //         .then((res) => {
    //             setCategories(res.data.results);
    //             setLoading(false)
    //         })
    //         .catch((err: AxiosError) => {
    //             setError(err.message);
    //             setLoading(false)
    //         });
    // }, []);


    return useFetchData<Category>('/genres')

}

export default useFetchCategoreies;
