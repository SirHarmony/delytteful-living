import { Link } from "react-router";
import { getProductsByPillar, type Pillar } from "~/data/products";
import type { PillarSlug } from "~/data/pillars";
import { pillarDefinitions, musicEmbed } from "~/data/pillars";
import ProductCard from "~/components/ProductCard";
import ScrollReveal from "~/components/ScrollReveal";

type Props = { pillarSlug: PillarSlug };

export default function PillarPage({ pillarSlug }: Props) {
  const def = pillarDefinitions[pillarSlug];
  const pillar: Pillar = def.pillar;
  const all = getProductsByPillar(pillar);
  const main = all.slice(0, 3);
  const suggestions = all.slice(3);

  return (
    <div className="bg-parchment pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="mb-10">
            <p className="font-body text-[10px] tracking-[0.45em] uppercase text-warm-grey mb-4">
              {def.number} — {def.label}
            </p>
            <h1
              className="font-display font-light text-charcoal leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)" }}
            >
              {def.heading}
            </h1>
            <p className="font-body font-light text-warm-grey max-w-2xl text-sm md:text-base leading-relaxed">
              {def.body}
            </p>
          </div>
        </ScrollReveal>

        {pillarSlug === "music" && (
          <ScrollReveal>
          <section
            className="mb-16 p-6 md:p-8 bg-wine-pale border border-wine/20"
            aria-labelledby="listen-heading"
          >
            <h2
              id="listen-heading"
              className="font-body text-[10px] tracking-[0.35em] uppercase text-wine-deep mb-3"
            >
              {musicEmbed.title}
            </h2>
            <p className="font-body text-sm text-warm-grey max-w-2xl mb-6">
              {musicEmbed.description}
            </p>
            <a
              href={musicEmbed.spotifyOpenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.2em] uppercase px-6 py-3.5 rounded-full bg-[#1DB954] text-white hover:bg-[#1ed760] transition-colors mb-8 active:scale-[0.98]"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 shrink-0"
                aria-hidden
                fill="currentColor"
              >
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.54-1.262.24-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              Listen on Spotify
            </a>
            <p className="font-body text-[10px] text-warm-grey mb-3 max-w-2xl">
              Or preview the playlist on this page (Spotify account may be
              required for full playback).
            </p>
            <div className="rounded-xl overflow-hidden max-w-2xl border border-wine/15 bg-ink shadow-sm">
              <iframe
                title="Delytteful Playlist on Spotify"
                className="w-full border-0"
                src={musicEmbed.spotifyEmbedSrc}
                width="100%"
                height={musicEmbed.embedHeightPx}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </section>
          </ScrollReveal>
        )}

        <ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {main.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        </ScrollReveal>

        {suggestions.length > 0 && (
        <ScrollReveal>
        <section className="border-t border-parchment-dark pt-14">
          <h2 className="font-display text-2xl text-charcoal mb-2">
            Complete the set
          </h2>
          <p className="font-body text-sm text-warm-grey mb-8 max-w-xl">
            More in this pillar — add cross-pillar bundles in data when ready.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestions.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <p className="mt-10 font-body text-xs text-warm-grey">
            All prices in <span className="text-charcoal font-medium">USD</span>
            . See{" "}
            <Link to="/shop" className="text-amber-deep hover:underline">
              full shop
            </Link>
            .
          </p>
        </section>
        </ScrollReveal>
        )}
      </div>
    </div>
  );
}
