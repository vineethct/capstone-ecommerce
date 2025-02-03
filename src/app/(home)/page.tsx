"use client";
import { useRef } from "react";
import HomeLanding from "../(modules)/home/landing";
import LegoLanding from "../(modules)/home/lego-landing";
import { useScroll, motion } from "motion/react";
import HotWheelsLanding from "../(modules)/home/hotwheels-landing";
import DisneyLanding from "../(modules)/home/disney-landing";
import withAuth from "@/context/AuthContext/with-auth-hoc";

const Home = () => {
  const homeRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: homeRef,
    // offset : ["33% 66%","66% 99%"]
  });

  // useMotionValueEvent(scrollYProgress, "change", (value) => {
  //   console.log(value);
  // });
  // const legoTitleStyle = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div className="_container relative" ref={homeRef}>
      {/* SECTION - 1 */}
      <HomeLanding />

      {/* SECTION - 2 */}
      <LegoLanding scrollYProgress={scrollYProgress} />

      {/* SECTION - 3 */}
      <HotWheelsLanding scrollYProgress={scrollYProgress} />

      {/* SECTION - 4 */}
      <DisneyLanding scrollYProgress={scrollYProgress} />
    </motion.div>
  );
};

export default Home;
