import { useRouter } from "next/router";
import React, { Fragment } from "react";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import { getFilteredEvents } from "../../dummy-data";

export default function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query?.slug;

  if (!filterData) {
    return <p className="center">...isLoading</p>;
  }

  const year = Number(filterData[0]);
  const month = Number(filterData[1]);
  const filterEvents = getFilteredEvents({ year, month });

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

  const date = new Date(year, month - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filterEvents} />
    </div>
  );
}
