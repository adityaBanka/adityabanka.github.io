import InfoSection from "../Components/InfoSection"
import SSB from "../Components/SemiBoldBlack"

import AdityaBankaContact from "../Assets/AdityaBankaContact.jpg"
import NitCertificate from "../Assets/Certificates/NitCertificate.jpg"
import GoogleDataCertificate from "../Assets/Certificates/GoogleDataCertificate.jpg"
import MetaBackendCertificate from "../Assets/Certificates/MetaBackendCertificate.jpg"
import HackerRankIntermediateCertificate from "../Assets/Certificates/HackerRankIntermediateCertificate.jpg"
import HackerRankBasicCertificate from "../Assets/Certificates/HackerRankBasicCertificate.jpg"
import CodingNinjaCertificate from "../Assets/Certificates/CodingNinjaCertificate.jpg"
import KreativeEye from "../Assets/Logos/KreativeEye.jpg"

function HomePage() {

  const infoData = [
    {
      title: <p><span>&quot;He&apos;s a Jack of all, and a <span className="text-4xl text-green-600">Master of many</span>&quot;<span className="text-xl text-nowrap"> - My dad</span> </span></p>,
      description: <p>From a very young age I have been a man of science. Always wanted to be an <SSB>engineer</SSB> and now I am one. I am a <SSB>quick learner</SSB> with a special emphasis on getting behind the why of things. I am <SSB>passionate</SSB> about all things tech and constantly <SSB>strive to expand</SSB> the limits of my knowledge. I have explored a ton of <SSB>different domains</SSB> and have developed a very <SSB>robust problem solving</SSB> background. Over the years this has led me to be more <SSB>efficient</SSB> and quick to provide <SSB>real-world insights</SSB> into engineering complete solutions.</p>,
      type: "square",
      parameter: AdityaBankaContact
    },
    {
      title: <p>Summer Research Intern at <span className="text-4xl text-cyan-600">National Institute of Technology</span>, Patna</p>,
      description: <p>During my research internship at NIT Patna, I explored the concept of image-based sentiment analysis. The project involved developing a novel solution to detect sexism in memes, utilizing the EXIST&apos;24 dataset. Under the guidance of Dr. J. P. Singh and Dr. Gunjan Kumar, we investigated the effectiveness of various models and techniques, including the use of transfer learning. I was responsible for developing and training models with over 15 million trainable parameters. These models were tested on a large dataset comprising over 4,000 RGBA images of varying aspect ratios. Additionally, I authored and presented a project report on the findings to the organization.</p>,
      type: "portrait",
      parameter: NitCertificate
    },
    {
      title: <p>Foundations: <span className="text-4xl text-[#4185f4]">Data</span>, <span className="text-4xl text-[#e84033]">Data</span>, <span className="text-4xl text-[#faba03]">Every</span><span className="text-4xl text-[#33a754]">where</span></p>,
      description: <p>An online non-credit course authorized by Google and offered through Coursera. In this course I learned the fundamentals of data analytics, data science and engineering.</p>,
      type: "certificate",
      parameter: GoogleDataCertificate,
      link: "https://coursera.org/verify/5CBR5CXEA69T"
    },
    {
      title: <p>Introduction to <span className="text-4xl bg-gradient-to-r from-[#0c64de] via-[#0181f8] to-[#0c64de] bg-clip-text text-transparent">Back-End Development</span></p>,
      description: <p>An online non-credit course authorized by Meta and offered through Coursera. In this course I learned the fundamentals of web development, including front end using HTML, CSS, and Javascript and back end using Python.</p>,
      type: "certificate",
      parameter: MetaBackendCertificate,
      link: "https://coursera.org/verify/GH43JPFZC56M"
    },
    {
      title: <p><span className="text-[#4eb969]">HackerRank</span> Problem Solver</p>,
      description: <p>Certified in Problem Solving (Basic and Intermediate) by HackerRank. This certification demonstrates my ability to solve algorithmic challenges using efficient data structures and logic. It covers fundamental concepts of problem-solving, including complexity analysis, recursion, sorting, searching algorithms and more.</p>, 
      type: "ImageStack",
      parameter:
        <div className="overflow-x-auto flex snap-x snap-proximity md:max-w-[40%] h-auto rounded-xl md:rounded-2xl not-md:drop-shadow-2xl md:hover:drop-shadow-2xl md:hover:scale-105 md:hover:rounded-none duration-250 scrollbar-hide">
          <img src={HackerRankIntermediateCertificate} className="snap-start"></img>
          <img src={HackerRankBasicCertificate} className="snap-start"></img>
        </div>
    },
    {
      title: <p>Introduction to C++: <span className="text-4xl bg-gradient-to-r from-[#ee7330] via-[#efa020] to-[#ee7330] bg-clip-text text-transparent">Top performer</span></p>, 
      description: <p>Certified in C++ by Coding Ninja. This certification demonstrates skills and mastery of the language C++. It covers fundamental concepts of C++ programming, including data types, control structures, functions, classes, and more.</p>,
      type: "certificate",
      parameter: CodingNinjaCertificate,
      link: "https://certificate.codingninjas.com/verify/692d05468a8ae989"
    },
    {
      title: <p>Programmer by <span className="text-4xl text-yellow-500">Passion</span>, Photographer at <span className="text-4xl text-[#f45664]">Heart</span></p>,
      description: <p>As part of my college journey I was also involved with activities beyond those just around a desk and a chair. I was a member of KIIT&apos;s student broadcasting society, aptly named Kreative eye. I was tenured for 3 quatres, and was tasked to cover events and produce social media ready content for the same. I was also responsible in improving organizational efficiency. Key events that covered were Republic Day&apos;23, KIIT-Fest&apos;23 and The 3rd Digital Data Science Conclave&apos;23.</p>,
      type: "square",
      parameter: KreativeEye
    }
  ]

  return (
    <div className='flex flex-col bg-gray-100 min-h-screen py-20 md:pt-60 space-y-20 md:space-y-50 px-[5%]'>

      <div className="flex flex-col justify-center items-start lg:items-center space-y-5">
        <h1 className="text-7xl font-bold text-gray-800 lg:text-center">Hello world, I&apos;m <span className="text-blue-500">Aditya Banka</span></h1>
        <p className="text-gray-500">Creator | Developer | <span className='text-gray-600 font-semibold'>Engineer</span> | Founder</p>
      </div>

      <div className='space-y-10 md:space-y-30'>
        {
          infoData.map((data, index) => (
            <InfoSection
              key={index}
              direction={index % 2}
              title={data.title}
              description={data.description}
              type={data.type}
              parameter={data.parameter}
              link = {data.link}
            />
          ))
        }
      </div>

    </div>
  )
}

export default HomePage