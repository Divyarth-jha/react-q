import React from 'react'
import Contact from './Pages/Contact'
import AboutUs from './Pages/AboutUs'
import Home from './Pages/Home'
import { Routes ,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/about"  element={<AboutUs/>}/>
        <Route path="/contact"  element={<Contact/>}/>
      </Routes>
      
    </div>
  )
}

export default App