import { useDispatch, useSelector } from "react-redux";
import Action from "../Action";
import { dataActions } from "../../../store";
import { CONTENT } from "../../../constants";
import classes from "./index.module.scss";

const Actions = ({ error, setError }) => {
  const dispatch = useDispatch();
  const { selectedActions } = useSelector((state) => state.data);
  const {
    error: errorMessage,
    header,
    items: actionItems,
  } = CONTENT.sparkHub.actions;

  const handleCheckboxChange = (name) => {
    let updatedActions = [...selectedActions];
    if (updatedActions.includes(name)) {
      updatedActions = updatedActions.filter((action) => action !== name);
    } else {
      updatedActions.push(name);
    }
    dispatch(dataActions.updateSelectedActions(updatedActions));
    if (updatedActions.length > 0) {
      setError("");
    } else {
      setError(errorMessage);
    }
  };

  return (
    <div className={classes.actionsContainer}>
      <h3 className={classes.title}>{header}</h3>
      <div className={classes.actions}>
        {actionItems.map((item, index) => (
          <Action key={index} name={item} onChange={handleCheckboxChange} />
        ))}
      </div>
      <small className={classes.errorText}>{error || ""}</small>
    </div>
  );
};

export default Actions;
