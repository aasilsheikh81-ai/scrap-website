export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContentSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: { heading: string; text: string }[];
}

/** Homepage FAQ. The on-page accordion and the FAQPage schema both read this list. */
export const homeFaqs: FaqItem[] = [
  {
    question: 'How much is a scrap car worth?',
    answer:
      'A scrap car is valued mainly on its kerb weight and the current scrap metal rate, then adjusted for the make and model, whether the engine, catalytic converter, battery and alloy wheels are still in place, and how many parts can be reused. Share the model, year, condition and a few photos on WhatsApp and we will give you a clear figure and explain how we reached it — before anything is collected.'
  },
  {
    question: 'How do I scrap my old vehicle?',
    answer:
      'Call or WhatsApp us with the vehicle details, accept the valuation, and pick a pickup slot. Our team collects the car free from your doorstep, checks the documents, pays you on handover and guides the RC cancellation with the RTO. The vehicle is then depolluted, dismantled and recycled.'
  },
  {
    question: 'What documents are needed for vehicle scrapping?',
    answer:
      'Usually the original Registration Certificate (RC), a photo ID and address proof of the registered owner (such as Aadhaar or PAN), and the owner’s signature on the scrapping and deregistration forms. If the vehicle had a loan, a bank NOC is needed; if the RC is lost, an FIR or lost-RC report helps. Tell us up front if anything is missing and we will explain the options.'
  },
  {
    question: 'Is RC cancellation included?',
    answer:
      'Yes. RC cancellation (deregistration) paperwork is part of our service — we prepare the forms, tell you exactly what needs signing and guide the process with the RTO. If you want a Certificate of Deposit to claim Vehicle Scrapping Policy benefits on a new vehicle, mention it before pickup so we can explain the right route for your vehicle.'
  },
  {
    question: 'Do you provide free pickup?',
    answer:
      'Yes. Scrap car pickup is free across our service areas in Punjab, NCR, Uttarakhand and Saharanpur — including non-running and accident-damaged vehicles that need towing. Nothing is deducted from the agreed price for collection.'
  },
  {
    question: 'How long does vehicle scrapping take?',
    answer:
      'Once you accept the quote we schedule pickup at a time that suits you, and the handover at your doorstep usually takes under an hour. Dismantling and recycling happen at the yard afterwards. The RTO side of RC cancellation depends on the RTO’s processing time and typically takes longer than the pickup itself.'
  },
  {
    question: 'Which vehicles do you accept?',
    answer:
      'Cars, SUVs, vans and other light vehicles in any condition — running, non-running, accident damaged, flood damaged, rusted, with seized engines or missing parts. End-of-life vehicles that have crossed their registration validity are welcome too.'
  },
  {
    question: 'What happens to my vehicle after scrapping?',
    answer:
      'The vehicle is depolluted first — fuel, oils, coolant, brake fluid, AC gas and the battery are removed safely. Reusable parts are salvaged, and the remaining shell is sent for metal recycling. This keeps hazardous waste out of the environment and returns steel and aluminium to industry.'
  },
  {
    question: 'Do you cover my area?',
    answer:
      'We collect scrap cars across Punjab, Delhi NCR, Uttarakhand and in and around Saharanpur, where our yard is based. Share your pin code when you call or message and we will confirm the pickup slot.'
  }
];
