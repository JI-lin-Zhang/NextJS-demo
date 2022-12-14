import { FC, ReactNode } from "react";
import classes from "./event-content.module.css";

interface IEventContentOwnProps {
  children?: ReactNode;
}

const EventContent: FC<IEventContentOwnProps> = (props) => {
  return <section className={classes.content}>{props.children}</section>;
};

export default EventContent;
