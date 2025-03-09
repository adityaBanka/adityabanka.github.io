import React from 'react'
import ProjectSection from '../Components/ProjectSection'

function HomePage() {
  return (
    <div className='flex flex-col justify-center items-center bg-[#f5f5f7] h-fit pt-20 p-[10%]'>

      <div className='flex lg:flex-row flex-col items-center justify-center'>
        <img src="image.png" />
        <div>
          <h1 className=''>Aditya Banka</h1>
          <p>Hi how you doin'?</p>
        </div>
      </div>

      <ProjectSection></ProjectSection>

    </div>
  )
}

export default HomePage