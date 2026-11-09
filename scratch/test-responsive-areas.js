import fs from 'fs';

function testAreaPage(slug) {
  const html = fs.readFileSync(`dist/locksmith/${slug}.html`, 'utf8');
  console.log(`\n=== Testing ${slug}.html ===`);

  // 1. Viewport tag
  const hasViewport = html.includes('name="viewport" content="width=device-width, initial-scale=1.0"');
  console.log(`Viewport tag present: ${hasViewport}`);

  // 2. Title & Meta
  const titleMatch = html.match(/<title>(.*?)<\/title>/);
  console.log(`Title: ${titleMatch ? titleMatch[1] : 'NONE'}`);

  const descMatch = html.match(/<meta name="description" content="(.*?)"/);
  console.log(`Description (${descMatch ? descMatch[1].length : 0} chars): ${descMatch ? descMatch[1] : 'NONE'}`);

  // 3. Check for fixed overflow hazards like w-[...px] or overflow-x
  const fixedWidths = html.match(/w-\[\d{3,}px\]/g) || [];
  console.log(`Fixed pixel widths: ${fixedWidths.length === 0 ? 'None (safe)' : fixedWidths.join(', ')}`);

  // 4. Responsive classes check
  const hasMobileGrid = html.includes('grid-cols-1');
  const hasDesktopGrid = html.includes('md:grid-cols-2');
  console.log(`Responsive grid classes: mobile grid-cols-1=${hasMobileGrid}, desktop md:grid-cols-2=${hasDesktopGrid}`);

  // 5. Check breadcrumbs
  const hasBreadcrumbs = html.includes('aria-label="Breadcrumb"');
  console.log(`Breadcrumbs navigation: ${hasBreadcrumbs}`);

  // 6. Check common problems section
  const hasCommonProblems = html.includes(`Common lock problems in`);
  console.log(`Common problems section: ${hasCommonProblems}`);

  // 7. Check services section
  const hasServices = html.includes(`Locksmith services in`);
  console.log(`Services section: ${hasServices}`);

  // 8. Check FAQs accordion
  const hasFaqs = html.includes(`aria-expanded=`);
  console.log(`Accessible FAQs: ${hasFaqs}`);

  // 9. Check nearby areas
  const hasNearby = html.includes(`Nearby areas we cover`);
  console.log(`Nearby areas: ${hasNearby}`);

  // 10. Check CTA
  const hasCta = html.includes(`aria-label="Emergency call to action"`);
  console.log(`CTA section: ${hasCta}`);

  // 11. Check phone numbers
  const hasPhone = html.includes('07782 358 889') && html.includes('tel:07782358889');
  console.log(`Phone number verified: ${hasPhone}`);
}

testAreaPage('barnet');
testAreaPage('ilford');

