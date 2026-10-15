"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

// No server: the form opens the visitor's email app with the message filled in.
const topics = ["General question", "Donating", "Volunteering", "Business partnership", "Student aid", "Events"];

export default function ContactForm() {
  const [f, setF] = useState({ name: "", email: "", topic: topics[0], message: "" });
  const [err, setErr] = useState("");

  useEffect(() => {
    const t = new URLSearchParams(location.search).get("topic");
    if (t && topics.includes(t)) setF(p => ({ ...p, topic: t }));
  }, []);

  function send(e: React.FormEvent) {
    e.preventDefault();
    if (f.name.trim().length < 2) return setErr("Please enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) return setErr("Please enter a valid email address.");
    if (f.message.trim().length < 5) return setErr("Please write a short message.");
    setErr("");
    const body = `${f.message.trim()}\n\n${f.name.trim()}\n${f.email.trim()}`;
    location.href = `mailto:${site.email}?subject=${encodeURIComponent(`${f.topic}: ${f.name.trim()}`)}&body=${encodeURIComponent(body)}`;
  }

  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF(p => ({ ...p, [k]: e.target.value }));

  return (
    <form className="form-card" onSubmit={send} noValidate>
      <h2 className="form-title">Send us a message</h2>
      <p className="form-sub">This opens your email app with your message ready to send.</p>
      {err && <p className="form-alert" role="alert">{err}</p>}
      <div className="row2">
        <div className="field"><label htmlFor="c-name">Name</label><input id="c-name" value={f.name} onChange={set("name")} autoComplete="name" /></div>
        <div className="field"><label htmlFor="c-email">Email</label><input id="c-email" type="email" value={f.email} onChange={set("email")} autoComplete="email" /></div>
      </div>
      <div className="field">
        <label htmlFor="c-topic">Topic</label>
        <select id="c-topic" value={f.topic} onChange={set("topic")}>{topics.map(t => <option key={t}>{t}</option>)}</select>
      </div>
      <div className="field"><label htmlFor="c-msg">Message</label><textarea id="c-msg" rows={6} value={f.message} onChange={set("message")} /></div>
      <button className="btn blue" type="submit">Open in email</button>
    </form>
  );
}
