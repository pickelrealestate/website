import type { Metadata } from "next";
import { ContactActions, SiteFooter, SiteHeader, StickyContactBar } from "../components";
import { articles, bobbyPhoneHref, calendlyUrl } from "../site-data";

export const metadata: Metadata = {
  title: "Atlanta Real Estate Articles | Pickel Sells ATL",
  description: "Plain-English guidance for Atlanta home buyers and sellers from Bobby Pickel.",
  alternates: { canonical: "/articles" },
};

const articleBodies: Record<string, string[]> = {
  "buying-a-home-in-atlanta-with-less-stress": [
    "The best search starts before the first showing. Bobby helps buyers get clear on budget, commute patterns, neighborhood feel, must-haves, tradeoffs, and timing so the tour list gets sharper instead of longer.",
    "A clean buyer process usually moves through lender readiness, neighborhood priorities, smart touring, offer strategy, inspection decisions, appraisal, closing details, and the final walkthrough. You do not have to solve all of that alone.",
  ],
  "how-to-prepare-an-atlanta-home-before-selling": [
    "Selling well starts with knowing what buyers will notice first. Bobby can help you think through prep, pricing, photography, showing windows, and which improvements are worth attention before the home goes live.",
    "The goal is not to make a house look generic. The goal is to make the value obvious, reduce friction, and give serious buyers confidence when they decide whether to write.",
  ],
  "questions-to-ask-before-your-first-real-estate-call": [
    "Bring your rough timing, your must-change reason, what you are worried about, and what would make the move feel worth it. Those answers help Bobby give guidance that fits your actual life.",
    "If you are not sure whether you want to buy or sell first, say that. The first conversation can be a decision call, not a commitment to act immediately.",
  ],
};

export default function ArticlesPage() {
  return (
    <main>
      <SiteHeader dark />
      <section className="page-hero shell">
        <div>
          <p className="eyebrow">Atlanta real estate articles</p>
          <h1>Clear answers before the big decision.</h1>
          <p className="hero-lede page-lede">Readable guidance for buyers, sellers, and anyone deciding what the next move should be in Atlanta real estate.</p>
          <ContactActions compact />
        </div>
      </section>

      <section className="article-list shell" aria-label="Articles">
        {articles.map((article) => (
          <article className="article-entry" id={article.slug} key={article.slug}>
            <span>{article.minutes}</span>
            <h2>{article.title}</h2>
            <p className="lead-copy">{article.excerpt}</p>
            {articleBodies[article.slug].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="button-row">
              <a className="text-link" href={calendlyUrl} target="_blank" rel="noreferrer">Book a call about this <span aria-hidden="true">↗</span></a>
              <a className="text-link" href={bobbyPhoneHref}>Call/Text Bobby <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        ))}
      </section>
      <SiteFooter />
      <StickyContactBar />
    </main>
  );
}
