import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterByTransfers } from "@redux/ticket/ticketReducer";
import classes from "./Filters.module.scss";

const flights = [
  { label: "Без пересадок", value: 0 },
  { label: "1 Пересадка", value: 1 },
  { label: "2 Пересадки", value: 2 },
  { label: "3 Пересадки", value: 3 },
];

export const Filters = () => {
  const [filters, setFilters] = React.useState<number[]>([]);
  const dispatch = useDispatch();

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const allFilter = document.getElementById("allFilter") as HTMLInputElement;
    allFilter.checked = false;
    setFilters(e.target.checked ? [...filters, value] : filters.filter((filter) => filter !== value));
  };

  const handleAllFilters = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFilters(e.target.checked ? flights.map(({ value }) => value) : []);

  useEffect(() => {
    dispatch(filterByTransfers(filters));
  }, [filters]);

  return (
    <aside className={classes.aside}>
      <h3 className={classes.aside__header}>Кількість пересадок</h3>
      <div className={classes.aside__filters}>
        <label className={classes.aside__filters__filter}>
          <input
            id="allFilter"
            name="all"
            className={classes.aside__filters__filter__input}
            type="checkbox"
            onChange={handleAllFilters}
          />
          Всі
        </label>
        {flights.map(({ value, label }) => (
          <label className={classes.aside__filters__filter} key={label}>
            <input
              name={label}
              checked={filters.includes(value)}
              className={classes.aside__filters__filter__input}
              type="checkbox"
              value={value}
              onChange={handleFilterChange}
            />
            {label}
          </label>
        ))}
      </div>
    </aside>
  );
};
