import React from "react";
import * as classes from "./Filters.module.scss";

const Filters = () => {
  console.log(classes + "");

  return (
    <aside>
      <h3 className={classes.header}>Кількість пересадок</h3>
    </aside>
  );
};

export default Filters;
