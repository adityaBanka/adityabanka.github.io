// eslint-disable-next-line react/prop-types
function InfoSection({ direction, title, description, type="video", URL="p2AWYanIHkc" }) { //p2AWYanIHkc
  return (

    <div className={`flex justify-center items-center p-[2%] flex-col ${direction === 1 ? "lg:flex-row-reverse lg:space-x-reverse" : "lg:flex-row "} bg-white/50 backdrop-blur-2xl rounded-2xl lg:rounded-4xl mx-[5%] drop-shadow-xl animate-fade-in-up`}>

      <div className={`rounded-xl lg:rounded-2xl overflow-hidden ${type==='video' || type === "iframe"? "min-w-[55%] w-full aspect-video" : type === "image" ? "max-w-[30%]" : ""} `}>
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

      <div className={`${direction === 1 ? "lg:text-right" : "text-left"} m-5`}>

        <div className='text-pretty lg:text-5xl text-3xl mb-5'>{title}</div>

        <div className=''>{description}</div>

      </div>

    </div>
  )
}

export default InfoSection