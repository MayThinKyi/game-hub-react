import { useQuery } from "@tanstack/react-query";
import { ApiClient } from "../services/api-client";
import { Genre } from "../types/types";

const apiClient=new ApiClient<Genre>('/genres');
const useGenres=()=>useQuery({
    queryKey:['genres'],
    queryFn:()=>apiClient.getAll()
});

export default useGenres;
