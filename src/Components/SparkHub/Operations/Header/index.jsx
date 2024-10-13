import classes from "./index.module.scss";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <i className={`bi bi-lightning-charge-fill ${classes.icon}`}></i>
        <span className={classes.text}>
          R<span>Spark</span>
        </span>
      </div>
      <i className={`bi bi-box-arrow-right ${classes.exitIcon}`}></i>
    </div>
  );
};

export default Header;
