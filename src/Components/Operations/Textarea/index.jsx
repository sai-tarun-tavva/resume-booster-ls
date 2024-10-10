import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../../store";
import classes from "./index.module.scss";

const Textarea = ({ error, setError }) => {
  const dispatch = useDispatch();
  const { description: value } = useSelector((state) => state.data);
  const descriptionRef = useRef("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    setError("");
  };

  const handleBlur = () => {
    const desc = descriptionRef.current.value;
    setIsFocused(false);
    dispatch(dataActions.updateDescription(desc));
    if (desc === "") setError("Job description is required.");
  };

  return (
    <div className={classes.textarea}>
      <label
        htmlFor="description"
        className={`${classes.label} ${
          isFocused || value ? classes.active : ""
        } ${error ? classes.error : ""}`}
      >
        Enter job description
      </label>
      <textarea
        id="description"
        className={`${classes.input} ${isFocused ? classes.focused : ""} ${
          error ? classes.error : ""
        }`}
        ref={descriptionRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <small className={classes.errorText}>{error || ""}</small>
    </div>
  );
};

export default Textarea;
