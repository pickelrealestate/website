import type { Metadata } from "next";
import { BobbyPortrait, ContactActions, SiteFooter, SiteHeader, StickyContactBar } from "../components";

export const metadata: Metadata = {
  title: "Sell Your Atlanta Home With Bobby | Pickel Sells ATL",
  description: "Book Bobby Pickel for a seller strategy call before you list your Atlanta-area home.",
  alternates: { canonical: "/sell-your-home" },
};

export default function SellYourHomePage() {
  return (
    <main>
      <SiteHeader dark />
      <section className="page-hero contact-page-hero shell">
        <div>
          <p className="eyebrow">Sell your home</p>
          <h1>Know the plan before the sign goes up.</h1>
          <p className="hero-lede page-lede">Bobby helps Atlanta-area sellers think through timing, prep, pricing, showings, and the next move so listing does not feel like guessing.</p>
          <ContactActions compact />
        </div>
        <BobbyPortrait />
      </section>
      <section className="seller-steps section shell" aria-labelledby="seller-steps-heading">
        <div className="section-heading-row">
          <div><p className="eyebrow">Seller strategy</p><h2 id="seller-steps-heading">A cleaner way to start.</h2></div>
          <p className="heading-note">One call gives you the order of operations before you spend money or lose weekends.</p>
        </div>
        <div className="article-grid">
          <article className="article-card"><span>First</span><h3>Understand the house</h3><p>Condition, updates, neighborhood demand, buyer expectations, and what should be handled before photos.</p></article>
          <article className="article-card"><span>Then</span><h3>Price with context</h3><p>Compare recent activity and your goals so the launch strategy matches the market and the move.</p></article>
          <article className="article-card"><span>Next</span><h3>Move with fewer surprises</h3><p>Showings, offers, inspections, timelines, and closing steps stay organized around your next chapter.</p></article>
        </div>
      </section>
      <SiteFooter />
      <StickyContactBar />
    </main>
  );
}
