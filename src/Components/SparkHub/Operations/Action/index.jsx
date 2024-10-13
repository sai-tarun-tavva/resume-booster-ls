import PropTypes from "prop-types";
import classes from "./index.module.scss";

/**
 * Action Component
 *
 * Represents an individual action checkbox.
 *
 * @param {Object} props - The component props.
 * @param {string} props.apiKey - The unique key for the action in api response.
 * @param {string} props.name - The name of the action.
 * @param {function} props.onChange - Function to call when the checkbox is changed.
 * @returns {JSX.Element} The action component.
 */
const Action = ({ apiKey, name, onChange }) => {
  const handleChange = (event) => {
    onChange(apiKey, event.target.checked);
  };

  return (
    <label className={classes.action}>
      <input
        type="checkbox"
        className={classes.input}
        onChange={handleChange}
      />
      <span className={classes.slider}></span>
      <span className={classes.name}>{name}</span>
    </label>
  );
};

Action.propTypes = {
  apiKey: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Action;
