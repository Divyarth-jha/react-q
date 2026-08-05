import React from 'react'
import Card from './Card'

const Image = (props) => {
  return (
    <div id='right' className='h-full flex-nowrap shrink-0 flex gap-3 w-2/3 p-4 overflow-x-auto'>
      {props.users.map(function (elem ,idx) {
        return <Card img={elem.image} key={idx} id={idx} tag={elem.tag}/>
      })}
    </div>
  )
}

export default Image