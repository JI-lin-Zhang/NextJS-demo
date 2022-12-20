import React from "react";
import { IEventInterface } from "../../constant/events.interface";
import EventItem from "./event-item";
import classes from "./event-list.module.css";

interface IEventListProps {
  items: IEventInterface[];
}

export default function EventList(props: IEventListProps) {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((item: IEventInterface) => (
        <EventItem key={item.eid} data={item} />
      ))}
    </ul>
  );
}
