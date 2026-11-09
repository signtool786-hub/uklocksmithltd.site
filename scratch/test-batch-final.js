import fs from 'fs';
import { AREAS } from '../src/data/areas.js';
import { PILOT_AREAS as CURRENT_COMPLETED } from '../src/data/pilot-areas.js';

const finalBatch = {
  bermondsey: {
    heroLine: 'Emergency door opening, lock replacements, and composite door repairs across Bermondsey.',
    intro: `Stranded on the doorstep of your Bermondsey home or warehouse flat? We provide rapid, straightforward mobile locksmith assistance across Bermondsey Street, Jamaica Road, and Southwark Park. Properties in this historic Thameside district span converted brick wharves with heavy timber doors, modern residential apartment blocks, and local artisan shopfronts. When an automatic night latch clicks shut behind you or your key snaps inside a euro profile cylinder, our mobile technician attends fully equipped. You talk straight to the working engineer who handles your callout, giving you clear technical advice and a guaranteed price before we travel. We always attempt non-destructive entry first, picking tumblers and sliding bypass tools into the frame seam so your woodwork remains unmarked. If internal gears have sheared or you require fresh cylinders following a tenancy change, our van carries British Standard deadlocks and anti-snap euro barrels for immediate installation.`,
    commonProblems: [
      {
        title: 'Slammed automatic night latches on converted warehouse apartments',
        description: 'Converted dockland lofts near Shad Thames frequently feature automatic deadlocking spring latches that lock residents outside. We use delicate bypass cards and non-marking shims to release the latch in minutes without timber splintering.',
      },
      {
        title: 'Worn euro cylinders on high-traffic communal entrance doors',
        description: 'Shared entrances in modern residential blocks along Jamaica Road endure constant daily cycling that wears down internal pins. We re-pin the cylinder housing or fit heavy-duty anti-pick barrels keyed to existing building suites.',
      },
      {
        title: 'Seized shutter bullet locks on railway arch businesses',
        description: 'Independent breweries, workshops, and cafes operating under Victorian railway arches rely on heavy shutter locks that jam from railway vibration and road grit. We service stuck locking pins and fit weather-shielded replacements on site.',
      },
      {
        title: 'Antique mortice deadlocks binding in settled period brick buildings',
        description: 'Victorian residential terraces frequently feature five-lever mortice locks that drag against frame keeps as buildings settle. We ease the strike pocket, lubricate internal levers with graphite, or install a compliant BS3621 deadlock.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can your locksmith reach an address in Bermondsey?',
        answer: 'We dispatch mobile units across south-east London daily. When you call, we evaluate immediate traffic along Jamaica Road and your postcode to provide an accurate arrival window.',
      },
      {
        question: 'Can you open period wharf apartment doors without drill damage?',
        answer: 'Yes. Non-destructive lock manipulation and latch bypass are always our first methods. We drill only as an absolute last resort if internal components have suffered total mechanical collapse.',
      },
      {
        question: 'Do you provide itemised invoices for Bermondsey landlords and businesses?',
        answer: 'Yes. We issue complete VAT invoices and written completion reports immediately following every job for property managers, letting agents, and business owners.',
      },
    ],
    nearbySlugs: ['london-bridge', 'canary-wharf', 'peckham', 'lewisham', 'lambeth'],
  },

  brixton: {
    heroLine: 'Prompt mobile lock opening, lock replacements, and composite door repairs across Brixton.',
    intro: `Locked out of a Victorian conversion flat or terraced house in Brixton? We provide fast, practical mobile locksmith assistance for homeowners, private tenants, and commercial businesses across SW2 and SW9. Whether your front door clicked shut while stepping out or your five-lever deadbolt is refusing the key, our mobile workshop attends ready to help. Dialling our number connects you directly with a skilled engineer rather than an automated call centre. We discuss the issue and state a firm, all-inclusive price before our vehicle sets off, ensuring you never face unexpected fees. Non-destructive door opening is our first priority: we pick lock cylinders and ease latches open cleanly without scratching paintwork or splitting timber frames. When locks are worn, damaged, or need changing following a change of tenancy near Brixton Hill or Brockwell Park, we install British Standard insurance-rated hardware on site.`,
    commonProblems: [
      {
        title: 'Jammed night latches on converted Victorian apartment doors',
        description: 'Victorian conversions throughout Brixton often have spring latches that slip into deadlocked positions unexpectedly. We slide non-marking bypass tools into the frame gap to release the latch cleanly without woodwork splintering.',
      },
      {
        title: 'Stiff five-lever mortice deadlocks on terraced timber front doors',
        description: 'Traditional terraced houses often rely on five-lever mortice deadlocks where levers stick from age and lack of lubrication. We service the lock mechanism, ease the strike pocket, or fit a fresh BS3621 insurance-rated replacement.',
      },
      {
        title: 'Commercial storefront and market shutter lock failures near Electric Avenue',
        description: 'Local market stalls, retail shops, and music venues rely on narrow-stile aluminium entrance locks and shutter padlocks that take heavy daily use. We service stuck locking pins, repair latch keepers, and fit commercial replacements.',
      },
      {
        title: 'Snapped brass keys inside front entrance euro profile cylinders',
        description: 'Rushing commuters can twist keys at an awkward angle, snapping the thin brass keyway off inside the cylinder. We extract the broken fragment cleanly using micro-extractor tools and supply freshly cut keys on site.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can an emergency locksmith arrive at my flat in Brixton?',
        answer: 'Our mobile engineers travel across south London daily. When you call, we check current road conditions along Brixton Road and your postcode to provide an accurate arrival window before booking.',
      },
      {
        question: 'Do you charge an extra call-out charge on top of the quote in Brixton?',
        answer: 'No. We provide 100% transparent pricing. The quote agreed over the phone is the exact total you pay on completion, with no hidden travel fees or mileage surcharges.',
      },
      {
        question: 'Can you replace my locks today if I just moved into a Brixton property?',
        answer: 'Yes. We carry a wide range of British Standard mortice deadlocks and anti-snap euro profile cylinders to replace external locks in a single visit.',
      },
    ],
    nearbySlugs: ['clapham', 'streatham', 'lambeth', 'peckham', 'battersea'],
  },

  wandsworth: {
    heroLine: 'Direct mobile lock opening, lock replacements, and composite door repairs in Wandsworth.',
    intro: `Locked out by the river or stuck outside your family home in Wandsworth? We provide swift, direct mobile locksmith assistance throughout SW18. From grand Victorian houses lining Wandsworth Common to contemporary riverside apartments near the Wandle and Southside Shopping Centre, our roadside van arrives ready to resolve any lock complication. Speaking with us puts you directly in contact with the tradesperson attending your property, ensuring realistic timing and a guaranteed fixed quotation before we set off. Non-destructive entry is our main focus on every lockout: by manipulating tumbler pins and carefully slipping latch bolts, we regain access without damaging your door sash or surrounding woodwork. If your locking mechanism has broken mechanically or you wish to upgrade to insurance-rated security, we stock British Standard deadlocks and anti-snap euro cylinders ready for immediate fitting.`,
    commonProblems: [
      {
        title: 'Dropped composite front doors jamming multi-point locking hooks',
        description: 'Edwardian homes and modern family renovations often suffer from dropped hinges that make lifting composite door handles difficult. We realign the door sash, adjust frame keeps, and replace worn gearboxes for smooth closing.',
      },
      {
        title: 'Snapped keys inside narrow euro cylinders on garden French doors',
        description: 'Rear patio and garden access doors endure regular exposure, causing keys to twist and snap off flush inside the barrel. We use precision spiral extractors to pull out the broken piece without needing a full barrel replacement.',
      },
      {
        title: 'Stiff five-lever mortice deadlocks on timber porch entrances',
        description: 'Timber porches and vestibule doors collect moisture over winter, causing internal steel levers to rust and jam. We clean out the lock case, lubricate the levers with graphite, or install a compliant BS3621 replacement.',
      },
      {
        title: 'Commercial storefront narrow-stile lock failures near Southside',
        description: 'Retail stores and eateries around Wandsworth High Street depend on bullet locks and narrow-profile aluminium entrance locks that bind from road grit. We service stuck locking pins and supply heavy-duty replacements on site.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can your locksmith reach an address in Wandsworth?',
        answer: 'We dispatch mobile vans throughout south-west London daily. When you call, we evaluate immediate traffic along the South Circular and your postcode to provide an accurate arrival window.',
      },
      {
        question: 'Can you open period Wandsworth front doors without damaging the woodwork?',
        answer: 'Yes. Non-destructive entry is our primary method. We pick lock cylinders and bypass latches using precision tools that protect both the door sash and decorative frame.',
      },
      {
        question: 'Do you carry British Standard locks that meet UK home insurance criteria?',
        answer: 'Yes. Our mobile workshop stocks BS3621 mortice deadlocks and 3-star diamond-rated anti-snap euro cylinders that satisfy all UK household insurance policies.',
      },
    ],
    nearbySlugs: ['battersea', 'clapham', 'tooting', 'fulham', 'chiswick'],
  },

  tooting: {
    heroLine: 'Rapid mobile lock opening, lock repairs, and new security keys across Tooting.',
    intro: `Locked out of your terraced house or flat in Tooting? We operate an active mobile locksmith van assisting local residents, market traders, and landlords across Tooting Broadway and Tooting Bec. The area is filled with charming Edwardian villas, Victorian red-brick cottages, and thriving high street businesses. When a night latch catches unexpectedly or a cylinder lock jams tight, our roadside workshop comes straight to your location. You converse directly with the attending tradesperson from your first enquiry, securing an upfront agreed price before any tools come out. We prioritize non-invasive door opening methods, picking internal pins and manipulating latches to keep your door frame and paintwork completely unmarked. Should a multi-point lock have stripped or you wish to upgrade to insurance-rated deadlocks, our inventory carries British Standard hardware ready to install immediately.`,
    commonProblems: [
      {
        title: 'Accidentally locked rim night latches on Victorian terraced front doors',
        description: 'Terraced properties around Tooting Bec frequently feature surface-mounted rim latches that lock tenants outside when doors blow shut. We slide delicate non-marking bypass tools into the frame seam to retract the latch in minutes without timber damage.',
      },
      {
        title: 'Jammed multi-point gearboxes on composite patio doors',
        description: 'Rear garden access doors experience heavy daily use, leading to strained multi-point gearboxes that refuse to lock. We dismantle the door handle, replace the stripped central gearbox, and align all frame receivers.',
      },
      {
        title: 'Market trader and high street shopfront lock failures along Mitcham Road',
        description: 'Retail stores and market units around Tooting Market require fast repairs when narrow-profile aluminium door locks bind. We service stuck locking latches, adjust door closers, and install high-security euro cylinders.',
      },
      {
        title: 'Worn five-lever mortice deadlocks on timber front entrances',
        description: 'Older timber doors frequently drop over time, causing mortice deadbolts to drag heavily against the brass frame keep. We adjust the strike plate, lubricate the levers with graphite, or install a compliant BS3621 replacement.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can your locksmith reach an address in Tooting?',
        answer: 'We dispatch mobile vans across south London daily. When you call, we evaluate immediate traffic along Tooting High Street and your postcode to provide an accurate arrival estimate before booking.',
      },
      {
        question: 'Will opening my door in Tooting cause cosmetic damage?',
        answer: 'No. Our technicians specialise in non-destructive entry. We pick locks and ease latches open using precision tools, keeping your door, frame, and paintwork completely unharmed.',
      },
      {
        question: 'Can you replace my locks today to meet insurance standards in Tooting?',
        answer: 'Yes. Our mobile workshop carries British Standard BS3621 mortice locks and 3-star diamond-rated anti-snap euro cylinders that comply with all UK household insurance policies.',
      },
    ],
    nearbySlugs: ['mitcham', 'streatham', 'wandsworth', 'clapham', 'brixton'],
  },

  fitzrovia: {
    heroLine: 'Discreet non-destructive door entry, lock upgrades, and fine hardware servicing in Fitzrovia.',
    intro: `Stuck outside an office, design agency, or apartment in Fitzrovia? We operate an agile mobile locksmith van assisting businesses, restaurants, and residents throughout W1. Fitzrovia’s compact streets near Charlotte Street, Goodge Street, and Tottenham Court Road blend heritage commercial brickwork with stylish loft conversions. When a digital keypad fails, an entrance latch binds, or keys disappear during a busy evening shift, our technician responds with specialist entry tools. Dialling our number connects you straight to an experienced tradesperson who knows West End hardware. We provide a firm, upfront quotation over the telephone so your costs remain completely transparent. Our team focuses on damage-free opening, using delicate bypass shims and pick needles to open doors without marking timber surrounds. If hardware has failed or you need commercial master key suiting, we carry British Standard deadlocks and high-security cylinders ready to fit.`,
    commonProblems: [
      {
        title: 'Binding lever deadlocks on heavy Georgian timber entrance doors',
        description: 'Georgian townhouses near Charlotte Street frequently settle within their frames, causing heavy deadbolts to bind in brass strike plates. We ease the internal mechanism, lubricate levers with dry graphite, and align the strike pocket.',
      },
      {
        title: 'Accidentally slipped night latches on converted apartment doors',
        description: 'Apartments throughout Fitzrovia often feature automatic deadlocking latches that snap shut when doors close. We employ non-marking bypass cards and shims to release the latch cleanly without woodwork splintering.',
      },
      {
        title: 'Master key system maintenance for media offices and production studios',
        description: 'Creative agencies and production suites along Tottenham Street require tightly controlled access. We re-pin worn lock cylinders, install restricted-profile barrels to prevent unauthorised key copying, and service complex master suites.',
      },
      {
        title: 'Concealed sash window lock failures in heritage residences',
        description: 'Listed properties require working key-operated window restrictors and sash fasteners to meet household insurance requirements. We service vintage brass fasteners, replace seized locking bolts, and verify smooth catch operation.',
      },
    ],
    faqs: [
      {
        question: 'Can you unlock a period timber door in Fitzrovia without drilling?',
        answer: 'Yes. Non-destructive entry is our primary method. We pick internal tumblers and ease latches using delicate tools, leaving antique timber doors, painted finishes, and architectural brassware completely unmarked.',
      },
      {
        question: 'How quickly can your locksmith reach an address in Fitzrovia?',
        answer: 'We operate mobile units across central London day and night. When you call, we check immediate traffic and your street location to give you a precise arrival window before confirming.',
      },
      {
        question: 'Do you carry British Standard locks suitable for listed buildings in Fitzrovia?',
        answer: 'Yes. Our mobile workshop stocks BS3621 deadlocks and high-security cylinders in polished brass, satin chrome, and antique bronze finishes to complement period entrances.',
      },
    ],
    nearbySlugs: ['bloomsbury', 'soho', 'marylebone', 'mayfair', 'camden'],
  },

  camden: {
    heroLine: 'Emergency door opening, lock replacements, and composite door repairs across Camden.',
    intro: `Stuck on the doorstep of your flat or terraced house in Camden? We run an agile mobile locksmith van serving music venues, independent retailers, and local residents across NW1. Camden's bustling environment features a diverse mix of Victorian conversion maisonettes, Georgian terraces near Regent’s Canal, and high-footfall shopfronts around Camden Lock. When an automatic latch clicks shut or an old mortice lock refuses to budge, our technician arrives ready for action. You speak directly with the tradesperson attending your address, receiving clear advice and a guaranteed price before we dispatch. We always attempt non-destructive entry first, picking barrels and sliding latch tools into the frame seam so your woodwork remains unmarked. If your lock has jammed mechanically or you need fresh keys after moving into a new home, our van carries British Standard deadlocks and anti-snap euro cylinders to finish work on our initial visit.`,
    commonProblems: [
      {
        title: 'Jammed night latches on converted Victorian apartment doors',
        description: 'Period conversions throughout Camden often have spring latches that slip into deadlocked positions unexpectedly. We slide non-marking bypass tools into the frame gap to release the latch cleanly without woodwork splintering.',
      },
      {
        title: 'Worn five-lever mortice deadlocks on terraced timber front doors',
        description: 'Traditional terraced houses often rely on five-lever mortice deadlocks where levers stick from age and lack of lubrication. We service the lock mechanism, ease the strike pocket, or fit a fresh BS3621 insurance-rated replacement.',
      },
      {
        title: 'Commercial storefront and market shutter lock failures near Camden Lock',
        description: 'Market stalls and retail venues along Camden High Street depend on bullet locks and narrow-profile aluminium entrance locks that bind from heavy footfall and dust. We service stuck locking pins, repair latch keepers, and install commercial replacements.',
      },
      {
        title: 'Snapped brass keys inside front entrance euro profile cylinders',
        description: 'Busy commuters rushing for tubes can twist brass keys at an awkward angle, snapping key blades inside high-security barrels. We use precision spiral extractor needles to pull out the broken piece without barrel damage.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can your locksmith reach an address in Camden?',
        answer: 'We dispatch mobile units across north and central London daily. When you call, we evaluate immediate Camden High Street traffic and your postcode to provide an accurate arrival window.',
      },
      {
        question: 'Can you open high-security flat doors in Camden without drilling?',
        answer: 'Yes. Non-destructive lock manipulation and latch bypass are our first methods. We drill only as an absolute last resort if the cylinder has suffered severe internal mechanical breakage.',
      },
      {
        question: 'Do you charge a separate call-out fee on top of your quote in Camden?',
        answer: 'No. We provide 100% transparent pricing. The quote agreed over the phone is the exact total you pay on completion, with no hidden travel fees or mileage surcharges.',
      },
    ],
    nearbySlugs: ['islington', 'holloway', 'fitzrovia', 'kilburn', 'archway'],
  },

  greenwich: {
    heroLine: 'Discreet non-destructive door entry, lock upgrades, and fine hardware servicing in Greenwich.',
    intro: `Locked out of a maritime heritage property or modern riverside apartment in Greenwich? We deliver responsive mobile locksmith services for residential homeowners, local retailers, and tenants across SE10. Greenwich combines historic Georgian townhouses and Victorian terraces near the park with contemporary developments at Greenwich Millennium Village. When a mortice deadlock binds or keys are misplaced following an evening out, our roadside unit responds equipped for non-invasive entry. Speaking with our line connects you with an active locksmith who knows traditional and modern door hardware. We discuss the situation and confirm a fixed, all-inclusive figure before any vehicle departs. Our approach centres on non-destructive door opening: we manipulate internal lock levers and slip latches cleanly, protecting period woodwork and architectural paintwork. Should hardware need updating to satisfy home insurance policies, our inventory includes British Standard BS3621 deadlocks and anti-snap cylinders installed on site.`,
    commonProblems: [
      {
        title: 'Binding five-lever mortice deadlocks on historic naval timber doors',
        description: 'Period Georgian and Victorian residences near Greenwich Park feature heavy timber entrance doors that shift with river moisture, causing deadbolts to drag against brass strike plates. We re-align the strike box and service the internal lever pack.',
      },
      {
        title: 'Accidentally locked night latches on converted riverside apartment doors',
        description: 'Apartments throughout Greenwich frequently have automatic night latches that lock occupants out when doors swing shut. We employ delicate bypass tools to retract the latch in minutes without splintering door woodwork.',
      },
      {
        title: 'Jammed multi-point gearboxes on Millennium Village composite doors',
        description: 'Modern waterfront residences face wind exposure that pushes particulate into multi-point tracks, causing handles to stiffen. We dismantle the handle plate, replace damaged central gearboxes, and adjust roller keeps.',
      },
      {
        title: 'Commercial storefront narrow-stile lock failures near Cutty Sark',
        description: 'Independent retailers, cafes, and local takeaways along Greenwich Church Street require fast repairs when narrow-profile aluminium door locks bind. We service stuck locking latches and install high-security commercial cylinders.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can your locksmith reach an address in Greenwich?',
        answer: 'We dispatch mobile engineers across south-east London daily. When you call, we evaluate immediate Blackwall Tunnel approach traffic and your postcode to provide an accurate arrival window.',
      },
      {
        question: 'Can you open period Greenwich front doors without damaging the woodwork?',
        answer: 'Yes. Non-destructive entry is our primary method. We pick lock cylinders and bypass latches using precision tools that protect both the door sash and decorative frame.',
      },
      {
        question: 'Do you carry British Standard locks that meet UK home insurance criteria in Greenwich?',
        answer: 'Yes. Our mobile workshop stocks BS3621 mortice deadlocks and 3-star diamond-rated anti-snap euro cylinders that satisfy all UK household insurance policies.',
      },
    ],
    nearbySlugs: ['lewisham', 'canary-wharf', 'bermondsey', 'peckham', 'poplar'],
  },

  battersea: {
    heroLine: 'Prompt mobile lock opening, lock replacements, and composite door repairs in Battersea.',
    intro: `Facing a lockout around Battersea? We provide rapid mobile locksmith assistance across SW11, covering the Power Station development, Nine Elms riverside residences, and the tree-lined streets near Battersea Park. Properties in Battersea range from ultra-modern high-rises with electronic smart locks to classic red-brick mansion flats and Victorian artisan cottages. When digital access readers fail or keys are locked inside, our mobile engineer attends with dedicated bypass gear. You speak directly with a practical locksmith who explains the required solution and confirms one fixed price before traveling. Our primary technique is non-destructive entry: by picking lock barrels and releasing latches with precision bypass tools, we open doors without harming frames or door leaves. If your lock has jammed mechanically or you need fresh keys after moving home, we supply insurance-compliant British Standard deadlocks and anti-snap cylinders on site.`,
    commonProblems: [
      {
        title: 'Electronic lock and digital handle failures in Power Station apartments',
        description: 'High-specification riverside developments in Battersea frequently feature electronic smart locks that can lock residents out when batteries drain. We diagnose electronic faults and execute clean non-destructive bypasses.',
      },
      {
        title: 'Slammed night latches on Victorian park mansion blocks',
        description: 'Mansion block apartments near Battersea Park commonly feature rim latches that lock automatically when the door swings shut. We use delicate bypass cards and precision tools to open the door in minutes without woodwork damage.',
      },
      {
        title: 'Worn five-lever mortice deadlocks on Shaftesbury estate cottages',
        description: 'Terraced artisan cottages often feature classic five-lever mortice locks that grow stiff from dust and minor door settling. We dismantle the lock case, clean the levers, or install a compliant BS3621 replacement.',
      },
      {
        title: 'Snapped brass keys inside front entrance euro cylinders',
        description: 'Rushing commuters can twist keys at an awkward angle, snapping the thin brass keyway off inside the cylinder. We extract the broken fragment cleanly using micro-extractor tools and supply freshly cut keys on site.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can your locksmith reach an address in Battersea?',
        answer: 'We dispatch mobile units across south-west and central London daily. When you call, we evaluate immediate traffic along Battersea Park Road and your postcode to provide an accurate arrival estimate.',
      },
      {
        question: 'Can you open high-security apartment doors in Battersea without drilling?',
        answer: 'Yes. Non-destructive lock manipulation and latch bypass are our first methods. We drill only as an absolute last resort if the cylinder has suffered severe internal mechanical breakage.',
      },
      {
        question: 'Do you carry British Standard locks that satisfy home insurance in Battersea?',
        answer: 'Yes. Our mobile workshop stocks BS3621 mortice deadlocks and 3-star diamond-rated anti-snap euro cylinders that meet all UK insurer standards.',
      },
    ],
    nearbySlugs: ['chelsea', 'wandsworth', 'clapham', 'fulham', 'kensington'],
  },

  peckham: {
    heroLine: 'Rapid mobile lock opening, lock replacements, and composite door repairs in Peckham.',
    intro: `Key jammed in your Peckham door or locked outside after an evening out? We provide swift mobile locksmith help for homeowners, apartment tenants, and independent businesses across SE15. From quiet Victorian residential streets near Bellenden Road and Peckham Rye to creative studios and bustling commercial venues along Rye Lane, our mobile workshop arrives ready to help. When you phone us, you deal directly with the attending tradesperson who understands door hardware. We listen to the issue and give you a firm, transparent price before our van sets out. Our primary commitment is non-destructive door opening: using dedicated tension tools and latch bypass shims, we let you back inside without cracking door frames or marking paint finishes. If internal gears have sheared or you want higher security hardware to satisfy domestic insurance requirements, our mobile van supplies British Standard deadlocks and anti-snap euro cylinders fitted on the spot.`,
    commonProblems: [
      {
        title: 'Jammed night latches on converted Victorian apartment doors',
        description: 'Victorian conversions throughout Peckham often have spring latches that slip into deadlocked positions unexpectedly. We slide non-marking bypass tools into the frame gap to release the latch cleanly without woodwork splintering.',
      },
      {
        title: 'Commercial storefront and shutter lock failures along Rye Lane',
        description: 'Retail stores, cafes, and rooftop venues along Rye Lane depend on bullet locks and narrow-profile aluminium entrance locks that bind from dust and heavy footfall. We service stuck locking pins, repair latch keeps, and install high-security replacements.',
      },
      {
        title: 'Stiff five-lever mortice deadlocks on Bellenden Road period houses',
        description: 'Traditional terraced houses often rely on five-lever mortice deadlocks where levers stick from age and lack of lubrication. We service the lock mechanism, ease the strike pocket, or fit a fresh BS3621 insurance-rated replacement.',
      },
      {
        title: 'Snapped brass keys inside front entrance euro profile cylinders',
        description: 'Busy commuters rushing for trains can twist brass keys forcefully, snapping the blade flush inside the cylinder barrel. We use micro-spiral extraction needles to remove the broken fragment cleanly without needing a new cylinder.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can your locksmith reach an address in Peckham?',
        answer: 'We dispatch mobile engineers across south-east London daily. When you call, we evaluate immediate traffic along Rye Lane and your postcode to provide an accurate arrival window.',
      },
      {
        question: 'Can you open locked timber doors in Peckham without drilling?',
        answer: 'Yes. Non-destructive entry is our primary method. We pick lock cylinders and bypass latches using precision tools that protect both the door sash and decorative frame.',
      },
      {
        question: 'Do you charge a separate call-out fee on top of your quote in Peckham?',
        answer: 'No. We provide 100% transparent pricing. The quote agreed over the phone is the exact total you pay on completion, with no hidden travel fees or mileage surcharges.',
      },
    ],
    nearbySlugs: ['lewisham', 'brixton', 'bermondsey', 'greenwich', 'lambeth'],
  },

  hackney: {
    heroLine: 'Mobile lock opening, commercial hardware repairs, and lock upgrades in Hackney.',
    intro: `Locked outside your flat, house, or creative workspace in Hackney? We provide practical mobile locksmith services across E8 and E9, assisting residents, studio managers, and shopkeepers daily. From bustling cafes along Broadway Market and Mare Street to converted Victorian terraces and canal-side lofts near London Fields, our roadside van comes prepared for any lock challenge. When you ring us, you speak directly with the attending tradesperson rather than an automated answering desk. We listen to the problem and provide a guaranteed, all-inclusive price before our vehicle sets off. Our first priority is non-destructive door entry: using precision tensioners and latch-slipping blades, we restore access without leaving scratches or cracking door frames. If your lock has suffered mechanical failure or you want new hardware after moving, our inventory includes British Standard deadlocks and anti-snap cylinders to finish the job immediately.`,
    commonProblems: [
      {
        title: 'Slammed automatic rim latches on converted industrial warehouse lofts',
        description: 'Converted loft apartments across Hackney commonly feature rim latches that lock automatically when the door swings shut. We use delicate bypass cards and precision tools to open the door in minutes without woodwork damage.',
      },
      {
        title: 'Stiff five-lever mortice deadlocks on Victorian terraced front doors',
        description: 'Period residential entrances often have classic five-lever mortice locks that grow stiff from dust and minor door settling. We dismantle the lock case, clean the levers, or install a compliant BS3621 replacement.',
      },
      {
        title: 'Commercial storefront and shutter lock failures near Broadway Market',
        description: 'Boutiques, bars, and cafes along Broadway Market and Mare Street rely on shutter bullet locks and narrow-stile locks that jam from road grit. We free stuck bullet pins, drill seized padlocks cleanly without track damage, and fit heavy-duty replacements.',
      },
      {
        title: 'Snapped keys inside narrow euro cylinders on garden French doors',
        description: 'Garden access doors endure heavy seasonal use, leading to worn brass keys twisting and breaking off in the barrel. We use micro-spiral extraction needles to remove the broken fragment cleanly without replacing the lock.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can an emergency locksmith arrive at my premises in Hackney?',
        answer: 'We dispatch mobile units across east London daily. When you call, we evaluate local street access and traffic to provide an accurate arrival window before booking.',
      },
      {
        question: 'Can you unlock commercial premises in Hackney after normal hours?',
        answer: 'Yes. We assist commercial venues, creative agencies, and residents across Hackney at any hour, arriving prepared with commercial-grade hardware to secure your property.',
      },
      {
        question: 'Do you carry British Standard locks suitable for domestic insurance in Hackney?',
        answer: 'Yes. Our mobile workshop stocks BS3621 mortice deadlocks and high-security cylinders that comply with all UK household insurance policies.',
      },
    ],
    nearbySlugs: ['shoreditch', 'islington', 'stratford', 'walthamstow', 'leyton'],
  },

  'shepherds-bush': {
    heroLine: "Emergency door opening, lock replacements, and composite door repairs in Shepherd's Bush.",
    intro: `Stuck on your doorstep in Shepherd's Bush after keys went missing or a latch locked shut? We operate a responsive mobile locksmith service assisting residents, flat sharers, and shopkeepers across W12. The area blends Victorian terraced streets near Askew Road with busy commercial parades along Goldhawk Road and high-density apartments near Shepherd's Bush Green. When door hardware fails, our van heads directly to your location equipped with specialist non-destructive decoders. You converse one-on-one with the attending engineer from the initial call, securing an agreed upfront price with no surprise charges. We focus on non-invasive opening techniques, picking lock cylinders and gently bypassing latches so your door frame, paintwork, and joinery stay completely undamaged. Where a lock mechanism has stripped or you require fresh cylinders after moving in, we carry British Standard deadlocks and 3-star anti-snap barrels for immediate installation.`,
    commonProblems: [
      {
        title: 'Jammed night latches on converted Victorian apartment doors',
        description: 'Period conversions throughout Shepherd’s Bush often have spring latches that slip into deadlocked positions unexpectedly. We slide non-marking bypass tools into the frame gap to release the latch cleanly without woodwork splintering.',
      },
      {
        title: 'Worn five-lever mortice deadlocks on terraced timber front doors',
        description: 'Traditional terraced houses often rely on five-lever mortice deadlocks where levers stick from age and lack of lubrication. We service the lock mechanism, ease the strike pocket, or fit a fresh BS3621 insurance-rated replacement.',
      },
      {
        title: 'Commercial storefront and shutter lock repairs on Uxbridge Road',
        description: 'Retail stores and takeaways along Uxbridge Road depend on bullet locks and narrow-profile aluminium entrance locks that bind from heavy footfall. We service stuck locking pins, repair latch keepers, and install commercial replacements.',
      },
      {
        title: 'Snapped brass keys inside front entrance euro profile cylinders',
        description: 'Busy commuters rushing for tubes can twist brass keys at an awkward angle, snapping key blades inside high-security barrels. We use precision spiral extractor needles to pull out the broken piece without barrel damage.',
      },
    ],
    faqs: [
      {
        question: "How quickly can your locksmith reach an address in Shepherd's Bush?",
        answer: 'We dispatch mobile units across west London daily. When you call, we evaluate immediate Uxbridge Road traffic and your postcode to provide an accurate arrival window.',
      },
      {
        question: "Can you open high-security flat doors in Shepherd's Bush without drilling?",
        answer: 'Yes. Non-destructive lock manipulation and latch bypass are our first methods. We drill only as an absolute last resort if the cylinder has suffered severe internal mechanical breakage.',
      },
      {
        question: "Do you charge a separate call-out fee on top of your quote in Shepherd's Bush?",
        answer: 'No. We provide 100% transparent pricing. The quote agreed over the phone is the exact total you pay on completion, with no hidden travel fees or mileage surcharges.',
      },
    ],
    nearbySlugs: ['hammersmith', 'acton', 'notting-hill', 'chiswick', 'kensington'],
  },

  'notting-hill': {
    heroLine: 'Discreet non-destructive door opening, lock upgrades, and fine hardware servicing in Notting Hill.',
    intro: `Locked outside your Victorian terrace or garden flat in Notting Hill? We operate a swift mobile locksmith unit serving homeowners, independent boutique owners, and residential tenants across W11. From pastel-painted townhouses near Portobello Road to private communal garden properties around Ladbroke Grove, our mobile engineer responds promptly with delicate non-marking tools. Calling our direct number connects you immediately with the technician who handles your callout, giving you straightforward technical guidance and a confirmed price before we travel. We focus strictly on damage-free entry methods: using precision pick sets and custom bypass blades, we open doors cleanly while keeping your decorative timber and fine brass fittings in flawless condition. When locks are broken, worn from age, or you need fresh security keys following a property purchase, our mobile inventory carries British Standard BS3621 deadlocks and anti-snap euro barrels for immediate installation.`,
    commonProblems: [
      {
        title: 'Binding five-lever deadlocks on heavy painted timber entrance doors',
        description: 'Victorian stucco townhouses around Portobello Road and Ladbroke Grove often feature substantial wooden doors that expand with seasonal moisture, causing deadbolts to drag against strike plates. We re-align the strike box and service the internal lever pack.',
      },
      {
        title: 'Slammed night latches on garden flat entrance doors',
        description: 'Lower-ground apartments and garden flats frequently have automatic deadlocking latches that catch when doors close. We slip the latch using delicate non-marking bypass tools, regaining entry in minutes without disturbing polished surfaces.',
      },
      {
        title: 'Restricted-profile key and lock upgrades for Portobello boutique storefronts',
        description: 'Antique shops and boutiques along Portobello Road require restricted key systems to prevent unauthorized key duplication. We install anti-drill, anti-pick euro cylinders with registered key cards for complete security management.',
      },
      {
        title: 'Concealed sash window lock failures in heritage residences',
        description: 'Listed properties require working key-operated window restrictors and sash fasteners to meet household insurance requirements. We service vintage brass fasteners, replace seized locking bolts, and verify smooth catch operation.',
      },
    ],
    faqs: [
      {
        question: 'Can you open Notting Hill front doors without damaging fine paintwork?',
        answer: 'Yes. We prioritise non-destructive picking and delicate bypass methods. Our tools are designed to gain entry without scratching paint, chipping woodwork, or damaging door frames.',
      },
      {
        question: 'How quickly can your locksmith reach an address in Notting Hill?',
        answer: 'We dispatch mobile units across west and central London daily. When you call, we check immediate traffic conditions to give you an accurate arrival estimate before dispatch.',
      },
      {
        question: 'Do you carry locks in classic brass and bronze finishes for period Notting Hill homes?',
        answer: 'Yes. Our mobile van stocks British Standard BS3621 mortice deadlocks and architectural cylinder locks in polished brass, aged bronze, and satin nickel finishes.',
      },
    ],
    nearbySlugs: ['kensington', 'shepherds-bush', 'brent', 'fulham', 'chelsea'],
  },

  bloomsbury: {
    heroLine: 'Discreet non-destructive door entry, lock upgrades, and fine joinery repairs in Bloomsbury.',
    intro: `Keys lost or locked inside a Bloomsbury property? We provide attentive mobile locksmith services across WC1, supporting academic faculties, medical consultancies, and residents of historic garden squares. Bloomsbury features magnificent Georgian architecture, from Russell Square and Bedford Square townhouses to contemporary university halls and mansion apartments along Marchmont Street. When an antique mortice bolt jams or an automatic night latch snaps shut, our technician arrives equipped for delicate non-destructive entry. You speak directly with the tradesperson attending your property, agreeing an all-inclusive rate before our van sets out. We pride ourselves on non-invasive opening techniques: by decoding lever tumblers and slipping latch mechanisms, we gain access without splintering fine timber or disturbing architectural brassware. Should your entrance require upgraded hardware to satisfy domestic insurance requirements, our mobile workshop supplies British Standard deadlocks and high-specification cylinders on site.`,
    commonProblems: [
      {
        title: 'Jammed five-lever mortice deadlocks on heavy Georgian entrance doors',
        description: 'Historic timber entrance doors in Bloomsbury frequently settle within their frames, causing heavy deadbolts to bind in brass strike plates. We ease the internal mechanism, lubricate levers with dry graphite, and align the strike pocket.',
      },
      {
        title: 'Accidentally slipped night latches on converted mansion apartment doors',
        description: 'Mansion flats near Russell Square often feature automatic deadlocking latches that snap shut when doors close. We employ non-marking bypass cards and shims to release the latch cleanly without woodwork splintering.',
      },
      {
        title: 'Master key system maintenance for university offices and institutes',
        description: 'Academic departments, publishing houses, and research suites require tightly controlled access. We re-pin worn lock cylinders, install restricted-profile barrels to prevent unauthorised key copying, and service complex master suites.',
      },
      {
        title: 'Concealed sash window lock failures in heritage residences',
        description: 'Listed properties require working key-operated window restrictors and sash fasteners to meet household insurance requirements. We service vintage brass fasteners, replace seized locking bolts, and verify smooth catch operation.',
      },
    ],
    faqs: [
      {
        question: 'Can you unlock a period timber door in Bloomsbury without drilling?',
        answer: 'Yes. Non-destructive entry is our primary method. We pick internal tumblers and ease latches using delicate tools, leaving antique timber doors, painted finishes, and architectural brassware completely unmarked.',
      },
      {
        question: 'How quickly can your locksmith reach an address in Bloomsbury?',
        answer: 'We operate mobile units across central London day and night. When you call, we check immediate traffic and your street location to give you a precise arrival window before confirming.',
      },
      {
        question: 'Do you carry British Standard locks suitable for listed buildings in Bloomsbury?',
        answer: 'Yes. Our mobile workshop stocks BS3621 deadlocks and high-security cylinders in polished brass, satin chrome, and antique bronze finishes to complement period entrances.',
      },
    ],
    nearbySlugs: ['holborn', 'fitzrovia', 'camden', 'islington', 'covent-garden'],
  },

  enfield: {
    heroLine: 'Mobile door opening, lock replacements, and composite door repairs across Enfield.',
    intro: `Need an emergency door opening or cylinder replacement in Enfield? We run an active mobile locksmith van assisting suburban homeowners, private tenants, and commercial businesses across EN1 and EN2. The borough spans traditional 1930s semi-detached properties in Enfield Town, older character cottages near Forty Hall, and modern composite doors on newer housing estates. When your key snaps inside the barrel or a multi-point lock mechanism sticks, our engineer responds with dedicated bypass tools. You speak straight with the practical locksmith who will carry out the work, agreeing a clear, all-inclusive price before we dispatch. Our primary method is non-invasive manipulation: using delicate lock picks and latch shims, we open doors cleanly without splintering woodwork or harming frames. Should you require replacement hardware, we carry British Standard BS3621 deadlocks and anti-snap euro profile cylinders to complete the job in one visit.`,
    commonProblems: [
      {
        title: 'Dropped composite front doors jamming multi-point locking hooks',
        description: 'Suburban homes in Enfield frequently experience dropped door sashes where multi-point hooks jam tight against the frame. We re-hang the door, adjust the strike plates, and replace stripped gearbox mechanisms.',
      },
      {
        title: 'Snapped keys inside cylinder locks on patio and back doors',
        description: 'Rear garden access doors endure regular exposure, causing keys to twist and snap off flush inside the barrel. We use precision spiral extractors to pull out the broken piece without needing a full barrel replacement.',
      },
      {
        title: 'Worn five-lever mortice deadlocks on timber porch entrances',
        description: 'Traditional semi-detached homes often feature original timber porch doors fitted with classic deadlocks that stiffen with winter moisture. We clean out old grease, lubricate levers with dry graphite, or install a compliant BS3621 replacement.',
      },
      {
        title: 'Seized shutter bullet locks on industrial estate units',
        description: 'Commercial facilities and trade counters along the Lea Valley depend on shutter bullet locks that jam from road grit and rain. We free stuck bullet pins, drill seized housings cleanly when necessary, and supply keyed-alike replacements.',
      },
    ],
    faqs: [
      {
        question: 'How quickly can your locksmith reach an address in Enfield?',
        answer: 'We dispatch mobile engineers across north London daily. When you call, we evaluate immediate A10 traffic and your postcode to provide an accurate arrival estimate before booking.',
      },
      {
        question: 'Can you repair my uPVC door mechanism instead of replacing the entire door?',
        answer: 'Yes. In the vast majority of cases, only the central gearbox or locking strip needs replacement. We carry universal replacement parts for all major brands on our van.',
      },
      {
        question: 'Do you fit locks that meet UK home insurance criteria in Enfield?',
        answer: 'Yes. We supply and fit British Standard BS3621 mortice deadlocks and TS007 3-star anti-snap euro cylinders meeting all major UK home insurance policies.',
      },
    ],
    nearbySlugs: ['barnet', 'finchley', 'potters-bar', 'walthamstow', 'harrow'],
  },
};

// Check validation:
const allCompleted = { ...CURRENT_COMPLETED, ...finalBatch };
const allSlugs = new Set(AREAS.map((a) => a.slug));
const forbiddenWords = ['reliable', 'trusted', 'accredited', 'approved', 'best', 'your city'];
let errors = 0;

console.log('--- VALIDATING ALL 60 AREAS ---');

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

// Check 5-gram overlap across all 60 intros
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
console.log(`Highest 5-gram overlap across all 60 intros: ${highestOverlap.pair} at ${highestOverlap.ratio.toFixed(1)}%`);

console.log(`Validation finished. Total errors: ${errors}`);

if (errors === 0) {
  const outsideSet = new Set(AREAS.filter((a) => a.outside_london).map((a) => a.slug));
  let out = '// Completed Areas (ALL 60 AREAS)\nexport const PILOT_AREAS = {\n';
  for (const [slug, data] of Object.entries(allCompleted)) {
    if (outsideSet.has(slug)) {
      out += '  // TODO: Confirm with the business that this area is covered.\n';
    }
    out += '  ' + JSON.stringify(slug) + ': ' + JSON.stringify(data, null, 4).replace(/\\n/g, '\n  ') + ',\n';
  }
  out += '};\n';
  fs.writeFileSync('src/data/pilot-areas.js', out, 'utf8');
  console.log('Successfully saved src/data/pilot-areas.js with ALL 60 completed areas!');
}
