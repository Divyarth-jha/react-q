import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/Themecontext'
const Navbar = () => {

   const data = useContext(ThemeDataContext)
  
  

  return (
    <div  className='nav py-4'>
        <h1>Context</h1>
        <Nav2 />
    </div>
  )
}

export default Navbar