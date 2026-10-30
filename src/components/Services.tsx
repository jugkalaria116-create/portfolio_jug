import { ArrowUpRight, BarChart3, Brain, Code2, Server, Sparkles } from "lucide-react";
import { services } from "../data/portfolio";
import { Label, Reveal, Tag } from "./ui";
const icons = { code: Code2, server: Server, sparkles: Sparkles, chart: BarChart3, brain: Brain };
export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 md:px-10">
      <Reveal><Label>02 / WHAT I DO</Label><h2 className="mb-14 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tighter md:text-8xl">Ideas into <span className="text-lime">interactive</span> reality.</h2></Reveal>
      <ul>
        {services.map((s) => {
          const Icon = icons[s.icon];
          return (
            <li key={s.n}>
              <Reveal>
                <article className="group relative grid gap-4 border-t line py-8 transition-colors hover:bg-white/[0.03] md:grid-cols-12 md:items-center md:px-4">
                  <span className="absolute left-0 top-0 h-px w-0 bg-lime transition-all duration-500 group-hover:w-full" />
                  <span className="text-4xl font-black text-mute transition-colors group-hover:text-lime md:col-span-1">{s.n}</span>
                  <h3 className="flex items-center gap-3 text-2xl font-bold uppercase transition-transform duration-300 group-hover:translate-x-2 md:col-span-4 md:text-3xl"><Icon className="size-6 text-lime" aria-hidden />{s.title}</h3>
                  <div className="md:col-span-6"><p className="text-mute">{s.desc}</p><div className="mt-3 flex flex-wrap gap-2">{s.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div></div>
                  <ArrowUpRight aria-hidden className="size-8 transition-all group-hover:rotate-45 group-hover:text-lime md:col-span-1 md:justify-self-end" />
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
      <div className="border-t line" />
    </section>
  );
}
