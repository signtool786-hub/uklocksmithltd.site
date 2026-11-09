import fs from 'fs';
import { AREAS } from '../src/data/areas.js';

const pilotAreas = {
  barnet: {
    heroLine: 'Prompt mobile lock opening, lock replacements, and door repairs across Barnet.',
    intro: `We run a mobile locksmith service across Barnet for homeowners, private tenants, and local shopkeepers. If you are stuck outside on the driveway or your key refuses to turn inside the mortice lock, we can help. When you dial our number, you speak directly with an engineer who understands lock hardware. We do not pass your call through a distant call centre or quote low rates that double when we turn up at your door. Every price is agreed before our van sets off. We carry picks, bypass tools, and British Standard replacement locks so that most jobs wrap up in a single visit. Getting you safely back indoors without wrecking your door frame is our primary focus. We treat your property with genuine care, clean up any shavings, and leave you with fresh keys and a working lock.`,
    commonProblems: [
      {
        title: 'Jammed multi-point mechanisms on composite doors',
        description: 'Suburban family properties in Barnet frequently feature multi-point uPVC or composite entrance doors that stick when the weather shifts. We realign the door hinges, adjust the strike keep boxes, and replace damaged gearboxes so the handle lifts smoothly again.',
      },
      {
        title: 'Worn five-lever mortice deadlocks on timber doors',
        description: 'Older residential properties often rely on traditional wooden doors fitted with British Standard deadlocks that grow stiff over decades. We lubricate internal levers, recut misaligned mortice pockets, or install a fresh BS3621 deadlock with new keys.',
      },
      {
        title: 'Key snapping inside patio or French door cylinders',
        description: 'Back garden access doors take heavy seasonal use, leading to strained brass keys twisting and snapping off flush in the lock face. We extract the snapped blade using miniature spiral extractors without drilling the barrel.',
      },
      {
        title: 'Commercial security shutter lock failures on high street shops',
        description: 'Local retail units and independent businesses across Barnet rely on bullet locks and shutter padlocks that take weather beating. We service jammed bullet pins, drill off seized padlocks cleanly, and fit hardened steel replacements on site.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can you get to a lockout in Barnet?',
        answer: 'We dispatch mobile engineers directly across Barnet. When you call, we look at the immediate traffic and your postcode to give you an exact arrival estimate before confirming the booking.',
      },
      {
        question: 'Can you open my timber door without drilling the lock in Barnet?',
        answer: 'Yes. Our standard practice is non-destructive entry. We use lock picks, bypass cards, and lever decoders first. Drilling is an absolute last resort only used if the lock mechanism has suffered catastrophic internal mechanical failure.',
      },
      {
        question: 'Do you fit British Standard insurance-rated locks to suburban Barnet homes?',
        answer: 'Yes. Our service vans carry BS3621 mortice deadlocks and 3-star anti-snap euro cylinders tested to TS007 standards, ensuring your home complies fully with UK home insurance policies.',
      },
    ],
    nearbySlugs: ['finchley', 'enfield', 'potters-bar', 'archway', 'brent'],
  },

  fulham: {
    heroLine: 'Emergency lockouts, lock replacements, and security upgrades throughout Fulham.',
    intro: `Locked out of a Victorian terrace or modern riverside apartment in Fulham? We provide clear, practical locksmith assistance whenever lock troubles disrupt your plans. Keys get misplaced in cafes, slip down sofa cushions, or snap inside brass cylinders after years of daily wear. When that happens, we come straight to your location. You talk directly with a working locksmith from the first ring. We explain what needs doing, quote one straightforward figure, and stick to that number. Our first step is always non-destructive picking or gentle latch manipulation to spare your front door from damage. If a damaged gearbox or obsolete lock requires replacement, we install robust British Standard hardware that meets home insurance criteria. You receive clear communication, clean workmanship, and working keys before we depart.`,
    commonProblems: [
      {
        title: 'Night-latch slippage on converted Victorian flat doors',
        description: 'Many converted period flats in Fulham have traditional rim night latches that accidentally slam shut behind tenants without keys. We manipulate the latch using non-destructive slipping cards or bypass shims within minutes.',
      },
      {
        title: 'Stiff five-lever mortice sashlocks on period timber entrances',
        description: 'Grand Victorian and Edwardian timber front doors frequently suffer from settling frames that throw the bolt out of alignment with the frame keep. We chisel and reset the brass strike plate and overhaul the internal lever pack.',
      },
      {
        title: 'Worn communal entrance euro cylinders in mansion blocks',
        description: 'Shared front entrance doors endure hundreds of key turns each week, eroding internal brass pins until keys stop engaging. We swap out the worn mechanism for a heavy-duty, anti-pick cylinder keyed for the building residents.',
      },
      {
        title: 'Faulty window locks and sash stops on ground-floor apartments',
        description: 'Ground-floor properties along Fulham residential streets require fully functioning sash stops and casement locks for insurance compliance. We replace rounded screw heads, fit insurance-rated key-operated sash fasteners, and test every catch.',
      },
    ],
    faqs: [
      {
        question: 'I live in a mansion block flat in Fulham. Can you replace the communal entry lock?',
        answer: 'We can replace and service flat front door locks and communal cylinders. For communal outer doors, building management or resident committee authorization is required so we can supply matching keys for all residents.',
      },
      {
        question: 'Do your locksmiths carry locks for Fulham Victorian front doors?',
        answer: 'Yes. We stock classic brass rim night latches, narrow-style cylinders, and British Standard five-lever sashlocks specifically suited for period timber doors found across Fulham.',
      },
      {
        question: 'How much will it cost to let me back into my Fulham flat?',
        answer: 'We quote a clear fixed price over the phone before we travel based on the type of lock fitted to your door. The figure we quote is the figure you pay on completion.',
      },
    ],
    nearbySlugs: ['hammersmith', 'chelsea', 'wandsworth', 'battersea', 'kensington'],
  },

  ilford: {
    heroLine: 'Non-destructive entry, key extraction, and multi-point lock repairs across Ilford.',
    intro: `Whether you live in a terraced family house near the station or run a busy commercial unit in Ilford, finding yourself locked outside causes immediate stress. Our locksmiths respond throughout Ilford with fully equipped mobile units. We handle jammed uPVC multi-point locking strips, stiff euro profile barrels, and misplaced house keys day and night. Calling us connects you with the tradesperson doing the job, not a generic call handler. We give you an honest appraisal and a firm price before leaving for your address. By applying non-invasive picking techniques first, we gain entry without chewing up wooden woodwork or cracking composite frames. When security components are broken beyond repair, we fit quality BS3621 replacements on the spot. We make the entire process calm, fast, and completely transparent.`,
    commonProblems: [
      {
        title: 'Misaligned uPVC multi-point gearboxes on modern family homes',
        description: 'Seasonal ground movement and heavy daily use in Ilford can cause uPVC multi-point hooks to bind tightly against the frame keeps. We reset the multi-point strip, replace the central gearbox mechanism, and tune the rollers for effortless locking.',
      },
      {
        title: 'Snapped keys inside front door rim cylinders',
        description: 'Commuters rushing out in the morning often pull on keys at an angle, snapping the thin brass keyway off inside the cylinder. We extract the broken fragment cleanly using micro-extractor needles and cut replacement keys immediately.',
      },
      {
        title: 'Seized roller shutter padlocks on commercial units',
        description: 'Shops and warehouse units along Ilford busy thoroughfares rely on heavy ground anchor padlocks that seize from road grit and rain. We pick or cleanly remove seized lock housings and supply heavy-duty, weather-shielded replacements.',
      },
      {
        title: 'Tenancy turnover cylinder changes on rented properties',
        description: 'Landlords and letting agents frequently require fast lock changes between lets to ensure previous keyholders cannot return. We swap the old barrels for British Standard anti-snap euro profile locks and hand over sealed packs of new keys.',
      },
    ],
    faqs: [
      {
        question: 'My uPVC door handle is stuck up and will not lock. Can you repair it in Ilford?',
        answer: 'Yes. In most cases, the central gearbox or locking strip needs replacement or realignment. We carry replacement gearboxes for all major uPVC multi-point lock brands in our van and can fix it on the same visit.',
      },
      {
        question: 'Can you help if I snapped my key in the lock before heading to Ilford station?',
        answer: 'Yes. We use specialist spiral key extraction tools to slide the broken fragment out of the cylinder without harming the internal pins, saving you the cost of a full lock replacement.',
      },
      {
        question: 'Do you supply invoices for Ilford landlords and letting agencies?',
        answer: 'Yes. We regularly carry out lock changes, master key installations, and emergency entries for local landlords and property managers, providing written VAT receipts and job reports immediately upon completion.',
      },
    ],
    nearbySlugs: ['barking', 'stratford', 'leyton', 'rainham', 'walthamstow'],
  },

  islington: {
    heroLine: 'Rapid lockout assistance, period timber door repairs, and British Standard lock fitting in Islington.',
    intro: `Islington properties feature a unique mix of Georgian townhouses, converted flats, and lively retail storefronts. Many entrances still rely on traditional timber rim latches alongside modern deadlocks. When a latch slips shut behind you or an old five-lever lock jams tight, we can sort it quickly. We operate locally across Islington, arriving with specialised lock decoding equipment and precision picks. You will not deal with automated phone systems; our locksmith answers the phone, listens to your situation, and specifies the exact charge upfront. Destructive drilling remains our absolute last resort. In the vast majority of lockouts, we pick open the cylinder and leave your existing lock intact. Should a fresh lock installation be necessary, we stock insurance-rated hardware that fits seamlessly into period timber doors.`,
    commonProblems: [
      {
        title: 'Slammed rim latches on converted Georgian townhouses',
        description: 'Upper-floor flats across Islington often feature self-locking Yale-style rim latches that latch shut when residents take out the bins. We reach your floor, slip the latch open without marking the timber frame, and restore entry immediately.',
      },
      {
        title: 'Antique mortice deadlocks sticking in solid oak doors',
        description: 'Period properties in Islington still boast original heavy timber doors where century-old mortice pockets collect dust and seize up. We dismantle the lock case, clean the levers, fabricate custom keys, or fit a compatible BS3621 replacement.',
      },
      {
        title: 'Jammed multi-point locks on garden maisonette patio doors',
        description: 'Lower-ground garden conversions frequently experience damp and door drop that misaligns the lower shoot-bolts. We re-hang the door sash, clear debris from the track, and replace broken gearbox components.',
      },
      {
        title: 'Shopfront pin-tumbler lock failures on Upper Street',
        description: 'Boutiques, cafes, and offices along Islington commercial streets require quick repairs when mortice cylinders or narrow stile locks bind. We service narrow backset deadlatches and install high-security anti-drill cylinders before opening hours.',
      },
    ],
    faqs: [
      {
        question: 'Will picking my period Georgian door lock damage the antique wood in Islington?',
        answer: 'No. We manipulate only the internal tumblers or latch mechanisms using non-invasive picks and shims. Your historic timber woodwork, decorative paint, and surrounding door frame remain completely untouched.',
      },
      {
        question: 'Can you replace the locks after moving into a newly bought home in Islington?',
        answer: 'Yes. We recommend changing external cylinders immediately upon moving into any property. We can inspect every external entrance and fit matching high-security anti-snap locks throughout.',
      },
      {
        question: 'What payment methods do your mobile locksmiths accept in Islington?',
        answer: 'We take all major debit and credit cards on site via secure mobile card readers, as well as bank transfers and cash. You pay only after the work is completed and you have tested the new keys.',
      },
    ],
    nearbySlugs: ['holloway', 'archway', 'camden', 'hackney', 'shoreditch'],
  },

  wembley: {
    heroLine: 'Direct locksmith response for homes, flats, and retail premises in Wembley.',
    intro: `Living or trading around Wembley means relying on secure doors, from modern residential developments and semi-detached homes to busy high street premises. If a key twists and snaps off in a lock cylinder or your multi-point door handle spins loosely without latching, our Wembley locksmiths are ready to assist. You will always speak directly with a knowledgeable locksmith on the telephone. We never surprise you with hidden mileage or fuel surcharges; our quotation covers the complete job before we start our engine. We specialise in extracting broken key fragments cleanly and picking domestic locks without leaving marks. When new security hardware is required, we supply high-security anti-snap euro cylinders and robust mortice locks right from our mobile inventory to restore your building safety immediately.`,
    commonProblems: [
      {
        title: 'Spun handles on multi-point composite doors',
        description: 'Modern residential developments in Wembley often feature multi-point composite doors where the spindle slips or the central gearbox breaks. We unjam the locked mechanism safely, fit an upgraded gearbox, and align the latch receivers.',
      },
      {
        title: 'Snapped keys in anti-snap euro cylinders',
        description: 'Residents attempting to force stiff apartment locks can snap key blades deep inside high-security keyways. We use precision extractor wires to retrieve the broken piece without requiring an expensive replacement barrel.',
      },
      {
        title: 'Commercial shutter locks jammed at business parks',
        description: 'Retailers and light industrial units around Wembley rely on roller shutters that stick when bullet locks jam in their housings. We release stuck pins, clear track blockages, and supply keyed-alike replacement bullet sets.',
      },
      {
        title: 'Post-break-in timber frame and lock reinforcement',
        description: 'When a property has been subjected to forced entry, door frames can crack around the strike plate and mortice pocket. We install heavy steel Birmingham bars, repair the wooden jamb, and install reinforced five-lever deadlocks.',
      },
    ],
    faqs: [
      {
        question: 'Can you fix jammed roller shutters or shop doors in Wembley?',
        answer: 'Yes. We repair bullet locks, heavy-duty shutter padlocks, and narrow-stile aluminium commercial door locks for retail units, industrial premises, and local businesses across Wembley.',
      },
      {
        question: 'Are your locksmiths DBS-checked and insured to work in Wembley?',
        answer: 'Yes. All our technicians are fully vetted, DBS-checked, and carry comprehensive public liability insurance coverage for domestic and commercial assignments.',
      },
      {
        question: 'Do you charge an extra call-out fee on top of the quoted price in Wembley?',
        answer: 'No. We believe in transparent pricing. The fixed quote given over the phone covers the call-out, labour, and parts agreed upon. There are no hidden travel charges or mileage additions.',
      },
    ],
    nearbySlugs: ['brent', 'harrow', 'acton', 'ealing', 'kilburn'],
  },

  clapham: {
    heroLine: 'Prompt lock opening, latch repairs, and complete cylinder changes across Clapham.',
    intro: `Locked outside your flat after an evening out in Clapham? We know how frustrating it feels to be standing on the doorstep waiting for help. We operate an active mobile locksmith van across Clapham to help residents, landlords, and shop owners gain access safely. When you call, you reach a hands-on engineer rather than an answering service. We give you a clear, fixed quote over the phone so you know the exact cost before we set out. Our focus is non-destructive entry: using specialised tension tools and lock picks, we open jammed night latches and deadbolts without splintering the woodwork. If your existing lock is faulty or you want the keys changed following a tenancy turnover, we install fresh insurance-compliant British Standard cylinders on the spot.`,
    commonProblems: [
      {
        title: 'Accidental lockouts from automatic rim latches',
        description: 'Victorian conversions around Clapham Common commonly feature rim latches that lock automatically on closing. We deploy non-invasive mica shims and bypass tools to open the latch without leaving a scratch on the painted door.',
      },
      {
        title: 'Snapped keys in weathered garden gate locks',
        description: 'Side gates and bike sheds around Clapham terraced houses use padlocks and rim locks that rust from rain exposure. We pull broken key shanks out of corroded keyways, treat the lock mechanism with graphite lubricant, and cut fresh spares.',
      },
      {
        title: 'Worn euro profile cylinders on balcony and patio doors',
        description: 'Balcony and garden doors on newer apartment blocks suffer from stiff euro cylinders caused by grime buildup. We strip the handles, inspect the cylinder cams, and install anti-snap, anti-bump replacements.',
      },
      {
        title: 'Tenancy turnover lock upgrades for shared flats',
        description: 'With frequent flat-sharing turnovers across Clapham, property managers often need locks changed swiftly on moving day. We replace front entrance and individual bedroom mortice locks with insurance-rated British Standard units.',
      },
    ],
    faqs: [
      {
        question: 'I lost my keys on a night out in Clapham. Can you change my locks tonight?',
        answer: 'Yes. We operate round the clock. We can let you back inside your home safely and immediately fit brand new British Standard lock cylinders, supplying fresh keys on the spot so you can sleep securely.',
      },
      {
        question: 'Can you upgrade my flat locks to comply with my tenancy agreement in Clapham?',
        answer: 'Yes. We install high-security 3-star diamond-rated anti-snap euro cylinders and BS3621 mortice deadlocks that satisfy both letting agents and insurance underwriters.',
      },
      {
        question: 'How do you verify proof of residency before opening a door in Clapham?',
        answer: 'To protect property owners and tenants, we ask for proof of occupancy, such as photo ID matching the address, a tenancy agreement, or utility bill shown on your phone or once we gain access.',
      },
    ],
    nearbySlugs: ['battersea', 'brixton', 'wandsworth', 'streatham', 'tooting'],
  },
};

// Validate everything
const slugSet = new Set(AREAS.map((a) => a.slug));
const forbiddenWords = ['reliable', 'trusted', 'accredited', 'approved', 'best', 'your city'];
let errors = 0;

for (const [slug, data] of Object.entries(pilotAreas)) {
  if (!slugSet.has(slug)) {
    console.error(`Unknown slug: ${slug}`);
    errors++;
  }
  for (const n of data.nearbySlugs) {
    if (!slugSet.has(n)) {
      console.error(`Nearby slug not in AREAS: ${n} in ${slug}`);
      errors++;
    }
  }
  const words = data.intro.trim().split(/\s+/);
  if (words.length < 120 || words.length > 180) {
    console.error(`Intro word count error in ${slug}: ${words.length}`);
    errors++;
  }
  const fullText = JSON.stringify(data).toLowerCase();
  for (const f of forbiddenWords) {
    if (new RegExp(`\\b${f}\\b`, 'i').test(fullText)) {
      console.error(`Forbidden word '${f}' in ${slug}`);
      errors++;
    }
  }
}

console.log(`Pilot data validation complete. Errors: ${errors}`);

if (errors === 0) {
  const content = `// Pilot areas data (Barnet, Fulham, Ilford, Islington, Wembley, Clapham)
export const PILOT_AREAS = ${JSON.stringify(pilotAreas, null, 2)};
`;
  fs.writeFileSync('src/data/pilot-areas.js', content, 'utf8');
  console.log('Saved src/data/pilot-areas.js successfully.');
}

