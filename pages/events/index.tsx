import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { IEventInterface } from "../../constant/events.interface";
import { getAllEvents } from "../../helper/api-utils";

export default function AllEventsPage(props: any) {
  const { allEvents } = props;
  const router = useRouter();
  const findEventHandler = (year: number, month: number) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <div>
      <Head>
        {/* 添加网页标题 */}
        <title>NextJs Events</title>
        {/* 添加网页元信息 */}
        <meta name="description" content="All events." key="indexKey" />
      </Head>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={allEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const allEvents = (await getAllEvents()) as IEventInterface[];

  return {
    props: {
      allEvents,
    },
    revalidate: 60,
  };
}
