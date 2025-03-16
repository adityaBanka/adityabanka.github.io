/* eslint-disable react/prop-types */
import { useState } from 'react'
import InfoSection from '../Components/InfoSection'
import SSB from '../Components/SemiBoldBlack'

function Project() {

  const [count, setCount] = useState(10);
  const handleClick = () => {
    setCount(count + 1);
  }

  const projectData = [
    {
      title: <p>Q. Can <span className='text-4xl text-rose-400'>Evolution</span> do path finding?</p>,
      description: <p>A. Yes! it can. A Java program that simulates evolution using Genetic algorithm. I first create a population of agents that are initialized with random genes. In due time, the simulation finds the fittest individuals, crosses them over and mutates them. After a few generation the property to traverse a given path, gets ingrained in the genes of the agents.</p>,
      type: 'video',
      parameter: "mW4628K9cls"
    },
    {
      title: <p><span className='text-4xl text-green-500'>170,000,000,000</span>x faster sorting.</p>,
      description: <p>This C program is able to sort 1 Billion signed integers i.e. 3.45GB of data in about 20 seconds. It is a multi-processed program that dynamically creates new proceess based on load and requirement. By leveraging all CPU cores on a system it uses in-place quick sort methods. This reduces the overhead caused by other methods like merge sort, or heap sort. First all 1 Billion integers are loaded in a shared memory segment that will be used by all the parallel proceess. Then by usilizing divide and conquer the data is divided into smaller segments and recursively sorted.</p>,
      type: 'video',
      parameter: "8AJy5p1M8lU"
    },
    {
      title: <p>Emergant <span className='text-4xl text-rose-400'>Organic</span> structures from <span className='text-4xl text-teal-500'>Fractals</span></p>,
      description: <p>Over the summers of 23 I was facinated by fractals and their unique property to make every unique geometric patters. I then wrote a few rules of my own and explored how these patters evolve over different parameters. During one of those exploratory run, I was able to produce a function that was able to make organic looking emergant structures from very simple function using randomess at its core.</p>,
      type: 'video',
      parameter: "NjBKMzO7Om8"
    },
    {
      title: <p>Conway&apos;s <a className='text-4xl text-green-500'>Game of Life</a></p>,
      description: <p>This is my attempt at recreating the famous game of life using the world famous mathematician John Horton Conway&apos;s rules. It is a simple simulation that uses 3 simple rules applied over an infinite grid. The &apos;game&apos; explored the idea of emergant life in simple celullar automaton and how it can be used to create complex, alomst life like &apos;creaturs&apos;.</p>,
      type: 'video',
      parameter: "otJGYtez3ow"
    },
    {
      title: <p>Hunter or prey?</p>,
      description: <p>Another Java based simulation that explores the evolution of symbiotic lifeform population over time. We start with a random distridution of population with ample resources for both, and explore how these populations scale and co-exist over time.</p>
    },
    {
      title: <p>CLI real time multiclient chat application</p>,
      description: <p>A C application that allows multiple clients to connect to a server and chat with each other in real time. The server allows multiple unique users to connect via sockets and send text messages to each or all clients over local network. The application does not use any external library for the same.</p>
    },
    {
      title: <p>A neural network library written in C++</p>,
      description: <p>A complete implementaƟon of a dynamically buildable Neural Network in C++ without using helper libraries such as Keras or TensorFlow.</p>
    },
    {
      title: <p>This is not a template!</p>,
      description: <p>This is a ReactJs website styled using TailwindCSS, hosted on github pages, being linked to my custom domain on Wix.com. The CI/CD pipepline is very streamlined and updates can be pushed directly via the github repository. Even though it is a static website, I have implemented a contact system using AWS lambda along with AWS Simple Email Service. I gave special emphasis on making the design reactive, responsive and consistent.</p>,
    },
    {
      title: <p></p>,
      description: <p></p>
    }

  ]

  return (
    <div className='flex flex-col pt-20 md:pt-60 bg-gray-100 w-full space-y-20 pb-50 px-[5%] md:px[10%] snap-y snap-mandatory'>

      <div className='flex flex-col justify-center items-center space-y-10'>




        <p className='text-7xl font-bold text-gray-800'>
          My <span className="text-red-600 active:scale-95 inline-block duration-50 select-none animate-pop" onClick={handleClick}>{count}</span>x Developer <span className='whitespace-nowrap'><span className='text-red-600 active:scale-95 inline-block duration-50 select-none animate-pop' onClick={handleClick}>Pro</span>jects</span> {count === 69 ? "😏Nice!" : ""}
        </p>

        <p className='text-justify text-gray-700'>I have been programming since the age of <SSB>13</SSB>. Since then, I have worked with <SSB>Java</SSB>, <SSB>C</SSB>, <SSB>C++</SSB>, <SSB>Python</SSB>, <SSB>JavaScript</SSB>, <SSB>HTML</SSB>, <SSB>CSS</SSB>, and many other <SSB>programming languages</SSB>. In my journey I have made myself well versed in <SSB>tools</SSB> such as <SSB>Git</SSB>, <SSB>Docker</SSB>, <SSB>VSCode</SSB>, <SSB>Postman</SSB>, <SSB>Android Studio</SSB>, <SSB>Chrome</SSB>, <SSB>Arduino</SSB>, <SSB>STM32</SSB>, along with <SSB>frameworks</SSB> and <SSB>libraries</SSB> such as <SSB>ReactJs</SSB>, <SSB>NodeJs</SSB>, <SSB>Tailwind</SSB>, <SSB>FastAPI</SSB>, <SSB>Django</SSB>, <SSB>NumPy</SSB>, <SSB>Pandas</SSB>, <SSB>SciKit-Learn</SSB>, <SSB>Keras</SSB>, <SSB>TensorFlow</SSB>, <SSB>TensorflowJs</SSB>, <SSB>OpenCV</SSB>, <SSB>Google MediaPipe</SSB>, <SSB>Processing (Java)</SSB> and more. I have used popular <SSB>databases</SSB> like, <SSB>MySQL</SSB>, <SSB>SQLite</SSB>, and <SSB>MongoDB</SSB>. I frequently use cloud services such as, <SSB>Amazon Web Services (Lambda, EC2, S3, SES)</SSB> and <SSB>Google Cloud Platform</SSB> as well. Apart from this I have also devoted time to understanding <SSB>Machine Learning</SSB> and <SSB>Artificial Intelligence</SSB>, with special emphasis on <SSB>Deep Learning</SSB>. Utilising <SSB>Neural Networks</SSB> like, <SSB>1D</SSB> and <SSB>2D CNNs</SSB>, <SSB>RNNs</SSB> and a plethora of pre-existing models leveraging <SSB>Transfer Learning</SSB>.</p>
      </div>

      <div className='space-y-30'>
        {
          projectData.map((data, index) => (
            <InfoSection className="snap-start"
              key={index}
              direction={index % 2}
              title={data.title}
              description={data.description}
              type={data.type}
              parameter={data.parameter}
            />
          ))
        }
      </div>

    </div>
  )
}

export default Project