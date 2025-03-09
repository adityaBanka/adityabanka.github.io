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
          My <span className="text-red-700 active:scale-95 inline-block duration-50 select-none" onClick={handleClick}>{count}</span>x Developer <span className='whitespace-nowrap'><span className='text-red-700 active:scale-95 inline-block duration-50 select-none' onClick={handleClick}>Pro</span>jects.</span> {count === 69 ? "😏Nice!" : ""}
        </p>
        <p className='text-justify'>I have been programming since the age of 13. Since then, I have worked with Java, C, C++, Python, JavaScript, HTML, CSS, and many other programming languages. In my journey I have made myself well versed in tools such as Git, Docker, VSCode, Postman, Android Studio, Chrome, Arduino, STM32, along with frameworks and libraries such as ReactJs, Tailwind, Spring, NumPy, Pandas, SciKit-Learn, TensorFlow, Keras, OpenCV, Google MediaPipe and more. I have used popular databases like, MySQL, SQLite, and MongoDB. I frequently use cloud services such as, Amazon Web Services (Lambda, EC2, S3, SES) and Google Cloud Platform as well.</p>
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
      <ProjectSection
        direction={0}
      />
      <ProjectSection
      />
      <ProjectSection
        direction={0}
      />
      <ProjectSection
      />
      <ProjectSection
        direction={0}
      />
      <ProjectSection
      />
    </div>
  )
}

export default Project