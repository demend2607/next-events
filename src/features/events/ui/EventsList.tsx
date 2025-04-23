import { GetEvents } from "../model/api";

import EventCard from "./EventCard";

export default async function EventsList({ city }: { city: string }) {
  const events = await GetEvents(city);

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center max-lg:px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
