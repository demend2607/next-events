import { Metadata } from "next";
import { Suspense } from "react";

import EventsList from "@/features/events/ui/EventsList";
import { capitalize } from "@/shared/lib/hooks/utils";

import Loading from "../loading";

export async function generateMetadata({ params }: Readonly<{ params: { city: string } }>): Promise<Metadata> {
  const { city } = await params;

  return {
    title: city === "all" ? "All events" : `Events in ${capitalize(city)}`,
  };
}

export default async function EventsCity({ params }: Readonly<{ params: { city: string } }>) {
  const { city } = await params;

  return (
    <main className="general-content min-h-[110vh]">
      <h1 className="general-title mb-10">Events {capitalize(city)}</h1>
      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
