import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-cyan-900 item-center py-4 px-8'>
        <h2 className='text-xl font-bold'>Finora</h2>
        <div className='flex gap-8  '>
          <Link className='text-lg font-bold' to='/' >Home</Link>
          <Link className='text-lg font-bold' to='/about' >About</Link>
          <Link className='text-lg font-bold' to='/contact' >Contact</Link>
          <Link className='text-lg font-bold' to='/Product' >Product</Link>
          <Link className='text-lg font-bold' to='/courses' >Courses</Link>
          <Link className='text-lg font-bold' to='/team' >Team</Link>
          
        </div>
    </div>
  )
}

export default Navbar