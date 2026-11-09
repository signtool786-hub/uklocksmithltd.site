import fs from 'fs';
import { AREAS } from '../src/data/areas.js';
import { PILOT_AREAS as CURRENT_COMPLETED } from '../src/data/pilot-areas.js';

const newBatch = {
  archway: {
    heroLine: 'Emergency door opening, lock replacements, and composite door repairs in Archway.',
    intro: `Facing an awkward lock lockout in Archway? We deliver responsive mobile locksmith services for residential tenants, private homeowners, and local shopkeepers across the neighbourhood. Archway's distinctive hillside terrain features a mixture of Victorian terraced conversions, 1930s maisonettes, and modern apartment developments near Junction Road. When a night latch snaps shut unexpectedly or an old mortice lock refuses to turn, our mobile technicians attend with specialised entry equipment. Dialling our number connects you directly to a practical locksmith rather than a remote call centre. We evaluate the problem over the telephone and quote an honest, fixed price before our vehicle sets off. Our focus is non-destructive entry: using specialised picks and bypass tools, we open locked doors without splintering timber or scratching painted frames. If a mechanism has failed completely or you require fresh keys after moving, we carry British Standard deadlocks and anti-snap euro cylinders ready for immediate installation.`,
    commonProblems: [
      {
        title: 'Accidentally slipped night latches on Victorian conversion flats',
        description: 'Period conversions across Archway often feature surface-mounted rim latches that lock tenants outside when doors blow shut in windy weather. We slide delicate non-marking bypass tools into the frame seam to retract the latch in minutes without timber damage.',
      },
      {
        title: 'Stiff five-lever mortice deadlocks on hillside timber entrances',
        description: 'Steep street gradients and seasonal moisture cause Victorian timber entrance doors to shift, making mortice deadbolts bind against brass keeps. We ease the strike pocket, lubricate internal levers with graphite, or install a compliant BS3621 deadlock.',
      },
      {
        title: 'Snapped brass keys inside narrow euro cylinders on communal doors',
        description: 'Shared entrance doors in residential conversions endure continuous daily usage, leading to worn brass keys shearing off inside lock plugs. We extract the broken blade using miniature spiral probes and test the cylinder mechanism thoroughly.',
      },
      {
        title: 'Commercial storefront lock repairs along Junction Road',
        description: 'Local cafes, bakeries, and retail units require prompt repairs when narrow-stile aluminium entrance locks or shutter padlocks jam. We service stuck locking latches, free jammed padlocks, and supply commercial replacement cylinders.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can your locksmith reach an address in Archway?',
        answer: 'We dispatch mobile engineers across north London daily. When you call, we evaluate immediate Holloway Road traffic and your postcode to provide an accurate arrival window before booking.',
      },
      {
        question: 'Can you open locked timber doors in Archway without drilling?',
        answer: 'Yes. Non-destructive entry is our primary method. We pick lock cylinders and bypass latches using precision tools that protect both the door sash and decorative frame.',
      },
      {
        question: 'Do you fit British Standard locks for Archway domestic properties?',
        answer: 'Yes. Our mobile van stocks BS3621 mortice deadlocks and 3-star diamond-rated anti-snap euro cylinders that meet all UK household insurance standards.',
      },
    ],
    nearbySlugs: ['holloway', 'islington', 'finchley', 'camden', 'barnet'],
  },

  finchley: {
    heroLine: 'Mobile door opening, lock replacements, and composite door repairs across Finchley.',
    intro: `Key snapped in your Finchley door or stuck outside after a long day? We provide dedicated mobile locksmith help across Finchley Central, East Finchley, and North Finchley. The area features a broad mix of interwar family houses, converted Edwardian maisonettes, and bustling shopping parades along Ballards Lane. Our roadside van comes directly to your location with all the gear needed to resolve your problem immediately. You deal one-on-one with the technician carrying out the work, with every quote confirmed before our wheels turn. Rather than damaging your entrance, we use specialised picking tensioners and latch-slipping cards to preserve your door and surrounding frame. When locks are corroded, stripped, or you need fresh keys to secure your property, our mobile workshop supplies British Standard deadlocks and diamond-rated cylinders fitted on the spot.`,
    commonProblems: [
      {
        title: 'Dropped composite front doors jamming multi-point locking hooks',
        description: 'Suburban family properties across Finchley frequently experience dropped composite door sashes where multi-point hook bolts rub hard against keeps. We adjust hinge pitch, realign the multipoint track, and restore effortless handle operation.',
      },
      {
        title: 'Worn five-lever mortice deadlocks on 1930s timber porch doors',
        description: 'Traditional semi-detached homes often feature original timber porch doors fitted with classic deadlocks that stiffen with winter moisture. We clean out old grease, lubricate levers with dry graphite, or install a compliant BS3621 replacement.',
      },
      {
        title: 'Snapped keys inside euro profile cylinders on garden French doors',
        description: 'Rear patio and garden access doors endure regular exposure, causing keys to twist and snap off flush inside the barrel. We use precision spiral extractors to pull out the broken piece without needing a full barrel replacement.',
      },
      {
        title: 'Commercial shutter and storefront lock repairs on Finchley High Road',
        description: 'Retail stores and eateries along the High Road depend on bullet locks and narrow-profile aluminium entrance locks that bind from road grit. We service stuck locking pins and supply heavy-duty replacements on site.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can your locksmith reach an address in Finchley?',
        answer: 'We dispatch mobile vans throughout north London daily. When you call, we evaluate immediate North Circular traffic and your postcode to provide an accurate arrival window before booking.',
      },
      {
        question: 'Can you repair my uPVC door mechanism instead of replacing the entire door?',
        answer: 'Yes. In the vast majority of cases, only the central gearbox or locking strip needs replacement. We carry universal replacement parts for all major brands on our van.',
      },
      {
        question: 'Do you fit locks that meet insurance criteria for Finchley properties?',
        answer: 'Yes. We supply and fit British Standard BS3621 mortice deadlocks and TS007 3-star anti-snap euro cylinders meeting all major UK home insurance policies.',
      },
    ],
    nearbySlugs: ['barnet', 'archway', 'potters-bar', 'holloway', 'brent'],
  },

  brent: {
    heroLine: 'Rapid mobile lock opening, lock repairs, and new security keys across Brent.',
    intro: `Dealing with a lock failure anywhere in Brent? We assist residential occupants, commercial warehouse managers, and property landlords across Willesden, Neasden, and Wembley Park. From large 1930s suburban estates to high-density modern developments near the stadium, locks face constant wear. Dialling our number puts you in touch with a hands-on engineer rather than an answering bureau. We diagnose the issue over the phone and agree a fixed, transparent charge before setting out. Our team prioritises non-destructive opening: we manipulate internal tumbler pins and slip caught latches so your door frame stays intact. If internal gears have sheared or you require comprehensive cylinder changes between tenancies, our van carries a vast selection of insurance-rated deadlocks and anti-snap euro barrels for instant installation.`,
    commonProblems: [
      {
        title: 'Stripped central gearboxes on composite entrance doors',
        description: 'Family homes across Brent frequently suffer from stiff handles where internal gearbox cams shear from excessive force. We disassemble the handle assembly, install a matching replacement gearbox, and realign the frame keeps.',
      },
      {
        title: 'Accidentally locked rim night latches on residential front doors',
        description: 'Victorian and 1930s properties often feature automatic rim night latches that lock shut when doors close behind residents. We slide non-marking bypass cards and shims into the frame gap to release the latch in minutes.',
      },
      {
        title: 'Communal entrance door euro cylinder failures in apartment blocks',
        description: 'Shared entrance doors in residential housing blocks endure continuous daily use, leading to worn internal pins that refuse tenant keys. We replace the worn cylinder with a heavy-duty, anti-pick barrel keyed for all building residents.',
      },
      {
        title: 'Commercial shutter and industrial unit lock repairs',
        description: 'Industrial facilities and trade units across Brent rely on heavy-duty shutter bullet locks and ground padlocks that seize from grit. We pick or drill frozen locks cleanly and fit weather-shielded replacements on site.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can your locksmith reach an address in Brent?',
        answer: 'We dispatch mobile engineers across north-west London daily. When you call, we check immediate road conditions along the North Circular and your postcode to provide an accurate arrival estimate.',
      },
      {
        question: 'Will opening my door in Brent cause damage to the frame?',
        answer: 'No. Our technicians specialise in non-destructive entry. We pick locks and ease latches open using precision tools, keeping your door, frame, and paintwork completely unharmed.',
      },
      {
        question: 'Do you carry locks that satisfy UK home insurance criteria in Brent?',
        answer: 'Yes. Our mobile workshop stocks British Standard BS3621 mortice deadlocks and 3-star diamond-rated anti-snap euro cylinders that comply with all UK household insurance policies.',
      },
    ],
    nearbySlugs: ['wembley', 'kilburn', 'harrow', 'acton', 'ealing'],
  },

  kilburn: {
    heroLine: 'Emergency door opening, lock replacements, and composite door repairs in Kilburn.',
    intro: `Locked out of a flat or terraced house in Kilburn? We run a fast-responding mobile locksmith service assisting residents, letting agents, and commercial premises across the area. Kilburn's dense urban layout features a vibrant mix of Victorian conversion apartments, mansion blocks, and bustling high road commercial shopfronts. When an automatic night latch clicks shut or a mortice key jams in the lock, our mobile technicians attend with dedicated non-destructive entry tools. Dialling our number puts you in direct contact with a working locksmith rather than a distant call centre. We discuss your lock issue and quote an all-inclusive fixed price before we travel. We focus strictly on damage-free entry methods: by picking cylinder tumblers and slipping latch bolts, we gain access without damaging door woodwork or frames. If your lock has jammed mechanically or you need fresh keys after moving, we carry British Standard deadlocks and anti-snap euro cylinders to complete the job in one visit.`,
    commonProblems: [
      {
        title: 'Jammed night latches on converted Victorian apartment doors',
        description: 'Period conversions throughout Kilburn often have spring latches that slip into deadlocked positions unexpectedly. We slide non-marking bypass tools into the frame gap to release the latch cleanly without woodwork splintering.',
      },
      {
        title: 'Worn five-lever mortice deadlocks on terraced timber front doors',
        description: 'Traditional terraced houses often rely on five-lever mortice deadlocks where levers stick from age and lack of lubrication. We service the lock mechanism, ease the strike pocket, or fit a fresh BS3621 insurance-rated replacement.',
      },
      {
        title: 'Snapped keys inside front door euro profile cylinders',
        description: 'Busy commuters rushing for tubes can twist brass keys at an awkward angle, snapping key blades inside high-security barrels. We use precision spiral extractor needles to pull out the broken piece without barrel damage.',
      },
      {
        title: 'Commercial storefront narrow-stile lock repairs on Kilburn High Road',
        description: 'Retail stores and takeaways along Kilburn High Road require fast repairs when narrow-profile aluminium door locks bind. We service stuck locking latches, adjust door closers, and install high-security commercial cylinders.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can your locksmith reach an address in Kilburn?',
        answer: 'We dispatch mobile units across north-west and central London daily. When you call, we evaluate immediate Kilburn High Road traffic and your postcode to provide an accurate arrival window.',
      },
      {
        question: 'Can you open high-security flat doors in Kilburn without drilling?',
        answer: 'Yes. Non-destructive lock manipulation and latch bypass are our first methods. We drill only as an absolute last resort if the cylinder has suffered severe internal mechanical breakage.',
      },
      {
        question: 'Do you charge a separate call-out fee on top of your quote in Kilburn?',
        answer: 'No. We provide 100% transparent pricing. The quote agreed over the phone is the exact total you pay on completion, with no hidden travel fees or mileage surcharges.',
      },
    ],
    nearbySlugs: ['brent', 'camden', 'marylebone', 'acton', 'wembley'],
  },

  shoreditch: {
    heroLine: 'Mobile lock opening, commercial hardware repairs, and lock upgrades in Shoreditch.',
    intro: `Locked out of a design agency, coffee shop, or loft apartment in Shoreditch? We provide rapid, specialised mobile locksmith coverage across the entire East End creative district. Shoreditch premises combine historic converted industrial warehouses with modern glass-fronted offices and trendy residential lofts near Redchurch Street and Hoxton Square. When electronic entry keypads fail, high-security lock cylinders seize, or an automatic rim latch snaps shut, our van attends with advanced diagnostic and non-destructive tools. You converse directly with an experienced tradesperson who knows commercial and residential ironmongery. We supply a firm, all-inclusive quote before setting off so billing stays entirely predictable. We bypass latches and pick lock tumblers cleanly to prevent frame splitting or cosmetic damage. Where replacement locks are needed, we supply British Standard deadlocks and high-specification euro cylinders immediately on site.`,
    commonProblems: [
      {
        title: 'Slammed automatic rim latches on converted industrial warehouse lofts',
        description: 'Converted loft apartments across Shoreditch commonly feature rim latches that lock automatically when the door swings shut. We use delicate bypass cards and precision tools to open the door in minutes without woodwork damage.',
      },
      {
        title: 'Master key and access control issues for creative tech offices',
        description: 'Digital agencies and co-working spaces near Old Street require secure, organized key suites. We re-pin worn lock cylinders, install restricted keyway barrels, and service master key suites on site.',
      },
      {
        title: 'Heavy commercial shutter and bullet lock repairs on Shoreditch High Street',
        description: 'Boutiques, bars, and galleries along Shoreditch High Street and Redchurch Street rely on shutter bullet locks that jam from road grit. We free stuck bullet pins, drill seized padlocks cleanly without track damage, and fit heavy-duty replacements.',
      },
      {
        title: 'Worn mortice deadlocks on period brick-built terraced properties',
        description: 'Period residential entrances often have classic five-lever mortice locks that grow stiff from dust and minor door settling. We dismantle the lock case, clean the levers, or install a compliant BS3621 replacement.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can an emergency locksmith arrive at my office in Shoreditch?',
        answer: 'We dispatch mobile units across east and central London daily. When you call, we evaluate local street access and traffic to provide an accurate arrival window before booking.',
      },
      {
        question: 'Can you unlock commercial premises in Shoreditch after normal hours?',
        answer: 'Yes. We assist commercial venues, creative agencies, and residents across Shoreditch at any hour, arriving prepared with commercial-grade hardware to secure your property.',
      },
      {
        question: 'Do you carry British Standard locks suitable for commercial insurance in Shoreditch?',
        answer: 'Yes. Our mobile workshop stocks BS3621 mortice deadlocks and high-security cylinders that comply with all UK commercial and domestic insurance policies.',
      },
    ],
    nearbySlugs: ['hackney', 'poplar', 'london-city', 'islington', 'stratford'],
  },

  leyton: {
    heroLine: 'Prompt mobile lock opening, lock replacements, and composite door repairs across Leyton.',
    intro: `Locked outside your terraced home or flat in Leyton? We provide practical mobile locksmith services across Leyton High Road, the Bakers Arms border, and the leafy avenues around Francis Road. From Victorian brick cottages to recently converted apartments, our mobile workshop arrives ready to tackle lock jams, stuck keys, and broken handles. Speaking with us connects you directly to the engineer handling the callout, giving you clear technical advice and a guaranteed price before we travel. We always attempt non-destructive entry first, picking barrels and sliding latch tools into the frame seam so your woodwork remains unmarked. If your multi-point door mechanism has stripped internally or you need new cylinders fitted for home insurance compliance, our inventory includes British Standard BS3621 deadlocks and anti-snap euro barrels installed on the spot.`,
    commonProblems: [
      {
        title: 'Accidentally locked rim latches on Victorian terraced front doors',
        description: 'Terraced properties around Leyton often feature automatic rim night latches that lock shut when the door closes behind residents. We slide non-marking bypass cards and shims into the frame gap to release the latch in minutes.',
      },
      {
        title: 'Stiff multi-point door handles on modern composite front doors',
        description: 'Renovated family homes fitted with modern composite doors often suffer from dropped hinges that make lifting handles difficult. We realign the door sash, adjust the strike boxes, and replace strained gearboxes for effortless closing.',
      },
      {
        title: 'Snapped keys inside narrow euro cylinders on garden French doors',
        description: 'Garden access doors endure heavy seasonal use, leading to worn brass keys twisting and breaking off in the barrel. We use micro-spiral extraction needles to remove the broken fragment cleanly without replacing the lock.',
      },
      {
        title: 'Commercial shopfront lock repairs on Leyton High Road',
        description: 'Independent retailers, cafes, and local takeaways along Leyton High Road require fast repairs when narrow-profile aluminium door locks bind. We service stuck locking latches and install high-security replacements.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can your locksmith reach an address in Leyton?',
        answer: 'We dispatch mobile vans across east London daily. When you call, we evaluate immediate traffic along Leyton High Road and your postcode to provide an accurate arrival window.',
      },
      {
        question: 'Can you repair my uPVC door mechanism instead of replacing the entire door in Leyton?',
        answer: 'Yes. In the vast majority of cases, only the central gearbox or locking strip needs replacement. We carry universal replacement parts for all major brands on our van.',
      },
      {
        question: 'Do you fit locks that satisfy home insurance requirements in Leyton?',
        answer: 'Yes. We supply and fit British Standard BS3621 mortice deadlocks and 3-star diamond-rated anti-snap euro cylinders that meet all UK insurer standards.',
      },
    ],
    nearbySlugs: ['walthamstow', 'stratford', 'hackney', 'ilford', 'poplar'],
  },

  barking: {
    heroLine: 'Rapid mobile lock opening, lock replacements, and composite door repairs in Barking.',
    intro: `Stuck outside on your doorstep or facing lock trouble in Barking? We deliver mobile locksmith solutions for homeowners, residential tenants, and industrial estate managers across the district. Barking's housing spans from established terraced avenues near the town centre to modern high-density waterfront developments at Barking Riverside. When keys snap in the cylinder, multi-point composite locks refuse to latch, or shutter padlocks freeze, our engineer responds with dedicated bypass equipment. You talk directly with the tradesperson attending your property, receiving an upfront fixed price before any dispatch happens. We aim for damage-free entry on every job, picking lock pins and easing latches to preserve door joinery. Should your lock be worn out or you want cylinders upgraded to insurance-rated standards, our van carries British Standard mortice deadlocks and anti-snap barrels ready for same-day installation.`,
    commonProblems: [
      {
        title: 'Jammed multi-point gearboxes on modern Barking Riverside composite doors',
        description: 'Waterfront apartment doors in Barking often feature multi-point locking gearboxes that jam when door sashes settle from wind and temperature changes. We dismantle the handle mechanism, replace damaged central gearboxes, and adjust roller keeps.',
      },
      {
        title: 'Snapped brass keys inside front entrance euro profile cylinders',
        description: 'Rushing commuters can twist keys at an awkward angle, snapping the thin brass keyway off inside the cylinder. We extract the broken fragment cleanly using micro-extractor tools and supply freshly cut keys on site.',
      },
      {
        title: 'Seized shutter bullet locks on industrial estate units',
        description: 'Commercial facilities and trade counters around Barking depend on shutter bullet locks that jam from road grit and rain. We free stuck bullet pins, drill seized housings cleanly when necessary, and supply keyed-alike replacements.',
      },
      {
        title: 'Tenancy turnover lock upgrades for private rented homes',
        description: 'Letting agents and landlords regularly need locks changed swiftly when tenancies conclude. We install insurance-rated anti-snap euro profile cylinders and supply sealed sets of fresh keys on the spot.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can your locksmith reach an address in Barking?',
        answer: 'We dispatch mobile engineers across east London daily. When you call, we evaluate immediate A13 traffic and your postcode to provide an accurate arrival window before booking.',
      },
      {
        question: 'Can you open my front door in Barking without drilling?',
        answer: 'Yes. Non-destructive picking and latch bypass are always our first methods. We drill only as an absolute last resort if internal components have suffered catastrophic mechanical failure.',
      },
      {
        question: 'Do you charge an extra call-out charge on top of your quote in Barking?',
        answer: 'No. We believe in clear pricing. The fixed quote agreed over the phone is the exact total you pay upon completion, covering call-out, labour, and parts.',
      },
    ],
    nearbySlugs: ['ilford', 'rainham', 'poplar', 'stratford', 'leyton'],
  },

  lewisham: {
    heroLine: 'Emergency door opening, lock replacements, and timber door repairs across Lewisham.',
    intro: `Door lock jammed or keys locked inside your Lewisham property? We operate a fully equipped mobile locksmith service supporting flat tenants, family homes, and high street businesses across the borough. Whether you live in a Victorian terrace in Brockley, a conversion flat near Blackheath, or a suburban house in Catford, lock issues require speedy, professional attention. You speak straight with the working engineer who will arrive at your door, not an impersonal third-party booking service. We evaluate the problem and provide an upfront, fixed price before dispatching our van. Our first method is non-destructive manipulation: using fine lock picks and latch-slipping blades, we open doors without cracking frames or gouging timber. If the lock has mechanically collapsed or you need cylinders changed following a house purchase, we carry British Standard deadlocks and anti-snap barrels to finish work on our initial visit.`,
    commonProblems: [
      {
        title: 'Jammed night latches on converted Victorian apartment doors',
        description: 'Victorian conversions throughout Lewisham often have spring latches that slip into deadlocked positions unexpectedly. We slide non-marking bypass tools into the frame gap to release the latch cleanly without woodwork splintering.',
      },
      {
        title: 'Worn mortice deadlocks on terraced timber front doors',
        description: 'Traditional terraced houses often rely on five-lever mortice deadlocks where levers stick from age and lack of lubrication. We service the lock mechanism, ease the strike pocket, or fit a fresh BS3621 insurance-rated replacement.',
      },
      {
        title: 'Dropped composite doors causing multi-point locks to bind',
        description: 'Renovated family houses frequently feature composite doors that settle on their hinges, causing locking bolts to scrape frame keeps. We realign the door sash, replace worn gearboxes, and adjust strike plates.',
      },
      {
        title: 'High street retail shop door and shutter lock issues',
        description: 'Independent businesses and cafes across Lewisham require quick repairs when narrow-stile storefront locks or shutter padlocks bind. We service stuck locking pins, repair latch keepers, and fit high-security replacements.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can an emergency locksmith arrive at my property in Lewisham?',
        answer: 'Our mobile engineers travel across south-east London daily. When you call, we check current road conditions and your postcode to provide an accurate arrival window before booking.',
      },
      {
        question: 'Do you charge an extra call-out charge on top of the quote in Lewisham?',
        answer: 'No. We provide 100% transparent pricing. The quote agreed over the phone is the exact total you pay on completion, with no hidden travel fees or mileage surcharges.',
      },
      {
        question: 'Can you replace my locks today if I just moved into a Lewisham property?',
        answer: 'Yes. We carry a wide range of British Standard mortice deadlocks and anti-snap euro profile cylinders to replace external locks in a single visit.',
      },
    ],
    nearbySlugs: ['greenwich', 'peckham', 'bermondsey', 'lambeth', 'brixton'],
  },

  'canary-wharf': {
    heroLine: 'Discreet non-destructive door entry, electronic lock servicing, and lock changes in Canary Wharf.',
    intro: `Locked out of a luxury apartment or corporate office in Canary Wharf? We provide discreet, specialist mobile locksmith services for residential tenants, building concierges, and business managers across the district. Canary Wharf's iconic high-rise towers and riverside developments feature sophisticated security hardware, including high-security euro profile cylinders, digital access handles, and multi-point composite mechanisms. When an electronic lock fails to respond, a key card reader malfunctions, or high-security keys are lost inside a taxi, our mobile technicians attend with advanced diagnostic and bypass tools. Dialling our phone connects you straight with an expert locksmith who respects modern residential architecture. We quote a fixed, guaranteed figure before our technician travels, ensuring absolute pricing clarity. Non-destructive entry is our unwavering focus: we manipulate internal lock components cleanly without scratching powder-coated frames or damaging bespoke doors. When lock replacement is required, we supply 3-star diamond-rated anti-snap cylinders ready for instant installation.`,
    commonProblems: [
      {
        title: 'Electronic smart lock and key card access failures on residential towers',
        description: 'Modern high-rise residential apartments in Canary Wharf frequently feature smart handles and digital escutcheons where battery depletion or servo jams prevent entry. We diagnose electronic faults, execute clean bypass procedures, and reset hardware.',
      },
      {
        title: 'Anti-snap 3-star diamond euro cylinder jams on high-security composite doors',
        description: 'High-security apartment entrance doors experience heavy cycling that can misalign internal anti-pick pins and magnetic elements. We precision-pick the cylinder open without door damage and install certified replacement barrels.',
      },
      {
        title: 'Jammed multi-point gearboxes on balcony glass sliding doors',
        description: 'Riverside penthouses endure high wind pressures that push river moisture and particulate into sliding door tracks, jamming hook mechanisms. We strip down locking strips, replace worn gearboxes, and lubricate runner carriages.',
      },
      {
        title: 'Commercial office master key and cylinder rekeying across financial suites',
        description: 'Corporate offices and financial institutions require tightly controlled key suites and rapid cylinder replacements during tenancy or staff handovers. We install restricted keyway cylinders to prevent unauthorized key duplication.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can your locksmith reach an apartment in Canary Wharf?',
        answer: 'We operate mobile units across east and central London daily. When you call, we evaluate local Docklands road access and concierge check-in protocols to give you an exact arrival window.',
      },
      {
        question: 'Can you open high-specification electronic and digital locks without damage?',
        answer: 'Yes. Our locksmiths are trained in modern digital and electronic lock diagnostics. We employ non-destructive bypass techniques that leave door leaves and electronic hardware undamaged.',
      },
      {
        question: 'Do you carry locks meeting the highest UK residential security standards?',
        answer: 'Yes. We supply and install TS007 3-star diamond-rated anti-snap euro cylinders and Sold Secure Diamond certified locks meeting all UK luxury property insurance guidelines.',
      },
    ],
    nearbySlugs: ['poplar', 'london-city', 'stratford', 'bermondsey', 'greenwich'],
  },

  'london-bridge': {
    heroLine: 'Rapid mobile lock opening, lock replacements, and commercial lock repairs around London Bridge.',
    intro: `Locked out of a business, converted warehouse loft, or riverside flat near London Bridge? We provide rapid, professional mobile locksmith services for commercial enterprises, private residents, and property managers throughout the district. London Bridge combines historic Thameside architecture, converted Victorian wharf buildings, and busy hospitality venues around Borough Market. When an automatic night latch snaps shut, a commercial shutter lock seizes, or keys go missing after an evening out, our mobile engineers respond with dedicated tools. Dialling our number connects you with an active tradesperson who understands local urban hardware. We confirm one fixed, transparent price before our van sets off, ensuring you never face unexpected fees. Non-destructive entry remains our primary commitment: we pick lock cylinders and ease latches open cleanly without scratching paintwork or damaging woodwork. If hardware is worn out, we install British Standard deadlocks and anti-snap cylinders on site.`,
    commonProblems: [
      {
        title: 'Slammed automatic rim latches on converted riverside wharf lofts',
        description: 'Converted warehouse flats along Clink Street and Shad Thames often feature heavy oak doors with automatic spring latches that lock residents outside. We use delicate bypass cards and shims to retract the latch cleanly without woodwork splintering.',
      },
      {
        title: 'High-traffic commercial storefront lock failures around Borough Market',
        description: 'Hospitality venues, cafes, and food retailers experience constant door cycling that wears down narrow-stile aluminium door locks. We free seized latches, adjust concealed overhead closers, and install heavy-duty hook deadbolts.',
      },
      {
        title: 'Antique mortice deadlocks binding in settled period brick buildings',
        description: 'Victorian commercial and residential premises frequently feature five-lever mortice locks that bind against brass strike plates as buildings settle. We dismantle the lock case, clean the levers with dry graphite, and ease the strike pocket.',
      },
      {
        title: 'Commercial shutter bullet locks and padlock failures on railway arches',
        description: 'Businesses operating in railway arches depend on heavy-duty shutter bullet locks that jam from railway vibration and road grit. We service stuck locking pins, remove frozen padlocks cleanly, and supply keyed-alike replacements.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can your locksmith reach an address near London Bridge?',
        answer: 'We dispatch mobile engineers across central and south London around the clock. When you call, we evaluate immediate bridge and river crossing traffic to provide an accurate arrival window.',
      },
      {
        question: 'Can you open heavy timber warehouse doors without drill damage?',
        answer: 'Yes. Non-destructive entry is always our primary method. We pick lock tumblers and bypass latches using precision tools that protect both the door leaf and heritage frame.',
      },
      {
        question: 'Do you provide formal VAT invoices for London Bridge commercial clients?',
        answer: 'Yes. We provide complete VAT invoices, written completion reports, and job documentation immediately following work for business owners, landlords, and property managers.',
      },
    ],
    nearbySlugs: ['bermondsey', 'london-city', 'lambeth', 'poplar', 'canary-wharf'],
  },
};

// Check validation:
const allCompleted = { ...CURRENT_COMPLETED, ...newBatch };
const allSlugs = new Set(AREAS.map((a) => a.slug));
const forbiddenWords = ['reliable', 'trusted', 'accredited', 'approved', 'best', 'your city'];
let errors = 0;

console.log('--- VALIDATING 46 COMBINED AREAS ---');

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

// Check 5-gram overlap across all 46 intros
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
console.log(`Highest 5-gram overlap across all 46 intros: ${highestOverlap.pair} at ${highestOverlap.ratio.toFixed(1)}%`);

console.log(`Validation finished. Total errors: ${errors}`);

if (errors === 0) {
  const outsideSet = new Set(AREAS.filter((a) => a.outside_london).map((a) => a.slug));
  let out = '// Completed Areas (36 previous + 10 current batch = 46 total)\nexport const PILOT_AREAS = {\n';
  for (const [slug, data] of Object.entries(allCompleted)) {
    if (outsideSet.has(slug)) {
      out += '  // TODO: Confirm with the business that this area is covered.\n';
    }
    out += '  ' + JSON.stringify(slug) + ': ' + JSON.stringify(data, null, 4).replace(/\\n/g, '\n  ') + ',\n';
  }
  out += '};\n';
  fs.writeFileSync('src/data/pilot-areas.js', out, 'utf8');
  console.log('Successfully saved src/data/pilot-areas.js with all 46 completed areas!');
}
