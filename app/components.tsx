import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { calendlyUrl } from "./site-data";

export function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 52 52" role="img" aria-label="Pickel Sells ATL mark">
      <path d="M8 27 26 11l18 16" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 25v17h24V25M26 42V30" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M26 11V7M22 8h8M26 7c-4-4-8-3-10-1 3 2 6 3 10 1Zm0 0c4-4 8-3 10-1-3 2-6 3-10 1Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
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
        <Link href="/#buy">Buy</Link>
        <Link href="/#sell">Sell</Link>
        <Link href="/listings">Listings</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <a className="button button-small button-dark" href={calendlyUrl} target="_blank" rel="noreferrer">Book with Bobby <span aria-hidden="true">↗</span></a>
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
          <Link className="text-link" href="/privacy-policy">Privacy</Link>
          <Link className="text-link" href="/terms-of-service">Terms</Link>
          <Link className="text-link" href="/cookies">Cookies</Link>
          <a className="text-link" href={calendlyUrl} target="_blank" rel="noreferrer">Book <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </footer>
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
