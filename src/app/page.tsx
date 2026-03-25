import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { projects, siteData } from "@/data/site";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <section className="section-space">
        <div className="container-custom grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
              {siteData.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-slate-600">
              {siteData.title}
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              {siteData.heroDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/projects" className="btn-primary">
                View Projects
              </Link>
              <a href="/amish-cv-sample.pdf" download className="btn-secondary">
                Download CV
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-gradient-to-br from-pink-100 via-white to-sky-100 p-6 shadow-sm">
              <img
                src="/profile-placeholder.svg"
                alt={siteData.name}
                className="h-auto w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-50">
        <div className="container-custom">
          <SectionTitle
            eyebrow="About"
            title="A creative student building modern digital experiences"
            description={siteData.about}
          />

          <div className="grid gap-6 md:grid-cols-4">
            <div className="card p-6">
              <h3 className="font-semibold">Degree</h3>
              <p className="mt-2 text-sm text-slate-600">{siteData.degree}</p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold">University</h3>
              <p className="mt-2 text-sm text-slate-600">{siteData.university}</p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold">Year of Study</h3>
              <p className="mt-2 text-sm text-slate-600">{siteData.yearOfStudy}</p>
            </div>
            <div className="card p-6">
              <h3 className="font-semibold">Expected Graduation</h3>
              <p className="mt-2 text-sm text-slate-600">
                {siteData.expectedGraduation}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-custom">
          <SectionTitle
            eyebrow="Skills"
            title="Creative, technical, and collaborative strengths"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="card p-6">
              <h3 className="mb-4 text-lg font-semibold">Design Skills</h3>
              <div className="flex flex-wrap gap-2">
                {siteData.designSkills.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <h3 className="mb-4 text-lg font-semibold">Development Skills</h3>
              <div className="flex flex-wrap gap-2">
                {siteData.developmentSkills.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <h3 className="mb-4 text-lg font-semibold">Software / Tools</h3>
              <div className="flex flex-wrap gap-2">
                {siteData.softwareTools.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <h3 className="mb-4 text-lg font-semibold">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {siteData.softSkills.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-50">
        <div className="container-custom">
          <SectionTitle
            eyebrow="Featured Work"
            title="Selected projects"
            description="These are sample project cards. You can later replace them with the client’s real projects."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-10">
            <Link href="/projects" className="btn-secondary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-custom">
          <SectionTitle
            eyebrow="Certifications"
            title="Learning and continuous improvement"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {siteData.certifications.map((cert) => (
              <div key={cert.name} className="card p-6">
                <h3 className="text-lg font-semibold">{cert.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{cert.issuer}</p>
                <p className="mt-1 text-sm text-slate-500">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-50">
        <div className="container-custom">
          <SectionTitle
            eyebrow="Contact"
            title="Let’s connect"
            description="Feel free to reach out for collaborations, freelance opportunities, or creative projects."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="card p-6">
              <p className="text-sm text-slate-500">Email</p>
              <p className="mt-2 font-medium">{siteData.email}</p>

              <p className="mt-6 text-sm text-slate-500">Phone</p>
              <p className="mt-2 font-medium">{siteData.phone}</p>

              <p className="mt-6 text-sm text-slate-500">Location</p>
              <p className="mt-2 font-medium">{siteData.location}</p>
            </div>

            <div className="card p-6">
              <p className="text-sm text-slate-500">Social Links</p>
              <div className="mt-4 flex flex-col gap-3">
                <a href={siteData.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={siteData.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={siteData.facebook} target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}