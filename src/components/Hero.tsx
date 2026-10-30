import { Component, lazy, Suspense, useMemo, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { profile } from "../data/portfolio";
const Scene3D = lazy(() => import("./Scene3D"));
const Fallback = () => <div className="orb-fallback absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full md:size-80" />;
class Boundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <Fallback /> : this.props.children; }
}
export default function Hero() {
  const reduce = !!useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 120]);
  const { webgl, mobile } = useMemo(() => {
    let ok = false;
    try { ok = !!document.createElement("canvas").getContext("webgl2") || !!document.createElement("canvas").getContext("webgl"); } catch { ok = false; }
    return { webgl: ok, mobile: window.innerWidth < 768 };
  }, []);
  const item = (d: number) => ({ initial: reduce ? false : { opacity: 0, y: 50 } as const, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: d, ease: [0.16, 1, 0.3, 1] as const } });
  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-end overflow-hidden px-5 pb-16 pt-28 md:px-10">
      <motion.div style={{ y }} className="absolute inset-0 z-0" initial={reduce ? false : { opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4, delay: 0.3 }}>
        <div className="absolute inset-y-0 right-0 w-full md:w-3/5">
          {webgl ? <Boundary><Suspense fallback={<Fallback />}><Scene3D reduce={reduce} mobile={mobile} /></Suspense></Boundary> : <Fallback />}
        </div>
      </motion.div>
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div {...item(0.1)} className="mb-6 flex flex-wrap gap-x-8 gap-y-2 text-xs tracking-[0.25em] text-mute">
          <span className="flex items-center gap-2"><span className="size-2 animate-pulse rounded-full bg-lime" />{profile.status}</span>
          <span>INDIA · CREATIVE DEVELOPMENT</span>
        </motion.div>
        <h1 className="text-[clamp(4.5rem,17vw,16rem)] font-black uppercase leading-[0.85] tracking-tighter">
          <motion.span className="block" {...item(0.2)}>HI, I'M</motion.span>
          <motion.span className="block text-lime" {...item(0.35)}>JUG.</motion.span>
        </h1>
        <motion.h2 {...item(0.6)} className="mt-6 max-w-3xl text-xl font-semibold uppercase leading-tight md:text-3xl">I build digital experiences through code, creativity &amp; interaction.</motion.h2>
        <motion.p {...item(0.75)} className="mt-5 max-w-xl text-mute">I'm Jug Kalaria, a creative developer and MCA student passionate about building modern web applications, interactive interfaces, and meaningful digital experiences.</motion.p>
        <motion.div {...item(0.9)} className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="rounded-full bg-lime px-7 py-3 font-semibold tracking-wider text-bg transition-transform hover:scale-105">EXPLORE MY WORK ↘</a>
          <a href="#contact" className="rounded-full border border-white/30 px-7 py-3 font-semibold tracking-wider transition-colors hover:border-lime hover:text-lime">LET'S CONNECT ↗</a>
        </motion.div>
      </div>
      <motion.div aria-hidden className="absolute bottom-5 right-6 z-10 hidden items-center gap-3 text-xs tracking-[0.3em] text-mute md:flex" animate={reduce ? {} : { y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>SCROLL ↓</motion.div>
    </section>
  );
}
