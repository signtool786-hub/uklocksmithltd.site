import fs from 'fs';
import { AREAS } from '../src/data/areas.js';
import { PILOT_AREAS as INITIAL_PILOTS } from '../src/data/pilot-areas.js';

const batchAreas = {
  harrow: {
    heroLine: 'Direct mobile lock opening, lock repairs, and new keys across Harrow.',
    intro: `Got lock trouble in Harrow? We run an active mobile locksmith van assisting residents and local shopkeepers across the borough. Whether your porch lock refuses to budge, your key snapped flush in the garage door, or your family is stranded on the driveway, we can help. When you dial our number, you speak straight to a skilled engineer rather than a dispatch call handler. We give you a realistic arrival estimate and a firm, fixed quotation before setting out. Our technicians arrive with full tool kits designed for non-invasive entry. We pick locks open cleanly so you can get on with your day without facing repair bills for new woodwork. If a worn multi-point gearbox or damaged cylinder does need replacement, we carry British Standard deadlocks and anti-snap cylinders to finish the work on the spot.`,
    commonProblems: [
      {
        title: 'Stuck uPVC porch and front door gearboxes',
        description: '1930s semi-detached homes across Harrow often feature added uPVC porches where handles jam after prolonged exposure to drafts. We realign the outer frames, replace failed central gearboxes, and tune the locking points for effortless operation.',
      },
      {
        title: 'Faulty garage T-handle locks and side gate latches',
        description: 'Driveway access gates and detached garages frequently suffer from seized barrels and rusted cams following heavy rain. We pick open locked garage handles cleanly, lubricate internal linkages, or fit weather-resistant British Standard replacements.',
      },
      {
        title: 'Snapped keys inside patio slide door cylinders',
        description: 'Garden sliding patio doors in suburban family residences endure constant use, causing weakened brass keys to snap off flush. We slide precision spiral extraction tools into the keyway to extract the broken blade without replacing the lock.',
      },
      {
        title: 'Shopfront roller shutter lock problems on Station Road',
        description: 'Local retail shops and takeaways in Harrow depend on bullet locks and shutter housings that collect road dust and stick. We free seized bullet pins, drill off jammed padlocks without track damage, and supply keyed-alike shutter locks on site.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can your locksmith reach my address in Harrow?',
        answer: 'We dispatch mobile vans throughout Harrow daily. When you ring us, we check immediate traffic conditions and your postcode to provide an accurate arrival window before booking.',
      },
      {
        question: 'Can you open my porch door in Harrow without breaking the glass or frame?',
        answer: 'Yes. We use professional non-destructive bypass tools and picks. Our locksmiths manipulate the lock mechanism directly, keeping your uPVC framing, decorative panels, and double glazing completely intact.',
      },
      {
        question: 'Do you fit locks that meet insurance requirements in Harrow?',
        answer: 'Yes. We stock British Standard BS3621 mortice deadlocks and 3-star anti-snap euro profile cylinders that comply fully with all UK household insurance policies.',
      },
    ],
    nearbySlugs: ['wembley', 'brent', 'watford', 'ealing', 'acton'],
  },

  'milton-keynes': {
    heroLine: 'Mobile locksmith services for homes, businesses, and industrial units across Milton Keynes.',
    intro: `Locked outside your property in Milton Keynes? We provide mobile locksmith services for detached homes, modern housing estates, and commercial distribution centres. Arrival time depends on distance and is confirmed when you call. When you phone us, you talk directly with an experienced tradesperson who knows lock mechanisms. We explain the plan clearly and agree a single fixed price before our van sets out. We understand that modern estate developments often use complex multi-point door locks that require specific alignment. We prioritise non-destructive techniques using specialist picks and bypass tools to open domestic doors without causing damage. Should your uPVC mechanism fail or you need a lock change following a move, we carry insurance-rated euro cylinders and deadlocks on board. We leave your entrance fully secured, clean up any debris, and supply new working keys.`,
    commonProblems: [
      {
        title: 'Multi-point locking failures on modern estate composite doors',
        description: 'Modern housing estates across Milton Keynes feature composite doors that expand in summer heat, causing locking hooks to misalign. We adjust the keep plates, re-align the hinges, and replace strained gearboxes to ensure smooth operation.',
      },
      {
        title: 'Lost keys to distribution centres and commercial offices',
        description: 'Commercial parks and logistics facilities in Milton Keynes rely on master key systems and euro cylinders that need fast rekeying when keys are lost. We supply and install master-keyed cylinders and high-security keyways on site.',
      },
      {
        title: 'Jammed digital keypad locks on commercial premises',
        description: 'Commercial properties using mechanical digital push-button code locks experience internal tumbler wear over time. We decode stuck keypads, reset security codes, and fit heavy-duty push-button mortice units.',
      },
      {
        title: 'Locked out of residential apartments with deadlocking latches',
        description: 'Tenants in central Milton Keynes apartments often find night latches locked shut after stepping out momentarily. We use specialised slipping shims and bypass tools to restore access cleanly without drill damage.',
      },
    ],
    faqs: [
      {
        question: 'How do you confirm arrival times for Milton Keynes callouts?',
        answer: 'Arrival time depends on distance and is confirmed when you call. We verify your exact grid location and road conditions so you have an accurate estimate before our engineer dispatches.',
      },
      {
        question: 'Do your locksmiths carry replacement multi-point locks in Milton Keynes?',
        answer: 'Yes. Our mobile workshop carries universal multi-point gearboxes and shoot-bolt mechanisms compatible with all major composite door brands found across Milton Keynes developments.',
      },
      {
        question: 'Can you provide invoices for businesses and landlords in Milton Keynes?',
        answer: 'Yes. We supply comprehensive VAT invoices and written completion reports for private landlords, facility managers, and business operators upon job completion.',
      },
    ],
    nearbySlugs: ['leighton-buzzard', 'luton', 'potters-bar', 'watford'],
    // TODO: Confirm with the business that this area is covered.
  },

  'leighton-buzzard': {
    heroLine: 'Straightforward door opening, lock replacements, and security repairs in Leighton Buzzard.',
    intro: `Need practical lock assistance in Leighton Buzzard? We assist householders, private landlords, and local business owners with all door security requirements. Arrival time depends on distance and is confirmed when you call. You will always speak with a practical locksmith on the phone rather than an automated booking system. We assess your lock type, quote one all-inclusive figure, and stick to that price when we arrive. Whether you live in a detached home near the town centre or a rural cottage nearby, our van carries extensive hardware stock to solve emergencies promptly. Our first course of action is picking or latch manipulation so your timber or composite entrance stays completely undamaged. When cylinders are worn out, seized from damp, or need changing between tenants, we install quality British Standard locks. We test every key thoroughly with you before packing away our tools.`,
    commonProblems: [
      {
        title: 'Settling wooden door frames causing mortice deadlocks to bind',
        description: 'Cottages and traditional townhouses in Leighton Buzzard often feature solid timber frames that shift with moisture, misaligning the mortice bolt. We chisel out the strike pocket, adjust the keep, and service the internal five-lever mechanism.',
      },
      {
        title: 'Snapped keys inside narrow uPVC conservatory cylinders',
        description: 'Rear garden conservatories and French doors frequently endure stiff operation, leading to twisted keys snapping off in the barrel. We use micro-extractors to retrieve the broken piece cleanly without damaging internal tumblers.',
      },
      {
        title: 'Worn garage door rim cylinders and T-handle mechanisms',
        description: 'Detached garage doors on residential avenues frequently seize up from road salt and seasonal dampness. We pick open locked garage handles without denting metal skin panels and install rust-resistant replacement cylinders.',
      },
      {
        title: 'Tenancy turnover cylinder replacements for local rentals',
        description: 'Letting agents and private landlords in Leighton Buzzard frequently require fast cylinder changes between tenancies. We install insurance-rated anti-snap euro barrels and supply sealed sets of fresh keys on the spot.',
      },
    ],
    faqs: [
      {
        question: 'How is the arrival time confirmed for Leighton Buzzard?',
        answer: 'Arrival time depends on distance and is confirmed when you call. We discuss your location directly and confirm a clear dispatch schedule before heading to your property.',
      },
      {
        question: 'Can you open historic timber doors without damaging original woodwork in Leighton Buzzard?',
        answer: 'Yes. Non-destructive entry is our primary method. We pick internal levers and use delicate bypass techniques to open heritage doors without leaving gouges or splinter marks.',
      },
      {
        question: 'What types of locks do you supply for Leighton Buzzard homes?',
        answer: 'We supply British Standard BS3621 mortice deadlocks, night latches, and TS007 3-star anti-snap euro cylinders meeting all UK insurance standards.',
      },
    ],
    nearbySlugs: ['milton-keynes', 'luton', 'watford', 'potters-bar'],
    // TODO: Confirm with the business that this area is covered.
  },

  streatham: {
    heroLine: 'Emergency door opening, lock changes, and latch repairs throughout Streatham.',
    intro: `Shut outside your flat along Streatham High Road? We know how stressful it is to watch the front door click shut with your keys resting on the hallway table. Our mobile locksmiths operate across Streatham to get you back inside without unnecessary fuss. You talk straight to the engineer who will carry out the work, not an impersonal call centre. We quote a fixed price over the phone before we travel, so there are no surprise charges on completion. Non-destructive entry is our main method: we manipulate latches and pick lock cylinders to avoid damaging solid timber doors or painted frames. If your lock has jammed mechanically or you want new keys for security, we supply and fit BS3621 insurance-rated mortice locks on the same visit.`,
    commonProblems: [
      {
        title: 'Accidentally locked night latches on converted Victorian flats',
        description: 'Older houses converted into apartments across Streatham feature traditional rim night latches that slam shut behind hurried residents. We slide non-marking bypass cards and mica shims into the frame to open the door in minutes.',
      },
      {
        title: 'Seized five-lever deadlocks on heavy front entrances',
        description: 'Streatham period townhouses often rely on aging mortice deadlocks where dirt accumulates in the keyhole over years. We flush out the lever pack, lubricate internal springs, or fit an upgraded BS3621 deadlock with new keys.',
      },
      {
        title: 'Jammed uPVC balcony doors on modern developments',
        description: 'Apartments with balcony doors frequently experience dropped sashes where multi-point rollers catch on bottom keeps. We adjust the corner hinges, re-align the door sash, and replace broken gearbox components.',
      },
      {
        title: 'High street retail shutter padlock failures',
        description: 'Shops and cafes along Streatham High Road depend on heavy floor-mounted padlocks that can jam from pavement grit. We remove seized padlocks cleanly, clean anchor recesses, and supply hardened steel replacement padlocks.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can a locksmith reach my flat in Streatham?',
        answer: 'Our mobile engineers operate across Streatham constantly. When you call, we evaluate live road traffic and provide an accurate arrival estimate before booking.',
      },
      {
        question: 'Do you charge an extra call-out charge on top of your quote in Streatham?',
        answer: 'No. We believe in 100% transparent pricing. The quote agreed over the phone is the exact total you pay upon completion, with no hidden mileage or call-out fees.',
      },
      {
        question: 'Can you change my flat locks today if my keys were stolen in Streatham?',
        answer: 'Yes. Our vans carry extensive stocks of insurance-rated locks, allowing us to change your cylinders immediately and hand over brand new keys on the spot.',
      },
    ],
    nearbySlugs: ['clapham', 'brixton', 'tooting', 'mitcham', 'battersea'],
  },

  acton: {
    heroLine: 'Prompt lock opening, cylinder replacements, and uPVC repairs across Acton.',
    intro: `Stuck with a stubborn door lock in Acton? We offer mobile locksmith services for residential homes, garden flats, and local industrial units. Keys snap in cold weather, cylinders wear down over time, and latches can suddenly drop out of line. When you phone our number, you reach a working technician who can diagnose the problem immediately. We agree an all-inclusive price before setting off, ensuring complete clarity from start to finish. We know the local streets well and carry replacement parts to handle both traditional timber and contemporary composite residential doors. Our team uses precision picks, bypass cards, and decoding equipment to open locked doors without drill damage. If your uPVC multi-point door mechanism has seized or your lock is past its prime, we stock high-security anti-snap replacements in our van to secure your building straight away.`,
    commonProblems: [
      {
        title: 'Stiff composite door handles failing to lift into multi-point locks',
        description: 'Family residences around Acton feature multi-point locking doors where handles become stiff or spin loosely without latching. We dismantle the handle plate, replace the stripped central gearbox, and align all frame keeps.',
      },
      {
        title: 'Broken key extraction from shared communal entrance doors',
        description: 'Communal doors on Edwardian conversions in Acton take heavy daily use, causing worn keys to snap inside the keyway. We extract the broken blade using precision extraction tools and test existing keys to ensure smooth turning.',
      },
      {
        title: 'Commercial shutter bullet locks jammed on high street premises',
        description: 'Retailers and commercial units across Acton rely on pin-tumbler bullet locks that seize from weather exposure. We lubricate and pick stuck bullet pins, drill seized housings cleanly when necessary, and install keyed-alike replacements.',
      },
      {
        title: 'Window casement lock failures on ground-floor flats',
        description: 'Ground-floor apartments require secure window fasteners to meet home insurance stipulations. We replace rounded keys, install new locking sash catches, and make sure all ground-floor openings lock securely.',
      },
    ],
    faqs: [
      {
        question: 'Can you open my door in Acton without drilling the lock?',
        answer: 'Yes. Non-destructive picking and latch bypass techniques are always our first resort. Drilling is only performed if internal components have suffered catastrophic mechanical collapse.',
      },
      {
        question: 'Are your locksmiths equipped for uPVC door repairs in Acton?',
        answer: 'Yes. We carry an extensive selection of uPVC gearboxes, multi-point strips, and replacement handles in our vans to complete repairs during our initial visit.',
      },
      {
        question: 'What payment options do you take on site in Acton?',
        answer: 'We accept all major debit and credit cards via portable card readers, direct bank transfers, and cash once work is completed and you have tested the new hardware.',
      },
    ],
    nearbySlugs: ['ealing', 'shepherds-bush', 'chiswick', 'wembley', 'hammersmith'],
  },

  holloway: {
    heroLine: 'Fast mobile lock opening, latch repairs, and security upgrades throughout Holloway.',
    intro: `Locked outside your Holloway residence? Whether you lost your keys while out or your night latch slipped into place accidentally, we can help. We dispatch equipped mobile locksmith units across Holloway to open doors quickly and cleanly. Calling us connects you directly with a tradesperson, not a switchboard operator. We evaluate what lock you have and state a firm price before we travel. Many properties around the area are multi-storey conversions with shared hallways. We make sure communal entrance locks and individual flat doors function smoothly before finishing. In almost every lockout scenario, we pick the cylinder or bypass the latch so your door and timber frame remain free from marks. If you need hardware replaced because of lost keys or burglary damage, we install insurance-compliant British Standard locks and cut fresh keys on site.`,
    commonProblems: [
      {
        title: 'Slammed rim latches on Victorian flat conversions',
        description: 'Flats in converted Victorian properties across Holloway frequently have spring-loaded Yale-style rim latches that lock upon closing. We use thin bypass shims and specialized picking tools to release the latch cleanly without woodwork damage.',
      },
      {
        title: 'Loose cylinder collars on shared front entrance doors',
        description: 'Shared entrance doors endure constant slamming, which loosens cylinder retaining screws and causes locks to spin freely. We re-secure internal mounting bolts, fit reinforced escutcheons, and re-pin cylinders for smooth key operation.',
      },
      {
        title: 'Keys snapped inside mortice sashlocks',
        description: 'Residents hurrying in or out can twist thin brass keys at an angle, snapping key blades inside five-lever mortice locks. We extract the broken piece using micro-extraction wires and fabricate or supply fresh replacement keys on site.',
      },
      {
        title: 'Shopfront narrow-stile lock failures along Holloway Road',
        description: 'Boutiques, cafes, and independent shops along Holloway Road use narrow-backset aluminium door locks that bind after years of foot traffic. We re-hang sagging aluminium doors, adjust latch receivers, and install high-security euro cylinders.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can you get to an emergency lockout in Holloway?',
        answer: 'We have mobile locksmith units operating across north London. When you call, we give you an accurate arrival estimate based on your exact Holloway postcode before confirming.',
      },
      {
        question: 'Will opening my locked Holloway flat door cause damage?',
        answer: 'No. Our technicians specialise in non-destructive entry. We pick locks and slip latches using precision tools, keeping your door, frame, and paintwork completely unharmed.',
      },
      {
        question: 'Can you fit insurance-rated locks to my Holloway property?',
        answer: 'Yes. We carry British Standard BS3621 mortice locks and 3-star diamond-rated euro cylinders that meet all UK insurance requirements.',
      },
    ],
    nearbySlugs: ['islington', 'archway', 'camden', 'finchley', 'hackney'],
  },

  walthamstow: {
    heroLine: 'Mobile door opening, lock replacements, and key repairs across Walthamstow.',
    intro: `Looking for a straightforward locksmith in Walthamstow? We provide dependable door entry and lock replacement services across the area. From traditional Warner flat timber doors to modern multi-point composite systems, we understand local housing security. When you dial our phone number, you talk directly with the engineer attending your home. We confirm the full price over the phone before dispatching our van, keeping costs completely clear. We know how diverse Walthamstow properties are, from classic brick terraced housing to modern regeneration blocks, and carry matching locksets for every door type. Our primary focus is non-destructive entry: using specialised lock picks, we let you back indoors without chewing up wooden door jambs. When an old mortice lock gives up or you require brand new cylinders after moving in, we carry British Standard certified replacements to get the job finished immediately.`,
    commonProblems: [
      {
        title: 'Stiff mortice deadlocks on traditional Warner estate properties',
        description: 'Classic Warner flat doors in Walthamstow feature solid timber doors where aging mortice deadlocks become difficult to turn. We remove the lock body, clean internal levers, lubricate the bolt carriage, or install a compliant BS3621 replacement.',
      },
      {
        title: 'Multi-point door locking strip jams on new-build apartments',
        description: 'Modern apartment buildings in Walthamstow feature multi-point locking composite doors where top or bottom hooks fail to retract. We safely release jammed locking strips, adjust frame keeps, and fit replacement gearboxes.',
      },
      {
        title: 'Snapped keys in weathered bicycle shed and side gate padlocks',
        description: 'Terraced homes in Walthamstow often have garden side gates and bike storage secured by padlocks that corrode in the rain. We extract broken key blades cleanly, treat mechanisms with anti-corrosion fluid, and supply new brass keys.',
      },
      {
        title: 'Commercial door lock failures on retail storefronts',
        description: 'Shops and community spaces along Walthamstow Market and surrounding streets require fast repairs when deadbolts bind. We service narrow-profile aluminium door locks and fit anti-drill euro cylinders to keep businesses trading safely.',
      },
    ],
    faqs: [
      {
        question: 'Do you carry locks suitable for Warner flats in Walthamstow?',
        answer: 'Yes. We carry traditional narrow-backset rim latches, five-lever mortice deadlocks, and British Standard hardware specifically suited for historic Warner property doors.',
      },
      {
        question: 'Can you give me a fixed price before travelling to Walthamstow?',
        answer: 'Yes. We ask about your door and lock type over the phone and quote one straightforward price that covers call-out, labour, and materials before we dispatch.',
      },
      {
        question: 'What happens if you cannot pick open my lock in Walthamstow?',
        answer: 'In the rare event that internal mechanical failure prevents picking, we use precision drilling targeted only at the cylinder, then immediately fit a brand new lock so your home remains secure.',
      },
    ],
    nearbySlugs: ['leyton', 'stratford', 'hackney', 'ilford', 'enfield'],
  },

  hammersmith: {
    heroLine: 'Emergency lockouts, lock replacements, and door repairs throughout Hammersmith.',
    intro: `Locked out around Hammersmith? We help residents, business owners, and estate agents resolve lock problems calmly and without delay. Keys go missing, brass latches slip into locked positions, and older mortice deadlocks can jam after decades of service. When you ring us, an experienced locksmith answers your call and listens to the details. We provide an exact price before our vehicle sets off, ensuring you know what to expect. Our mobile workshops are stocked with high-grade components suited for Victorian conversions and contemporary riverside apartment developments across the district. Non-destructive door opening is always our first approach. We use specialist lock picks and bypass tools to gain access without splintering timber or marring composite finishes. If a broken lock needs replacing, our mobile inventory holds insurance-rated cylinders and five-lever mortice locks to secure your entrance on the spot.`,
    commonProblems: [
      {
        title: 'Accidental lockouts from automatic night latches in mansion flats',
        description: 'Victorian mansion blocks and riverside conversions in Hammersmith feature doors fitted with automatic deadlocking rim latches. We deploy non-invasive mica bypass tools and specialist lock picks to restore entry without scratching timber woodwork.',
      },
      {
        title: 'Misaligned five-lever mortice deadlocks on period townhouses',
        description: 'Heavy timber entrance doors on residential avenues frequently drop over time, causing deadbolts to grind against the frame keep. We chisel and reposition the strike plate, lubricate the levers, and test smooth bolt throwing.',
      },
      {
        title: 'Worn euro profile cylinders on commercial office doors',
        description: 'Offices and retail units around Hammersmith Broadway endure hundreds of key insertions weekly, eroding internal tumbler pins. We replace worn cylinders with high-security anti-pick and anti-drill barrels keyed to current specifications.',
      },
      {
        title: 'Snapped keys in residential patio and balcony doors',
        description: 'French doors and sliding balconies on riverside apartments experience stiff resistance when key blades are turned forcefully. We use micro-spiral extraction needles to retrieve broken key shanks without barrel replacement.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can a locksmith reach my Hammersmith address?',
        answer: 'We have mobile technicians stationed across west London. When you call, we provide a precise arrival estimate based on real-time traffic and your exact postcode before confirming.',
      },
      {
        question: 'Can you replace communal door locks for Hammersmith apartment blocks?',
        answer: 'Yes. We service and replace communal entrance cylinders and heavy-duty latches with management authorization, supplying matching key sets for all building occupants.',
      },
      {
        question: 'Do you provide fixed prices over the telephone in Hammersmith?',
        answer: 'Yes. We explain all costs upfront before setting off. The figure agreed over the phone is the exact total you pay upon completion with no surprise add-ons.',
      },
    ],
    nearbySlugs: ['fulham', 'shepherds-bush', 'chiswick', 'kensington', 'acton'],
  },

  kensington: {
    heroLine: 'Meticulous door opening, lock replacements, and architectural hardware fitting in Kensington.',
    intro: `Require a professional locksmith in Kensington? We assist homeowners, apartment residents, and property managers with meticulous door opening and hardware installations. Traditional Kensington entrances often feature heavy hardwood doors with architectural rim night latches and secondary deadlocks. When locks become stiff or keys are misplaced, we respond with specialised tools designed for gentle, non-destructive entry. You speak straight to an engineer who appreciates high-value period woodwork. We agree all charges upfront before travelling, so pricing remains completely clear. We know that historic properties require respectful care. We take great pride in providing discrete, tidy workmanship that protects original door joinery and finishes. We pick locks open without drilling wherever mechanically possible. If replacement hardware is necessary, we install high-security British Standard locks that match the aesthetic of your property while fulfilling insurance prerequisites.`,
    commonProblems: [
      {
        title: 'Delicate latch bypass on high-value period timber doors',
        description: 'Historic townhouses and mansion apartments in Kensington feature solid hardwood doors with ornate paintwork and architectural fittings. We deploy specialized non-destructive tension picks and latch bypass shims that protect original finishes.',
      },
      {
        title: 'Stiff double-locking mortice deadlocks on stucco-fronted residences',
        description: 'Large period entrance doors often have secondary five-lever deadlocks where century-old mortice pockets accumulate dust. We dismantle the lock case, polish brass levers, or fit insurance-rated British Standard units that match existing hardware.',
      },
      {
        title: 'Worn master key cylinders in luxury residential blocks',
        description: 'Apartment buildings in Kensington rely on complex master key suites where frequent concierge and tenant access wears internal pins. We re-pin worn barrels, cut precision replacement keys, and service master suites smoothly.',
      },
      {
        title: 'Window security fastener and sash stop failures on ground-floor flats',
        description: 'Ground-floor properties in Kensington require discrete, insurance-rated window locks to maintain cover. We repair vintage sash window fasteners, install concealed locking sash stops, and ensure complete compliance without disrupting aesthetics.',
      },
    ],
    faqs: [
      {
        question: 'Can you open a locked door in Kensington without damaging period joinery?',
        answer: 'Yes. Non-destructive entry is our primary focus. We pick locks open using delicate tools designed to leave antique timber doors, decorative mouldings, and paintwork completely unharmed.',
      },
      {
        question: 'Do you stock British Standard locks suitable for Kensington architectural doors?',
        answer: 'Yes. We carry high-specification BS3621 mortice locks and anti-snap euro cylinders in various brass, chrome, and bronze finishes to complement period entrances.',
      },
      {
        question: 'How quickly can an engineer attend a lockout in Kensington?',
        answer: 'We dispatch mobile units across central London daily. When you call, we evaluate local traffic and provide an exact arrival estimate before confirming the booking.',
      },
    ],
    nearbySlugs: ['chelsea', 'fulham', 'hammersmith', 'mayfair', 'notting-hill'],
  },

  'london-city': {
    heroLine: 'Commercial lock opening, office rekeying, and emergency door repairs across London City.',
    intro: `Locked out of an office suite, shop, or apartment in London City? Fast access is essential when business operations or urgent appointments are on the line. We provide specialized locksmith services across London City, handling commercial deadlatches, narrow-style aluminium door locks, and residential euro cylinders. You will always speak directly with a locksmith rather than an offshore dispatch service. We provide a firm quote before leaving for your address, ensuring straightforward commercial terms. Security protocols in commercial buildings demand careful coordination. We work smoothly with building managers, concierge teams, and individual business tenants to restore safe access. Our engineers use non-invasive picking techniques and bypass methods to open locked doors cleanly without damaging expensive door frames. When security hardware is worn or broken, we install high-grade British Standard locks and provide complete VAT invoicing for your business records.`,
    commonProblems: [
      {
        title: 'Office access lockouts from failed electronic or digital deadlatches',
        description: 'Commercial office suites and retail premises in London City frequently experience electronic strike or digital keyless latch lockouts. We use non-destructive bypass tools and manual override picking to open doors promptly without interrupting operations.',
      },
      {
        title: 'Narrow-stile aluminium door lock failures on commercial premises',
        description: 'High-traffic glass and aluminium entrance doors suffer from worn narrow-backset deadlatches that fail to throw properly. We adjust door closers, replace worn lock mechanisms, and install high-security anti-drill cylinders on site.',
      },
      {
        title: 'Lost office keys and urgent master suite rekeying',
        description: 'When office keys go missing, corporate security requires rapid lock replacement to protect confidential documents and property. We re-pin lock cylinders, install restricted keyway barrels, and provide numbered key batches.',
      },
      {
        title: 'Jammed roller shutter bullet locks on retail units',
        description: 'Shops and kiosks across the City rely on hardened steel bullet locks on security grilles that can seize from road dust. We service stuck bullet pins, drill seized housings cleanly when necessary, and supply keyed-alike replacements.',
      },
    ],
    faqs: [
      {
        question: 'Do you provide corporate invoicing and VAT receipts for London City businesses?',
        answer: 'Yes. We work extensively with commercial clients, facility managers, and business tenants, providing formal job reports and VAT invoices immediately upon completion.',
      },
      {
        question: 'Can your locksmiths attend commercial office emergencies outside regular trading hours?',
        answer: 'Yes. Our mobile engineers operate 24 hours a day, 365 days a year, assisting offices, retail units, and hospitality venues across London City at any hour.',
      },
      {
        question: 'What types of commercial door hardware do you carry in London City?',
        answer: 'We stock narrow-backset mortice locks, digital push-button units, panic exit hardware, and British Standard high-security euro profile cylinders suited for commercial properties.',
      },
    ],
    nearbySlugs: ['london-bridge', 'shoreditch', 'holborn', 'bermondsey', 'poplar'],
    // TODO: Confirm with the business whether London City specifically covers the Square Mile / City of London financial district or a broader central zone.
  },
};

const allSlugs = new Set(AREAS.map((a) => a.slug));
const forbiddenWords = ['reliable', 'trusted', 'accredited', 'approved', 'best', 'your city'];
let errors = 0;

for (const [slug, data] of Object.entries(batchAreas)) {
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
  const fullText = JSON.stringify(data).toLowerCase();
  for (const f of forbiddenWords) {
    if (new RegExp(`\\b${f}\\b`, 'i').test(fullText)) {
      console.error(`Forbidden word '${f}' found in ${slug}`);
      errors++;
    }
  }
}

console.log(`Batch 10 data validation: ${errors} errors.`);
