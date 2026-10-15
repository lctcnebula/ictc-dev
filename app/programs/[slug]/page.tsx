import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DonateButton } from "@/components/Actions";
import { categories, programs, site } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return programs.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = programs.find(x => x.slug === slug);
  return p ? { title: p.name, description: p.summary } : {};
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const i = programs.findIndex(x => x.slug === slug);
  if (i < 0) notFound();
  const p = programs[i];
  const cat = categories.find(c => c.id === p.cat)!.label;
  const next = programs[(i + 1) % programs.length];

  return (
    <>
      <section className="page-hero">
        <img src={p.image} alt="" width={1024} height={683} />
        <div className="wrap">
          <p className="crumbs"><Link href="/">Home</Link> / <Link href="/programs">Programs</Link> / {cat}</p>
          <h1>{p.name}</h1>
          <p>{p.summary}</p>
        </div>
      </section>

      <section className="block">
        <div className="wrap detail">
          <div>
            <p className="kicker">What you&apos;ll learn</p>
            <h2>Inside the program</h2>
            <ul className="learn">{p.learn.map(l => <li key={l}>{l}</li>)}</ul>
            <div className="outcome"><b>Where it leads</b>{p.outcome}</div>
            <p style={{ marginTop: 32 }}>
              <Link className="text-link" href={`/programs/${next.slug}`}>Next program: {next.name} →</Link>
            </p>
          </div>
          <aside className="side-card">
            <dl style={{ display: "grid", gap: 14 }}>
              <div><dt>Pathway</dt><dd>{cat}</dd></div>
              <div><dt>Length</dt><dd>{p.length}</dd></div>
              <div><dt>Location</dt><dd>Lake County Tech Campus, Grayslake</dd></div>
            </dl>
            <Link className="btn blue" href={`/apply?program=${p.slug}`}>Apply for a grant</Link>
            <DonateButton className="btn line">Support this program</DonateButton>
            <a className="text-link" style={{ textAlign: "center" }} href={site.campusUrl + p.sourcePath} target="_blank" rel="noopener">Full details on techcampus.org →</a>
          </aside>
        </div>
      </section>
    </>
  );
}
