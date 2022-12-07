---
to: <%= absPath %>/<%= componentName %>.js
---
import React from "react";
import PropTypes from "prop-types";
import styles from "./<%= componentName %>.styles";

export const <%= componentName %> = ({ name, textColor }) => {
  return (
    <div className={styles} style={{ color: textColor }}>
      Hello, {name}!
    </div>
  );
};

<%= componentName %>.propTypes = {
  name: PropTypes.string,
  textColor: PropTypes.string,
};
