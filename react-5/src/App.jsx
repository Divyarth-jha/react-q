import React from 'react'
import {useState } from 'react'
const App = () => {
 
  const [title, setTitle] = useState('')


 


 const submitHandler =(e)=>{
   console.log('form submitted');
   
   
    e.preventDefault()
     setTitle('')
 }

  return (
    <div>
      <form action="" onSubmit={(e)=>{
        submitHandler(e)
      }} className=' flex m-5  gap-5 '>
        <input type="text" value={title} onChange={(e)=>{
          setTitle(e.target.value)
           ;
        }} className=' border  bg-gray-200 p-1' placeholder='Enter your name' />
        <button className='border rounded-2xl  p-2 bg-gray-400'>Submite</button>
      </form>
    </div>
  )
}

export default App
