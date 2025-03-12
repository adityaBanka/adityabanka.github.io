// eslint-disable-next-line react/prop-types
function BW({ children }) {
  return (
    <span className='font-semibold text-black'>{children}</span>
  )
}

function HomePage() {
  return (
    <div className='flex flex-col justify-center items-center bg-gray-100 h-full min-h-screen py-20 lg:pt-60 space-y-20 '>
      <div className="mx-[10%]">
        <h1 className="text-7xl font-bold">Hello world, I&apos;m <span className="text-blue-500">Aditya Banka</span></h1>
        {/* <p className="text-2xl lg:text-center">Creator | Developer | <span className='text-red-700 font-semibold'>Engineer</span> | Learner</p> */}
      </div>

      <div className="flex lg:flex-row flex-col justify-center items-center bg-white/50 backdrop-blur-2xl rounded-2xl lg:rounded-4xl mx-[5%] drop-shadow-xl p-[2%] animate-fade-in-up ">
        <img src="AdityaBanka.jpg" className='w-2/3 md:w-1/3 lg:w-1/4 h-auto rounded-[100px] m-5 pointer-events-none select-none outline-5 outline-white/50 shadow-2xl' alt="Aditya Banka" />
        <div className="flex flex-col space-y-10">
          <span className="text-4xl font-semibold text-gray-800">&quot;He&apos;s the <span className="text-indigo-500 text-5xl">Jack</span> of all, and a <span className="text-green-600 text-5xl">Master</span> of many..&quot;<span className="text-xl text-nowrap"> - My dad</span> </span>

          <p>From a very young age I have been a man of science. Always wanted to be an <BW>engineer</BW> and now I am one. I am a <BW>quick learner</BW> with a special emphasis on getting behind the why of things. I have a <BW>passion</BW> of anything tech and have always been <BW>pushing the boundaries</BW> of my cicle of knowledge. I have explored a ton of <BW>different domains</BW> and have developed a very <BW>robust problem solving background</BW>. Over the years this has led me to be more <BW>effecient</BW> and quick to provide <BW>real-world insights</BW> into engineering complete solutions.</p>
        </div>
      </div>


    </div>
  )
}

export default HomePage