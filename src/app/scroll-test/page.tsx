import * as motion from "motion/react-client";

function SnapScroll() {
  return (
    <div className="_container">
      {/* Section 1 */}
      <motion.div
        className="_section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundColor: "lightcoral",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Section 1</h1>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        className="_section"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundColor: "lightblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Section 2</h1>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        className="_section"
        initial={{ x: "-100vw" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundColor: "lightgreen",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Section 3</h1>
      </motion.div>
    </div>
  );
}

export default SnapScroll;
