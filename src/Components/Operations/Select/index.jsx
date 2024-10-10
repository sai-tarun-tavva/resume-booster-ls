import { useState } from "react";
import classes from "./index.module.scss";

const Select = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={classes.select}>
      <select
        className={classes.input}
        id="ai"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="" disabled>
          Select an AI
        </option>
        <option value="1">GeminiAI</option>
        <option value="2">OpenAI</option>
      </select>
    </div>
  );
};

export default Select;
