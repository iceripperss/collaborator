import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import TicketT from "@api/ticketType";
import Ticket from "@components/ListGroup/Ticket";
import Sort from "@components/ListGroup/Sort";
import Filters from "@components/ListGroup/Filters/Filters";
import classes from "./ListGroup.module.scss";

const List = () => {
  const [more, setMore] = React.useState<number>(5);
  const handleMore = () => setMore((prev) => prev + 5);
  const tickets: TicketT[] = useSelector((state: RootState) => state.tickets.data);
  const isMore = tickets.length - 5 <= more;

  return (
    <article className={classes.list}>
      <Sort />
      {tickets.slice(0, more).map((ticket) => (
        <Ticket key={JSON.stringify(ticket)} ticket={ticket} />
      ))}
      <button disabled={isMore} onClick={handleMore} className={classes.list__button} type="button">
        Показати ще 5 квитків
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
