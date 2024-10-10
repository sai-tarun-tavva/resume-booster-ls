import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../../store";
import classes from "./index.module.scss";

const Textarea = ({ error, setError }) => {
  const dispatch = useDispatch();
  const { description } = useSelector((state) => state.data);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    dispatch(dataActions.updateDescription(e.target.value));
  };

  const handleFocus = () => {
    setIsFocused(true);
    setError("");
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!description) setError("Job description is required.");
  };

  return (
    <div className={classes.textarea}>
      <label
        htmlFor="description"
        className={`${classes.label} ${
          isFocused || description ? classes.active : ""
        } ${error ? classes.error : ""}`}
      >
        Enter job description
      </label>
      <textarea
        id="description"
        className={`${classes.input} ${isFocused ? classes.focused : ""} ${
          error ? classes.error : ""
        }`}
        value={description}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <small className={classes.errorText}>{error || ""}</small>
    </div>
  );
};

export default Textarea;
