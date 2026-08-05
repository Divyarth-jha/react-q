import React from 'react'
import { X } from 'lucide-react';
const Card = (props) => {
  return (
     <div className=" h-60 w-45 bg-cover relative  rounded-2xl bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')] text-black p-4 ">
        <button onClick={props.onDelete} className='cursor-pointer active:scale-95 absolute top-3.2 right-2 '><X className=' h-5 w-5 bg-red-500 text-gray-600 p-0.5 rounded   mt-4'/></button>
      <div>
          <h2 className="text-lg font-bold mt-7">{props.heading}</h2>
      <p className='mt-2 leading-tight font-medium text-gray-600'>{props.textarea}</p>
      </div>
     </div>
  )
}

export default Card