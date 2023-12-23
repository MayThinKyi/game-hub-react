import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../services/api-client";
import { Screenshot } from "../types/types";

const useScreenshots=(id:number)=>{
    const apiClient=new ApiClient<Screenshot>(`/games/${id}/screenshots`);
    return useQuery({
        queryKey:['screenshots',id],
        queryFn:()=>apiClient.getAll()
    })
};

export default useScreenshots;