import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import TicketT from "@api/ticketType";
import Ticket from "@components/ListGroup/Ticket";
import Sort from "@components/ListGroup/Sort";
import Filters from "@components/ListGroup/Filters/Filters";
import clsx from "clsx";
import classes from "./ListGroup.module.scss";

const List = () => {
  const [more, setMore] = React.useState<number>(1);
  const handleMore = () => setMore((prev) => prev + 1);
  const tickets: TicketT[] = useSelector((state: RootState) => state.tickets.data);
  const isMore = tickets.length >= more * 5;

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
