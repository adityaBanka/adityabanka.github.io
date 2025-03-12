function ProjectSection({ direction, title = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nam.", description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At esse possimus inventore repudiandae, sint optio voluptas in impedit reiciendis consequatur, iusto enim architecto doloribus mollitia perferendis facilis veritatis repellendus suscipit dolorum provident qui odio. Inventore veniam quo facere cumque fugit impedit, ad deleniti. Possimus, reprehenderit earum deserunt sit omnis nisi.", videoURL = "p2AWYanIHkc" }) {
  return (

    <div className={`flex justify-center items-center p-[2%] flex-col ${direction === 0 ? "lg:flex-row-reverse lg:space-x-reverse" : "lg:flex-row "} bg-white/50 backdrop-blur-2xl rounded-2xl lg:rounded-4xl mx-[5%] drop-shadow-xl animate-fade-in-up`}>

      {
        videoURL && (
          <iframe className='min-w-[55%] w-full aspect-16/9 rounded-xl lg:rounded-2xl pointer-events-none' src={`https://www.youtube.com/embed/${videoURL}?autoplay=1&mute=1&fs=0&controls=0&disablekb=1&rel=0&button=0&loop=1&playlist=${videoURL}`}></iframe>
        )
      }

      <div className={`${direction === 0 ? "lg:text-right" : "text-left"} m-5`}>

        <div className='text-justify lg:text-5xl text-3xl mb-5'>{title}</div>

        <div className=''>{description}</div>

      </div>

    </div>
  )
}

export default ProjectSection