import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pickelsellsatl.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Atlanta Real Estate With Bobby | Pickel Sells ATL",
  description: "Buy or sell a home in Atlanta with Bobby Pickel. Get grounded guidance, explore a featured 7-bedroom home, and start a no-pressure conversation.",
  alternates: { canonical: "/" },
  keywords: ["Atlanta real estate", "buy a home in Atlanta", "sell a home in Atlanta", "Atlanta realtor", "Bobby Pickel"],
  authors: [{ name: "Bobby Pickel" }],
  creator: "Bobby Pickel",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Atlanta real estate, made personal | Pickel Sells ATL",
    description: "A steady hand for buying, selling, and finding your next move in Atlanta.",
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
    { "@type": "RealEstateAgent", "@id": `${siteUrl}/#agent`, name: "Bobby Pickel", url: siteUrl, image: `${siteUrl}/bobby.png`, description: "Atlanta-area real estate guidance for buyers and sellers.", areaServed: { "@type": "City", name: "Atlanta", containedInPlace: { "@type": "State", name: "Georgia" } }, knowsAbout: ["Buying a home in Atlanta", "Selling a home in Atlanta", "Residential real estate"] },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Pickel Sells ATL", publisher: { "@id": `${siteUrl}/#agent` }, inLanguage: "en-US" },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }] },
    { "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "What should I do first if I want to buy a home in Atlanta?", acceptedAnswer: { "@type": "Answer", text: "Start with a simple conversation about your timing, budget, preferred areas, and what you want daily life to feel like. Bobby can help you turn those priorities into a practical search plan." } },
      { "@type": "Question", name: "How do I know if it’s the right time to sell?", acceptedAnswer: { "@type": "Answer", text: "The right time depends on your goals, equity, finances, and next move. A private conversation can help you understand your options before you list." } },
    ] },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></body></html>;
}
