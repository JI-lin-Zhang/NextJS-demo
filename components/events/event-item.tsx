import React from "react";
import { IEventInterface } from "../../constant/events.interface";
import Button from "../ui/button";
import classes from "./event-item.module.css";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

interface IEventItemOwnProps {
  data: IEventInterface;
}

export default function EventItem(props: IEventItemOwnProps) {
  const { data } = props;
  const { image, title, date, location, eid } = data;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const exploreLink = `/events/${eid}`;

  const formattedAddress = location.replace(", ", "\n");

  const ButtonContent = () => {
    return (
      <>
        <span>Export Event</span>
        <span className={classes.icon}>
          <ArrowRightIcon />
        </span>
      </>
    );
  };

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button url={exploreLink}>{ButtonContent()}</Button>
        </div>
      </div>
    </li>
  );
}
