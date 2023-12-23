import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './pages/home'
import GamePage from './pages/game'
import Navbar from './components/navbar'
import useThemeStore from './stores/useThemeStore'
import useGameQueryStore from './stores/useGameQueryStore'
import { useEffect } from 'react'

const App = () => {
  const {theme}=useThemeStore();
  const {gameQuery}=useGameQueryStore();
  useEffect(()=>{
    console.log(gameQuery);
    
  },[gameQuery])
  return (
    <div className={`${theme==='dark' ? 'dark' :''} min-h-[100vh]`}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/game/:id' element={<GamePage/>} />
        </Routes>
      </Router> 
    </div>
  )
}

export default App
