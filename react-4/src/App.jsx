import React from 'react'
import { useState } from 'react'

const App = () => {
  const [a, seta] = useState(20)
  const [Users, setUsers] = useState('gaurav')

function Array(){
  setUsers('ritika')
}
  return (
    <div>
      <h1>{Users}</h1>
      <button className='border  m-2 p-2' onClick={Array}>click</button>
    </div>
  )
}

export default App



