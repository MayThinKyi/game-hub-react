import Genres from '../../components/home/genres'
import GameLists from '../../components/home/gameLists'

const HomePage = () => {
  return (
    <div className='px-4 sm:px-10 flex gap-20'>
      <Genres  />
      <GameLists/>
    </div>
  )
}

export default HomePage
