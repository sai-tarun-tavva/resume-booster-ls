import { useReducer } from "react";
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
  const [errors, dispatch] = useReducer(reducer, initialState);

  const setError = (action) => {
    dispatch(action);
  };

  return (
    <div className={classes.operations}>
      <span>
        <p>R</p>
        <p>Spark</p>
      </span>

      <Textarea error={errors[TEXTAREA]} setError={setError} />
      <Upload error={errors[UPLOAD]} setError={setError} />
      <Select error={errors[SELECT]} setError={setError} />
      <Actions error={errors[CHECKBOX]} setError={setError} />

      <Button>Ready to boost?</Button>
    </div>
  );
};

export default Operations;
