import { useState } from "react";
import { Link } from "react-router";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");

  return (
    <section
      id="lead"
      className="bg-ink text-parchment py-20 px-6 border-y border-amber/20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body text-[10px] tracking-[0.45em] uppercase text-amber/80 mb-4">
          Free resource
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-light mb-4">
          Download the{" "}
          <span className="italic text-amber-light">Intentional Week</span>{" "}
          checklist
        </h2>
        <p className="font-body text-sm text-parchment/60 mb-8 max-w-xl mx-auto">
          A one-page PDF to plan your week across faith, music practice, career
          blocks, and rest — dummy copy until your real file is linked.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="flex-1 font-body text-sm px-4 py-3 bg-white/10 border border-white/15 text-parchment placeholder:text-parchment/35 focus:outline-none focus:ring-2 focus:ring-amber/50"
          />
          <button
            type="submit"
            className="font-body text-[11px] tracking-[0.2em] uppercase px-6 py-3 bg-amber text-charcoal hover:bg-amber-deep transition-colors"
          >
            Get the PDF
          </button>
        </form>
        <p className="font-body text-[10px] text-parchment/35 mt-4">
          No spam — replace this form with your email provider embed when ready.{" "}
          <Link to="/faq" className="text-amber/80 hover:underline">
            FAQ
          </Link>
        </p>
      </div>
    </section>
  );
}
