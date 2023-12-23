import Skeleton from "./Skeleton"
const times=[1,2,3,4,5,6,7,8,9,10,11,12]
const Skeletons = () => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {times.map((_item,key)=>{
        return <Skeleton key={key} />
      })}
    </div>
  )
}

export default Skeletons