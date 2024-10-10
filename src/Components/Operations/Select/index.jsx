import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../../store";
import classes from "./index.module.scss";

const Select = ({ error, setError }) => {
  const dispatch = useDispatch();
  const { selectedAI } = useSelector((state) => state.data);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    dispatch(dataActions.updateSelectedAI(value));
    if (value) {
      setError("");
    } else {
      setError("Please select an AI.");
    }
  };

  return (
    <div className={classes.select}>
      <div className={classes.selectWrapper}>
        <select
          className={`${classes.input} ${error ? classes.error : ""}`}
          value={selectedAI}
          onChange={handleSelectChange}
        >
          <option value="" disabled>
            Select an AI
          </option>
          <option value="GeminiAI">GeminiAI</option>
          <option value="OpenAI">OpenAI</option>
        </select>
      </div>
      <small className={classes.errorText}>{error || ""}</small>
    </div>
  );
};

export default Select;
