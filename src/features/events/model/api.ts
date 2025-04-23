import { EVENTO_URL } from "@/shared/lib/constants";
import { EventsType } from "../../../shared/lib/types";

export async function GetEvents(city: string) {
  const response = await fetch(`${EVENTO_URL}?city=${city}`);
  const events: EventsType[] = await response.json();

  return events;
}
