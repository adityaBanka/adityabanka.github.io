import ProjectSection from '../Components/ProjectSection'

function HomePage() {
  return (
    <div className='flex flex-col justify-center items-center bg-[#f5f5f7] h-full pt-20'>

      <div className='flex lg:flex-row flex-col items-center justify-center'>
        <img src="AdityaBanka.jpg" className='w-1/2 lg:w-1/4 h-auto rounded-full m-5 pointer-events-none select-none' alt="Aditya Banka" />
        <div className='flex flex-col not-lg:items-center lg:items-left justify-center space-y-1'>
          <h1 className='text-5xl font-bold text-sky-600'>Aditya Banka</h1>
          <p>Creator | Developer | <span className='text-red-700 font-semibold'>Engineer</span> | Photographer</p>  
        </div>
      </div>
    </div>
  )
}

export default HomePage