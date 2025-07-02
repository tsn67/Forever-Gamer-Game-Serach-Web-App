import { useEffect, useState } from "react";
import apiClient from "../api/api-client";
import type { AxiosError } from "axios";

interface DataResponse<T> {
    count: number
    results: T[]
}

function useFetchData<T> (endPoint: string){

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        apiClient.get<DataResponse<T>>(endPoint)
            .then((res) => {
                setData(res.data.results);
                setLoading(false)
            })
            .catch((err: AxiosError) => {
                setError(err.message);
                setLoading(false)
            });
    }, []);


    return { data, error, loading};

}

export default useFetchData;