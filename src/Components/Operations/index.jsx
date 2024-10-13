import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import Textarea from "./Textarea";
import Upload from "./Upload";
import Select from "./Select";
import Actions from "./Actions";
import Button from "./Button";
import { loadingActions, resultActions } from "../../store";
import { makeSuggestions } from "../../utilities";
import {
  CONTENT,
  INPUT_ACTION_TYPES,
  OPERATION_API_UI_KEYS,
  STATUS_CODES,
} from "../../constants";
import classes from "./index.module.scss";

const { TEXTAREA, UPLOAD, SELECT, CHECKBOX } = INPUT_ACTION_TYPES;

const initialState = {
  [TEXTAREA]: "",
  [UPLOAD]: "",
  [SELECT]: "",
  [CHECKBOX]: "",
};

const Operations = () => {
  const dispatch = useDispatch();
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

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.values(validationErrors).some((error) => error)) {
      setErrors(validationErrors);
    } else {
      setErrors(initialState);

      const formData = new FormData();
      formData.append("description", description);
      formData.append("file", file);

      selectedActions.forEach((action) => {
        formData.append("selectedActions[]", action);
      });

      formData.append("selectedAI", selectedAI);

      dispatch(loadingActions.enableLoading());

      const response = await makeSuggestions();
      const { status, data } = response;

      dispatch(loadingActions.disableLoading());

      if (status === STATUS_CODES.SUCCESS) {
        dispatch(resultActions.updateState(data.analysisResults));
        dispatch(
          resultActions.updateSelectedKey(
            OPERATION_API_UI_KEYS[Object.keys(data.analysisResults)[0]]
          )
        );
      }
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
