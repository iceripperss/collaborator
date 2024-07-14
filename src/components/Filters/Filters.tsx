import React from "react";
import classes from "./Filters.module.scss";

const flights = [
  { label: "Без пересадок", value: 0 },
  { label: "1 Пересадка", value: 1 },
  { label: "2 Пересадки", value: 2 },
  { label: "3 Пересадки", value: 3 },
];

const Filters = () => {
  return (
    <aside>
      <h3 className={classes.header}>Кількість пересадок</h3>
      <div>
        <div>
          <input type="checkbox" /> Всі
        </div>
        {flights.map(({ value, label }) => (
          <div key={label}>
            <input type="checkbox" value={value} /> {label}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Filters;
