import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { dataActions } from "../../../../store";
import { CONTENT } from "../../../../constants";
import classes from "./index.module.scss";

/**
 * Select Component
 *
 * Provides a dropdown selection for AI models.
 *
 * @param {Object} props - The component props.
 * @param {string} props.error - Error message related to selection.
 * @param {function} props.setError - Function to set the error message.
 * @returns {JSX.Element} The select component.
 */
const Select = ({ error, setError }) => {
  const dispatch = useDispatch();
  const { selectedAI } = useSelector((state) => state.data);
  const {
    options: { default: defaultValue, option1, option2 },
    error: errorMessage,
  } = CONTENT.sparkHub.operations.select;

  const handleSelectChange = (event) => {
    const value = event.target.value;
    dispatch(dataActions.updateSelectedAI(value));
    if (value) {
      setError("");
    } else {
      setError(errorMessage);
    }
  };

  const handleBlur = (event) => {
    if (!event.target.value) setError(errorMessage);
  };

  return (
    <div className={classes.select}>
      <div className={classes.selectWrapper}>
        <select
          className={`${classes.input} ${error ? classes.error : ""}`}
          value={selectedAI}
          onChange={handleSelectChange}
          onBlur={handleBlur}
          aria-label="Select AI model"
        >
          <option value="" disabled>
            {defaultValue}
          </option>
          <option value="GeminiAI">{option1}</option>
          <option value="OpenAI">{option2}</option>
        </select>
      </div>
      <small className={classes.errorText}>{error || ""}</small>
    </div>
  );
};

Select.propTypes = {
  error: PropTypes.string,
  setError: PropTypes.func.isRequired,
};

export default Select;
