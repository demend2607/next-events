import { Metadata } from "next";
import { Suspense } from "react";
import { z } from "zod";

import EventsList from "@/features/events/ui/EventsList";
import { capitalize } from "@/shared/lib/hooks/utils";

import Loading from "../loading";

export async function generateMetadata({ params }: Readonly<{ params: { city: string } }>): Promise<Metadata> {
  const { city } = await params;

  return {
    title: city === "all" ? "All events" : `Events in ${capitalize(city)}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsCity({
  params,
  searchParams,
}: {
  params: { city: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { city } = await params;
  const parcedPage = pageNumberSchema.safeParse((await searchParams).page);
  if (!parcedPage.success) {
    throw new Error("Invalid page number");
  }

  return (
    <main className="general-content min-h-[110vh]">
      <h1 className="general-title mb-10">Events {capitalize(city)}</h1>
      <Suspense key={city + parcedPage.data} fallback={<Loading />}>
        <EventsList city={city} page={parcedPage.data} />
      </Suspense>
    </main>
  );
}
