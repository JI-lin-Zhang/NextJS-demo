import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import { IEventInterface } from "../../constant/events.interface";

export default function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId as string;
  const eventDetailData = getEventById(eventId);

  if (!eventDetailData) {
    return <h1>NO EVENT FOUND</h1>;
  }

  return (
    <Fragment>
      <EventSummary title={eventDetailData.title} />
      <EventLogistics
        date={eventDetailData.date}
        address={eventDetailData.location}
        image={eventDetailData.image}
        imageAlt={eventDetailData.title}
      />
      <EventContent>
        <p>{eventDetailData.description}</p>
      </EventContent>
    </Fragment>
  );
}
