import React from 'react'
function ProjectSection({ direction, title, description }) {
  return (

    <div className={`relative w-screen flex justify-center items-center px-[10%] lg:space-x-5 flex-col ${direction === 0 ? "lg:flex-row-reverse lg:space-x-reverse" : "lg:flex-row "}`}>

      <iframe className='min-w-[55%] w-full aspect-16/9 rounded-2xl lg:rounded-4xl pointer-events-none' src="https://www.youtube.com/embed/p2AWYanIHkc?autoplay=1&mute=1&fs=0&controls=0&disablekb=1&rel=0&button=0&loop=1&playlist=p2AWYanIHkc"></iframe> 

      <div className={`${direction === 0 ? "lg:text-right" : "lg:text-left"} text-center`}>

        <p className='text-5xl mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quae!</p>

        <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, cum mollitia incidunt veniam ab dolor exercitationem vitae molestias! Quasi deleniti, consequuntur corrupti aspernatur dolore asperiores iste nisi accusamus iusto neque ad quia, consequatur molestias unde vero, amet impedit nesciunt? Dolore ut, ex explicabo optio architecto in expedita non ea sed ullam numquam suscipit veritatis? Dolorem repudiandae fugit sunt, debitis eligendi enim inventore facere impedit eveniet iste iure dolore vel deserunt reiciendis eos est totam ipsam non nesciunt? Doloremque quo aliquid optio eum nemo non architecto illum, aut nulla commodi! Amet quaerat nulla, reiciendis deserunt dicta numquam obcaecati soluta architecto odit.</p>

      </div>

    </div>
  )
}

export default ProjectSection