import { useDispatch } from "react-redux";
import Header from "./Header";
import Response from "./Response";
import { resultActions } from "../../store";
import classes from "./index.module.scss";

const Results = () => {
  const dispatch = useDispatch();

  const handleSelectResults = (key) => {
    dispatch(resultActions.updateSelectedKey(key));
  };

  return (
    <div className={classes.results}>
      <Header clickHandler={handleSelectResults} />
      <Response />
    </div>
  );
};

export default Results;
