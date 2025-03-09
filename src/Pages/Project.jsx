import React from 'react'
import { useState } from 'react'
import ProjectSection from '../Components/ProjectSection'


function Project() {
  
  const [count, setCount] = useState(10);
  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div className='flex flex-col pt-20 lg:pt-60 bg-[#f5f5f7] w-full space-y-50 pb-50'>
      <div className='flex flex-col justify-center items-center space-y-10 mx-[10%]'>
        <p className='text-7xl font-bold'>
          My <span className="text-red-700 active:scale-95 inline-block duration-50 select-none" onClick={handleClick}>{count}</span>x Developer <span className='whitespace-nowrap'><span className='text-red-700 active:scale-95 inline-block duration-50 select-none' onClick={handleClick}>Pro</span>jects.</span> {count === 69? "😏Nice!" : ""}
        </p>
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur doloribus non voluptatibus laboriosam blanditiis minus quia laudantium assumenda placeat tenetur atque nihil fugit debitis magni rem accusamus, molestiae vel sint soluta molestias? Nulla, incidunt libero impedit quasi ipsam explicabo repellat doloribus, voluptatum soluta eaque fugiat labore placeat! Sed blanditiis eligendi incidunt iusto earum similique voluptatem vel est! Voluptate id dicta harum unde magni non reprehenderit labore, voluptates atque, dignissimos autem similique. Ex mollitia ipsa, itaque sequi quas veniam laborum ad facilis, quo vero illo, repudiandae expedita provident. Neque quasi, nobis fugit incidunt suscipit, maxime vitae corporis fuga ullam id aut.</p>
      </div>
      <ProjectSection
        title={
          <p>Comparative training of Artificial Neural Network using Genetic and Stocastic Algorithms</p>
        }
        description={
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem esse officia magnam nesciunt modi sunt dolor aliquam eveniet quia animi hic, perspiciatis perferendis at exercitationem quibusdam aliquid voluptates quam libero. Aperiam modi similique doloribus, officiis minus corporis numquam. Fugiat qui ad aut, ab dicta commodi officiis itaque obcaecati debitis ducimus.
          </p>
        }
      />
      <ProjectSection direction={0} />
      <ProjectSection />
      <ProjectSection direction={0} />
      <ProjectSection />
      <ProjectSection direction={0} />
      <ProjectSection />
    </div>
  )
}

export default Project