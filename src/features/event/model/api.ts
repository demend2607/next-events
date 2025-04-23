import { EVENTO_URL } from "@/shared/lib/constants";
import { EventsType } from "../../../shared/lib/types";

export async function GetEvent(slug: string) {
  const response = await fetch(`${EVENTO_URL}/${slug}`);
  const event: EventsType = await response.json();

  return event;
}
