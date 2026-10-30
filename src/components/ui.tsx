import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}
export const Label = ({ children }: { children: ReactNode }) => (
  <p className="mb-6 text-sm font-medium tracking-[0.25em] text-lime">{children}</p>
);
export const Tag = ({ children }: { children: ReactNode }) => (
  <span className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-wider text-mute">{children}</span>
);
