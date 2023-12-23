import useGameQueryStore from "../../../../stores/useGameQueryStore"

const Heading = () => {
    const {gameQuery}=useGameQueryStore();
    let heading='';
    if(gameQuery?.genre) heading=heading+gameQuery.genre.toUpperCase()+' ';
    if(gameQuery?.platformName) heading=heading+gameQuery.platformName;
    heading+=' Games';
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">{heading}</h1>
    </div>
  )
}

export default Heading
