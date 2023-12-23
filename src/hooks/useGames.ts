import { useInfiniteQuery } from "@tanstack/react-query";
import { ApiClient } from "../services/api-client";
import { Game, GameQuery } from "../types/types";

const apiClient=new ApiClient<Game>('/games');
const useGames=(gameQuery:GameQuery)=>{
    return useInfiniteQuery<Game[]>({
        queryKey:['games',gameQuery],
        queryFn:({pageParam=1})=>apiClient.getAll({
            params:{
                search:gameQuery?.searchTerm,
                parent_platforms:gameQuery?.platformId,
                genres:gameQuery?.genre,
                ordering:gameQuery?.sort,
                page:pageParam
            }
        }),
        initialPageParam:undefined,
        getNextPageParam:((lastPage,allPages)=>{
            return lastPage.length>0 ? allPages.length+1 :undefined; 
        })
    
    })
};

export default useGames;