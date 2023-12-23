import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../services/api-client";
import { Game } from "../types/types";

const useGame=(id:number)=>{
    const apiClient=new ApiClient<Game>(`/games/${id}`)

   return useQuery({
        queryKey:['game',id],
        queryFn:()=>apiClient.get()
    });
}


export default useGame;