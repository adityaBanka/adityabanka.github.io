import { Routes, Route } from 'react-router-dom'

import NavBar from './Components/NavBar.jsx'

import Home from './Pages/Home.jsx'
import Project from './Pages/Project.jsx'
import Contact from './Pages/Contact.jsx'
import NotFound from './Pages/NotFound.jsx'
// import Blog from './Pages/Blog.jsx'

function App() {

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className='h-full w-full'>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/work' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/blog' element={<Blog />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
