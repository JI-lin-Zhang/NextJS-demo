import React, { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import ErrorAlert from "../../components/ui/error-alert";
import { getEventById, getFeaturedEvents } from "../../helper/api-utils";
import { IEventInterface } from "../../constant/events.interface";

export default function EventDetailPage(props: any) {
  const { eventDetailData } = props;

  if (!eventDetailData) {
    return (
      <ErrorAlert>
        <p className="center">...loading</p>
      </ErrorAlert>
    );
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

export async function getStaticProps(context: any) {
  const eventId = context.params.eventId;

  const eventDetailData = await getEventById(eventId);

  return {
    props: {
      eventDetailData,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = (await getFeaturedEvents()) as IEventInterface[];
  const paths = events.map((event) => ({ params: { eventId: event.eid } }));

  return {
    paths,
    //告诉nextjs当还有更多的页面，当访问时自动生成
    fallback: true,
  };
}
