import React from 'react'

function NameText({ children }) {
  return (
    <h1 className='h-20 text-5xl font-bold bg-gradient-to-r from-sky-600 via-cyan-400 via-33% to-sky-600 bg-clip-text text-transparent'>{children}</h1>
  )
}

function HomePage() {
  return (
    <div className='flex flex-col justify-center items-center bg-[#f5f5f7] h-full'>
      <img src='/image.png' className='rounded-full h-[20%] w-[20%] p-2 border-white outline'></img>
      <NameText >AdityaBanka</NameText>
    </div>
  )
}

export default HomePage