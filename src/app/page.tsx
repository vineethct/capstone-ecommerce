"use client";
import { useRef } from "react";
import HomeLanding from "./modules/home/landing";
import LegoLanding from "./modules/home/lego-landing";
import Recommendations from "./modules/home/recommendation";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  useTransform,
} from "motion/react";

export default function Home() {
  const homeRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: homeRef,
    // offset : ["33% 66%","66% 99%"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) =>
    console.log(latest, "latest")
  );

  // const legoTitleStyle = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div className="_container relative" ref={homeRef}>
      {/* SECTION - 1 */}
      <HomeLanding />

      {/* SECTION - 2 */}
      <LegoLanding scrollYProgress={scrollYProgress} />

      {/* SECTION - 3 */}
      <HomeLanding />
    </motion.div>
  );
}
