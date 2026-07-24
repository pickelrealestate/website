import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pickelsellsatl.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Atlanta Real Estate With Bobby | Pickel Sells ATL",
  description: "Buy or sell a home in Atlanta with Bobby Pickel. Book Bobby for buyer consults, seller strategy calls, and private tours of his latest featured listing.",
  alternates: { canonical: "/" },
  keywords: ["Atlanta real estate", "buy a home in Atlanta", "sell a home in Atlanta", "Atlanta realtor", "Bobby Pickel", "Atlanta homes for sale", "Atlanta listing agent"],
  authors: [{ name: "Bobby Pickel" }],
  creator: "Bobby Pickel",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Atlanta real estate, made personal | Pickel Sells ATL",
    description: "Book Bobby Pickel for buying, selling, and private home tours in Atlanta.",
    siteName: "Pickel Sells ATL",
    images: [{ url: "/bobby.png", width: 1080, height: 1080, alt: "Bobby Pickel, Atlanta real estate" }],
  },
  twitter: { card: "summary_large_image", title: "Atlanta real estate, made personal | Pickel Sells ATL", description: "Buy or sell a home in Atlanta with Bobby Pickel.", images: ["/bobby.png"] },
  icons: { icon: "/bobby.png", apple: "/bobby.png" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "RealEstateAgent", "@id": `${siteUrl}/#agent`, name: "Bobby Pickel", url: siteUrl, image: `${siteUrl}/bobby.png`, description: "Atlanta-area real estate guidance for buyers, sellers, and private showings.", areaServed: { "@type": "City", name: "Atlanta", containedInPlace: { "@type": "State", name: "Georgia" } }, knowsAbout: ["Buying a home in Atlanta", "Selling a home in Atlanta", "Residential real estate", "Private home showings"], sameAs: ["https://calendly.com/pickelrealestate-proton/realestate"] },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Pickel Sells ATL", publisher: { "@id": `${siteUrl}/#agent` }, inLanguage: "en-US" },
    { "@type": "Service", "@id": `${siteUrl}/#buyer-seller-service`, name: "Atlanta buyer and seller real estate consultations", provider: { "@id": `${siteUrl}/#agent` }, areaServed: "Atlanta, Georgia", serviceType: "Residential real estate buyer consultations, seller strategy calls, and private tours", url: `${siteUrl}/contact` },
    { "@type": "Residence", "@id": `${siteUrl}/listings#featured-home`, name: "Featured Atlanta-area 7 bedroom home", numberOfRooms: 7, floorSize: { "@type": "QuantitativeValue", value: 4300, unitCode: "FTK" }, url: `${siteUrl}/listings`, image: `${siteUrl}/images/listing/${encodeURIComponent("Come check out this beautiful home! 7 bed 4 bath and over 4,300 sq feet! Message me for a privat.jpg")}` },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Listings", item: `${siteUrl}/listings` },
      { "@type": "ListItem", position: 3, name: "Articles", item: `${siteUrl}/articles` },
      { "@type": "ListItem", position: 4, name: "Contact", item: `${siteUrl}/contact` }
    ] },
    { "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "What should I do first if I want to buy a home in Atlanta?", acceptedAnswer: { "@type": "Answer", text: "Start with a simple conversation about your timing, budget, preferred areas, and what you want daily life to feel like. Bobby can help you turn those priorities into a practical search plan." } },
      { "@type": "Question", name: "How do I know if it’s the right time to sell?", acceptedAnswer: { "@type": "Answer", text: "The right time depends on your goals, equity, finances, and next move. A private conversation can help you understand your options before you list." } },
    ] },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></body></html>;
}
