import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";

export default function AllEventsPage() {
  const allEvents = getAllEvents();
  const router = useRouter();
  const findEventHandler = (year: number, month: number) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <div>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={allEvents} />
    </div>
  );
}
