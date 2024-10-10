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

  return (
    <div className={classes.actions}>
      {actionItems.map((item, index) => (
        <Action key={index} name={item} />
      ))}
    </div>
  );
};

export default Actions;
