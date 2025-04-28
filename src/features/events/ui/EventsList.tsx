import { GetEvents } from "../model/api";

import EventCard from "./EventCard";
import PaginationControls from "./PaginationControls";

export default async function EventsList({ city, page = 1 }: { city: string; page?: number }) {
  const { events, totalCount } = await GetEvents(city, page);

  const prevPath = page > 1 ? `/events/${city}/?page=${page - 1}` : "";
  const nextPath = totalCount > 6 * page ? `/events/${city}/?page=${page + 1}` : "";

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center max-lg:px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      <PaginationControls nextPath={nextPath} prevPath={prevPath} />
    </section>
  );
}
