import Operations from "../Operations";
// import OverlayMessage from "../OverlayMessage";
import Results from "../Results";
import classes from "./index.module.scss";

const SparkHub = () => {
  return (
    <div className={classes.sparkHub}>
      <Operations />
      <Results />
      {/* <OverlayMessage /> */}
    </div>
  );
};

export default SparkHub;
