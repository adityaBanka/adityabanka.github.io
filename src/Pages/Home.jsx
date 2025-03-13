// eslint-disable-next-line react/prop-types
function BW({ children }) {
  return (
    <span className='font-semibold text-black'>{children}</span>
  )
}

function HomePage() {
  return (
    <div className='flex flex-col bg-gray-100 w-full h-full min-h-screen py-20 md:pt-60 space-y-20 lg:space-y-50'>
      <div className="flex flex-col justify-center items-center space-y-5 mx-[10%]">
        <h1 className="text-7xl font-bold drop-shadow-2xl"><span className="text-blue-500">Hello</span> world, I&apos;m <span className="text-blue-500">Aditya</span> Banka</h1>
        <p className="lg:text-justify">Creator | Developer | <span className='text-red-700 font-semibold'>Engineer</span> | Founder</p>
      </div>

      <div className="flex md:flex-row flex-col justify-center items-center bg-white/50 backdrop-blur-2xl rounded-2xl lg:rounded-4xl mx-[5%] drop-shadow-xl p-[2%] animate-fade-in-up ">
        <img src="AdityaBanka.jpg" className=' md:w-1/3 lg:w-1/4 h-auto rounded-xl lg:rounded-2xl m-[1%] pointer-events-none select-none outline-1 outline-white/50 shadow-2xl' alt="Aditya Banka" />
        <div className="flex flex-col m-5">
          <span className="mb-5 text-3xl font-semibold text-gray-800">&quot;He&apos;s the <span className="text-green-600 text-4xl">Jack</span> of all, and a <span className="text-green-600 text-5xl">Master</span> of many..&quot;<span className="text-xl text-nowrap"> - My dad</span> </span>

          <p className="text-gray-700">From a very young age I have been a man of science. Always wanted to be an <BW>engineer</BW> and now I am one. I am a <BW>quick learner</BW> with a special emphasis on getting behind the why of things. I am <BW>passionate</BW> about all things tech and constantly <BW>strive to expand</BW> the limits of my knowledge. I have explored a ton of <BW>different domains</BW> and have developed a very <BW>robust problem solving</BW> background. Over the years this has led me to be more <BW>efficient</BW> and quick to provide <BW>real-world insights</BW> into engineering complete solutions.</p>
        </div>
      </div>


    </div>
  )
}

export default HomePage