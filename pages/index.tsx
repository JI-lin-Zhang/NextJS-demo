import Head from "next/head";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helper/api-utils";

export default function HomePage(props: any) {
  const { featuredEvents } = props;

  return (
    <div>
      <Head>
        {/* 添加网页标题 */}
        <title>NextJs Events</title>
        {/* 添加网页元信息 */}
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve."
          key="AllKey"
        />
      </Head>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
    // 每半小时重新执行下当前函数
    revalidate: 1800,
  };
}
