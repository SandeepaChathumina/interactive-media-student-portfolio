import { siteData } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-green-100/30 bg-gradient-to-br from-green-50 to-emerald-50 py-8">
      <div className="container-custom flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} {siteData.name}. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm">
          <a href={siteData.linkedin} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-green-600 transition-colors duration-300 font-medium">
            LinkedIn
          </a>
          <a href={siteData.github} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-green-600 transition-colors duration-300 font-medium">
            GitHub
          </a>
          <a href={siteData.facebook} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-green-600 transition-colors duration-300 font-medium">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}