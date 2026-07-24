import type { Metadata } from "next";
import { BobbyPortrait, CalendlyInline, ContactActions, SiteFooter, SiteHeader, StickyContactBar } from "../components";
import { bobbyPhoneDisplay, calendlyCleanUrl } from "../site-data";

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
          <ContactActions compact />
          <p className="direct-url">Direct booking link: <a href={calendlyCleanUrl}>{calendlyCleanUrl}</a></p>
          <p className="direct-url">Call or text Bobby: <strong>{bobbyPhoneDisplay}</strong></p>
        </div>
        <BobbyPortrait />
      </section>
      <section className="calendly-section shell" aria-label="Schedule with Bobby">
        <CalendlyInline />
      </section>
      <SiteFooter />
      <StickyContactBar />
    </main>
  );
}
