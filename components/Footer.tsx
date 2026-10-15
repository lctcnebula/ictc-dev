import Link from "next/link";
import { photoCredits, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot">
          <div>
            <span className="logo-chip"><img src="/assets/logo.png" alt="Lake County Tech Campus Foundation" width={1781} height={483} loading="lazy" /></span>
            <p>{site.tagline}</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/programs">Programs</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/get-involved">Get involved</Link></li>
              <li><Link href="/donate">Donate</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Students</h4>
            <ul>
              <li><Link href="/apply">Apply for a grant</Link></li>
              <li><Link href="/apply#outside-scholarships">Outside scholarships</Link></li>
              <li><a href={site.enrollUrl} target="_blank" rel="noopener">How to enroll</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>{site.address}</li>
              <li><a href={site.phoneHref}>{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={site.campusUrl} target="_blank" rel="noopener">techcampus.org</a></li>
            </ul>
          </div>
        </div>

        <details className="credits">
          <summary>Photo credits</summary>
          <ul>
            {photoCredits.map(c => (
              <li key={c.text}>{c.text}: <a href={c.byUrl} target="_blank" rel="noopener">{c.by}</a>, {c.license}</li>
            ))}
          </ul>
        </details>

        <div className="fine">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Grayslake, Illinois</span>
        </div>
      </div>
    </footer>
  );
}
