import prisma from "@/shared/lib/db";
import { notFound } from "next/navigation";

import { capitalize } from "@/shared/lib/hooks/utils";
export async function GetEvents(city: string) {
  const events = await prisma.eventoEvent.findMany({ where: { city: city === "all" ? undefined : capitalize(city) } });

  if (events.length === 0) {
    return notFound();
  }

  return events;
}
