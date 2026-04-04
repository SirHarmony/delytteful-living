import { Link } from "react-router";

const footerLinks = {
  Pillars: [
    { label: "Faith & Purpose", to: "/faith" },
    { label: "Music & Worship", to: "/music" },
    { label: "Tech & Career", to: "/tech" },
    { label: "Africa Travel", to: "/travel" },
  ],
  Shop: [
    { label: "All products", to: "/shop" },
    { label: "FAQ", to: "/faq" },
  ],
  Platforms: [
    {
      label: "Etsy",
      href: "https://www.etsy.com/shop/DelytteLiving",
    },
    {
      label: "Amazon (KDP)",
      href: "https://www.amazon.com/s?k=delytteful+living+journal",
    },
    { label: "YouTube", href: "https://youtube.com/@DelytteLiving" },
    {
      label: "Delytte Safaris",
      href: "https://delytte-safaris.sirharmony.dev/",
    },
  ],
  Navigate: [
    { label: "About", href: "/#about" },
    { label: "YouTube", href: "/#youtube" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-parchment">
      <div className="border-b border-amber/30 bg-amber py-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="w-12 h-px bg-charcoal hidden sm:block flex-shrink-0" />
          <div>
            <p className="uppercase font-body text-amber-deep text-xs mb-4">
              Anchor Verse · The Heart of Delytteful Living
            </p>
            <p className="font-display italic text-parchment/90 text-base md:text-lg leading-relaxed">
              &quot;Delight yourself also in the Lord, and He shall give you the
              desires of your heart.&quot;
            </p>
            <p className="font-body text-[9px] tracking-[0.4em] uppercase text-charcoal mt-2">
              Psalm 37 : 4
            </p>
          </div>
          <div className="w-12 h-px bg-charcoal hidden sm:block flex-shrink-0" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <p className="font-display text-2xl font-light tracking-widest mb-3">
            Delytteful <span className="italic text-amber">Living</span>
          </p>
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-parchment/30 mb-5">
            Faith · Music · Tech · Travel
          </p>
          <p className="font-body font-light text-parchment/40 text-[13px] leading-relaxed">
            A brand by{" "}
            <a
              href="https://sirharmony.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber italic cursor-pointer"
            >
              Harmony Mukolwe
            </a>
            — digital journals, planners, and e-books for young adults who
            refuse to choose between faith, creativity, career, and adventure.
          </p>
          <div className="mt-6 flex gap-4">
            {[
              { label: "YouTube", href: "https://youtube.com/@DelytteLiving", icon: "▶" },
              { label: "Etsy", href: "https://www.etsy.com/shop/DelytteLiving", icon: "◈" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-8 h-8 border border-parchment/10 flex items-center justify-center text-parchment/30 hover:border-amber hover:text-amber transition-all duration-300 text-xs"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-parchment/30 mb-5">
              {group}
            </p>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  {"to" in link ? (
                    <Link
                      to={link.to}
                      className="font-body text-[13px] font-light text-parchment/50 hover:text-parchment transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="font-body text-[13px] font-light text-parchment/50 hover:text-parchment transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-parchment/10 px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-[10px] tracking-[0.15em] text-parchment/25">
            © {new Date().getFullYear()} Delytteful Living. All rights reserved.
          </p>
          <p className="font-body text-[10px] tracking-[0.15em] text-parchment/20">
            A sister brand of{" "}
            <a
              href="https://delytte-safaris.sirharmony.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber/60 transition-colors"
            >
              Delytte Safaris
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
