import { useState } from 'react'
import { Switch } from '@headlessui/react'
import useThemeStore from '../../stores/useThemeStore'

export default function ThemeToggler() {
  const {theme,toggleTheme} =useThemeStore();
  const [enabled, setEnabled] = useState(theme==='dark')
  const changeHandler=()=>{
    setEnabled(!enabled);
    toggleTheme();
    localStorage.setItem('game-hub',theme==='light' ? 'dark' : 'light')
  }
  return (
    <div className='flex items-center gap-1'>
      <Switch
        checked={enabled}
        onChange={changeHandler}
        className={` mt-2 ${enabled ? 'bg-green-600' : 'bg-slate-400'}
          relative inline-flex h-[24px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-6' : 'translate-x-1'}
            pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <p className='text-nowrap'>Dark Mode</p>
    </div>
  )
}