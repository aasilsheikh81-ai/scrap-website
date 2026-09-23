export interface HandledCategory {
  id: string;
  title: string;
  description: string;
  iconName: 'Car' | 'AlertTriangle' | 'Wrench' | 'Clock' | 'Recycle' | 'Truck';
}

export interface RegionGalleryItem {
  id: string;
  src: string;
  thumbnail: string;
  alt: string;
  title: string;
  category: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}

export interface VehicleTypeItem {
  title: string;
  description: string;
  tag: string;
}

export interface ServiceAreaConfig {
  id: string;
  slug: string;
  name: string;
  title: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  layoutType: 'punjab' | 'ncr' | 'uttarakhand';
  heroImage: {
    src: string;
    thumbnail: string;
    alt: string;
  };
  featuredImage: {
    src: string;
    thumbnail: string;
    alt: string;
    title: string;
  };
  intro: {
    badge: string;
    heading: string;
    paragraphs: string[];
  };
  highlightsHeading?: string;
  highlightsSubheading?: string;
  handledItems?: HandledCategory[];
  howItWorks?: {
    heading: string;
    subheading: string;
    steps: HowItWorksStep[];
  };
  vehicleTypesSection?: {
    heading: string;
    subheading: string;
    types: VehicleTypeItem[];
  };
  coverageInfo?: {
    heading: string;
    regionName: string;
    description: string;
    highlight: string;
  };
  gallery: RegionGalleryItem[];
  faq?: {
    heading: string;
    subheading: string;
    questions: FAQItem[];
  };
  whyContactUs?: {
    heading: string;
    reasons: {
      title: string;
      description: string;
    }[];
  };
}

export const serviceAreasData: Record<string, ServiceAreaConfig> = {
  punjab: {
    id: "punjab",
    slug: "punjab",
    name: "Punjab",
    title: "Scrap Car Services in Punjab",
    heroSubtitle: "Reliable scrap car and old vehicle services across our service area in Punjab.",
    metaTitle: "Scrap Car Services in Punjab | Elite Scrap Vehicles",
    metaDescription: "Scrap car and old vehicle services available across Punjab. Contact Elite Scrap Vehicles for transparent vehicle scrap solutions.",
    layoutType: "punjab",
    heroImage: {
      src: "/images/junkyard-field-rows.jpg",
      thumbnail: "/images/thumbs/junkyard-field-rows.webp",
      alt: "Open outdoor scrap car yard field with rows of end-of-life salvage vehicles in Punjab"
    },
    featuredImage: {
      src: "/images/user-reference-scrap-yard.jpg",
      thumbnail: "/images/thumbs/user-reference-scrap-yard.webp",
      alt: "Heavily rusted end-of-life sedan parked in outdoor salvage yard",
      title: "Scrap Vehicle Processing in Punjab"
    },
    intro: {
      badge: "Punjab Operations",
      heading: "Scrap Vehicle Services in Punjab",
      paragraphs: [
        "We handle old, damaged, unwanted, and end-of-life vehicles across our service area in Punjab. Whether your vehicle is non-functional, damaged from an accident, or has reached the end of its useful lifespan, we provide a smooth, transparent collection process.",
        "Our team manages each step with clear communication, upfront arrangements, and convenient vehicle handover without unnecessary complications."
      ]
    },
    highlightsHeading: "Scrap Vehicle Categories",
    highlightsSubheading: "We handle a wide range of end-of-life automobiles across Punjab.",
    handledItems: [
      {
        id: "pb-scrap-cars",
        title: "Scrap Cars",
        description: "Old, accidental, and end-of-life cars ready for dismantling and metal recovery.",
        iconName: "Car"
      },
      {
        id: "pb-old-vehicles",
        title: "Old Vehicles",
        description: "Older vehicles no longer in active use, freeing up valuable parking and garage space.",
        iconName: "Clock"
      },
      {
        id: "pb-damaged-vehicles",
        title: "Damaged Vehicles",
        description: "Vehicles with significant body damage, collision impact, or mechanical breakdown.",
        iconName: "AlertTriangle"
      },
      {
        id: "pb-vehicle-disposal",
        title: "Vehicle Disposal",
        description: "Systematic dismantling with safe fluid drainage and industrial steel recycling.",
        iconName: "Recycle"
      }
    ],
    coverageInfo: {
      heading: "Regional Coverage Information",
      regionName: "Punjab",
      description: "Our scrap car service network coordinates vehicle collection across selected areas in Punjab, ensuring vehicle owners receive prompt assistance.",
      highlight: "Direct vehicle pickup scheduling throughout Punjab"
    },
    gallery: [
      {
        id: "pb-gal-1",
        src: "/images/user-reference-scrap-yard.jpg",
        thumbnail: "/images/thumbs/user-reference-scrap-yard.webp",
        alt: "Rusted scrap vehicle with missing body components in salvage yard",
        title: "End-of-Life Scrap Sedan",
        category: "Rusted Cars"
      },
      {
        id: "pb-gal-2",
        src: "/images/junkyard-field-rows.jpg",
        thumbnail: "/images/thumbs/junkyard-field-rows.webp",
        alt: "Rows of end-of-life cars parked in expansive salvage yard field",
        title: "Open Yard Salvage Lot",
        category: "Yard Overview"
      },
      {
        id: "pb-gal-3",
        src: "/images/damaged-car-windshield.jpg",
        thumbnail: "/images/thumbs/damaged-car-windshield.webp",
        alt: "Damaged car with shattered windshield and dented hood in scrap yard",
        title: "Accident Damaged Vehicle",
        category: "Damaged Cars"
      },
      {
        id: "pb-gal-4",
        src: "/images/scrap-car-parts.jpg",
        thumbnail: "/images/thumbs/scrap-car-parts.webp",
        alt: "Dismantled vehicle panels and automotive salvage parts",
        title: "Dismantled Auto Parts",
        category: "Salvage Parts"
      },
      {
        id: "pb-gal-5",
        src: "/images/old-cars-powerlines.jpg",
        thumbnail: "/images/thumbs/old-cars-powerlines.webp",
        alt: "Weathered cars parked in industrial scrap lot",
        title: "Industrial Scrap Yard Fleet",
        category: "Salvage Fleet"
      },
      {
        id: "pb-gal-6",
        src: "/images/rusted-engine-part.jpg",
        thumbnail: "/images/thumbs/rusted-engine-part.webp",
        alt: "Rusted engine flywheel and mechanical iron components",
        title: "Engine Component Salvage",
        category: "Engine Scrap"
      }
    ],
    faq: {
      heading: "Frequently Asked Questions",
      subheading: "Common inquiries regarding scrap car services in Punjab.",
      questions: [
        {
          question: "What types of scrap vehicles are handled in Punjab?",
          answer: "We handle all types of end-of-life passenger vehicles, including old hatchbacks, sedans, SUVs, non-operational cars, and vehicles with collision or mechanical damage."
        },
        {
          question: "How can I contact the business for a vehicle in Punjab?",
          answer: "Tap the Call Now button to reach our team directly, or send pictures and details of your car through WhatsApp for a prompt discussion."
        },
        {
          question: "Which locations in Punjab are currently covered?",
          answer: "We coordinate vehicle collections across selected locations and connecting transport corridors in Punjab based on scheduled requests."
        }
      ]
    },
    whyContactUs: {
      heading: "Why Contact Us for Scrap Cars in Punjab",
      reasons: [
        {
          title: "Straightforward Communication",
          description: "Clear and upfront discussions regarding your vehicle's condition and pickup arrangements."
        },
        {
          title: "Safe Towing Coordination",
          description: "Organized removal for non-running and accident-damaged cars directly from your location."
        },
        {
          title: "Transparent Handover",
          description: "Clear and dependable guidance throughout the vehicle handover process."
        }
      ]
    }
  },

  ncr: {
    id: "ncr",
    slug: "ncr",
    name: "NCR",
    title: "Scrap Car Services in NCR",
    heroSubtitle: "Reliable scrap car and old vehicle services across our service area in NCR.",
    metaTitle: "Scrap Car Services in NCR | Elite Scrap Vehicles",
    metaDescription: "Scrap car and old vehicle services available across the National Capital Region (NCR). Contact Elite Scrap Vehicles for more information.",
    layoutType: "ncr",
    heroImage: {
      src: "/images/scrap-cars-stacked.jpg",
      thumbnail: "/images/thumbs/scrap-cars-stacked.webp",
      alt: "Stacked scrap cars in an industrial scrap yard across NCR"
    },
    featuredImage: {
      src: "/images/city-junkyard-crushed.jpg",
      thumbnail: "/images/thumbs/city-junkyard-crushed.webp",
      alt: "Crushed car metal heaps in an industrial processing facility in NCR",
      title: "Vehicle Depollution & Steel Recovery in NCR"
    },
    intro: {
      badge: "NCR Service Coverage",
      heading: "Scrap Vehicle Support Across NCR",
      paragraphs: [
        "We provide comprehensive scrap car and old vehicle support across the National Capital Region (NCR). With strict vehicle lifespan guidelines and parking constraints across urban zones, disposing of end-of-life cars properly is essential.",
        "Our team helps car owners dispose of immobilized, non-compliant, damaged, and old vehicles with organized recovery and professional coordination."
      ]
    },
    howItWorks: {
      heading: "How It Works",
      subheading: "A simple, informational overview of our scrap vehicle coordination process.",
      steps: [
        {
          step: 1,
          title: "Contact Us",
          description: "Tap Call Now for a direct call, or message us on WhatsApp to start the inquiry."
        },
        {
          step: 2,
          title: "Share Vehicle Details",
          description: "Provide vehicle model, current condition, and location for initial evaluation."
        },
        {
          step: 3,
          title: "Discuss Service",
          description: "Review pickup logistics, timing, and necessary documentation requirements."
        },
        {
          step: 4,
          title: "Next Steps",
          description: "Coordinate scheduled towing collection and complete the vehicle handover smoothly."
        }
      ]
    },
    highlightsHeading: "Vehicles Handled in NCR",
    highlightsSubheading: "Specialized recovery and handling for end-of-life automobiles.",
    handledItems: [
      {
        id: "ncr-damaged",
        title: "Damaged Vehicles",
        description: "Accident-impacted, collision-damaged, and structural salvage vehicles.",
        iconName: "AlertTriangle"
      },
      {
        id: "ncr-non-running",
        title: "Non-Running Cars",
        description: "Immobilized cars with seized engines, electrical faults, or dead transmissions.",
        iconName: "Wrench"
      },
      {
        id: "ncr-old-vehicles",
        title: "Old Vehicles",
        description: "Vehicles completing their operational age lifespan in NCR requiring proper disposal.",
        iconName: "Clock"
      },
      {
        id: "ncr-scrap-handling",
        title: "Scrap Vehicle Handling",
        description: "Organized removal and industrial depollution for end-of-life cars.",
        iconName: "Truck"
      }
    ],
    gallery: [
      {
        id: "ncr-gal-1",
        src: "/images/scrap-cars-stacked.jpg",
        thumbnail: "/images/thumbs/scrap-cars-stacked.webp",
        alt: "Stacked scrap cars in an industrial scrap yard",
        title: "Stacked End-of-Life Vehicles",
        category: "Processing Yard"
      },
      {
        id: "ncr-gal-2",
        src: "/images/city-junkyard-crushed.jpg",
        thumbnail: "/images/thumbs/city-junkyard-crushed.webp",
        alt: "Crushed scrap cars in industrial recycling yard",
        title: "Crushed Car Bodies",
        category: "Metal Recovery"
      },
      {
        id: "ncr-gal-3",
        src: "/images/old-van-scrap-metal.jpg",
        thumbnail: "/images/thumbs/old-van-scrap-metal.webp",
        alt: "Old weathered van next to scrap metal pile",
        title: "Old Weathered Van",
        category: "Abandoned Cars"
      },
      {
        id: "ncr-gal-4",
        src: "/images/truck-scrap-tires-parts.jpg",
        thumbnail: "/images/thumbs/truck-scrap-tires-parts.webp",
        alt: "Truck loaded with tires and scrap components",
        title: "Parts & Materials Yard",
        category: "Yard Operations"
      },
      {
        id: "ncr-gal-5",
        src: "/images/damaged-car-windshield.jpg",
        thumbnail: "/images/thumbs/damaged-car-windshield.webp",
        alt: "Accident-damaged scrap vehicle with broken windshield",
        title: "Damaged Vehicle Shell",
        category: "Damaged Vehicles"
      },
      {
        id: "ncr-gal-6",
        src: "/images/scrap-car-parts.jpg",
        thumbnail: "/images/thumbs/scrap-car-parts.webp",
        alt: "Dismantled vehicle panels and exhaust systems",
        title: "Auto Body Scrap",
        category: "Salvage Parts"
      }
    ],
    whyContactUs: {
      heading: "Why Contact Us for Scrap Cars in NCR",
      reasons: [
        {
          title: "Prompt Scheduling",
          description: "Coordinated vehicle removal to clear parking spaces quickly and efficiently."
        },
        {
          title: "All Conditions Accepted",
          description: "We handle running, non-running, rusted, dented, and accident-damaged vehicles alike."
        },
        {
          title: "Clear Communication",
          description: "Upfront details on vehicle handling with no hidden complications."
        }
      ]
    }
  },

  uttarakhand: {
    id: "uttarakhand",
    slug: "uttarakhand",
    name: "Uttarakhand",
    title: "Scrap Car Services in Uttarakhand",
    heroSubtitle: "Reliable scrap car and old vehicle services across our service area in Uttarakhand.",
    metaTitle: "Scrap Car Services in Uttarakhand | Elite Scrap Vehicles",
    metaDescription: "Scrap car and old vehicle services available across Uttarakhand. Contact Elite Scrap Vehicles for more information.",
    layoutType: "uttarakhand",
    heroImage: {
      src: "/images/old-cars-powerlines.jpg",
      thumbnail: "/images/thumbs/old-cars-powerlines.webp",
      alt: "Scrap and weathered vehicles parked in outdoor salvage lot in Uttarakhand"
    },
    featuredImage: {
      src: "/images/old-van-scrap-metal.jpg",
      thumbnail: "/images/thumbs/old-van-scrap-metal.webp",
      alt: "Old weathered van with peeling paint in scrap vehicle yard",
      title: "Salvage & Metal Recycling in Uttarakhand"
    },
    intro: {
      badge: "Uttarakhand Operations",
      heading: "Old & Scrap Vehicle Services",
      paragraphs: [
        "We offer dedicated scrap car and old vehicle services across our service area in Uttarakhand. Whether you have older vehicles, non-operational cars, or accident-impacted vehicles, we provide smooth and dependable assistance.",
        "Our team coordinates directly with vehicle owners to arrange convenient vehicle pickup, clear communication, and straightforward handover."
      ]
    },
    vehicleTypesSection: {
      heading: "Vehicle Types We Process",
      subheading: "Comprehensive handling for various automotive conditions and models.",
      types: [
        {
          title: "Old Cars",
          description: "Vehicles that have completed their useful running life and require responsible disposal.",
          tag: "Aging Fleets"
        },
        {
          title: "Damaged Cars",
          description: "Accident-damaged and body-damaged vehicles beyond economical road repair.",
          tag: "Collision Salvage"
        },
        {
          title: "Non-Running Vehicles",
          description: "Vehicles with seized engines, broken transmissions, or mechanical failure.",
          tag: "Immobilized"
        },
        {
          title: "Scrap Vehicles",
          description: "Dismantled shells, rusted body panels, and end-of-life structural metal.",
          tag: "Metal Recovery"
        },
        {
          title: "Vehicle Parts",
          description: "Used automotive components, iron scrap, and salvage mechanical parts.",
          tag: "Salvage Spares"
        }
      ]
    },
    coverageInfo: {
      heading: "Regional Coverage Information",
      regionName: "Uttarakhand",
      description: "Our scrap car service network operates across selected areas in Uttarakhand, ensuring car owners have access to dependable vehicle scrapping assistance.",
      highlight: "Dedicated service coordination across Uttarakhand"
    },
    gallery: [
      {
        id: "uk-gal-1",
        src: "/images/old-cars-powerlines.jpg",
        thumbnail: "/images/thumbs/old-cars-powerlines.webp",
        alt: "Abandoned weathered cars in outdoor salvage yard",
        title: "Salvage Yard Vehicles",
        category: "Weathered Cars"
      },
      {
        id: "uk-gal-2",
        src: "/images/damaged-car-windshield.jpg",
        thumbnail: "/images/thumbs/damaged-car-windshield.webp",
        alt: "Damaged car with shattered windshield and dented hood",
        title: "Damaged Vehicle Shell",
        category: "Damaged Cars"
      },
      {
        id: "uk-gal-3",
        src: "/images/old-van-scrap-metal.jpg",
        thumbnail: "/images/thumbs/old-van-scrap-metal.webp",
        alt: "Old van with heavy rust next to metal scrap pile",
        title: "Weathered Van & Metal Heap",
        category: "Old Vehicles"
      },
      {
        id: "uk-gal-4",
        src: "/images/rusted-engine-part.jpg",
        thumbnail: "/images/thumbs/rusted-engine-part.webp",
        alt: "Rusted engine parts and metal components",
        title: "Engine Scrap & Iron",
        category: "Dismantling"
      },
      {
        id: "uk-gal-5",
        src: "/images/truck-scrap-tires-parts.jpg",
        thumbnail: "/images/thumbs/truck-scrap-tires-parts.webp",
        alt: "Truck loaded with tires and scrap parts",
        title: "Salvage Tires & Parts",
        category: "Yard Operations"
      },
      {
        id: "uk-gal-6",
        src: "/images/user-reference-scrap-yard.jpg",
        thumbnail: "/images/thumbs/user-reference-scrap-yard.webp",
        alt: "Rusted scrap sedan in outdoor industrial yard",
        title: "Rusted Scrap Sedan",
        category: "Scrap Cars"
      }
    ],
    faq: {
      heading: "Frequently Asked Questions",
      subheading: "Helpful details on vehicle scrapping in Uttarakhand.",
      questions: [
        {
          question: "How do you manage collection for non-running vehicles in Uttarakhand?",
          answer: "We arrange coordinated towing and recovery equipment suitable for safely moving immobilized and non-operational cars directly from your location."
        },
        {
          question: "What vehicle paperwork is needed when handing over a scrap car?",
          answer: "Basic ownership identification and vehicle documents are reviewed upfront to ensure a legitimate, compliant, and transparent handover process."
        },
        {
          question: "What conditions of damaged or accidental cars are accepted?",
          answer: "We accept vehicles in all physical conditions, including total accidental losses, heavy panel denting, rust perforation, and missing mechanical components."
        }
      ]
    },
    whyContactUs: {
      heading: "Why Contact Us for Scrap Cars in Uttarakhand",
      reasons: [
        {
          title: "Dependable Pickup",
          description: "Convenient vehicle recovery arrangements for non-running and damaged vehicles."
        },
        {
          title: "Clear Valuation",
          description: "Transparent discussion of vehicle scrap potential with no surprises."
        },
        {
          title: "Helpful Customer Support",
          description: "Dedicated assistance throughout the handover and documentation process."
        }
      ]
    }
  }
};
