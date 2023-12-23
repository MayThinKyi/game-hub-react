import React from "react";
import useGames from "../../../hooks/useGames"
import useGameQueryStore from "../../../stores/useGameQueryStore";
import { GameQuery } from "../../../types/types";
import Skeletons from "../../loading/Skeletons";
import GameCard from "./gameCard";
import PlatformSelector from "./platformSelector";
import SortSelector from "./sortSelector";
import Heading from "./heading";

const GameLists = () => {
  const {gameQuery}=useGameQueryStore();
    const {data:games,isLoading,isFetchingNextPage,fetchNextPage}=useGames(gameQuery as GameQuery);
    
  return (
    <div className="py-5 w-full">
      <Heading/>
      <div className="flex flex-wrap items-center gap-5  sm:gap-10 mb-10">
        <PlatformSelector/>
        <SortSelector/>
      </div>
      {  isLoading && <Skeletons/>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {games?.pages?.map((page,index)=>{
        return <React.Fragment key={index}>
           {page?.map((game)=>{
            return <GameCard game={game} key={game?.id} />
           })}
        </React.Fragment>
      })}
      </div>
      {games  && <button className="mt-5 mb-10 py-3 px-6 font-semibold bg-slate-200 hover:bg-slate-300 text-slate-600 rounded-lg" onClick={()=>fetchNextPage()}>{isFetchingNextPage ? 'Loading...' :' Load More'}</button>}
    </div>
  )
}

export default GameLists
