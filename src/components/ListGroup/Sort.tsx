import React, { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { sortByDuration, sortByOptimal, sortByPrice } from "@redux/ticketReducer";
import clsx from "clsx";
import classes from "@components/ListGroup/ListGroup.module.scss";

const Sort = () => {
  const [active, setActive] = React.useState<number>(0);
  const dispatch = useDispatch();

  const setActiveButton = useCallback(
    (id: number, callback: () => void) => () => {
      setActive(id);
      callback();
    },
    [],
  );

  const buttonsMap = useMemo(() => {
    const handleLowestPriceSort = () => dispatch(sortByPrice());
    const handleFastestSort = () => dispatch(sortByDuration());
    const handleOptimalSort = () => dispatch(sortByOptimal());

    return [
      {
        title: "Найдешевший",
        onClick: handleLowestPriceSort,
        id: 1,
      },
      {
        title: "Найшвидший",
        onClick: handleFastestSort,
        id: 2,
      },
      {
        title: "Оптимальний",
        onClick: handleOptimalSort,
        id: 3,
      },
    ];
  }, []);

  return (
    <div className={classes.sort}>
      {buttonsMap.map(({ title, onClick, id }) => (
        <button
          key={title}
          type="button"
          onClick={setActiveButton(id, onClick)}
          className={clsx(classes.sort__button, active === id && classes["sort__button--active"])}
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default Sort;
