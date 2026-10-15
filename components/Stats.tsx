"use client";

import { useEffect, useRef } from "react";
import { stats } from "@/lib/content";

const fmt = (n: number) => n.toLocaleString("en-US");

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      const el = e.target as HTMLElement, end = +el.dataset.count!, suf = el.dataset.suffix || "";
      const t0 = performance.now(), dur = 1400;
      const tick = (t: number) => {
        const p = Math.min(1, (t - t0) / dur);
        el.textContent = fmt(Math.round(end * (1 - Math.pow(1 - p, 3)))) + suf;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }), { threshold: .6 });
    ref.current?.querySelectorAll("[data-count]").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="stat-strip">
      <div className="wrap">
        <div className="stats" ref={ref}>
          {stats.map(s => (
            <div className="stat" key={s.label}>
              <b data-count={s.value} data-suffix={s.suffix}>{fmt(s.value)}{s.suffix}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
