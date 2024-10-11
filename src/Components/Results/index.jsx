import Header from "./Header";
import Response from "./Response";
import classes from "./index.module.scss";

const Results = () => {
  return (
    <div className={classes.results}>
      <Header />
      <Response />
    </div>
  );
};

export default Results;
