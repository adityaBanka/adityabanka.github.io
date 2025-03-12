function BW({ children }) {
  return (
    <span className='font-semibold text-black'>{children}</span>
  )
}

function HomePage() {
  return (
    <div className='flex flex-col justify-center items-center bg-gray-100 h-full min-h-screen py-20 space-y-10'>

      <div className='flex lg:flex-row flex-col items-center justify-center'>
        <img src="AdityaBanka.jpg" className='w-2/3 lg:w-1/4 h-auto rounded-[100px] m-5 pointer-events-none select-none' alt="Aditya Banka" />
        <div className='flex flex-col not-lg:items-center lg:items-left justify-center lg:space-y-2 space-y-1'>
          <h1 className='text-4xl lg:text-7xl font-bold text-sky-600'>Aditya Banka</h1>
          <p className='lg:text-2xl'>Creator | Developer | <span className='text-red-700 font-semibold'>Engineer</span> | Learner</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row bg-white/50 backdrop-blur-2xl rounded-2xl lg:rounded-4xl mx-[5%] drop-shadow-xl p-[2%]">
        <div className="p-5 bg-white/50 backdrop-blur-2xl rounded-xl lg:rounded-2xl drop-shadow-xl">
          <div className="flex">
            <span className="text-4xl font-semibold text-gray-800"><span className="text-5xl">"</span><span className="text-indigo-500 text-5xl">Jack</span> of all, <span className="text-green-600 text-5xl">Master</span> of a lot."</span>
          </div>
          <div className="flex justify-end font-semibold text-xl">
            <span className="text-gray-700">- My dad</span>
          </div>
        </div>
        <div className="flex justify-center items-center p-[2%] text-xl w-full text-gray-800">
          <p>From a very young age I have been a man of science. Always wanted to be an <BW>engineer</BW> and now I am one. I am a <BW>quick learner</BW> with a special emphasis on getting behind the why of things. I have a <BW>passion</BW> of anything tech and have always been <BW>pushing the boundaries</BW> of my cicle of knowledge. I have explored a ton of <BW>different domains</BW> and have developed a very <BW>robust problem solving background</BW>. Over the years this has led me to be more <BW>effecient</BW> and quick to provide <BW>real-world insights</BW> into engineering complete solutions.</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage