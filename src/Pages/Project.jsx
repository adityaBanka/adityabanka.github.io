import { useEffect, useState } from 'react'
import InfoSection from '../Components/InfoSection'
import SSB from '../Components/SemiBoldBlack'

function Project() {

  const [count, setCount] = useState(10);
  const handleClick = () => {
    setCount(count + 1);
  }

  useEffect(() => {
  }, [])

  const projectData = [
    {
      title: <p>Q. Can <span className='text-4xl text-rose-400'>Evolution</span> solve mazes.</p>,
      description: <p>A. Yes! it can. A Java program that simulates evolution using Genetic algorithm. I first create a population of agents that are initialized with random genes. In due time, the simulation finds the fittest individuals, crosses them over and mutates them. After a few generation the property to traverse a given path, gets ingrained in the genes of the agents.</p>,
      type: 'video',
      parameter: "mW4628K9cls",
      link: "https://github.com/adityaBanka/geneticAgents"
    },
    {
      title: <p><span className='text-4xl text-green-500'>170,000,000,000</span>x faster sorting.</p>,
      description: <p>This C program is able to sort 1 Billion signed integers i.e. 3.45GB of data in about 20 seconds. It is a multi-processed program that dynamically creates new process based on load and requirement. By leveraging all CPU cores on a system it uses in-place quick sort methods. This reduces the overhead caused by other methods like merge sort, or heap sort. First all 1 Billion integers are loaded in a shared memory segment that will be used by all the parallel processes. Then by utilizing divide and conquer the data is divided into smaller segments and recursively sorted.</p>,
      type: 'video',
      parameter: "8AJy5p1M8lU",
      link: "https://github.com/adityaBanka/distributedSorting"
    },
    {
      title: <p>Emergent <span className='text-4xl text-rose-400'>Organic</span> structures from <span className='text-4xl text-teal-500'>Fractals</span></p>,
      description: <p>Over the summer of 23 I was fascinated by fractals and their property to make geometric patters from simple rules. I then wrote a few rules of my own and explored how these patters evolve over different parameters. During one of those exploratory run, I was able to produce a function that was able to make organic looking emergent structures from very simple function using randomness at its core.</p>,
      type: 'video',
      parameter: "NjBKMzO7Om8",
      link: "https://github.com/adityaBanka/organicFractal"
    },
    {
      title: <p>Conway&apos;s <span className='text-4xl text-green-500'>Game of Life</span></p>,
      description: <p>This is my attempt at recreating the famous game of life using the world famous mathematician John Horton Conway&apos;s rules. It is a simple simulation that uses 3 simple rules applied over an infinite grid. The &apos;game&apos; explored the idea of emergent life in simple cellular automaton and how it can be used to create complex, almost life like &apos;creatures&apos;.</p>,
      type: 'video',
      parameter: "otJGYtez3ow",
      link: "https://github.com/adityaBanka/gameOfLife"
    },
    {
      title: <p>Better illumination using <span className='text-4xl bg-gradient-to-t from-orange-500 via-slate-400 to-slate-700 bg-clip-text text-transparent'>2D Ray Casting</span></p>,
      description: <p>Conventional graphics are illuminated using light maps, which is a raster technique, the non conventional but better option is ray tracing. Even they are do no come close to the best possible, that is Ray casting, a technique that is exponentially more compute extensive that both, but producing completely natural looking environments by projecting beams of light not from the point of observation but from the point of emission.</p>,
      type: 'video',
      parameter: "tL5rS0rHW4Y",
      link: "https://github.com/adityaBanka/rayCasting"
    },
    {
      title: <p><span className='text-4xl text-red-500'>Predator</span> or <span className='text-4xl text-green-500'>Prey</span>?</p>,
      description: <p>Another Java based simulation that explores the evolution of symbiotic lifeforms population over time. We start with a random distribution of population with ample resources for both, and explore how these populations scale and co-exist over time.</p>,
      type: 'video',
      parameter: "O23QpmtvLOc",
      link: "https://github.com/adityaBanka/predatorOrPrey"
    },
    {
      title: <p>I know you&apos;ve seen these <span className='text-4xl text-cyan-500'>Sorting</span> videos.</p>,
      description: <p>..and I made one too. Inspired by a popular youtube video, I attempted at recreating the same, by diving deeper, learning step based frame and how to efficiently use simple data structures like arrays and hashmaps. With no real world application this was a learning experience.</p>,
      type: "video",
      parameter: "UIWkpdtD1E8",
      link: "https://github.com/adityaBanka/sortingVideo"
    },
    {
      title: <p><span className='text-4xl text-purple-500'>Real-time multiclient</span> CLI chat application</p>,
      description: <p>A linux based C application that allows multiple clients to connect to a server and chat with each other in real time. The server allows multiple unique users to connect via sockets and send text messages to each or all clients over local network. The application does not use any external library for the same.</p>,
      link: "https://github.com/adityaBanka/realTimeCLIChatApp"
    },
    {
      title: <p>Neural network <span className='text-4xl text-emerald-500'>library</span> written in C++</p>,
      description: <p>A complete implementation of a library that let&apos;s you dynamically build a Neural Network in C++ without using helper libraries such as Keras or TensorFlow.</p>,
      link: "https://github.com/adityaBanka/neuralNetworkLibrary"
    },
    {
      title: <p>This is <span className='text-4xl text-lime-500'>not a template</span>!</p>,
      description: <p>This is a ReactJs website styled using TailwindCSS, hosted on github pages, being linked to my custom domain on Wix.com. The CI/CD pipeline is very streamlined and updates can be pushed directly via the github repository. Even though it is a static website, I have implemented a contact system using AWS lambda along with AWS Simple Email Service. I gave special emphasis on making the design reactive, responsive and consistent.</p>,
      type : "landscape",
      parameter : "websiteImage.jpg",
      link: "https://github.com/adityaBanka/adityabanka.github.io"
    },
    {
      title: <p>Efficacy analysis of <span className='text-4xl text-blue-500'>Genetic vs Gradient</span> based algorithm for neural network training</p>,
      description: <p>As part of my college project, I was tasked to come up with an independent topic of research and devoted my time understanding the differences between Genetic Algorithm and Gradient Descent. I then implemented both of them and compared their performance. The results were quite surprising, Genetic Algorithm was able to find the global optimum in a much shorter time than Gradient Descent for the chosen task.</p>,
      type: "image",
      link: "https://github.com/adityaBanka/geneticVsGradient"
    },
    {
      title: <p>Observe the side effects of <span className='text-4xl text-orange-500'>context switching</span>.</p>,
      description: <p>A python script that lets you overload your CPU and observe the side effects of context switching. </p>,
      type: "landscape",
      parameter: "",
      link: "https://github.com/adityaBanka/findingContextSwitches"
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

      <div className='space-y-10 md:space-y-30'>
        {
          projectData.map((data, index) => (
            <InfoSection className="snap-start"
              key={index}
              direction={index % 2}
              title={data.title}
              description={data.description}
              type={data.type}
              parameter={data.parameter}
              link={data.link}
            />
          ))
        }
      </div>

    </div>
  )
}

export default Project