import { photos, type ImageAsset } from '../config/images';
import type { ContentSection, FaqItem } from './faqs';

export interface LocationPageData {
  slug: string;
  /** Old URL under /service-areas/ that now redirects here. */
  legacySlug: string;
  name: string;
  /** schema.org areaServed node. */
  area: { '@type': string; name: string };
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  heroSubtitle: string;
  /** Homepage card copy. */
  cardSummary: string;
  heroImage: ImageAsset;
  featuredImage: ImageAsset;
  intro: { heading: string; paragraphs: string[] };
  sections: ContentSection[];
  coverage: { heading: string; text: string; places: string[] };
  faqs: FaqItem[];
}

export const locationPages: LocationPageData[] = [
  // ───────────────────────────────── Punjab ─────────────────────────────────
  {
    slug: 'scrap-car-buyer-punjab',
    legacySlug: 'punjab',
    name: 'Punjab',
    area: { '@type': 'State', name: 'Punjab' },
    metaTitle: 'Scrap Car Buyer in Punjab | Free Pickup | AutoScrape Pro',
    metaDescription:
      'Sell your scrap car in Punjab — Ludhiana, Jalandhar, Amritsar, Patiala, Mohali & more. Free pickup, fair valuation and RC cancellation support. Call today.',
    eyebrow: 'Punjab Scrap Car Service',
    h1: 'Scrap Car Buyer in Punjab',
    heroSubtitle:
      'Free doorstep pickup, a transparent price and RC cancellation support for old, damaged and end-of-life vehicles across Punjab.',
    cardSummary:
      'Scrap car pickup across Ludhiana, Jalandhar, Amritsar, Patiala, Mohali and the rest of Punjab.',
    heroImage: photos.scrapYard,
    featuredImage: photos.endOfLifeSedan,
    intro: {
      heading: 'Sell your scrap car in Punjab without the runaround',
      paragraphs: [
        'Punjab has one of the highest rates of car ownership in India, and that means a lot of vehicles reach the end of their road every year. Some sit in village courtyards and farmhouse sheds, some are left behind when family members move abroad, and some are written off after an accident or a heavy monsoon. Whatever the reason, an idle car loses value every month it stands.',
        'AutoScrape Pro is a scrap car buyer serving Punjab with free vehicle collection, a clear valuation and guided RC cancellation. You get paid on handover, the car is scrapped responsibly, and the registration is removed from your name — so the vehicle cannot come back to trouble you.'
      ]
    },
    sections: [
      {
        heading: 'Vehicle scrapping service in Punjab: what we handle',
        paragraphs: [
          'We buy and collect passenger vehicles of every make and condition, from 20-year-old Maruti 800s and Zens to diesel SUVs that have crossed their registration validity. You do not need to get the car running, replace the battery or fix the tyres before we come.'
        ],
        subsections: [
          {
            heading: 'Old and end-of-life cars',
            text: 'Vehicles past their registration validity or unable to pass a fitness test are end-of-life vehicles (ELVs). Under India’s Vehicle Scrapping Policy they should be scrapped and deregistered rather than broken up informally, and we handle that process for you.'
          },
          {
            heading: 'Accident and flood-damaged vehicles',
            text: 'Insurance total losses, cars with structural damage and vehicles that were submerged during the monsoon are often not worth repairing. We collect them as they are and value them on weight and salvageable parts.'
          },
          {
            heading: 'Idle cars of NRI families',
            text: 'Many Punjab households have a car registered to a relative now living abroad. We can explain the documents and authorisation needed so the vehicle can be scrapped and deregistered without the owner flying home.'
          },
          {
            heading: 'Commercial and utility vehicles',
            text: 'Vans, pickups and light commercial vehicles are accepted too. Tell us the model and gross weight when you call so we send suitable recovery equipment.'
          }
        ]
      },
      {
        heading: 'How our Punjab scrap car pickup works',
        subsections: [
          { heading: '1. Call or WhatsApp', text: 'Share the make, model, year, condition and your location — city, town or village. Photos from all sides help us quote faster.' },
          { heading: '2. Get a clear valuation', text: 'We explain the price in plain terms: kerb weight, current scrap metal rates and the parts that can still be reused.' },
          { heading: '3. Free doorstep collection', text: 'Choose a slot. Our recovery team collects the car from your home, workshop or farm — towing included at no charge.' },
          { heading: '4. Payment and RC cancellation', text: 'You are paid on handover, and we guide the deregistration paperwork with the RTO where the car is registered.' }
        ]
      },
      {
        heading: 'Why Punjab car owners choose a proper scrap car buyer',
        paragraphs: [
          'The informal way to get rid of an old car in Punjab is to sell it to whoever turns up with cash. The problem is that the car is rarely deregistered. It may be patched up and resold, its parts may be used illegally, and because the RC still carries your name, the challans and notices keep arriving at your address.',
          'Scrapping through a proper vehicle disposal service closes that loop. The car is depolluted, dismantled and recycled, and the registration is cancelled — so you have a clean record, not a loose end.'
        ],
        bullets: [
          'Free scrap car pickup — nothing deducted for towing',
          'Transparent valuation with the calculation explained',
          'Payment on handover at the agreed price',
          'RC cancellation and RTO documentation guided end to end',
          'Eco-friendly depollution and car recycling'
        ]
      },
      {
        heading: 'Vehicle Scrapping Policy benefits in Punjab',
        paragraphs: [
          'Punjab has Registered Vehicle Scrapping Facilities (RVSFs) operating under the national Vehicle Scrapping Policy. A vehicle scrapped at an RVSF earns its owner a Certificate of Deposit, which can be used when buying a new vehicle: states offer a road tax concession — up to 25% for private vehicles — and a registration fee waiver, and many manufacturers add their own scrappage discount.',
          'If you are planning to buy a new car and want to use these benefits, tell us before pickup. We will explain the right route for your vehicle so you receive the certificate you need.'
        ]
      },
      {
        heading: 'Getting the best scrap value for your car in Punjab',
        paragraphs: [
          'A car’s scrap value is driven mostly by its weight and by what is still fitted to it. Owners sometimes sell the battery, alloy wheels or catalytic converter separately before calling a scrap buyer, only to find the remaining shell is worth far less than expected. Leave the car complete and let us value it as a whole — you will usually come out ahead, and there is no hassle of selling parts one by one.',
          'Timing matters too. A car that stands through a Punjab summer and monsoon loses value quickly as tyres crack, wiring perishes and rust spreads. If you already know you will not drive it again, scrapping sooner rather than later gets you a better price and ends the insurance and parking costs.'
        ]
      },
      {
        heading: 'Documents for scrapping a car in Punjab',
        bullets: [
          'Original RC (registration certificate)',
          'Registered owner’s photo ID and address proof, such as Aadhaar or PAN',
          'Signed scrapping and deregistration forms, which we prepare',
          'Bank NOC if the car was financed',
          'FIR or lost-document report if the RC is missing'
        ],
        paragraphs: [
          'Missing papers are common with older cars and rarely stop a sale. Tell us what you have and we will tell you what else is needed.'
        ]
      }
    ],
    coverage: {
      heading: 'Scrap car pickup across Punjab',
      text: 'We collect from cities, towns and villages across all three regions of Punjab — Majha, Doaba and Malwa — as well as the Chandigarh tricity belt. Share your pin code and we will confirm the pickup slot.',
      places: [
        'Ludhiana', 'Jalandhar', 'Amritsar', 'Patiala', 'Mohali', 'Zirakpur', 'Kharar', 'Rajpura',
        'Bathinda', 'Phagwara', 'Hoshiarpur', 'Kapurthala', 'Pathankot', 'Moga', 'Khanna', 'Firozpur', 'Sangrur', 'Barnala'
      ]
    },
    faqs: [
      {
        question: 'Do you buy scrap cars in all districts of Punjab?',
        answer: 'We collect across Punjab, including Ludhiana, Jalandhar, Amritsar, Patiala, Mohali, Bathinda and surrounding towns and villages. Share your pin code and we will confirm the slot.'
      },
      {
        question: 'How much will I get for my scrap car in Punjab?',
        answer: 'The price depends on the car’s weight, current scrap metal rates and the parts that can be reused. Send the details and photos on WhatsApp for an exact, explained quote.'
      },
      {
        question: 'Can I scrap a car registered to a family member living abroad?',
        answer: 'Usually yes, with the owner’s ID, signed forms and a written authorisation. Tell us the situation and we will explain exactly what is needed.'
      },
      {
        question: 'Is RC cancellation included with scrap car pickup in Punjab?',
        answer: 'Yes. We guide the RC cancellation paperwork with the RTO where your vehicle is registered as part of the service.'
      },
      {
        question: 'Do you collect non-running or flood-damaged cars?',
        answer: 'Yes. We tow non-running, accident-damaged and flood-damaged vehicles free of charge within our Punjab service area.'
      }
    ]
  },

  // ─────────────────────────────────── NCR ──────────────────────────────────
  {
    slug: 'scrap-car-buyer-ncr',
    legacySlug: 'ncr',
    name: 'Delhi NCR',
    area: { '@type': 'AdministrativeArea', name: 'National Capital Region (NCR)' },
    metaTitle: 'Scrap Car Buyer in Delhi NCR | 10/15-Year Cars | AutoScrape Pro',
    metaDescription:
      'Scrap your 10-year diesel or 15-year petrol car in Delhi NCR. Free pickup in Delhi, Noida, Gurugram, Ghaziabad & Faridabad, with RC cancellation help. Call now.',
    eyebrow: 'Delhi NCR Scrap Car Service',
    h1: 'Scrap Car Buyer in Delhi NCR',
    heroSubtitle:
      'Old diesel and petrol cars, impounded vehicles and non-runners — collected free across Delhi, Noida, Gurugram, Ghaziabad and Faridabad.',
    cardSummary:
      'End-of-life vehicle pickup across Delhi, Noida, Gurugram, Ghaziabad, Faridabad and wider NCR.',
    heroImage: photos.stackedCars,
    featuredImage: photos.crushedCars,
    intro: {
      heading: 'Old car in Delhi NCR? Scrap it legally and get paid',
      paragraphs: [
        'In Delhi NCR an ageing car is not just a maintenance problem — it can become a legal one. Under National Green Tribunal and Supreme Court directions, diesel vehicles older than 10 years and petrol vehicles older than 15 years are not permitted on Delhi’s roads, and enforcement can include impounding. Meanwhile, parking in housing societies and colonies is tight, and a car that cannot be driven is simply in the way.',
        'AutoScrape Pro is a scrap car buyer covering the National Capital Region. We collect your end-of-life vehicle free of charge, pay a transparent price on handover and guide the RC cancellation, so the car is legally off your name.'
      ]
    },
    sections: [
      {
        heading: 'Understanding the 10-year and 15-year rule',
        paragraphs: [
          'The age limits apply to vehicles plying in Delhi and are based on the date of registration. Once your car crosses the limit, you generally have three options: move it out of the NCR with a No Objection Certificate (NOC) for re-registration in another state, keep it off the road entirely, or scrap it.',
          'For most owners, scrapping is the simplest and cleanest choice. It frees up your parking space, stops the vehicle from being towed or fined, and — if the car is scrapped at a Registered Vehicle Scrapping Facility — earns a Certificate of Deposit that can reduce road tax on your next vehicle. Rules and enforcement are updated from time to time, so check the current Delhi Transport Department notification if you are unsure where your car stands.'
        ]
      },
      {
        heading: 'Vehicles we collect across NCR',
        subsections: [
          { heading: 'Over-age diesel and petrol cars', text: 'Diesel cars past 10 years and petrol cars past 15 years — including ones that have been sitting unused since they crossed the limit.' },
          { heading: 'Impounded or towed vehicles', text: 'If your over-age car has been impounded, tell us. We can explain how vehicles released for scrapping are handled and what paperwork is involved.' },
          { heading: 'Non-running cars in society parking', text: 'Dead batteries, flat tyres and seized engines are no problem. We bring a tow or flatbed suited to basement and stilt parking.' },
          { heading: 'Accident-damaged and total-loss cars', text: 'Insurance write-offs and cars that are uneconomical to repair are valued on weight and usable parts.' }
        ]
      },
      {
        heading: 'How scrap car pickup works in Delhi NCR',
        subsections: [
          { heading: '1. Share the details', text: 'Call or WhatsApp the make, model, fuel type, registration year and your sector or locality. Photos speed up the quote.' },
          { heading: '2. Accept a clear valuation', text: 'We explain the figure — weight, current scrap rates and reusable parts — with no hidden deductions.' },
          { heading: '3. Free collection', text: 'We schedule a pickup that suits you and the society or RWA timings, then tow the car away at no cost.' },
          { heading: '4. Paid on handover, RC cancelled', text: 'You are paid when the car is handed over, and we guide the deregistration with the RTO.' }
        ]
      },
      {
        heading: 'Why NCR residents use an organised vehicle disposal service',
        paragraphs: [
          'Unregistered scrap buyers in NCR often buy over-age cars cheaply and never cancel the RC. If that car is later found on the road, towed or involved in an incident, it is traced back to the registered owner — you. An organised vehicle disposal service protects you by pairing the sale with depollution, dismantling and deregistration.'
        ],
        bullets: [
          'Free doorstep pickup, including basement and stilt parking',
          'Transparent pricing explained before collection',
          'RC cancellation and RTO documentation guidance',
          'Environmentally responsible car recycling — important in a region fighting air pollution'
        ]
      },
      {
        heading: 'Scrap it or move it out of NCR with an NOC?',
        paragraphs: [
          'Moving an over-age car out of Delhi for re-registration in another state is possible, but it is rarely as simple as it sounds. You need an NOC from the Delhi Transport Department, the receiving state’s RTO has to accept the vehicle, road tax is usually payable again, and the car must pass fitness. For an older car with high mileage, those costs and the time involved can easily exceed what the car is worth.',
          'Scrapping is usually the cleaner option. You receive a price for the vehicle, the RC is cancelled, and you have documentation proving the car is off the road for good. If you are replacing the vehicle, a Certificate of Deposit can also reduce the road tax on your new one.'
        ],
        subsections: [
          { heading: 'Choose an NOC if…', text: 'The car is in excellent condition, has low mileage, and you have family or a buyer in a state where it can be re-registered and legally driven.' },
          { heading: 'Choose scrapping if…', text: 'The car needs major repairs, has been standing unused, or you simply want the vehicle legally off your name with no further costs.' }
        ]
      },
      {
        heading: 'Car recycling and cleaner air in NCR',
        paragraphs: [
          'Older vehicles without modern emission controls contribute disproportionately to the region’s air pollution, which is why the age rules exist. Taking an end-of-life vehicle off the road permanently — and recycling it properly rather than letting it be patched up and resold — is a small but real contribution to cleaner air across the capital region.'
        ]
      },
      {
        heading: 'Documents needed to scrap a car in Delhi NCR',
        bullets: [
          'Original RC',
          'Registered owner’s ID and address proof',
          'Signed scrapping and deregistration forms',
          'Bank NOC if the car was financed',
          'Impound or release papers, if the vehicle was seized',
          'FIR or lost-document report if the RC is missing'
        ]
      }
    ],
    coverage: {
      heading: 'Areas we cover in NCR',
      text: 'We collect scrap cars across Delhi and the NCR cities of Uttar Pradesh and Haryana. Share your locality or sector and we will confirm the slot.',
      places: [
        'New Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi', 'Dwarka', 'Rohini',
        'Noida', 'Greater Noida', 'Ghaziabad', 'Gurugram', 'Faridabad', 'Sonipat', 'Panipat', 'Bahadurgarh', 'Meerut', 'Muzaffarnagar'
      ]
    },
    faqs: [
      {
        question: 'Can I still sell my 10-year-old diesel car in Delhi?',
        answer: 'You can scrap it, or move it out of NCR with an NOC for re-registration in another state. For most owners scrapping is simpler and gets the car legally off their name.'
      },
      {
        question: 'Do you pick up scrap cars from housing society basements?',
        answer: 'Yes. We collect from basement, stilt and open parking and can work around society or RWA entry timings.'
      },
      {
        question: 'Which NCR cities do you cover?',
        answer: 'Delhi, Noida, Greater Noida, Ghaziabad, Gurugram, Faridabad, Sonipat, Panipat, Bahadurgarh, Meerut and nearby areas.'
      },
      {
        question: 'Will my car be deregistered after scrapping?',
        answer: 'Yes. RC cancellation support is included, so the vehicle is removed from your name in the Vahan records.'
      },
      {
        question: 'Can I get a road tax benefit on my next car?',
        answer: 'A Certificate of Deposit from a Registered Vehicle Scrapping Facility can make you eligible for a road tax concession and registration fee waiver. Tell us before pickup if you need one.'
      }
    ]
  },

  // ─────────────────────────────── Uttarakhand ──────────────────────────────
  {
    slug: 'scrap-car-buyer-uttarakhand',
    legacySlug: 'uttarakhand',
    name: 'Uttarakhand',
    area: { '@type': 'State', name: 'Uttarakhand' },
    metaTitle: 'Scrap Car Buyer in Uttarakhand | Free Pickup | AutoScrape Pro',
    metaDescription:
      'Scrap car buyer in Uttarakhand — Dehradun, Haridwar, Roorkee, Rishikesh & Haldwani. Free pickup, fair price and RC cancellation support. Call for a quote.',
    eyebrow: 'Uttarakhand Scrap Car Service',
    h1: 'Scrap Car Buyer in Uttarakhand',
    heroSubtitle:
      'Free collection of old, damaged and hill-worn vehicles from Dehradun, Haridwar, Roorkee, Rishikesh and the Kumaon plains.',
    cardSummary:
      'Scrap car collection from Dehradun, Haridwar, Roorkee, Rishikesh, Haldwani and beyond.',
    heroImage: photos.oldCars,
    featuredImage: photos.oldVan,
    intro: {
      heading: 'Scrapping an old car in Uttarakhand, made simple',
      paragraphs: [
        'Driving in Uttarakhand is hard on a vehicle. Steep gradients wear out clutches and brakes, broken hill roads punish suspension, and monsoon landslides and flash floods leave cars damaged or stranded. Many older vehicles end up parked for good on a hillside plot or in a Dehradun lane, slowly rusting.',
        'AutoScrape Pro buys scrap cars across Uttarakhand. Our yard in Saharanpur sits just across the state border from Dehradun, Haridwar and Roorkee, which lets us offer free pickup, a transparent price and RC cancellation support without long waits.'
      ]
    },
    sections: [
      {
        heading: 'Vehicles we buy in Uttarakhand',
        paragraphs: [
          'We accept cars, SUVs and light commercial vehicles of every make and condition — including the taxis and utility vehicles that do hard service on hill routes before being retired.'
        ],
        subsections: [
          { heading: 'Hill-worn and high-mileage cars', text: 'Vehicles with tired engines, worn gearboxes or failing suspension after years on mountain roads are often worth more as scrap than as repairs.' },
          { heading: 'Landslide and flood-damaged vehicles', text: 'Cars damaged by debris, rockfall or water during the monsoon are collected as they are, with valuation based on weight and salvageable parts.' },
          { heading: 'End-of-life vehicles', text: 'Cars past their registration validity or unable to pass fitness are scrapped and deregistered in line with the Vehicle Scrapping Policy.' },
          { heading: 'Retired taxis and utility vehicles', text: 'Commercial vehicles that have reached the end of their permit life can be scrapped and deregistered with the right documents.' }
        ]
      },
      {
        heading: 'How our Uttarakhand scrap car pickup works',
        subsections: [
          { heading: '1. Tell us about the vehicle', text: 'Call or WhatsApp the model, year, condition and exact location. For hill locations, mention road access so we can plan the recovery.' },
          { heading: '2. Get a clear price', text: 'We explain the valuation — weight, scrap rates and reusable parts — before collection.' },
          { heading: '3. Free collection', text: 'We tow the car from your home, workshop or plot. Collection is free within our service area.' },
          { heading: '4. Payment and deregistration', text: 'You are paid on handover and we guide the RC cancellation with the RTO where the car is registered.' }
        ]
      },
      {
        heading: 'Why scrap properly instead of selling to a local kabadi',
        paragraphs: [
          'Informal buyers usually strip what they can and dump the rest, and in a fragile mountain environment that matters. Engine oil, coolant, brake fluid and battery acid seep into streams that feed the Ganga and Yamuna river systems. Proper ELV scrapping drains and stores these fluids safely before the vehicle is dismantled and its metal recycled.',
          'Just as importantly, informal buyers rarely cancel the RC. A scrapped-on-paper car that is still registered to you can bring notices and liability for years.'
        ],
        bullets: [
          'Free doorstep pickup across our Uttarakhand service area',
          'Transparent valuation with no hidden deductions',
          'RC cancellation and RTO documentation guidance',
          'Depollution before dismantling to protect local water sources'
        ]
      },
      {
        heading: 'Vehicle Scrapping Policy and your next vehicle',
        paragraphs: [
          'Uttarakhand’s Transport Department lists approved vehicle scrapping facilities under the national Vehicle Scrapping Policy. A Certificate of Deposit from a Registered Vehicle Scrapping Facility can make you eligible for a road tax concession and registration fee waiver when you buy a new vehicle. If you need one, tell us before pickup and we will explain the correct route.'
        ]
      },
      {
        heading: 'Repair or scrap? Deciding for a hill-driven car',
        paragraphs: [
          'Cars that have spent years climbing to Mussoorie, Tehri or Nainital tend to need expensive work all at once: a clutch, brake discs and pads, suspension bushes and shock absorbers, sometimes a gearbox. When the combined repair bill approaches the car’s market value, scrapping is usually the better financial decision — particularly if the vehicle is nearing the end of its registration validity anyway.',
          'A good rule of thumb: if a single repair would cost more than about half of what the car could sell for in running condition, get a scrap valuation before committing. We will give you an honest figure so you can compare the two options side by side.'
        ]
      },
      {
        heading: 'Planning a pickup from Dehradun, Haridwar or Roorkee',
        paragraphs: [
          'Dehradun, Haridwar and Roorkee are a short drive from our Saharanpur yard, so pickups there are straightforward to schedule. For Rishikesh, Kotdwar and the Kumaon plains around Haldwani, Rudrapur and Kashipur, we plan collection routes in advance — share your location early and we will confirm a slot.',
          'For vehicles parked on steep driveways, narrow lanes or hillside plots, a couple of photos showing access help us bring the right equipment. If a tow truck cannot reach the car directly, we will discuss the safest way to move it before the day of pickup.'
        ]
      },
      {
        heading: 'Documents for scrapping a car in Uttarakhand',
        bullets: [
          'Original RC',
          'Owner’s photo ID and address proof',
          'Signed scrapping and deregistration forms',
          'Bank NOC for financed vehicles',
          'Permit surrender papers for commercial vehicles, where applicable'
        ]
      }
    ],
    coverage: {
      heading: 'Scrap car pickup across Uttarakhand',
      text: 'We cover the Garhwal plains and foothills closest to our Saharanpur yard, plus the Kumaon plains. Hill locations further up can be arranged on request — share your location and road access.',
      places: [
        'Dehradun', 'Haridwar', 'Roorkee', 'Rishikesh', 'Vikasnagar', 'Doiwala', 'Kotdwar',
        'Haldwani', 'Rudrapur', 'Kashipur', 'Mussoorie', 'Laksar'
      ]
    },
    faqs: [
      {
        question: 'Do you pick up scrap cars from Dehradun and Haridwar?',
        answer: 'Yes. Dehradun, Haridwar, Roorkee and Rishikesh are close to our Saharanpur yard, and pickup there is free.'
      },
      {
        question: 'Can you collect a car from a hill location?',
        answer: 'Often yes. Share the exact location and road access and we will confirm whether a tow or flatbed can reach it safely.'
      },
      {
        question: 'Do you buy landslide or flood-damaged cars?',
        answer: 'Yes. Damaged vehicles are valued on weight and usable parts and collected as they are.'
      },
      {
        question: 'Is RC cancellation included in Uttarakhand?',
        answer: 'Yes. We guide deregistration with the RTO where the car is registered, so it is legally removed from your name.'
      },
      {
        question: 'How much is my scrap car worth in Uttarakhand?',
        answer: 'It depends on weight, scrap metal rates and reusable parts. Send photos and details on WhatsApp for a clear, explained quote.'
      }
    ]
  },

  // ──────────────────────────────── Saharanpur ──────────────────────────────
  {
    slug: 'scrap-car-buyer-saharanpur',
    legacySlug: 'saharanpur',
    name: 'Saharanpur',
    area: { '@type': 'City', name: 'Saharanpur' },
    metaTitle: 'Scrap Car Buyer in Saharanpur | Local Yard | AutoScrape Pro',
    metaDescription:
      'Local scrap car buyer in Saharanpur, on Ambala Road. Free pickup across Saharanpur, Deoband, Gangoh & nearby, with RC cancellation support. Call or visit today.',
    eyebrow: 'Our Home Yard',
    h1: 'Scrap Car Buyer in Saharanpur',
    heroSubtitle:
      'Local yard on Ambala Road, free doorstep pickup across Saharanpur district and a straight, explained price for your old car.',
    cardSummary:
      'Our home yard on Ambala Road — the quickest pickups across Saharanpur district and nearby towns.',
    heroImage: photos.endOfLifeSedan,
    featuredImage: photos.scrapYard,
    intro: {
      heading: 'Your local scrap car buyer in Saharanpur',
      paragraphs: [
        'AutoScrape Pro is based in Saharanpur, with our yard on Ambala Road in the Industrial Area. For car owners in the city and across the district that means the shortest wait for pickup, a team that knows local roads, and a yard you can visit in person if you prefer to talk face to face.',
        'We buy old, damaged, non-running and end-of-life vehicles, collect them free of charge, pay you on handover and guide the RC cancellation with the RTO — so the car is legally off your name.'
      ]
    },
    sections: [
      {
        heading: 'Why sell your scrap car to a Saharanpur-based buyer',
        paragraphs: [
          'Buyers who come in from other cities often quote high on the phone and then renegotiate at your gate, adding travel and towing charges. Because our yard is local, there is no long-distance recovery cost to recover from you, and pickups can usually be arranged around your schedule.',
          'Being local also means accountability. You know where to find us, and we rely on word of mouth from Saharanpur families, workshops and dealers.'
        ],
        bullets: [
          'Yard on Ambala Road, Industrial Area — visit during opening hours',
          'Free pickup across Saharanpur city and district',
          'Transparent, explained valuation with no hidden deductions',
          'Payment on handover',
          'RC cancellation and RTO paperwork guided end to end'
        ]
      },
      {
        heading: 'Vehicles we accept in Saharanpur',
        subsections: [
          { heading: 'Old family cars', text: 'Cars that have done their years and now cost more to keep than they are worth — including models that are no longer made.' },
          { heading: 'Non-running and standing vehicles', text: 'Cars that have been parked in a lane, garage or courtyard for months with a dead battery or seized engine.' },
          { heading: 'Accident-damaged vehicles', text: 'Insurance write-offs and cars with heavy body or structural damage, valued on weight and usable parts.' },
          { heading: 'End-of-life and over-age vehicles', text: 'Vehicles past their registration validity, scrapped and deregistered in line with the Vehicle Scrapping Policy.' }
        ]
      },
      {
        heading: 'How scrap car pickup works in Saharanpur',
        subsections: [
          { heading: '1. Call, WhatsApp or visit', text: 'Share the model, year, condition and your locality — or drop by the yard on Ambala Road.' },
          { heading: '2. Get a clear price', text: 'We explain the valuation based on weight, current scrap rates and reusable parts.' },
          { heading: '3. Free collection', text: 'We tow the car from your doorstep at a time that suits you, at no charge.' },
          { heading: '4. Payment and RC cancellation', text: 'You are paid on handover and we guide the deregistration with the RTO.' }
        ]
      },
      {
        heading: 'RC cancellation for Saharanpur-registered vehicles',
        paragraphs: [
          'Vehicles registered in Saharanpur carry the UP-11 series and are deregistered through the local RTO. We prepare the forms, tell you exactly what needs signing and guide the submission. Cars registered elsewhere — in Haryana, Uttarakhand, Punjab or Delhi — can be scrapped here too; the deregistration simply goes to the RTO that issued the RC.',
          'If you are buying a new vehicle and want to claim Vehicle Scrapping Policy benefits, ask about a Certificate of Deposit from a Registered Vehicle Scrapping Facility before pickup. It can make you eligible for a road tax concession and registration fee waiver.'
        ]
      },
      {
        heading: 'Responsible car recycling in Saharanpur',
        paragraphs: [
          'Every vehicle we collect is depolluted before dismantling: fuel, engine oil, coolant, brake fluid, AC gas and the battery are removed and handled safely. Usable parts are salvaged, and the remaining body is sent for metal recycling. That keeps hazardous waste out of local drains and fields and returns steel to industry.'
        ]
      },
      {
        heading: 'Local kabadi, workshop or registered scrap car buyer?',
        paragraphs: [
          'In Saharanpur there are three common ways to get rid of an old car: sell it to a neighbourhood kabadi, leave it with a mechanic who will strip it for parts, or sell it to an organised scrap car buyer. The first two may put a little cash in your hand, but they rarely deal with the paperwork — and a car that is broken up while still registered in your name remains your legal responsibility.',
          'An organised buyer like AutoScrape Pro pays a transparent price, collects the car free, depollutes and recycles it properly, and guides the RC cancellation so the vehicle is formally removed from the Vahan records. It is the only route that closes the file completely.'
        ]
      },
      {
        heading: 'Visiting our Saharanpur yard',
        paragraphs: [
          'You are welcome to visit the yard on Ambala Road between 9 AM and 7 PM, Monday to Saturday. Bring your RC and ID if you would like to complete the paperwork in person, or drive the car in yourself if it still runs — some owners prefer to see where their vehicle is going. Call ahead and we will make sure someone is free to walk you through the process.'
        ]
      },
      {
        heading: 'Documents to keep ready',
        bullets: [
          'Original RC',
          'Owner’s photo ID and address proof (Aadhaar, PAN or similar)',
          'Signed scrapping and deregistration forms, which we prepare',
          'Bank NOC if the car was financed',
          'FIR or lost-document report if the RC is missing'
        ]
      }
    ],
    coverage: {
      heading: 'Saharanpur district and nearby towns',
      text: 'We collect across Saharanpur city and district, and from neighbouring towns in western Uttar Pradesh, Haryana and Uttarakhand that are a short drive from our yard.',
      places: [
        'Saharanpur City', 'Deoband', 'Gangoh', 'Behat', 'Nakur', 'Sarsawa', 'Rampur Maniharan', 'Nanauta', 'Chilkana',
        'Yamunanagar', 'Jagadhri', 'Shamli', 'Muzaffarnagar', 'Roorkee'
      ]
    },
    faqs: [
      {
        question: 'Where is your scrap yard in Saharanpur?',
        answer: 'Our yard is on Ambala Road in the Industrial Area, Saharanpur 247001. It is open Monday to Saturday, 9 AM to 7 PM.'
      },
      {
        question: 'Do you pick up scrap cars from Deoband and Gangoh?',
        answer: 'Yes. We collect free of charge across Saharanpur district, including Deoband, Gangoh, Behat, Nakur and Sarsawa.'
      },
      {
        question: 'Can I scrap a car registered outside Uttar Pradesh?',
        answer: 'Yes. The car can be scrapped here and the deregistration goes to the RTO that issued the RC.'
      },
      {
        question: 'How quickly can you collect my car in Saharanpur?',
        answer: 'Because our yard is local, pickup can usually be arranged at a time that suits you once you accept the quote.'
      },
      {
        question: 'Is RC cancellation included?',
        answer: 'Yes. We guide the RC cancellation paperwork with the RTO as part of every scrap car pickup.'
      }
    ]
  }
];

export const findLocationPage = (slug: string) => locationPages.find((page) => page.slug === slug);
export const findLocationByLegacySlug = (legacySlug: string) =>
  locationPages.find((page) => page.legacySlug === legacySlug.toLowerCase());
