import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Action from "../Action";
import { dataActions } from "../../../store";
import classes from "./index.module.scss";

const Actions = ({ error, setError }) => {
  const actionItems = [
    "Overall Assessment",
    "About Resume",
    "Percentage Match",
    "Improve Resume",
    "Missing Keywords",
    "Interview Questions",
    "Domain Experience",
    "Desired Skills",
  ];

  const dispatch = useDispatch();
  const { selectedActions } = useSelector((state) => state.data);

  const handleCheckboxChange = (name, checked) => {
    let updatedActions = [];
    if (checked) {
      updatedActions = [...selectedActions, name];
    } else {
      updatedActions = selectedActions.filter((action) => action !== name);
    }
    dispatch(dataActions.updateSelectedActions(updatedActions));
    if (updatedActions.length > 0) {
      setError(""); // Clear error when at least one checkbox is checked
    } else {
      setError("Please select at least one action.");
    }
  };

  return (
    <Fragment>
      <div className={classes.actionsContainer}>
        <div className={classes.actions}>
          {actionItems.map((item, index) => (
            <Action key={index} name={item} onChange={handleCheckboxChange} />
          ))}
        </div>
        <small className={classes.errorText}>{error}</small>
      </div>
    </Fragment>
  );
};

export default Actions;
