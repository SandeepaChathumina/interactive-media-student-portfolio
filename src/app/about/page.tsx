import SectionTitle from "@/components/SectionTitle";
import { siteData } from "@/data/site";

export default function AboutPage() {
  return (
    <section className="section-space">
      <div className="container-custom">
        <SectionTitle
          eyebrow="About Me"
          title={siteData.name}
          description={siteData.about}
        />

        <div className="grid gap-8 md:grid-cols-2">
          <div className="card p-6">
            <h3 className="text-xl font-semibold">Education</h3>
            <div className="mt-4 space-y-3 text-slate-600">
              <p><strong>Degree:</strong> {siteData.degree}</p>
              <p><strong>University:</strong> {siteData.university}</p>
              <p><strong>Year:</strong> {siteData.yearOfStudy}</p>
              <p><strong>Expected Graduation:</strong> {siteData.expectedGraduation}</p>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold">Relevant Coursework</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              {siteData.coursework.map((course) => (
                <li key={course}>• {course}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}