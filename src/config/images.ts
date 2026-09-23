/**
 * Centralized Scrap Vehicle & Junkyard Imagery Configuration
 * 
 * Authentic, gritty, and realistic scrap-yard, end-of-life vehicle,
 * and industrial metal recycling photography matching real salvage operations.
 */

export interface GalleryImage {
  id: string;
  src: string;
  thumbnail: string;
  alt: string;
  title: string;
  category: string;
  span?: string;
}

export const heroImage = {
  src: "/images/user-reference-scrap-yard.jpg",
  thumbnail: "/images/thumbs/user-reference-scrap-yard.webp",
  alt: "Outdoor industrial scrap yard with rusted, damaged end-of-life vehicles and scrap metal heaps",
  title: "Automotive Scrap Yard"
};

export const aboutImage = {
  src: "/images/scrap-cars-stacked.jpg",
  thumbnail: "/images/thumbs/scrap-cars-stacked.webp",
  alt: "Stacked scrap cars and end-of-life vehicles in an industrial recycling yard",
  title: "Scrap Vehicle Processing Yard"
};

export const locationImage = {
  src: "/images/junkyard-field-rows.jpg",
  thumbnail: "/images/thumbs/junkyard-field-rows.webp",
  alt: "Outdoor vehicle salvage yard and storage facility with rows of scrap cars",
  title: "Vehicle Yard & Collection Facility"
};

export const contactBackground = {
  src: "/images/city-junkyard-crushed.jpg",
  alt: "Industrial scrap yard with crushed vehicle metal piles"
};

export const serviceImages = {
  scrapCars: {
    src: "/images/old-cars-powerlines.jpg",
    thumbnail: "/images/thumbs/old-cars-powerlines.webp",
    alt: "Rusted scrap cars parked in an outdoor salvage yard",
    title: "Scrap Cars"
  },
  oldVehicles: {
    src: "/images/old-van-scrap-metal.jpg",
    thumbnail: "/images/thumbs/old-van-scrap-metal.webp",
    alt: "Old abandoned van with peeling paint and rust near metal scrap piles",
    title: "Old Vehicles"
  },
  damagedVehicles: {
    src: "/images/damaged-car-windshield.jpg",
    thumbnail: "/images/thumbs/damaged-car-windshield.webp",
    alt: "Damaged vehicle with broken windshield, dented hood, and rusted body panels",
    title: "Damaged Vehicles"
  },
  nonRunning: {
    src: "/images/city-junkyard-crushed.jpg",
    thumbnail: "/images/thumbs/city-junkyard-crushed.webp",
    alt: "Non-running crushed cars and dismantled vehicles in scrap yard",
    title: "Non-Running Vehicles"
  },
  scrapDisposal: {
    src: "/images/scrap-cars-stacked.jpg",
    thumbnail: "/images/thumbs/scrap-cars-stacked.webp",
    alt: "Cars stacked in junkyard for eco-friendly depollution and metal shredding",
    title: "Vehicle Scrap & Disposal"
  },
  autoParts: {
    src: "/images/scrap-car-parts.jpg",
    thumbnail: "/images/thumbs/scrap-car-parts.webp",
    alt: "Dismantled vehicle panels, exhaust parts, and scrap automotive components",
    title: "Used Auto Parts"
  }
};

export const galleryImages: GalleryImage[] = [
  {
    id: "yard-overview",
    src: "/images/junkyard-field-rows.jpg",
    thumbnail: "/images/thumbs/junkyard-field-rows.webp",
    alt: "Wide industrial scrap yard overview showing rows of end-of-life and salvage vehicles",
    title: "Scrap Yard Field Overview",
    category: "Yard Overview",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    id: "rusted-sedan",
    src: "/images/user-reference-scrap-yard.jpg",
    thumbnail: "/images/thumbs/user-reference-scrap-yard.webp",
    alt: "Heavily rusted end-of-life sedan with missing parts parked before scrap metal heaps",
    title: "Rusted Scrap Sedan",
    category: "Scrap Vehicles"
  },
  {
    id: "damaged-car",
    src: "/images/damaged-car-windshield.jpg",
    thumbnail: "/images/thumbs/damaged-car-windshield.webp",
    alt: "Accident-damaged scrap car with shattered windshield and dented hood in salvage yard",
    title: "Damaged Vehicle with Smashed Glass",
    category: "Damaged Vehicles"
  },
  {
    id: "stacked-cars",
    src: "/images/scrap-cars-stacked.jpg",
    thumbnail: "/images/thumbs/scrap-cars-stacked.webp",
    alt: "Stacked cars in city junkyard prepared for metal recycling and scrap shredding",
    title: "Stacked Scrap Cars for Metal Shredding",
    category: "Processing"
  },
  {
    id: "scrap-parts",
    src: "/images/scrap-car-parts.jpg",
    thumbnail: "/images/thumbs/scrap-car-parts.webp",
    alt: "Dismantled body panels, rusted mufflers, and salvage scrap parts lying in yard",
    title: "Dismantled Body Panels & Parts",
    category: "Parts & Components"
  },
  {
    id: "abandoned-van",
    src: "/images/old-van-scrap-metal.jpg",
    thumbnail: "/images/thumbs/old-van-scrap-metal.webp",
    alt: "Old van with broken windshield and heavy rust abandoned next to metal scrap pile",
    title: "Weathered Van & Scrap Metal Heap",
    category: "Scrap Vehicles",
    span: "md:col-span-2"
  },
  {
    id: "engine-components",
    src: "/images/rusted-engine-part.jpg",
    thumbnail: "/images/thumbs/rusted-engine-part.webp",
    alt: "Heavily rusted flywheel and mechanical components from dismantled car engine",
    title: "Rusted Engine Flywheel & Iron Scrap",
    category: "Parts & Components"
  },
  {
    id: "scrap-tires",
    src: "/images/truck-scrap-tires-parts.jpg",
    thumbnail: "/images/thumbs/truck-scrap-tires-parts.webp",
    alt: "Discarded tires and automotive parts loaded into old salvage truck at junkyard",
    title: "Scrap Tires & Salvage Parts",
    category: "Parts & Components"
  },
  {
    id: "weathered-cars",
    src: "/images/old-cars-powerlines.jpg",
    thumbnail: "/images/thumbs/old-cars-powerlines.webp",
    alt: "Multiple abandoned weathered cars sitting in outdoor industrial scrap yard",
    title: "Abandoned Cars in Industrial Yard",
    category: "Scrap Vehicles"
  },
  {
    id: "crushed-cars",
    src: "/images/city-junkyard-crushed.jpg",
    thumbnail: "/images/thumbs/city-junkyard-crushed.webp",
    alt: "Crushed car bodies piled in city scrap yard ready for industrial metal reprocessing",
    title: "Crushed Scrap Cars for Metal Recovery",
    category: "Processing"
  }
];

