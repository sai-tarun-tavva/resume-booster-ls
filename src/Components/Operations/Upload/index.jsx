import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../../store";
import classes from "./index.module.scss";

const Upload = () => {
  const dispatch = useDispatch();
  const { file } = useSelector((state) => state.data);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    dispatch(dataActions.updateFile(file));
  };

  return (
    <div className={classes.upload}>
      <input
        type="file"
        id="file-upload"
        onChange={handleFileChange}
        className={classes.input}
      />
      <label htmlFor="file-upload" className={classes.label}>
        Choose File
      </label>
      <span className={classes.name}>{file?.name || "No file chosen"}</span>
    </div>
  );
};

export default Upload;
