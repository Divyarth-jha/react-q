import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import NotFound404 from './pages/404'
import Men from './pages/Men'
import Women from './pages/Women'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Team from './pages/Team'
import TeamDetail from './pages/TeamDetail'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>


        <Route path='/team' element={<Team/>}/>
        <Route path='/team/:' element={<TeamDetail/>}/>
        
        teamId



        {/* Nested Routing */}
        <Route path='/product' element={<Product/>}>
                <Route path='men' element={<Men/>}/>
                <Route path='women' element={<Women/>}/>
        </Route>
        {/* dynamic Routing */}
        <Route path='/courses/:courseId' element={<CourseDetail/>} />

        <Route path='/Contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound404/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App




//  these are the route  that we make for nasted route but this not tha proprer  way---

//       <Route path='/product/men' element={<Men/>}/>
        // <Route path='/product/women' element={<Women/>}/>