import PropTypes from "prop-types";
import classes from "./index.module.scss";

/**
 * Button Component
 *
 * Renders a button with customizable text and click handler.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {function} props.onClick - The function to call when the button is clicked.
 * @param {string} [props.className=""] - Optional additional class names for styling.
 * @returns {JSX.Element} The rendered button component.
 */
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

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
