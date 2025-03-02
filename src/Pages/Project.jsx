import React from 'react'
import ProjectSection from '../Components/ProjectSection'

function Project() {
  return (
    <div className='flex flex-col pt-20 lg:pt-60 bg-[#f5f5f7] w-screen space-y-50 pb-50'>
      <div className='flex flex-col justify-center items-center space-y-10 mx-[10%]'>
        <p className='text-7xl font-bold'>Welcome To My Projects</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus non voluptatibus laboriosam blanditiis minus quia laudantium assumenda placeat tenetur atque nihil fugit debitis magni rem accusamus, molestiae vel sint soluta molestias? Nulla, incidunt libero impedit quasi ipsam explicabo repellat doloribus, voluptatum soluta eaque fugiat labore placeat! Sed blanditiis eligendi incidunt iusto earum similique voluptatem vel est! Voluptate id dicta harum unde magni non reprehenderit labore, voluptates atque, dignissimos autem similique. Ex mollitia ipsa, itaque sequi quas veniam laborum ad facilis, quo vero illo, repudiandae expedita provident. Neque quasi, nobis fugit incidunt suscipit, maxime vitae corporis fuga ullam id aut.</p>
      </div>
      <ProjectSection title={<u>lol</u>}/>
      <ProjectSection direction={0} />
      <ProjectSection />
      <ProjectSection direction={0}/>
      <ProjectSection />
      <ProjectSection direction={0}/>
      <ProjectSection />
    </div>
  )
}

export default Project