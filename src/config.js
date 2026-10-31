import hero1600 from './assets/images/hero-1600.webp';
import hero1200 from './assets/images/hero-1200.webp';
import hero800 from './assets/images/hero-800.webp';
import hero400 from './assets/images/hero-400.webp';
import heroDefault from './assets/images/hero.webp';

import about1200 from './assets/images/about-1200.webp';
import about800 from './assets/images/about-800.webp';
import about600 from './assets/images/about-600.webp';
import aboutDefault from './assets/images/about.webp';

import whyUs1200 from './assets/images/why-us-1200.webp';
import whyUs800 from './assets/images/why-us-800.webp';
import whyUs600 from './assets/images/why-us-600.webp';
import whyUsDefault from './assets/images/why-us.webp';

import ctaBg1920 from './assets/images/cta-bg-1920.webp';
import ctaBg1200 from './assets/images/cta-bg-1200.webp';
import ctaBg800 from './assets/images/cta-bg-800.webp';
import ctaBgDefault from './assets/images/cta-bg.webp';

import serviceLockout800 from './assets/images/service-emergency-lockout-800.webp';
import serviceLockout400 from './assets/images/service-emergency-lockout-400.webp';
import serviceLockoutDefault from './assets/images/service-emergency-lockout.webp';

import serviceRepair800 from './assets/images/service-lock-change-repair-800.webp';
import serviceRepair400 from './assets/images/service-lock-change-repair-400.webp';
import serviceRepairDefault from './assets/images/service-lock-change-repair.webp';

import serviceExtraction800 from './assets/images/service-snapped-key-extraction-800.webp';
import serviceExtraction400 from './assets/images/service-snapped-key-extraction-400.webp';
import serviceExtractionDefault from './assets/images/service-snapped-key-extraction.webp';

import serviceUpvc800 from './assets/images/service-upvc-door-locks-800.webp';
import serviceUpvc400 from './assets/images/service-upvc-door-locks-400.webp';
import serviceUpvcDefault from './assets/images/service-upvc-door-locks.webp';

import serviceCommercial800 from './assets/images/service-commercial-locks-800.webp';
import serviceCommercial400 from './assets/images/service-commercial-locks-400.webp';
import serviceCommercialDefault from './assets/images/service-commercial-locks.webp';

import serviceBurglary800 from './assets/images/service-burglary-repairs-800.webp';
import serviceBurglary400 from './assets/images/service-burglary-repairs-400.webp';
import serviceBurglaryDefault from './assets/images/service-burglary-repairs.webp';

export const PHONE = {
  display: '07782 358 889',
  tel: 'tel:07782358889',
};

export const SITE = 'https://uklocksmithltd.site';
export const BRAND = 'UK Locksmith LTD';
export const HOURS = '24 Hours / 7 Days a Week';

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Areas', path: '/areas' },
  { label: 'Contact', path: '/contact' },
];

export const AREAS_LIST = [
  { name: 'Central London', path: '/areas' },
  { name: 'North London', path: '/areas' },
  { name: 'East London', path: '/areas' },
  { name: 'South London', path: '/areas' },
  { name: 'West London', path: '/areas' },
];

// TODO: Placeholder figures until real verified business stats are supplied.
export const STATS = [
  {
    id: 'response-time',
    value: 20,
    prefix: '',
    suffix: 'm',
    label: 'Average response',
    detail: 'Fast dispatch across London',
  },
  {
    id: 'hours',
    value: 24,
    prefix: '',
    suffix: '/7',
    label: 'Emergency support',
    detail: 'Day, night and holidays',
  },
  {
    id: 'fixed-quotes',
    value: 100,
    prefix: '',
    suffix: '%',
    label: 'Upfront quotes',
    detail: 'Price agreed before we travel',
  },
  {
    id: 'call-out-fee',
    value: 0,
    prefix: '£',
    suffix: '',
    label: 'Call-out charge',
    detail: 'Pay only for completed work',
  },
];

// TODO: DBS-check status and insurance details to be verified by business owner before publishing as certified fact.
export const ABOUT_SUMMARY = {
  heading: 'A locksmith who answers the phone',
  paragraphs: [
    'When you call UK Locksmith LTD, you speak straight to a local tradesperson who knows London streets and lock systems. No call centre hold music or third-party dispatch agents. We confirm who is coming, what it will cost, and how fast we can reach you.',
    'We focus on non-destructive entry first, saving your door and keeping costs sensible. Our engineers are vetted, fully insured, and DBS-checked (pending business confirmation), and we never commence work until you have approved the fixed quote.',
  ],
  pullQuote: 'No call centre runaround. Just a straight answer, a fixed quote, and an engineer on the road.',
  buttonText: 'More about us',
};

export const FEATURES = [
  {
    id: 'quick-response',
    title: 'Quick response',
    text: 'A local locksmith dispatched straight to your London address.',
  },
  {
    id: 'price-upfront',
    title: 'Price upfront',
    text: 'A clear fixed quote agreed over the phone before we travel.',
  },
  {
    id: 'vetted-engineers',
    title: 'Vetted engineers',
    text: 'Experienced tradespeople equipped for British Standard locks.',
  },
  {
    id: 'damage-free',
    title: 'Damage-free entry',
    text: 'Non-destructive opening techniques used whenever possible.',
  },
  {
    id: 'hours',
    title: `Open ${HOURS}`,
    text: 'Available for lockouts day, night, weekends, and holidays.',
  },
];

export const SERVICES = [
  {
    id: 'emergency-lockout',
    title: 'Emergency lockout',
    shortDesc: 'Fast, non-destructive door entry for houses, flats, and commercial properties across London.',
    longDesc: 'Locked out day or night? Our mobile engineers arrive fast with dedicated non-destructive picking tools to get you back inside without damaging your door or frame.',
    isPrimary: true,
  },
  {
    id: 'lock-change-repair',
    title: 'Lock change and repair',
    shortDesc: 'Replacing faulty cylinders, broken mortice locks, and upgrading to British Standard BS3621.',
    longDesc: 'Moved house or have a jammed mechanism? We supply and install high-security anti-snap euro cylinders, mortice deadlocks, and night latches.',
    isPrimary: true,
  },
  {
    id: 'snapped-key-extraction',
    title: 'Snapped key extraction',
    shortDesc: 'Careful removal of broken key pieces from locks without needing to replace the whole unit.',
    longDesc: 'Specialist extraction tools remove snapped blades cleanly, saving your cylinder and allowing you to use your spare keys.',
    isPrimary: false,
  },
  {
    id: 'upvc-door-locks',
    title: 'UPVC door & window locks',
    shortDesc: 'Multi-point mechanism repairs, gearbox replacements, and door alignment for UPVC and composite doors.',
    longDesc: 'Stiff handles or dropped doors fixed on the spot with genuine replacement gearboxes and keeps.',
    isPrimary: false,
  },
  {
    id: 'commercial-locks',
    title: 'Commercial & shutter locks',
    shortDesc: 'High-security locking systems, shutter padlocks, and digital code locks for London businesses.',
    longDesc: 'Heavy-duty security installations, master key systems, and office entry solutions tailored to commercial requirements.',
    isPrimary: false,
  },
  {
    id: 'burglary-repairs',
    title: 'Burglary repairs & boarding',
    shortDesc: 'Emergency securing, frame reinforcement, and immediate lock replacement following a break-in.',
    longDesc: 'Rapid response to secure compromised premises immediately, restore peace of mind, and fit insurance-approved hardware.',
    isPrimary: false,
  },
];

// TODO: Work guarantee duration and specific warranty terms must be confirmed by business owner before publishing.
export const WHY_US_STEPS = [
  {
    number: 1,
    title: 'One price said upfront',
    description: 'No estimates that inflate when the van arrives. We quote one clear, fixed price over the phone and honour it.',
  },
  {
    number: 2,
    title: 'Local engineers',
    description: 'Direct tradespeople operating across London boroughs, not a national call centre hundreds of miles away.',
  },
  {
    number: 3,
    title: `Open ${HOURS}`,
    description: 'Always on call 24/7 for urgent lockouts, snapped keys, and emergency security repairs.',
  },
  {
    number: 4,
    title: 'Work that is guaranteed',
    // TODO: Verify warranty duration with business owner
    description: 'Quality locks fitted to British Standards (BS3621) with manufacturer warranties and clean, precise installation.',
  },
];

// TODO: Replace with real verified customer reviews before launch.
export const TESTIMONIALS = [
  {
    id: 'review-1',
    name: 'Sarah M.',
    area: 'Islington',
    initial: 'S',
    quote: 'Locked out at 11pm after misplacing my bag on the tube. Phoned UK Locksmith LTD and spoke directly to an engineer. He arrived in under half an hour, picked the cylinder without any drill damage, and charged the exact price quoted over the phone. Proper honest tradesman.',
    rating: 5,
    caption: 'Sample review: Sarah M., Islington',
  },
  {
    id: 'review-2',
    name: 'David K.',
    area: 'Camden',
    initial: 'D',
    quote: 'Front door mortice lock jammed solid on Sunday morning. Got a clear fixed quote over the phone before he left. The engineer arrived with the right 5-lever British Standard lock on his van, fitted it cleanly, and cut three extra keys on site. Very straightforward service.',
    rating: 5,
    caption: 'Sample review: David K., Camden',
  },
  {
    id: 'review-3',
    name: 'Priya N.',
    area: 'Greenwich',
    initial: 'P',
    quote: 'Snapped a key off flush inside my patio door lock. Another national company wanted to drill the entire mechanism out and charge extortionate rates. UK Locksmith LTD extracted the snapped blade in ten minutes, kept my original lock, and saved me a huge replacement bill. Super impressed.',
    rating: 5,
    caption: 'Sample review: Priya N., Greenwich',
  },
];

export const CTA_STEPS = [
  {
    step: 1,
    title: 'Call us directly',
    desc: 'Speak to a local locksmith and tell us your London address and lock type.',
  },
  {
    step: 2,
    title: 'Get a fixed quote',
    desc: 'We agree the exact total price over the phone before the engineer dispatches.',
  },
  {
    step: 3,
    title: 'Fast on-site resolution',
    desc: 'An equipped tradesperson arrives to open, repair, or replace your lock cleanly.',
  },
];

// TODO: Specific arrival windows and price figures must be confirmed by business owner before publishing as certified fact.
export const FAQS = [
  {
    question: 'How quickly can a locksmith reach my address?',
    // TODO: Confirm official average arrival times with business owner
    answer: 'Arrival times depend on your specific London borough and current traffic conditions, but our mobile engineers are stationed across North, South, East, West, and Central London to ensure prompt response. When you call, we look up our nearest available van and give you an honest arrival estimate before setting off.',
  },
  {
    question: 'How much will it cost to open or fix my lock?',
    // TODO: Confirm fixed price bands or starting rates with business owner
    answer: 'We believe in 100% transparent pricing. You describe the problem and lock type over the phone, and we quote a clear, fixed price before we travel. We do not charge surprise call-out fees or inflate rates upon arrival. What we quote on the call is what you pay once the job is finished.',
  },
  {
    question: 'Will opening the door damage my lock or woodwork?',
    answer: 'In the vast majority of lockout cases, we use non-destructive entry methods, including professional lock picking and specialized bypass tools. This leaves your door, frame, and existing lock completely unharmed. If a mechanism has suffered internal mechanical failure and must be drilled, we will always explain this to you before beginning and have matching British Standard replacements ready on the van.',
  },
  {
    question: 'Are you genuinely open 24 hours a day?',
    answer: 'Yes. Our direct phone line is answered 24 hours a day, 7 days a week, 365 days a year. We do not forward calls to overseas call centres—you speak straight to an experienced tradesperson ready to dispatch an engineer.',
  },
  {
    question: 'Which areas of London do you cover?',
    answer: 'We provide full coverage across all Greater London boroughs and postcodes. Whether you are in Central London, North London, East London, South London, or West London, we have mobile units operating in your area.',
  },
  {
    question: 'Do I need to show proof of address before you let me in?',
    answer: 'Yes. For your safety and to comply with UK law, our engineers must verify that you are the lawful occupier or authorised keyholder. A valid photo ID with matching address, a current utility bill, tenancy agreement, or mail accessed immediately once inside the property will suffice.',
  },
  {
    question: 'How and when do I pay for the service?',
    // TODO: Confirm exact payment processor options with business owner
    answer: 'Payment is made directly to the engineer on site only after the work is completed and you have tested the lock and keys. We accept all major debit and credit cards as well as secure electronic bank transfers. You will receive an itemised receipt immediately.',
  },
  {
    question: 'Can you assist with landlord or tenant lock issues?',
    answer: 'Yes. We frequently work with tenants, private landlords, and London letting agents. If you are a tenant, we advise notifying your landlord before changing hardware. For landlords and property managers, we can provide formal invoices, master key installations, and key handover documentation.',
  },
];

// TODO: Replace with real verified photos before final client launch.
export const IMAGES = {
  hero: {
    src: heroDefault,
    srcSet: `${hero400} 400w, ${hero800} 800w, ${hero1200} 1200w, ${hero1600} 1600w`,
    alt: 'Locksmith hand carefully turning a solid brass key inside a night-latch cylinder lock on a London residential front entrance',
    width: 1600,
    height: 1000,
  },
  about: {
    src: aboutDefault,
    srcSet: `${about600} 600w, ${about800} 800w, ${about1200} 1200w`,
    alt: 'Close-up of a skilled tradesperson fitting a British Standard euro profile cylinder lock into a solid timber door mortice pocket',
    width: 1200,
    height: 900,
  },
  services: {
    'emergency-lockout': {
      src: serviceLockoutDefault,
      srcSet: `${serviceLockout400} 400w, ${serviceLockout800} 800w`,
      alt: 'Professional lock pick tool cleanly inserted into a brass rim cylinder keyway for non-destructive door entry',
      width: 800,
      height: 800,
    },
    'lock-change-repair': {
      src: serviceRepairDefault,
      srcSet: `${serviceRepair400} 400w, ${serviceRepair800} 800w`,
      alt: 'Brand new British Standard 5-lever mortice deadlock faceplate and solid brass bolt flush mounted into an oak door',
      width: 800,
      height: 800,
    },
    'snapped-key-extraction': {
      src: serviceExtractionDefault,
      srcSet: `${serviceExtraction400} 400w, ${serviceExtraction800} 800w`,
      alt: 'Specialist locksmith spiral key extraction tool pulling a broken brass key blade out of a cylinder lock',
      width: 800,
      height: 800,
    },
    'upvc-door-locks': {
      src: serviceUpvcDefault,
      srcSet: `${serviceUpvc400} 400w, ${serviceUpvc800} 800w`,
      alt: 'Multi-point door locking strip mechanism with precision steel hooks, rollers, and central gearbox along an open composite door',
      width: 800,
      height: 800,
    },
    'commercial-locks': {
      src: serviceCommercialDefault,
      srcSet: `${serviceCommercial400} 400w, ${serviceCommercial800} 800w`,
      alt: 'Heavy duty commercial shutter padlock and hardened steel security hasp locked on a London business security gate',
      width: 800,
      height: 800,
    },
    'burglary-repairs': {
      src: serviceBurglaryDefault,
      srcSet: `${serviceBurglary400} 400w, ${serviceBurglary800} 800w`,
      alt: 'Reinforced heavy duty steel strike plate and frame reinforcer securely screwed into a solid timber door frame',
      width: 800,
      height: 800,
    },
  },
  whyUs: {
    src: whyUsDefault,
    srcSet: `${whyUs600} 600w, ${whyUs800} 800w, ${whyUs1200} 1200w`,
    alt: 'Locksmith tools including lock picks, tension wrenches, caliper, brass keys, and disassembled euro cylinder neatly laid out',
    width: 1200,
    height: 900,
  },
  ctaBg: {
    src: ctaBgDefault,
    srcSet: `${ctaBg800} 800w, ${ctaBg1200} 1200w, ${ctaBg1920} 1920w`,
    alt: 'Out of focus background view of a calm residential London Georgian street under overcast daylight',
    width: 1920,
    height: 800,
  },
};

