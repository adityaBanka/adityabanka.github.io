import React from 'react'
import NavBar from './Components/NavBar.jsx'

import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home.jsx'
import Project from './Pages/Project.jsx'
import Contact from './Pages/Contact.jsx'
import NotFound from './Pages/NotFound.jsx'

function App() {
  return (
    <div className='h-screen w-screen'>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      
    </div>
  )
}

export default App
