import { formatContent } from "../../../utilities/utilities";
import { sample } from "../../../constants/sample";
import classes from "./index.module.scss";

const Response = () => {
  return (
    <div className={classes.responseContainer}>
      {formatContent(sample[8], classes)}
    </div>
  );
};

export default Response;
