import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ticketsActions } from "@redux/ticket/reducer";
import classes from "./Filters.module.scss";

enum FlightType {
  NoTransfers,
  OneTransfer,
  TwoTransfers,
  ThreeTransfers,
}

const flightsTransfers = [
  { label: "Без пересадок", value: FlightType.NoTransfers },
  { label: "1 Пересадка", value: FlightType.OneTransfer },
  { label: "2 Пересадки", value: FlightType.TwoTransfers },
  { label: "3 Пересадки", value: FlightType.ThreeTransfers },
];

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type CheckboxProps = { label: string; value?: number; checked: boolean; onChange: (e: ChangeEvent) => void };
const Checkbox = ({ label, value, checked, onChange }: CheckboxProps) => (
  <label className={classes.filter}>
    <input name={label} checked={checked} className={classes.filter__input} type="checkbox" value={value} onChange={onChange} />
    {label}
  </label>
);

export const Filters = () => {
  const [filters, setFilters] = React.useState<FlightType[]>([]);
  const [all, setAll] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  const handleFilterChange = (e: ChangeEvent) => {
    const value = parseInt(e.target.value, 10);
    const changedFilters = e.target.checked ? [...filters, value] : filters.filter((filter) => filter !== value);
    setFilters(changedFilters);
    setAll(changedFilters.length === flightsTransfers.length);
  };

  const toggleAllFilters = (e: ChangeEvent) => {
    const changedFilters = e.target.checked ? Object.values(FlightType) : [];
    setFilters(changedFilters);
    setAll((prev) => !prev);
  };

  useEffect(() => {
    dispatch(ticketsActions.filterByTransfers(filters));
  }, [dispatch, filters]);

  return (
    <aside className={classes.aside}>
      <h3 className={classes.aside__header}>Кількість пересадок</h3>
      <div className={classes.aside__filters}>
        <Checkbox checked={all} label="Всі" onChange={toggleAllFilters} />
        {flightsTransfers.map(({ value, label }) => (
          <Checkbox key={label} checked={filters.includes(value)} value={value} label={label} onChange={handleFilterChange} />
        ))}
      </div>
    </aside>
  );
};
