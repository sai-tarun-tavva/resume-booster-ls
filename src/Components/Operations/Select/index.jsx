import { useDispatch, useSelector } from "react-redux";
import { INPUT_ACTION_TYPES } from "../../../constants";
import { dataActions } from "../../../store";
import classes from "./index.module.scss";

const Select = ({ error, setError }) => {
  const dispatch = useDispatch();
  const { selectedAI } = useSelector((state) => state.data);
  const { SELECT } = INPUT_ACTION_TYPES;

  const handleSelectChange = (event) => {
    const value = event.target.value;
    dispatch(dataActions.updateSelectedAI(value));
    if (value) {
      setError({ type: SELECT, payload: "" }); // Clear error if an option is selected
    } else {
      setError({ type: SELECT, payload: "Please select an AI." });
    }
  };

  const handleBlur = () => {
    if (!selectedAI) {
      setError({ type: SELECT, payload: "Please select an AI." });
    }
  };

  return (
    <div className={classes.select}>
      <select
        className={`${classes.input} ${error ? classes.error : ""}`}
        id="ai"
        value={selectedAI}
        onChange={handleSelectChange}
        onBlur={handleBlur}
      >
        <option value="" disabled>
          Select an AI
        </option>
        <option value="GeminiAI">GeminiAI</option>
        <option value="OpenAI">OpenAI</option>
      </select>
      <small className={classes.errorText}>{error}</small>
    </div>
  );
};

export default Select;
