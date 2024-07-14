import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import TicketT from "@api/ticketType";
import Ticket from "@components/ListGroup/Ticket";
import Sort from "@components/ListGroup/Sort";
import classes from "./ListGroup.module.scss";

const List = () => {
  const [more, setMore] = React.useState<number>(5);
  const handleMore = () => setMore((prev) => prev + 5);
  const tickets: TicketT[] = useSelector((state: RootState) => state.tickets.data);

  return (
    <div className={classes.list}>
      <Sort />
      {tickets.slice(0, more).map((ticket) => (
        <Ticket key={JSON.stringify(ticket)} ticket={ticket} />
      ))}
      <button onClick={handleMore} className={classes.list__button} type="button">
        Показати ще 5 квитків
      </button>
    </div>
  );
};

export default List;
