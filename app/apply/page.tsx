import type { Metadata } from "next";
import Link from "next/link";
import ApplyForm from "@/components/ApplyForm";
import { outsideScholarships, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Apply for a grant",
  description: "Lake County Tech Campus students can apply for Foundation scholarships, tools and equipment grants, certification fee grants and emergency help.",
};

export default function ApplyPage() {
  return (
    <>
      <section className="page-hero">
        <img src="/assets/img/graduates.jpg" alt="" width={1024} height={683} />
        <div className="wrap">
          <p className="crumbs"><Link href="/">Home</Link> / Student aid</p>
          <h1>Apply for Foundation support</h1>
          <p>Scholarships, grants for tools and fees, and emergency help for Lake County Tech Campus students. One application covers all of it.</p>
        </div>
      </section>

      <section className="block tint" style={{ paddingTop: "clamp(48px, 6vw, 72px)" }}>
        <div className="wrap apply-layout">
          <ApplyForm />
          <div className="aside">
            <div className="aside-box">
              <h3>Who can apply</h3>
              <ul>
                <li>Any student currently enrolled in a Tech Campus program</li>
                <li>Juniors, seniors and adult learners</li>
                <li>All 22 member high schools</li>
              </ul>
            </div>
            <div className="aside-box">
              <h3>How it works</h3>
              <ol>
                <li>Fill in the four short steps (about 10 minutes).</li>
                <li>Press &quot;Email my application&quot; to send it to the Foundation, or download or print a copy.</li>
                <li>The Foundation reviews your application and may contact your instructor.</li>
                <li>We email you with a decision.</li>
              </ol>
            </div>
            <div className="aside-box tinted">
              <h3>Questions?</h3>
              <p className="hint">Email <a href={`mailto:${site.email}`}>{site.email}</a> or call <a href={site.phoneHref}>{site.phone}</a>. Your Student Services counselor can also help.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block" id="outside-scholarships">
        <div className="wrap">
          <div className="head">
            <div>
              <p className="kicker">Beyond the Foundation</p>
              <h2>Outside scholarships</h2>
              <p>Tech Campus also lists these scholarships from other organizations. Deadlines change every year, so check each provider for current dates.</p>
            </div>
            <a className="text-link" href={site.scholarshipsUrl} target="_blank" rel="noopener">Tech Campus scholarship page →</a>
          </div>
          <div className="sch-list">
            {outsideScholarships.map(s => (
              <div className="sch" key={s.name}>
                <div><b>{s.name}</b><small>{s.who}</small></div>
                <span className="award">{s.award}</span>
                <a className="btn line" href={s.url} target="_blank" rel="noopener">{s.how} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
