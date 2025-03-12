/* eslint-disable react/prop-types */
import { useState } from 'react'
import ProjectSection from '../Components/ProjectSection'


function BW({ children }) {
  return (
    <span className='font-semibold text-black'>{children}</span>
  )
}

function Project() {

  const [count, setCount] = useState(10);
  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div className='flex flex-col pt-20 lg:pt-60 bg-gray-100 w-full space-y-20 pb-50'>

      <div className='flex flex-col justify-center items-center space-y-10 mx-[10%]'>
        <p className='text-7xl font-bold drop-shadow-2xl'>
          My <span className="text-red-600 active:scale-95 inline-block duration-50 select-none animate-pop" onClick={handleClick}>{count}</span>x Developer <span className='whitespace-nowrap'><span className='text-red-600 active:scale-95 inline-block duration-50 select-none animate-pop' onClick={handleClick}>Pro</span>jects.</span> {count === 69 ? "😏Nice!" : ""}
        </p>

        <p className='text-justify text-gray-700'>I have been programming since the age of <BW>13</BW>. Since then, I have worked with <BW>Java</BW>, <BW>C</BW>, <BW>C++</BW>, <BW>Python</BW>, <BW>JavaScript</BW>, <BW>HTML</BW>, <BW>CSS</BW>, and many other <BW>programming languages</BW>. In my journey I have made myself well versed in <BW>tools</BW> such as <BW>Git</BW>, <BW>Docker</BW>, <BW>VSCode</BW>, <BW>Postman</BW>, <BW>Android Studio</BW>, <BW>Chrome</BW>, <BW>Arduino</BW>, <BW>STM32</BW>, along with <BW>frameworks</BW> and <BW>libraries</BW> such as <BW>ReactJs</BW>, <BW>NodeJs</BW>, <BW>Tailwind</BW>, <BW>Spring</BW>, <BW>FastAPI</BW>, <BW>Django</BW>, <BW>NumPy</BW>, <BW>Pandas</BW>, <BW>SciKit-Learn</BW>, <BW>Keras</BW>, <BW>TensorFlow</BW>, <BW>TensorflowJs</BW>, <BW>OpenCV</BW>, <BW>Google MediaPipe</BW>, <BW>Processing (Java)</BW> and more. I have used popular <BW>databases</BW> like, <BW>MySQL</BW>, <BW>SQLite</BW>, and <BW>MongoDB</BW>. I frequently use cloud services such as, <BW>Amazon Web Services (Lambda, EC2, S3, SES)</BW> and <BW>Google Cloud Platform</BW> as well. Apart from this I have also devoted time to understanding <BW>Machine Learning</BW> and <BW>Artificial Intelligence</BW>, with special emphasis on <BW>Deep Learning</BW>. Utilising <BW>Neural Networks</BW> like, <BW>1D</BW> and <BW>2D CNNs</BW>, <BW>RNNs</BW> and a plethora of pre-existing models leveraging <BW>Transfer Learning</BW>.</p> 
      </div>

      <div className='space-y-30'>
        <ProjectSection
          title={
            <p>Portfolio Website, all this.</p>
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
    </div>
  )
}

export default Project