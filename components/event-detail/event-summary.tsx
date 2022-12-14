import classes from "./event-summary.module.css";

interface IEventSummaryOwnProps {
  title: string;
}

function EventSummary(props: IEventSummaryOwnProps) {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;
