import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = { title: "Terms of Service | Pickel Sells ATL", alternates: { canonical: "/terms-of-service" } };

export default function TermsPage() {
  return (
    <main>
      <SiteHeader dark />
      <section className="legal-page shell">
        <p className="eyebrow">Terms of Service</p>
        <h1>Terms of Service</h1>
        <p>This website provides general real estate information and a way to schedule conversations with Bobby Pickel. It is not legal, tax, lending, or financial advice.</p>
        <h2>Website information</h2>
        <p>Listing details, market information, availability, and property status can change. Confirm current facts directly with Bobby before making decisions.</p>
        <h2>Scheduling</h2>
        <p>Booking a call or tour does not create an agency relationship by itself. Any formal representation terms should be reviewed separately in writing.</p>
        <h2>Acceptable use</h2>
        <p>Do not misuse the website, submit false information, or interfere with the site’s operation.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
