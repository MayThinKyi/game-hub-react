import { create } from "zustand";
import { GameQuery } from "../types/types";

type useGameQueryStoreType={
    gameQuery?:GameQuery;
    setSearchTerm:(searchTerm:string)=>void;
    setGenre:(genre:string)=>void;
    setPlatformId:(platformId:number)=>void;
    setPlatformName:(platformName:string)=>void;
    setSort:(sort:string)=>void;
}

const useGameQueryStore=create<useGameQueryStoreType>((set)=>({
     setSearchTerm:(searchTerm)=>set(()=>({gameQuery:{searchTerm}})),
     setGenre:(genre)=>set((store)=>({gameQuery:{...store.gameQuery,genre}})),
     setPlatformId:(platformId)=>set((store)=>({gameQuery:{...store.gameQuery,platformId}})),
     setPlatformName:(platformName)=>set((store)=>({gameQuery:{...store.gameQuery,platformName}})),
     setSort:(sort)=>set((store)=>({gameQuery:{...store.gameQuery,sort}})),   
}));

export default useGameQueryStore;