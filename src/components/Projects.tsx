import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { projects, type Project } from "../data/portfolio";
import { Label, Reveal, Tag } from "./ui";
import Preview from "./Previews";
const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-12"];
const heights = ["h-64 md:h-80", "h-64 md:h-80", "h-64 md:h-96"];
function ProjectCard({ p, i, onOpen }: { p: Project; i: number; onOpen: () => void }) {
  return (
    <Reveal delay={i * 0.1} className={spans[i]}>
      <article className="group flex h-full flex-col border line bg-card p-4 transition-colors hover:border-lime md:p-5">
        <div className={`overflow-hidden ${heights[i]}`}><div className="h-full transition-transform duration-700 group-hover:scale-105"><Preview id={p.id} /></div></div>
        <div className="mt-5"><p className="text-xs tracking-[0.2em] text-lime">{p.num} — {p.category}</p><h3 className="mt-2 text-3xl font-black uppercase md:text-4xl">{p.name}</h3></div>
        <p className="mt-3 max-w-xl text-mute">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        <button onClick={onOpen} aria-label={`View case study: ${p.name}`} className="mt-6 flex w-fit items-center gap-2 font-semibold tracking-wider transition-colors group-hover:text-lime">
          VIEW CASE STUDY <ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </button>
      </article>
    </Reveal>
  );
}
const S = ({ t, children }: { t: string; children: ReactNode }) => <section className="mt-8"><h4 className="mb-2 text-xs tracking-[0.25em] text-lime">{t}</h4>{children}</section>;
function Modal({ p, onClose }: { p: Project; onClose: () => void }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <motion.div className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div role="dialog" aria-modal="true" aria-label={p.name} onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto border line bg-card p-6 md:p-10" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}>
        <div className="flex justify-between gap-4">
          <div><p className="text-xs tracking-[0.2em] text-lime">{p.num} — {p.category}</p><h3 className="mt-2 text-4xl font-black uppercase md:text-5xl">{p.name}</h3></div>
          <button autoFocus onClick={onClose} aria-label="Close case study" className="h-fit rounded-full border border-white/20 p-2 hover:border-lime"><X /></button>
        </div>
        <div className="mt-6 h-52 overflow-hidden"><Preview id={p.id} /></div>
        <S t="OVERVIEW"><p className="text-mute">{p.description}</p></S>
        <S t="PROBLEM / GOAL"><p className="text-mute">{p.goal}</p></S>
        <S t="FEATURES (AS ILLUSTRATED)"><ul className="list-inside list-disc space-y-1 text-mute">{p.features.map((f) => <li key={f}>{f}</li>)}</ul></S>
        <S t="TECHNOLOGY STACK"><div className="flex flex-wrap gap-2">{p.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div></S>
        <S t="WHAT I LEARNED"><p className="text-mute">{p.learned}</p></S>
        {(p.github || p.live) && (
          <div className="mt-8 flex gap-4">
            {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-5 py-2 hover:border-lime">GITHUB ↗</a>}
            {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="rounded-full bg-lime px-5 py-2 font-semibold text-bg">LIVE ↗</a>}
          </div>
        )}
        <p className="mt-8 text-xs text-mute">Preview is an original illustration, not a screenshot.</p>
      </motion.div>
    </motion.div>
  );
}
export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-24 md:px-10">
      <Reveal><Label>03 / SELECTED WORK</Label><h2 className="mb-14 max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-tighter md:text-8xl">Things I've built. <span className="text-lime">Ideas I've explored.</span></h2></Reveal>
      <div className="grid gap-6 md:grid-cols-12">{projects.map((p, i) => <ProjectCard key={p.id} p={p} i={i} onOpen={() => setActive(p)} />)}</div>
      <AnimatePresence>{active && <Modal p={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  );
}
