import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/site";

export default function ProjectsPage() {
  return (
    <section className="section-space">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Projects"
          title="Creative work and design experiments"
          description="These are sample projects. Replace them with the client's real work later."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}