import { Fragment, useState } from "react";
import Action from "../Action";
import classes from "./index.module.scss";

const Actions = () => {
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

  const [selectedActions, setSelectedActions] = useState([]);
  const [error, setError] = useState("");

  const handleCheckboxChange = (name, checked) => {
    let updatedActions = [];
    if (checked) {
      updatedActions = [...selectedActions, name];
    } else {
      updatedActions = selectedActions.filter((action) => action !== name);
    }
    setSelectedActions(updatedActions);
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
