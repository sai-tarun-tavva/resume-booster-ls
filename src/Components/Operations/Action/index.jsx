import classes from "./index.module.scss";

import React from "react";

const Action = ({ name }) => {
  return (
    <label className={classes.action}>
      <input type="checkbox" className={classes.input} />
      <span className={classes.slider}></span>
      <span className={classes.name}>{name}</span>
    </label>
  );
};

export default Action;
