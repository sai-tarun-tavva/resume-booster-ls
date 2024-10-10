import { INPUT_ACTION_TYPES } from "../../../constants";
import classes from "./index.module.scss";

const Upload = ({ file, setFile, error, setError }) => {
  const { UPLOAD } = INPUT_ACTION_TYPES;

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError({ type: UPLOAD, payload: "" }); // Clear error if file is selected
    } else {
      setError({ type: UPLOAD, payload: "Resume is required." });
    }
  };

  const handleBlur = () => {
    if (!file) {
      setError({ type: UPLOAD, payload: "Resume is required." });
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
          <i className="bi bi-file-earmark"></i>
          Choose a resume
        </label>
        <span className={classes.name}>{file?.name || "No resume chosen"}</span>
      </div>
      <small className={classes.errorText}>{error}</small>
    </div>
  );
};

export default Upload;
