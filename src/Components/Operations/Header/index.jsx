import classes from "./index.module.scss";

const Header = () => {
  return (
    <div className={classes.header}>
      <span>
        <p>R</p>
        <p>Spark</p>
      </span>
      <i className="bi bi-box-arrow-left"></i>
    </div>
  );
};

Header.displayName = "Header";
export default Header;
