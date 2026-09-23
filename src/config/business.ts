import { serviceImages, galleryImages, heroImage, aboutImage, locationImage } from './images';

export const business = {
  name: "Elite Scrap Vehicles",

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
    "Uttarakhand"
  ],

  hours: "Mon - Sat: 9:00 AM - 7:00 PM",

  heroImage,
  aboutImage,
  locationImage,

  services: [
    {
      title: "Scrap Cars",
      description: "We buy all types of scrap cars, regardless of their condition. Best prices paid instantly with free towing.",
      image: serviceImages.scrapCars
    },
    {
      title: "Old Vehicles",
      description: "Got an old vehicle taking up space? We offer fast, free collection and legal paperwork for older models.",
      image: serviceImages.oldVehicles
    },
    {
      title: "Damaged Vehicles",
      description: "Accident damaged, MOT failures, or non-runners. We accept vehicles with any level of mechanical or body damage.",
      image: serviceImages.damagedVehicles
    },
    {
      title: "Non-Running Vehicles",
      description: "Seized engines, missing parts, or dead transmissions. We provide specialized recovery and fair salvage valuation.",
      image: serviceImages.nonRunning
    },
    {
      title: "Vehicle Scrap & Disposal",
      description: "Certified eco-friendly depollution, hazardous fluid drainage, and responsible steel recycling following environmental norms.",
      image: serviceImages.scrapDisposal
    },
    {
      title: "Used Auto Parts",
      description: "Quality inspected salvage OEM auto parts, tested engines, transmissions, and panels available for reuse.",
      image: serviceImages.autoParts
    }
  ],
  gallery: galleryImages.map(img => ({
    ...img,
    url: img.thumbnail // backward compatibility
  })),
  social: {
    facebook: "#",
    instagram: "#"
  }
};
