import Link from "next/link";
import { Project } from "@/data/site";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="card overflow-hidden">
      <div className="aspect-16/10 bg-linear-to-br from-pink-100 via-purple-100 to-sky-100">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-6">
        <p className="mb-2 text-sm font-medium text-pink-500">
          {project.category}
        </p>
        <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
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
          className="mt-6 inline-block text-sm font-semibold text-slate-900 hover:text-pink-500"
        >
          View Project →
        </Link>
      </div>
    </div>
  );
}