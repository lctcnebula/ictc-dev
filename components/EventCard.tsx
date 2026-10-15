import type { CampusEvent } from "@/lib/content";

export function eventParts(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return {
    m: d.toLocaleString("en-US", { month: "short" }).toUpperCase(),
    d: d.getDate(),
    w: d.toLocaleString("en-US", { weekday: "short" }),
    long: d.toLocaleString("en-US", { weekday: "long", month: "long", day: "numeric" }),
  };
}

export default function EventCard({ e }: { e: CampusEvent }) {
  const p = eventParts(e.date);
  return (
    <article className="card event reveal">
      <div className="media">
        <div className="clip"><img src={e.image} alt={e.alt} width={1024} height={683} loading="lazy" /></div>
        <div className="date"><span className="m">{p.m}</span><span className="d">{p.d}</span><span className="w">{p.w}</span></div>
      </div>
      <div className="content">
        <p className="time">{e.time}</p>
        <h3>{e.title}</h3>
        <p>{e.text}</p>
      </div>
    </article>
  );
}
