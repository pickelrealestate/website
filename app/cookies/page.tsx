import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = { title: "Cookie Policy | Pickel Sells ATL", alternates: { canonical: "/cookies" } };

export default function CookiesPage() {
  return (
    <main>
      <SiteHeader dark />
      <section className="legal-page shell">
        <p className="eyebrow">Cookie Policy</p>
        <h1>Cookie Policy</h1>
        <p>Pickel Sells ATL may use basic cookies or similar technologies to help the site function, understand performance, and support embedded scheduling.</p>
        <h2>Calendly</h2>
        <p>The booking widget is provided by Calendly. Calendly may set cookies or similar technologies when you interact with the calendar.</p>
        <h2>Your choices</h2>
        <p>You can manage cookies in your browser settings. Some embedded scheduling features may not work as expected if cookies are disabled.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
