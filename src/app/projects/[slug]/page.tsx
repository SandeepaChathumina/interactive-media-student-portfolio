import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return notFound();

  return (
    <section className="section-space bg-gradient-to-br from-white via-green-50 to-white">
      <div className="container-custom">
        <Link href="/projects" className="text-sm font-semibold text-green-600 hover:text-green-700 transition-colors duration-300 inline-flex items-center gap-1">
          ← Back to Projects
        </Link>

        <div className="mt-6 grid gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-green-200/50 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              {project.category}
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
              {project.title}
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-600">
              {project.fullDescription}
            </p>

            <div className="mt-8 space-y-3 text-slate-600">
              <p><strong className="text-green-600">Role:</strong> {project.role}</p>
              <p><strong className="text-green-600">Duration:</strong> {project.duration}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="tag">
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Live Preview
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  GitHub
                </a>
              )}
              {project.behanceLink && (
                <a
                  href={project.behanceLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  Behance
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}