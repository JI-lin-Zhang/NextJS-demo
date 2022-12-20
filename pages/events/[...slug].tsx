import React, { Fragment } from "react";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import { getFilteredEvents } from "../../helper/api-utils";

export default function FilteredEventsPage(props: any) {
  const { filterEvents, year, month } = props;
  const date = new Date(year, month - 1);

  if (!filterEvents) {
    return <p className="center">...isLoading</p>;
  }

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2022 ||
    year < 2021 ||
    month > 12 ||
    month < 1
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter, please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button url="/events">SHOW ALL EVENTS</Button>
        </div>
      </Fragment>
    );
  }

  if (!filterEvents || filterEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No Events Found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button url="/events">SHOW ALL EVENTS</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filterEvents} />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  const year = Number(slug[0]);
  const month = Number(slug[1]);
  const filterEvents = await getFilteredEvents(year, month);

  return {
    props: {
      filterEvents,
      year,
      month,
    },
  };
}
