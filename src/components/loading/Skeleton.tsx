
const Skeleton = () => {
  return (
    <div role="status" className=" animate-pulse ">
    <div className="  w-[auto]   h-[145px] bg-gray-300 rounded-lg">
    </div>
    <div className="w-full mt-4">
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    </div>
</div>
  )
}

export default Skeleton
