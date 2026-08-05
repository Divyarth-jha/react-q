import React from 'react'

const Navbar = (props) => {


  return (
    <div>
        <button onClick={()=>{
            props.setTheam('Dark')
        }} >Change Theam</button>
    </div>
  )
}

export default Navbar