import React from "react";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { ticketsActions } from "@redux/ticket/reducer";
import { Sort } from "@components/ListGroup/Sort";
import { Ticket } from "@components/ListGroup/Ticket";
import { Filters } from "@components/ListGroup/Filters/Filters";
import { useTickets } from "@redux/ticket/selector";
import classes from "./ListGroup.module.scss";

const List = () => {
  const dispatch = useDispatch();
  const { tickets, isMore } = useTickets();
  const handleMore = () => dispatch(ticketsActions.more());

  return (
    <article className={classes.list}>
      <Sort />
      {tickets.map((ticket) => (
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
