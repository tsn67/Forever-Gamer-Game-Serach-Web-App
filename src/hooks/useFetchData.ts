import { useEffect, useState } from "react";
import apiClient from "../api/api-client";
import type { AxiosError } from "axios";

interface DataResponse<T> {
    count: number;
    results: T[];
}

export type Param = {
    key: string;
    value: string;
};

function useFetchData<T>(
    endPoint: string,
    additionalParam?: Param[],
    deps?: unknown[]
) {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(
        () => {
            const requestParams = additionalParam?.reduce((acc, param) => {
                acc[param.key] = param.value;
                return acc;
            }, {} as Record<string, string>);

            setLoading(true);
            apiClient
                .get<DataResponse<T>>(endPoint, { params: requestParams })
                .then((res) => {
                    setData(res.data.results);
                    setLoading(false);
                })
                .catch((err: AxiosError) => {
                    setError(err.message);
                    setLoading(false);
                });
        },
        deps ? [...deps] : []
    );

    return { data, error, loading };
}

export default useFetchData;
