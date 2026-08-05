import React from 'react'
import LeftText from './LeftText'
import Image from './Image'

const Center = (props) => {
  return (
    <div className=' h-[90vh] w-full gap-10 px-18 py-10 flex justify-between items-center'>
        <LeftText/>
        <Image users={props.users}/>
    </div>
  )
}

export default Center