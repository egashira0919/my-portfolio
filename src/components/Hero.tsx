import profile from "@/data/profile";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[1.2fr_.8fr] gap-4 items-center py-7">
      <div className="bg-[var(--card)] border border-white/10 rounded-2xl p-7 shadow-[0_10px_30px_rgba(0,0,0,.35)]">
        <h1 className="text-4xl font-bold mb-2">{profile.name}</h1>
        <div className="flex flex-wrap gap-2 my-2">
          {profile.roles.map((r) => (
            <span key={r} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/20">{r}</span>
          ))}
        </div>
        <p className="text-[var(--muted)]">{profile.summary}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          <a className="inline-flex items-center gap-2 px-3 py-2 rounded-xl font-bold text-black"
             style={{ background: "linear-gradient(135deg,var(--accent),var(--accent-2))" }}
             href="#projects">作品を見る</a>
          {profile.links.github && (
            <a className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/20 bg-white/10"
               target="_blank" rel="noreferrer" href={profile.links.github}>GitHub</a>
          )}
          {profile.links.resume && (
            <a className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/20 bg-white/10"
               target="_blank" rel="noreferrer" href={profile.links.resume}>職務経歴書</a>
          )}
        </div>
      </div>
      <div className="bg-[var(--card)] border border-white/10 rounded-2xl min-h-[260px] grid place-items-center shadow-[0_10px_30px_rgba(0,0,0,.35)] overflow-hidden">
        {/* <img src="/me.jpg" className="w-full h-full object-cover" alt="" /> */}
        <div className="text-white/50">画像を入れる</div>
      </div>
    </section>
  );
}
