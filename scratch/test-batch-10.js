import fs from 'fs';
import { PILOT_AREAS } from '../src/data/pilot-areas.js';

const newIntros = {
  harrow: `Got lock trouble in Harrow? We run an active mobile locksmith van assisting residents and local shopkeepers across the borough. Whether your porch lock refuses to budge, your key snapped flush in the garage door, or your family is stranded on the driveway, we can help. When you dial our number, you speak straight to a skilled engineer rather than a dispatch call handler. We give you a realistic arrival estimate and a firm, fixed quotation before setting out. Our technicians arrive with full tool kits designed for non-invasive entry. We pick locks open cleanly so you can get on with your day without facing repair bills for new woodwork. If a worn multi-point gearbox or damaged cylinder does need replacement, we carry British Standard deadlocks and anti-snap cylinders to finish the work on the spot.`,

  'milton-keynes': `Locked outside your property in Milton Keynes? We provide mobile locksmith services for detached homes, modern housing estates, and commercial distribution centres. Arrival time depends on distance and is confirmed when you call. When you phone us, you talk directly with an experienced tradesperson who knows lock mechanisms. We explain the plan clearly and agree a single fixed price before our van sets out. We understand that modern estate developments often use complex multi-point door locks that require specific alignment. We prioritise non-destructive techniques using specialist picks and bypass tools to open domestic doors without causing damage. Should your uPVC mechanism fail or you need a lock change following a move, we carry insurance-rated euro cylinders and deadlocks on board. We leave your entrance fully secured, clean up any debris, and supply new working keys.`,

  'leighton-buzzard': `Need practical lock assistance in Leighton Buzzard? We assist householders, private landlords, and local business owners with all door security requirements. Arrival time depends on distance and is confirmed when you call. You will always speak with a practical locksmith on the phone rather than an automated booking system. We assess your lock type, quote one all-inclusive figure, and stick to that price when we arrive. Whether you live in a detached home near the town centre or a rural cottage nearby, our van carries extensive hardware stock to solve emergencies promptly. Our first course of action is picking or latch manipulation so your timber or composite entrance stays completely undamaged. When cylinders are worn out, seized from damp, or need changing between tenants, we install quality British Standard locks. We test every key thoroughly with you before packing away our tools.`,

  streatham: `Shut outside your flat along Streatham High Road? We know how stressful it is to watch the front door click shut with your keys resting on the hallway table. Our mobile locksmiths operate across Streatham to get you back inside without unnecessary fuss. You talk straight to the engineer who will carry out the work, not an impersonal call centre. We quote a fixed price over the phone before we travel, so there are no surprise charges on completion. Non-destructive entry is our main method: we manipulate latches and pick lock cylinders to avoid damaging solid timber doors or painted frames. If your lock has jammed mechanically or you want new keys for security, we supply and fit BS3621 insurance-rated mortice locks on the same visit.`,

  acton: `Stuck with a stubborn door lock in Acton? We offer mobile locksmith services for residential homes, garden flats, and local industrial units. Keys snap in cold weather, cylinders wear down over time, and latches can suddenly drop out of line. When you phone our number, you reach a working technician who can diagnose the problem immediately. We agree an all-inclusive price before setting off, ensuring complete clarity from start to finish. We know the local streets well and carry replacement parts to handle both traditional timber and contemporary composite residential doors. Our team uses precision picks, bypass cards, and decoding equipment to open locked doors without drill damage. If your uPVC multi-point door mechanism has seized or your lock is past its prime, we stock high-security anti-snap replacements in our van to secure your building straight away.`,

  holloway: `Locked outside your Holloway residence? Whether you lost your keys while out or your night latch slipped into place accidentally, we can help. We dispatch equipped mobile locksmith units across Holloway to open doors quickly and cleanly. Calling us connects you directly with a tradesperson, not a switchboard operator. We evaluate what lock you have and state a firm price before we travel. Many properties around the area are multi-storey conversions with shared hallways. We make sure communal entrance locks and individual flat doors function smoothly before finishing. In almost every lockout scenario, we pick the cylinder or bypass the latch so your door and timber frame remain free from marks. If you need hardware replaced because of lost keys or burglary damage, we install insurance-compliant British Standard locks and cut fresh keys on site.`,

  walthamstow: `Looking for a straightforward locksmith in Walthamstow? We provide dependable door entry and lock replacement services across the area. From traditional Warner flat timber doors to modern multi-point composite systems, we understand local housing security. When you dial our phone number, you talk directly with the engineer attending your home. We confirm the full price over the phone before dispatching our van, keeping costs completely clear. We know how diverse Walthamstow properties are, from classic brick terraced housing to modern regeneration blocks, and carry matching locksets for every door type. Our primary focus is non-destructive entry: using specialised lock picks, we let you back indoors without chewing up wooden door jambs. When an old mortice lock gives up or you require brand new cylinders after moving in, we carry British Standard certified replacements to get the job finished immediately.`,

  hammersmith: `Locked out around Hammersmith? We help residents, business owners, and estate agents resolve lock problems calmly and without delay. Keys go missing, brass latches slip into locked positions, and older mortice deadlocks can jam after decades of service. When you ring us, an experienced locksmith answers your call and listens to the details. We provide an exact price before our vehicle sets off, ensuring you know what to expect. Our mobile workshops are stocked with high-grade components suited for Victorian conversions and contemporary riverside apartment developments across the district. Non-destructive door opening is always our first approach. We use specialist lock picks and bypass tools to gain access without splintering timber or marring composite finishes. If a broken lock needs replacing, our mobile inventory holds insurance-rated cylinders and five-lever mortice locks to secure your entrance on the spot.`,

  kensington: `Require a professional locksmith in Kensington? We assist homeowners, apartment residents, and property managers with meticulous door opening and hardware installations. Traditional Kensington entrances often feature heavy hardwood doors with architectural rim night latches and secondary deadlocks. When locks become stiff or keys are misplaced, we respond with specialised tools designed for gentle, non-destructive entry. You speak straight to an engineer who appreciates high-value period woodwork. We agree all charges upfront before travelling, so pricing remains completely clear. We know that historic properties require respectful care. We take great pride in providing discrete, tidy workmanship that protects original door joinery and finishes. We pick locks open without drilling wherever mechanically possible. If replacement hardware is necessary, we install high-security British Standard locks that match the aesthetic of your property while fulfilling insurance prerequisites.`,

  'london-city': `Locked out of an office suite, shop, or apartment in London City? Fast access is essential when business operations or urgent appointments are on the line. We provide specialized locksmith services across London City, handling commercial deadlatches, narrow-style aluminium door locks, and residential euro cylinders. You will always speak directly with a locksmith rather than an offshore dispatch service. We provide a firm quote before leaving for your address, ensuring straightforward commercial terms. Security protocols in commercial buildings demand careful coordination. We work smoothly with building managers, concierge teams, and individual business tenants to restore safe access. Our engineers use non-invasive picking techniques and bypass methods to open locked doors cleanly without damaging expensive door frames. When security hardware is worn or broken, we install high-grade British Standard locks and provide complete VAT invoicing for your business records.`,
};

const allIntros = {};
for (const [s, data] of Object.entries(PILOT_AREAS)) {
  allIntros[s] = data.intro;
}
for (const [s, text] of Object.entries(newIntros)) {
  allIntros[s] = text;
}

const forbiddenWords = ['reliable', 'trusted', 'accredited', 'approved', 'best', 'your city'];
let errors = 0;

for (const [s, text] of Object.entries(allIntros)) {
  const words = text.trim().split(/\s+/);
  console.log(`${s.padEnd(16)}: ${words.length} words`);
  if (words.length < 120 || words.length > 180) {
    console.error(`ERROR: ${s} word count ${words.length} out of range 120-180!`);
    errors++;
  }
  for (const f of forbiddenWords) {
    if (new RegExp(`\\b${f}\\b`, 'i').test(text)) {
      console.error(`ERROR: ${s} contains forbidden word '${f}'!`);
      errors++;
    }
  }
  if ((s === 'milton-keynes' || s === 'leighton-buzzard') && text.toLowerCase().includes('london')) {
    console.error(`ERROR: ${s} (outside London) mentions London!`);
    errors++;
  }
}

function get5Grams(text) {
  const words = text.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(Boolean);
  const ngrams = new Set();
  for (let i = 0; i <= words.length - 5; i++) {
    ngrams.add(words.slice(i, i + 5).join(' '));
  }
  return ngrams;
}

const slugs = Object.keys(allIntros);
for (let i = 0; i < slugs.length; i++) {
  for (let j = i + 1; j < slugs.length; j++) {
    const setA = get5Grams(allIntros[slugs[i]]);
    const setB = get5Grams(allIntros[slugs[j]]);
    let shared = 0;
    for (const g of setA) {
      if (setB.has(g)) shared++;
    }
    const maxRatio = Math.max((shared / setA.size) * 100, (shared / setB.size) * 100);
    if (maxRatio > 30) {
      console.error(`ERROR: Phrase overlap between ${slugs[i]} and ${slugs[j]}: ${maxRatio.toFixed(1)}% exceeds 30%!`);
      errors++;
    }
  }
}

console.log(`\nValidation complete. 16 intros checked. Total errors: ${errors}`);
