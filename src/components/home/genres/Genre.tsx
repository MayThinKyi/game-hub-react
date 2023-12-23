import useGameQueryStore from "../../../stores/useGameQueryStore";
import { Genre as GenreType } from "../../../types/types"

type Props = {
    genre:GenreType;
}

const Genre = ({genre}: Props) => {
  const {setGenre}=useGameQueryStore();
  return (
    <div onClick={()=>setGenre(genre.slug)} className="flex items-center gap-2 mb-3 cursor-pointer">
        <img src={genre.image_background} className="w-[40px] h-[40px] rounded-lg object-cover" />
        <p className="text-sm hover:underline font-semibold transition-all">{genre.name}</p>
    </div>
  )
}

export default Genre