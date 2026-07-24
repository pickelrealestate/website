"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

const listingPhotos = [
  {
    file: "Come check out this beautiful home! 7 bed 4 bath and over 4,300 sq feet! Message me for a privat.jpg",
    alt: "White brick Atlanta home surrounded by mature trees",
    caption: "Front exterior",
  },
  {
    file: "Come check out this beautiful home! 7 bed 4 bath and over 4,300 sq feet! Message me for a privat (1).jpg",
    alt: "Updated kitchen with gray cabinetry and a large island",
    caption: "Chef-style kitchen",
  },
  {
    file: "Come check out this beautiful home! 7 bed 4 bath and over 4,300 sq feet! Message me for a privat (2).jpg",
    alt: "Home theater or media room with hardwood floors",
    caption: "Dedicated media room",
  },
  {
    file: "Come check out this beautiful home! 7 bed 4 bath and over 4,300 sq feet! Message me for a privat (3).jpg",
    alt: "Bright living room with a fireplace and a wall of windows",
    caption: "Open living room",
  },
  {
    file: "Come check out this beautiful home! 7 bed 4 bath and over 4,300 sq feet! Message me for a privat (4).jpg",
    alt: "Elegant dining room with hardwood floors and a modern chandelier",
    caption: "Formal dining space",
  },
  {
    file: "Come check out this beautiful home! 7 bed 4 bath and over 4,300 sq feet! Message me for a privat (5).jpg",
    alt: "Large carpeted bedroom with multiple doors leading to the bath area",
    caption: "Primary suite",
  },
  {
    file: "Come check out this beautiful home! 7 bed 4 bath and over 4,300 sq feet! Message me for a privat (6).jpg",
    alt: "Primary bathroom with double vanity and warm wood accent wall",
    caption: "Primary bath vanity",
  },
  {
    file: "Come check out this beautiful home! 7 bed 4 bath and over 4,300 sq feet! Message me for a privat (7).jpg",
    alt: "Bathroom with soaking tub, large shower, and wooded view",
    caption: "Spa-style bath",
  },
  {
    file: "Come check out this beautiful home! 7 bed 4 bath and over 4,300 sq feet! Message me for a privat (8).jpg",
    alt: "Quiet bedroom with hardwood floors and wooded view",
    caption: "Sunlit bedroom",
  },
  {
    file: "Come check out this beautiful home! 7 bed 4 bath and over 4,300 sq feet! Message me for a privat (9).jpg",
    alt: "Bathroom with accessible grab bar and a full tub",
    caption: "Secondary bathroom",
  },
  {
    file: "Come check out this beautiful home! 7 bed 4 bath and over 4,300 sq feet! Message me for a privat (10).jpg",
    alt: "Spacious carpeted bedroom with vaulted ceiling and tree-lined view",
    caption: "Guest bedroom",
  },
  {
    file: "Come check out this beautiful home! 7 bed 4 bath and over 4,300 sq feet! Message me for a privat (11).jpg",
    alt: "Modern bathroom with double vanity and marble-look shower surround",
    caption: "Updated full bath",
  },
  {
    file: "Come check out this beautiful home! 7 bed 4 bath and over 4,300 sq feet! Message me for a privat (12).jpg",
    alt: "Wood deck overlooking a mature Atlanta tree canopy",
    caption: "Back deck and trees",
  },
];

const moments = [
  {
    title: "Real estate is like a tree",
    copy: "Trust, consistency, and patience are the roots.",
    poster: `/images/listing/${encodeURIComponent("Come check out this beautiful home! 7 bed 4 bath and over 4,300 sq feet! Message me for a privat.jpg")}`,
  },
  {
    title: "Find the nest",
    copy: "Some people chase birdies. Bobby helps people find home.",
    poster: `/images/listing/${encodeURIComponent("Come check out this beautiful home! 7 bed 4 bath and over 4,300 sq feet! Message me for a privat (1).jpg")}`,
  },
  {
    title: "A great home is close",
    copy: "Inner peace is priceless. A smart move helps, too.",
    poster: `/images/listing/${encodeURIComponent("Come check out this beautiful home! 7 bed 4 bath and over 4,300 sq feet! Message me for a privat (12).jpg")}`,
  },
];

function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 52 52" role="img" aria-label="Pickel Sells ATL mark">
      <path d="M8 27 26 11l18 16" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 25v17h24V25M26 42V30" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 11V7M22 8h8M26 7c-4-4-8-3-10-1 3 2 6 3 10 1Zm0 0c4-4 8-3 10-1-3 2-6 3-10 1Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  const [formSent, setFormSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormSent(true);
  }

  return (
    <main>
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <header className="site-header" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Pickel Sells ATL home">
          <BrandMark />
          <span>Pickel Sells <b>ATL</b></span>
        </a>
        <nav className="desktop-nav" aria-label="Main menu">
          <a href="#buy">Buy</a>
          <a href="#sell">Sell</a>
          <a href="#listing">Featured home</a>
          <a href="#about">About Bobby</a>
        </nav>
        <a className="button button-small button-dark" href="#contact">Book with Bobby <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-heading">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
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
            <a className="button button-accent" href="#contact">Book a private showing <span aria-hidden="true">↗</span></a>
            <a className="text-link text-link-light" href="#contact">Schedule a buyer consult <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-proof" aria-label="Bobby's approach">
            <span>Atlanta area</span><span>Private showings</span><span>Buyer + seller consults</span>
          </div>
        </div>
        <div className="hero-note" aria-hidden="true"><span>01</span><span>Rooted in Atlanta</span></div>
      </section>

      <section className="intro section shell" aria-labelledby="intro-heading">
        <div className="intro-aside"><span className="line" /><span>01 / The approach</span></div>
        <div className="intro-body">
          <h2 id="intro-heading">The right move starts with the right person.</h2>
          <p className="lead-copy">Real estate can feel loud. Bobby keeps it clear: listen first, know the details, and help you make the decision that fits your life—not someone else’s timeline.</p>
          <a className="text-link" href="#about">Get to know Bobby <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="pathways section" id="buy" aria-labelledby="pathways-heading">
        <div className="shell">
          <div className="section-heading-row">
            <div><p className="eyebrow">Make your move</p><h2 id="pathways-heading">Where are you headed?</h2></div>
            <p className="heading-note">One clear next step is better than a dozen open tabs.</p>
          </div>
          <div className="path-grid">
            <a className="path-card path-buy" href="#contact">
              <span className="path-number">01</span><h3>Buying in Atlanta</h3><p>Book a buyer consult and narrow the homes, neighborhoods, and timing that fit your next move.</p><span className="path-arrow" aria-hidden="true">↗</span>
            </a>
            <a className="path-card path-sell" href="#contact" id="sell">
              <span className="path-number">02</span><h3>Selling with clarity</h3><p>Book a strategy call, understand your options, and move forward with a thoughtful pricing and prep plan.</p><span className="path-arrow" aria-hidden="true">↗</span>
            </a>
            <a className="path-card path-watch" href="#listing">
              <span className="path-number">03</span><h3>Love this listing?</h3><p>See the home details, then request a private tour while it is still fresh on your mind.</p><span className="path-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="listing section shell" id="listing" aria-labelledby="listing-heading">
        <div className="listing-intro">
          <p className="eyebrow">Featured listing</p>
          <h2 id="listing-heading">Space to spread out.<br /><em>Room to grow into.</em></h2>
          <p>Take a closer look at this Atlanta-area home: 7 bedrooms, 4 baths, and more than 4,300 square feet, plus the kind of tree-lined setting that gives a private showing real staying power.</p>
          <a className="button button-dark" href="#contact">Book a private tour <span aria-hidden="true">↗</span></a>
        </div>
        <div className="listing-aside">
          <div className="listing-stats" aria-label="Featured listing facts">
            <div><strong>7</strong><span>Bedrooms</span></div><div><strong>4</strong><span>Bathrooms</span></div><div><strong>4,300+</strong><span>Square feet</span></div>
          </div>
          <div className="booking-card" aria-label="How to book this listing">
            <p className="booking-kicker">Best next step</p>
            <h3>Request this home before someone else does.</h3>
            <ol className="booking-steps">
              <li>Choose “Viewing the featured home” in the form below.</li>
              <li>Share your timing and best contact method.</li>
              <li>Bobby can follow up to set a private tour or answer your first questions.</li>
            </ol>
          </div>
        </div>
        <div className="gallery" aria-label="Featured home photo gallery">
          {listingPhotos.map((photo, index) => (
            <figure className={`gallery-item gallery-${index + 1}`} key={photo.file}>
              <Image
                src={`/images/listing/${encodeURIComponent(photo.file)}`}
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

      <section className="videos section" id="videos" aria-labelledby="videos-heading">
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
                    <source src={`/videos/${["Real estate is like a tree, everything starts with strong roots. Trust, consistency, and patienc.mp4", "Some people chase birdies. I help people find the nest..mp4", "Inner peace is priceless, but a great home at a great price is pretty close. If you’re buying, s.mp4"][index]}`} type="video/mp4" />
                  </video>
                  <span className="video-index">0{index + 1}</span>
                </div>
                <h3>{moment.title}</h3><p>{moment.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about section shell" id="about" aria-labelledby="about-heading">
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
        <div className="about-copy"><p className="eyebrow">The person behind the process</p><h2 id="about-heading">A real estate relationship should feel like a relationship.</h2><p>Bobby believes the best work starts by being present: asking better questions, noticing what matters, and staying in the room when the details get complicated.</p><p>Whether you’re buying your first place, selling a home full of memories, or reaching out because this featured home caught your eye, you deserve guidance that feels direct, personal, and easy to trust.</p><a className="text-link" href="#contact">Meet Bobby in a conversation <span aria-hidden="true">↗</span></a></div>
      </section>

      <section className="faq section shell" aria-labelledby="faq-heading">
        <div className="faq-intro"><p className="eyebrow">Good questions welcome</p><h2 id="faq-heading">Atlanta home buying, without the fog.</h2><p>Start with the questions people usually ask before they reach out.</p></div>
        <div className="faq-list">
          <details><summary>What should I do first if I want to buy a home in Atlanta?</summary><p>Start with a simple conversation about your timing, budget, preferred areas, and what you want daily life to feel like. Bobby can help you turn those priorities into a practical search plan before you spend weekends touring homes.</p></details>
          <details><summary>How do I know if it’s the right time to sell?</summary><p>The right time depends on your goals, equity, finances, and next move—not a headline. A private conversation can help you understand your options and what preparation would make sense before you list.</p></details>
          <details><summary>Can Bobby help if I’m only beginning to look?</summary><p>Yes. Early questions are useful questions. You can reach out before you have a lender, a neighborhood picked out, or a firm timeline. The first step is simply getting clear on what you need next.</p></details>
          <details><summary>What Atlanta areas does Bobby serve?</summary><p>Bobby’s focus is the Atlanta area. Share the neighborhoods or commute patterns you’re considering and he can help you think through the next step.</p></details>
        </div>
      </section>

      <section className="contact section" id="contact" aria-labelledby="contact-heading">
        <div className="shell contact-grid">
          <div className="contact-copy"><p className="eyebrow eyebrow-light">Let’s make it simple</p><h2 id="contact-heading">Book a showing or strategy call with Bobby.</h2><p>Use this quick form to request a private tour, a buyer consult, or a seller strategy conversation. The goal is to help you get one clear next step on the calendar.</p><div className="contact-choices" aria-label="Booking options"><span>Private home tour</span><span>Buyer consult</span><span>Seller strategy call</span></div><div className="contact-note"><span className="contact-mark"><BrandMark /></span><span>Pickel Sells ATL<br /><small>Atlanta area real estate</small></span></div></div>
          <form className="contact-form" onSubmit={handleSubmit} aria-describedby="form-note">
            <div className="form-row"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required placeholder="First and last name" /></div>
            <div className="form-row"><label htmlFor="contact-method">Best way to reach you</label><input id="contact-method" name="contact-method" autoComplete="email" required placeholder="Phone or email" /></div>
            <div className="form-row form-row-split">
              <div>
                <label htmlFor="goal">What are you booking?</label>
                <select id="goal" name="goal" defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Private showing for the featured home</option>
                  <option>Buyer consultation</option>
                  <option>Seller strategy call</option>
                  <option>Exploring my options</option>
                </select>
              </div>
              <div>
                <label htmlFor="timing">Best timing</label>
                <input id="timing" name="timing" autoComplete="off" placeholder="This week, weekend, evenings..." />
              </div>
            </div>
            <div className="form-row"><label htmlFor="message">A little context <span>(optional)</span></label><textarea id="message" name="message" rows={3} placeholder="Neighborhood, timing, or what you want Bobby to help you decide" /></div>
            <button className="button button-accent button-submit" type="submit">Request a booking with Bobby <span aria-hidden="true">↗</span></button>
            <p className="form-note" id="form-note" aria-live="polite">{formSent ? "Thanks. Your request is ready for Bobby to follow up and lock in the next step." : "Share the best timing and Bobby can turn this into a real next-step conversation."}</p>
          </form>
        </div>
      </section>

      <footer className="site-footer"><div className="shell footer-inner"><a className="wordmark" href="#top"><BrandMark /><span>Pickel Sells <b>ATL</b></span></a><p>Atlanta real estate, rooted in trust.</p><a className="text-link" href="#contact">Book your next step <span aria-hidden="true">↗</span></a></div></footer>
      <a className="floating-cta" href="#contact" aria-label="Book a showing or strategy call with Bobby"><span className="floating-dot" /> Book with Bobby</a>
    </main>
  );
}
