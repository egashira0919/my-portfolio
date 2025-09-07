import { SkillGroup as T } from "@/data/profile";
export default function SkillGroup({ group, items }: T) {
  return (
    <div className="bg-[var(--card)] border border-white/10 rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,.35)]">
      <div className="font-bold mb-2">{group}</div>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <span key={s} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/20">{s}</span>
        ))}
      </div>
    </div>
  );
}
