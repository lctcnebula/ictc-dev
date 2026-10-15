"use client";

import { Fragment, useEffect, useState } from "react";
import { grantTypes, programs } from "@/lib/content";
import type { Application, ApplicationStatus } from "@/lib/application";

const STATUSES: ApplicationStatus[] = ["new", "reviewing", "approved", "declined"];
const KEY = "lctc-admin-key";

export default function AdminDashboard() {
  const [key, setKey] = useState("");
  const [input, setInput] = useState("");
  const [apps, setApps] = useState<Application[] | null>(null);
  const [error, setError] = useState("");
  const [open, setOpen] = useState<string | null>(null);
  const [filter, setFilter] = useState<ApplicationStatus | "all">("all");

  async function load(k: string) {
    setError("");
    const res = await fetch("/api/applications", { headers: { "x-admin-key": k } });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) { setError(data.error || "Couldn't load applications."); setApps(null); return; }
    setApps(data); setKey(k);
    try { sessionStorage.setItem(KEY, k); } catch {}
  }

  useEffect(() => {
    let saved = "";
    try { saved = sessionStorage.getItem(KEY) || ""; } catch {}
    if (saved) load(saved);
  }, []);

  async function updateStatus(id: string, status: ApplicationStatus) {
    const res = await fetch("/api/applications", { method: "PATCH", headers: { "Content-Type": "application/json", "x-admin-key": key }, body: JSON.stringify({ id, status }) });
    if (res.ok) setApps(list => list!.map(a => (a.id === id ? { ...a, status } : a)));
    else setError("Couldn't update status.");
  }

  function exportCsv() {
    if (!apps?.length) return;
    const cols = Object.keys(apps[0]) as (keyof Application)[];
    const esc = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const csv = [cols.join(","), ...apps.map(a => cols.map(c => esc(a[c])).join(","))].join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    Object.assign(document.createElement("a"), { href: url, download: `grant-applications-${new Date().toISOString().slice(0, 10)}.csv` }).click();
    URL.revokeObjectURL(url);
  }

  if (!apps) {
    return (
      <form className="form-card" style={{ maxWidth: 440 }} onSubmit={e => { e.preventDefault(); load(input); }}>
        <h2 className="form-title">Reviewer sign-in</h2>
        <p className="form-sub">Enter the access key set in <code>ADMIN_KEY</code>.</p>
        {error && <p className="form-alert" role="alert">{error}</p>}
        <div className="field">
          <label htmlFor="key">Access key</label>
          <input id="key" type="password" value={input} onChange={e => setInput(e.target.value)} autoComplete="current-password" />
        </div>
        <button className="btn blue" type="submit" style={{ width: "100%" }}>View applications</button>
      </form>
    );
  }

  const shown = apps.filter(a => filter === "all" || a.status === filter);
  const programName = (slug: string) => programs.find(p => p.slug === slug)?.name ?? slug;
  const grantName = (id: string) => grantTypes.find(g => g.id === id)?.name ?? id;

  return (
    <>
      <div className="admin-bar">
        <div className="filters" style={{ margin: 0 }}>
          {(["all", ...STATUSES] as const).map(s => (
            <button key={s} className="chip" type="button" aria-pressed={filter === s} onClick={() => setFilter(s)} style={{ textTransform: "capitalize" }}>
              {s}<span className="n">{s === "all" ? apps.length : apps.filter(a => a.status === s).length}</span>
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn line" type="button" onClick={() => load(key)}>Refresh</button>
          <button className="btn blue" type="button" onClick={exportCsv} disabled={!apps.length}>Export CSV</button>
        </div>
      </div>
      {error && <p className="form-alert" role="alert">{error}</p>}
      {shown.length === 0 ? <p className="empty">No applications here yet.</p> : (
        <div className="table-scroll">
          <table className="admin-table">
            <thead><tr><th>Submitted</th><th>Student</th><th>Program</th><th>Request</th><th>Status</th></tr></thead>
            <tbody>
              {shown.map(a => (
                <Fragment key={a.id}>
                  <tr className="row" onClick={() => setOpen(open === a.id ? null : a.id)}>
                    <td>{new Date(a.submittedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}<br /><small className="hint">{a.id}</small></td>
                    <td><b>{a.firstName} {a.lastName}</b><br /><small className="hint">{a.school} · {a.grade}</small></td>
                    <td>{programName(a.program)}<br /><small className="hint">{a.programYear}</small></td>
                    <td>{grantName(a.grantType)}{a.amount && <><br /><small className="hint">${a.amount.replace(/^\$/, "")}</small></>}</td>
                    <td onClick={e => e.stopPropagation()}>
                      <span className={"status " + a.status}>{a.status}</span><br />
                      <select aria-label={`Status for ${a.firstName} ${a.lastName}`} value={a.status} onChange={e => updateStatus(a.id, e.target.value as ApplicationStatus)} style={{ marginTop: 6 }}>
                        {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </td>
                  </tr>
                  {open === a.id && (
                    <tr><td colSpan={5} style={{ background: "#fafcfe" }}>
                      <div className="review" style={{ margin: 0, background: "#fff" }}>
                        <dl>
                          {([
                            ["Email", a.email], ["Phone", a.phone || "—"], ["Pays for", a.purpose], ["Plans", a.plans],
                            ["Free/reduced lunch", a.freeLunch || "—"], ["Instructor", `${a.instructorName} · ${a.instructorEmail}`],
                            ["Parent/guardian", a.guardianName ? `${a.guardianName} · ${a.guardianEmail}` : "—"], ["Essay", a.essay],
                          ] as const).map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
                        </dl>
                      </div>
                    </td></tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
