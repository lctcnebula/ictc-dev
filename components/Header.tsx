"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSite } from "./Providers";

const links = [
  { href: "/#what-we-do", label: "What we do", section: "what-we-do" },
  { href: "/programs", label: "Programs", section: "programs" },
  { href: "/#events", label: "Events", section: "events" },
  { href: "/#who-we-are", label: "Who we are", section: "who-we-are" },
  { href: "/apply", label: "Apply for aid", className: "apply-link" },
];

export default function Header() {
  const pathname = usePathname();
  const { openDonate } = useSite();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 10);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    if (pathname !== "/") return setActive("");
    const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }), { rootMargin: "-45% 0px -50% 0px" });
    links.forEach(l => { const el = l.section && document.getElementById(l.section); if (el) spy.observe(el); });
    return () => spy.disconnect();
  }, [pathname]);

  const isOn = (l: (typeof links)[number]) =>
    pathname === "/" ? l.section === active : !l.href.startsWith("/#") && pathname.startsWith(l.href);

  return (
    <header className={"site" + (scrolled ? " scrolled" : "")}>
      <div className="wrap bar">
        <Link className="brand" href="/" aria-label="LCTC Foundation home">
          <img src="/assets/logo.png" alt="Lake County Tech Campus Foundation" width={1781} height={483} />
        </Link>
        <nav className={"main" + (open ? " open" : "")} id="nav" aria-label="Main">
          <ul>
            {links.map(l => (
              <li key={l.href}>
                <Link href={l.href} className={[l.className, isOn(l) && "on"].filter(Boolean).join(" ")} onClick={() => setOpen(false)}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="pill-btn" type="button" onClick={() => openDonate()}>
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.5 3 4.5 6.8 4.5c2.1 0 3.6 1.1 4.2 2.4h2c.6-1.3 2.1-2.4 4.2-2.4 3.8 0 5.9 4 4.4 7.3C19.5 16.4 12 21 12 21Z" /></svg>
          Donate
        </button>
        <button className="menu-toggle" type="button" aria-controls="nav" aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(o => !o)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
