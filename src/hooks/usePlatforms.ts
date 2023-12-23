import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../services/api-client";
import { Platform } from "../types/types";

const apiClient=new ApiClient<Platform>('/platforms/lists/parents');
const usePlatforms=()=>useQuery({
    queryKey:['platforms'],
    queryFn:()=>apiClient.getAll()
})

export default usePlatforms;