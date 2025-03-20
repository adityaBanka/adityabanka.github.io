import { useEffect, useRef, useState } from 'react';
// eslint-disable-next-line react/prop-types
function InfoSection({ direction, title, description, type, parameter, link }) {
  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && player) {
            player.playVideo();
          } else if (player) {
            player.pauseVideo();
          }
        });
      },
      { threshold: 0.9 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [player]);

  const onYouTubeIframeAPIReady = (event) => {
    setPlayer(event.target);
  };

  const clickHandler = () => {
    if (link) {
      window.open(link, "_blank")
    }
  }

  return (
    <div className={`flex justify-start items-center p-[2%] flex-col ${direction === 1 ? "md:flex-row-reverse md:space-x-reverse" : "md:flex-row "} bg-white/50 backdrop-blur-2xl rounded-2xl md:rounded-4xl drop-shadow-xl animate-fade-in-up`}>
      {
        (type === "video") && (
          <div className="min-w-[55%] w-full rounded-2xl overflow-hidden" onClick={clickHandler} ref={videoRef}>
            <iframe
              src={`https://www.youtube.com/embed/${parameter}?enablejsapi=1&mute=1&fs=0&controls=0&disablekb=1&rel=0&button=0&loop=1&playlist=${parameter}`}
              className="w-full h-auto rounded-xl md:rounded-2xl aspect-video drop-shadow-2xl pointer-events-none"
              onLoad={(e) => {
                const iframe = e.target;
                new YT.Player(iframe, {
                  events: {
                    onReady: onYouTubeIframeAPIReady,
                  },
                });
              }}
            ></iframe>
          </div>
        ) ||
        (type === "square") && (
          <img src={parameter} className="md:max-w-[20%] h-auto rounded-xl md:rounded-2xl not-md:drop-shadow-2xl md:hover:drop-shadow-2xl md:hover:scale-105 duration-250" onClick={clickHandler}></img>
        ) ||
        (type === "landscape") && (
          <img src={parameter} className="md:max-w-[40%] h-auto rounded-xl md:rounded-2xl not-md:drop-shadow-2xl md:hover:drop-shadow-2xl md:hover:rounded-none md:hover:scale-105 duration-250" onClick={clickHandler}></img>
        ) ||
        (type === "portrait") && (
          <img src={parameter} className="md:max-w-[33%] h-auto rounded-xl md:rounded-2xl not-md:drop-shadow-2xl md:hover:drop-shadow-2xl md:hover:scale-105 duration-250" onClick={clickHandler}></img>
        ) ||
        parameter
      }

      <div className={`${direction === 1 ? "md:text-right" : "text-left"} m-5 text-gray-700`}>
        <div className='text-pretty text-3xl mb-5 font-semibold'>{title}</div>
        <div className='text-pretty text-xl'>{description}</div>
      </div>
    </div>
  )
}

export default InfoSection