import { useSelector } from "react-redux";
import { CONTENT } from "../../../../constants";
import classes from "./index.module.scss";

const Header = ({ clickHandler }) => {
  const { selectedKey } = useSelector((state) => state.result);
  const headerTabs = Object.entries(CONTENT.sparkHub.results);

  return (
    <header className={classes.headerContainer}>
      <nav className={classes.header}>
        {headerTabs.map(([key, value]) => (
          <button
            key={key}
            className={`${classes.headerTab} ${
              key === selectedKey ? classes.active : ""
            }`}
            onClick={() => clickHandler(key)}
          >
            {value}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
