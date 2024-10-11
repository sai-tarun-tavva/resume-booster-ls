import { CONTENT } from "../../constants";
import classes from "./index.module.scss";

const OverlayMessage = () => {
  const { title1, title2, subtitle } =
    CONTENT.sparkHub.operations.overlayMessage;
  return (
    <div className={classes.overlay}>
      <div className={classes.content}>
        <h1 className={classes.title}>
          {title1}
          <span className={classes.highlight}>{title2}</span>
        </h1>
        <p className={classes.subtitle}>{subtitle}</p>
        <div className={classes.rocket}>
          <i className="bi bi-rocket-takeoff"></i>
        </div>
      </div>
    </div>
  );
};

export default OverlayMessage;
