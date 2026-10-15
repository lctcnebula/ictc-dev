import type { Metadata } from "next";
import Link from "next/link";
import ProgramExplorer from "@/components/ProgramExplorer";
import { programs, site } from "@/lib/content";

export const metadata: Metadata = { title: "Programs", description: `The ${programs.length} career and technical programs at Lake County Tech Campus.` };

export default function ProgramsPage() {
  return (
    <>
      <section className="page-hero">
        <img src="/assets/img/construction.jpg" alt="" width={1024} height={683} />
        <div className="wrap">
          <p className="crumbs"><Link href="/">Home</Link> / Programs</p>
          <h1>{programs.length} ways to build a career</h1>
          <p>Hands-on training on real equipment, industry certifications and free college credit, all during the school day.</p>
        </div>
      </section>
      <section className="block tint">
        <div className="wrap">
          <ProgramExplorer />
          <p className="hint" style={{ marginTop: 28 }}>
            Program details are summarized from <a href={site.campusUrl + "/programs"} target="_blank" rel="noopener">techcampus.org</a>. Ready to join? See <a href={site.enrollUrl} target="_blank" rel="noopener">how to enroll</a>.
          </p>
        </div>
      </section>
    </>
  );
}
