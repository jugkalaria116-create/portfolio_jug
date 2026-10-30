import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "../data/portfolio";
import { Label, Reveal } from "./ui";
export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { window.prompt("Copy email:", profile.email); }
  };
  return (
    <section id="contact" className="relative overflow-hidden px-5 py-28 md:px-10 md:py-40">
      <div aria-hidden className="absolute -right-32 top-1/2 size-96 -translate-y-1/2 rounded-full bg-lime/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal><Label>05 / GET IN TOUCH</Label><h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter sm:text-7xl md:text-[9rem]">Have an idea? <span className="text-lime">Let's build something.</span></h2></Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-mute">I'm always interested in exploring new ideas, learning from challenging projects, and connecting with people who enjoy building meaningful digital experiences.</p>
          <p className="mt-8 break-all text-2xl font-semibold md:text-4xl">{profile.email}</p>
          <p className="mt-2 text-2xl font-semibold md:text-4xl">{profile.phone}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={`mailto:${profile.email}`} className="rounded-full bg-lime px-7 py-3 font-semibold tracking-wider text-bg transition-transform hover:scale-105">SEND ME AN EMAIL ↗</a>
            <a href={`tel:${profile.tel}`} className="rounded-full border border-white/30 px-7 py-3 font-semibold tracking-wider hover:border-lime hover:text-lime">CALL ME ↗</a>
            <button onClick={copy} className="flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 hover:border-lime">{copied ? <Check className="size-4 text-lime" /> : <Copy className="size-4" />}{copied ? "COPIED!" : "COPY EMAIL"}</button>
            <span role="status" className="sr-only">{copied ? "Email copied to clipboard" : ""}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
