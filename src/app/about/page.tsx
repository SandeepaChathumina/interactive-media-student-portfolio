import SectionTitle from "@/components/SectionTitle";
import { siteData } from "@/data/site";

export default function AboutPage() {
  return (
    <section className="section-space bg-gradient-to-br from-white via-green-50 to-white">
      <div className="container-custom">
        <SectionTitle
          eyebrow="About Me"
          title={siteData.name}
          description={siteData.about}
        />

        <div className="grid gap-8 md:grid-cols-2 mt-12">
          <div className="card p-6 animate-fade-in-up">
            <h3 className="text-xl font-semibold text-green-700">Education</h3>
            <div className="mt-4 space-y-3 text-slate-600">
              <p><strong className="text-green-600">Degree:</strong> {siteData.degree}</p>
              <p><strong className="text-green-600">University:</strong> {siteData.university}</p>
              <p><strong className="text-green-600">Year:</strong> {siteData.yearOfStudy}</p>
              <p><strong className="text-green-600">Expected Graduation:</strong> {siteData.expectedGraduation}</p>
            </div>
          </div>

          <div className="card p-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <h3 className="text-xl font-semibold text-green-700">Relevant Coursework</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              {siteData.coursework.map((course) => (
                <li key={course} className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>{course}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}