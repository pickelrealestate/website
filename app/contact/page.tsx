import type { Metadata } from "next";
import { BobbyPortrait, CalendlyInline, SiteFooter, SiteHeader } from "../components";
import { calendlyCleanUrl } from "../site-data";

export const metadata: Metadata = {
  title: "Contact Bobby Pickel | Pickel Sells ATL",
  description: "Book Bobby Pickel for an Atlanta buyer consult, seller strategy call, or private showing.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <SiteHeader dark />
      <section className="page-hero contact-page-hero shell">
        <div>
          <p className="eyebrow">Contact Bobby</p>
          <h1>Book the call that makes the next move simple.</h1>
          <p className="hero-lede page-lede">Buying a house, selling a house, or figuring out which should happen first? Bobby can help with both sides of the move.</p>
          <p className="direct-url">Direct booking link: <a href={calendlyCleanUrl}>{calendlyCleanUrl}</a></p>
        </div>
        <BobbyPortrait />
      </section>
      <section className="calendly-section shell" aria-label="Schedule with Bobby">
        <CalendlyInline />
      </section>
      <SiteFooter />
    </main>
  );
}
