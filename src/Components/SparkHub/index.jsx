import { useSelector } from "react-redux";
import Operations from "./Operations";
import OverlayMessage from "./OverlayMessage";
import Results from "./Results";
import classes from "./index.module.scss";

const SparkHub = () => {
  const { selectedKey } = useSelector((state) => state.result);

  return (
    <div className={classes.sparkHub}>
      <Operations />
      {selectedKey ? <Results /> : <OverlayMessage />}
    </div>
  );
};

export default SparkHub;
