import { useReducer, useState } from "react";
import { useSelector } from "react-redux";
import Textarea from "./Textarea";
import Upload from "./Upload";
import Select from "./Select";
import Actions from "./Actions";
import Button from "./Button";
import { INPUT_ACTION_TYPES } from "../../constants";
import classes from "./index.module.scss";

const { TEXTAREA, UPLOAD, SELECT, CHECKBOX } = INPUT_ACTION_TYPES;

const initialState = {
  [TEXTAREA]: "",
  [UPLOAD]: "",
  [SELECT]: "",
  [CHECKBOX]: "",
};

const reducer = (state, action) => {
  const { type, payload } = action;

  return {
    ...state,
    [type]: payload,
  };
};

const Operations = () => {
  const { description, selectedAI, selectedActions } = useSelector(
    (state) => state.data
  );
  const [file, setFile] = useState(null);
  const [errors, dispatch] = useReducer(reducer, initialState);

  const setError = (action) => {
    dispatch(action);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!description || !file || !selectedAI || selectedActions.length === 0) {
      setError({
        type: TEXTAREA,
        payload: !description ? "Job description is required." : "",
      });
      setError({
        type: UPLOAD,
        payload: !file ? "Resume is required." : "",
      });
      setError({
        type: SELECT,
        payload: !selectedAI ? "Please select an AI." : "",
      });
      setError({
        type: CHECKBOX,
        payload:
          selectedActions.length === 0
            ? "Please select at least one action."
            : "",
      });
    } else {
      console.log(description, file, selectedAI, selectedActions);
    }
  };

  return (
    <div className={classes.operations}>
      <span>
        <p>R</p>
        <p>Spark</p>
      </span>

      <form onSubmit={handleFormSubmit}>
        <Textarea error={errors[TEXTAREA]} setError={setError} />
        <Upload
          file={file}
          setFile={setFile}
          error={errors[UPLOAD]}
          setError={setError}
        />
        <Select error={errors[SELECT]} setError={setError} />
        <Actions error={errors[CHECKBOX]} setError={setError} />

        <Button>Ready to boost?</Button>
      </form>
    </div>
  );
};

export default Operations;
