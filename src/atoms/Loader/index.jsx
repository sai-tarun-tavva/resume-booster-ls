import classes from "./index.module.scss";

/**
 * Loader Component
 *
 * Displays a loading spinner or message.
 *
 * @returns {JSX.Element} The loader component.
 */
const Loader = () => {
  return (
    <div className={classes.loader} role="status" aria-live="polite"></div>
  );
};

export default Loader;
