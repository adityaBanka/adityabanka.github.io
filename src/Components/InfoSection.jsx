// eslint-disable-next-line react/prop-types
function InfoSection({ direction, title, description, type="video", URL="p2AWYanIHkc" }) { //p2AWYanIHkc
  return (

    <div className={`flex justify-center items-center p-[2%] flex-col ${direction === 1 ? "md:flex-row-reverse md:space-x-reverse" : "md:flex-row "} bg-white/50 backdrop-blur-2xl rounded-2xl md:rounded-4xl drop-shadow-xl animate-fade-in-up`}>

      <div className={`rounded-xl md:rounded-2xl overflow-hidden duration-250 ${type==='video' || type === "iframe"? "min-w-[55%] w-full aspect-video drop-shadow-2xl" : type === "image" ? "md:min-w-[33%] md:max-w-[33%] not-md:drop-shadow-2xl md:hover:drop-shadow-2xl md:hover:scale-105 md:hover:rounded-none" : ""} `}>
        {
          (type === "image") && (
            <img src={URL} className="w-auto h-full"></img>
          ) ||
          (type === "video") && (
            <iframe src={`https://www.youtube.com/embed/${URL}?autoplay=1&mute=1&fs=0&controls=0&disablekb=1&rel=0&button=0&loop=1&playlist=${URL}`} className="w-full h-full pointer-events-none"></iframe>
          ) ||
          (type === "iframe") && (
            <iframe src={URL} className="w-full h-full"></iframe>
          )
        }
      </div>

      <div className={`${direction === 1 ? "md:text-right" : "text-left"} m-5 text-gray-700`}>

        <div className='text-pretty text-3xl mb-5 font-semibold'>{title}</div>

        <div className=''>{description}</div>

      </div>

    </div>
  )
}

export default InfoSection