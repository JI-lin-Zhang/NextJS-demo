import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helper/api-utils";

export default function HomePage(props: any) {
  const { featuredEvents } = props;

  return <div>{<EventList items={featuredEvents} />}</div>;
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
  };
}
