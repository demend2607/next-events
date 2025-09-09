import "server-only";

import prisma from "@/shared/lib/api/db";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";

import { capitalize } from "@/shared/lib/hooks/utils";
export const GetEvents = unstable_cache(async (city: string, page = 1) => {
  const events = await prisma.eventoEvent.findMany({
    where: { city: city === "all" ? undefined : capitalize(city) },
    orderBy: { date: "asc" },
    take: 6,
    skip: (page - 1) * 6,
  });

  if (events.length === 0) {
    return notFound();
  }
  let totalCount;
  if (city === "all") totalCount = await prisma.eventoEvent.count();
  else {
    totalCount = await prisma.eventoEvent.count({ where: { city: capitalize(city) } });
  }

  return { events, totalCount };
});
