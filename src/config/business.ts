import { galleryImages, heroImage, aboutImage, locationImage } from './images';

export const business = {
  name: "AutoScrape Pro",
  tagline: "Scrap Car Buyer & Vehicle Scrapping Service",

  /** Canonical origin — no trailing slash. Every canonical, og:url and sitemap entry derives from it. */
  siteUrl: "https://www.autoscrapepro.com",

  // Buttons never spell the number out — they say "Call Now" / "WhatsApp" and
  // rely on the `tel:` and `wa.me` targets built in src/utils/contact.ts.
  // `phoneDisplay` is the one exception: the footer's contact details list it
  // in full, the way a business listing would.
  phoneTel: "+917668743334",
  phoneDisplay: "+91 76687 43334",
  whatsapp: "917668743334",

  address: {
    line1: "Banshiwala Jaajra",
    city: "Dehradun",
    state: "Uttarakhand",
    pinCode: "248015",
    country: "India",
    formatted: "Banshiwala Jaajra, Dehradun, Uttarakhand"
  },

  location: {
    mapsUrl: "https://maps.google.com/maps?q=Banshiwala+Jaajra%2C+Dehradun%2C+Uttarakhand&t=&z=14&ie=UTF8&iwloc=&output=embed",
    latitude: "30.3420",
    longitude: "77.9470",
    directionsUrl: "https://maps.google.com/?q=Banshiwala+Jaajra%2C+Dehradun%2C+Uttarakhand"
  },

  serviceAreas: [
    "Dehradun",
    "Uttarakhand",
    "Punjab",
    "NCR",
    "Saharanpur"
  ],

  hours: "Mon - Sat: 9:00 AM - 7:00 PM",
  openingHours: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "19:00" },

  heroImage,
  aboutImage,
  locationImage,

  gallery: galleryImages,

  // Only real profile URLs belong here — they feed schema `sameAs`.
  social: {
    facebook: "",
    instagram: "",
    googleBusinessProfile: ""
  }
};
