import Image from "next/image";

import { EventsType } from "@/shared/lib/types";

export default function EventInner({ event }: { event: EventsType }) {
  return (
    <>
      <section className="relative h-[360px] overflow-hidden flex justify-center items-center">
        <Image
          src={event.imageUrl}
          alt="event background"
          priority
          fill
          sizes="(max-width:1280) 100vw, 1280px"
          quality={50}
          className="object-cover blur-3xl z-0"
        />
        <div className="z-1 relative flex flex-col lg:flex-row">
          <Image src={event.imageUrl} alt={event.name} width={300} height={200} className="border border-white rounded mr-10" />
          <div>
            <p>{new Date(event.date).toLocaleString("en-US", { weekday: "long", month: "long", day: "numeric" })}</p>
            <h1 className="font-bold text-4xl mb-2 mt-1 whitespace-normal">{event.name}</h1>
            <p className="text-xl whitespace-nowrap">Organizied by {event.organizerName}</p>
            <button className="bg-white/20 bg-blur text-lg capitalize mt-6 cursor-pointer w-[95vw] rounded-md sm:w-full py-2 general-effects">
              Get Tickets
            </button>
          </div>
        </div>
      </section>
      <div className="general-content justify-center text-center min-h-[75%]">
        <section className="mb-12">
          <h2 className="mb-3">About this event</h2>
          <p className="event-inner_p">{event.description}</p>
        </section>
        <section>
          <h2 className="mb-3">Location</h2>
          <p className="event-inner_p ">{event.location}</p>
        </section>
      </div>
    </>
  );
}
