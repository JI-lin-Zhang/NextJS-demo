import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

export default function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId as string;
  const eventDetailData = getEventById(eventId);

  if (!eventDetailData) {
    return <h1>NO EVENT FOUND</h1>;
  }

  return <div>EventDetailPage</div>;
}
