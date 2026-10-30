// Original CSS mockups — illustrations, not screenshots of deployed products.
import type { Project } from "../data/portfolio";
const bar = (w: string, c = "bg-white/15") => <div className={`h-2 rounded-sm ${c}`} style={{ width: w }} />;
function Notes() {
  return (
    <div className="flex h-full">
      <div className="w-1/4 space-y-2 bg-black p-3">{bar("80%", "bg-lime")}{bar("60%")}{bar("70%")}{bar("50%")}</div>
      <div className="flex-1 space-y-3 p-4">
        <div className="flex gap-2">{["Maths", "DBMS", "Physics"].map((t) => <span key={t} className="rounded-full border border-white/20 px-2 text-[10px]">{t}</span>)}</div>
        <div className="grid grid-cols-3 gap-2">{[0, 1, 2, 3, 4, 5].map((i) => <div key={i} className="space-y-2 rounded bg-white/[0.07] p-2">{bar("90%")}{bar("55%")}<span className="text-[9px] text-lime">PDF</span></div>)}</div>
      </div>
    </div>
  );
}
function Predictor() {
  return (
    <div className="grid h-full grid-cols-2 gap-3 p-4">
      <div className="space-y-2 rounded bg-white/[0.07] p-3">{bar("40%", "bg-lime")}{bar("100%")}{bar("100%")}{bar("100%")}<div className="mt-3 h-5 w-16 rounded bg-lime" /></div>
      <div className="flex flex-col justify-end gap-3 rounded bg-white/[0.07] p-3">
        <div className="flex flex-1 items-end gap-1.5">{[40, 65, 50, 80, 70, 90].map((h, i) => <div key={i} className="flex-1 bg-lime/80" style={{ height: `${h}%` }} />)}</div>
        <span className="text-[10px] tracking-widest text-mute">RESULT (SAMPLE)</span>
      </div>
    </div>
  );
}
function Basket() {
  return (
    <div className="h-full bg-emerald-950/60 p-4">
      <div className="mb-3 flex justify-between"><div className="h-3 w-20 rounded bg-emerald-400" /><div className="size-4 rounded-full bg-emerald-400" /></div>
      <div className="mb-3 flex gap-2">{["Fruits", "Dairy", "Veg"].map((t) => <span key={t} className="rounded-full bg-emerald-400/20 px-2 text-[10px] text-emerald-300">{t}</span>)}</div>
      <div className="grid grid-cols-4 gap-2">{[0, 1, 2, 3].map((i) => <div key={i} className="space-y-2 rounded bg-white/10 p-2"><div className="aspect-square rounded bg-emerald-400/40" />{bar("70%")}</div>)}</div>
    </div>
  );
}
export default function Preview({ id }: { id: Project["id"] }) {
  return <div aria-hidden className="h-full w-full overflow-hidden bg-[#161616] text-fg">{id === "notestation" ? <Notes /> : id === "predictor" ? <Predictor /> : <Basket />}</div>;
}
