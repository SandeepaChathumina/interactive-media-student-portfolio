import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-green-100/30 bg-white/80 backdrop-blur-md">
      <div className="container-custom flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight transition-all duration-300 hover:scale-105">
          Amish<span className="gradient-text">.</span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-slate-700 transition-all duration-300 hover:text-green-600 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 group-hover:w-full transition-all duration-300"></span>
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