import { useState } from "react";
import classes from "./index.module.scss";

const Select = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (value) {
      setError(""); // Clear error if an option is selected
    } else {
      setError("Please select an AI.");
    }
  };

  const handleBlur = () => {
    if (!selectedOption) {
      setError("Please select an AI.");
    }
  };

  return (
    <div className={classes.select}>
      <select
        className={`${classes.input} ${error ? classes.error : ""}`}
        id="ai"
        value={selectedOption}
        onChange={handleSelectChange}
        onBlur={handleBlur}
      >
        <option value="" disabled>
          Select an AI
        </option>
        <option value="1">GeminiAI</option>
        <option value="2">OpenAI</option>
      </select>
      <small className={classes.errorText}>{error}</small>
    </div>
  );
};

export default Select;
