import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components";

export const metadata: Metadata = { title: "Privacy Policy | Pickel Sells ATL", alternates: { canonical: "/privacy-policy" } };

export default function PrivacyPolicyPage() {
  return (
    <main>
      <SiteHeader dark />
      <section className="legal-page shell">
        <p className="eyebrow">Privacy Policy</p>
        <h1>Privacy Policy</h1>
        <p>Pickel Sells ATL uses information you choose to share to respond to real estate questions, schedule calls, and provide buyer or seller guidance.</p>
        <h2>Information collected</h2>
        <p>This may include your phone number, preferred timing, real estate goals, and any details you share through a call, text, or booking tool.</p>
        <h2>How information is used</h2>
        <p>Information is used to follow up, schedule appointments, prepare for consultations, and improve the usefulness of this website.</p>
        <h2>Third-party tools</h2>
        <p>The site links to and embeds Calendly for scheduling. Calendly may process booking information according to its own privacy practices.</p>
        <h2>Contact</h2>
        <p>Use the contact page to reach Bobby about this policy or information you shared.</p>
      </section>
      <SiteFooter />
    </main>
  );
}
