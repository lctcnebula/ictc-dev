import Link from "next/link";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ProgramExplorer from "@/components/ProgramExplorer";
import UpcomingEvents from "@/components/UpcomingEvents";
import { ConfettiButton, CopyButton, DonateButton, ShareButton } from "@/components/Actions";
import { grantTypes, memberSchools, programs, site } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />

      <div className="wrap ticker" aria-label="Member high schools">
        <p>Students come from {memberSchools.length} member high schools</p>
        <div className="ticker-track">
          {[...memberSchools, ...memberSchools].map((s, k) => <span key={k} aria-hidden={k >= memberSchools.length}>{s}</span>)}
        </div>
      </div>

      <section className="intro reveal">
        <div className="wrap">
          <h2>Creating bright futures for students and families in Lake County</h2>
          <p>Students from {memberSchools.length} high schools across Lake and McHenry Counties spend part of every school day at Tech Campus, learning a trade on real equipment. The Foundation makes sure cost never decides who gets to finish.</p>
        </div>
      </section>

      <section className="block" id="what-we-do">
        <div className="wrap">
          <div className="head reveal">
            <div>
              <p className="kicker">What we do</p>
              <h2>Building futures, one trade at a time</h2>
              <p>We fill the gaps between a great program and a great start: the fees, gear and connections that help students finish strong.</p>
            </div>
          </div>
          <div className="grid three">
            <article className="card reveal">
              <div className="media"><img src="/assets/img/graduates.jpg" alt="Two smiling graduates in caps and gowns" width={1024} height={683} loading="lazy" /><span className="badge">Celebrating achievements</span></div>
              <div className="content">
                <h3>Scholarships &amp; grants</h3>
                <p>Scholarships for students heading to college, apprenticeships or the workforce, plus grants for students who need help right now.</p>
                <Link className="more" href="/apply">Apply for aid</Link>
              </div>
            </article>
            <article className="card reveal">
              <div className="media"><img src="/assets/img/welder-shop.jpg" alt="A welding student in an apron inspecting a metal piece in the shop" width={1024} height={683} loading="lazy" /><span className="badge">Removing barriers</span></div>
              <div className="content">
                <h3>Tools &amp; Equipment</h3>
                <p>Starter kits, uniforms and protective gear, so no student misses out because of what their family can afford.</p>
                <DonateButton className="more" fund="Tools & Equipment">Help equip a student</DonateButton>
              </div>
            </article>
            <article className="card reveal">
              <div className="media"><img src="/assets/img/nurse-sim.jpg" alt="A health careers student practicing patient care in a simulation lab" width={1023} height={716} loading="lazy" /><span className="badge">Empowering futures</span></div>
              <div className="content">
                <h3>Certifications</h3>
                <p>Covering exam fees for the 25 industry certifications students can earn, from nurse assisting to welding to cybersecurity.</p>
                <DonateButton className="more" fund="Certifications">Fund a certification</DonateButton>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="aid" aria-labelledby="aid-title">
        <div className="wrap" style={{ paddingBlock: "clamp(80px, 10vw, 120px)" }}>
          <div className="reveal">
            <p className="kicker">For students</p>
            <h2 id="aid-title">Need help finishing your program?</h2>
            <p className="sub">Any Tech Campus student can apply for Foundation support. One short application covers scholarships, grants for tools and fees, and emergency help. It takes about 10 minutes, and your progress saves as you go.</p>
            <div className="hero-actions">
              <Link className="btn spark" href="/apply">Start your application</Link>
              <Link className="btn ghost" href="/apply#outside-scholarships">Outside scholarships</Link>
            </div>
          </div>
          <div className="aid-list reveal">
            {grantTypes.map(g => (
              <div className="aid-item" key={g.id}>
                <i aria-hidden="true">{g.icon}</i>
                <b>{g.name}</b>
                <span>{g.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block tint" id="programs">
        <div className="wrap">
          <div className="head reveal">
            <div>
              <p className="kicker">The programs you support</p>
              <h2>{programs.length} career pathways</h2>
              <p>Every program pairs classroom learning with real equipment and industry standards. Students can also earn over 100 college credits through dual credit with the College of Lake County and McHenry County College.</p>
            </div>
            <Link className="text-link" href="/programs">See all programs →</Link>
          </div>
          <ProgramExplorer />
        </div>
      </section>

      <section className="photo-band" aria-label="Our belief">
        <img src="/assets/img/sparks.jpg" alt="" width={1024} height={696} loading="lazy" />
        <div className="wrap reveal">
          <blockquote>Every student deserves a skill they can build a life on.</blockquote>
          <cite>{site.name}</cite>
        </div>
      </section>

      <section className="block" id="ways-to-help">
        <div className="wrap">
          <div className="head reveal">
            <div>
              <p className="kicker">Ways to help</p>
              <h2>Brighter futures start with you</h2>
              <p>Give your time, your expertise or your company&apos;s support. Pick the way that fits and we&apos;ll take it from there.</p>
            </div>
            <a className="text-link" href="#contact">Contact the Foundation →</a>
          </div>
          <div className="grid four">
            <article className="card reveal">
              <div className="media"><img src="/assets/img/mentoring.jpg" alt="A mentor helping students working on laptops" width={1024} height={683} loading="lazy" /></div>
              <div className="content"><h3>Mentor a student</h3><p>Share what your career is really like through mock interviews, job shadows and classroom visits.</p><a className="more" href="#contact">Volunteer</a></div>
            </article>
            <article className="card reveal">
              <div className="media"><img src="/assets/img/auto.jpg" alt="Students working underneath a car on a lift" width={1024} height={683} loading="lazy" /></div>
              <div className="content"><h3>Partner as a business</h3><p>Offer internships, host a site visit or hire graduates who arrive certified and ready.</p><a className="more" href={site.internshipUrl} target="_blank" rel="noopener">Offer an internship</a></div>
            </article>
            <article className="card reveal">
              <div className="media"><img src="/assets/img/catering.jpg" alt="Three culinary students in chef coats serving at an event" width={1024} height={732} loading="lazy" /></div>
              <div className="content"><h3>Donate equipment</h3><p>Have tools, materials or equipment a program could use? Tell Tech Campus what you&apos;d like to give.</p><a className="more" href={site.itemDonationUrl} target="_blank" rel="noopener">Donate items</a></div>
            </article>
            <article className="card reveal">
              <div className="media"><img src="/assets/img/salon.jpg" alt="Cosmetology students laughing while giving manicures" width={1024} height={729} loading="lazy" /></div>
              <div className="content"><h3>Spread the word</h3><p>Tell a student, parent or employer about Tech Campus. Every introduction counts.</p><ShareButton className="more">Copy site link</ShareButton></div>
            </article>
          </div>
        </div>
      </section>

      <section className="block tint" id="events">
        <div className="wrap">
          <div className="head reveal">
            <div>
              <p className="kicker">Events</p>
              <h2>We are stronger together</h2>
              <p>Come see the campus, meet the students and celebrate the people who make it work.</p>
            </div>
            <a className="text-link" href={site.calendarUrl} target="_blank" rel="noopener">Full campus calendar →</a>
          </div>
          <UpcomingEvents />
        </div>
      </section>

      <section className="block" id="who-we-are">
        <div className="wrap">
          <div className="cta reveal">
            <div>
              <h2>Every gift counts, any size</h2>
              <p>Your gift puts scholarships, tools and certifications in the hands of Lake County students. Give once or monthly, and every gift gets a little confetti.</p>
            </div>
            <div className="hero-actions" style={{ marginTop: 0 }}>
              <DonateButton className="btn solid">Make your gift today</DonateButton>
              <ConfettiButton>Throw confetti 🎉</ConfettiButton>
            </div>
          </div>

          <div className="split" style={{ marginTop: "clamp(80px, 10vw, 120px)" }}>
            <div className="copy reveal">
              <p className="kicker">Who we are</p>
              <h2>A foundation for the careers Lake County runs on</h2>
              <p>The <strong>{site.name}</strong> supports students at Lake County Tech Campus in Grayslake, &quot;{site.motto}&quot;</p>
              <p>Tech Campus is the largest secondary career and technical education system in Illinois. More than 2,500 students from {memberSchools.length} member high schools in Lake and McHenry Counties train here in {programs.length} programs, three sessions a day, earning certifications and free college credit before they graduate.</p>
              <p>We&apos;d love to hear from you, whether you want to mentor, partner or simply learn more.</p>
            </div>
            <div className="stack reveal">
              <div className="big"><img src="/assets/img/welding.jpg" alt="A welding student at work in the shop" width={1024} height={683} loading="lazy" /></div>
              <dl className="contact-card" id="contact">
                <div><dt>Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a><CopyButton text={site.email} /></dd></div>
                <div><dt>Phone</dt><dd><a href={site.phoneHref}>{site.phone}</a></dd></div>
                <div><dt>Visit</dt><dd>{site.address}</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
