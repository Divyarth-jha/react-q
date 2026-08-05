// import React from 'react'
// import { Link } from 'react-router-dom'

// const product = () => {
//   return (
//     <div>
//       <div className='text-white flex justify-center items-center gap-10 py-2 px-4 '>
//         <Link to='/product/women' >Women</Link>
//         <Link to='/product/men'>Men</Link>
//       </div>
//         <h1>Prdouct page</h1>
//     </div>
//   )
// }

// export default product     ---/ this method  create  different route  from prdouct  is not the proper way of doing nested routing


import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const product = () => {
  return (
    <div>
      <div className='text-white flex justify-center items-center gap-10 py-2 px-4 '>
        <Link to='/product/women' >Women</Link>
        <Link to='/product/men'>Men</Link>
      </div>
        
        <Outlet/>
    </div>
  )
}

export default product