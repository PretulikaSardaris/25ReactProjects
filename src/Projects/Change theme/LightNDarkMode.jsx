import React, { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'

const LightNDarkMode = () => {
    const [theme , setTheme]= useLocalStorage('theme' , 'light');

    useEffect(() => {
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        }
        else{
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    function handleToggleTheme(){
        
        setTheme(theme === 'light' ? 'dark' : 'light')

    }
  return (
    <div className='bg-pink-500 dark:bg-gray-900 h-96 w-96'>
      <div className='bg-pink-900  dark:bg-gray-800 rounded-md
'>
        <p className='bg-pink-800  dark:bg-gray-700
'>Hello Guys</p>
        <button onClick = {handleToggleTheme} className='bg-pink-400 dark:bg-gray-600
'> click to Change Theme</button>
      </div>
    </div>
  )
}

export default LightNDarkMode
