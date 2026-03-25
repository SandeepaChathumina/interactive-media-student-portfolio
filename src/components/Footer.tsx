import { siteData } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="container-custom flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {siteData.name}. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm text-slate-600">
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
    </footer>
  );
}