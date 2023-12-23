import imgUrl from "../../../../services/img-url";
import { Game } from "../../../../types/types";
import Emoji from "./Emoji";
import Platform from "./Platform";
import Score from "./Score";

type Props = {
    game:Game;
}

const GameCard = ({game}: Props) => {
  
  return (
    <div className='rounded-xl border dark:border-0 cursor-pointer hover:scale-110 transition-all shadow-sm hover:shadow-lg'>
        <img className='rounded-t-xl w-full lg:max-h-[153px] object-cover' src={imgUrl(game?.background_image)} alt={game.name} />
        <div className="p-3">
        <div className="flex items-center justify-between">
        <div className="my-3 flex items-center gap-2 flex-wrap">
                {game?.parent_platforms?.map((platform)=>{
                  return <Platform key={platform?.platform?.id} platform={platform?.platform} />
                })}
              </div>
              <Score score={game?.metacritic} />
          </div>
            <h1 className='text-2xl font-bold'>{game?.name}</h1>
            <Emoji rating={game?.rating_top} />
        </div>
    </div>
  )
}

export default GameCard