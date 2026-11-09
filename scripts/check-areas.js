import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { AREAS } from '../src/data/areas.js';
import { PILOT_AREAS } from '../src/data/pilot-areas.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

const ALLOWED_PHONE_DIGITS = ['07782358889'];
const ALLOWED_PHONE_DISPLAY = ['07782 358 889'];

console.log('--- STARTING AREA PAGES VALIDATION ---');

if (!fs.existsSync(distDir)) {
  console.error('ERROR: dist directory does not exist! Please run npm run build first.');
  process.exit(1);
}

let totalErrors = 0;
const descriptionsMap = new Map();
const introTexts = {};
const pageWordCounts = {};

// Helper to find file in dist (supports flat or nested)
function getHtmlContent(slug) {
  const flatPath = path.join(distDir, 'locksmith', `${slug}.html`);
  const nestedPath = path.join(distDir, 'locksmith', slug, 'index.html');

  if (fs.existsSync(flatPath)) {
    return { html: fs.readFileSync(flatPath, 'utf8'), path: flatPath, style: 'flat' };
  } else if (fs.existsSync(nestedPath)) {
    return { html: fs.readFileSync(nestedPath, 'utf8'), path: nestedPath, style: 'nested' };
  }
  return null;
}

// 5-word phrases generator
function get5Grams(text) {
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(Boolean);
  const ngrams = new Set();
  for (let i = 0; i <= words.length - 5; i++) {
    ngrams.add(words.slice(i, i + 5).join(' '));
  }
  return ngrams;
}

// Check each of the 60 areas
let flatCount = 0;
let nestedCount = 0;

for (const area of AREAS) {
  const result = getHtmlContent(area.slug);
  if (!result) {
    console.error(`FAIL: Missing built HTML for area: /locksmith/${area.slug}`);
    totalErrors++;
    continue;
  }

  if (result.style === 'flat') flatCount++;
  else nestedCount++;

  const { html, path: filePath } = result;

  // (a) Confirm each built page's <title> equals the CSV title exactly
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const actualTitle = titleMatch ? titleMatch[1].trim() : '';
  const expectedTitle = area.title.trim();

  if (actualTitle !== expectedTitle) {
    console.error(`FAIL [Check A - Title Mismatch] in ${area.slug}:`);
    console.error(`  Expected: "${expectedTitle}"`);
    console.error(`  Actual:   "${actualTitle}"`);
    totalErrors++;
  }

  // (c) Fail if any meta description is outside 140 to 158 characters or duplicated
  const descMatch = html.match(/<meta\s+name=(["'])description\1\s+content=(["'])([\s\S]*?)\2/i);
  const actualDesc = descMatch ? descMatch[3].trim() : '';

  if (!actualDesc) {
    console.error(`FAIL [Check C - Missing Description] in ${area.slug}`);
    totalErrors++;
  } else {
    const len = actualDesc.length;
    if (len < 140 || len > 158) {
      console.error(`FAIL [Check C - Description Length] in ${area.slug} (length ${len}, must be 140-158):`);
      console.error(`  Content: "${actualDesc}"`);
      totalErrors++;
    }

    if (descriptionsMap.has(actualDesc)) {
      console.error(`FAIL [Check C - Duplicate Description] in ${area.slug} matches ${descriptionsMap.get(actualDesc)}:`);
      console.error(`  Content: "${actualDesc}"`);
      totalErrors++;
    } else {
      descriptionsMap.set(actualDesc, area.slug);
    }
  }

  // (e) Fail if any built page contains "in your city", "your city" or a phone number other than PHONE
  const lowerHtml = html.toLowerCase();
  if (lowerHtml.includes('in your city') || lowerHtml.includes('your city')) {
    console.error(`FAIL [Check E - Forbidden Phrase 'your city'] in ${area.slug}`);
    totalErrors++;
  }

  // Check phone numbers: find all phone numbers or tel: links
  const telMatches = [...html.matchAll(/tel:([+0-9]+)/gi)];
  for (const m of telMatches) {
    const digits = m[1].replace(/\D/g, '');
    if (!ALLOWED_PHONE_DIGITS.includes(digits) && digits.length >= 10) {
      console.error(`FAIL [Check E - Unauthorized Phone in tel link] in ${area.slug}: ${m[0]}`);
      totalErrors++;
    }
  }

  // Check UK phone number text patterns in body (e.g. 020 xxxx xxxx, 07xxx xxx xxx)
  const phoneTextMatches = [...html.matchAll(/\b0\d{3,4}\s?\d{3,4}\s?\d{3,4}\b/g)];
  for (const m of phoneTextMatches) {
    const cleanNumber = m[0].trim();
    if (!ALLOWED_PHONE_DISPLAY.includes(cleanNumber) && !ALLOWED_PHONE_DIGITS.includes(cleanNumber.replace(/\s+/g, ''))) {
      console.error(`FAIL [Check E - Unauthorized Phone in text] in ${area.slug}: "${cleanNumber}"`);
      totalErrors++;
    }
  }

  // (d) Word count calculation
  // Strip head, scripts, styles, SVGs, and tags to calculate visible text word count
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const bodyContent = bodyMatch ? bodyMatch[1] : html;
  const cleanText = bodyContent
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z0-9#]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const words = cleanText ? cleanText.split(/\s+/).filter(Boolean) : [];
  pageWordCounts[area.slug] = words.length;

  // Save intro for check (b) if it's a pilot city
  if (PILOT_AREAS[area.slug]) {
    introTexts[area.slug] = PILOT_AREAS[area.slug].intro;
  }
}

// (b) Fail if any two intro paragraphs share more than 30% of their 5-word phrases
const pilotSlugs = Object.keys(introTexts);
for (let i = 0; i < pilotSlugs.length; i++) {
  for (let j = i + 1; j < pilotSlugs.length; j++) {
    const slugA = pilotSlugs[i];
    const slugB = pilotSlugs[j];
    const setA = get5Grams(introTexts[slugA]);
    const setB = get5Grams(introTexts[slugB]);

    let shared = 0;
    for (const g of setA) {
      if (setB.has(g)) shared++;
    }

    const minSize = Math.min(setA.size, setB.size);
    const overlapPercent = minSize > 0 ? (shared / minSize) * 100 : 0;

    if (overlapPercent > 30) {
      console.error(`FAIL [Check B - Intro Phrase Overlap] between ${slugA} and ${slugB}: ${overlapPercent.toFixed(1)}% (${shared} shared 5-grams) exceeds 30% limit!`);
      totalErrors++;
    }
  }
}

// (d) Report Word Count
console.log('\n--- WORD COUNT REPORT (Pilot Pages) ---');
for (const slug of pilotSlugs) {
  const count = pageWordCounts[slug] || 0;
  console.log(`  ${slug.padEnd(15)} : ${count} words (minimum required: 350)`);
  if (count < 350) {
    console.error(`FAIL [Check D - Insufficient Word Count] for ${slug}: ${count} < 350 words`);
    totalErrors++;
  }
}

console.log('\n--- DIST WRITE STYLE REPORT ---');
console.log(`  Flat files (/locksmith/{slug}.html): ${flatCount}`);
console.log(`  Nested files (/locksmith/{slug}/index.html): ${nestedCount}`);
console.log(`  Format: ${flatCount > 0 ? 'FLAT (cleanUrls compatible)' : 'NESTED'}`);

console.log('\n--- FINAL VERIFICATION SUMMARY ---');
if (totalErrors === 0) {
  console.log('✅ ALL CHECKS PASSED: 0 errors detected across 60 area pages.');
} else {
  console.error(`❌ VALIDATION FAILED: ${totalErrors} errors detected.`);
  process.exit(1);
}
