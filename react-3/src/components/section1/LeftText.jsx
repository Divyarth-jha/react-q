import React from 'react'
import { MoveUpRight } from 'lucide-react';
const LeftText = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between bg-white'>
        <div className='p-6'>
           <h3 className=' text-5xl font-bold p-1 mb-7 leading-[1.1]'>Prospective <br/><span >Customer</span> <br/>Segmentation</h3>
           <p className='text-xl font-medium text-gray-600' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi expedita illum maiores nisi neque molestiae dolores, mollitia qui accusantium cum?</p>
        </div>
        <div>
            <MoveUpRight  className='w-12 h-12 text-8xl  '/>
        </div>
    </div>
  )
}

export default LeftText