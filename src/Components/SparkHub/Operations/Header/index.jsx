import classes from "./index.module.scss";

/**
 * Header Component
 *
 * Renders the application header with a logo and logout button.
 *
 * @returns {JSX.Element} The rendered header component.
 */
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <i className={`bi bi-lightning-charge-fill ${classes.icon}`}></i>
        <span className={classes.text}>
          R<span>Spark</span>
        </span>
      </div>
      <button className={classes.exitIcon} aria-label="Logout">
        <i className={`bi bi-box-arrow-right`}></i>
      </button>
    </header>
  );
};

export default Header;
