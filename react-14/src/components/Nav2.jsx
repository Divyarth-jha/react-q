import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/Themecontext'

const Nav2 = () => {


  const [theme,setTheme] =  useContext(ThemeDataContext)


  return (
    <div className='nav2'>
        <h4>home</h4>
        <h4>About </h4>
        <h4>Contact</h4>
        <h4>services</h4>
        <h4>{theme}</h4>
    </div>
  )
}

export default Nav2