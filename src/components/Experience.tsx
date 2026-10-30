import { motion } from "framer-motion";
import { journey } from "../data/portfolio";
import { Label, Reveal } from "./ui";
export default function Experience() {
  return (
    <section id="journey" className="mx-auto max-w-7xl px-5 py-24 md:px-10">
      <Reveal><Label>04 / MY JOURNEY</Label></Reveal>
      <ol className="relative ml-3 border-l line md:ml-0">
        <motion.span aria-hidden className="absolute -left-px top-0 h-full w-px origin-top bg-lime" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.6 }} />
        {journey.map((j) => (
          <li key={j.title} className="relative pb-14 pl-8 md:pl-12">
            <span aria-hidden className="absolute -left-[5px] top-3 size-2.5 rounded-full bg-lime" />
            <Reveal><h3 className="text-3xl font-bold uppercase md:text-5xl">{j.title}</h3><p className="mt-2 text-xl text-lime">{j.place}</p><p className="mt-2 max-w-2xl text-mute">{j.note}</p></Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
