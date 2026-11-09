import fs from 'fs';

const content = fs.readFileSync('src/data/areas-source.csv', 'utf8');

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

const lines = content.trim().replace(/\r\n/g, '\n').split('\n');
const header = parseCSVLine(lines[0]);
console.log('Header:', header);
const areas = lines.slice(1).map((line) => {
  const cols = parseCSVLine(line);
  return {
    slug: cols[0].trim(),
    city: cols[1].trim(),
    title: cols[2].trim(),
    outside_london: cols[4].trim().toLowerCase() === 'true',
  };
});

console.log('Parsed areas count:', areas.length);
console.log('Sample area 0:', areas[0]);
console.log('Sample area with quotes (Barnet):', areas.find((a) => a.slug === 'barnet'));
console.log('Sample outside London (Milton Keynes):', areas.find((a) => a.slug === 'milton-keynes'));

// Write src/data/areas.js
const fileContent = `// Generated from src/data/areas-source.csv - The "title" column is FINAL.
export const AREAS = ${JSON.stringify(areas, null, 2)};
`;

fs.writeFileSync('src/data/areas.js', fileContent, 'utf8');
console.log('Successfully written to src/data/areas.js');

