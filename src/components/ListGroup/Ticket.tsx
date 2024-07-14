import { TicketT } from "@api/ticketType";
import React from "react";
import airlineCo from "./airlineCo.png";
import classes from "./ListGroup.module.scss";

export const Ticket = ({ ticket: { details, price } }: { ticket: TicketT }) => {
  const priceWithCurrency = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <div className={classes.ticket}>
      <div className={classes.ticket__header}>
        <div>{priceWithCurrency}</div>
        <img className={classes.ticket__header__image} src={airlineCo as string} alt="airlineCo" />
      </div>
      <div className={classes.ticket__details}>
        {details.map(({ route, time_from, time_to, duration, transfers }) => (
          <div key={route} className={classes.ticket__details__box}>
            <div className={classes.ticket__details__box__column}>
              <div>{route}</div>
              <time dateTime={time_from}>
                {time_from} - {time_to}
              </time>
            </div>
            <div className={classes.ticket__details__box__column}>
              <div>В дорозі</div>
              <time dateTime={duration}>{duration}</time>
            </div>
            <div className={classes.ticket__details__box__column}>
              <div>{transfers?.length ? `${transfers.length} Пересадки` : "Без пересадок"}</div>
              <div>{transfers?.join(", ")}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
