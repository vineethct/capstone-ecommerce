---
to: <%= absPath %>/<%= componentName %>.styles.js
---
import ctl from "@netlify/classnames-template-literals";

const styles = ctl(`
  h-72
  w-72
  rounded-xl
  bg-slate-800
  text-center
  text-white
`);

export default styles;
