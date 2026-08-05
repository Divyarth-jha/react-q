import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/Themecontext';

const Button = () => {
    const [theme, setTheme] = useContext(ThemeDataContext)
     
    const changeTheme = ()=>{
       console.log('hello') ;
       setTheme('dark')
    }
  return (
    <div>
        <button  className='border p-2 m-2 bg-gray-800' onClick={changeTheme}>Theme changer</button>
    </div>
  )
}

export default Button