import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";
import TicketT from "@api/ticketType";
import Ticket from "@components/ListGroup/Ticket";
import Sort from "@components/ListGroup/Sort";
import Filters from "@components/ListGroup/Filters/Filters";
import clsx from "clsx";
import { incrementMore } from "@redux/ticketReducer";
import classes from "./ListGroup.module.scss";

const List = () => {
  const more = useSelector((state: RootState) => state.tickets.more);
  const dispatch = useDispatch();
  const handleMore = () => dispatch(incrementMore());
  const tickets: TicketT[] = useSelector((state: RootState) => state.tickets.filteredData);
  const isMore = tickets.length > more * 5;

  return (
    <article className={classes.list}>
      <Sort />
      {tickets.slice(0, more * 5).map((ticket) => (
        <Ticket key={JSON.stringify(ticket)} ticket={ticket} />
      ))}
      <button
        disabled={!isMore}
        onClick={handleMore}
        className={clsx(classes.list__button, !isMore && classes["list__button--disabled"])}
        type="button"
      >
        {isMore ? "Показати ще 5 квитків" : "Більше квитків відсутні"}
      </button>
    </article>
  );
};

const ListGroup = () => {
  return (
    <main className={classes.main}>
      <Filters />
      <List />
    </main>
  );
};

export default ListGroup;
