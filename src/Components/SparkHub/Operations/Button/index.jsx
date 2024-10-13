import classes from "./index.module.scss";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      className={`${classes.button} ${className}`}
      onClick={onClick}
      aria-label={children}
    >
      {children}
    </button>
  );
};

export default Button;
