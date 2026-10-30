import { marqueeWords } from "../data/portfolio";
export default function Marquee() {
  const row = [...marqueeWords, ...marqueeWords].map((w, i) => (
    <span key={i} className={`mx-6 text-5xl font-black uppercase tracking-tight md:text-8xl ${i % 2 ? "outline-text" : ""}`}>
      {w} <span className="text-lime">✳</span>
    </span>
  ));
  return (
    <section aria-label="Specialties" className="marquee overflow-hidden border-y line py-6">
      <div className="marquee-track" aria-hidden="true"><div className="flex">{row}</div><div className="flex">{row}</div></div>
      <p className="sr-only">{marqueeWords.join(", ")}</p>
    </section>
  );
}
