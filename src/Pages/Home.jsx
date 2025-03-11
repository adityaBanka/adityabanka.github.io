import ProjectSection from '../Components/ProjectSection'

function HomePage() {
  return (
    <div className='flex flex-col justify-center items-center bg-gray-100 h-full min-h-screen pt-20 space-y-20'>

      <div className='flex lg:flex-row flex-col items-center justify-center'>
        <img src="AdityaBanka.jpg" className='w-1/2 lg:w-1/4 h-auto rounded-[100px] m-5 pointer-events-none select-none' alt="Aditya Banka" />
        <div className='flex flex-col not-lg:items-center lg:items-left justify-center space-y-1'>
          <h1 className='text-5xl font-bold text-sky-600'>Aditya Banka</h1>
          <p>Creator | Developer | <span className='text-red-700 font-semibold'>Engineer</span> | Photographer</p>  
        </div>
      </div>

      <ProjectSection></ProjectSection>
    </div>
  )
}

export default HomePage