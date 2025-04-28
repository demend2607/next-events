import "server-only";

import prisma from "@/shared/lib/api/db";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";

export const GetEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({ where: { slug: slug } });

  if (!event) {
    return notFound();
  }

  return event;
});
