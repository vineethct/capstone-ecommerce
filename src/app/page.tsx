import * as motion from "motion/react-client";
import VideoBackground from "@/components/VideoBackground/video-background";

export default function Home() {
  return (
    <main className="_container">
      {/* SECTION - 1 */}
      <motion.div
        className="_section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <VideoBackground />
      </motion.div>

      {/* SECTION - 2 */}
      <motion.div
        className="_section"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div id="ourRecommendations" className="mt-9 p-5">
          <h3 className="text-4xl font-bold">Our Recommendations</h3>
        </div>
      </motion.div>
    </main>
  );
}
