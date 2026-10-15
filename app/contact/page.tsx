import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { CopyButton } from "@/components/Actions";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "Contact", description: `Contact the ${site.name}.` };

export default function ContactPage() {
  const map = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(site.address);
  return (
    <>
      <PageHero image="/assets/img/laptops.jpg" crumbs={[{ label: "Contact" }]} title="We'd love to hear from you">
        Whether you want to give, mentor, partner or simply learn more, reach out.
      </PageHero>
      <section className="block tint">
        <div className="wrap apply-layout">
          <ContactForm />
          <div className="aside">
            <div className="aside-box">
              <dl className="contact-list">
                <div><dt>Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a><CopyButton text={site.email} /></dd></div>
                <div><dt>Phone</dt><dd><a href={site.phoneHref}>{site.phone}</a></dd></div>
                <div><dt>Visit</dt><dd>{site.address}<br /><a href={map} target="_blank" rel="noopener">Open in Maps →</a></dd></div>
                <div><dt>Campus website</dt><dd><a href={site.campusUrl} target="_blank" rel="noopener">techcampus.org</a></dd></div>
              </dl>
            </div>
            <div className="aside-box tinted">
              <h3>Students</h3>
              <p className="hint">Looking for financial help? Use the <Link href="/apply">grant application</Link> instead.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
