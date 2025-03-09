import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'

import NavBar from './Components/NavBar.jsx'

import Home from './Pages/Home.jsx'
import Project from './Pages/Project.jsx'
import Contact from './Pages/Contact.jsx'
import NotFound from './Pages/NotFound.jsx'

function App() {

  const [pageName, setPageName] = useState(() => {
    return sessionStorage.getItem("pageName") || "/";
  });

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleBeforeUnload = () => {
      console.log("Page is being refreshed or closed");
      setPageName(location.pathname)
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);


  useEffect(() => {
    if(pageName !== '/')
    {
      navigate(pageName)
    }
  }, []);

  useEffect(() => {
    const path = location.pathname
    sessionStorage.setItem("pageName", path)
  }, [location]);

  return (
    <div className='h-full w-full'>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/work' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
