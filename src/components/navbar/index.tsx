import Logo  from '../../images/logo.png'
import { IoIosSearch } from "react-icons/io";
import ThemeToggler from './ThemeToggler';
import useThemeStore from '../../stores/useThemeStore';
import { FormEvent, useState } from 'react';
import useGameQueryStore from '../../stores/useGameQueryStore';

const Navbar = () => {
    const {theme}=useThemeStore();
    const {setSearchTerm}=useGameQueryStore();
    const [query,setQuery]=useState('');
    const handleSubmit=(e:FormEvent)=>{
      e.preventDefault();
      setSearchTerm(query);
    }
  return (
    <div className='flex items-center  sm:gap-10   py-4 px-2'>
      <img className='h-[70px]' src={Logo} alt='Logo' />
      <form onSubmit={handleSubmit} className='max-w-[200px] sm:max-w-full sm:w-full cursor-pointer bg-slate-100 transition-colors hover:bg-slate-200 flex items-center gap-2 py-3 px-5 rounded-full'>
        <IoIosSearch size={22} />
        <input value={query} onChange={(e)=>setQuery(e.target.value)} className='w-full bg-inherit hover:bg-inherit outline-none ' type="text" placeholder='Search games....' />
      </form>
      <ThemeToggler/>
    </div>
  )
}

export default Navbar
