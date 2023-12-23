import Logo  from '../../images/logo.png'
import { IoIosSearch } from "react-icons/io";
import ThemeToggler from './ThemeToggler';
import { FormEvent, useState } from 'react';
import useGameQueryStore from '../../stores/useGameQueryStore';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const {setSearchTerm}=useGameQueryStore();
    const [query,setQuery]=useState('');
    const handleSubmit=(e:FormEvent)=>{
      e.preventDefault();
      setSearchTerm(query);
    }
  return (
    <div className='flex items-center  sm:gap-10   py-4 px-2 sm:px-10'>
      <Link className='max-h-[80px] max-w-[80px] ' to={'/'}>
        <img className='w-full h-full object-cover' src={Logo} alt='Logo' />
      </Link>
      <form onSubmit={handleSubmit} className='max-w-[200px] sm:max-w-full sm:w-full cursor-pointer dark:text-black bg-slate-100 transition-colors hover:bg-slate-200 flex items-center gap-2 py-3 px-5 rounded-full'>
        <IoIosSearch size={22} />
        <input value={query} onChange={(e)=>setQuery(e.target.value)} className='w-full dark:text-black bg-inherit hover:bg-inherit outline-none ' type="text" placeholder='Search games....' />
      </form>
      <ThemeToggler/>
    </div>
  )
}

export default Navbar
