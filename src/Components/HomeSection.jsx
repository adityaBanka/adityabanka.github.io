
function HomeSection({ title, description }) {
    return (
        <div className="flex flex-row bg-white/50 backdrop-blur-2xl rounded-2xl lg:rounded-4xl mx-[5%] drop-shadow-xl p-[1%]">
            <p className="font-semibold lg:text-5xl text-3xl p-5 bg-white/50 backdrop-blur-2xl rounded-xl lg:rounded-2xl drop-shadow-xl">
                {title}
            </p>
            <p>
                {description}
            </p>
        </div>
    )
}

export default HomeSection