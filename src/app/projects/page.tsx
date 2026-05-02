import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/site";

export default function ProjectsPage() {
  return (
    <section className="section-space bg-gradient-to-br from-white via-green-50 to-white">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Projects"
          title="Creative work and design experiments"
          description="These are sample projects. Replace them with the client's real work later."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mt-12">
          {projects.map((project, idx) => (
            <div key={project.slug} className="animate-fade-in-up" style={{animationDelay: `${idx * 0.08}s`}}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}