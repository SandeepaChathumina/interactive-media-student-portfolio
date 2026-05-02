import SectionTitle from "@/components/SectionTitle";
import { siteData } from "@/data/site";

export default function ContactPage() {
  return (
    <section className="section-space bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Contact"
          title="Get in touch"
          description="Feel free to reach out for design collaborations, freelance work, or creative opportunities."
        />

        <div className="grid gap-6 md:grid-cols-2 mt-12">
          <div className="card p-6 animate-fade-in-up">
            <h3 className="text-xl font-semibold text-green-700">Contact Details</h3>
            <div className="mt-4 space-y-4 text-slate-600">
              <p><strong className="text-green-600">Email:</strong> {siteData.email}</p>
              <p><strong className="text-green-600">Phone:</strong> {siteData.phone}</p>
              <p><strong className="text-green-600">Location:</strong> {siteData.location}</p>
            </div>
          </div>

          <div className="card p-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <h3 className="text-xl font-semibold text-green-700">Social Profiles</h3>
            <div className="mt-4 flex flex-col gap-3">
              <a href={siteData.linkedin} target="_blank" rel="noreferrer" className="text-slate-700 hover:text-green-600 font-medium transition-colors duration-300">
                LinkedIn
              </a>
              <a href={siteData.github} target="_blank" rel="noreferrer" className="text-slate-700 hover:text-green-600 font-medium transition-colors duration-300">
                GitHub
              </a>
              <a href={siteData.facebook} target="_blank" rel="noreferrer" className="text-slate-700 hover:text-green-600 font-medium transition-colors duration-300">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}