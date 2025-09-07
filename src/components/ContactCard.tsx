import profile from "@/data/profile";
export default function ContactCard() {
  return (
    <div className="bg-[var(--card)] border border-white/10 rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,.35)]">
      <p>メール: <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></p>
      <p className="mt-1">
        その他リンク:
        <>
          {profile.links.github && <> <a className="underline" target="_blank" rel="noreferrer" href={profile.links.github}>GitHub</a></>}
          {profile.links.portfolio && <> ・ <a className="underline" target="_blank" rel="noreferrer" href={profile.links.portfolio}>ポートフォリオ</a></>}
          {profile.links.resume && <> ・ <a className="underline" target="_blank" rel="noreferrer" href={profile.links.resume}>職務経歴書</a></>}
        </>
      </p>
    </div>
  );
}
