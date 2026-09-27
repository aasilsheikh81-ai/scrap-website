import { photos, type ImageAsset } from '../config/images';
import type { ContentSection, FaqItem } from './faqs';

export interface ServicePageData {
  slug: string;
  /** Short label for nav, footer and cards. */
  navLabel: string;
  serviceType: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  heroSubtitle: string;
  /** One-line summary for homepage service cards. */
  summary: string;
  image: ImageAsset;
  intro: string[];
  sections: ContentSection[];
  faqs: FaqItem[];
}

export const servicePages: ServicePageData[] = [
  {
    slug: 'scrap-car-pickup',
    navLabel: 'Scrap Car Pickup',
    serviceType: 'Scrap car pickup and free vehicle collection',
    metaTitle: 'Scrap Car Pickup | Free Doorstep Collection | AutoScrape Pro',
    metaDescription:
      'Free scrap car pickup from your doorstep in Punjab, NCR, Uttarakhand & Saharanpur. Running or not, we tow it and pay on handover. Call for a quote today.',
    eyebrow: 'Free Vehicle Collection',
    h1: 'Free Scrap Car Pickup From Your Doorstep',
    heroSubtitle:
      'Running, non-running or accident damaged — we collect your scrap car free of charge, pay you on handover and guide the RC cancellation.',
    summary: 'Free doorstep collection for running, non-running and accident-damaged vehicles — no towing charges.',
    image: photos.oldCars,
    intro: [
      'An old car that no longer runs quickly becomes a problem: it takes up parking, collects challans and insurance reminders, and arranging a tow yourself costs money. AutoScrape Pro removes that hassle with free scrap car pickup across Punjab, Delhi NCR, Uttarakhand and Saharanpur.',
      'You agree the price first. We then send a recovery vehicle at a time that suits you, check the documents on the spot, pay you on handover and take the car away. Towing is never deducted from the quote you accepted.'
    ],
    sections: [
      {
        heading: 'What our free vehicle collection includes',
        bullets: [
          'Doorstep pickup from home, office, workshop, society parking or roadside',
          'Towing or flatbed recovery for non-running, seized or accident-damaged cars',
          'On-the-spot document check so nothing is left pending',
          'Payment on handover at the agreed price — no last-minute deductions',
          'Guidance on RC cancellation and deregistration with the RTO'
        ]
      },
      {
        heading: 'Vehicles we pick up',
        paragraphs: [
          'We collect hatchbacks, sedans, SUVs, MUVs, vans and light commercial vehicles of any make and age. Cars with a dead battery, flat tyres, missing parts, flood damage or a seized engine are all fine — our recovery team brings the right equipment.'
        ],
        subsections: [
          {
            heading: 'Non-running and accident-damaged cars',
            text: 'If the car cannot be driven or steered, tell us when you book. We arrange a flatbed or wheel-lift tow so the vehicle is moved safely without damage to your property.'
          },
          {
            heading: 'End-of-life vehicles (ELV)',
            text: 'Cars that have crossed their registration validity or failed fitness are end-of-life vehicles. We collect them for authorised-route scrapping and deregistration instead of leaving them to rust on the street.'
          }
        ]
      },
      {
        heading: 'How scrap car pickup works',
        subsections: [
          { heading: '1. Share vehicle details', text: 'Call or WhatsApp the make, model, year, condition and your pin code. Photos help us quote faster.' },
          { heading: '2. Accept the valuation', text: 'We explain the figure — weight, scrap rate and usable parts — before you commit to anything.' },
          { heading: '3. Choose a pickup slot', text: 'Pick a time that works for you. The handover at your doorstep usually takes under an hour.' },
          { heading: '4. Get paid and deregistered', text: 'You are paid on handover and we guide the RC cancellation paperwork to completion.' }
        ]
      },
      {
        heading: 'Why free pickup matters',
        paragraphs: [
          'Many scrap dealers quote a high price and then subtract towing, "labour" or document charges at the door. We fold collection into the service so the number you accept is the number you receive. It is the simplest way to compare scrap car buyers honestly.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is scrap car pickup really free?',
        answer: 'Yes. Collection and towing within our service areas are free and are never deducted from the agreed price.'
      },
      {
        question: 'Can you pick up a car that does not start?',
        answer: 'Yes. We regularly collect non-running cars with dead batteries, seized engines or accident damage using a tow or flatbed.'
      },
      {
        question: 'Do I need to be present at pickup?',
        answer: 'The registered owner, or someone with the owner’s signed documents and ID copy, should be present so the handover and paperwork can be completed.'
      }
    ]
  },
  {
    slug: 'vehicle-disposal',
    navLabel: 'Vehicle Disposal',
    serviceType: 'Old car and vehicle disposal',
    metaTitle: 'Old Car & Vehicle Disposal Service | AutoScrape Pro',
    metaDescription:
      'Dispose of your old car the legal, eco-friendly way. Free pickup, depollution, recycling and RC cancellation support across Punjab, NCR & Uttarakhand. Call now.',
    eyebrow: 'Old Car Disposal',
    h1: 'Old Car & Vehicle Disposal Service',
    heroSubtitle:
      'Legal, environmentally responsible disposal of old and unwanted vehicles — with the paperwork that protects you after the car is gone.',
    summary: 'Legal, eco-friendly disposal of old and unwanted vehicles with depollution and recycling.',
    image: photos.oldVan,
    intro: [
      'Selling an old car to an unregistered buyer can leave the vehicle legally in your name. If it is later resold, involved in an accident or used illegally, notices come to you. Proper vehicle disposal means the car is scrapped, the RC is cancelled and you keep proof of it.',
      'AutoScrape Pro handles old car disposal from pickup to paperwork. We pay a fair price, collect the vehicle free and make sure it is dismantled and recycled responsibly.'
    ],
    sections: [
      {
        heading: 'When should you dispose of an old vehicle?',
        bullets: [
          'Repairs now cost more than the car is worth',
          'The vehicle has crossed its registration validity or failed a fitness test',
          'Local rules restrict older diesel or petrol vehicles, as in Delhi NCR',
          'The car has been standing unused for months and is deteriorating',
          'Insurance, parking and maintenance cost more than the car earns you'
        ]
      },
      {
        heading: 'Our vehicle disposal process',
        subsections: [
          { heading: 'Valuation and pickup', text: 'We quote a price based on weight and usable parts, then collect the car free from your location.' },
          { heading: 'Depollution', text: 'Fuel, engine oil, coolant, brake fluid, AC refrigerant and the battery are drained and removed so they do not contaminate soil or water.' },
          { heading: 'Dismantling', text: 'Reusable parts are removed and inspected. Tyres, glass, plastics and wiring are separated for their own recycling streams.' },
          { heading: 'Metal recycling', text: 'The stripped shell is sent for shredding, and the recovered steel and aluminium return to manufacturing.' }
        ]
      },
      {
        heading: 'Legal protection after disposal',
        paragraphs: [
          'We guide the RC cancellation (deregistration) so the vehicle is removed from your name in the Vahan records. Keep a copy of the signed handover and deregistration documents — they are your proof that the vehicle no longer belongs to you.',
          'If you plan to buy a new vehicle, ask us about the Certificate of Deposit issued by Registered Vehicle Scrapping Facilities under the Vehicle Scrapping Policy. It can make you eligible for a road tax concession and registration fee waiver, depending on your state.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is it legal to sell my old car as scrap?',
        answer: 'Yes, as long as the vehicle is scrapped and its registration is cancelled. That is what protects you from liability if the car resurfaces.'
      },
      {
        question: 'What is the most eco-friendly way to dispose of a car?',
        answer: 'Depollution followed by dismantling and metal recycling. It keeps oils, coolant, refrigerant and battery acid out of the environment and recovers most of the car’s weight as recyclable material.'
      },
      {
        question: 'Can I dispose of a car registered in another state?',
        answer: 'Usually yes, provided the documents are in order. Share the RC details and we will confirm what is needed for deregistration with the issuing RTO.'
      }
    ]
  },
  {
    slug: 'elv-scrapping',
    navLabel: 'ELV Scrapping',
    serviceType: 'End-of-life vehicle (ELV) scrapping and car recycling',
    metaTitle: 'ELV Scrapping & Car Recycling Service | AutoScrape Pro',
    metaDescription:
      'End-of-life vehicle (ELV) scrapping with depollution, dismantling and car recycling. Free pickup in Punjab, NCR, Uttarakhand & Saharanpur. Get a quote today.',
    eyebrow: 'End-of-Life Vehicles',
    h1: 'ELV Scrapping & Car Recycling',
    heroSubtitle:
      'Responsible end-of-life vehicle scrapping — depollution, dismantling and automobile recycling in line with India’s Vehicle Scrapping Policy.',
    summary: 'End-of-life vehicle scrapping with depollution, dismantling and metal recycling.',
    image: photos.stackedCars,
    intro: [
      'An end-of-life vehicle (ELV) is a car that is no longer fit for the road: it has crossed its registration validity, failed a fitness test, been declared a total loss after an accident, or is simply beyond economical repair. India’s Vehicle Scrapping Policy asks that such vehicles be scrapped scientifically rather than abandoned or broken up informally.',
      'AutoScrape Pro collects ELVs free of charge and handles them the right way — hazardous materials out first, reusable parts recovered, and the remaining metal recycled.'
    ],
    sections: [
      {
        heading: 'What the Vehicle Scrapping Policy means for you',
        paragraphs: [
          'Under the national Vehicle Scrapping Policy, vehicles are scrapped at Registered Vehicle Scrapping Facilities (RVSFs). When a vehicle is scrapped there, the owner receives a Certificate of Deposit (CoD) and the vehicle’s registration is cancelled.',
          'The CoD can be used when you buy a new vehicle: states offer a road tax concession — up to 25% for private vehicles and up to 15% for commercial vehicles — and the registration fee is waived. Many manufacturers add a scrappage discount too. Exact benefits vary by state and brand, so check before you buy.'
        ]
      },
      {
        heading: 'How ELV scrapping works',
        subsections: [
          { heading: 'Verification', text: 'Ownership documents and the chassis and engine numbers are verified against the RC before the vehicle is accepted.' },
          { heading: 'Depollution', text: 'All fluids, the battery, AC refrigerant and airbags are removed and stored for safe disposal or recycling.' },
          { heading: 'Vehicle dismantling', text: 'Engines, gearboxes, panels, glass, tyres and electronics are separated. Parts that pass inspection are sold for reuse.' },
          { heading: 'Automobile recycling', text: 'The bare body shell is flattened and shredded so steel, aluminium and copper can be melted down and reused.' }
        ]
      },
      {
        heading: 'Why car recycling matters',
        paragraphs: [
          'A typical passenger car is mostly steel and iron by weight, and most of it can be recovered. Proper car recycling reduces the need for fresh mining, keeps waste oil and battery acid out of drains and fields, and stops unsafe old vehicles from being patched up and put back on the road.'
        ]
      }
    ],
    faqs: [
      {
        question: 'What is an end-of-life vehicle?',
        answer: 'A vehicle that is no longer validly registered, has failed a fitness test, has been declared a total loss, or is otherwise beyond economical repair.'
      },
      {
        question: 'What is a Certificate of Deposit?',
        answer: 'A certificate issued by a Registered Vehicle Scrapping Facility when a vehicle is scrapped. It can be used to claim road tax concessions and a registration fee waiver on a new vehicle.'
      },
      {
        question: 'How much of a scrapped car is recycled?',
        answer: 'Most of a car’s weight is metal that can be recovered. Plastics, glass, tyres and fluids go to their own recycling or safe-disposal streams.'
      }
    ]
  },
  {
    slug: 'scrap-car-valuation',
    navLabel: 'Scrap Car Valuation',
    serviceType: 'Scrap car valuation',
    metaTitle: 'Scrap Car Valuation | Know Your Car’s Value | AutoScrape Pro',
    metaDescription:
      'Find out what your scrap car is worth. Transparent valuation based on weight, scrap rates and usable parts — no hidden deductions. WhatsApp photos for a quote.',
    eyebrow: 'Transparent Pricing',
    h1: 'Scrap Car Valuation: What Is Your Car Worth?',
    heroSubtitle:
      'A clear, explained price for your scrap car — based on weight, current scrap metal rates and the parts that can still be reused.',
    summary: 'Clear, explained scrap value based on weight, scrap rates and reusable parts.',
    image: photos.damagedCar,
    intro: [
      'Scrap car prices vary more than most owners expect. Two cars of the same age can be worth very different amounts depending on their weight, what is still fitted, and where the scrap metal market sits that week.',
      'At AutoScrape Pro we explain exactly how we arrive at a number, so you can compare offers with confidence. Send the details and a few photos on WhatsApp and we will reply with a figure.'
    ],
    sections: [
      {
        heading: 'What decides your scrap car’s value',
        subsections: [
          { heading: 'Kerb weight', text: 'The heavier the vehicle, the more recoverable steel and aluminium. SUVs and vans generally fetch more than small hatchbacks.' },
          { heading: 'Scrap metal rates', text: 'Steel and non-ferrous metal prices move with the market. We price against current rates, not last season’s.' },
          { heading: 'Completeness', text: 'A car with its engine, gearbox, catalytic converter, battery, alloy wheels and body panels intact is worth more than a stripped shell.' },
          { heading: 'Reusable parts', text: 'Popular models have steady demand for parts. Working engines, gearboxes and undamaged panels add value.' },
          { heading: 'Documents', text: 'A vehicle with a clean RC and complete paperwork is simpler to deregister, which keeps the process fast.' }
        ]
      },
      {
        heading: 'How to get the best price for your scrap car',
        bullets: [
          'Do not remove the battery, wheels or catalytic converter before the quote',
          'Share clear photos from all four sides plus the engine bay and odometer',
          'Keep the original RC and owner ID ready',
          'Ask whether pickup and paperwork are included — with us they are',
          'Compare the final amount you receive, not the headline quote'
        ]
      },
      {
        heading: 'No hidden deductions',
        paragraphs: [
          'The price you accept is the price you are paid on handover. We do not deduct towing, labour or document handling at your doorstep. If something about the car differs materially from what was described, we will say so before loading it — never after.'
        ]
      }
    ],
    faqs: [
      {
        question: 'How much is a scrap car worth in India?',
        answer: 'It depends mainly on the car’s weight, current scrap metal rates and which parts are still usable. Share your car’s details and photos for an exact figure.'
      },
      {
        question: 'Does a non-running car get a lower price?',
        answer: 'Not necessarily. Scrap value is driven by weight and parts, so a non-running car with its major components intact can still fetch a fair price.'
      },
      {
        question: 'Is the quote free?',
        answer: 'Yes. Valuation is free and there is no obligation to accept it.'
      }
    ]
  },
  {
    slug: 'rc-cancellation-rto-documentation',
    navLabel: 'RC Cancellation & RTO Docs',
    serviceType: 'RC cancellation and RTO documentation for scrapped vehicles',
    metaTitle: 'RC Cancellation & RTO Paperwork for Scrap Cars | AutoScrape Pro',
    metaDescription:
      'Scrapping your car? We guide RC cancellation and vehicle deregistration with the RTO so it is legally out of your name. See the documents you need and call us.',
    eyebrow: 'RTO Documentation',
    h1: 'RC Cancellation & RTO Documentation for Scrapped Vehicles',
    heroSubtitle:
      'Vehicle deregistration done properly, so your scrapped car is legally removed from your name.',
    summary: 'Guided RC cancellation and deregistration so the scrapped car leaves your name.',
    image: photos.bodyParts,
    intro: [
      'Handing over a car for scrap is only half the job. Until its Registration Certificate (RC) is cancelled, the vehicle still appears against your name in the Vahan database — along with any liability attached to it.',
      'AutoScrape Pro includes RC cancellation support with every scrap car pickup. We prepare the forms, tell you what needs signing and guide the deregistration with the RTO.'
    ],
    sections: [
      {
        heading: 'Documents needed for RC cancellation',
        bullets: [
          'Original Registration Certificate (RC)',
          'Photo ID and address proof of the registered owner (Aadhaar, PAN, passport or voter ID)',
          'Owner’s signature on the scrapping and deregistration forms',
          'Bank NOC if the vehicle was bought on a loan (hypothecation)',
          'FIR or lost-document report if the RC is lost',
          'Death certificate and legal-heir documents if the registered owner has passed away'
        ]
      },
      {
        heading: 'How vehicle deregistration works',
        subsections: [
          { heading: 'Document check at pickup', text: 'We verify the RC against the chassis and engine numbers and confirm ownership before the car leaves.' },
          { heading: 'Scrapping record', text: 'The vehicle is scrapped and its chassis number is recorded as part of the scrapping process.' },
          { heading: 'RTO submission', text: 'The deregistration application and supporting documents are submitted to the RTO where the vehicle is registered.' },
          { heading: 'Confirmation', text: 'Once processed, the registration is marked cancelled in the Vahan records. Keep a copy for your files.' }
        ]
      },
      {
        heading: 'Certificate of Deposit and scrappage benefits',
        paragraphs: [
          'Vehicles scrapped at a Registered Vehicle Scrapping Facility (RVSF) receive a Certificate of Deposit. When you buy a new vehicle, the CoD can make you eligible for a state road tax concession and a registration fee waiver. If this matters to you, tell us before pickup so we can explain the correct route for your vehicle.'
        ]
      },
      {
        heading: 'Special cases we can help with',
        paragraphs: [
          'Missing RC, vehicles still under hypothecation, cars registered in another state and vehicles whose owner has passed away all need extra steps. They are common, and rarely a reason not to scrap — tell us the situation and we will explain what is needed.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is RC cancellation mandatory when scrapping a car?',
        answer: 'Yes. Deregistration removes the vehicle from your name and protects you from any future liability linked to it.'
      },
      {
        question: 'Can I scrap a car without the original RC?',
        answer: 'Often yes, with an FIR or lost-document report and owner ID. Tell us before pickup so we can confirm the exact requirements.'
      },
      {
        question: 'How long does RC cancellation take?',
        answer: 'It depends on the RTO’s processing time. The pickup and paperwork on our side are quick; the RTO update typically follows over the next few weeks.'
      }
    ]
  }
];

export const findServicePage = (slug: string) => servicePages.find((page) => page.slug === slug);
