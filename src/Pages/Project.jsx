/* eslint-disable react/prop-types */
import { useState } from 'react'
import InfoSection from '../Components/InfoSection'


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

  const projectData = [
    {
      title: <p>This is not a template!</p>,
      description: <p>This is a ReactJs website styled using TailwindCSS, hosted on github pages, being linked to my custom domain on Wix.com. The CI/CD pipepline is very streamlined and updates can be pushed directly via the github repository. Even though it is a static website, I have implemented a contact system using AWS lambda along with AWS Simple Email Service. I gave special emphasis on making the design reactive, responsive and consistent.</p>,
    },
    {
      title: <p>Detecting sexism in MEMEs.🚨</p>,
      description: <p>In a research intern opportunity at NIT Patna, I explored the idea of image based sentiment analysis. In the project I was tasked with developing a novel solution to detect sexism in memes. This was done using the EXIST&apos;24 dataset. I worked under the guidance of Dr J. P. Singh and Dr Gunjan Kumar during my intern period. </p>,
      type: "image",
      URL: "NitCertificate.jpg"
    },
    {
      title: <p>170,000,000,000x faster sorting.</p>,
      description: <p>This C program is able to sort 1 Billion signed integers i.e. 3.45GB of data in about 20 seconds. It is a multi-processed program that dynamically creates new proceess based on load and requirement. By leveraging all CPU cores on a system it uses in-place quick sort methods. This reduces the overhead caused by other methods like merge sort, or heap sort. First all 1 Billion integers are loaded in a shared memory segment that will be used by all the parallel proceess. Then by usilizing divide and conquer the data is divided into smaller segments and recursively sorted.</p>,
      type: "video"
    },
    {
      title: <p>Q. Can evolution solve mazes?</p>,
      description: <p>A. Yes! it can. A Java program that simulates evolution using Genetic algorithm. I first create a population of agents that are initialized with random genes. In due time, the simulation finds the fittest individuals, crosses them over and mutates them. After a few generation the property to solve the given maze, gets ingrained in the genes of the agents.</p>
    }
  ]

  return (
    <div className='flex flex-col pt-20 md:pt-60 bg-gray-100 w-full space-y-20 pb-50'>

      <div className='flex flex-col justify-center items-center space-y-10 mx-[10%]'>
        <p className='text-7xl font-bold drop-shadow-2xl'>
          My <span className="text-red-600 active:scale-95 inline-block duration-50 select-none animate-pop" onClick={handleClick}>{count}</span>x Developer <span className='whitespace-nowrap'><span className='text-red-600 active:scale-95 inline-block duration-50 select-none animate-pop' onClick={handleClick}>Pro</span>jects</span> {count === 69 ? "😏Nice!" : ""}
        </p>

        <p className='text-justify text-gray-700'>I have been programming since the age of <BW>13</BW>. Since then, I have worked with <BW>Java</BW>, <BW>C</BW>, <BW>C++</BW>, <BW>Python</BW>, <BW>JavaScript</BW>, <BW>HTML</BW>, <BW>CSS</BW>, and many other <BW>programming languages</BW>. In my journey I have made myself well versed in <BW>tools</BW> such as <BW>Git</BW>, <BW>Docker</BW>, <BW>VSCode</BW>, <BW>Postman</BW>, <BW>Android Studio</BW>, <BW>Chrome</BW>, <BW>Arduino</BW>, <BW>STM32</BW>, along with <BW>frameworks</BW> and <BW>libraries</BW> such as <BW>ReactJs</BW>, <BW>NodeJs</BW>, <BW>Tailwind</BW>, <BW>FastAPI</BW>, <BW>Django</BW>, <BW>NumPy</BW>, <BW>Pandas</BW>, <BW>SciKit-Learn</BW>, <BW>Keras</BW>, <BW>TensorFlow</BW>, <BW>TensorflowJs</BW>, <BW>OpenCV</BW>, <BW>Google MediaPipe</BW>, <BW>Processing (Java)</BW> and more. I have used popular <BW>databases</BW> like, <BW>MySQL</BW>, <BW>SQLite</BW>, and <BW>MongoDB</BW>. I frequently use cloud services such as, <BW>Amazon Web Services (Lambda, EC2, S3, SES)</BW> and <BW>Google Cloud Platform</BW> as well. Apart from this I have also devoted time to understanding <BW>Machine Learning</BW> and <BW>Artificial Intelligence</BW>, with special emphasis on <BW>Deep Learning</BW>. Utilising <BW>Neural Networks</BW> like, <BW>1D</BW> and <BW>2D CNNs</BW>, <BW>RNNs</BW> and a plethora of pre-existing models leveraging <BW>Transfer Learning</BW>.</p>
      </div>

      <div className='space-y-30'>
        {
          projectData.map((data, index) => (
            <InfoSection
              key={index}
              direction = {index % 2}
              title={data.title}
              description={data.description}
              type={data.type}
              URL={data.URL}
            />
          ))
        }
      </div>

    </div>
  )
}

export default Project