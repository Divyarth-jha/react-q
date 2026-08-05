import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

   const navigate = useNavigate()

  return (
    <div>
      <button onClick={()=>{
        navigate('/')
      }} className=' rounded  p-2 bg-emerald-800 m-2 cursor-pointer active:scale-95'>Return to home page</button>
      <button onClick={()=>{
        navigate(-1)
      }} className=' rounded  p-2 bg-emerald-800 m-2 cursor-pointer active:scale-95'>Back</button>
        <h1>About  Page</h1>
    </div>
  )
}

export default About