import Link from "next/link";
import { Project } from "@/data/site";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="card overflow-hidden group">
      <div className="aspect-16/10 bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6">
        <p className="mb-2 text-sm font-semibold text-green-600">
          {project.category}
        </p>
        <h3 className="text-xl font-semibold text-slate-900 group-hover:text-green-600 transition-colors duration-300">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tools.slice(0, 3).map((tool) => (
            <span key={tool} className="tag">
              {tool}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-6 inline-block text-sm font-semibold text-slate-900 hover:text-green-600 transition-all duration-300 hover:translate-x-1"
        >
          View Project →
        </Link>
      </div>
    </div>
  );
}