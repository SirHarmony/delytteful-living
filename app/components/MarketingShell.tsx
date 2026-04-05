import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import ScrollReveal from "~/components/ScrollReveal";

export default function MarketingShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </>
  );
}
