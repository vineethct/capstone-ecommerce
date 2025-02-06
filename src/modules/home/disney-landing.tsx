"use client";
import useNavbarHeight from "@/store/navbar-store";
import Image from "next/image";
import disneyLogo from "@/assets/disney.webp";
import { Button } from "@/components/ui/button";
import { motion, MotionValue, useTransform } from "motion/react";
import { useRef } from "react";
import { mouseMemoirs } from "@/components/ui/fonts";
import { useRouter } from "next/navigation";
import { COLLECTION_ID, PAGE_ROUTES } from "@/lib/constants";

interface DisneyLandingProps {
  scrollYProgress: MotionValue<number>;
}

const DisneyLanding = ({ scrollYProgress }: DisneyLandingProps) => {
  const { height: navBarHeight } = useNavbarHeight();
  const router = useRouter();

  const targetRef = useRef(null);

  const imageTranslateY = useTransform(
    scrollYProgress,
    [0.62, 1],
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
          className={`${mouseMemoirs.className} text-4xl font-bold italic md:text-6xl`}
        >{`DISNEY`}</p>
        <p className="mt-2 text-2xl italic md:text-3xl">
          {`Bring the magic of Disney to life with enchanting toys featuring beloved characters, perfect for kids and collectors alike.`}
        </p>
        <Button
          className="mt-4"
          onClick={() => {
            router.push(PAGE_ROUTES.DISNEY);
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
          src={disneyLogo}
          alt="disney logo"
          className="w-4/5 rounded-lg"
        />
      </motion.div>
    </section>
  );
};

export default DisneyLanding;
