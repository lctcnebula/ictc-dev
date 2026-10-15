"use client";

import Link from "next/link";
import { useState } from "react";
import { categories, programs, type Category } from "@/lib/content";

export default function ProgramExplorer() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const label = (c: Category) => categories.find(x => x.id === c)!.label;
  const shown = programs.filter(p => filter === "all" || p.cat === filter);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter programs">
        <button className="chip" type="button" aria-pressed={filter === "all"} onClick={() => setFilter("all")}>All<span className="n">{programs.length}</span></button>
        {categories.map(c => (
          <button key={c.id} className="chip" type="button" aria-pressed={filter === c.id} onClick={() => setFilter(c.id)}>
            {c.label}<span className="n">{programs.filter(p => p.cat === c.id).length}</span>
          </button>
        ))}
      </div>
      <div className="paths" key={filter}>
        {shown.map((p, k) => (
          <Link key={p.slug} className="path" href={`/programs/${p.slug}`} style={{ animationDelay: k * 25 + "ms" }}>
            <i aria-hidden="true">{p.icon}</i>
            <div>
              <small>{label(p.cat)}</small>
              <b>{p.name}</b>
              <span>{p.summary}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
