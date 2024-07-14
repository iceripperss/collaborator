import React, { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { sortByDuration, sortByOptimal, sortByPrice } from "@redux/ticketReducer";
import clsx from "clsx";
import classes from "@components/ListGroup/ListGroup.module.scss";

const Sort = () => {
  const [active, setActive] = React.useState<number>(0);
  const dispatch = useDispatch();
  const handleLowestPriceSort = () => dispatch(sortByPrice());
  const handleFastestSort = () => dispatch(sortByDuration());
  const handleOptimalSort = () => dispatch(sortByOptimal());

  const setActiveButton = useCallback(
    (id: number, callback: () => void) => () => {
      setActive(id);
      callback();
    },
    [],
  );

  const buttonsMap = useMemo(
    () => [
      {
        title: "Найдешевший",
        onClick: handleLowestPriceSort,
      },
      {
        title: "Найшвидший",
        onClick: handleFastestSort,
      },
      {
        title: "Оптимальний",
        onClick: handleOptimalSort,
      },
    ],
    [],
  );

  return (
    <div className={classes.sort}>
      {buttonsMap.map(({ title, onClick }, index) => (
        <button
          key={title}
          type="button"
          onClick={setActiveButton(index, onClick)}
          className={clsx(classes.sort__button, active === index && classes["sort__button--active"])}
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default Sort;
