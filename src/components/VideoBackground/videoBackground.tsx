const VideoBackground = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
    {/* Video Background */}
    <video
      className="absolute top-0 left-0 w-full md:h-4/5 md:object-cover brightness-75"
      src={"/hero.mp4"}
      autoPlay
      loop
      muted
    ></video>

    {/* Overlay with Heading */}
    <div className="absolute top-[10%] md:top-1/4 inset-0  bg-opacity-50 ml-5">
      <h1 className="text-white text-3xl md:text-6xl font-bold ml-2.5 ">
        Shop the Latest Trends
      </h1>
      <h3 className="text-white text-1xl md:text-3xl font-bold ml-2.5">
        All in One Place!
      </h3>
    </div>
  </div>
  )
}

export default VideoBackground