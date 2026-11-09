import fs from 'fs';
import { AREAS } from '../src/data/areas.js';
import { PILOT_AREAS as CURRENT_COMPLETED } from '../src/data/pilot-areas.js';

const newBatch = {
  mayfair: {
    heroLine: 'Discreet non-destructive door opening, lock upgrades, and fine hardware fitting in Mayfair.',
    intro: `Facing an unexpected lock issue in Mayfair? We deliver discrete, skilled locksmith services tailored for historic Georgian townhouses, luxury mansion apartments, and private art galleries. Mayfair entrances often boast bespoke architectural brassware, solid oak front doors, and dual-locking deadbolts. When an automatic latch sticks or keys go missing down South Audley Street or Mount Street, we attend with specialist non-destructive bypass tools. You speak directly with a seasoned engineer who respects fine joinery and heritage woodwork. We confirm the full cost before travelling, so pricing stays completely transparent. Destructive drilling remains our absolute last option. In the vast majority of visits, we manipulate the lock tumblers cleanly and leave your woodwork pristine. If you require enhanced security, we install high-specification British Standard locks that match the period character of your building.`,
    commonProblems: [
      {
        title: 'Jammed high-security rim latches on heavy panelled entrance doors',
        description: 'Heavy timber entrance doors in Mayfair often feature secondary deadlocking night latches that accidentally catch on latch keepers. We use delicate bypass shims and non-marking tension tools to open the door without disturbing polished wood.',
      },
      {
        title: 'Antique lever deadlocks binding inside thick hardwood frames',
        description: 'Decades of settling can throw five-lever mortice bolts slightly out of line with their brass keeps. We ease the internal mechanism, lubricate the levers with dry graphite, and reset the strike pocket so the key turns smoothly.',
      },
      {
        title: 'Lost security keys for art galleries and boutique storefronts',
        description: 'High-end retail premises and galleries along Mount Street and nearby avenues require swift rekeying when keys are misplaced. We supply restricted-profile euro cylinders, cut precision replacement keys, and fit anti-drill escutcheons.',
      },
      {
        title: 'Concealed sash window lock failures in listed apartments',
        description: 'Apartments in heritage buildings require functioning window locks for home insurance without disrupting period aesthetics. We repair vintage sash fasteners, replace seized locking pins, and verify smooth catch operation.',
      },
    ],
    faqs: [
      {
        question: 'Can your locksmiths open Mayfair doors without damaging historic joinery?',
        answer: 'Yes. Non-destructive entry is our primary method. We use delicate picking techniques and bypass tools that leave antique timber doors, painted finishes, and architectural brassware completely unmarked.',
      },
      {
        question: 'Do you carry British Standard locks in period brass and bronze finishes?',
        answer: 'Yes. Our mobile workshop stocks BS3621 mortice deadlocks and high-security cylinders in polished brass, satin chrome, and antique bronze finishes to complement period entrances.',
      },
      {
        question: 'How quickly can an engineer attend a lockout in Mayfair?',
        answer: 'We dispatch mobile units across central London daily. When you call, we evaluate local traffic conditions and your exact street location to give an exact arrival estimate before confirming.',
      },
    ],
    nearbySlugs: ['marylebone', 'soho', 'fitzrovia', 'westminster', 'kensington'],
  },

  ealing: {
    heroLine: 'Direct mobile lock opening, lock replacements, and composite door repairs across Ealing.',
    intro: `Locked outside your property in Ealing? We operate a fully equipped mobile locksmith van assisting suburban homeowners, flat tenants, and local shop owners daily across the area. From spacious Edwardian houses near Pitshanger and Ealing Broadway to modern apartment developments around Northfields, lock problems can disrupt any schedule. When you ring our direct line, you talk straight to an active tradesperson who understands door hardware. We explain what needs doing and quote a fixed figure before our vehicle leaves. Our technicians arrive prepared for non-invasive entry: we pick lock cylinders and ease caught latches without damaging your timber or composite frame. If your uPVC multi-point locking mechanism is broken or you want new cylinders fitted after moving into a new home, we supply British Standard insurance-rated hardware right on site.`,
    commonProblems: [
      {
        title: 'Stiff multi-point door handles on suburban composite front doors',
        description: 'Edwardian and 1930s homes fitted with modern composite doors often suffer from dropped hinges that make lifting handles difficult. We realign the door sash, adjust the strike boxes, and replace strained gearboxes for effortless closing.',
      },
      {
        title: 'Snapped keys inside narrow euro cylinders on garden French doors',
        description: 'Garden access doors endure heavy seasonal use, leading to worn brass keys twisting and breaking off in the barrel. We use micro-spiral extraction needles to remove the broken fragment cleanly without replacing the lock.',
      },
      {
        title: 'Seized five-lever mortice deadlocks on timber porch entrances',
        description: 'Timber porches and vestibule doors collect moisture over winter, causing internal steel levers to rust and jam. We clean out the lock case, lubricate the levers with graphite, or install a compliant BS3621 replacement.',
      },
      {
        title: 'Commercial security shutter lock failures on high street shops',
        description: 'Retail units and takeaways across Ealing rely on bullet locks and floor padlocks that seize from road grit. We free stuck bullet pins, drill seized padlocks cleanly without track damage, and fit heavy-duty replacements.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can your locksmith reach an address in Ealing?',
        answer: 'We dispatch mobile vans throughout Ealing every day. When you call, we check immediate traffic and your postcode to provide an accurate arrival window before booking.',
      },
      {
        question: 'Can you repair my uPVC door mechanism instead of replacing the entire door in Ealing?',
        answer: 'Yes. In the vast majority of cases, only the central gearbox or locking strip needs replacement. We carry universal replacement parts for all major brands in our van.',
      },
      {
        question: 'Do you fit locks that satisfy home insurance requirements in Ealing?',
        answer: 'Yes. We supply and fit British Standard BS3621 mortice deadlocks and 3-star diamond-rated anti-snap euro cylinders that meet all UK insurer standards.',
      },
    ],
    nearbySlugs: ['acton', 'chiswick', 'harrow', 'wembley', 'southall'],
  },

  luton: {
    heroLine: 'Mobile lock opening, lock changes, and key extraction across Luton.',
    intro: `Locked out or dealing with a broken door lock in Luton? We provide mobile locksmith services for family houses, terraced properties, and commercial units. Arrival time depends on distance and is confirmed when you call. When you dial our number, you speak straight to an experienced tradesperson who knows lock hardware. We listen to the problem and provide an upfront fixed quote before setting off. Our primary focus is non-destructive entry: using specialised picks and bypass tools, we gain access without damaging door frames or woodwork. We understand that modern housing developments and industrial estates feature diverse security systems. Should your multi-point lock fail or you need locks changed following a tenancy transition, our van carries British Standard deadlocks and anti-snap euro cylinders to finish the job promptly.`,
    commonProblems: [
      {
        title: 'Jammed multi-point gearboxes on modern family composite doors',
        description: 'Residential properties across Luton often feature uPVC or composite entrance doors that stick when hinges settle. We realign the door sash, replace broken centre gearboxes, and adjust roller keeps for smooth locking.',
      },
      {
        title: 'Keys snapped off inside front door rim night latches',
        description: 'Rushing commuters often twist keys at an awkward angle, snapping the thin brass keyway off inside the cylinder. We extract the broken fragment cleanly using micro-extractor tools and supply freshly cut keys on site.',
      },
      {
        title: 'Industrial unit roller shutter and security gate lock failures',
        description: 'Commercial units and warehouses around Luton depend on heavy-duty shutter bullet locks and hardened padlocks that seize from weather exposure. We pick or cleanly remove seized lock housings and supply replacement locksets.',
      },
      {
        title: 'Tenancy turnover lock changes on rental properties',
        description: 'Landlords and letting agents frequently require quick cylinder changes between tenancies to prevent previous keyholders returning. We fit insurance-rated anti-snap euro profile locks and supply sealed sets of new keys.',
      },
    ],
    faqs: [
      {
        question: 'How do you confirm arrival times for callouts in Luton?',
        answer: 'Arrival time depends on distance and is confirmed when you call. We discuss your exact address and current travel conditions so you have a realistic schedule before we dispatch.',
      },
      {
        question: 'Can your locksmith open my locked door without drilling in Luton?',
        answer: 'Yes. Non-destructive picking and bypass techniques are always our first approach. We drill only as an absolute last resort if the lock mechanism has suffered total internal mechanical failure.',
      },
      {
        question: 'Do you supply formal invoices for landlords and businesses in Luton?',
        answer: 'Yes. We provide complete VAT invoices, written completion reports, and job documentation immediately after finishing work for property owners and businesses.',
      },
    ],
    nearbySlugs: ['leighton-buzzard', 'milton-keynes', 'watford', 'potters-bar'],
    // TODO: Confirm with the business that this area is covered.
  },

  basildon: {
    heroLine: 'Mobile door opening, cylinder replacements, and shutter lock repairs in Basildon.',
    intro: `Need practical locksmith assistance in Basildon? We assist homeowners, commercial tenants, and industrial facility operators with all lock and key emergencies. Arrival time depends on distance and is confirmed when you call. Calling us connects you directly with a working locksmith, not a third-party booking desk. We evaluate what lock you have and state a firm price before our van sets off. We know that residential estates and commercial parks across Basildon feature a mix of uPVC composite doors and heavy industrial entrances. Our technicians use specialised lock picks and bypass tools to open doors cleanly without damage. When hardware is broken beyond repair or security needs upgrading, our mobile inventory carries British Standard deadlocks and anti-snap cylinders to complete the job in one visit.`,
    commonProblems: [
      {
        title: 'Dropped uPVC front doors jamming multi-point locking hooks',
        description: 'Modern housing estates in Basildon frequently experience dropped door sashes where multi-point hooks jam tight against the frame. We re-hang the door, adjust the strike plates, and replace stripped gearbox mechanisms.',
      },
      {
        title: 'Seized shutter padlocks and bullet locks at commercial parks',
        description: 'Industrial estates and trade counters in Basildon rely on ground-anchor padlocks and shutter bullets that seize from road grit and rain. We pick or drill seized padlocks cleanly and install weather-shielded replacements on site.',
      },
      {
        title: 'Snapped keys inside cylinder locks on patio and back doors',
        description: 'Rear garden access doors endure regular exposure, causing keys to twist and snap off flush inside the barrel. We use precision spiral extractors to pull out the broken piece without needing a full barrel replacement.',
      },
      {
        title: 'Tenancy turnover lock upgrades for private rented homes',
        description: 'Letting agents and landlords regularly need locks changed swiftly when tenancies conclude. We install insurance-rated anti-snap euro profile cylinders and supply sealed sets of fresh keys on the spot.',
      },
    ],
    faqs: [
      {
        question: 'How is the arrival time confirmed for Basildon callouts?',
        answer: 'Arrival time depends on distance and is confirmed when you call. We check route conditions and your postcode directly so you know the schedule before our technician travels.',
      },
      {
        question: 'Can you repair commercial shutters and business locks in Basildon?',
        answer: 'Yes. We service bullet locks, heavy-duty shutter padlocks, and narrow-stile aluminium entrance locks for warehouses, industrial units, and retail shops across Basildon.',
      },
      {
        question: 'Do you charge an extra call-out charge on top of your quote in Basildon?',
        answer: 'No. We believe in clear pricing. The fixed quote agreed over the phone is the exact total you pay upon completion, covering call-out, labour, and parts.',
      },
    ],
    nearbySlugs: ['rainham', 'barking', 'harlow', 'ilford'],
    // TODO: Confirm with the business that this area is covered.
  },

  marylebone: {
    heroLine: 'Non-destructive door entry, lock upgrades, and latch repairs throughout Marylebone.',
    intro: `Locked out of a flat or townhouse in Marylebone? We provide prompt, careful locksmith services for residents, commercial offices, and medical practices across the district. Marylebone architecture combines stately Georgian terraces, mansion apartments, and contemporary mews houses. When an automatic night latch clicks shut or an old mortice lock jams, our mobile units respond equipped for non-invasive entry. You talk directly with an experienced locksmith on the phone, not a distant call centre. We confirm an exact, all-inclusive price before our engineer sets off. We pick lock cylinders and ease latches open without leaving splinter marks or scratches on fine timber doors. If replacement hardware is required, we carry insurance-compliant British Standard locks that fit seamlessly into period wooden entrances.`,
    commonProblems: [
      {
        title: 'Slammed automatic rim latches on converted mansion flats',
        description: 'Mansion block apartments in Marylebone commonly feature rim latches that lock automatically when the door swings shut. We use delicate bypass cards and precision tools to open the door in minutes without woodwork damage.',
      },
      {
        title: 'Stiff five-lever mortice deadlocks on period mews front doors',
        description: 'Mews properties and Georgian entrances often have classic five-lever mortice locks that grow stiff from dust and minor door settling. We dismantle the lock case, clean the levers, or install a compliant BS3621 replacement.',
      },
      {
        title: 'Commercial office and medical clinic master key issues',
        description: 'Clinics, consulting rooms, and offices along Harley Street and surrounding avenues require secure, organized key suites. We re-pin worn lock cylinders, install restricted keyway barrels, and service master key suites on site.',
      },
      {
        title: 'Faulty sash window fasteners on lower-ground residences',
        description: 'Lower-ground and garden apartments require functioning key-operated sash locks to maintain home insurance cover. We repair vintage brass fasteners, fit concealed sash stops, and verify that all windows lock securely.',
      },
    ],
    faqs: [
      {
        question: 'Can you open a Marylebone period timber door without drill damage?',
        answer: 'Yes. Non-destructive entry is our primary method. We pick internal tumblers and ease latches open using delicate tools, leaving your antique door and paintwork completely unharmed.',
      },
      {
        question: 'How quickly can your locksmith reach an address in Marylebone?',
        answer: 'We operate mobile units across central London throughout the day and night. When you call, we evaluate local traffic and provide an exact arrival estimate before confirming.',
      },
      {
        question: 'Do you carry British Standard locks for Marylebone homes?',
        answer: 'Yes. Our mobile workshop stocks BS3621 mortice deadlocks and high-security anti-snap euro cylinders that comply with all UK household insurance policies.',
      },
    ],
    nearbySlugs: ['mayfair', 'fitzrovia', 'bloomsbury', 'camden', 'kilburn'],
  },

  lambeth: {
    heroLine: 'Emergency door opening, lock replacements, and timber door repairs across Lambeth.',
    intro: `Stuck on the doorstep of your Lambeth home? We provide fast, practical locksmith assistance for homeowners, private tenants, and commercial businesses across the borough. Whether your key broke inside the mortice lock or your door slipped shut while you stepped outside, our mobile engineers can help. Calling us connects you with the working engineer who will attend your property, not an impersonal operator. We give you an honest arrival estimate and a fixed quotation before dispatching our van. Non-destructive door opening is our first priority: we pick lock cylinders and ease latches open to protect your door and surrounding frame. When locks are worn, damaged, or need changing following a change of tenancy around Kennington or Waterloo, we install British Standard insurance-rated hardware on site.`,
    commonProblems: [
      {
        title: 'Jammed night latches on converted Victorian apartment doors',
        description: 'Victorian conversions throughout Lambeth often have spring latches that slip into deadlocked positions unexpectedly. We slide non-marking bypass tools into the frame gap to release the latch cleanly without woodwork splintering.',
      },
      {
        title: 'Worn mortice deadlocks on terraced timber front doors',
        description: 'Traditional terraced houses often rely on five-lever mortice deadlocks where levers stick from age and lack of lubrication. We service the lock mechanism, ease the strike pocket, or fit a fresh BS3621 insurance-rated replacement.',
      },
      {
        title: 'Communal entrance euro profile cylinder failures',
        description: 'Shared apartment building entrance doors endure continuous daily use, leading to worn internal pins that refuse keys. We replace the worn cylinder with a heavy-duty, anti-pick barrel keyed for all building residents.',
      },
      {
        title: 'High street retail shop door and shutter lock issues',
        description: 'Independent businesses and cafes across Lambeth require quick repairs when narrow-stile storefront locks or shutter padlocks bind. We service stuck locking pins, repair latch keepers, and fit high-security replacements.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can an emergency locksmith arrive at my flat in Lambeth?',
        answer: 'Our mobile engineers travel across Lambeth daily. When you call, we check current road conditions and your postcode to provide an accurate arrival window before booking.',
      },
      {
        question: 'Do you charge an extra call-out charge on top of the quote in Lambeth?',
        answer: 'No. We provide 100% transparent pricing. The quote agreed over the phone is the exact total you pay on completion, with no hidden travel fees or mileage surcharges.',
      },
      {
        question: 'Can you replace my locks today if I just moved into a Lambeth property?',
        answer: 'Yes. We carry a wide range of British Standard mortice deadlocks and anti-snap euro profile cylinders to replace external locks in a single visit.',
      },
    ],
    nearbySlugs: ['london-bridge', 'bermondsey', 'brixton', 'clapham', 'westminster'],
  },

  watford: {
    heroLine: 'Mobile door opening, lock changes, and uPVC repairs throughout Watford.',
    intro: `Locked outside or dealing with a broken door lock in Watford? We offer mobile locksmith services across town for suburban houses, modern apartments near the junction, and local commercial premises. Arrival time depends on distance and is confirmed when you call. When you phone us, you speak directly with an active tradesperson who understands door hardware. We listen to the issue and provide one clear, fixed figure before our vehicle heads out. Residential properties in Watford feature a wide variety of timber doors and multi-point composite systems. Our mobile van carries specialist picks and non-destructive bypass tools to open doors cleanly without damage. When a locking mechanism has stripped internally or you need fresh keys after moving, we stock British Standard deadlocks and anti-snap euro cylinders to complete the job on our initial visit.`,
    commonProblems: [
      {
        title: 'Stripped central gearboxes on composite entrance doors',
        description: 'Family homes near Cassiobury frequently suffer from stiff handles where internal gearbox cams shear from excessive force. We disassemble the handle assembly, install a matching replacement gearbox, and realign the keeps.',
      },
      {
        title: 'Snapped key extraction from front door euro cylinders',
        description: 'Commuters rushing during chilly mornings can twist brass keys unevenly, breaking the blade inside the lock plug. We employ micro-spiral extraction tools to remove the piece safely without damaging the cylinder.',
      },
      {
        title: 'Seized shutter bullet locks and ground padlocks on commercial units',
        description: 'Retail shops and commercial trade counters near Watford High Street depend on security shutters that bind from road dirt. We clean stuck pins, remove frozen padlocks without frame distortion, and supply replacement locksets.',
      },
      {
        title: 'Upgrading lock barrels for tenancy handovers in town centre flats',
        description: 'Letting agents and landlords need new cylinders installed promptly between tenancies to prevent unauthorized access. We fit British Standard anti-snap euro profile cylinders and supply sealed packs of new keys.',
      },
    ],
    faqs: [
      {
        question: 'How is the arrival time confirmed for Watford callouts?',
        answer: 'Arrival time depends on distance and is confirmed when you call. We check current route traffic and your postcode directly so you have a clear schedule before we dispatch.',
      },
      {
        question: 'Can your locksmith repair multi-point uPVC door locks in Watford?',
        answer: 'Yes. We carry an extensive selection of universal replacement gearboxes, locking strips, and handles in our mobile van to complete uPVC repairs on site.',
      },
      {
        question: 'Do you fit locks that meet UK home insurance requirements in Watford?',
        answer: 'Yes. We supply and fit British Standard BS3621 mortice deadlocks and TS007 3-star anti-snap cylinders meeting all UK insurance criteria.',
      },
    ],
    nearbySlugs: ['potters-bar', 'harrow', 'luton', 'leighton-buzzard'],
    // TODO: Confirm with the business that this area is covered.
  },

  harlow: {
    heroLine: 'Mobile lock opening, lock replacements, and composite door repairs in Harlow.',
    intro: `Facing an unexpected lock problem in Harlow? We assist householders, private landlords, and local business owners with all door security requirements. Arrival time depends on distance and is confirmed when you call. When you phone us, you talk directly with a practical locksmith rather than a call centre operator. We assess your door and lock type over the phone and agree a fixed price before our van sets out. We understand that properties across Harlow feature diverse residential doors and commercial business park entrances. Our first approach is always non-destructive entry: we pick lock cylinders and ease latches to gain access without damaging door frames. If your lock has jammed mechanically or you need new keys, we stock British Standard deadlocks and anti-snap euro cylinders in our mobile inventory.`,
    commonProblems: [
      {
        title: 'Stiff uPVC multi-point handles that refuse to lift and deadlock',
        description: 'Post-war and modern residential homes in Harlow often have uPVC doors where central gearboxes strip from force. We dismantle the handle plate, replace the broken gearbox mechanism, and adjust the roller keeps.',
      },
      {
        title: 'Snapped keys in garden shed and workshop padlocks',
        description: 'Garden workshops and side gates endure rain exposure, causing padlocks to rust and seize around the keyway. We extract snapped key blades cleanly, treat mechanisms with anti-corrosion lubricant, and supply spare keys.',
      },
      {
        title: 'Seized roller shutter bullet locks on industrial park units',
        description: 'Commercial units and trade counters around Harlow depend on shutter bullet locks that jam from road grit. We free stuck bullet pins, drill seized housings cleanly when necessary, and supply keyed-alike replacements.',
      },
      {
        title: 'Lock replacements for new homeowners and moving day handovers',
        description: 'Moving into a new property in Harlow means ensuring previous keyholders cannot access your home. We replace external cylinders with British Standard anti-snap euro barrels and hand over sealed packs of new keys.',
      },
    ],
    faqs: [
      {
        question: 'How do you confirm arrival times for Harlow bookings?',
        answer: 'Arrival time depends on distance and is confirmed when you call. We verify your exact street location and current travel conditions so you have an accurate schedule before we head out.',
      },
      {
        question: 'Can you open my front door in Harlow without drilling?',
        answer: 'Yes. Non-destructive picking and latch bypass are always our first methods. We drill only as an absolute last resort if internal components have suffered catastrophic mechanical failure.',
      },
      {
        question: 'Do you charge an extra call-out charge on top of your quote in Harlow?',
        answer: 'No. We believe in clear pricing. The fixed quote agreed over the phone is the exact total you pay upon completion, covering call-out, labour, and parts.',
      },
    ],
    nearbySlugs: ['potters-bar', 'enfield', 'walthamstow', 'basildon'],
    // TODO: Confirm with the business that this area is covered.
  },

  mitcham: {
    heroLine: 'Prompt mobile lock opening, lock repairs, and new keys throughout Mitcham.',
    intro: `Locked outside your property in Mitcham? We provide prompt, straightforward mobile locksmith services for homeowners, private tenants, and commercial businesses across the area. Whether your key snapped inside the lock cylinder or your night latch slipped shut while taking out the bins, we can help. When you dial our phone number, you talk straight to the engineer who will attend your address. We agree an all-inclusive price before our vehicle sets off, keeping costs clear and transparent. Our team focuses on non-destructive door entry: using specialist lock picks and bypass tools, we open doors cleanly without damaging woodwork or door frames. If your lock has suffered mechanical failure or you want new hardware after moving, we carry British Standard deadlocks and anti-snap cylinders to finish the job immediately.`,
    commonProblems: [
      {
        title: 'Accidentally locked rim latches on terraced front doors',
        description: 'Terraced properties around Mitcham often feature automatic rim night latches that lock shut when the door closes behind residents. We slide non-marking bypass cards and shims into the frame gap to release the latch in minutes.',
      },
      {
        title: 'Stiff five-lever mortice deadlocks on timber front entrances',
        description: 'Older timber doors frequently drop over time, causing mortice deadbolts to drag heavily against the brass frame keep. We adjust the strike plate, lubricate the levers with graphite, or install a compliant BS3621 replacement.',
      },
      {
        title: 'Jammed multi-point door mechanisms on composite patio doors',
        description: 'Rear garden access doors experience heavy daily use, leading to strained multi-point gearboxes that refuse to lock. We dismantle the door handle, replace the stripped central gearbox, and align all frame receivers.',
      },
      {
        title: 'Commercial shopfront narrow-stile lock failures on London Road',
        description: 'Retail units and local takeaways along London Road in Mitcham require fast repairs when narrow-profile aluminium door locks bind. We service stuck locking latches, adjust door closers, and install high-security euro cylinders.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can your locksmith reach an address in Mitcham?',
        answer: 'We dispatch mobile vans across south London daily. When you call, we evaluate immediate traffic and your postcode to provide an accurate arrival estimate before booking.',
      },
      {
        question: 'Will opening my door in Mitcham cause cosmetic damage?',
        answer: 'No. Our technicians specialise in non-destructive entry. We pick locks and ease latches open using precision tools, keeping your door, frame, and paintwork completely unharmed.',
      },
      {
        question: 'Can you replace my locks today to meet insurance standards in Mitcham?',
        answer: 'Yes. Our mobile workshop carries British Standard BS3621 mortice locks and 3-star diamond-rated anti-snap euro cylinders that comply with all UK household insurance policies.',
      },
    ],
    nearbySlugs: ['streatham', 'tooting', 'clapham', 'brixton', 'wandsworth'],
  },

  'potters-bar': {
    heroLine: 'Mobile door opening, lock replacements, and composite repairs in Potters Bar.',
    intro: `Need emergency locksmith help or replacement locks in Potters Bar? We assist local residents, bungalow owners, and small business managers across the district with prompt door support. Arrival time depends on distance and is confirmed when you call. When you reach out to our team, you speak with a qualified locksmith rather than an automated answering service. We evaluate your situation and give you a guaranteed fixed price before any van travels. Homes throughout Potters Bar combine post-war family properties with modern composite renovations. Our engineer arrives prepared with specialised decoders, picks, and slipping tools to let you back inside without marking your door frame. If your existing lock is corroded by damp weather or you wish to upgrade to insurance-compliant security, our vehicle carries British Standard deadlocks and 3-star cylinders ready to install.`,
    commonProblems: [
      {
        title: 'Settled hinges causing multi-point hooks to bind on porch doors',
        description: 'Post-war houses and extended bungalows in Potters Bar often experience dropped entrance doors where multi-point hook bolts rub hard against keeps. We adjust hinge pitch, service the multipoint track, and ensure effortless locking.',
      },
      {
        title: 'Weather-seized garage T-handle and side gate deadbolts',
        description: 'Detached garages and timber pedestrian gates in suburban avenues suffer damp exposure that corrodes internal brass pins. We decode stuck locks without panel destruction, apply corrosion inhibitors, or install sturdy replacement locks.',
      },
      {
        title: 'Snapped keys inside thumbturn euro cylinders on rear French doors',
        description: 'Rear patio and conservatory doors take heavy garden usage, leading to twisted keys shearing flush inside the keyway. We extract the snapped blade using micro-extraction probes and test the cylinder mechanism thoroughly.',
      },
      {
        title: 'Lock changeovers and master suiting for local Darkes Lane shops',
        description: 'Retail stores and small offices near Darkes Lane require re-keying when keyholders leave or following property handovers. We fit anti-snap euro barrels, supply freshly cut keys, and configure convenient keyed-alike options.',
      },
    ],
    faqs: [
      {
        question: 'How is the arrival time confirmed for Potters Bar bookings?',
        answer: 'Arrival time depends on distance and is confirmed when you call. We review route traffic and your address directly so you have a realistic schedule before we travel.',
      },
      {
        question: 'Can you open my front door in Potters Bar without drilling the lock?',
        answer: 'Yes. Non-destructive methods are always our priority. We pick locks or bypass latch mechanisms using fine tools, drilling only if the lock has experienced complete internal collapse.',
      },
      {
        question: 'Do you carry British Standard locks suitable for domestic home insurance?',
        answer: 'Yes. Our technician carries BS3621 mortice deadlocks and TS007 3-star rated euro profile cylinders that meet British insurance requirements.',
      },
    ],
    nearbySlugs: ['barnet', 'enfield', 'watford', 'harlow'],
    // TODO: Confirm with the business that this area is covered.
  },
};

// Check validation:
const allCompleted = { ...CURRENT_COMPLETED, ...newBatch };
const allSlugs = new Set(AREAS.map((a) => a.slug));
const forbiddenWords = ['reliable', 'trusted', 'accredited', 'approved', 'best', 'your city'];
let errors = 0;

console.log('--- VALIDATING 26 COMBINED AREAS ---');

for (const [slug, data] of Object.entries(allCompleted)) {
  if (!allSlugs.has(slug)) {
    console.error(`Unknown slug: ${slug}`);
    errors++;
  }
  for (const n of data.nearbySlugs) {
    if (!allSlugs.has(n)) {
      console.error(`Nearby slug ${n} does not exist in AREAS (in ${slug})`);
      errors++;
    }
  }

  const words = data.intro.trim().split(/\s+/);
  if (words.length < 120 || words.length > 180) {
    console.error(`Intro length error in ${slug}: ${words.length} words (must be 120-180)`);
    errors++;
  }

  const areaMeta = AREAS.find((a) => a.slug === slug);
  if (areaMeta?.outside_london && data.intro.toLowerCase().includes('london')) {
    console.error(`Outside London intro in ${slug} mentions London!`);
    errors++;
  }

  const fullText = JSON.stringify(data).toLowerCase();
  for (const f of forbiddenWords) {
    if (new RegExp(`\\b${f}\\b`, 'i').test(fullText)) {
      console.error(`Forbidden word '${f}' found in ${slug}`);
      errors++;
    }
  }
}

// Check 5-gram overlap across all 26 intros
function get5Grams(text) {
  const words = text.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(Boolean);
  const ngrams = new Set();
  for (let i = 0; i <= words.length - 5; i++) {
    ngrams.add(words.slice(i, i + 5).join(' '));
  }
  return ngrams;
}

const slugs = Object.keys(allCompleted);
let highestOverlap = { pair: '', ratio: 0 };
for (let i = 0; i < slugs.length; i++) {
  for (let j = i + 1; j < slugs.length; j++) {
    const setA = get5Grams(allCompleted[slugs[i]].intro);
    const setB = get5Grams(allCompleted[slugs[j]].intro);
    let shared = 0;
    for (const g of setA) {
      if (setB.has(g)) shared++;
    }
    const maxRatio = Math.max((shared / setA.size) * 100, (shared / setB.size) * 100);
    if (maxRatio > highestOverlap.ratio) {
      highestOverlap = { pair: `${slugs[i]} and ${slugs[j]}`, ratio: maxRatio };
    }
    if (maxRatio > 30) {
      console.error(`ERROR: Overlap between ${slugs[i]} and ${slugs[j]}: ${maxRatio.toFixed(1)}% exceeds 30%!`);
      errors++;
    }
  }
}
console.log(`Highest 5-gram overlap across all 26 intros: ${highestOverlap.pair} at ${highestOverlap.ratio.toFixed(1)}%`);

console.log(`Validation finished. Total errors: ${errors}`);

if (errors === 0) {
  const fileContent = `// Completed Areas (16 previous + 10 current batch = 26 total)
export const PILOT_AREAS = ${JSON.stringify(allCompleted, null, 2)};
`;
  fs.writeFileSync('src/data/pilot-areas.js', fileContent, 'utf8');
  console.log('Successfully saved src/data/pilot-areas.js with all 26 completed areas!');
}
