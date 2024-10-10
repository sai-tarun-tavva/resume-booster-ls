import React from "react";
import classes from "./index.module.scss";

const Action = ({ name, onChange }) => {
  const handleChange = (event) => {
    onChange(name, event.target.checked);
  };

  return (
    <label className={classes.action}>
      <input
        type="checkbox"
        className={classes.input}
        onChange={handleChange}
      />
      <span className={classes.slider}></span>
      <span className={classes.name}>{name}</span>
    </label>
  );
};

export default Action;
