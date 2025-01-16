import VideoBackground from "@/components/VideoBackground/video-background";
import * as motion from "motion/react-client";

const HomeLanding = () => {
  return (
    <motion.div
      className="_section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <VideoBackground />
    </motion.div>
  );
};

export default HomeLanding;
