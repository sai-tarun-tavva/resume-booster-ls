import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../atoms/Loader";
import Header from "./Header";
import Response from "./Response";
import { resultActions } from "../../../store";
import classes from "./index.module.scss";

/**
 * Results Component
 *
 * Displays the results of operations and handles loading state.
 *
 * @returns {JSX.Element} The results component.
 */
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
