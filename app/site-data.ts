export const calendlyUrl =
  "https://calendly.com/pickelrealestate-proton/realestate?hide_event_type_details=1&hide_gdpr_banner=1";

export const calendlyCleanUrl = "https://calendly.com/pickelrealestate-proton/realestate";

export const bobbyPhoneDisplay = "404-860-3152";

export const bobbyPhoneHref = "tel:+14048603152";

export const bobbyTextHref = "sms:+14048603152";

export const instagramUrl = "https://www.instagram.com/pickelsellsatl/";

export const facebookUrl = "https://www.facebook.com/bobby.pickel.10";

export const listingPhotos = [
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

export const featuredListing = {
  title: "Atlanta-area 7 bedroom home with over 4,300 square feet",
  address: "Atlanta area",
  beds: "7",
  baths: "4",
  sqft: "4,300+",
  summary:
    "A spacious Atlanta-area home with generous rooms, updated living areas, a media room, and a tree-lined outdoor setting. Book Bobby for the latest showing availability and current listing details.",
};

export const articles = [
  {
    slug: "buying-a-home-in-atlanta-with-less-stress",
    title: "Buying a home in Atlanta with less stress",
    excerpt:
      "A simple buyer path: get clear on neighborhoods, timing, financing, tours, offers, inspections, and the decision points that matter.",
    minutes: "4 min read",
  },
  {
    slug: "how-to-prepare-an-atlanta-home-before-selling",
    title: "How to prepare an Atlanta home before selling",
    excerpt:
      "What to handle before photos, pricing, showings, and launch so buyers can see the value quickly and clearly.",
    minutes: "5 min read",
  },
  {
    slug: "questions-to-ask-before-your-first-real-estate-call",
    title: "Questions to ask before your first real estate call",
    excerpt:
      "The details that help Bobby give you better guidance from the first conversation, whether you are buying, selling, or deciding.",
    minutes: "3 min read",
  },
];

export function listingImage(file: string) {
  return `/images/listing/${encodeURIComponent(file)}`;
}
