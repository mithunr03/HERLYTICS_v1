import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvPath = path.join(__dirname, '../src/data/indian_healthy_foods.csv');
const outPath = path.join(__dirname, '../src/data/foodsData.ts');

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

const rawContent = fs.readFileSync(csvPath, 'utf8');
const lines = rawContent.trim().split(/\r?\n/).filter(l => l.trim().length > 0);
const headers = parseCSVLine(lines[0]);

const nameCounts = {};
lines.slice(1).forEach(line => {
  const parts = parseCSVLine(line);
  const name = parts[0].trim();
  nameCounts[name] = (nameCounts[name] || 0) + 1;
});

// Taxonomy mapping for Associativity column (culinary pairing groups, NOT clinical health benefits)
const associativityMeaning = {
  '0': 'Salads, Wraps & General Dishes',
  '1': 'Rotis, Cheelas & Flatbreads',
  '2': 'Dry Curries & Sabzis',
  '3': 'Rice & Millet Dishes',
  '4': 'Raitas & Yoghurt Accompaniments',
  '5': 'Khichdi, Pulao & Biryani',
  '6': 'Kebabs, Tikkis & Cutlets',
  '7': 'Fresh Herbal Chutneys',
  '8': 'Gravy Curries, Soups & Stews',
  '9': 'Breakfast Staples, Porridges & Toasts',
  '10': 'Herbal Infusions, Kadha & Wellness Waters',
  '11': 'Healthy Chaats, Makhana & Snacks',
  '12': 'Healthy Milks, Smoothies & Beverages',
  '13': 'Traditional Sambars & Chutneys',
  '14': 'South Indian Dosas, Idlis & Uttapams',
  '2,8': 'Combination Curries (Dry & Gravy)'
};

// Function to produce clean external food delivery search query
function getCleanSearchName(name) {
  // Remove technical formulation notes in parentheses like "(20% almond flour + 80% wheat flour)"
  let clean = name.replace(/\([^)]*%\s*[^)]*\)/gi, '');
  // Remove "(no oil)", "(with oil)", "(low-fat)", "(low fat)", "(no white sauce)"
  clean = clean.replace(/\(\s*no\s+oil\s*\)/gi, '');
  clean = clean.replace(/\(\s*with\s+oil\s*\)/gi, '');
  clean = clean.replace(/\(\s*low[\s-]fat\s*\)/gi, '');
  clean = clean.replace(/\(\s*no\s+white\s+sauce\s*\)/gi, '');
  clean = clean.replace(/\(\s*veg\s*\)/gi, '');
  clean = clean.replace(/\(\s*non\s*veg\s*\)/gi, '');
  clean = clean.replace(/\(\s*chicken\s*\)/gi, 'Chicken');
  clean = clean.replace(/\(\s*paneer\s*\)/gi, 'Paneer');
  clean = clean.replace(/\(\s*tofu\s*\)/gi, 'Tofu');
  clean = clean.replace(/\(\s*soya\s*\)/gi, 'Soya');
  clean = clean.replace(/\(\s*salmon\s*\)/gi, 'Fish');
  clean = clean.replace(/\\s{2,}/g, ' ').trim();
  // Strip trailing or leading punctuation
  clean = clean.replace(/^[,\s-]+|[,\s-]+$/g, '');
  if (!clean || clean.length < 3) return name;
  return clean;
}

const foodItems = [];

lines.slice(1).forEach((line, idx) => {
  const parts = parseCSVLine(line);
  if (parts.length < headers.length) return;
  
  const id = `food-${String(idx + 1).padStart(3, '0')}`;
  const rawFood = parts[0].trim();
  const rawAssoc = parts[1].trim();
  const rawRegion = parts[2].trim();
  const rawType = parts[3].trim();
  const rawCategory = parts[4].trim();
  const rawAllergy = parts[5].trim();
  const rawServing = parts[6].trim();
  const rawTotalWeight = parseFloat(parts[7].trim()) || 0;
  const rawEnergy = parseFloat(parts[8].trim()) || 0;
  const rawProteins = parseFloat(parts[9].trim()) || 0;
  const rawCarbs = parseFloat(parts[10].trim()) || 0;
  const rawFats = parseFloat(parts[11].trim()) || 0;
  const rawFiber = parseFloat(parts[12].trim()) || 0;
  const rawCarbon = parseFloat(parts[13].trim()) || 0;
  const rawIngredients = parts[14].trim();
  
  // Clean allergens
  const allergens = rawAllergy
    .split(',')
    .map(a => a.trim().toLowerCase().replace(/\.$/, ''))
    .filter(Boolean);
  
  // Clean regions
  const regions = rawRegion
    .split(',')
    .map(r => r.trim())
    .map(r => r.charAt(0).toUpperCase() + r.slice(1).toLowerCase())
    .filter(Boolean);
    
  // Clean meal types
  const mealTypes = rawType
    .split(',')
    .map(t => t.trim())
    .filter(Boolean);
    
  // Ingredients list
  const parsedIngredients = rawIngredients
    .split(';')
    .map(i => i.trim())
    .filter(Boolean);

  const isDuplicate = (nameCounts[rawFood] || 0) > 1;

  foodItems.push({
    id,
    name: rawFood,
    cleanSearchName: getCleanSearchName(rawFood),
    associativity: rawAssoc,
    associativityCategory: associativityMeaning[rawAssoc] || 'General Culinary Dish',
    region: regions,
    mealTypes,
    category: rawCategory,
    allergens,
    serving: rawServing,
    totalWeightGrams: rawTotalWeight,
    calories: rawEnergy,
    proteinGrams: rawProteins,
    carbsGrams: rawCarbs,
    fatGrams: rawFats,
    fiberGrams: rawFiber,
    carbonFootprintKgCO2e: rawCarbon,
    ingredients: rawIngredients,
    parsedIngredients,
    isDuplicateName: isDuplicate,
    duplicateNote: isDuplicate ? `Alternative portion or variation for "${rawFood}" (${rawServing}, ${rawTotalWeight}g)` : undefined
  });
});

const tsContent = `// HERLYTICS HEALTHY INDIAN FOODS DATA ACCESS LAYER
// Automatically generated from attached indian_healthy_foods.csv (Source of Truth)
// Total records: ${foodItems.length}

export interface IndianFoodItem {
  id: string;
  name: string;
  cleanSearchName: string;
  associativity: string;
  associativityCategory: string;
  region: string[];
  mealTypes: string[];
  category: 'Veg' | 'Non-veg' | 'Eggetarian' | string;
  allergens: string[];
  serving: string;
  totalWeightGrams: number;
  calories: number; // Listed serving energy (kcal)
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
  fiberGrams: number;
  carbonFootprintKgCO2e: number;
  ingredients: string;
  parsedIngredients: string[];
  isDuplicateName?: boolean;
  duplicateNote?: string;
}

export const INDIAN_FOOD_TAXONOMY_EXPLANATION: Record<string, string> = ${JSON.stringify(associativityMeaning, null, 2)};

export const INDIAN_FOOD_ITEMS: IndianFoodItem[] = ${JSON.stringify(foodItems, null, 2)};

// Helper to look up a food by stable ID
export function getFoodById(id: string): IndianFoodItem | undefined {
  return INDIAN_FOOD_ITEMS.find((f) => f.id === id);
}

// Available unique regions
export const ALL_REGIONS = ['North', 'South', 'East', 'West', 'Continental'] as const;

// Available unique meal courses
export const ALL_MEAL_TYPES = ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Appetizer', 'Beverages', 'Dry Curry', 'Gravy'] as const;

// Common allergen tags in dataset
export const ALL_ALLERGENS = [
  'dairy',
  'gluten',
  'egg',
  'soy',
  'nut',
  'peanut',
  'fish',
  'shellfish',
  'nightshade',
  'mushroom',
  'caffeine',
  'citrus'
] as const;
`;

fs.writeFileSync(outPath, tsContent, 'utf8');
console.log(`Generated ${outPath} with ${foodItems.length} records.`);
