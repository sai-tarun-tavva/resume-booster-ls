import React from "react";
import classes from "./index.module.scss";

const Button = ({ clickHandler, children, className = "" }) => {
  return (
    <button className={`${classes.button} ${className}`} onClick={clickHandler}>
      {children}
    </button>
  );
};

export default Button;
