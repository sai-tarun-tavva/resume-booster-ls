import { useSelector } from "react-redux";
import { CONTENT } from "../../../constants";
import classes from "./index.module.scss";

const Header = ({ clickHandler }) => {
  const { selectedKey } = useSelector((state) => state.result);
  const headerTabs = Object.entries(CONTENT.sparkHub.results);

  return (
    <div className={classes.headerContainer}>
      <div className={classes.header}>
        {headerTabs.map(([key, value]) => (
          <div
            key={key}
            className={`${classes.headerTab} ${
              key === selectedKey ? classes.active : ""
            }`}
            onClick={() => clickHandler(key)}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
