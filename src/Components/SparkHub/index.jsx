import { useSelector } from "react-redux";
import Operations from "./Operations";
import OverlayMessage from "./OverlayMessage";
import Results from "./Results";
import classes from "./index.module.scss";

/**
 * SparkHub Component
 *
 * Main hub for displaying operations, results, or overlay messages.
 *
 * @returns {JSX.Element} The SparkHub component.
 */
const SparkHub = () => {
  const { selectedKey } = useSelector((state) => state.result);

  return (
    <section className={classes.sparkHub}>
      <Operations />
      {selectedKey ? <Results /> : <OverlayMessage />}
    </section>
  );
};

export default SparkHub;
