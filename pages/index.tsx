import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

export default function HomePage() {
  //获取专题活动数据
  const featureEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featureEvents} />
    </div>
  );
}
