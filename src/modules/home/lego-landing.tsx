"use client";
import Image from "next/image";
import legoLogo from "@/assets/lego.webp";
import { Button } from "@/components/ui/button";
import { motion, MotionValue, useTransform } from "motion/react";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import useNavbarHeight from "@/store/navbar-store";
import { COLLECTION_ID, PAGE_ROUTES } from "@/lib/constants";

interface LegoLandingProps {
  scrollYProgress: MotionValue<number>;
}

const LegoLanding = ({ scrollYProgress }: LegoLandingProps) => {
  const { height: navBarHeight } = useNavbarHeight();
  const router = useRouter();

  const targetRef = useRef(null);

  const imageTranslateY = useTransform(
    scrollYProgress,
    [0, 0.32],
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
        <p className="text-4xl font-bold italic md:text-8xl">{`LEGO`}</p>
        <p className="mt-5 text-2xl italic md:text-3xl">
          {`Build iconic designs with LEGO's premium sets, crafted for unmatched
            detail and durability.`}
        </p>
        <Button
          id="#lego-landing"
          className="mt-4"
          onClick={() => {
            router.push(PAGE_ROUTES.LEGO);
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
        <Image src={legoLogo} alt="lego logo" className="w-4/5 rounded-lg" />
      </motion.div>
    </section>
  );
};

export default LegoLanding;
