import { useSelector } from "react-redux";
import { formatContent } from "../../../../utilities";
import classes from "./index.module.scss";

const Response = () => {
  const { selectedKey, ...result } = useSelector((state) => state.result);

  return (
    <section className={classes.responseContainer}>
      {formatContent(result[selectedKey], classes)}
    </section>
  );
};

export default Response;
