import { useSelector } from "react-redux";
import Operations from "./Operations";
import OverlayMessage from "./OverlayMessage";
import Results from "./Results";
import StatusMessage from "../../atoms/StatusMessage";
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
  const sectionHeight =
    !selectedKey && window.innerWidth < 768 ? "100vh" : "auto";

  return (
    <section className={classes.sparkHub} style={{ height: sectionHeight }}>
      <StatusMessage />
      <Operations />
      {selectedKey ? <Results /> : <OverlayMessage />}
    </section>
  );
};

export default SparkHub;
