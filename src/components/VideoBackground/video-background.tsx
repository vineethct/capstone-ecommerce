import Image from "next/image";
import * as motion from "motion/react-client";
import logo from "@/assets/online-shopping.png";

const VideoBackground = () => {
  return (
    <div className="relative h-screen  w-full overflow-hidden shadow-lg">
      {/* Video Background */}
      <video
        className="absolute left-0 top-0 size-full object-cover brightness-75"
        src={"/hero.mp4"}
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay with Heading */}

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Image src={logo} alt="logo" className="size-12 md:size-24 " />
        <h1 className="text-6xl font-bold text-white md:text-8xl ">Joybox</h1>
      </motion.div>

      {/* <div className="absolute top-[6%] md:top-1/4 inset-0  bg-opacity-50 ml-8">
        <h1 className="text-white text-3xl md:text-6xl font-bold ">
          Shop the Latest Trends
        </h1>
        <h3 className="text-white text-1xl md:text-3xl font-bold mt-2">
          All in One Place!
        </h3>
        <Button variant={'secondary'} className="mt-4 tracking-wide">
          Explore
        </Button>
      </div> */}
    </div>
  );
};

export default VideoBackground;
