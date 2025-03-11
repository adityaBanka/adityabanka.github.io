import { NavLink, useLocation } from 'react-router-dom'

const CustomButton = ({ children, activity }) => {
  return (
    <button className={`w-25 duration-100 text-sm rounded-full hover:text-sky-400 active:scale-95 ${activity ? 'text-blue-400 text-xl font-bold' : 'hover:scale-110 text-slate-500 py-5'}`}>
      {children}
    </button>
  )
}

function Home() {
  const location = useLocation();

  const blurClass = location.pathname === '/work' ? 'backdrop-blur-lg' : 'backdrop-blur-sm';

  return (
    <nav className={`fixed z-10 w-screen flex justify-center items-center bg-[#f5f5f7]/50 ${blurClass}`}>
      <NavLink to='/home'>
        {
          ({ isActive }) =>
            <CustomButton activity={isActive || location.pathname === '/'}>Home</CustomButton>
        }
      </NavLink>
      <NavLink to='/work'>
        {
          ({ isActive }) =>
            <CustomButton activity={isActive}>Work</CustomButton>
        }
      </NavLink>
      <NavLink to='/contact'>
        {
          ({ isActive }) =>
            <CustomButton activity={isActive}>Contact</CustomButton>
        }
      </NavLink>
    </nav>
  )
}

export default Home;