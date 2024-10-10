import React from "react";
import classes from "./index.module.scss";

const OverlayMessage = () => {
  return (
    <div className={classes.overlay}>
      <div className={classes.content}>
        <h1 className={classes.title}>
          Elevate Your <span className={classes.highlight}>Career</span>
        </h1>
        <p className={classes.subtitle}>AI-powered resume analysis awaits</p>
        <div className={classes.rocket}>
          <i className="bi bi-rocket-takeoff"></i>
        </div>
      </div>
    </div>
  );
};

export default OverlayMessage;
