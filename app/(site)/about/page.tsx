import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Stats from "@/components/Stats";
import { ContactDetails, SchoolCount, SchoolGrid } from "@/components/Live";
import { site } from "@/lib/content";

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
            <p>The <strong>{site.name}</strong> exists for one reason: to make sure every Lake County Tech Campus student can finish what they start.</p>
            <p>Students come to Tech Campus from <SchoolCount /> member high schools to learn a trade on real equipment. Training is hands-on and often comes with costs a family didn&apos;t plan for: tools, uniforms, exam fees.</p>
            <p>The Foundation covers what families can&apos;t, and funds the scholarships that carry graduates into college, apprenticeships and their first jobs. Every dollar comes from donors, alumni and local businesses who believe in these students.</p>
            <div className="hero-actions">
              <Link className="btn blue" href="/get-involved">Get involved</Link>
              <Link className="btn line" href="/board">Meet the board</Link>
            </div>
          </div>
          <div className="stack reveal">
            <div className="big"><img src="/assets/img/graduates.jpg" alt="Two smiling graduates in caps and gowns" width={1024} height={683} loading="lazy" /></div>
            <ContactDetails className="contact-card" />
          </div>
        </div>
      </section>

      <section className="block tint">
        <div className="wrap">
          <div className="head reveal">
            <div>
              <p className="kicker">Our community</p>
              <h2><SchoolCount /> member high schools</h2>
              <p>Students from these schools spend part of each school day at Tech Campus.</p>
            </div>
          </div>
          <SchoolGrid />
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <div className="head reveal"><div><p className="kicker">More about us</p><h2>The people and the numbers</h2></div></div>
          <div className="link-cards">
            <Link href="/board"><b>Board of directors</b><span>The volunteers who lead the Foundation.</span></Link>
            <Link href="/impact"><b>Yearly impact</b><span>Students reached, dollars awarded, year by year.</span></Link>
            <Link href="/alumni"><b>Alumni</b><span>Where our students go next.</span></Link>
            <Link href="/blog"><b>Blog</b><span>Event recaps and Foundation news.</span></Link>
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
