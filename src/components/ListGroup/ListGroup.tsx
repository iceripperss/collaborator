import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { TicketT } from "@api/ticketType";
import clsx from "clsx";
import { setMore } from "@redux/ticket/ticketReducer";
import { Sort } from "@components/ListGroup/Sort";
import { Ticket } from "@components/ListGroup/Ticket";
import { Filters } from "@components/ListGroup/Filters/Filters";
import classes from "./ListGroup.module.scss";

const List = () => {
  const more = useSelector((state: RootState) => state.tickets.more);
  const dispatch = useDispatch();
  const handleMore = () => dispatch(setMore(more + 1));
  const tickets: TicketT[] = useSelector((state: RootState) => state.tickets.filteredData);
  const isMore = tickets.length > more * 5;
  const slicedTickets = useMemo(() => tickets.slice(0, more * 5), [more, tickets]);

  return (
    <article className={classes.list}>
      <Sort />
      {slicedTickets.map((ticket) => (
        <Ticket key={JSON.stringify(ticket)} ticket={ticket} />
      ))}
      <button
        disabled={!isMore}
        onClick={handleMore}
        className={clsx(classes.list__button, !isMore && classes.list__button_disabled)}
        type="button"
      >
        {isMore ? "Показати ще 5 квитків" : "Більше квитків відсутні"}
      </button>
    </article>
  );
};

export const ListGroup = () => {
  return (
    <main className={classes.main}>
      <Filters />
      <List />
    </main>
  );
};
