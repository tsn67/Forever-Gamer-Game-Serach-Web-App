import type { AxiosError } from "axios";
import apiClient from "../api/api-client";
import { useEffect, useState } from "react";

export interface Game {
    id: number
    slug: string
    name: string
    background_image: string
    parent_platforms: { platform: platform }[] 
}

interface platform {
    id: number,
    name: string,
    slug: string
}


export interface ApiResponse {
    count: number;
    results: Game[];
}

function useFetchGames() {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    //you may also make a cancel controller (use chat gpt)
    //not so important

    useEffect(() => {
        apiClient.get<ApiResponse>("/games")
            .then((res) => {
                setGames(res.data.results);
            })
            .catch((err: AxiosError) => {
                setError(err.message);
            });
    }, []);

    // useEffect(() => {
    //     if (games[0]) {
    //         console.log(games[0].parent_platforms[0].platform.name);
    //     }
    // }, [games])

    return { games, error};
}



export default useFetchGames;
