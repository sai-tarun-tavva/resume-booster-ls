import classes from "./index.module.scss";

const Loader = () => {
  return (
    <div className={classes.loader} role="status" aria-live="polite"></div>
  );
};

export default Loader;
