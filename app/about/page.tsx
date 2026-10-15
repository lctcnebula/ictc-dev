import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Stats from "@/components/Stats";
import { CopyButton } from "@/components/Actions";
import { memberSchools, programs, site } from "@/lib/content";

export const metadata: Metadata = { title: "About", description: `About the ${site.name} and Lake County Tech Campus.` };

export default function AboutPage() {
  return (
    <>
      <PageHero image="/assets/img/welding.jpg" crumbs={[{ label: "About" }]} title="A foundation for the careers Lake County runs on">
        We back the students of Lake County Tech Campus with scholarships, grants, tools and certifications.
      </PageHero>
      <div style={{ height: 54 }} />
      <Stats />

      <section className="block">
        <div className="wrap split">
          <div className="copy reveal">
            <p className="kicker">Who we are</p>
            <h2>Cost should never decide who finishes</h2>
            <p>The <strong>{site.name}</strong> supports students at Lake County Tech Campus in Grayslake, &quot;{site.motto}&quot;</p>
            <p>Tech Campus is the largest secondary career and technical education system in Illinois and an extension of its member high schools. More than 2,500 students train here in {programs.length} programs, three sessions a day, five days a week.</p>
            <p>Students earn high school credit, industry certifications and free college credit through partnerships with the College of Lake County and McHenry County College. The Foundation covers what families can&apos;t: exam fees, starter kits, uniforms and the scholarships that carry students into what comes next.</p>
            <div className="hero-actions">
              <Link className="btn blue" href="/get-involved">Get involved</Link>
              <Link className="btn line" href="/contact">Contact us</Link>
            </div>
          </div>
          <div className="stack reveal">
            <div className="big"><img src="/assets/img/graduates.jpg" alt="Two smiling graduates in caps and gowns" width={1024} height={683} loading="lazy" /></div>
            <dl className="contact-card">
              <div><dt>Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a><CopyButton text={site.email} /></dd></div>
              <div><dt>Phone</dt><dd><a href={site.phoneHref}>{site.phone}</a></dd></div>
              <div><dt>Visit</dt><dd>{site.address}</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="block tint">
        <div className="wrap">
          <div className="head reveal">
            <div>
              <p className="kicker">Our community</p>
              <h2>{memberSchools.length} member high schools</h2>
              <p>Students from these schools across Lake and McHenry Counties spend part of each school day at Tech Campus.</p>
            </div>
          </div>
          <div className="school-grid reveal">
            {memberSchools.map(s => <span key={s}>{s}</span>)}
          </div>
        </div>
      </section>

      <section className="photo-band" aria-label="Our belief">
        <img src="/assets/img/sparks.jpg" alt="" width={1024} height={696} loading="lazy" />
        <div className="wrap reveal">
          <blockquote>Every student deserves a skill they can build a life on.</blockquote>
          <cite>{site.name}</cite>
        </div>
      </section>
    </>
  );
}
