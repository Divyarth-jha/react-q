import React from 'react'
import { MoveRight } from 'lucide-react';

const Card = (props) => {
  
  return (
    <div className=' h-full w-60  overflow-hidden relative rounded-4xl shrink-0'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col  justify-between'>
        <h2 className='bg-white rounded-full text-2xl font-semibold h-11 w-11 flex justify-center items-center'>{props.id +1}</h2>
        <div>
          <p className='text-lg leading-[1.1] text-justify hyphens-auto text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora adipisci inventore aspernatur. Ad, sunt asperiores?</p>
          <div className='justify-between flex mt-5'>
            <bitton className='bg-blue-600 text-white font-normal px-3 py-1.5 rounded-full text-lg'>{props.tag}</bitton>
            <button className='bg-blue-600 text-white font-normal px-3 py-1.5 rounded-full text-lg'><MoveRight /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card