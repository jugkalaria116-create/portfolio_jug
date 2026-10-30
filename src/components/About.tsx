import { details } from "../data/portfolio";
import { Label, Reveal } from "./ui";
export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-40">
      <Reveal><Label>01 / ABOUT</Label></Reveal>
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-7"><h2 className="text-5xl font-black uppercase leading-[0.95] tracking-tighter md:text-8xl">More than code. <span className="text-lime">I build experiences.</span></h2></Reveal>
        <Reveal delay={0.15} className="relative hidden md:col-span-5 md:block">
          <div aria-hidden className="relative mx-auto aspect-square w-4/5">
            <div className="absolute inset-0 rounded-full border line" />
            <div className="absolute inset-8 rotate-12 border border-lime/60" />
            <div className="absolute inset-16 rounded-full bg-lime/90" />
            <span className="absolute inset-0 grid place-items-center text-7xl font-black text-bg">JK</span>
          </div>
        </Reveal>
      </div>
      <div className="mt-16 grid gap-12 md:grid-cols-12">
        <Reveal className="space-y-5 text-lg text-mute md:col-span-6 md:col-start-5">
          <p>I'm Jug Kalaria, a developer currently pursuing my Master of Computer Applications at GLS University after completing my BCA from VNSGU.</p>
          <p>During my internship at Creative Web Infotech, Surat, I gained practical exposure to React, PHP, databases, and full-stack development.</p>
          <p>I've also worked on academic and personal projects involving web development, data analytics, and machine learning.</p>
          <p>I enjoy solving problems, exploring new technologies, and turning ideas into practical digital solutions. I'm continuously improving my skills and exploring the intersection of development, design, and interactive experiences.</p>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-4 md:col-start-1 md:row-start-1">
          <dl>{details.map(([k, v]) => (
            <div key={k} className="border-t line py-4"><dt className="text-xs tracking-[0.25em] text-lime">{k}</dt><dd className="mt-1 text-lg">{v}</dd></div>
          ))}</dl>
        </Reveal>
      </div>
    </section>
  );
}
