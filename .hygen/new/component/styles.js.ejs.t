---
to: <%= absPath %>/<%= componentName %>.styles.js
---
import cntl from "cntl";

const styles = cntl`
    bg-slate-800 
    rounded-xl 
    w-72 
    h-72 
    text-white 
    text-center
`;

export default styles;
