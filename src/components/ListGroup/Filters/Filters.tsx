import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterByStops } from "@redux/ticketReducer";
import classes from "./Filters.module.scss";

const flights = [
  { label: "Без пересадок", value: 0 },
  { label: "1 Пересадка", value: 1 },
  { label: "2 Пересадки", value: 2 },
  { label: "3 Пересадки", value: 3 },
];

const Filters = () => {
  const [filters, setFilters] = React.useState<number[]>([]);
  const dispatch = useDispatch();

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);

    if (e.target.checked) {
      setFilters([...filters, value]);
    } else {
      setFilters(filters.filter((filter) => filter !== value));
    }
  };

  const handleAllFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setFilters(flights.map(({ value }) => value));
    } else {
      setFilters([]);
    }
  };

  // useEffect(() => {
  //   dispatch(filterByStops(filters));
  // }, [filters]);

  return (
    <aside className={classes.aside}>
      <h3 className={classes.aside__header}>Кількість пересадок</h3>
      <div className={classes.aside__filters}>
        <label className={classes.aside__filters__filter}>
          <input name="all" className={classes.aside__filters__filter__input} type="checkbox" onChange={handleAllFilters} />
          Всі
        </label>
        {flights.map(({ value, label }) => (
          <label className={classes.aside__filters__filter} key={label}>
            <input name={label} className={classes.aside__filters__filter__input} type="checkbox" value={value} onChange={handleFilterChange} />
            {label}
          </label>
        ))}
      </div>
    </aside>
  );
};

export default Filters;
