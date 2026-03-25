import SectionTitle from "@/components/SectionTitle";
import { siteData } from "@/data/site";

export default function ContactPage() {
  return (
    <section className="section-space">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Contact"
          title="Get in touch"
          description="Feel free to reach out for design collaborations, freelance work, or creative opportunities."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-6">
            <h3 className="text-xl font-semibold">Contact Details</h3>
            <div className="mt-4 space-y-4 text-slate-600">
              <p><strong>Email:</strong> {siteData.email}</p>
              <p><strong>Phone:</strong> {siteData.phone}</p>
              <p><strong>Location:</strong> {siteData.location}</p>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-semibold">Social Profiles</h3>
            <div className="mt-4 flex flex-col gap-3 text-slate-600">
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
  );
}