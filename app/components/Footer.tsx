import { Link } from "react-router";
const footerLinks = {
  Shop: [
    { label: "Faith & Purpose", href: "#shop" },
    { label: "Tech & Career", href: "#shop" },
    { label: "Africa Travel", href: "#shop" },
    { label: "Bundles", href: "#shop" },
  ],
  Platforms: [
    { label: "Shop on Payhip", href: "https://payhip.com/DelytteLiving" },
    { label: "Shop on Etsy", href: "https://etsy.com/shop/DelytteLiving" },
    { label: "YouTube Channel", href: "https://youtube.com/@DelytteLiving" },
    { label: "Delytte Safaris", href: "https://delyttesafaris.com" },
  ],
  Navigate: [
    { label: "About", href: "#about" },
    { label: "Pillars", href: "#pillars" },
    { label: "Shop", href: "#shop" },
    { label: "YouTube", href: "#youtube" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      {/* Anchor verse banner */}
      <div className="border-b border-cream/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="w-12 h-px bg-rose/40 hidden sm:block flex-shrink-0" />
          <div>
            <p className="font-display italic text-cream/60 text-lg leading-relaxed">
              "Delight yourself also in the Lord, and He shall give you the{" "}
              <span className="text-rose not-italic">
                desires of your heart.
              </span>
              "
            </p>
            <p className="font-body text-[9px] tracking-[0.4em] uppercase text-rose/40 mt-2">
              Psalm 37 : 4
            </p>
          </div>
          <div className="w-12 h-px bg-rose/40 hidden sm:block flex-shrink-0" />
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <p className="font-display text-2xl font-light tracking-widest mb-3">
            Delytteful <span className="italic text-rose">Living</span>
          </p>
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-cream/30 mb-5">
            Faith · Tech · Travel
          </p>
          <p className="font-body font-light text-cream/40 text-[13px] leading-relaxed">
            A brand by{" "}
            <a
              href="https://sirharmony.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose italic cursor-pointer"
            >
              Harmony Mukolwe
            </a>
            — built for young adults who refuse to choose between faith, career,
            and adventure. "Delight yourself in the Lord." — Ps 37:4
          </p>
          <div className="mt-6 flex gap-4">
            {/* Social icons */}
            {[
              {
                label: "YouTube",
                href: "https://youtube.com/@DelytteLiving",
                icon: "▶",
              },
              {
                label: "Etsy",
                href: "https://etsy.com/shop/DelytteLiving",
                icon: "◈",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 border border-cream/10 flex items-center justify-center text-cream/30 hover:border-rose hover:text-rose transition-all duration-300 text-xs"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-cream/30 mb-5">
              {group}
            </p>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="font-body text-[13px] font-light text-cream/50 hover:text-cream transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-[10px] tracking-[0.15em] text-cream/25">
            © {new Date().getFullYear()} Delytteful Living. All rights reserved.
          </p>
          <p className="font-body text-[10px] tracking-[0.15em] text-cream/20">
            A sister brand of{" "}
            <a
              href="https://delytte-safaris.sirharmony.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose/60 transition-colors"
            >
              Delytte Safaris
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
