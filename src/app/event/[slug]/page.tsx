import { Metadata } from "next";

import { GetEvent } from "@/features/event/model/api";
import EventInner from "@/features/event/ui/EventInner";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  const event = await GetEvent(slug);

  return {
    title: `${event.name}`,
  };
}
export default async function EventSlug({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const event = await GetEvent(slug);

  return (
    <main className="">
      <EventInner event={event} />
    </main>
  );
}
