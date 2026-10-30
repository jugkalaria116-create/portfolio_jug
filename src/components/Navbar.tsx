import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav } from "../data/portfolio";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "bg-bg/80 backdrop-blur-md border-b line" : "bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#home" className="text-lg font-bold tracking-tight">JUG KALARIA<sup>®</sup></a>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="group relative text-sm uppercase tracking-widest text-mute transition-colors hover:text-fg">
              {n.label}<span className="absolute -bottom-1 left-0 h-px w-0 bg-lime transition-all group-hover:w-full" />
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-lime px-5 py-2 text-sm font-semibold tracking-wider text-bg transition-transform hover:scale-105">LET'S TALK ↗</a>
        </nav>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav aria-label="Mobile" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden md:hidden">
            <div className="flex flex-col gap-2 px-5 pb-6">
              {[...nav, { label: "LET'S TALK ↗", href: "#contact" }].map((n) => (
                <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="py-3 text-3xl font-semibold uppercase">{n.label}</a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
