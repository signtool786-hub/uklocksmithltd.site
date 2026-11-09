import fs from 'fs';

const areasContent = fs.readFileSync('src/data/areas-source.csv', 'utf8');

function parseCSVLine(text) {
  const result = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '"') {
      inQuotes = !inQuotes;
    } else if (c === ',' && !inQuotes) {
      result.push(cur);
      cur = '';
    } else {
      cur += c;
    }
  }
  result.push(cur);
  return result;
}

const lines = areasContent.trim().replace(/\r\n/g, '\n').split('\n');
const areas = lines.slice(1).map((line) => {
  const cols = parseCSVLine(line);
  return {
    slug: cols[0].trim(),
    city: cols[1].trim(),
    title: cols[2].trim(),
    outside_london: cols[4].trim().toLowerCase() === 'true',
  };
});

// Full hand-crafted map of 60 unique descriptions:
const descriptions = {
  // 6 Pilots
  barnet: 'Locked out in Barnet? We open doors without damage, fit insurance-rated deadlocks, and quote every job before setting off. Speak with us on 07782 358 889.',
  fulham: 'Need a locksmith in Fulham right away? We handle lost flat keys, repair sash window locks, and replace euro cylinders cleanly. Call our team on 07782 358 889.',
  ilford: 'Stranded outside your property in Ilford? We pick jammed locks, change damaged front door cylinders, and give fixed quotes upfront. Call us on 07782 358 889.',
  islington: 'Locked out around Islington? We open failed latches, upgrade Georgian timber door locks to BS3621, and quote straightforward fees. Call us on 07782 358 889.',
  wembley: 'Key snapped in your Wembley door? We extract broken keys on site, fix multi-point uPVC mechanisms, and secure shop shutters. Phone our line on 07782 358 889.',
  clapham: 'Lost your keys in Clapham? We let you back inside without harming the door, replace night latches, and supply fresh keys on the spot. Call 07782 358 889.',

  // Outside London (7 cities: do not say London, no fast arrival promise)
  'milton-keynes': 'Locked out in Milton Keynes? We provide non-destructive door opening and lock changes with arrival confirmed on call. Ring our team on 07782 358 889.',
  'leighton-buzzard': 'Need locks changed in Leighton Buzzard? We fit high-security deadlocks and repair uPVC mechanisms with travel confirmed on call. Call 07782 358 889.',
  luton: 'Stuck outside in Luton? We gain entry without damaging your entrance, extract snapped keys, and agree all quotes in advance. Call us on 07782 358 889.',
  basildon: 'Lock problems in Basildon? We replace broken cylinders, service commercial shutters, and confirm timing over the telephone. Contact us on 07782 358 889.',
  watford: 'Misplaced keys in Watford? We offer damage-free door opening and new insurance-rated deadlocks with arrival confirmed on call. Call us on 07782 358 889.',
  harlow: 'Locked out around Harlow? We change worn euro barrels, adjust composite door locks, and provide upfront pricing on the phone. Ring us on 07782 358 889.',
  'potters-bar': 'Door lock jammed in Potters Bar? We pick open stuck doors cleanly and fit British Standard locks with timing confirmed on call. Call 07782 358 889.',

  // Remaining Greater London cities
  harrow: 'Locked out in Harrow? We open doors without drilling, replace faulty uPVC multi-point gearboxes, and quote fixed rates upfront. Ring us on 07782 358 889.',
  streatham: 'Stuck on your doorstep in Streatham? We manipulate latches cleanly, extract broken key pieces, and install fresh deadlocks. Call now on 07782 358 889.',
  acton: 'Need urgent lock repairs in Acton? We unlock jammed residential doors, replace damaged rim cylinders, and charge zero call-out fees. Call 07782 358 889.',
  holloway: 'Keys trapped inside your Holloway flat? We pick night latches open without woodwork damage and quote clear fees before traveling. Call 07782 358 889.',
  walthamstow: 'Snapped a key in Walthamstow? We remove broken blades cleanly, adjust dropping composite doors, and fit BS3621 mortice deadlocks. Call 07782 358 889.',
  hammersmith: 'Facing lock trouble in Hammersmith? We open slammed doors, fit anti-snap euro barrels, and offer transparent fixed prices. Speak with us on 07782 358 889.',
  kensington: 'Require a locksmith in Kensington? We unlock period front doors gently, replace brass night latches, and quote before setting off. Call 07782 358 889.',
  'london-city': 'Locked out within London City? We handle commercial door locks, office access issues, and emergency door opening without delay. Call 07782 358 889.',
  mayfair: 'Lock issues at your Mayfair property? We carry out discrete non-destructive entry and fit high-specification security locks. Phone us on 07782 358 889.',
  ealing: 'Locked outside your house in Ealing? We unlock doors without frame damage, fit replacement cylinders, and agree costs upfront. Call us on 07782 358 889.',
  marylebone: 'Need a locksmith in Marylebone? We open locked doors without drill damage, replace mortice deadlocks, and provide clear quotes. Ring us on 07782 358 889.',
  lambeth: 'Jammed front door lock in Lambeth? We pick cylinders open cleanly, repair damaged timber keeps, and supply new cut keys. Phone our desk on 07782 358 889.',
  mitcham: 'Lost house keys in Mitcham? We open stuck doors cleanly, fit anti-snap euro cylinders, and agree all pricing before setting off. Speak with 07782 358 889.',
  southall: 'Front door locked in Southall? We provide non-invasive door opening, fix uPVC multi-point systems, and quote fixed rates upfront. Call 07782 358 889.',
  rainham: 'Stuck outside your home in Rainham? We extract snapped keys, open jammed composite doors, and install insurance-rated hardware. Call 07782 358 889.',
  poplar: 'Locked out around Poplar? We pick apartment door locks without marks, replace worn cylinders, and give fixed quotations over the phone. Call 07782 358 889.',
  westminster: 'Lock problem in Westminster? We offer non-destructive entry for historic timber doors and fit high-security deadlocks. Speak to us on 07782 358 889.',
  chelsea: 'Stuck outside your flat in Chelsea? We unlock residential doors without damage, change antique mortice locks, and quote upfront. Speak with 07782 358 889.',
  stratford: 'Locked out in Stratford? We pick modern apartment locks, replace faulty euro cylinders, and charge clear fixed fees with no surprises. Call 07782 358 889.',
  soho: 'Key lost on a night out in Soho? We open jammed night latches cleanly, replace cylinder locks, and supply fresh keys on the spot. Call 07782 358 889.',
  'covent-garden': 'Need a locksmith in Covent Garden? We solve retail shutter lockouts, unlock commercial doors, and replace cylinders cleanly. Ring our team on 07782 358 889.',
  holborn: 'Keys snapped in Holborn? We extract broken fragments from lock barrels, open jammed doors, and fit new British Standard locks. Call 07782 358 889.',
  chiswick: 'Locked out in Chiswick? We open period timber doors cleanly, repair loose multi-point handles, and give firm quotes before dispatch. Call 07782 358 889.',
  archway: 'Door latch jammed in Archway? We slip latches open without frame damage, fit anti-snap euro locks, and quote upfront over the phone. Call 07782 358 889.',
  finchley: 'Key stuck in your Finchley door? We retrieve jammed keys, fix dropping uPVC mechanisms, and install insurance-rated deadlocks. Speak to us on 07782 358 889.',
  brent: 'Locked outside in Brent? We open doors without drilling, replace broken locks, and ensure straightforward pricing before leaving. Ring us on 07782 358 889.',
  kilburn: 'Lock jammed in Kilburn? We use non-destructive picking tools to open flat doors, fit fresh rim cylinders, and quote fixed costs. Call 07782 358 889.',
  shoreditch: 'Need a locksmith in Shoreditch? We unlock commercial units, replace timber door night latches, and quote clear rates in advance. Call 07782 358 889.',
  leyton: 'Lost front door keys in Leyton? We pick locks cleanly, repair misaligned uPVC multi-point gearboxes, and supply new cut keys. Ring our line on 07782 358 889.',
  barking: 'Stuck on the doorstep in Barking? We open locked doors without wood damage, change euro profile cylinders, and quote fixed prices. Call 07782 358 889.',
  lewisham: 'Door lock broken in Lewisham? We fit British Standard mortice locks, extract snapped key pieces, and agree all costs upfront. Ring us on 07782 358 889.',
  'canary-wharf': 'Locked out around Canary Wharf? We open high-security flat doors cleanly, service electronic locksets, and quote before dispatch. Call 07782 358 889.',
  'london-bridge': 'Door slammed shut in London Bridge? We pick rim latches open without marks, repair mortice locks, and quote fixed fees on call. Call 07782 358 889.',
  bermondsey: 'Keys lost in Bermondsey? We open residential doors safely, install new insurance-rated cylinders, and give honest upfront quotes. Ring us on 07782 358 889.',
  brixton: 'Locked outside your flat in Brixton? We pick latches without frame splintering, replace euro barrels, and quote all work in advance. Call 07782 358 889.',
  wandsworth: 'Key broken in Wandsworth? We extract snapped metal cleanly, adjust uPVC mechanisms, and fit insurance-rated locks with clear quotes. Call 07782 358 889.',
  tooting: 'Locked out around Tooting? We open stuck timber doors without drilling, replace night latches, and confirm total fees beforehand. Call 07782 358 889.',
  fitzrovia: 'Lock failed in Fitzrovia? We unlock commercial and residential doors without destruction, fit new mortice units, and quote upfront. Call 07782 358 889.',
  camden: 'Stuck outside in Camden? We slip jammed night latches cleanly, replace anti-snap cylinders, and provide transparent fixed pricing. Call us on 07782 358 889.',
  greenwich: 'Need a locksmith in Greenwich? We open historic timber doors without damage, service composite locks, and agree prices beforehand. Call 07782 358 889.',
  battersea: 'Locked out in Battersea? We pick apartment locks cleanly, replace faulty multi-point gearboxes, and quote fixed charges upfront. Phone us on 07782 358 889.',
  peckham: 'Keys trapped inside in Peckham? We unlock front doors without drilling, fit new insurance-rated deadlocks, and give fixed prices. Call 07782 358 889.',
  hackney: 'Lock problem in Hackney? We open jammed night latches cleanly, fit high-security euro barrels, and confirm all costs over the phone. Call 07782 358 889.',
  'shepherds-bush': 'Locked outside in Shepherd\'s Bush? We pick door locks without frame marks, replace old deadbolts, and quote fixed pricing on call. Call 07782 358 889.',
  'notting-hill': 'Stuck on your doorstep in Notting Hill? We open period timber doors non-destructively and fit British Standard locks cleanly. Ring us on 07782 358 889.',
  bloomsbury: 'Need a locksmith in Bloomsbury? We open Georgian timber doors cleanly, repair jammed sash locks, and quote upfront before travel. Call 07782 358 889.',
  enfield: 'Door lock jammed in Enfield? We realign multi-point uPVC mechanisms, extract broken keys, and quote fixed prices before setting off. Call 07782 358 889.',
};

// Check validation:
let errors = 0;
const forbiddenWords = ['reliable', 'trusted', 'accredited', 'approved', 'best', 'your city'];
const seenDesc = new Set();

for (const a of areas) {
  const d = descriptions[a.slug];
  if (!d) {
    console.error(`Missing description for: ${a.slug}`);
    errors++;
    continue;
  }
  if (seenDesc.has(d)) {
    console.error(`Duplicate description: ${d}`);
    errors++;
  }
  seenDesc.add(d);

  if (d.length < 140 || d.length > 158) {
    console.error(`Length error for ${a.slug} (${d.length}): ${d}`);
    errors++;
  }

  if (!d.toLowerCase().includes(a.city.toLowerCase())) {
    console.error(`Missing city name for ${a.slug}: ${a.city}`);
    errors++;
  }

  for (const f of forbiddenWords) {
    if (new RegExp(`\\b${f}\\b`, 'i').test(d)) {
      console.error(`Forbidden word '${f}' in ${a.slug}: ${d}`);
      errors++;
    }
  }

  if (a.outside_london && d.toLowerCase().includes('london')) {
    console.error(`Outside london page mentions London in ${a.slug}: ${d}`);
    errors++;
  }

  if (!/07782 358 889[.!]$/.test(d.trim())) {
    console.error(`Does not end with call prompt in ${a.slug}: ${d}`);
    errors++;
  }
}

console.log(`Validation complete. Total checked: ${areas.length}. Errors: ${errors}`);

if (errors === 0) {
  fs.writeFileSync('src/data/area-descriptions.js', `// Generated unique area meta descriptions (140-158 chars, unique, no forbidden words)
export const AREA_DESCRIPTIONS = ${JSON.stringify(descriptions, null, 2)};
`, 'utf8');
  console.log('Saved src/data/area-descriptions.js successfully.');
}
