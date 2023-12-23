import { create } from "zustand";

type useThemeStoreType={
    theme:'light' | 'dark';
    toggleTheme:()=>void;
}

const useThemeStore=create<useThemeStoreType>((set)=>({
    theme:localStorage.getItem('game-hub') as 'light' | 'dark' || 'light',
    toggleTheme:()=>set((store)=>({theme:store.theme==='light' ? 'dark' : 'light'}))
}))

export default useThemeStore;