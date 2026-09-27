import { galleryImages, heroImage, aboutImage, locationImage } from './images';

export const business = {
  name: "AutoScrape Pro",
  tagline: "Scrap Car Buyer & Vehicle Scrapping Service",

  /** Canonical origin — no trailing slash. Every canonical, og:url and sitemap entry derives from it. */
  siteUrl: "https://autoscrapepro.com",

  // Buttons never spell the number out — they say "Call Now" / "WhatsApp" and
  // rely on the `tel:` and `wa.me` targets built in src/utils/contact.ts.
  // `phoneDisplay` is the one exception: the footer's contact details list it
  // in full, the way a business listing would.
  phoneTel: "+917668743334",
  phoneDisplay: "+91 76687 43334",
  whatsapp: "917668743334",

  address: {
    line1: "Ambala Road, Industrial Area",
    city: "Saharanpur",
    state: "Uttar Pradesh",
    pinCode: "247001",
    country: "India"
  },

  location: {
    mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.6118949826!2d77.47895116796307!3d29.96781912959823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ee501309f7a63%3A0xb304917a80b91e92!2sSaharanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    latitude: "29.9678",
    longitude: "77.5510",
    directionsUrl: "https://maps.google.com/?q=Saharanpur%2C+Uttar+Pradesh%2C+India"
  },

  serviceAreas: [
    "Punjab",
    "NCR",
    "Uttarakhand",
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
