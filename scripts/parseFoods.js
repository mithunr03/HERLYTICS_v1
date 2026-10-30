import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvPath = path.join(__dirname, '../src/data/indian_healthy_foods.csv');
const rawContent = fs.readFileSync(csvPath, 'utf8');

// Parse CSV handling quoted values with commas
function parseCSV(text) {
  const lines = text.split(/\r?\n/).filter(line => line.trim().length > 0);
  if (lines.length === 0) return [];
  
  const headers = parseCSVLine(lines[0]);
  const rows = [];
  
  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i]);
    if (values.length === headers.length) {
      const obj = {};
      headers.forEach((h, idx) => {
        obj[h.trim()] = values[idx] !== undefined ? values[idx].trim() : '';
      });
      rows.push(obj);
    } else {
      console.warn(`Line ${i + 1} had ${values.length} columns instead of ${headers.length}:`, lines[i]);
    }
  }
  return { headers, rows };
}

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

const { headers, rows } = parseCSV(rawContent);

console.log(`Parsed ${rows.length} rows.`);
console.log('Headers:', headers);

// Data audit
const foodNameCounts = {};
const allergenSet = new Set();
const regionSet = new Set();
const typeSet = new Set();
const categorySet = new Set();

let missingNutrition = 0;
let invalidNumbers = 0;

const associativityMap = {};

rows.forEach((row, idx) => {
  const name = row['Food'];
  foodNameCounts[name] = (foodNameCounts[name] || 0) + 1;
  
  const assoc = row['Associativity'];
  associativityMap[assoc] = (associativityMap[assoc] || 0) + 1;
  
  // allergens
  const allergies = (row['Allergy'] || '').split(',').map(s => s.trim().replace(/\.$/, '')).filter(Boolean);
  allergies.forEach(a => allergenSet.add(a));
  
  // regions
  const regions = (row['Region'] || '').split(',').map(s => s.trim()).filter(Boolean);
  regions.forEach(r => regionSet.add(r));
  
  // types
  const types = (row['Type'] || '').split(',').map(s => s.trim()).filter(Boolean);
  types.forEach(t => typeSet.add(t));
  
  // category
  categorySet.add(row['Category']);
  
  // numeric check
  ['Total Weight (gms)', 'Energy(kcal)', 'Proteins', 'Carbohydrates', 'Fats', 'Fiber', 'Carbon Footprint(kg CO2e)'].forEach(k => {
    const val = parseFloat(row[k]);
    if (isNaN(val)) {
      invalidNumbers++;
      console.warn(`Row ${idx + 2} (${name}) has invalid numeric for ${k}: "${row[k]}"`);
    }
  });
});

const duplicates = Object.entries(foodNameCounts).filter(([_, count]) => count > 1);
console.log(`Found ${duplicates.length} duplicate dish names (with different portions/variations):`);
duplicates.forEach(([name, count]) => {
  console.log(` - "${name}": ${count} occurrences`);
});

console.log('\nAllergen categories:', Array.from(allergenSet));
console.log('Regions:', Array.from(regionSet));
console.log('Types:', Array.from(typeSet));
console.log('Categories:', Array.from(categorySet));
console.log('Associativity mapping:', associativityMap);
