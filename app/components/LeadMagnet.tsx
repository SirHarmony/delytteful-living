import { useEffect, useState } from "react";
import { Link, useFetcher } from "react-router";
import { LoaderCircle } from "lucide-react";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const fetcher = useFetcher<{
    ok: boolean;
    message: string;
    fieldErrors?: { email?: string };
  }>();
  const isSubmitting = fetcher.state !== "idle";
  const isSuccess = fetcher.data?.ok === true;
  const hasError = fetcher.data?.ok === false;

  useEffect(() => {
    if (isSuccess) {
      setEmail("");
    }
  }, [isSuccess]);

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
          blocks, and rest.
        </p>
        <fetcher.Form
          method="post"
          action="/api/convertkit/subscribe"
          className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
        >
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johndoe@email.com"
            className="flex-1 font-body text-sm px-4 py-3 bg-white/10 border border-white/15 text-parchment placeholder:text-parchment/35 focus:outline-none focus:ring-2 focus:ring-amber/50"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="font-body text-[11px] tracking-[0.2em] uppercase px-6 py-3 bg-amber text-charcoal hover:bg-amber-deep transition-colors cursor-pointer"
          >
            {isSubmitting ? (
              <LoaderCircle className="w-6 h-6 animate-spin" />
            ) : (
              "Get the PDF"
            )}
          </button>
        </fetcher.Form>
        {hasError ? (
          <p className="font-body text-[11px] text-red-300 mt-3" role="alert">
            {fetcher.data?.fieldErrors?.email ?? fetcher.data?.message}
          </p>
        ) : null}
        {isSuccess ? (
          <p
            className="font-body text-[11px] text-amber-light mt-3"
            role="status"
          >
            {fetcher.data?.message}
          </p>
        ) : null}
        <p className="font-body text-[10px] text-parchment/35 mt-4">
          No spam. <br />
          <Link to="/faq" className="text-amber/80 hover:underline">
            FAQ
          </Link>
        </p>
      </div>
    </section>
  );
}
