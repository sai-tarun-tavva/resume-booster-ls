import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Textarea from "./Textarea";
import Upload from "./Upload";
import Select from "./Select";
import Actions from "./Actions";
import Button from "./Button";
import { CONTENT, INPUT_ACTION_TYPES } from "../../constants";
import classes from "./index.module.scss";

const { TEXTAREA, UPLOAD, SELECT, CHECKBOX } = INPUT_ACTION_TYPES;

const initialState = {
  [TEXTAREA]: "",
  [UPLOAD]: "",
  [SELECT]: "",
  [CHECKBOX]: "",
};

const Operations = () => {
  const { description, selectedAI, selectedActions } = useSelector(
    (state) => state.data
  );
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState(initialState);
  const {
    button,
    textarea: { error: textareaError },
    upload: { error: uploadError },
    select: { error: selectError },
    actions: { error: actionsError },
  } = CONTENT.sparkHub.operations;

  const setSingleError = (error, type) => {
    setErrors((prev) => ({ ...prev, [type]: error }));
  };

  const validateForm = () => {
    const validationErrors = {
      [TEXTAREA]: !description ? textareaError : "",
      [UPLOAD]: !file ? uploadError : "",
      [SELECT]: !selectedAI ? selectError : "",
      [CHECKBOX]: selectedActions.length === 0 ? actionsError : "",
    };
    return validationErrors;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.values(validationErrors).some((error) => error)) {
      setErrors(validationErrors);
    } else {
      setErrors(initialState);
      console.log(description, file, selectedAI, selectedActions);
      // Dispatch action or call API here
    }
  };

  return (
    <div className={classes.operations}>
      <Header />
      <form onSubmit={handleFormSubmit}>
        <Textarea
          error={errors[TEXTAREA]}
          setError={(error) => setSingleError(error, TEXTAREA)}
        />
        <Upload
          file={file}
          setFile={setFile}
          error={errors[UPLOAD]}
          setError={(error) => setSingleError(error, UPLOAD)}
        />
        <Select
          error={errors[SELECT]}
          setError={(error) => setSingleError(error, SELECT)}
        />
        <Actions
          error={errors[CHECKBOX]}
          setError={(error) => setSingleError(error, CHECKBOX)}
        />
        <Button>
          {button.default} <i className="bi bi-rocket-takeoff"></i>
        </Button>
      </form>
    </div>
  );
};

export default Operations;
