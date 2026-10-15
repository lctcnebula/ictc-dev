"use client";

import { useEffect, useState } from "react";
import { site, upcomingEvents } from "@/lib/content";
import EventCard from "./EventCard";

// The page is built once, so re-check dates in the visitor's browser: past events drop off with no rebuild.
export function useUpcomingEvents() {
  const [list, setList] = useState(() => upcomingEvents());
  useEffect(() => setList(upcomingEvents()), []);
  return list;
}

export default function UpcomingEvents() {
  const events = useUpcomingEvents();
  if (!events.length)
    return <p className="empty">No upcoming events right now. Check the <a href={site.calendarUrl} target="_blank" rel="noopener">campus calendar</a>.</p>;
  return <div className="grid three">{events.map(e => <EventCard key={e.date + e.title} e={e} />)}</div>;
}
