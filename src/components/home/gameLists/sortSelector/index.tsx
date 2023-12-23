import { ChangeEvent } from "react";
import useGameQueryStore from "../../../../stores/useGameQueryStore"

const SortSelector = () => {
    const {gameQuery,setSort}=useGameQueryStore();
    const sorts=[
        {id:'created',name:'Revalance'},
        {id:'added',name:'Date added'},
        {id:'name',name:'Name'},
        {id:'released',name:'Release Date'},
        {id:'metacritic',name:'Popularity'},
        {id:'rating',name:'Average Rating'}
    ]
    const changeHandler=(e:ChangeEvent<HTMLSelectElement>)=>{
        setSort(e.target.value)
    }
  return (
    <div>
      <select className="py-2 px-1 sm:px-4 dark:text-black border rounded-lg outline-blue-600" value={gameQuery?.sort} onChange={changeHandler} name="" id="">
        {sorts?.map((sort)=>{
            return <option   value={sort.id}>{sort.name}</option>
        })}
      </select>
    </div>
  )
}

export default SortSelector
