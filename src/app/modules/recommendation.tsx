"use client";
import useNavbarHeight from "@/store/navbar-store";
import * as motion from "motion/react-client";

const Recommendations = () => {
  const { height: navBarHeight } = useNavbarHeight();

  return (
    <motion.div
      className="_section"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        paddingTop: `${navBarHeight}px`,
      }}
    >
      <div id="ourRecommendations" className="p-5">
        <h3 className="text-3xl font-bold md:text-5xl">Our Recommendations</h3>
      </div>
    </motion.div>
  );
};

export default Recommendations;
