import Button from "../ui/button";
import classes from "./results-title.module.css";

interface IResultsTitle {
  date: any;
}

function ResultsTitle(props: IResultsTitle) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button url="/events">Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
