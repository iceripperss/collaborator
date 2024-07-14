import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ticketsActions } from "@redux/ticket/reducer";
import clsx from "clsx";
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import classes from "./ListGroup.module.scss";

enum SortType {
  Price,
  Duration,
  Optimal,
}

const buttonsMap = [
  {
    title: "Найдешевший",
    onClick: ticketsActions.sortByPrice,
    value: SortType.Price,
  },
  {
    title: "Найшвидший",
    onClick: ticketsActions.sortByDuration,
    value: SortType.Duration,
  },
  {
    title: "Оптимальний",
    onClick: ticketsActions.sortByOptimal,
    value: SortType.Optimal,
  },
];

export const Sort = () => {
  const [active, setActive] = React.useState(SortType.Price);
  const dispatch = useDispatch();

  const setActiveButton = useCallback(
    (value: SortType, callback: ActionCreatorWithoutPayload) => () => {
      setActive(value);
      dispatch(callback());
    },
    [dispatch],
  );

  return (
    <div className={classes.sort}>
      {buttonsMap.map(({ title, onClick, value }) => (
        <button
          key={title}
          type="button"
          onClick={setActiveButton(value, onClick)}
          className={clsx(classes.sort__button, active === value && classes.sort__button_active)}
        >
          {title}
        </button>
      ))}
    </div>
  );
};
