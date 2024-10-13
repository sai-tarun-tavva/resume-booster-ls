import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../../../store";
import { CONTENT } from "../../../../constants";
import classes from "./index.module.scss";

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

export default Select;
