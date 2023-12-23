import useGenres from "../../../hooks/useGenres"
import InfinitySpinner from "../../loading/InfinitySpinner";
import Genre from "./Genre";

const Genres = () => {
    const {data:genres,isLoading}=useGenres();
    return (
    <div className="hidden md:inline-block">
      <h1 className="text-3xl font-bold my-6">Genres</h1>
      {isLoading && <InfinitySpinner/>}
       {genres?.map((genre)=>{
            return <Genre key={genre.id} genre={genre} />
       })}
    </div>
  )
}

export default Genres
