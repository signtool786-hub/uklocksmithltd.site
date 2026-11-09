const intros = {
  barnet: `We run a mobile locksmith service across Barnet for homeowners, private tenants, and local shopkeepers. If you are stuck outside on the driveway or your key refuses to turn inside the mortice lock, we can help. When you dial our number, you speak directly with an engineer who understands lock hardware. We do not pass your call through a distant call centre or quote low rates that double when we turn up at your door. Every price is agreed before our van sets off. We carry picks, bypass tools, and British Standard replacement locks so that most jobs wrap up in a single visit. Getting you safely back indoors without wrecking your door frame is our primary focus. We treat your property with genuine care, clean up any shavings, and leave you with fresh keys and a working lock.`,
  fulham: `Locked out of a Victorian terrace or modern riverside apartment in Fulham? We provide clear, practical locksmith assistance whenever lock troubles disrupt your plans. Keys get misplaced in cafes, slip down sofa cushions, or snap inside brass cylinders after years of daily wear. When that happens, we come straight to your location. You talk directly with a working locksmith from the first ring. We explain what needs doing, quote one straightforward figure, and stick to that number. Our first step is always non-destructive picking or gentle latch manipulation to spare your front door from damage. If a damaged gearbox or obsolete lock requires replacement, we install robust British Standard hardware that meets home insurance criteria. You receive clear communication, clean workmanship, and working keys before we depart.`,
  ilford: `Whether you live in a terraced family house near the station or run a busy commercial unit in Ilford, finding yourself locked outside causes immediate stress. Our locksmiths respond throughout Ilford with fully equipped mobile units. We handle jammed uPVC multi-point locking strips, stiff euro profile barrels, and misplaced house keys day and night. Calling us connects you with the tradesperson doing the job, not a generic call handler. We give you an honest appraisal and a firm price before leaving for your address. By applying non-invasive picking techniques first, we gain entry without chewing up wooden woodwork or cracking composite frames. When security components are broken beyond repair, we fit quality BS3621 replacements on the spot. We make the entire process calm, fast, and completely transparent.`,
  islington: `Islington properties feature a unique mix of Georgian townhouses, converted flats, and lively retail storefronts. Many entrances still rely on traditional timber rim latches alongside modern deadlocks. When a latch slips shut behind you or an old five-lever lock jams tight, we can sort it quickly. We operate locally across Islington, arriving with specialised lock decoding equipment and precision picks. You will not deal with automated phone systems; our locksmith answers the phone, listens to your situation, and specifies the exact charge upfront. Destructive drilling remains our absolute last resort. In the vast majority of lockouts, we pick open the cylinder and leave your existing lock intact. Should a fresh lock installation be necessary, we stock insurance-rated hardware that fit seamlessly into period timber doors.`,
  wembley: `Living or trading around Wembley means relying on secure doors, from modern residential developments and semi-detached homes to busy high street premises. If a key twists and snaps off in a lock cylinder or your multi-point door handle spins loosely without latching, our Wembley locksmiths are ready to assist. You will always speak directly with a knowledgeable locksmith on the telephone. We never surprise you with hidden mileage or fuel surcharges; our quotation covers the complete job before we start our engine. We specialise in extracting broken key fragments cleanly and picking domestic locks without leaving marks. When new security hardware is required, we supply high-security anti-snap euro cylinders and robust mortice locks right from our mobile inventory to restore your building's safety immediately.`,
  clapham: `Locked outside your flat after an evening out in Clapham? We know how frustrating it feels to be standing on the doorstep waiting for help. We operate an active mobile locksmith van across Clapham to help residents, landlords, and shop owners gain access safely. When you call, you reach a hands-on engineer rather than an answering service. We give you a clear, fixed quote over the phone so you know the exact cost before we set out. Our focus is non-destructive entry: using specialised tension tools and lock picks, we open jammed night latches and deadbolts without splintering the woodwork. If your existing lock is faulty or you want the keys changed following a tenancy turnover, we install fresh insurance-compliant British Standard cylinders on the spot.`
};

const forbiddenWords = ['reliable', 'trusted', 'accredited', 'approved', 'best', 'your city'];

for (const [city, text] of Object.entries(intros)) {
  const words = text.trim().split(/\s+/);
  console.log(`${city}: word count = ${words.length}`);
  if (words.length < 120 || words.length > 180) {
    console.error(`ERROR: ${city} word count out of range!`);
  }
  for (const f of forbiddenWords) {
    if (new RegExp(`\\b${f}\\b`, 'i').test(text)) {
      console.error(`ERROR: ${city} contains forbidden word: ${f}`);
    }
  }
}

// 5-word phrases test
function get5Grams(text) {
  const words = text.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/).filter(Boolean);
  const ngrams = new Set();
  for (let i = 0; i <= words.length - 5; i++) {
    ngrams.add(words.slice(i, i + 5).join(' '));
  }
  return ngrams;
}

const cityKeys = Object.keys(intros);
for (let i = 0; i < cityKeys.length; i++) {
  for (let j = i + 1; j < cityKeys.length; j++) {
    const setA = get5Grams(intros[cityKeys[i]]);
    const setB = get5Grams(intros[cityKeys[j]]);
    let shared = 0;
    for (const g of setA) {
      if (setB.has(g)) shared++;
    }
    const ratioA = (shared / setA.size) * 100;
    const ratioB = (shared / setB.size) * 100;
    const maxRatio = Math.max(ratioA, ratioB);
    console.log(`Overlap between ${cityKeys[i]} and ${cityKeys[j]}: ${shared} shared, max = ${maxRatio.toFixed(1)}%`);
    if (maxRatio > 30) {
      console.error(`ERROR: Overlap between ${cityKeys[i]} and ${cityKeys[j]} exceeds 30%!`);
    }
  }
}
