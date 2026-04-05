import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";

const pillarLinks = [
  { to: "/faith", label: "Faith & Purpose" },
  { to: "/music", label: "Music & Worship" },
  { to: "/tech", label: "Tech & Career" },
  { to: "/travel", label: "Africa Travel" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const aboutHref = isHome ? "#about" : "/#about";
  const youtubeHref = isHome ? "#youtube" : "/#youtube";

  /** Off home, always use solid bar + dark link colors so nav stays readable on light page backgrounds. */
  const solidNav = !isHome || scrolled;
  const textMuted = solidNav ? "text-warm-grey" : "text-parchment/80";
  const textBrand = solidNav ? "text-charcoal" : "text-parchment";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solidNav
            ? "bg-parchment/90 backdrop-blur-md shadow-sm border-b border-parchment-dark"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <Link
            to="/"
            className={`font-display text-sm md:text-xl font-light tracking-widest ${textBrand} hover:text-amber-deep transition-colors`}
          >
            Delytteful <span className="italic text-amber-deep">Living</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            <li>
              <a
                href={aboutHref}
                className={`font-body text-xs tracking-[0.2em] uppercase ${textMuted} hover:text-amber-deep transition-colors`}
              >
                About
              </a>
            </li>
            <li className="relative group">
              <span
                className={`font-body text-xs tracking-[0.2em] uppercase ${textMuted} cursor-default`}
              >
                Pillars ▾
              </span>
              <ul className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-parchment border border-parchment-dark shadow-lg min-w-[220px] py-2 z-50">
                {pillarLinks.map((p) => (
                  <li key={p.to}>
                    <Link
                      to={p.to}
                      className="block px-4 py-2 font-body text-xs text-warm-grey hover:bg-parchment-dark hover:text-charcoal"
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link
                to="/shop"
                className={`font-body text-xs tracking-[0.2em] uppercase ${textMuted} hover:text-amber-deep transition-colors`}
              >
                Shop
              </Link>
            </li>
            <li>
              <a
                href={youtubeHref}
                className={`font-body text-xs tracking-[0.2em] uppercase ${textMuted} hover:text-amber-deep transition-colors`}
              >
                YouTube
              </a>
            </li>
            <li>
              <Link
                to="/faq"
                className={`font-body text-xs tracking-[0.2em] uppercase ${textMuted} hover:text-amber-deep transition-colors`}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="font-body text-xs tracking-[0.2em] uppercase px-5 py-2.5 bg-charcoal text-parchment hover:bg-amber-deep transition-colors duration-300 active:scale-[0.98]"
              >
                Shop Now
              </Link>
            </li>
          </ul>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            <span
              className={`block w-6 h-px ${solidNav ? "bg-charcoal" : "bg-parchment"} transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-px ${solidNav ? "bg-charcoal" : "bg-parchment"} transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-px ${solidNav ? "bg-charcoal" : "bg-parchment"} transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </nav>

        <div
          className={`lg:hidden bg-parchment/95 border-t border-parchment-dark transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col px-6 py-4 gap-3">
            <li>
              <a href={aboutHref} onClick={() => setMenuOpen(false)} className="block font-body text-xs uppercase text-warm-grey">
                About
              </a>
            </li>
            {pillarLinks.map((p) => (
              <li key={p.to}>
                <Link to={p.to} onClick={() => setMenuOpen(false)} className="block font-body text-xs text-warm-grey">
                  {p.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/shop" onClick={() => setMenuOpen(false)} className="block font-body text-xs uppercase">
                Shop
              </Link>
            </li>
            <li>
              <a href={youtubeHref} onClick={() => setMenuOpen(false)} className="block font-body text-xs">
                YouTube
              </a>
            </li>
            <li>
              <Link to="/faq" onClick={() => setMenuOpen(false)} className="block font-body text-xs">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {menuOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="fixed top-16 inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}
    </>
  );
}
