import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import DonateCheckout from "@/components/DonateCheckout";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "Donate", description: "Give to scholarships, tools, certifications and grants for Lake County Tech Campus students." };

const impact = [
  { amt: "$25", text: "covers safety glasses and gloves for a first-week shop student" },
  { amt: "$100", text: "helps pay an industry certification exam fee" },
  { amt: "$250", text: "puts a starter tool kit in a student's hands" },
  { amt: "$1,000", text: "funds a scholarship toward college or an apprenticeship" },
];

export default function DonatePage() {
  return (
    <>
      <PageHero image="/assets/img/graduates.jpg" crumbs={[{ label: "Donate" }]} title="Give a student their start">
        Any amount, once or monthly. Every dollar goes to Lake County Tech Campus students.
      </PageHero>

      <section className="block tint" style={{ paddingTop: "clamp(48px, 6vw, 72px)" }}>
        <div className="wrap apply-layout">
          <DonateCheckout />
          <div className="aside">
            <div className="aside-box">
              <h3>What your gift can do</h3>
              <ul className="impact">
                {impact.map(i => <li key={i.amt}><b>{i.amt}</b><span>{i.text}</span></li>)}
              </ul>
            </div>
            <div className="aside-box">
              <h3>Other ways to give</h3>
              <ul>
                <li><a href={site.itemDonationUrl} target="_blank" rel="noopener">Donate tools or equipment</a></li>
                <li><Link href="/get-involved">Mentor or partner with us</Link></li>
                <li>Mail a check to {site.address}</li>
              </ul>
            </div>
            <div className="aside-box tinted">
              <h3>Questions about giving?</h3>
              <p className="hint">Email <a href={`mailto:${site.email}`}>{site.email}</a> or call <a href={site.phoneHref}>{site.phone}</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
