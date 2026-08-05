import React from 'react'
import { useState } from 'react';
import Card from './Components/Card';
import { X } from 'lucide-react';

const App = () => {

  const [heading, setHeading] = useState("")
  const [textarea, setTextArea] = useState("")
  const [notes, setNotes] = useState([]);


  

  const submitHandler=(e)=>{
   console.log('From sumitted');
    e.preventDefault()

      const newNote = {
      heading,
      textarea,
    };
    

    setNotes([...notes, newNote]); 

    setHeading('')
    setTextArea('')
  }

  const deleteNote = (index)=>{
    console.log('note deleted ')
    const delNote =[...notes]
    delNote.splice(index,1)
    setNotes(delNote )
  }
  return (
    <div className=' h-screen lg:flex bg-black '>
      <form 
      onSubmit={(e)=>{ 
           submitHandler(e)
         }} 
      action=" "
       className=' items-start lg:w-1/2 flex gap-4 p-10 flex-col '>

          
            
        <input 
        type="text"
        value={heading}
        onChange={(e)=>{ 
          setHeading(e.target.value)
        }}
         placeholder='Enter Notes Heading'
        className=' px-5 py-2 border-2  w-full font-medium text-white rounded border-white outline-none' 
        />
         <textarea type="text" 
         value={textarea}
         onChange={(e)=>{
          setTextArea(e.target.value)
         }}
         className='border-2 h-28 w-full border-white font-medium px-5 py-2 rounded  text-white outline-none'
           placeholder='Write Details'
         />
         <button 
         className='bg-white  w-full text-lack py-2 px-5 font-medium rounded '>
          Add note
          </button>

        
         {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png" className=' rotate-y-180 h-60 mr-20 mt-6' alt="" /> */}
      </form>
      <div className=' px-5 p-10  lg:w-1/2'>
        <h1 className='text-xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap  gap-5 h-full'>
          {notes.map((note,index)=>{
            return <Card
            key={index}
            heading={note.heading}
            textarea={note.textarea}
            onDelete={() => deleteNote(index)}
            />
            
          })}
        </div>
      </div>
    </div>
  )
}

export default App


