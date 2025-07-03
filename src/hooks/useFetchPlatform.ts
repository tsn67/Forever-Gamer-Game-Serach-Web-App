import useFetchData from "./useFetchData";
import type { Platform } from "../components/PlatformIconBox";


function useFetchPlatform() {

    const { data, error } = useFetchData<Platform>("/platforms/lists/parents");

    return { data, error }
}

export default useFetchPlatform
