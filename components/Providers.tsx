"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import type { CreateTypes, Options } from "canvas-confetti";
import DonateModal from "./DonateModal";

export const palette = ["#015998", "#013f6c", "#a7aab0", "#ffffff", "#5fa8e0", "#ff8a3d"];

type Fire = (o: Options) => void;
type Site = {
  openDonate: (fund?: string) => void;
  say: (msg: string) => void;
  throwConfetti: (el: HTMLElement) => void;
  // Returns a confetti function that draws on the open dialog's canvas when one is open,
  // since a modal <dialog> sits in the top layer above any page-level canvas.
  getConfetti: () => Promise<Fire | null>;
};

const SiteContext = createContext<Site | null>(null);
export const useSite = () => {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside <Providers>");
  return ctx;
};

const prefersReduced = () => typeof window !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Providers({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<{ msg: string; show: boolean; host: Element | null }>({ msg: "", show: false, host: null });
  const [donateFund, setDonateFund] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const dialogFx = useRef<{ canvas: HTMLCanvasElement; fx: CreateTypes } | null>(null);
  const pathname = usePathname();

  const say = useCallback((msg: string) => {
    // An open modal dialog covers everything else, so the toast moves inside it.
    setToast({ msg, show: true, host: document.querySelector("dialog[open]") || document.body });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(t => ({ ...t, show: false })), 2400);
  }, []);

  const getConfetti = useCallback(async (): Promise<Fire | null> => {
    try {
      const confetti = (await import("canvas-confetti")).default;
      const dlg = document.querySelector<HTMLDialogElement>("dialog[open]");
      const canvas = dlg?.querySelector<HTMLCanvasElement>(".dm-confetti");
      if (!canvas) return o => void confetti(o);
      if (dialogFx.current?.canvas !== canvas) dialogFx.current = { canvas, fx: confetti.create(canvas, { resize: true }) };
      const fx = dialogFx.current.fx;
      return o => void fx(o);
    } catch {
      return null;
    }
  }, []);

  const throwConfetti = useCallback(async (el: HTMLElement) => {
    const fx = await getConfetti();
    if (!fx) return say("🎉 Thanks for celebrating with us!");
    const r = el.getBoundingClientRect();
    const origin = { x: (r.left + r.width / 2) / innerWidth, y: (r.top + r.height / 2) / innerHeight };
    if (prefersReduced()) fx({ particleCount: 60, spread: 70, origin, colors: palette, ticks: 80 });
    else {
      fx({ particleCount: 130, spread: 85, startVelocity: 45, origin, colors: palette });
      setTimeout(() => {
        fx({ particleCount: 80, angle: 60, spread: 60, origin: { x: 0, y: .75 }, colors: palette });
        fx({ particleCount: 80, angle: 120, spread: 60, origin: { x: 1, y: .75 }, colors: palette });
      }, 220);
    }
    say("🎉 Here's to Lake County students!");
  }, [getConfetti, say]);

  // Reveal-on-scroll for any element with .reveal, re-run on each route change.
  useEffect(() => {
    document.documentElement.classList.add("js");
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll<HTMLElement>(".reveal:not(.in)").forEach(el => {
      const inGrid = el.parentElement?.classList.contains("grid");
      el.style.transitionDelay = (inGrid ? [...el.parentElement!.children].indexOf(el) * 90 : 0) + "ms";
      io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);

  const site: Site = { openDonate: fund => setDonateFund(fund ?? ""), say, throwConfetti, getConfetti };

  return (
    <SiteContext.Provider value={site}>
      {children}
      <DonateModal fund={donateFund} onClose={() => setDonateFund(null)} />
      {toast.host && createPortal(<div className={"toast" + (toast.show ? " show" : "")} role="status" aria-live="polite">{toast.msg}</div>, toast.host)}
    </SiteContext.Provider>
  );
}
