"use client";
import useNavbarHeight from "@/store/navbar-store";
import Image from "next/image";
import hotwheelsLogo from "@/assets/hotwheels.webp";
import { Button } from "@/components/ui/button";
import { motion, MotionValue, useTransform } from "motion/react";
import { useRef } from "react";
import { racingSans } from "@/components/ui/fonts";
import { useRouter } from "next/navigation";
import { COLLECTION_ID, PAGE_ROUTES } from "@/lib/constants";

interface HotWheelsLandingProps {
  scrollYProgress: MotionValue<number>;
}

const HotWheelsLanding = ({ scrollYProgress }: HotWheelsLandingProps) => {
  const { height: navBarHeight } = useNavbarHeight();
  const router = useRouter();

  const targetRef = useRef(null);

  const imageTranslateY = useTransform(
    scrollYProgress,
    [0.32, 0.62],
    ["400px", "0px"]
  );

  return (
    <section
      className="_section flex flex-col-reverse items-center justify-center gap-8 p-6 md:flex-row md:gap-16"
      style={{
        paddingTop: `${navBarHeight}px`,
      }}
    >
      {/* Text  */}
      <motion.div className="md:w-1/3">
        <p
          className={`${racingSans.className} text-4xl font-bold italic md:text-6xl`}
        >{`HOTWHEELS`}</p>
        <p className="mt-2 text-2xl italic md:text-3xl">
          {`Discover premium Hot Wheels collectibles and race-ready cars for every enthusiast.`}
        </p>
        <Button
          className="mt-4"
          onClick={() => {
            router.push(PAGE_ROUTES.HOT_WHEELS);
          }}
        >
          Explore
        </Button>
      </motion.div>

      {/* Image */}
      <motion.div
        ref={targetRef}
        className="flex h-fit justify-center md:w-1/2 lg:w-1/4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{ translateY: imageTranslateY }}
      >
        <Image
          src={hotwheelsLogo}
          alt="hotwheels logo"
          className="w-4/5 rounded-lg"
        />
      </motion.div>
    </section>
  );
};

export default HotWheelsLanding;
