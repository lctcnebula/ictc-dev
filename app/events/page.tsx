import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import UpcomingEvents from "@/components/UpcomingEvents";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "Events", description: "Upcoming events at Lake County Tech Campus." };

export default function EventsPage() {
  return (
    <>
      <PageHero image="/assets/img/nails.jpg" crumbs={[{ label: "Events" }]} title="We are stronger together">
        Come see the campus, meet the students and celebrate the people who make it work.
      </PageHero>
      <section className="block tint">
        <div className="wrap">
          <div className="head">
            <div>
              <p className="kicker">Upcoming</p>
              <h2>On campus soon</h2>
            </div>
            <a className="text-link" href={site.calendarUrl} target="_blank" rel="noopener">Full campus calendar →</a>
          </div>
          <UpcomingEvents />
          <div className="cta reveal" style={{ marginTop: "clamp(56px, 8vw, 96px)" }}>
            <div>
              <h2>See it for yourself</h2>
              <p>Families, students and partners are welcome to tour the labs and talk with instructors.</p>
            </div>
            <a className="btn solid" href={site.tourUrl} target="_blank" rel="noopener">Schedule a tour</a>
          </div>
        </div>
      </section>
    </>
  );
}
