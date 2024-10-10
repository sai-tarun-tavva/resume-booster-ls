import Operations from "../Operations";
import Results from "../Results";
import classes from "./index.module.scss";

const SparkHub = () => {
  return (
    <div className={classes.sparkHub}>
      <Operations />
      <Results />
    </div>
  );
};

SparkHub.displayName = "SparkHub";
export default SparkHub;
