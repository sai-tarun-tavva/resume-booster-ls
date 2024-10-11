import { CONTENT } from "../../../constants";
import classes from "./index.module.scss";
import { useState } from "react";

const Header = () => {
  const [activeTab, setActiveTab] = useState(0);
  const headerTabs = Object.values(CONTENT.sparkHub.results);

  return (
    <div className={classes.header}>
      {headerTabs.map((item, index) => (
        <div
          key={index}
          className={`${classes.headerTab} ${
            index === activeTab ? classes.active : ""
          }`}
          onClick={() => setActiveTab(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Header;
