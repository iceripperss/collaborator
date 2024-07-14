import TicketT from "@api/ticketType";
import classes from "@components/ListGroup/ListGroup.module.scss";
import airlineCo from "@components/ListGroup/airlineCo.png";
import React from "react";

const Ticket = ({ ticket: { details, price } }: { ticket: TicketT }) => {
  const priceWithCurrency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);

  return (
    <div className={classes.ticket} key={JSON.stringify(details)}>
      <div className={classes.ticket__header}>
        <div>{priceWithCurrency}</div>
        <img className={classes.ticket__header__image} src={airlineCo as string} alt="airlineCo" />
      </div>
      <div className={classes.ticket__details}>
        {details.map(({ route, time_from, time_to, duration, stops_locations }) => (
          <div key={route} className={classes.ticket__details__box}>
            <div className={classes.ticket__details__box__column}>
              <div>{route}</div>
              <div>
                {time_from} - {time_to}
              </div>
            </div>
            <div className={classes.ticket__details__box__column}>
              <div>В дорозі</div>
              <div>{duration}</div>
            </div>
            <div className={classes.ticket__details__box__column}>
              <div>{stops_locations?.length ? `${stops_locations.length} Пересадки` : "Без пересадок"}</div>
              <div>{stops_locations?.join(", ")}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticket;
