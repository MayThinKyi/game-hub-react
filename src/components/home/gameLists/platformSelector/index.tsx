import { ChangeEvent } from "react";
import usePlatforms from "../../../../hooks/usePlatforms"
import useGameQueryStore from "../../../../stores/useGameQueryStore";

const PlatformSelector = () => {
    const {gameQuery,setPlatformId,setPlatformName}=useGameQueryStore();
    const {data:platforms}=usePlatforms();
    const changeHandler=(e:ChangeEvent<HTMLSelectElement>)=>{
        const [platformId,platformName]=e.target.value.split('-');
        setPlatformId(Number(platformId));
        setPlatformName(platformName)
    }
  return (
    <div>
      <select className="  py-2 px-1 sm:px-4 dark:text-black border rounded-lg outline-blue-600" value={gameQuery?.platformId+'-'+gameQuery?.platformName} onChange={changeHandler} name="" id="">
        {platforms?.map((platform)=>{
            return <option   value={platform.id+'-'+platform.name}>{platform.name}</option>
        })}
      </select>
    </div>
  )
}

export default PlatformSelector
