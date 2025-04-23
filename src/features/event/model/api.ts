import prisma from "@/shared/lib/db";
import { notFound } from "next/navigation";

export async function GetEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({ where: { slug: slug } });

  if (!event) {
    return notFound();
  }

  return event;
}
