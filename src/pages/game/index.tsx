import { useParams } from 'react-router-dom'
import useGame from '../../hooks/useGame';
import { useState } from 'react';
import useScreenshots from '../../hooks/useScreenshots';
import TailSpinner from '../../components/loading/TailSpinner';

const GamePage = () => {
  const {id}=useParams();
  const {data,isLoading}=useGame(Number(id));
  const {data:screenshots}=useScreenshots(Number(id));
  const [isReadMore,setIsReadMore]=useState(false);
  console.log('screenshots',screenshots);
  
  const overview=isReadMore ? data?.description_raw : data?.description_raw.slice(0,250)+'....'
  if(isLoading) return <TailSpinner/>
  return ( 
    <div className='flex flex-wrap lg:flex-nowrap gap-20 py-10 px-5 sm:px-10'>
      <div className='lg:w-[45%]' >
        <h1 className='text-4xl font-bold mb-6'>{data?.name}</h1>
        <p>{overview}</p>
        <button className='py-1 px-2 rounded-lg text-xs font-bold bg-green-600 text-white' onClick={()=>setIsReadMore(!isReadMore)}>{isReadMore ? 'Read Less' : 'Read More'}</button>
        <div className="mt-8 flex justify-between">
          <div>
            <h1 className='text-lg font-bold text-slate-500 mb-1'>Platforms</h1>
            {data?.parent_platforms.map((platform)=>{
              return <p key={platform.platform.id}>{platform.platform.name}</p>
            })}
          </div>
          <div>
            <h1 className='text-lg font-bold text-slate-500 mb-1'>Meta Score</h1>
            <p className={`${!data?.metacritic ? '' : data?.metacritic<70 ? 'bg-[#FEFCBF]' : 'bg-[#C6F6D5]'} w-max py-1 px-2 rounded-lg font-bold text-green-600 `}>{data?.metacritic}</p>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <div>
            <h1 className='text-lg font-bold text-slate-500 mb-1'>Genres</h1>
            {data?.genres.map((genre)=>{
              return <p key={genre.id}>{genre.name}</p>
            })}
          </div>
          <div>
            <h1 className='text-lg font-bold text-slate-500 mb-1'>Publishers</h1>
            {data?.publishers.map((publisher)=>{
              return <p key={publisher.id}>{publisher.name}</p>
            })}
          </div>
        </div>
      </div>
      <div className='lg:w-[55%] h-max grid grid-cols-1 md:grid-cols-2 gap-5'>
        {screenshots?.map((screenshot)=>{
          return <img className='cursor-pointer rounded-lg object-cover w-full h-[160px]' key={screenshot.id} src={screenshot.image} />
        })}
      </div>
    </div> 
  )
}

export default GamePage
