import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#pillars", label: "Pillars" },
    { href: "#shop", label: "Shop" },
    { href: "#youtube", label: "YouTube" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-sm border-b border-cream-dark"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          to="/"
          className={`font-display text-sm md:text-xl font-light tracking-widest ${scrolled ? "text-charcoal " : "text-cream "}hover:text-rose-deep transition-colors`}
        >
          Delytteful <span className="italic text-rose-deep">Living</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-xs tracking-[0.25em] uppercase text-warm-grey hover:text-rose-deep transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#shop"
              className="font-body text-xs tracking-[0.2em] uppercase px-5 py-2.5 bg-charcoal text-cream hover:bg-rose-deep transition-colors duration-300 active:scale-[0.98]"
            >
              Shop Now
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px ${scrolled ? "bg-charcoal" : "bg-cream"} transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-px ${scrolled ? "bg-charcoal" : "bg-cream"} transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px ${scrolled ? "bg-charcoal" : "bg-cream"} transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-cream/85 border-t border-cream-dark transition-all duration-300 overflow-hidden z-20 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* Dark overlay */}
        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/50"
          />
        )}

        <ul className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block font-body text-xs tracking-[0.25em] uppercase text-warm-grey hover:text-charcoal transition-colors py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#shop"
              onClick={() => setMenuOpen(false)}
              className="inline-block font-body text-xs tracking-[0.2em] uppercase px-5 py-2.5 bg-charcoal text-cream mt-2 active:scale-[0.98]"
            >
              Shop Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
