import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SkillGroup from "@/components/SkillGroup";
import ProjectCard from "@/components/ProjectCard";
import ContactCard from "@/components/ContactCard";
import profile from "@/data/profile";

export default function Page() {
  return (
    <main className="max-w-[1100px] mx-auto px-6 pb-16">
      <header className="sticky top-0 z-10 backdrop-blur bg-black/20">
        <nav className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: "var(--accent)" }} />
            <strong>{profile.name.split(" ")[0]} Portfolio</strong>
          </div>
          <div className="flex gap-2 text-sm">
            <a href="/about" className="px-3 py-1 rounded-md hover:bg-white/10">About</a>
            <a href="/skills" className="px-3 py-1 rounded-md hover:bg-white/10">Skills</a>
            <a href="/projects" className="px-3 py-1 rounded-md hover:bg-white/10">Projects</a>
            <a href="/contact" className="px-3 py-1 rounded-md hover:bg-white/10">Contact</a>
          </div>
        </nav>
      </header>

      <Hero />

      <Section id="about" title="About">
        <div className="bg-[var(--card)] border border-white/10 rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,.35)]">
          <p className="text-[var(--muted)] whitespace-pre-line">{profile.about}</p>
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {profile.skills.map((g) => <SkillGroup key={g.group} group={g.group} items={g.items} />)}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profile.projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <ContactCard />
      </Section>

      <footer className="text-center text-sm opacity-80 mt-10">
        © {new Date().getFullYear()} {profile.name} — Built with Next.js + Tailwind CSS
      </footer>
    </main>
  );
}
