import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Loader";
import Header from "./Header";
import Response from "./Response";
import { resultActions } from "../../../store";
import classes from "./index.module.scss";

const Results = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.loading);

  const handleSelectResults = (key) => {
    dispatch(resultActions.updateSelectedKey(key));
  };

  return (
    <>
      {isLoading ? (
        <div className={classes.loaderContainer}>
          <Loader />
        </div>
      ) : (
        <article className={classes.results}>
          <Header clickHandler={handleSelectResults} />
          <Response />
        </article>
      )}
    </>
  );
};

export default Results;
