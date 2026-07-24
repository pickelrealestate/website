import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter, SiteHeader } from "../components";
import { calendlyUrl, featuredListing, listingImage, listingPhotos } from "../site-data";

export const metadata: Metadata = {
  title: "Atlanta Listings With Bobby | Pickel Sells ATL",
  description: "See Bobby Pickel's featured Atlanta-area listing and book a private tour, buyer consult, or seller strategy call.",
  alternates: { canonical: "/listings" },
};

export default function ListingsPage() {
  return (
    <main>
      <SiteHeader dark />
      <section className="page-hero listing-page-hero shell">
        <div>
          <p className="eyebrow">Most recent featured listing</p>
          <h1>{featuredListing.title}</h1>
          <p className="hero-lede page-lede">{featuredListing.summary}</p>
          <a className="button button-accent" href={calendlyUrl} target="_blank" rel="noreferrer">Book a private tour <span aria-hidden="true">↗</span></a>
        </div>
        <figure className="page-image">
          <Image src={listingImage(listingPhotos[0].file)} alt={listingPhotos[0].alt} fill priority sizes="(max-width: 860px) 100vw, 48vw" />
        </figure>
      </section>

      <section className="listing-detail shell" aria-label="Featured listing facts">
        <div><strong>{featuredListing.beds}</strong><span>Bedrooms</span></div>
        <div><strong>{featuredListing.baths}</strong><span>Bathrooms</span></div>
        <div><strong>{featuredListing.sqft}</strong><span>Square feet</span></div>
        <div><strong>1</strong><span>Call to see if it fits</span></div>
      </section>

      <section className="section shell">
        <div className="section-heading-row">
          <div><p className="eyebrow">Photo tour</p><h2>Every room gets a closer look.</h2></div>
          <p className="heading-note">No duplicate listing photos, no blank placeholders, and one direct path to Bobby’s calendar.</p>
        </div>
        <div className="gallery listing-gallery" aria-label="Featured listing photo gallery">
          {listingPhotos.map((photo, index) => (
            <figure className={`gallery-item gallery-${index + 1}`} key={photo.file}>
              <Image src={listingImage(photo.file)} alt={photo.alt} fill priority={index < 2} sizes="(max-width: 520px) 100vw, (max-width: 860px) 50vw, 58vw" />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="conversion-band">
        <div className="shell conversion-inner">
          <h2>Want to buy this home, sell yours, or compare both paths?</h2>
          <p>Bobby can help with buying and selling. Start with the call that makes the decision easier.</p>
          <a className="button button-accent" href={calendlyUrl} target="_blank" rel="noreferrer">Book with Bobby <span aria-hidden="true">↗</span></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
