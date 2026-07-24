import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import type { ReactNode } from "react";
import { bobbyPhoneDisplay, bobbyPhoneHref, calendlyUrl, facebookUrl, instagramUrl, realscoutUrl } from "./site-data";

export function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 52 52" role="img" aria-label="Pickel Sells ATL mark">
      <path d="M8 27 26 11l18 16" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 25v17h24V25M26 42V30" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 11V7M22 8h8M26 7c-4-4-8-3-10-1 3 2 6 3 10 1Zm0 0c4-4 8-3 10-1-3 2-6 3-10 1Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HouseLineArt({ className = "" }: { className?: string }) {
  return (
    <svg className={`house-line-art ${className}`} viewBox="0 0 420 260" aria-hidden="true">
      <path className="house-stroke house-roof" d="M34 156 210 40l176 116" />
      <path className="house-stroke" d="M70 154v76h280v-76" />
      <path className="house-stroke" d="M139 230v-78h62v78" />
      <path className="house-stroke" d="M239 164h62v44h-62z" />
      <path className="house-stroke house-ground" d="M25 232h370" />
      <path className="house-stroke house-orbit" d="M314 76c31 14 52 39 52 68 0 54-70 98-156 98S54 198 54 144c0-27 17-51 45-69" />
      <path className="house-stroke house-spark" d="M210 18v28M196 32h28" />
      <path className="house-stroke house-spark house-spark-two" d="M352 112v22M341 123h22" />
    </svg>
  );
}

function IconBase({ children, label }: { children: ReactNode; label: string }) {
  return (
    <svg className="ui-icon" viewBox="0 0 24 24" aria-label={label} aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

export function CalendarIcon() {
  return (
    <IconBase label="Calendar">
      <path d="M7 3v3M17 3v3M4.5 9.5h15M6.5 5h11A2.5 2.5 0 0 1 20 7.5v10A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-10A2.5 2.5 0 0 1 6.5 5Z" />
      <path d="M8 13h3M8 16h6" />
    </IconBase>
  );
}

export function PhoneIcon() {
  return (
    <IconBase label="Phone">
      <path d="M7.2 4.4 9.4 4c.7-.1 1.4.3 1.6 1l.8 2.2c.2.6 0 1.2-.5 1.6l-1.1.9c.9 1.8 2.3 3.2 4.1 4.1l.9-1.1c.4-.5 1-.7 1.6-.5l2.2.8c.7.2 1.1.9 1 1.6l-.4 2.2c-.1.7-.7 1.2-1.5 1.2C10.3 18 6 13.7 6 5.9c0-.8.5-1.4 1.2-1.5Z" />
    </IconBase>
  );
}

export function ArrowIcon() {
  return (
    <IconBase label="Open">
      <path d="M7 17 17 7M9 7h8v8" />
    </IconBase>
  );
}

export function InstagramIcon() {
  return (
    <IconBase label="Instagram">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M16.8 7.2h.01" />
    </IconBase>
  );
}

export function FacebookIcon() {
  return (
    <IconBase label="Facebook">
      <path d="M14 8h2V4h-2.7C10.9 4 10 5.5 10 7.6V10H8v4h2v6h4v-6h2.4l.6-4h-3V8.7c0-.5.2-.7.7-.7Z" />
    </IconBase>
  );
}

export function HomeIcon() {
  return (
    <IconBase label="Home">
      <path d="m4 11 8-7 8 7" />
      <path d="M6.5 10.5V20h11v-9.5M10 20v-5h4v5" />
    </IconBase>
  );
}

export function SiteHeader({ dark = false }: { dark?: boolean }) {
  return (
    <header className={`site-header ${dark ? "site-header-dark" : ""}`} aria-label="Primary navigation">
      <Link className="wordmark" href="/" aria-label="Pickel Sells ATL home">
        <BrandMark />
        <span>Pickel Sells <b>ATL</b></span>
      </Link>
      <nav className="desktop-nav" aria-label="Main menu">
        <Link href="/">Home Page</Link>
        <Link href="/listings">Houses For Sale</Link>
        <Link href="/sell-your-home">Sell Your Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/articles">Articles</Link>
      </nav>
      <span className="header-spacer" aria-hidden="true" />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <Link className="wordmark" href="/"><BrandMark /><span>Pickel Sells <b>ATL</b></span></Link>
        <p>Atlanta real estate, rooted in trust.</p>
        <div className="footer-links">
          <a className="text-link social-link" href={instagramUrl} target="_blank" rel="noreferrer"><InstagramIcon /> Instagram</a>
          <a className="text-link social-link" href={facebookUrl} target="_blank" rel="noreferrer"><FacebookIcon /> Facebook</a>
          <a className="text-link social-link" href={realscoutUrl} target="_blank" rel="noreferrer"><ArrowIcon /> RealScout</a>
          <a className="text-link" href={bobbyPhoneHref}><PhoneIcon /> Call/Text {bobbyPhoneDisplay}</a>
          <Link className="text-link" href="/privacy-policy"><HomeIcon /> Privacy</Link>
          <Link className="text-link" href="/terms-of-service"><HomeIcon /> Terms</Link>
          <Link className="text-link" href="/cookies"><HomeIcon /> Cookies</Link>
        </div>
      </div>
    </footer>
  );
}

export function ContactActions({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`contact-actions ${compact ? "contact-actions-compact" : ""}`} aria-label="Contact Bobby">
      <a className="button button-accent" href={calendlyUrl} target="_blank" rel="noreferrer"><CalendarIcon /> Book a call <ArrowIcon /></a>
      <a className="button button-dark" href={bobbyPhoneHref}><PhoneIcon /> Call/Text Bobby <span>{bobbyPhoneDisplay}</span></a>
    </div>
  );
}

export function StickyContactBar() {
  return (
    <div className="sticky-contact-bar" aria-label="Quick contact actions">
      <a className="sticky-action sticky-book" href={calendlyUrl} target="_blank" rel="noreferrer"><CalendarIcon /> Book a Call</a>
      <a className="sticky-action sticky-call" href={bobbyPhoneHref}><PhoneIcon /> Call/Text Bobby</a>
    </div>
  );
}

export function PointerCardMotion() {
  return (
    <Script id="pointer-card-motion" strategy="afterInteractive">
      {`
        document.querySelectorAll('.path-card, .article-card, .gallery-item, .video-card').forEach((card) => {
          card.addEventListener('pointermove', (event) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mx', (((event.clientX - rect.left) / rect.width) * 100).toFixed(2) + '%');
            card.style.setProperty('--my', (((event.clientY - rect.top) / rect.height) * 100).toFixed(2) + '%');
          });
        });
      `}
    </Script>
  );
}

export function BobbyPortrait({ className = "page-portrait" }: { className?: string }) {
  return (
    <Image
      src="/bobby.png"
      alt="Bobby Pickel smiling in a gray suit and patterned tie"
      className={className}
      width={1080}
      height={1080}
      priority
      sizes="(max-width: 700px) 180px, 260px"
    />
  );
}

export function CalendlyInline() {
  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url={calendlyUrl}
        style={{ minWidth: 320, height: 700 }}
        aria-label="Calendly booking calendar for Bobby Pickel"
      />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </>
  );
}
