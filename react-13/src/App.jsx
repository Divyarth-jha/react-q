import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
const App = () => {

  const [Theam, setTheam] = useState('Light')
  return (
    <div>
     <h1>Them is {Theam}</h1>
      <Navbar theam={Theam} setTheam={setTheam}/>
    </div>
  )
}

export default App