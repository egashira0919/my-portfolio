import Link from "next/link";
import { Project } from "@/data/profile";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-[var(--card)] border border-white/10 rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,.35)]">
      <div className="font-bold text-lg">
        <Link href={`/projects/${project.slug}`} className="hover:underline">{project.title}</Link>
      </div>
      <p className="text-[var(--muted)] mt-1">{project.description}</p>
      <div className="flex flex-wrap gap-2 my-2">
        {(project.tech || []).map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/20">{t}</span>
        ))}
      </div>
      {project.links ? (
        <div className="flex gap-2 mt-3">
          {project.links.demo && (
            <a className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/20 bg-white/10" target="_blank" rel="noreferrer" href={project.links.demo}>デモを見る</a>
          )}
          {project.links.github && (
            <a className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/20 bg-white/10" target="_blank" rel="noreferrer" href={project.links.github}>GitHub</a>
          )}
        </div>
      ) : null}
    </div>
  );
}
