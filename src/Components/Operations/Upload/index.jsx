import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../../store";
import classes from "./index.module.scss";

const Upload = () => {
  const dispatch = useDispatch();
  const { file } = useSelector((state) => state.data);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      dispatch(dataActions.updateFile(selectedFile));
      setError(""); // Clear error if file is selected
    } else {
      setError("File is required.");
    }
  };

  const handleBlur = () => {
    if (!file) {
      setError("File is required.");
    }
  };

  return (
    <div className={classes.upload}>
      <div>
        <input
          type="file"
          id="file-upload"
          onChange={handleFileChange}
          onBlur={handleBlur}
          className={classes.input}
        />
        <label htmlFor="file-upload" className={classes.label}>
          Choose File
        </label>
        <span className={classes.name}>{file?.name || "No file chosen"}</span>
      </div>
      <small className={classes.errorText}>{error}</small>
    </div>
  );
};

export default Upload;
