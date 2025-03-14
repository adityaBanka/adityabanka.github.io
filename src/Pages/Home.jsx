import InfoSection from "../Components/InfoSection"
import SSB from "../Components/SemiBoldBlack"
function HomePage() {

  const infoData = [
    {
      title: <p><span>&quot;He&apos;s the Jack of all, and a <span className="text-4xl text-green-600">Master of many</span>..&quot;<span className="text-xl text-nowrap"> - My dad</span> </span></p>, 
      description: <p>From a very young age I have been a man of science. Always wanted to be an <SSB>engineer</SSB> and now I am one. I am a <SSB>quick learner</SSB> with a special emphasis on getting behind the why of things. I am <SSB>passionate</SSB> about all things tech and constantly <SSB>strive to expand</SSB> the limits of my knowledge. I have explored a ton of <SSB>different domains</SSB> and have developed a very <SSB>robust problem solving</SSB> background. Over the years this has led me to be more <SSB>efficient</SSB> and quick to provide <SSB>real-world insights</SSB> into engineering complete solutions.</p>,
      type: "image",
      URL: "AdityaBankaContact.jpg"
    },
    {
      title: <p>Summer Research Intern at <span className="text-4xl text-cyan-600">National Institute of Technology</span>, Patna</p>,
      description: <p>In a research intern opportunity at NIT Patna, I explored the idea of image based sentiment analysis. In the project I was tasked with developing a novel solution to detect sexism in memes. This was done using the EXIST&apos;24 dataset. I worked under the guidance of Dr J. P. Singh and Dr Gunjan Kumar during my intern period. We explored the effectiveness of different models and techniquses, even leveraging trasnfer learning. I was responsible in the development and training of models with over 15 million trainable parameters. The models were tested on a large dataset of over 4,000 RGBA images in various aspect ratios. I have authored and presented a project report on the same to the organization.</p>,
      type: "image",
      URL: "NitCertificate.jpg"
    },
    {
      title: <p>Foundations: <span className="text-4xl text-[#4185f4]">Data</span>, <span className="text-4xl text-[#e84033]">Data</span>, <span className="text-4xl text-[#faba03]">Every</span><span className="text-4xl text-[#33a754]">where</span></p>,
      description: <p>An online non-credit course authorized by Google and offered through Coursera. In this course I learned the fundamentals of data analytics, data science and engineering. This certificate can be verified by coursera via this <a href='https://coursera.org/verify/5CBR5CXEA69T' target='_black' className='font-bold'>link</a>.</p>,
      type: "image",
      URL: "GoogleDataCertificate.jpg"
    },
    {
      title: <p>Introduction to <span className="text-4xl bg-gradient-to-r from-[#0c64de] via-[#0181f8] to-[#0c64de] bg-clip-text text-transparent">Back-End Development</span></p>,
      description: <p>An online non-credit course authorized by Meta and offered through Coursera. In this course I learned the fundamentals of web development, including front end using HTML, CSS, and Javascript and back end using Python. This certificate can be verified by coursera via this <a href='https://coursera.org/verify/GH43JPFZC56M' target='_black' className='font-bold'>link</a>.</p>,
      type: "image",
      URL: "MetaBackendCertificate.jpg"
    },
    {
      title: <p>Programmer by trade, <span className="text-4xl text-yellow-500">photographer</span> at <span className="text-4xl text-[#f45664]">heart</span>.</p>,
      description: <p>As part of my college journey I was also involved with activities beyond those just around a desk and a chair. I was a memeber of KIIT&apos;s student broadcasting scociety, aptly named Kreative eye. I tenured for a quater and was involved in providing insights into improving organisational effeciency as well. During the same I was involved in covering and producing social media worthy images. Key event that I was responsible for covering were Republic Day&apos;23, KIIT-Fest&apos;23 and 3rd Digital Data Science Conclave&apos;23.</p>,
      type: "image",
      URL: "KreativeEye.jpg"
    }
  ]

  return (
    <div className='flex flex-col bg-gray-100 w-full h-full min-h-screen py-20 md:pt-60 space-y-20 lg:space-y-50'>
      <div className="flex flex-col justify-center items-center space-y-5 mx-[10%]">
        <h1 className="text-7xl font-bold drop-shadow-2xl"><span className="text-blue-500">Hello</span> world, I&apos;m <span className="text-blue-500">Aditya</span> Banka</h1>
        <p className="lg:text-justify">Creator | Developer | <span className='text-red-700 font-semibold'>Engineer</span> | Founder</p>
      </div>

      <div className='space-y-30'>
        {
          infoData.map((data, index) => (
            <InfoSection
              key={index}
              direction={index % 2}
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

export default HomePage