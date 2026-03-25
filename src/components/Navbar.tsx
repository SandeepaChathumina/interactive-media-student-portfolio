import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-custom flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Amish<span className="gradient-text">.</span>
        </Link>

        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a href="/amish-cv-sample.pdf" download className="btn-primary">
          Download CV
        </a>
      </div>
    </header>
  );
}