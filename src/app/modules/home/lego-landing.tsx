"use client";
import useNavbarHeight from "@/store/navbar-store";
import Image from "next/image";
import legoLogo from "@/assets/lego.webp";
import { Button } from "@/components/ui/button";
import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

interface LegoLandingProps {
  scrollYProgress: MotionValue<number>;
}

const LegoLanding = ({ scrollYProgress }: LegoLandingProps) => {
  const { height: navBarHeight } = useNavbarHeight();

  const targetRef = useRef(null);

  const textTranslateY = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["0px", "-400px"]
  );

  return (
    <div
      className="_section flex flex-col-reverse items-center justify-center gap-16 p-6 md:flex-row"
      style={{
        paddingTop: `${navBarHeight}px`,
      }}
    >
      {/* Text  */}
      <motion.div
        className="md:w-1/3"
        ref={targetRef}
        style={{ translateY: textTranslateY }}
      >
        <p className="text-4xl font-bold italic md:text-8xl">{`LEGO`}</p>
        <p className="mt-5 text-2xl md:text-3xl">
          {`Build iconic designs with LEGO's premium sets, crafted for unmatched
            detail and durability.`}
        </p>
        <Button className="mt-4">Explore</Button>
      </motion.div>

      {/* Image */}
      <motion.div
        className="flex h-fit justify-center md:w-1/2 lg:w-1/4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image src={legoLogo} alt="lego logo" className="w-4/5 rounded-lg" />
      </motion.div>
    </div>
  );
};

export default LegoLanding;
