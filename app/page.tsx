import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, BrandMark, CalendarIcon, CalendlyInline, ContactActions, HouseLineArt, PhoneIcon, PointerCardMotion, SiteFooter, SiteHeader, StickyContactBar } from "./components";
import { articles, bobbyPhoneHref, calendlyUrl, featuredListing, listingImage, listingPhotos } from "./site-data";

const moments = [
  {
    title: "Real estate is like a tree",
    copy: "Trust, consistency, and patience are the roots.",
    file: "Real estate is like a tree, everything starts with strong roots. Trust, consistency, and patienc.mp4",
    poster: "/videos/posters/real-estate-roots.jpg",
  },
  {
    title: "Find the nest",
    copy: "Some people chase birdies. Bobby helps people find home.",
    file: "Some people chase birdies. I help people find the nest..mp4",
    poster: "/videos/posters/find-the-nest.jpg",
  },
  {
    title: "A great home is close",
    copy: "Inner peace is priceless. A smart move helps, too.",
    file: "Inner peace is priceless, but a great home at a great price is pretty close. If you’re buying, s.mp4",
    poster: "/videos/posters/great-home-close.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <SiteHeader />

      <section className="hero" id="top" aria-labelledby="hero-heading">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <HouseLineArt className="hero-house-art" />
        <div className="hero-copy shell" id="main-content">
          <div className="hero-persona">
            <div className="hero-avatar-wrap">
              <Image
                src="/bobby.png"
                alt="Bobby Pickel smiling in a gray suit and patterned tie"
                className="hero-avatar"
                width={1080}
                height={1080}
                priority
                sizes="(max-width: 520px) 140px, 168px"
              />
            </div>
            <div className="hero-persona-copy">
              <span>Meet Bobby Pickel</span>
              <p>Atlanta real estate guidance built on trust, patience, and real conversations.</p>
            </div>
          </div>
          <p className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Atlanta real estate, made personal</p>
          <h1 id="hero-heading">Buy or sell a home with someone who knows the way home.</h1>
          <p className="hero-lede">Bobby Pickel brings a steady hand, local perspective, and a real path to the next step, whether that means a private showing, a buyer consult, or a plan to sell well.</p>
          <div className="hero-actions">
            <a className="button button-accent" href={calendlyUrl} target="_blank" rel="noreferrer"><CalendarIcon /> Book a call <ArrowIcon /></a>
            <a className="text-link text-link-light" href={bobbyPhoneHref}><PhoneIcon /> Call/Text Bobby <ArrowIcon /></a>
          </div>
          <div className="hero-proof" aria-label="Bobby's approach">
            <span>Buy with a plan</span><span>Sell with clarity</span><span>Book in one step</span>
          </div>
        </div>
        <div className="hero-note" aria-hidden="true"><span>01</span><span>Rooted in Atlanta</span></div>
      </section>

      <section className="intro section shell reveal-block" aria-labelledby="intro-heading">
        <div className="intro-aside"><span className="line" /><span>01 / The approach</span></div>
        <div className="intro-body">
          <h2 id="intro-heading">The right move starts with the right person.</h2>
          <p className="lead-copy">Real estate can feel loud. Bobby keeps it clear: listen first, know the details, and help you make the decision that fits your life—not someone else’s timeline.</p>
          <div className="button-row">
            <a className="text-link" href="#about"><ArrowIcon /> Get to know Bobby</a>
            <Link className="text-link" href="/sell-your-home"><ArrowIcon /> Sell your home</Link>
          </div>
        </div>
      </section>

      <section className="trust-strip shell reveal-block" aria-label="How Bobby makes real estate easier">
        <div><strong>1</strong><span>call to get clear</span></div>
        <div><strong>3</strong><span>next-step paths: buy, sell, or tour</span></div>
        <div><strong>7</strong><span>bedroom featured home kept current</span></div>
        <div><strong>0</strong><span>pressure before you are ready</span></div>
      </section>

      <section className="pathways section reveal-block" id="buy" aria-labelledby="pathways-heading">
        <div className="shell">
          <div className="section-heading-row">
            <div><p className="eyebrow">Make your move</p><h2 id="pathways-heading">Where are you headed?</h2></div>
            <p className="heading-note">One clear next step is better than a dozen open tabs.</p>
          </div>
          <div className="path-grid">
            <article className="path-card path-buy">
              <HouseLineArt className="card-house-art" />
              <span className="path-number">01</span><h3>Buying in Atlanta</h3><p>Book a buyer consult and narrow the homes, neighborhoods, and timing that fit your next move.</p><span className="path-arrow" aria-hidden="true"><ArrowIcon /></span>
            </article>
            <article className="path-card path-sell" id="sell">
              <HouseLineArt className="card-house-art" />
              <span className="path-number">02</span><h3>Selling with clarity</h3><p>Book a strategy call, understand your options, and move forward with a thoughtful pricing and prep plan.</p><span className="path-arrow" aria-hidden="true"><ArrowIcon /></span>
            </article>
            <Link className="path-card path-watch" href="/listings">
              <HouseLineArt className="card-house-art" />
              <span className="path-number">03</span><h3>Love this listing?</h3><p>See the home details, then request a private tour while it is still fresh on your mind.</p><span className="path-arrow" aria-hidden="true"><ArrowIcon /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="listing section shell reveal-block" id="listing" aria-labelledby="listing-heading">
        <div className="listing-intro">
          <p className="eyebrow">Featured listing</p>
          <h2 id="listing-heading">Space to spread out.<br /><em>Room to grow into.</em></h2>
          <p>{featuredListing.summary}</p>
          <div className="button-row">
            <a className="button button-dark" href={calendlyUrl} target="_blank" rel="noreferrer"><CalendarIcon /> Book a private tour <ArrowIcon /></a>
            <a className="text-link" href={bobbyPhoneHref}><PhoneIcon /> Call/Text Bobby <ArrowIcon /></a>
          </div>
        </div>
        <div className="listing-aside">
          <div className="listing-stats" aria-label="Featured listing facts">
            <div><strong>{featuredListing.beds}</strong><span>Bedrooms</span></div><div><strong>{featuredListing.baths}</strong><span>Bathrooms</span></div><div><strong>{featuredListing.sqft}</strong><span>Square feet</span></div>
          </div>
          <div className="booking-card" aria-label="How to book this listing">
            <p className="booking-kicker">Best next step</p>
            <h3>Request this home before someone else does.</h3>
            <ol className="booking-steps">
              <li>Open Bobby’s calendar.</li>
              <li>Pick a time for buying, selling, or this private tour.</li>
              <li>Bring your questions and Bobby will help turn them into next steps.</li>
            </ol>
          </div>
        </div>
        <div className="gallery" aria-label="Featured home photo gallery">
          {listingPhotos.map((photo, index) => (
            <figure className={`gallery-item gallery-${index + 1}`} key={photo.file}>
              <Image
                src={listingImage(photo.file)}
                alt={photo.alt}
                fill
                priority={index < 3}
                sizes="(max-width: 520px) 100vw, (max-width: 860px) 50vw, 58vw"
              />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="videos section reveal-block" id="videos" aria-labelledby="videos-heading">
        <div className="shell">
          <div className="section-heading-row video-heading">
            <div><p className="eyebrow">A little perspective</p><h2 id="videos-heading">The feeling matters, too.</h2></div>
            <p className="heading-note">A few words from Bobby about the part of real estate that doesn’t show up on a listing sheet.</p>
          </div>
          <div className="video-grid">
            {moments.map((moment, index) => (
              <article className="video-card" key={moment.title}>
                <div className="video-frame">
                  <video controls preload="metadata" playsInline poster={moment.poster} aria-label={`${moment.title} video from Bobby`}>
                    <source src={`/videos/${moment.file}`} type="video/mp4" />
                  </video>
                  <span className="video-index">0{index + 1}</span>
                </div>
                <h3>{moment.title}</h3><p>{moment.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about section shell reveal-block" id="about" aria-labelledby="about-heading">
        <div className="about-panel" aria-label="Why people choose Bobby">
          <p className="eyebrow">Why people call Bobby</p>
          <ul className="about-points">
            <li>
              <strong>Clear next steps</strong>
              <span>You’ll know what happens after the first call, after the first tour, and before the first offer.</span>
            </li>
            <li>
              <strong>Local perspective</strong>
              <span>Atlanta neighborhoods, daily routines, commute tradeoffs, and property details all stay part of the conversation.</span>
            </li>
            <li>
              <strong>Real follow-through</strong>
              <span>Buying or selling a home is personal. Bobby keeps the process steady when decisions start to feel big.</span>
            </li>
          </ul>
        </div>
        <div className="about-copy"><p className="eyebrow">The person behind the process</p><h2 id="about-heading">A real estate relationship should feel like a relationship.</h2><p>Bobby believes the best work starts by being present: asking better questions, noticing what matters, and staying in the room when the details get complicated.</p><p>Whether you’re buying your first place, selling a home full of memories, or reaching out because this featured home caught your eye, you deserve guidance that feels direct, personal, and easy to trust.</p><ContactActions compact /></div>
      </section>

      <section className="articles-preview section shell reveal-block" aria-labelledby="articles-heading">
        <div className="section-heading-row">
          <div><p className="eyebrow">Atlanta real estate answers</p><h2 id="articles-heading">Read before you make the move.</h2></div>
          <Link className="text-link" href="/articles"><ArrowIcon /> All articles</Link>
        </div>
        <div className="article-grid">
          {articles.map((article) => (
            <Link className="article-card" href={`/articles#${article.slug}`} key={article.slug}>
              <span>{article.minutes}</span>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="faq section shell reveal-block" aria-labelledby="faq-heading">
        <div className="faq-intro"><p className="eyebrow">Good questions welcome</p><h2 id="faq-heading">Atlanta home buying, without the fog.</h2><p>Start with the questions people usually ask before they reach out.</p></div>
        <div className="faq-list">
          <details><summary>What should I do first if I want to buy a home in Atlanta?</summary><p>Start with a simple conversation about your timing, budget, preferred areas, and what you want daily life to feel like. Bobby can help you turn those priorities into a practical search plan before you spend weekends touring homes.</p></details>
          <details><summary>How do I know if it’s the right time to sell?</summary><p>The right time depends on your goals, equity, finances, and next move—not a headline. A private conversation can help you understand your options and what preparation would make sense before you list.</p></details>
          <details><summary>Can Bobby help if I’m only beginning to look?</summary><p>Yes. Early questions are useful questions. You can reach out before you have a lender, a neighborhood picked out, or a firm timeline. The first step is simply getting clear on what you need next.</p></details>
          <details><summary>What Atlanta areas does Bobby serve?</summary><p>Bobby’s focus is the Atlanta area. Share the neighborhoods or commute patterns you’re considering and he can help you think through the next step.</p></details>
        </div>
      </section>

      <section className="contact section reveal-block" id="contact" aria-labelledby="contact-heading">
        <div className="shell contact-grid">
          <div className="contact-copy"><p className="eyebrow eyebrow-light">Let’s make it simple</p><h2 id="contact-heading">Book a showing or strategy call with Bobby.</h2><p>Use Bobby’s calendar for a private tour, a buyer consult, or a seller strategy conversation. The goal is to help you get one clear next step on the calendar.</p><div className="contact-choices" aria-label="Booking options"><span>Private home tour</span><span>Buyer consult</span><span>Seller strategy call</span></div><div className="contact-note"><span className="contact-mark"><BrandMark /></span><span>Pickel Sells ATL<br /><small>Atlanta area real estate</small></span></div></div>
          <div className="contact-panel">
            <h3>Two clean ways to reach him.</h3>
            <p>Book a call when you want a set time. Call or text when the question is simple and you just need Bobby directly.</p>
            <ContactActions />
          </div>
          <div className="home-calendly-panel" aria-label="Book a call with Bobby on this page">
            <CalendlyInline />
          </div>
        </div>
      </section>

      <SiteFooter />
      <StickyContactBar />
      <PointerCardMotion />
    </main>
  );
}
