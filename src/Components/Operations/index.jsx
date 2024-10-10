import Textarea from "./Textarea";
import Upload from "./Upload";
import Select from "./Select";
import Actions from "./Actions";
import Button from "./Button";
import classes from "./index.module.scss";

const Operations = () => {
  return (
    <div className={classes.operations}>
      <span>
        <p>R</p>
        <p>Spark</p>
      </span>

      <Textarea label="Enter job description" />
      <Upload />
      <Select />
      <Actions />

      <Button>Ready to boost?</Button>
    </div>
  );
};

export default Operations;
