import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setMore, sortByDuration, sortByOptimal, sortByPrice } from "@redux/ticket/ticketReducer";
import clsx from "clsx";
import { UnknownAction } from "redux";
import classes from "./ListGroup.module.scss";

const buttonsMap = [
  {
    title: "Найдешевший",
    onClick: sortByPrice,
  },
  {
    title: "Найшвидший",
    onClick: sortByDuration,
  },
  {
    title: "Оптимальний",
    onClick: sortByOptimal,
  },
];

export const Sort = () => {
  const [active, setActive] = React.useState(0);
  const dispatch = useDispatch();

  const setActiveButton = useCallback(
    (id: number, callback: () => void) => () => {
      setActive(id);
      dispatch(callback() as UnknownAction);
      dispatch(setMore(1));
    },
    [dispatch],
  );

  return (
    <div className={classes.sort}>
      {buttonsMap.map(({ title, onClick }, index) => (
        <button
          key={title}
          type="button"
          onClick={setActiveButton(index, onClick)}
          className={clsx(classes.sort__button, active === index && classes.sort__button_active)}
        >
          {title}
        </button>
      ))}
    </div>
  );
};
