// HERLYTICS HEALTHY INDIAN FOODS DATA ACCESS LAYER
// Automatically generated from attached indian_healthy_foods.csv (Source of Truth)
// Total records: 753

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

export const INDIAN_FOOD_TAXONOMY_EXPLANATION: Record<string, string> = {
  "0": "Salads, Wraps & General Dishes",
  "1": "Rotis, Cheelas & Flatbreads",
  "2": "Dry Curries & Sabzis",
  "3": "Rice & Millet Dishes",
  "4": "Raitas & Yoghurt Accompaniments",
  "5": "Khichdi, Pulao & Biryani",
  "6": "Kebabs, Tikkis & Cutlets",
  "7": "Fresh Herbal Chutneys",
  "8": "Gravy Curries, Soups & Stews",
  "9": "Breakfast Staples, Porridges & Toasts",
  "10": "Herbal Infusions, Kadha & Wellness Waters",
  "11": "Healthy Chaats, Makhana & Snacks",
  "12": "Healthy Milks, Smoothies & Beverages",
  "13": "Traditional Sambars & Chutneys",
  "14": "South Indian Dosas, Idlis & Uttapams",
  "2,8": "Combination Curries (Dry & Gravy)"
};

export const INDIAN_FOOD_ITEMS: IndianFoodItem[] = [
  {
    "id": "food-001",
    "name": "Soya flour Gobi stuffed paratha",
    "cleanSearchName": "Soya flour Gobi stuffed paratha",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "2 medium",
    "totalWeightGrams": 393,
    "calories": 235,
    "proteinGrams": 16,
    "carbsGrams": 24,
    "fatGrams": 7,
    "fiberGrams": 8,
    "carbonFootprintKgCO2e": 0.3945,
    "ingredients": "Cauliflower-15 gms; Onion-15 gms;  Ginger-4 gms; Cumin seeds-4 gms; chillies-15 gms; Coriander leaves-15 gms; Red chilli Powder-15 gms; Garam Masala-15 gms; Common salt-15 gms; Soya flour-250 gms; Atta-30 gms",
    "parsedIngredients": [
      "Cauliflower-15 gms",
      "Onion-15 gms",
      "Ginger-4 gms",
      "Cumin seeds-4 gms",
      "chillies-15 gms",
      "Coriander leaves-15 gms",
      "Red chilli Powder-15 gms",
      "Garam Masala-15 gms",
      "Common salt-15 gms",
      "Soya flour-250 gms",
      "Atta-30 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-002",
    "name": "DUMPLINGS (Veg)",
    "cleanSearchName": "DUMPLINGS",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "East"
    ],
    "mealTypes": [
      "Appetizer",
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "4 medium",
    "totalWeightGrams": 255,
    "calories": 115,
    "proteinGrams": 4,
    "carbsGrams": 22,
    "fatGrams": 1,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.25955,
    "ingredients": "carrot-15 gms; CABBAGE-15 gms; Capsicum-15 gms; mushroom-15 gms; Garlic-7 gms; Ginger-7 gms; soya sauce-15 gms; Gingelly oil-7 gms; Onion-15 gms; Atta-125 gms; Common salt-4 gms; Chili Sauce-15 gms",
    "parsedIngredients": [
      "carrot-15 gms",
      "CABBAGE-15 gms",
      "Capsicum-15 gms",
      "mushroom-15 gms",
      "Garlic-7 gms",
      "Ginger-7 gms",
      "soya sauce-15 gms",
      "Gingelly oil-7 gms",
      "Onion-15 gms",
      "Atta-125 gms",
      "Common salt-4 gms",
      "Chili Sauce-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-003",
    "name": "Baked Vegetables",
    "cleanSearchName": "Baked Vegetables",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "4 small",
    "totalWeightGrams": 83,
    "calories": 17,
    "proteinGrams": 0,
    "carbsGrams": 1,
    "fatGrams": 1,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.1584,
    "ingredients": "Cauliflower-20 gms; carrot-20 gms;Capsicum-20 gms;Black Pepper-4 gms; Common salt-4 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Cauliflower-20 gms",
      "carrot-20 gms",
      "Capsicum-20 gms",
      "Black Pepper-4 gms",
      "Common salt-4 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-004",
    "name": "LETTUCE WRAP (Chicken)",
    "cleanSearchName": "LETTUCE WRAP Chicken",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 369,
    "calories": 214,
    "proteinGrams": 20,
    "carbsGrams": 10,
    "fatGrams": 9,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.69985,
    "ingredients": "Lettuce Leaf-20 gms; Chicken-70 gms; Tomato-120 gms; Cucumber-62 gms; Onion-30 gms; Coriander leaves-15 gms;Mint leaves-15 gms; Lemon-15 gms; soya sauce-15 gms; Sesame oil-7 gms",
    "parsedIngredients": [
      "Lettuce Leaf-20 gms",
      "Chicken-70 gms",
      "Tomato-120 gms",
      "Cucumber-62 gms",
      "Onion-30 gms",
      "Coriander leaves-15 gms",
      "Mint leaves-15 gms",
      "Lemon-15 gms",
      "soya sauce-15 gms",
      "Sesame oil-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-005",
    "name": "Soya Sizzler",
    "cleanSearchName": "Soya Sizzler",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 567,
    "calories": 305,
    "proteinGrams": 28,
    "carbsGrams": 21,
    "fatGrams": 10,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.658,
    "ingredients": "Soyabean-30 gms; Ginger-15 gms;Garlic-15 gms; Cooking oil-7 gms; Capsicum-60 gms; Mushroom-20 gms; Onion-20 gms; Zucchini-20 gms; Tomato-120 gms; Cabbage-200 gms; Common salt-15 gms; Red chilli Powder-15 gms; Ginger powder-15 gms; Black pepper-15 gms;",
    "parsedIngredients": [
      "Soyabean-30 gms",
      "Ginger-15 gms",
      "Garlic-15 gms",
      "Cooking oil-7 gms",
      "Capsicum-60 gms",
      "Mushroom-20 gms",
      "Onion-20 gms",
      "Zucchini-20 gms",
      "Tomato-120 gms",
      "Cabbage-200 gms",
      "Common salt-15 gms",
      "Red chilli Powder-15 gms",
      "Ginger powder-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-006",
    "name": "Fried Rice",
    "cleanSearchName": "Fried Rice",
    "associativity": "5",
    "associativityCategory": "Khichdi, Pulao & Biryani",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 585,
    "calories": 1123,
    "proteinGrams": 31,
    "carbsGrams": 203,
    "fatGrams": 18,
    "fiberGrams": 22,
    "carbonFootprintKgCO2e": 1.33045,
    "ingredients": "Rice-250 gms; Mustard oil-15 gms; Onion-77 gms; Capsicum-62 gms; carrot-62 gms; Peas-62 gms; Garlic-20 gms; soya sauce-7 gms; Common salt-15 gms; Black pepper-15 gms;",
    "parsedIngredients": [
      "Rice-250 gms",
      "Mustard oil-15 gms",
      "Onion-77 gms",
      "Capsicum-62 gms",
      "carrot-62 gms",
      "Peas-62 gms",
      "Garlic-20 gms",
      "soya sauce-7 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-007",
    "name": "Soy Milk",
    "cleanSearchName": "Soy Milk",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 cup",
    "totalWeightGrams": 125,
    "calories": 324,
    "proteinGrams": 33,
    "carbsGrams": 9,
    "fatGrams": 17,
    "fiberGrams": 19,
    "carbonFootprintKgCO2e": 0,
    "ingredients": "Soya bean-125 gms;",
    "parsedIngredients": [
      "Soya bean-125 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-008",
    "name": "Soya Bhurji",
    "cleanSearchName": "Soya Bhurji",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "4 medium katori",
    "totalWeightGrams": 335,
    "calories": 138,
    "proteinGrams": 14,
    "carbsGrams": 10,
    "fatGrams": 4,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.5235,
    "ingredients": "Turmeric powder-15 gms; Cumin seeds-15 gms; Common salt-15 gms; Coriander leaves-15 gms; Red chilli Powder-15 gms; Coriander Powder-15 gms; Onion-125 gms; Tomato-90 gms; Chillies-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Turmeric powder-15 gms",
      "Cumin seeds-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-15 gms",
      "Red chilli Powder-15 gms",
      "Coriander Powder-15 gms",
      "Onion-125 gms",
      "Tomato-90 gms",
      "Chillies-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-009",
    "name": "Chicken sizzler",
    "cleanSearchName": "Chicken sizzler",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 759,
    "calories": 271,
    "proteinGrams": 9,
    "carbsGrams": 19,
    "fatGrams": 18,
    "fiberGrams": 13,
    "carbonFootprintKgCO2e": 2.46825,
    "ingredients": "Chicken-300 gms; Sunflower oil-15 gms; Garlic-15 gms;  Zucchini-125 gms; Mushroom-125 gms; carrot-125 gms; soya sauce-15 gms; VINEGAR-15 gms; Black pepper-24 gms",
    "parsedIngredients": [
      "Chicken-300 gms",
      "Sunflower oil-15 gms",
      "Garlic-15 gms",
      "Zucchini-125 gms",
      "Mushroom-125 gms",
      "carrot-125 gms",
      "soya sauce-15 gms",
      "VINEGAR-15 gms",
      "Black pepper-24 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-010",
    "name": "Rajma Chaat",
    "cleanSearchName": "Rajma Chaat",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 343,
    "calories": 551,
    "proteinGrams": 36,
    "carbsGrams": 94,
    "fatGrams": 2,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.2965,
    "ingredients": "RAJMA-250 gms; CUCUMBER-15 gms; Tomato-15 gms; Chillies-4 gms; Coriander leaves-15 gms; Lemon-7 gms; Common salt-7 gms; Chat Masala-15 gms; Cumin Powder-15 gms",
    "parsedIngredients": [
      "RAJMA-250 gms",
      "CUCUMBER-15 gms",
      "Tomato-15 gms",
      "Chillies-4 gms",
      "Coriander leaves-15 gms",
      "Lemon-7 gms",
      "Common salt-7 gms",
      "Chat Masala-15 gms",
      "Cumin Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-011",
    "name": "Saute Tofu",
    "cleanSearchName": "Saute Tofu",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 389,
    "calories": 264,
    "proteinGrams": 22,
    "carbsGrams": 17,
    "fatGrams": 9,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.7545,
    "ingredients": "Common salt-15 gms; Coriander leaves-15 gms; Tofu-150 gms; Red chilli Powder-15 gms;Onion-125 gms; Garlic-15 gms; Chillies-24 gms; Coriander Powder-15 gms; Turmeric powder-15 gms",
    "parsedIngredients": [
      "Common salt-15 gms",
      "Coriander leaves-15 gms",
      "Tofu-150 gms",
      "Red chilli Powder-15 gms",
      "Onion-125 gms",
      "Garlic-15 gms",
      "Chillies-24 gms",
      "Coriander Powder-15 gms",
      "Turmeric powder-15 gms"
    ],
    "isDuplicateName": true,
    "duplicateNote": "Alternative portion or variation for \"Saute Tofu\" (1 medium katori, 389g)"
  },
  {
    "id": "food-012",
    "name": "CHILLI CHICKEN",
    "cleanSearchName": "CHILLI CHICKEN",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "East"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 374,
    "calories": 298,
    "proteinGrams": 16,
    "carbsGrams": 10,
    "fatGrams": 20,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.82375,
    "ingredients": "Chicken-60 gms; soya sauce-15 gms; VINEGAR-7 gms; Ginger-15 gms;Garlic-15 gms; Chillies-7 gms; Onion-60 gms; Capsicum-150 gms;  Common salt-15 gms; Coriander leaves-15 gms; ; Olive oil-15 gms",
    "parsedIngredients": [
      "Chicken-60 gms",
      "soya sauce-15 gms",
      "VINEGAR-7 gms",
      "Ginger-15 gms",
      "Garlic-15 gms",
      "Chillies-7 gms",
      "Onion-60 gms",
      "Capsicum-150 gms",
      "Common salt-15 gms",
      "Coriander leaves-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-013",
    "name": "Soya granules",
    "cleanSearchName": "Soya granules",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "3 small",
    "totalWeightGrams": 315,
    "calories": 331,
    "proteinGrams": 21,
    "carbsGrams": 42,
    "fatGrams": 9,
    "fiberGrams": 19,
    "carbonFootprintKgCO2e": 0.465,
    "ingredients": "Common salt-15 gms; Ginger-1 slice; Black pepper-7 gms; CURRY LEAVES-5 gms; CORIANDER-30 gms; Cooking oil-15 gms; Onion-60 gms; Ginger-7 gms; Cumin seeds-7 gms; Chillies-4 gms; CORIANDER LEAVES-15 gms; Soya Granules-150 gms",
    "parsedIngredients": [
      "Common salt-15 gms",
      "Ginger-1 slice",
      "Black pepper-7 gms",
      "CURRY LEAVES-5 gms",
      "CORIANDER-30 gms",
      "Cooking oil-15 gms",
      "Onion-60 gms",
      "Ginger-7 gms",
      "Cumin seeds-7 gms",
      "Chillies-4 gms",
      "CORIANDER LEAVES-15 gms",
      "Soya Granules-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-014",
    "name": "Chicken Rice",
    "cleanSearchName": "Chicken Rice",
    "associativity": "5",
    "associativityCategory": "Khichdi, Pulao & Biryani",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 422,
    "calories": 352,
    "proteinGrams": 15,
    "carbsGrams": 51,
    "fatGrams": 10,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 1.574,
    "ingredients": "Onion-120 gms; Ginger-5 gms;Garlic-5 gms; Cooking oil-2 gms; Common salt-15 gms; Black pepper-15 gms; Rice-60 gms; Chicken-200 gms",
    "parsedIngredients": [
      "Onion-120 gms",
      "Ginger-5 gms",
      "Garlic-5 gms",
      "Cooking oil-2 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Rice-60 gms",
      "Chicken-200 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-015",
    "name": "Gravy tofu",
    "cleanSearchName": "Gravy tofu",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 592,
    "calories": 503,
    "proteinGrams": 18,
    "carbsGrams": 22,
    "fatGrams": 35,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 1.57565,
    "ingredients": "Common salt-15 gms; Black pepper-15 gms; Cooking oil-30 gms; Onion-100 gms;Garlic-2 gms; Ginger-5 gms; Capsicum-100 gms; MUSHROOM-250 gms; soya sauce-15 gms; Tofu-150 gms",
    "parsedIngredients": [
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Cooking oil-30 gms",
      "Onion-100 gms",
      "Garlic-2 gms",
      "Ginger-5 gms",
      "Capsicum-100 gms",
      "MUSHROOM-250 gms",
      "soya sauce-15 gms",
      "Tofu-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-016",
    "name": "Masala Tofu",
    "cleanSearchName": "Masala Tofu",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 317,
    "calories": 146,
    "proteinGrams": 10,
    "carbsGrams": 15,
    "fatGrams": 4,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.6667,
    "ingredients": "Common salt-15 gms; Onion-10 gms;Garlic-2 gms; Ginger-7 gms; Tomato-120 gms; CORIANDER leaves-15 gms; TURMERIC powder-7 gms; Tofu-150 gms",
    "parsedIngredients": [
      "Common salt-15 gms",
      "Onion-10 gms",
      "Garlic-2 gms",
      "Ginger-7 gms",
      "Tomato-120 gms",
      "CORIANDER leaves-15 gms",
      "TURMERIC powder-7 gms",
      "Tofu-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-017",
    "name": "Soya Roti Roll (Broccoli & Tofu)",
    "cleanSearchName": "Soya Roti Roll (Broccoli & Tofu)",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 440,
    "calories": 550,
    "proteinGrams": 36,
    "carbsGrams": 27,
    "fatGrams": 33,
    "fiberGrams": 12,
    "carbonFootprintKgCO2e": 0.83775,
    "ingredients": "Cumin seeds-15 gms; Turmeric powder-15 gms; Common salt-15 gms; Soya flour-75 gms; Broccoli-125 gms; Tofu-150 gms; Coriander Powder-15 gms; Garam Masala-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Cumin seeds-15 gms",
      "Turmeric powder-15 gms",
      "Common salt-15 gms",
      "Soya flour-75 gms",
      "Broccoli-125 gms",
      "Tofu-150 gms",
      "Coriander Powder-15 gms",
      "Garam Masala-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-018",
    "name": "Smoothie (Soya Milk)",
    "cleanSearchName": "Smoothie (Soya Milk)",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 509,
    "calories": 131,
    "proteinGrams": 5,
    "carbsGrams": 7,
    "fatGrams": 9,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.179,
    "ingredients": "Papaya-150 gms; ORANGE-90 gms; Almond-4 gms; PUMPKIN SEED-15 gms; Soya Milk-250 gms",
    "parsedIngredients": [
      "Papaya-150 gms",
      "ORANGE-90 gms",
      "Almond-4 gms",
      "PUMPKIN SEED-15 gms",
      "Soya Milk-250 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-019",
    "name": "Tofu Salad",
    "cleanSearchName": "Tofu Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 169,
    "calories": 66,
    "proteinGrams": 3,
    "carbsGrams": 6,
    "fatGrams": 2,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.1688,
    "ingredients": "CUCUMBER-62 gms; Capsicum-62 gms; CORIANDER-15 gms; Lemon-15 gms; Tofu-15 gms",
    "parsedIngredients": [
      "CUCUMBER-62 gms",
      "Capsicum-62 gms",
      "CORIANDER-15 gms",
      "Lemon-15 gms",
      "Tofu-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-020",
    "name": "Soya Chunks Salad",
    "cleanSearchName": "Soya Chunks Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 1202,
    "calories": 333,
    "proteinGrams": 22,
    "carbsGrams": 50,
    "fatGrams": 3,
    "fiberGrams": 18,
    "carbonFootprintKgCO2e": 1.4037,
    "ingredients": "CUCUMBER-250 gms; carrot-250 gms; Tomato-120 gms; Capsicum-250 gms; Lemon-5 gms; Common salt-7 gms; Black pepper-15 gms; Parsley-5 gms; Soya Chunks-300 gms",
    "parsedIngredients": [
      "CUCUMBER-250 gms",
      "carrot-250 gms",
      "Tomato-120 gms",
      "Capsicum-250 gms",
      "Lemon-5 gms",
      "Common salt-7 gms",
      "Black pepper-15 gms",
      "Parsley-5 gms",
      "Soya Chunks-300 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-021",
    "name": "Noodles Tofu Sizzler",
    "cleanSearchName": "Noodles Tofu Sizzler",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 452,
    "calories": 381,
    "proteinGrams": 12,
    "carbsGrams": 73,
    "fatGrams": 3,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.91945,
    "ingredients": "Common salt-7 gms; Lettuce Leaf-75 gms; Capsicum-75 gms; Onion-70 gms; Mint leaves-15 gms; Ginger-15 gms; Garlic-15 gms; Cumin seeds-15 gms; Coriander seeds-15 gms; Rice Noodles-150 gms",
    "parsedIngredients": [
      "Common salt-7 gms",
      "Lettuce Leaf-75 gms",
      "Capsicum-75 gms",
      "Onion-70 gms",
      "Mint leaves-15 gms",
      "Ginger-15 gms",
      "Garlic-15 gms",
      "Cumin seeds-15 gms",
      "Coriander seeds-15 gms",
      "Rice Noodles-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-022",
    "name": "Nutri matar (soya) Vegetable",
    "cleanSearchName": "Nutri matar Soya Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 352,
    "calories": 204,
    "proteinGrams": 11,
    "carbsGrams": 23,
    "fatGrams": 7,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.4773,
    "ingredients": "Peas-62 gms; Tomato-120 gms; Onion-50 gms; Cumin seeds-4 gms; Turmeric powder-4 gms; Common salt-7 gms; Cooking oil-15 gms; Coriander leaves-15 gms; Soya Chunks-75 gms",
    "parsedIngredients": [
      "Peas-62 gms",
      "Tomato-120 gms",
      "Onion-50 gms",
      "Cumin seeds-4 gms",
      "Turmeric powder-4 gms",
      "Common salt-7 gms",
      "Cooking oil-15 gms",
      "Coriander leaves-15 gms",
      "Soya Chunks-75 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-023",
    "name": "Soya Sprouts Salad",
    "cleanSearchName": "Soya Sprouts Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "2 small bowl",
    "totalWeightGrams": 952,
    "calories": 145,
    "proteinGrams": 8,
    "carbsGrams": 25,
    "fatGrams": 1,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.6897,
    "ingredients": "CUCUMBER-250 gms; carrot-250 gms; Capsicum-250 gms; Lemon-5 ml; Common salt-7 gms; Black pepper-15 gms;Parsley-15 gms; Brussels sprouts-15 gms; Soyabean-150 gms",
    "parsedIngredients": [
      "CUCUMBER-250 gms",
      "carrot-250 gms",
      "Capsicum-250 gms",
      "Lemon-5 ml",
      "Common salt-7 gms",
      "Black pepper-15 gms",
      "Parsley-15 gms",
      "Brussels sprouts-15 gms",
      "Soyabean-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-024",
    "name": "Lettuce wrap with Vegetables",
    "cleanSearchName": "Lettuce wrap with Vegetables",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 245,
    "calories": 173,
    "proteinGrams": 8,
    "carbsGrams": 19,
    "fatGrams": 5,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.3378,
    "ingredients": "MUSHROOM-60 gms; Spinach-60 gms; Onion-30 gms; Capsicum-75 gms; carrot-1 gms; Garlic-5 gms; Common salt-0.5 gms; Black pepper-0.5 gms;Parsley-4 gms",
    "parsedIngredients": [
      "MUSHROOM-60 gms",
      "Spinach-60 gms",
      "Onion-30 gms",
      "Capsicum-75 gms",
      "carrot-1 gms",
      "Garlic-5 gms",
      "Common salt-0.5 gms",
      "Black pepper-0.5 gms",
      "Parsley-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-025",
    "name": "BEANS/CHINESE BEANS",
    "cleanSearchName": "BEANS/CHINESE BEANS",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 300,
    "calories": 171,
    "proteinGrams": 5,
    "carbsGrams": 11,
    "fatGrams": 11,
    "fiberGrams": 8,
    "carbonFootprintKgCO2e": 0.31725,
    "ingredients": "Beans-125 gms; Onion-100 gms; Cumin seeds-15 gms; Turmeric powder-15 gms; Mustard oil-30 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Beans-125 gms",
      "Onion-100 gms",
      "Cumin seeds-15 gms",
      "Turmeric powder-15 gms",
      "Mustard oil-30 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-026",
    "name": "Vegetables In Black Bean Sauce",
    "cleanSearchName": "Vegetables In Black Bean Sauce",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 194,
    "calories": 147,
    "proteinGrams": 9,
    "carbsGrams": 19,
    "fatGrams": 1,
    "fiberGrams": 12,
    "carbonFootprintKgCO2e": 0.14485,
    "ingredients": "Garlic-1 gms; Ginger-1 gms; Capsicum-15 gms; carrot-1 gms; MUSHROOM-1 gms; Zucchini-50 gms; Onion-80 gms; soya sauce-15 gms; Common salt-15 gms; Black pepper-15 gms",
    "parsedIngredients": [
      "Garlic-1 gms",
      "Ginger-1 gms",
      "Capsicum-15 gms",
      "carrot-1 gms",
      "MUSHROOM-1 gms",
      "Zucchini-50 gms",
      "Onion-80 gms",
      "soya sauce-15 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-027",
    "name": "Vietnamese cold Spring Roll",
    "cleanSearchName": "Vietnamese cold Spring Roll",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "2 number",
    "totalWeightGrams": 264,
    "calories": 42,
    "proteinGrams": 3,
    "carbsGrams": 7,
    "fatGrams": 1,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.2026,
    "ingredients": "Lettuce Leaf-20 gms; Mint leaves-15 gms; CORIANDER-15 gms; carrot-62 gms; Capsicum-62 gms; CUCUMBER-62 gms; soya sauce-4 gms; VINEGAR-4 gms; Rice paper-20 gms",
    "parsedIngredients": [
      "Lettuce Leaf-20 gms",
      "Mint leaves-15 gms",
      "CORIANDER-15 gms",
      "carrot-62 gms",
      "Capsicum-62 gms",
      "CUCUMBER-62 gms",
      "soya sauce-4 gms",
      "VINEGAR-4 gms",
      "Rice paper-20 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-028",
    "name": "Soya wrap",
    "cleanSearchName": "Soya wrap",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 1003,
    "calories": 246,
    "proteinGrams": 16,
    "carbsGrams": 29,
    "fatGrams": 6,
    "fiberGrams": 15,
    "carbonFootprintKgCO2e": 0.924,
    "ingredients": "Lettuce leaf-60 gms; Tomato-250 gms; CUCUMBER-250 gms; Capsicum-250 gms; Cumin seeds-4 gms; Chillies-4 gms; Common salt-15 gms; Black pepper-15 gms; Lemon-5 gms; Soya-150 gms",
    "parsedIngredients": [
      "Lettuce leaf-60 gms",
      "Tomato-250 gms",
      "CUCUMBER-250 gms",
      "Capsicum-250 gms",
      "Cumin seeds-4 gms",
      "Chillies-4 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Lemon-5 gms",
      "Soya-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-029",
    "name": "Shredded Chicken with Soya Sauce",
    "cleanSearchName": "Shredded Chicken with Soya Sauce",
    "associativity": "8",
    "associativityCategory": "Gravy Curries, Soups & Stews",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Gravy"
    ],
    "category": "Non-veg",
    "allergens": [
      "soy"
    ],
    "serving": "4 small bowl",
    "totalWeightGrams": 405,
    "calories": 220,
    "proteinGrams": 22,
    "carbsGrams": 7,
    "fatGrams": 13,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 1.98,
    "ingredients": "HONEY-15 gms; Common salt-15 gms; Chicken-300 gms; soya sauce-30 gms; Vinegar-15 gms; Sesame Oil-15 gms; Garlic-15 gms",
    "parsedIngredients": [
      "HONEY-15 gms",
      "Common salt-15 gms",
      "Chicken-300 gms",
      "soya sauce-30 gms",
      "Vinegar-15 gms",
      "Sesame Oil-15 gms",
      "Garlic-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-030",
    "name": "Rice Flour Wrap with Tofu And Veggie",
    "cleanSearchName": "Rice Flour Wrap with Tofu And Veggie",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "2 medium",
    "totalWeightGrams": 610,
    "calories": 281,
    "proteinGrams": 7,
    "carbsGrams": 44,
    "fatGrams": 7,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 1.7505,
    "ingredients": "Rice Flour-150 gms;  Common salt-15 gms; Cumin seeds-15 gms; Ajwain-15 gms; Red chilli Powder-15 gms; Olive oil-15 gms; Tofu-350 gms; Capsicum-10 gms; Onion-10 gms; CABBAGE-10 gms; Coriander Powder-5 gms",
    "parsedIngredients": [
      "Rice Flour-150 gms",
      "Common salt-15 gms",
      "Cumin seeds-15 gms",
      "Ajwain-15 gms",
      "Red chilli Powder-15 gms",
      "Olive oil-15 gms",
      "Tofu-350 gms",
      "Capsicum-10 gms",
      "Onion-10 gms",
      "CABBAGE-10 gms",
      "Coriander Powder-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-031",
    "name": "Soya Tikki",
    "cleanSearchName": "Soya Tikki",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "2 medium",
    "totalWeightGrams": 1070,
    "calories": 275,
    "proteinGrams": 28,
    "carbsGrams": 40,
    "fatGrams": 1,
    "fiberGrams": 11,
    "carbonFootprintKgCO2e": 0.8665,
    "ingredients": "Soya Granules-150 gms; POTATO-700 gms; Onion-125 gms; Ginger powder-15 gms; Garlic powder-15 gms; Cumin seeds-15 gms; Coriander Powder-5 gms; Garam Masala-15 gms; Common salt-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Soya Granules-150 gms",
      "POTATO-700 gms",
      "Onion-125 gms",
      "Ginger powder-15 gms",
      "Garlic powder-15 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-5 gms",
      "Garam Masala-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-032",
    "name": "Soya Flour Gobhi Stuffed Paratha",
    "cleanSearchName": "Soya Flour Gobhi Stuffed Paratha",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "2 number",
    "totalWeightGrams": 465,
    "calories": 238,
    "proteinGrams": 20,
    "carbsGrams": 17,
    "fatGrams": 10,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.3975,
    "ingredients": "Ginger powder-15 gms; Chillies-15 gms; Coriander Powder-5 gms; Common salt-15 gms; Coriander leaves-15 gms; Soya flour-250 gms; Cauliflower-150 gms;",
    "parsedIngredients": [
      "Ginger powder-15 gms",
      "Chillies-15 gms",
      "Coriander Powder-5 gms",
      "Common salt-15 gms",
      "Coriander leaves-15 gms",
      "Soya flour-250 gms",
      "Cauliflower-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-033",
    "name": "Saute Tofu",
    "cleanSearchName": "Saute Tofu",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "2 cup",
    "totalWeightGrams": 151,
    "calories": 51,
    "proteinGrams": 5,
    "carbsGrams": 2,
    "fatGrams": 3,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.4503,
    "ingredients": "Tofu-150 gms; Onion-1 gms",
    "parsedIngredients": [
      "Tofu-150 gms",
      "Onion-1 gms"
    ],
    "isDuplicateName": true,
    "duplicateNote": "Alternative portion or variation for \"Saute Tofu\" (2 cup, 151g)"
  },
  {
    "id": "food-034",
    "name": "Soya Flour Cheela",
    "cleanSearchName": "Soya Flour Cheela",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner",
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 685,
    "calories": 582,
    "proteinGrams": 35,
    "carbsGrams": 36,
    "fatGrams": 33,
    "fiberGrams": 11,
    "carbonFootprintKgCO2e": 0.7965,
    "ingredients": "Soya flour-250 gms;Onion-125 gms; Tomato  tomato; Capsicum-250 gms; Chillies-15 gms; Ginger powder-15 gms; Common salt-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Soya flour-250 gms",
      "Onion-125 gms",
      "Tomato  tomato",
      "Capsicum-250 gms",
      "Chillies-15 gms",
      "Ginger powder-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": true,
    "duplicateNote": "Alternative portion or variation for \"Soya Flour Cheela\" (1 medium, 685g)"
  },
  {
    "id": "food-035",
    "name": "Tofu Tikka Saute in Green Chutney",
    "cleanSearchName": "Tofu Tikka Saute in Green Chutney",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 small katori",
    "totalWeightGrams": 385,
    "calories": 449,
    "proteinGrams": 29,
    "carbsGrams": 15,
    "fatGrams": 29,
    "fiberGrams": 10,
    "carbonFootprintKgCO2e": 1.014,
    "ingredients": "Tofu-250 gms; Coriander leaves-15 gms;Mint leaves-15 gms; Chillies-15 gms; Ginger-15 gms;Garlic-15 gms; Cumin seeds-15 gms; Chat Masala-15 gms; Common salt-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Tofu-250 gms",
      "Coriander leaves-15 gms",
      "Mint leaves-15 gms",
      "Chillies-15 gms",
      "Ginger-15 gms",
      "Garlic-15 gms",
      "Cumin seeds-15 gms",
      "Chat Masala-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-036",
    "name": "Soya Flour Cheela",
    "cleanSearchName": "Soya Flour Cheela",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 540,
    "calories": 310,
    "proteinGrams": 9,
    "carbsGrams": 20,
    "fatGrams": 22,
    "fiberGrams": 8,
    "carbonFootprintKgCO2e": 0.8125,
    "ingredients": "Onion-125 gms; Tomato-90 gms; Capsicum-250 gms; Chillies-15 gms; Turmeric powder-15 gms; Red chilli Powder-15 gms; Common salt-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Onion-125 gms",
      "Tomato-90 gms",
      "Capsicum-250 gms",
      "Chillies-15 gms",
      "Turmeric powder-15 gms",
      "Red chilli Powder-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": true,
    "duplicateNote": "Alternative portion or variation for \"Soya Flour Cheela\" (1 medium, 540g)"
  },
  {
    "id": "food-037",
    "name": "Avocado Toast 2",
    "cleanSearchName": "Avocado Toast 2",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "soy"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 530,
    "calories": 531,
    "proteinGrams": 10,
    "carbsGrams": 39,
    "fatGrams": 38,
    "fiberGrams": 14,
    "carbonFootprintKgCO2e": 0.559,
    "ingredients": "Avocado-180 gms; Bread-50 gms; Black Pepper-15 gms; Tomato-90 gms; Onion-150 gms; Lemon-15 gms; Olive oil-15 gms;Parsley-15 gms",
    "parsedIngredients": [
      "Avocado-180 gms",
      "Bread-50 gms",
      "Black Pepper-15 gms",
      "Tomato-90 gms",
      "Onion-150 gms",
      "Lemon-15 gms",
      "Olive oil-15 gms",
      "Parsley-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-038",
    "name": "Crispy Prawn Rolls",
    "cleanSearchName": "Crispy Prawn Rolls",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "East"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "shellfish"
    ],
    "serving": "1 small",
    "totalWeightGrams": 184,
    "calories": 124,
    "proteinGrams": 10,
    "carbsGrams": 5,
    "fatGrams": 6,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.66725,
    "ingredients": "Shrimp-75 gms; Onion-15 gms; soya sauce-15 gms; Common salt-15 gms;Black Pepper-4 gms; Cooking oil-15 gms; Lemon-15 gms; Garlic powder-15 gms; Ginger powder-15 gms",
    "parsedIngredients": [
      "Shrimp-75 gms",
      "Onion-15 gms",
      "soya sauce-15 gms",
      "Common salt-15 gms",
      "Black Pepper-4 gms",
      "Cooking oil-15 gms",
      "Lemon-15 gms",
      "Garlic powder-15 gms",
      "Ginger powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-039",
    "name": "Prawn Masala Dumpling",
    "cleanSearchName": "Prawn Masala Dumpling",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Non-veg",
    "allergens": [
      "shellfish"
    ],
    "serving": "3 number",
    "totalWeightGrams": 105,
    "calories": 75,
    "proteinGrams": 4,
    "carbsGrams": 10,
    "fatGrams": 2,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.246,
    "ingredients": "Shrimp-30 gms; Onion-20 gms;  Cooking oil-15 gms; Wheat-40 gms",
    "parsedIngredients": [
      "Shrimp-30 gms",
      "Onion-20 gms",
      "Cooking oil-15 gms",
      "Wheat-40 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-040",
    "name": "Sesame Chicken Salad",
    "cleanSearchName": "Sesame Chicken Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "sesame"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 495,
    "calories": 274,
    "proteinGrams": 27,
    "carbsGrams": 17,
    "fatGrams": 9,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.8125,
    "ingredients": "Chicken-100 gms; Lettuce Leaf-80 gms; CABBAGE-80 gms; carrot-50 gms; CUCUMBER-50 gms; Capsicum-50 gms; Onion-60 gms; Common salt-15 gms; Ginger-5 gms;Garlic-5 gms",
    "parsedIngredients": [
      "Chicken-100 gms",
      "Lettuce Leaf-80 gms",
      "CABBAGE-80 gms",
      "carrot-50 gms",
      "CUCUMBER-50 gms",
      "Capsicum-50 gms",
      "Onion-60 gms",
      "Common salt-15 gms",
      "Ginger-5 gms",
      "Garlic-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-041",
    "name": "Fish Fingers (Grilled / Roasted )",
    "cleanSearchName": "Fish Fingers (Grilled / Roasted )",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "fish"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 453,
    "calories": 512,
    "proteinGrams": 27,
    "carbsGrams": 51,
    "fatGrams": 19,
    "fiberGrams": 8,
    "carbonFootprintKgCO2e": 1.18375,
    "ingredients": "fish-70 gms; Turmeric powder-4 gms; Lemon-7 gms; Ginger-15 gms; Garlic-15 gms; Common salt-7 gms; Cooking oil-15 gms; Cumin seeds-15 gms; Coriander Powder-15 gms; Garam Masala-15 gms; Rice Flour-150 gms; Besan-125 gms",
    "parsedIngredients": [
      "fish-70 gms",
      "Turmeric powder-4 gms",
      "Lemon-7 gms",
      "Ginger-15 gms",
      "Garlic-15 gms",
      "Common salt-7 gms",
      "Cooking oil-15 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-15 gms",
      "Garam Masala-15 gms",
      "Rice Flour-150 gms",
      "Besan-125 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-042",
    "name": "Prawn Cutlet",
    "cleanSearchName": "Prawn Cutlet",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "seafood"
    ],
    "serving": "3 small",
    "totalWeightGrams": 117,
    "calories": 34,
    "proteinGrams": 4,
    "carbsGrams": 3,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.3904,
    "ingredients": "Shrimp-60 gms; POTATO-20 gms; Onion-7 gms; Turmeric powder-4 gms;Lemon-4 gms; Coriander leaves-15 gms; Common salt-7 gms",
    "parsedIngredients": [
      "Shrimp-60 gms",
      "POTATO-20 gms",
      "Onion-7 gms",
      "Turmeric powder-4 gms",
      "Lemon-4 gms",
      "Coriander leaves-15 gms",
      "Common salt-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-043",
    "name": "Rice milk",
    "cleanSearchName": "Rice milk",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "rice"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 129,
    "calories": 214,
    "proteinGrams": 5,
    "carbsGrams": 47,
    "fatGrams": 0,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.5004,
    "ingredients": "Common salt-4 gms; Rice-125 gms",
    "parsedIngredients": [
      "Common salt-4 gms",
      "Rice-125 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-044",
    "name": "CHICKEN SALAMI SALAD",
    "cleanSearchName": "CHICKEN SALAMI SALAD",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "pork"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 422,
    "calories": 578,
    "proteinGrams": 53,
    "carbsGrams": 7,
    "fatGrams": 37,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 1.7388,
    "ingredients": "Common salt-15 gms; carrot-60 gms; Capsicum-20 gms; Lettuce Leaf-20 gms; Lemon-15 gms; Coriander leaves-0.5 gms; Mint leaves-7 gms; Chicken-250 gms; Olive oil-15 gms; Garlic powder-15 gms",
    "parsedIngredients": [
      "Common salt-15 gms",
      "carrot-60 gms",
      "Capsicum-20 gms",
      "Lettuce Leaf-20 gms",
      "Lemon-15 gms",
      "Coriander leaves-0.5 gms",
      "Mint leaves-7 gms",
      "Chicken-250 gms",
      "Olive oil-15 gms",
      "Garlic powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-045",
    "name": "CHICKEN SAUSAGES SALAD",
    "cleanSearchName": "CHICKEN SAUSAGES SALAD",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "pork"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 424,
    "calories": 593,
    "proteinGrams": 54,
    "carbsGrams": 10,
    "fatGrams": 37,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 1.7416,
    "ingredients": "Common salt-15 gms; carrot-60 gms; Capsicum-20 gms; Lettuce Leaf-20 gms; Lemon-15 gms; Coriander leaves-7 gms;Mint leaves-7 gms; Chicken-250 gms; Olive oil-15 gms; Garlic powder-15 gms",
    "parsedIngredients": [
      "Common salt-15 gms",
      "carrot-60 gms",
      "Capsicum-20 gms",
      "Lettuce Leaf-20 gms",
      "Lemon-15 gms",
      "Coriander leaves-7 gms",
      "Mint leaves-7 gms",
      "Chicken-250 gms",
      "Olive oil-15 gms",
      "Garlic powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-046",
    "name": "Chicken Salami Toast",
    "cleanSearchName": "Chicken Salami Toast",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Snacks",
      "Breakfast"
    ],
    "category": "Non-veg",
    "allergens": [
      "pork"
    ],
    "serving": "2 medium",
    "totalWeightGrams": 452,
    "calories": 138,
    "proteinGrams": 8,
    "carbsGrams": 20,
    "fatGrams": 2,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.6036,
    "ingredients": "Bread-60 gms; Chicken Salami-10 gms;Onion-125 gms; Tomato-90 gms; Capsicum-150 gms; Red chilli Powder-15 gms; Turmeric powder-1 gms; Common salt-1 gms",
    "parsedIngredients": [
      "Bread-60 gms",
      "Chicken Salami-10 gms",
      "Onion-125 gms",
      "Tomato-90 gms",
      "Capsicum-150 gms",
      "Red chilli Powder-15 gms",
      "Turmeric powder-1 gms",
      "Common salt-1 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-047",
    "name": "Sabudana Cutlet/Tikki",
    "cleanSearchName": "Sabudana Cutlet/Tikki",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "South"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "peanut"
    ],
    "serving": "1 number",
    "totalWeightGrams": 113,
    "calories": 372,
    "proteinGrams": 5,
    "carbsGrams": 68,
    "fatGrams": 8,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.1815,
    "ingredients": "Sabudana-62 gms; Ginger powder-7 gms; Coriander leaves-7 gms; Red Chilli Powder-7 gms; Common salt-15 gms; Cooking Oil-15 gms",
    "parsedIngredients": [
      "Sabudana-62 gms",
      "Ginger powder-7 gms",
      "Coriander leaves-7 gms",
      "Red Chilli Powder-7 gms",
      "Common salt-15 gms",
      "Cooking Oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-048",
    "name": "Chicken Satay",
    "cleanSearchName": "Chicken Satay",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "peanut"
    ],
    "serving": "4 number",
    "totalWeightGrams": 651,
    "calories": 473,
    "proteinGrams": 35,
    "carbsGrams": 9,
    "fatGrams": 34,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 2.1717,
    "ingredients": "Chicken-60 gms; Lemon-15 gms; Turmeric powder-15 gms; Cumin seeds-15 gms; Yoghurt-15 gms; Garlic powder-15 gms; Red chilli Powder-7 gms; Coriander Powder-15 gms; Garam Masala-15 gms; Common salt-7 gms; Olive oil-15 gms; Peanuts-200 gms; milk-250 gms ; Ginger powder-7 gms",
    "parsedIngredients": [
      "Chicken-60 gms",
      "Lemon-15 gms",
      "Turmeric powder-15 gms",
      "Cumin seeds-15 gms",
      "Yoghurt-15 gms",
      "Garlic powder-15 gms",
      "Red chilli Powder-7 gms",
      "Coriander Powder-15 gms",
      "Garam Masala-15 gms",
      "Common salt-7 gms",
      "Olive oil-15 gms",
      "Peanuts-200 gms",
      "milk-250 gms",
      "Ginger powder-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-049",
    "name": "Coconut Chutney",
    "cleanSearchName": "Coconut Chutney",
    "associativity": "13",
    "associativityCategory": "Traditional Sambars & Chutneys",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "peanut"
    ],
    "serving": "2 tbsp",
    "totalWeightGrams": 37,
    "calories": 60,
    "proteinGrams": 1.3,
    "carbsGrams": 4.9,
    "fatGrams": 4.4,
    "fiberGrams": 1.7,
    "carbonFootprintKgCO2e": 0.3452,
    "ingredients": "Salt-0.34 gms; Chickpeas-6.75 gms; Chillies-0.45 gms; Cooking Oil-1 gms; Mustard-0.4 gms; Coconut-9 gms",
    "parsedIngredients": [
      "Salt-0.34 gms",
      "Chickpeas-6.75 gms",
      "Chillies-0.45 gms",
      "Cooking Oil-1 gms",
      "Mustard-0.4 gms",
      "Coconut-9 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-050",
    "name": "Sabudana Khichdi",
    "cleanSearchName": "Sabudana Khichdi",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "North",
      "South"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "peanut"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 125,
    "calories": 156,
    "proteinGrams": 3,
    "carbsGrams": 22,
    "fatGrams": 5,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.1758,
    "ingredients": "Tapioca-62 gms; Common salt-15 gms; Cumin seeds-4 gms; Curry leaves-5 gms; POTATO-10 gms; Lemon-7 gms; CORIANDER-15 gms; Cooking oil-7 gms",
    "parsedIngredients": [
      "Tapioca-62 gms",
      "Common salt-15 gms",
      "Cumin seeds-4 gms",
      "Curry leaves-5 gms",
      "POTATO-10 gms",
      "Lemon-7 gms",
      "CORIANDER-15 gms",
      "Cooking oil-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-051",
    "name": "Sabudana Vada",
    "cleanSearchName": "Sabudana Vada",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "peanut"
    ],
    "serving": "10 medium",
    "totalWeightGrams": 202,
    "calories": 32,
    "proteinGrams": 0,
    "carbsGrams": 3,
    "fatGrams": 2,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.345,
    "ingredients": "Tapioca-125 gms; POTATO-10 gms; Cumin seeds-7 gms; CORIANDER-15 gms; Common salt-15 gms; Lemon-15 gms; Cooking oil-15 gms",
    "parsedIngredients": [
      "Tapioca-125 gms",
      "POTATO-10 gms",
      "Cumin seeds-7 gms",
      "CORIANDER-15 gms",
      "Common salt-15 gms",
      "Lemon-15 gms",
      "Cooking oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-052",
    "name": "Masala Onion Salad",
    "cleanSearchName": "Masala Onion Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "onion"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 180,
    "calories": 48,
    "proteinGrams": 1,
    "carbsGrams": 8,
    "fatGrams": 0,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.138,
    "ingredients": "Chillies-15 gms; Common salt-7 gms; Coriander leaves-7 gms; Lemon-15 gms; Cumin seeds-7 gms; Chillies-4 gms; Onion-125 gms",
    "parsedIngredients": [
      "Chillies-15 gms",
      "Common salt-7 gms",
      "Coriander leaves-7 gms",
      "Lemon-15 gms",
      "Cumin seeds-7 gms",
      "Chillies-4 gms",
      "Onion-125 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-053",
    "name": "BELL PEPPER, ONION & TOMATO VegETABLE",
    "cleanSearchName": "BELL PEPPER, ONION & TOMATO VegETABLE",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "onion"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 555,
    "calories": 250,
    "proteinGrams": 5,
    "carbsGrams": 18,
    "fatGrams": 16,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.774,
    "ingredients": "Capsicum-70 gms; Onion-90 gms; Tomato-120 gms; Turmeric powder-15 gms; Mustard oil-30 gms; Coriander leaves-15 gms; Common salt-15 gms; Capsicum-200 gms",
    "parsedIngredients": [
      "Capsicum-70 gms",
      "Onion-90 gms",
      "Tomato-120 gms",
      "Turmeric powder-15 gms",
      "Mustard oil-30 gms",
      "Coriander leaves-15 gms",
      "Common salt-15 gms",
      "Capsicum-200 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-054",
    "name": "Roasted Makhana (Foxnuts)",
    "cleanSearchName": "Roasted Makhana (Foxnuts)",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "East"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 299,
    "calories": 139,
    "proteinGrams": 5,
    "carbsGrams": 28,
    "fatGrams": 1,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.388,
    "ingredients": "Makhana-250 gms; Common salt-15 gms;Black Pepper-4 gms; Chat Masala-15 gms; Cumin seeds-15 gms",
    "parsedIngredients": [
      "Makhana-250 gms",
      "Common salt-15 gms",
      "Black Pepper-4 gms",
      "Chat Masala-15 gms",
      "Cumin seeds-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-055",
    "name": "Hummus",
    "cleanSearchName": "Hummus",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 tbsp",
    "totalWeightGrams": 122,
    "calories": 349,
    "proteinGrams": 13,
    "carbsGrams": 30,
    "fatGrams": 18,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.2062,
    "ingredients": "Gram dal-60 gms;Garlic-10 gms; Lemon-15 gms; Common salt-7 gms; Olive oil-15 gms; Cumin Powder-15 gms",
    "parsedIngredients": [
      "Gram dal-60 gms",
      "Garlic-10 gms",
      "Lemon-15 gms",
      "Common salt-7 gms",
      "Olive oil-15 gms",
      "Cumin Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-056",
    "name": "Almond Flour Wrap",
    "cleanSearchName": "Almond Flour Wrap",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 291,
    "calories": 640,
    "proteinGrams": 23,
    "carbsGrams": 23,
    "fatGrams": 53,
    "fiberGrams": 12,
    "carbonFootprintKgCO2e": 0.7818,
    "ingredients": "Common salt-15 gms; Onion-1 gms;Roti-100 gms; Egg-130 gms ; Garlic Powder-15 gms;  Black pepper-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Common salt-15 gms",
      "Onion-1 gms",
      "Roti-100 gms",
      "Egg-130 gms",
      "Garlic Powder-15 gms",
      "Black pepper-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-057",
    "name": "Oats Porridge",
    "cleanSearchName": "Oats Porridge",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "2 medium katori",
    "totalWeightGrams": 430,
    "calories": 174,
    "proteinGrams": 8,
    "carbsGrams": 27,
    "fatGrams": 5,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.874,
    "ingredients": "Oats-150 gms; Milk-250 gms; Cinnamon-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Oats-150 gms",
      "Milk-250 gms",
      "Cinnamon-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-058",
    "name": "MIX NUTS RAITA",
    "cleanSearchName": "MIX NUTS RAITA",
    "associativity": "4",
    "associativityCategory": "Raitas & Yoghurt Accompaniments",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 313,
    "calories": 230,
    "proteinGrams": 10,
    "carbsGrams": 12,
    "fatGrams": 16,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.7974,
    "ingredients": "Yoghurt-250 gms; Almond-10 gms; RAISINS-4 gms; Common salt-4 gms; Coriander leaves-15 gms; Black pepper-15 gms; Cumin seeds-15 gms",
    "parsedIngredients": [
      "Yoghurt-250 gms",
      "Almond-10 gms",
      "RAISINS-4 gms",
      "Common salt-4 gms",
      "Coriander leaves-15 gms",
      "Black pepper-15 gms",
      "Cumin seeds-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-059",
    "name": "Rajma Kebab",
    "cleanSearchName": "Rajma Kebab",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "4 number",
    "totalWeightGrams": 184,
    "calories": 92,
    "proteinGrams": 5,
    "carbsGrams": 12,
    "fatGrams": 3,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.1742,
    "ingredients": "Rajma-80 gms; carrot-15 gms; Potato-30 gms; Peas-15 gms; Common salt-7 gms; Coriander leaves-15 gms; Cooking oil-7 gms; Cumin seeds-15 gms",
    "parsedIngredients": [
      "Rajma-80 gms",
      "carrot-15 gms",
      "Potato-30 gms",
      "Peas-15 gms",
      "Common salt-7 gms",
      "Coriander leaves-15 gms",
      "Cooking oil-7 gms",
      "Cumin seeds-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-060",
    "name": "Bhel (no papri)",
    "cleanSearchName": "Bhel (no papri)",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 520,
    "calories": 935,
    "proteinGrams": 21,
    "carbsGrams": 196,
    "fatGrams": 5,
    "fiberGrams": 11,
    "carbonFootprintKgCO2e": 1.267,
    "ingredients": "Rice-250 gms; Onion-15 gms; Tomato-120 gms; Cucumber-15 gms; carrot-15 gms; Potato-15 gms; Coriander leaves-30 gms; Common salt-15 gms; Lemon-15 gms; Chat Masala-15 gms; Cumin seeds-15 gms",
    "parsedIngredients": [
      "Rice-250 gms",
      "Onion-15 gms",
      "Tomato-120 gms",
      "Cucumber-15 gms",
      "carrot-15 gms",
      "Potato-15 gms",
      "Coriander leaves-30 gms",
      "Common salt-15 gms",
      "Lemon-15 gms",
      "Chat Masala-15 gms",
      "Cumin seeds-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-061",
    "name": "Veg Seeds Salad",
    "cleanSearchName": "Veg Seeds Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 293,
    "calories": 288,
    "proteinGrams": 14,
    "carbsGrams": 23,
    "fatGrams": 15,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.19085,
    "ingredients": "Lettuce Leaf-80 gms; CUCUMBER-60 gms; Onion-30 gms; carrot-30 gms; Capsicum-30 gms; Sunflower seeds-15 gms; PUMPKIN SEED-15 gms;Garlic-3 gms; Common salt-15 gms; Black pepper-15 gms",
    "parsedIngredients": [
      "Lettuce Leaf-80 gms",
      "CUCUMBER-60 gms",
      "Onion-30 gms",
      "carrot-30 gms",
      "Capsicum-30 gms",
      "Sunflower seeds-15 gms",
      "PUMPKIN SEED-15 gms",
      "Garlic-3 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-062",
    "name": "Steam Vegetable Salad",
    "cleanSearchName": "Steam Vegetable Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 577,
    "calories": 88,
    "proteinGrams": 3,
    "carbsGrams": 14,
    "fatGrams": 0,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.4714,
    "ingredients": "carrot-60 gms; Lemon-15 gms; Zucchini-195 gms; Capsicum-150 gms; Onion-120 gms; Cumin seeds-15 gms; Turmeric powder-7 gms; Red chilli Powder-7 gms; Coriander Powder-7 gms; Coriander leaves-1 gms",
    "parsedIngredients": [
      "carrot-60 gms",
      "Lemon-15 gms",
      "Zucchini-195 gms",
      "Capsicum-150 gms",
      "Onion-120 gms",
      "Cumin seeds-15 gms",
      "Turmeric powder-7 gms",
      "Red chilli Powder-7 gms",
      "Coriander Powder-7 gms",
      "Coriander leaves-1 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-063",
    "name": "FRUIT & NUTS (WALNUT & ALMOND) SALAD",
    "cleanSearchName": "FRUIT & NUTS (WALNUT & ALMOND) SALAD",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 292,
    "calories": 320,
    "proteinGrams": 7,
    "carbsGrams": 45,
    "fatGrams": 12,
    "fiberGrams": 10,
    "carbonFootprintKgCO2e": 0.2132,
    "ingredients": "Apple-90 gms; Grapes-62 gms; Almond-5 gms; PUMPKIN-15 gms; Sunflower seeds-15 gms; strawberry-105 gms",
    "parsedIngredients": [
      "Apple-90 gms",
      "Grapes-62 gms",
      "Almond-5 gms",
      "PUMPKIN-15 gms",
      "Sunflower seeds-15 gms",
      "strawberry-105 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-064",
    "name": "CHICKEN SALAD WITH ALMOND HONEY MUSTARD DRESSING",
    "cleanSearchName": "CHICKEN SALAD WITH ALMOND HONEY MUSTARD DRESSING",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 437,
    "calories": 982,
    "proteinGrams": 112,
    "carbsGrams": 8,
    "fatGrams": 55,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 1.7898,
    "ingredients": "Common salt-15 gms; carrot-60 gms; Capsicum-20 gms; Capsicum-20 gms; Lettuce Leaf-20 gms; Coriander leaves-7 gms; Mint leaves-2.5 gms; Almond-5 gms; HONEY-0.5 gms; Chicken-250 gms; Olive oil-15 gms; Garlic powder-15 gms",
    "parsedIngredients": [
      "Common salt-15 gms",
      "carrot-60 gms",
      "Capsicum-20 gms",
      "Capsicum-20 gms",
      "Lettuce Leaf-20 gms",
      "Coriander leaves-7 gms",
      "Mint leaves-2.5 gms",
      "Almond-5 gms",
      "HONEY-0.5 gms",
      "Chicken-250 gms",
      "Olive oil-15 gms",
      "Garlic powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-065",
    "name": "Almond Soup",
    "cleanSearchName": "Almond Soup",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "4 medium bowl",
    "totalWeightGrams": 1075,
    "calories": 223,
    "proteinGrams": 8,
    "carbsGrams": 12,
    "fatGrams": 18,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.6586,
    "ingredients": "Common salt-15 gms; Almonds-250 gms; Onion-125 gms; garlic-5 gms; Celery-150 gms; Broth-500 gms; thyme-15 gms; Parsley-15 gms",
    "parsedIngredients": [
      "Common salt-15 gms",
      "Almonds-250 gms",
      "Onion-125 gms",
      "garlic-5 gms",
      "Celery-150 gms",
      "Broth-500 gms",
      "thyme-15 gms",
      "Parsley-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-066",
    "name": "ALMOND MUSHROOM SOUP",
    "cleanSearchName": "ALMOND MUSHROOM SOUP",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 187,
    "calories": 192,
    "proteinGrams": 8,
    "carbsGrams": 7,
    "fatGrams": 15,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.5175,
    "ingredients": "Almond-10 gms; MUSHROOM-62 gms; Common salt-15 gms; Milk-100 gms",
    "parsedIngredients": [
      "Almond-10 gms",
      "MUSHROOM-62 gms",
      "Common salt-15 gms",
      "Milk-100 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-067",
    "name": "Oats Smoothie",
    "cleanSearchName": "Oats Smoothie",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 500,
    "calories": 224,
    "proteinGrams": 9,
    "carbsGrams": 36,
    "fatGrams": 6,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.995,
    "ingredients": "Banana-100 gms; Oats-150 gms; Almond Milk-250 gms",
    "parsedIngredients": [
      "Banana-100 gms",
      "Oats-150 gms",
      "Almond Milk-250 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-068",
    "name": "Smoothie (Almond Milk)",
    "cleanSearchName": "Smoothie (Almond Milk)",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 cup",
    "totalWeightGrams": 615,
    "calories": 192,
    "proteinGrams": 4,
    "carbsGrams": 39,
    "fatGrams": 5,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 1.1905,
    "ingredients": "Chia Seeds-15 gms; Almond Milk-250 gms; Pineapple-100 gms; Mango-250 gms",
    "parsedIngredients": [
      "Chia Seeds-15 gms",
      "Almond Milk-250 gms",
      "Pineapple-100 gms",
      "Mango-250 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-069",
    "name": "Kala Chana Soup",
    "cleanSearchName": "Kala Chana Soup",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "4 medium bowl",
    "totalWeightGrams": 614,
    "calories": 115,
    "proteinGrams": 5,
    "carbsGrams": 18,
    "fatGrams": 2,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.3505,
    "ingredients": "Cumin seeds-15 gms; Chickpeas-350 gmsTurmeric powder-15 gms; ;Onion-160 gms; Tomato-0.5 medium tomato; Garlic powder-7 gms; Ginger powder-7 gms; Coriander Powder-15 gms; Garam Masala-15 gms; Olive oil-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Cumin seeds-15 gms",
      "Chickpeas-350 gmsTurmeric powder-15 gms",
      "Onion-160 gms",
      "Tomato-0.5 medium tomato",
      "Garlic powder-7 gms",
      "Ginger powder-7 gms",
      "Coriander Powder-15 gms",
      "Garam Masala-15 gms",
      "Olive oil-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-070",
    "name": "Papaya Salad (raw papaya)",
    "cleanSearchName": "Papaya Salad (raw papaya)",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 530,
    "calories": 255,
    "proteinGrams": 4,
    "carbsGrams": 9,
    "fatGrams": 22,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.56325,
    "ingredients": "Papaya-75 gms; carrot-60 gms; Common salt-15 gms; Chillies-15 gms; Coriander leaves-15 gms;Cucumber-200 gms; Onion-60 gms; Peanut-75 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Papaya-75 gms",
      "carrot-60 gms",
      "Common salt-15 gms",
      "Chillies-15 gms",
      "Coriander leaves-15 gms",
      "Cucumber-200 gms",
      "Onion-60 gms",
      "Peanut-75 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-071",
    "name": "Pineapple & spinach salad",
    "cleanSearchName": "Pineapple & spinach salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 423,
    "calories": 146,
    "proteinGrams": 4,
    "carbsGrams": 25,
    "fatGrams": 4,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.2902,
    "ingredients": "Spinach-150 gms; Common salt-7 gms; Black pepper-7 gms; Pineapple-250 gms; Walnut-9 gms",
    "parsedIngredients": [
      "Spinach-150 gms",
      "Common salt-7 gms",
      "Black pepper-7 gms",
      "Pineapple-250 gms",
      "Walnut-9 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-072",
    "name": "Foxtail Millet Pulao",
    "cleanSearchName": "Foxtail Millet Pulao",
    "associativity": "5",
    "associativityCategory": "Khichdi, Pulao & Biryani",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "4 small bowl",
    "totalWeightGrams": 449,
    "calories": 254,
    "proteinGrams": 8,
    "carbsGrams": 40,
    "fatGrams": 6,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.6015,
    "ingredients": "Capsicum-150 gms; carrot-75 gms; Peas-75 gms; Onion-50 gms; Cumin seeds-15 gms; Common salt-15 gms; Ginger-1 piece; CLOVES-2 gms; Coriander Leaves-15 gms; Millets-200 gm; Tomato  tomato; Chillies-15 gms; Turmeric powder-7 gms; Coriander Powder-15 gms; Cooking oil-15 gms",
    "parsedIngredients": [
      "Capsicum-150 gms",
      "carrot-75 gms",
      "Peas-75 gms",
      "Onion-50 gms",
      "Cumin seeds-15 gms",
      "Common salt-15 gms",
      "Ginger-1 piece",
      "CLOVES-2 gms",
      "Coriander Leaves-15 gms",
      "Millets-200 gm",
      "Tomato  tomato",
      "Chillies-15 gms",
      "Turmeric powder-7 gms",
      "Coriander Powder-15 gms",
      "Cooking oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-073",
    "name": "ALMOND FLOUR ROTI (20% almond flour + 80% wheat flour)",
    "cleanSearchName": "ALMOND FLOUR ROTI",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 107,
    "calories": 385,
    "proteinGrams": 11,
    "carbsGrams": 48,
    "fatGrams": 17,
    "fiberGrams": 12,
    "carbonFootprintKgCO2e": 0.0975,
    "ingredients": "Atta-80 gms; Yoghurt-7 gms; Almond Flour- 20 gms",
    "parsedIngredients": [
      "Atta-80 gms",
      "Yoghurt-7 gms",
      "Almond Flour- 20 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-074",
    "name": "ALMOND FLOUR ROTI (50% almond flour + 50% oats flour)",
    "cleanSearchName": "ALMOND FLOUR ROTI",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 365,
    "calories": 340,
    "proteinGrams": 10,
    "carbsGrams": 33,
    "fatGrams": 20,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.2,
    "ingredients": "Almond Flour-100 gms; Oats-150 gms; Common salt-15 gms, Atta-100 gms",
    "parsedIngredients": [
      "Almond Flour-100 gms",
      "Oats-150 gms",
      "Common salt-15 gms, Atta-100 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-075",
    "name": "ALMOND FLOUR ROTI (100% almond flour)",
    "cleanSearchName": "ALMOND FLOUR ROTI",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 200,
    "calories": 33,
    "proteinGrams": 1,
    "carbsGrams": 1,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.16,
    "ingredients": "ALMOND FLOUR-200 gms",
    "parsedIngredients": [
      "ALMOND FLOUR-200 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-076",
    "name": "ALMOND SOUP (WITH ALMOND MILK)",
    "cleanSearchName": "ALMOND SOUP (WITH ALMOND MILK)",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 350,
    "calories": 328,
    "proteinGrams": 16,
    "carbsGrams": 22,
    "fatGrams": 21,
    "fiberGrams": 10,
    "carbonFootprintKgCO2e": 0.8515,
    "ingredients": "Almond-10 gms; Peas-125 gms; Common salt-15 gms; Almond Milk-200 gms",
    "parsedIngredients": [
      "Almond-10 gms",
      "Peas-125 gms",
      "Common salt-15 gms",
      "Almond Milk-200 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-077",
    "name": "Almond roti (50% almond flour and 50% normal atta)",
    "cleanSearchName": "Almond roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 300,
    "calories": 112,
    "proteinGrams": 4,
    "carbsGrams": 12,
    "fatGrams": 5,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.12,
    "ingredients": "Wheat-150 gms; Almond flour-150 gms",
    "parsedIngredients": [
      "Wheat-150 gms",
      "Almond flour-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-078",
    "name": "Nuts and seeds salad",
    "cleanSearchName": "Nuts and seeds salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 629,
    "calories": 1385,
    "proteinGrams": 40,
    "carbsGrams": 28,
    "fatGrams": 125,
    "fiberGrams": 16,
    "carbonFootprintKgCO2e": 1.69275,
    "ingredients": "Almond-25 gms; Fig-25 gms; PUMPKIN SEED-30 gms; Sunflower seeds-30 gms; Lemon-10 gms; Lettuce leaf-4 gms; Cucumber-200 gms; Common salt-15 gms; Black pepper-15 gms; Walnut-275 gms",
    "parsedIngredients": [
      "Almond-25 gms",
      "Fig-25 gms",
      "PUMPKIN SEED-30 gms",
      "Sunflower seeds-30 gms",
      "Lemon-10 gms",
      "Lettuce leaf-4 gms",
      "Cucumber-200 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Walnut-275 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-079",
    "name": "Coffee with Almond Milk (No Sugar)",
    "cleanSearchName": "Coffee with Almond Milk (No Sugar)",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "caffeine"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 265,
    "calories": 48,
    "proteinGrams": 1,
    "carbsGrams": 2,
    "fatGrams": 3,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 1.1225,
    "ingredients": "Almond Milk-250 gms; coffee-15 gms",
    "parsedIngredients": [
      "Almond Milk-250 gms",
      "coffee-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-080",
    "name": "Almond Flour Roti",
    "cleanSearchName": "Almond Flour Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "5 medium",
    "totalWeightGrams": 522,
    "calories": 149,
    "proteinGrams": 4,
    "carbsGrams": 4,
    "fatGrams": 13,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.4907,
    "ingredients": "Almond flour-500 gms; Common salt-7 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Almond flour-500 gms",
      "Common salt-7 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-081",
    "name": "Cashew Milk",
    "cleanSearchName": "Cashew Milk",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "3 cup",
    "totalWeightGrams": 550,
    "calories": 292,
    "proteinGrams": 9,
    "carbsGrams": 13,
    "fatGrams": 23,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 2.09,
    "ingredients": "Cashew-250 gms; Milk-300 gms",
    "parsedIngredients": [
      "Cashew-250 gms",
      "Milk-300 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-082",
    "name": "Apple Walnut Salad",
    "cleanSearchName": "Apple Walnut Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 177,
    "calories": 338,
    "proteinGrams": 6,
    "carbsGrams": 9,
    "fatGrams": 13,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.0956,
    "ingredients": "Apple-150 g; Pomegranate-20 gms; Lemon-7 gms; Common salt-15 gms; Black Pepper-15 gms; Lettuce Leaf-60 gms; Spinach-60 gms",
    "parsedIngredients": [
      "Apple-150 g",
      "Pomegranate-20 gms",
      "Lemon-7 gms",
      "Common salt-15 gms",
      "Black Pepper-15 gms",
      "Lettuce Leaf-60 gms",
      "Spinach-60 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-083",
    "name": "APPLE STEW",
    "cleanSearchName": "APPLE STEW",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "2 cup",
    "totalWeightGrams": 893,
    "calories": 143,
    "proteinGrams": 1,
    "carbsGrams": 37,
    "fatGrams": 1,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.10248,
    "ingredients": "Apple-800 gms; HONEY-60 gms; Cinnamon-7 gms; NUTMEG-4 gms; Ginger powder-7 gms; Lemon-15 gms",
    "parsedIngredients": [
      "Apple-800 gms",
      "HONEY-60 gms",
      "Cinnamon-7 gms",
      "NUTMEG-4 gms",
      "Ginger powder-7 gms",
      "Lemon-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-084",
    "name": "Mixed fruit salad",
    "cleanSearchName": "Mixed fruit salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 794,
    "calories": 222,
    "proteinGrams": 3,
    "carbsGrams": 48,
    "fatGrams": 1,
    "fiberGrams": 12,
    "carbonFootprintKgCO2e": 0.52525,
    "ingredients": "Apple-200 gms; Pear-178 gms; Banana-101 gms; Grapes-150 gms; Strawberries-75 gms; Blueberries-75 gms; Mint leaves-15 gms",
    "parsedIngredients": [
      "Apple-200 gms",
      "Pear-178 gms",
      "Banana-101 gms",
      "Grapes-150 gms",
      "Strawberries-75 gms",
      "Blueberries-75 gms",
      "Mint leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-085",
    "name": "Chicken Minced Salad",
    "cleanSearchName": "Chicken Minced Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "nut"
    ],
    "serving": "2 medium bowl",
    "totalWeightGrams": 420,
    "calories": 114,
    "proteinGrams": 1,
    "carbsGrams": 9,
    "fatGrams": 8,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.5955,
    "ingredients": "Olive oil-15 gms; Common salt-15 gms; Chicken-20 gms; Onion-160 gms; Tomato-120 gms; Cucumber-25 gms; Chillies-15 gms; Ginger-15 gms; Coriander Powder-5 gms; Garam Masala-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Olive oil-15 gms",
      "Common salt-15 gms",
      "Chicken-20 gms",
      "Onion-160 gms",
      "Tomato-120 gms",
      "Cucumber-25 gms",
      "Chillies-15 gms",
      "Ginger-15 gms",
      "Coriander Powder-5 gms",
      "Garam Masala-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-086",
    "name": "Papaya Shake with Almond Milk",
    "cleanSearchName": "Papaya Shake with Almond Milk",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "2 glass",
    "totalWeightGrams": 850,
    "calories": 78,
    "proteinGrams": 2,
    "carbsGrams": 3,
    "fatGrams": 7,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 2.0475,
    "ingredients": "Papaya-350 gms; Almond Milk-500 gms",
    "parsedIngredients": [
      "Papaya-350 gms",
      "Almond Milk-500 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-087",
    "name": "Broccoli Soup with coconut milk",
    "cleanSearchName": "Broccoli Soup with coconut milk",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 885,
    "calories": 191,
    "proteinGrams": 1,
    "carbsGrams": 14,
    "fatGrams": 15,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.1905,
    "ingredients": "Broccoli-400 gms; Coconut milk-250 gms, Olive oil-15 gms; Onion-125 gms;Garlic-5 gms; POTATO-90 gms",
    "parsedIngredients": [
      "Broccoli-400 gms",
      "Coconut milk-250 gms, Olive oil-15 gms",
      "Onion-125 gms",
      "Garlic-5 gms",
      "POTATO-90 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-088",
    "name": "Apple Walnut Salad 2",
    "cleanSearchName": "Apple Walnut Salad 2",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "2 medium bowl",
    "totalWeightGrams": 228,
    "calories": 375,
    "proteinGrams": 5,
    "carbsGrams": 12,
    "fatGrams": 35,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.1492,
    "ingredients": "Apple-200 gms; Walnut-11 gms; Olive oil-15 gms; HONEY-1 gms; Black pepper-1 gms",
    "parsedIngredients": [
      "Apple-200 gms",
      "Walnut-11 gms",
      "Olive oil-15 gms",
      "HONEY-1 gms",
      "Black pepper-1 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-089",
    "name": "Roated Chickpeas",
    "cleanSearchName": "Roated Chickpeas",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 225,
    "calories": 281,
    "proteinGrams": 17,
    "carbsGrams": 39,
    "fatGrams": 5,
    "fiberGrams": 25,
    "carbonFootprintKgCO2e": 0.324,
    "ingredients": "Chickpeas-150 gms; Cumin Powder-15 gms; Paprika powder-15 gms; Garlic Powder-15 gms; Common salt-15 gms; Black pepper-15 gms",
    "parsedIngredients": [
      "Chickpeas-150 gms",
      "Cumin Powder-15 gms",
      "Paprika powder-15 gms",
      "Garlic Powder-15 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-090",
    "name": "Safed Matar with no oil",
    "cleanSearchName": "Safed Matar with no oil",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "4 cup",
    "totalWeightGrams": 592,
    "calories": 179,
    "proteinGrams": 10,
    "carbsGrams": 33,
    "fatGrams": 0,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.6175,
    "ingredients": "Peas-250 gms; Tomato-120 gms; Chillies-15 gms; Cumin seeds-15 gms; Coriander Powder-5 gms; Turmeric powder-7 gms; Garam Masala-15 gms; Coriander leaves-5 gms;Onion-160 gms",
    "parsedIngredients": [
      "Peas-250 gms",
      "Tomato-120 gms",
      "Chillies-15 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-5 gms",
      "Turmeric powder-7 gms",
      "Garam Masala-15 gms",
      "Coriander leaves-5 gms",
      "Onion-160 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-091",
    "name": "Safed Matar Masala (No Oil)",
    "cleanSearchName": "Safed Matar Masala",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "2 medium katori",
    "totalWeightGrams": 360,
    "calories": 33,
    "proteinGrams": 1,
    "carbsGrams": 6,
    "fatGrams": 0,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.5735,
    "ingredients": "Onion-125 gms; Tomato-90 gms; Chillies-15 gms; Cumin seeds-15 gms; Coriander Powder-55 gms; Turmeric powder-15 gms; Garam Masala-15 gms; Common salt-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Onion-125 gms",
      "Tomato-90 gms",
      "Chillies-15 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-55 gms",
      "Turmeric powder-15 gms",
      "Garam Masala-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-092",
    "name": "Coffee with Almond Milk",
    "cleanSearchName": "Coffee with Almond Milk",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "nut",
      "caffeine"
    ],
    "serving": "2 glass",
    "totalWeightGrams": 512,
    "calories": 20,
    "proteinGrams": 1,
    "carbsGrams": 4,
    "fatGrams": 1,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.91,
    "ingredients": "Almond Milk-250 gms; Brewed Coffee-240 gms; Cinnamon-7 gms; HONEY-15 gms",
    "parsedIngredients": [
      "Almond Milk-250 gms",
      "Brewed Coffee-240 gms",
      "Cinnamon-7 gms",
      "HONEY-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-093",
    "name": "Almonds and Walnut Raita",
    "cleanSearchName": "Almonds and Walnut Raita",
    "associativity": "4",
    "associativityCategory": "Raitas & Yoghurt Accompaniments",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 310,
    "calories": 351,
    "proteinGrams": 13,
    "carbsGrams": 11,
    "fatGrams": 29,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.8335,
    "ingredients": "Almond-15 gms; WALNUT-15 gms; Yoghurt-250 gms; Coriander leaves-15 gms;  Black pepper-15 gms",
    "parsedIngredients": [
      "Almond-15 gms",
      "WALNUT-15 gms",
      "Yoghurt-250 gms",
      "Coriander leaves-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-094",
    "name": "Suji Halwa",
    "cleanSearchName": "Suji Halwa",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "nut"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 95,
    "calories": 365,
    "proteinGrams": 6,
    "carbsGrams": 85,
    "fatGrams": 1,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.1275,
    "ingredients": "Semolina-75 gms; JAGGERY-0.5 gms; CARDAMOM-15 gms",
    "parsedIngredients": [
      "Semolina-75 gms",
      "JAGGERY-0.5 gms",
      "CARDAMOM-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-095",
    "name": "Baked sweet potatoes",
    "cleanSearchName": "Baked sweet potatoes",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 267,
    "calories": 574,
    "proteinGrams": 4,
    "carbsGrams": 75,
    "fatGrams": 27,
    "fiberGrams": 13,
    "carbonFootprintKgCO2e": 0.542,
    "ingredients": "Sweet potato-200 gms ; Black pepper-7 gms; Olive oil-15 gms;Parsley-15 gms; Butter-15 gms; Garlic Powder-15 gms",
    "parsedIngredients": [
      "Sweet potato-200 gms",
      "Black pepper-7 gms",
      "Olive oil-15 gms",
      "Parsley-15 gms",
      "Butter-15 gms",
      "Garlic Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-096",
    "name": "Bajra Cheela",
    "cleanSearchName": "Bajra Cheela",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 medium",
    "totalWeightGrams": 340,
    "calories": 113,
    "proteinGrams": 3,
    "carbsGrams": 17,
    "fatGrams": 4,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.17875,
    "ingredients": "carrot-50 gms; Coriander leaves-15 gms; Chillies-10 gms; Mustard oil-15 gms; Common salt-15 gms;Onion-160 gms; Bajra flour-75 gms",
    "parsedIngredients": [
      "carrot-50 gms",
      "Coriander leaves-15 gms",
      "Chillies-10 gms",
      "Mustard oil-15 gms",
      "Common salt-15 gms",
      "Onion-160 gms",
      "Bajra flour-75 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-097",
    "name": "Rice idli",
    "cleanSearchName": "Rice idli",
    "associativity": "14",
    "associativityCategory": "South Indian Dosas, Idlis & Uttapams",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "5 number",
    "totalWeightGrams": 158,
    "calories": 66,
    "proteinGrams": 2,
    "carbsGrams": 13,
    "fatGrams": 0,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.38225,
    "ingredients": "Rice-75 gms; Fenugreek seeds-4 gms; Rice bran oil-4 gms; Urad Dal Flour-75 gms",
    "parsedIngredients": [
      "Rice-75 gms",
      "Fenugreek seeds-4 gms",
      "Rice bran oil-4 gms",
      "Urad Dal Flour-75 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-098",
    "name": "Non Veg Cutlet",
    "cleanSearchName": "Non Veg Cutlet",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 number",
    "totalWeightGrams": 579,
    "calories": 233,
    "proteinGrams": 19,
    "carbsGrams": 12,
    "fatGrams": 11,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 2.172,
    "ingredients": "Potato-100 gms; Onion-50 gms;Garlic-15 gms; Ginger-15 gms; Chillies-15 gms; Turmeric powder-4 gms; Coriander leaves-15 gms; Sunflower oil-15 gms; Chicken-300 gms ; Garam Masala-15 gms; Cumin seeds-15 gms; Coriander Powder-5 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Potato-100 gms",
      "Onion-50 gms",
      "Garlic-15 gms",
      "Ginger-15 gms",
      "Chillies-15 gms",
      "Turmeric powder-4 gms",
      "Coriander leaves-15 gms",
      "Sunflower oil-15 gms",
      "Chicken-300 gms",
      "Garam Masala-15 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-5 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-099",
    "name": "Quinoa Upma",
    "cleanSearchName": "Quinoa Upma",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 medium bowl",
    "totalWeightGrams": 422,
    "calories": 345,
    "proteinGrams": 13,
    "carbsGrams": 43,
    "fatGrams": 13,
    "fiberGrams": 15,
    "carbonFootprintKgCO2e": 0.4957,
    "ingredients": "Quinoa-125 gms; Mustard oil-15 gms; Cumin seeds-15 gms; Onion-62 gms; carrot-62 gms; Peas-62 gms; Capsicum-62 gms; Turmeric powder-4 gms;  Coriander leaves-15 gms",
    "parsedIngredients": [
      "Quinoa-125 gms",
      "Mustard oil-15 gms",
      "Cumin seeds-15 gms",
      "Onion-62 gms",
      "carrot-62 gms",
      "Peas-62 gms",
      "Capsicum-62 gms",
      "Turmeric powder-4 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-100",
    "name": "Barley (Jaw) Water",
    "cleanSearchName": "Barley (Jaw) Water",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 15,
    "calories": 16,
    "proteinGrams": 1,
    "carbsGrams": 3,
    "fatGrams": 0,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.0165,
    "ingredients": "Barley-15 gms",
    "parsedIngredients": [
      "Barley-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-101",
    "name": "kari-Patta Saunf Ajawain Water",
    "cleanSearchName": "kari-Patta Saunf Ajawain Water",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 17,
    "calories": 11,
    "proteinGrams": 0,
    "carbsGrams": 1,
    "fatGrams": 1,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.0145,
    "ingredients": "Curry leaves-2 gms; Ajwain-15 gms",
    "parsedIngredients": [
      "Curry leaves-2 gms",
      "Ajwain-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-102",
    "name": "Apple Shake",
    "cleanSearchName": "Apple Shake",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 354,
    "calories": 116,
    "proteinGrams": 5,
    "carbsGrams": 22,
    "fatGrams": 0,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.014,
    "ingredients": "Apple-100 gms Milk-250 gms; Cinnamon-4 gms",
    "parsedIngredients": [
      "Apple-100 gms Milk-250 gms",
      "Cinnamon-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-103",
    "name": "Non Vegetarian Tacos",
    "cleanSearchName": "Non Vegetarian Tacos",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 medium",
    "totalWeightGrams": 406,
    "calories": 293,
    "proteinGrams": 14,
    "carbsGrams": 25,
    "fatGrams": 13,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.87865,
    "ingredients": "Chicken-80 gms; Onion-15 gms; Tomato-120 gms; Lettuce Leaf-15 gms; Coriander leaves-15 gms; Lemon-15 gms; Cooking oil-15 gms; Garlic-7 gms; Atta-120 gms; Chillies-4 gms",
    "parsedIngredients": [
      "Chicken-80 gms",
      "Onion-15 gms",
      "Tomato-120 gms",
      "Lettuce Leaf-15 gms",
      "Coriander leaves-15 gms",
      "Lemon-15 gms",
      "Cooking oil-15 gms",
      "Garlic-7 gms",
      "Atta-120 gms",
      "Chillies-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-104",
    "name": "Baked Potato",
    "cleanSearchName": "Baked Potato",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 medium",
    "totalWeightGrams": 345,
    "calories": 141,
    "proteinGrams": 3,
    "carbsGrams": 27,
    "fatGrams": 2,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.2185,
    "ingredients": "Potato-300 gms; Coriander leaves-15 gms; Cumin seeds-4 gms; Coriander seeds-4 gms; Olive oil-7 gms; Red chilli Powder-15 gms",
    "parsedIngredients": [
      "Potato-300 gms",
      "Coriander leaves-15 gms",
      "Cumin seeds-4 gms",
      "Coriander seeds-4 gms",
      "Olive oil-7 gms",
      "Red chilli Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-105",
    "name": "Chick Pea Salad",
    "cleanSearchName": "Chick Pea Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small katori",
    "totalWeightGrams": 463,
    "calories": 196,
    "proteinGrams": 8,
    "carbsGrams": 18,
    "fatGrams": 10,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.26225,
    "ingredients": "Chickpeas-15 gms;Cucumber-200 gms; Black pepper-15 gms; Onion-150 gms; Parsley-15 gms;Mint leaves-15 gms; Olive oil-7 gms; Lemon-15 gms;Garlic-15 gms; Common salt-15 gms; Black pepper-1 gms",
    "parsedIngredients": [
      "Chickpeas-15 gms",
      "Cucumber-200 gms",
      "Black pepper-15 gms",
      "Onion-150 gms",
      "Parsley-15 gms",
      "Mint leaves-15 gms",
      "Olive oil-7 gms",
      "Lemon-15 gms",
      "Garlic-15 gms",
      "Common salt-15 gms",
      "Black pepper-1 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-106",
    "name": "Jaw cheela",
    "cleanSearchName": "Jaw cheela",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 303,
    "calories": 184,
    "proteinGrams": 5,
    "carbsGrams": 31,
    "fatGrams": 4,
    "fiberGrams": 10,
    "carbonFootprintKgCO2e": 0.3138,
    "ingredients": "Barley-45 gms; Chillies-7 gms; CORIANDER leaves-7 gms; Common salt-7 gms; Mustard oil-7 gms; Onion-125 gms; TOMATO-90 gms ; Red chilli Powder-15 gms;",
    "parsedIngredients": [
      "Barley-45 gms",
      "Chillies-7 gms",
      "CORIANDER leaves-7 gms",
      "Common salt-7 gms",
      "Mustard oil-7 gms",
      "Onion-125 gms",
      "TOMATO-90 gms",
      "Red chilli Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-107",
    "name": "Lettuce wrap (tofu)",
    "cleanSearchName": "Lettuce wrap Tofu",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 304,
    "calories": 183,
    "proteinGrams": 2,
    "carbsGrams": 15,
    "fatGrams": 5,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.2258,
    "ingredients": "Lettuce Leaf-20 gms; Onion-60 gms; carrot-60 gms; Cucumber-60 gms; Tomato-60 gms; CORIANDER LEAVES-15 gms; Lemon-7 gms; Black pepper-7 gms; Mustard oil-15 gms; Tofu-50 g",
    "parsedIngredients": [
      "Lettuce Leaf-20 gms",
      "Onion-60 gms",
      "carrot-60 gms",
      "Cucumber-60 gms",
      "Tomato-60 gms",
      "CORIANDER LEAVES-15 gms",
      "Lemon-7 gms",
      "Black pepper-7 gms",
      "Mustard oil-15 gms",
      "Tofu-50 g"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-108",
    "name": "Oats Roastie",
    "cleanSearchName": "Oats Roastie",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 gms",
    "totalWeightGrams": 372,
    "calories": 492,
    "proteinGrams": 17,
    "carbsGrams": 77,
    "fatGrams": 12,
    "fiberGrams": 14,
    "carbonFootprintKgCO2e": 0.3095,
    "ingredients": "Onion-125 gms; carrot-15 gms; Zucchini-15 gms; Potato-15 gms; Common salt-15 gms; Black pepper-7 gms; Cooking oil-15 gms; Oats-150 gms; Red chilli Powder-15 gms",
    "parsedIngredients": [
      "Onion-125 gms",
      "carrot-15 gms",
      "Zucchini-15 gms",
      "Potato-15 gms",
      "Common salt-15 gms",
      "Black pepper-7 gms",
      "Cooking oil-15 gms",
      "Oats-150 gms",
      "Red chilli Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-109",
    "name": "Veg entree (Roasted)",
    "cleanSearchName": "Veg entree (Roasted)",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 736,
    "calories": 222,
    "proteinGrams": 3,
    "carbsGrams": 13,
    "fatGrams": 15,
    "fiberGrams": 8,
    "carbonFootprintKgCO2e": 0.9979,
    "ingredients": "Garlic-10 gms; Common salt-15 gms; Capsicum-450 gms; Black pepper-7 gms; Onion-125 gms; Brinjal-82 gms; Mushroom-32 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Garlic-10 gms",
      "Common salt-15 gms",
      "Capsicum-450 gms",
      "Black pepper-7 gms",
      "Onion-125 gms",
      "Brinjal-82 gms",
      "Mushroom-32 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-110",
    "name": "Chatpate Kale Masoor",
    "cleanSearchName": "Chatpate Kale Masoor",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 635,
    "calories": 366,
    "proteinGrams": 2,
    "carbsGrams": 20,
    "fatGrams": 31,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.7135,
    "ingredients": "Ginger-15 gms; Cumin seeds-15 gms; Coriander leaves-15 gms; Common salt-15 gms; Dal dal-250 gms; Olive oil-30 gms;Onion-125 gms;Chillies-15 gms; Garlic powder-15 gms; Turmeric powder-15 gms; Coriander Powder-5 gms; Garam Masala-15 gms; Red chilli Powder-15 gms; Tomato-90 gms",
    "parsedIngredients": [
      "Ginger-15 gms",
      "Cumin seeds-15 gms",
      "Coriander leaves-15 gms",
      "Common salt-15 gms",
      "Dal dal-250 gms",
      "Olive oil-30 gms",
      "Onion-125 gms",
      "Chillies-15 gms",
      "Garlic powder-15 gms",
      "Turmeric powder-15 gms",
      "Coriander Powder-5 gms",
      "Garam Masala-15 gms",
      "Red chilli Powder-15 gms",
      "Tomato-90 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-111",
    "name": "Veg tacos",
    "cleanSearchName": "Veg tacos",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 480,
    "calories": 322,
    "proteinGrams": 18,
    "carbsGrams": 23,
    "fatGrams": 15,
    "fiberGrams": 10,
    "carbonFootprintKgCO2e": 0.9848,
    "ingredients": "carrot-62 gms; Peas-62 gms; Onion-60 gms; Tomato-30 gms; Capsicum-50 gms; Paneer-62 gms; Cumin seeds-7 gms; Turmeric powder-4 gms; Chillies-7 gms; Sunflower oil-15 gms; Common salt-7 gms; Coriander leaves-15 gms; Cabbage-62 gms;Yoghurt-30 gms; Lemon-7 gms",
    "parsedIngredients": [
      "carrot-62 gms",
      "Peas-62 gms",
      "Onion-60 gms",
      "Tomato-30 gms",
      "Capsicum-50 gms",
      "Paneer-62 gms",
      "Cumin seeds-7 gms",
      "Turmeric powder-4 gms",
      "Chillies-7 gms",
      "Sunflower oil-15 gms",
      "Common salt-7 gms",
      "Coriander leaves-15 gms",
      "Cabbage-62 gms",
      "Yoghurt-30 gms",
      "Lemon-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-112",
    "name": "Dal Cheela Wrap",
    "cleanSearchName": "Dal Cheela Wrap",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "West",
      "East"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 356,
    "calories": 471,
    "proteinGrams": 29,
    "carbsGrams": 68,
    "fatGrams": 7,
    "fiberGrams": 13,
    "carbonFootprintKgCO2e": 0.43175,
    "ingredients": "Gram dal-125 gms; Onion-15 gms; Tomato-120 gms; Capsicum-30 gms; Ginger-15 gms; Cumin seeds-7 gms; Turmeric powder-4 gms; Common salt-15 gms; Rice bran oil-15 gms; Lettuce Leaf-10 gms",
    "parsedIngredients": [
      "Gram dal-125 gms",
      "Onion-15 gms",
      "Tomato-120 gms",
      "Capsicum-30 gms",
      "Ginger-15 gms",
      "Cumin seeds-7 gms",
      "Turmeric powder-4 gms",
      "Common salt-15 gms",
      "Rice bran oil-15 gms",
      "Lettuce Leaf-10 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-113",
    "name": "Chicken Lollipop",
    "cleanSearchName": "Chicken Lollipop",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 medium",
    "totalWeightGrams": 700,
    "calories": 673,
    "proteinGrams": 50,
    "carbsGrams": 21,
    "fatGrams": 42,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 2.7315,
    "ingredients": "Ginger-30 gms; Red chilli Powder-30 gms; Black pepper-15 gms; Cumin seeds-15 gms; Coriander Powder-15 gms; Garam Masala-15 gms; Common salt-15 gms; Rice Flour-30 gms; Egg-490 gms; Cooking oil-15 gms; Chicken-150 g; Corn Flour-30 gms",
    "parsedIngredients": [
      "Ginger-30 gms",
      "Red chilli Powder-30 gms",
      "Black pepper-15 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-15 gms",
      "Garam Masala-15 gms",
      "Common salt-15 gms",
      "Rice Flour-30 gms",
      "Egg-490 gms",
      "Cooking oil-15 gms",
      "Chicken-150 g",
      "Corn Flour-30 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-114",
    "name": "Jeera Aloo",
    "cleanSearchName": "Jeera Aloo",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 medium katori",
    "totalWeightGrams": 585,
    "calories": 81,
    "proteinGrams": 1,
    "carbsGrams": 1,
    "fatGrams": 8,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.489,
    "ingredients": "POTATO-480 gms; Cumin seeds-15 gms; Turmeric powder-15 gms; Common salt-15 gms; Coriander leaves-15 gms; Olive oil-30 gms; Red chilli Powder-15 gms",
    "parsedIngredients": [
      "POTATO-480 gms",
      "Cumin seeds-15 gms",
      "Turmeric powder-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-15 gms",
      "Olive oil-30 gms",
      "Red chilli Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-115",
    "name": "CHICKEN DUMPLING (Non Veg)",
    "cleanSearchName": "CHICKEN DUMPLING",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "East"
    ],
    "mealTypes": [
      "Snacks",
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 medium",
    "totalWeightGrams": 506,
    "calories": 232,
    "proteinGrams": 22,
    "carbsGrams": 4,
    "fatGrams": 14,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 1.8167,
    "ingredients": "Common salt-15 gms; Chicken-250 gms;Onion-160 gms;Garlic-1 gms; Turmeric powder-15 gms; Coriander Powder-5 gms; Garam Masala-15 gms; Cumin seeds-15 gms; Cooking oil-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Common salt-15 gms",
      "Chicken-250 gms",
      "Onion-160 gms",
      "Garlic-1 gms",
      "Turmeric powder-15 gms",
      "Coriander Powder-5 gms",
      "Garam Masala-15 gms",
      "Cumin seeds-15 gms",
      "Cooking oil-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-116",
    "name": "Tomato rice (Brown Rice)",
    "cleanSearchName": "Tomato rice (Brown Rice)",
    "associativity": "5",
    "associativityCategory": "Khichdi, Pulao & Biryani",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 527,
    "calories": 566,
    "proteinGrams": 14,
    "carbsGrams": 105,
    "fatGrams": 7,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 1.3474,
    "ingredients": "Rice-250 gms; TOMATO-90 gms; Onion-125 gms ;  Turmeric powder-4 gms; Cumin seeds-7 gms; Mustard seeds-7 gms; FENUGREEK SEEDS-7 gms; Curry leaves-3 number; Cooking oil-15 gms; Common salt-7 gms; Red chilli Powder-15 gms",
    "parsedIngredients": [
      "Rice-250 gms",
      "TOMATO-90 gms",
      "Onion-125 gms",
      "Turmeric powder-4 gms",
      "Cumin seeds-7 gms",
      "Mustard seeds-7 gms",
      "FENUGREEK SEEDS-7 gms",
      "Curry leaves-3 number",
      "Cooking oil-15 gms",
      "Common salt-7 gms",
      "Red chilli Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-117",
    "name": "Tomato, Beetroot, Amla & Pudina Juice",
    "cleanSearchName": "Tomato, Beetroot, Amla & Pudina Juice",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 184,
    "calories": 111,
    "proteinGrams": 3,
    "carbsGrams": 16,
    "fatGrams": 2,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.1856,
    "ingredients": "TOMATO-90 gms; Beet root-50 gms; Amla-10 gms;Mint leaves-4 gms; Common salt-15 gms; ; Cumin seeds-15 gms",
    "parsedIngredients": [
      "TOMATO-90 gms",
      "Beet root-50 gms",
      "Amla-10 gms",
      "Mint leaves-4 gms",
      "Common salt-15 gms",
      "Cumin seeds-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-118",
    "name": "Lemon Rice",
    "cleanSearchName": "Lemon Rice",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 304,
    "calories": 927,
    "proteinGrams": 22,
    "carbsGrams": 184,
    "fatGrams": 9,
    "fiberGrams": 12,
    "carbonFootprintKgCO2e": 1.0851,
    "ingredients": "Rice-250 gms; Mustard oil-15 gms; Mustard seeds-4 gms; Cumin seeds-4 gms; Turmeric powder-4 gms; Lemon-15 gms; Common salt-7 gms; Curry leaves-5 gms",
    "parsedIngredients": [
      "Rice-250 gms",
      "Mustard oil-15 gms",
      "Mustard seeds-4 gms",
      "Cumin seeds-4 gms",
      "Turmeric powder-4 gms",
      "Lemon-15 gms",
      "Common salt-7 gms",
      "Curry leaves-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-119",
    "name": "Chicken Korma",
    "cleanSearchName": "Chicken Korma",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 medium katori",
    "totalWeightGrams": 549,
    "calories": 171,
    "proteinGrams": 11,
    "carbsGrams": 9,
    "fatGrams": 11,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 1.2514,
    "ingredients": "Chicken-100 gms; Ginger-7 gms;Garlic-7 gms; Cumin seeds-15 gms; Coriander leaves-15 gms; Common salt-15 gms; Cooking oil-30 gms; Yoghurt-15 gms;Onion-160 gms; Tomato-140 gms; Cinnamon-15 gms; Turmeric powder-15 gms; Garam Masala-15 gms",
    "parsedIngredients": [
      "Chicken-100 gms",
      "Ginger-7 gms",
      "Garlic-7 gms",
      "Cumin seeds-15 gms",
      "Coriander leaves-15 gms",
      "Common salt-15 gms",
      "Cooking oil-30 gms",
      "Yoghurt-15 gms",
      "Onion-160 gms",
      "Tomato-140 gms",
      "Cinnamon-15 gms",
      "Turmeric powder-15 gms",
      "Garam Masala-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-120",
    "name": "Chicken with Staraniseed",
    "cleanSearchName": "Chicken with Staraniseed",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 479,
    "calories": 529,
    "proteinGrams": 41,
    "carbsGrams": 63,
    "fatGrams": 10,
    "fiberGrams": 19,
    "carbonFootprintKgCO2e": 1.174,
    "ingredients": "Chicken-100 gms;Garlic-250 gms; Ginger-125 gms; Cinnamon-4 gms;",
    "parsedIngredients": [
      "Chicken-100 gms",
      "Garlic-250 gms",
      "Ginger-125 gms",
      "Cinnamon-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-121",
    "name": "Quinoa",
    "cleanSearchName": "Quinoa",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 medium katori",
    "totalWeightGrams": 995,
    "calories": 239,
    "proteinGrams": 8,
    "carbsGrams": 34,
    "fatGrams": 7,
    "fiberGrams": 10,
    "carbonFootprintKgCO2e": 1.271,
    "ingredients": "Quinoa-250 gms; Cooking oil-15 gms; Cumin seeds-15 gms;Onion-125 gms; capsicum-250 gms; carrot-250 gms; Ginger-15 gms; Garlic powder-15 gms; Coriander Powder-15 gms; Turmeric powder-15 gms; Red chilli Powder-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Quinoa-250 gms",
      "Cooking oil-15 gms",
      "Cumin seeds-15 gms",
      "Onion-125 gms",
      "capsicum-250 gms",
      "carrot-250 gms",
      "Ginger-15 gms",
      "Garlic powder-15 gms",
      "Coriander Powder-15 gms",
      "Turmeric powder-15 gms",
      "Red chilli Powder-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-122",
    "name": "Nutri Rice (Soyabean)",
    "cleanSearchName": "Nutri Rice (Soyabean)",
    "associativity": "3",
    "associativityCategory": "Rice & Millet Dishes",
    "region": [
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 1066,
    "calories": 1264,
    "proteinGrams": 64,
    "carbsGrams": 202,
    "fatGrams": 18,
    "fiberGrams": 38,
    "carbonFootprintKgCO2e": 1.2576,
    "ingredients": "Soyabean-62 gms; Rice-125 gms; carrot-125 gms; Peas-125 gms;Garlic-250 gms; Sunflower oil-4 gms;  ONION -250 gms; Capsicum-125 gms",
    "parsedIngredients": [
      "Soyabean-62 gms",
      "Rice-125 gms",
      "carrot-125 gms",
      "Peas-125 gms",
      "Garlic-250 gms",
      "Sunflower oil-4 gms",
      "ONION -250 gms",
      "Capsicum-125 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-123",
    "name": "Dhaniya Ajwain Water",
    "cleanSearchName": "Dhaniya Ajwain Water",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 glass",
    "totalWeightGrams": 31,
    "calories": 12,
    "proteinGrams": 1,
    "carbsGrams": 1,
    "fatGrams": 1,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.0461,
    "ingredients": "Coriander seeds-7 gms; Ajwain-24 gms",
    "parsedIngredients": [
      "Coriander seeds-7 gms",
      "Ajwain-24 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-124",
    "name": "Dhaniya Water",
    "cleanSearchName": "Dhaniya Water",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 15,
    "calories": 13,
    "proteinGrams": 1,
    "carbsGrams": 1,
    "fatGrams": 1,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.0525,
    "ingredients": "Coriander seeds-15 gms",
    "parsedIngredients": [
      "Coriander seeds-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-125",
    "name": "Detox Water",
    "cleanSearchName": "Detox Water",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 107,
    "calories": 18,
    "proteinGrams": 0,
    "carbsGrams": 2,
    "fatGrams": 0,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.0397,
    "ingredients": "Bottle gourd-50 gms; Cucumber-40 gms; Ginger-5 gms;Mint leaves-5 gms ; Common salt-7 gms",
    "parsedIngredients": [
      "Bottle gourd-50 gms",
      "Cucumber-40 gms",
      "Ginger-5 gms",
      "Mint leaves-5 gms",
      "Common salt-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-126",
    "name": "Baked Chicken",
    "cleanSearchName": "Baked Chicken",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "3 number",
    "totalWeightGrams": 129,
    "calories": 81,
    "proteinGrams": 7,
    "carbsGrams": 0,
    "fatGrams": 6,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.6744,
    "ingredients": "Chicken-100 gms;Parsley-7 gms; Kali Mirch Powder-4 gms; Cooking Oil-7 gms; red chilli flakes-4 gms; Common salt-7 gms",
    "parsedIngredients": [
      "Chicken-100 gms",
      "Parsley-7 gms",
      "Kali Mirch Powder-4 gms",
      "Cooking Oil-7 gms",
      "red chilli flakes-4 gms",
      "Common salt-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-127",
    "name": "BBQ Chicken",
    "cleanSearchName": "BBQ Chicken",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 number",
    "totalWeightGrams": 136,
    "calories": 248,
    "proteinGrams": 22,
    "carbsGrams": 1,
    "fatGrams": 17,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.6828,
    "ingredients": "Chicken-100 gms;Parsley-7 gms; red chilli flakes-4 gms; Kali Mirch Powder-4 gms; Garlic-7 gms; Common salt-7 gms; Cooking Oil-7 gms",
    "parsedIngredients": [
      "Chicken-100 gms",
      "Parsley-7 gms",
      "red chilli flakes-4 gms",
      "Kali Mirch Powder-4 gms",
      "Garlic-7 gms",
      "Common salt-7 gms",
      "Cooking Oil-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-128",
    "name": "Carrot Beetroot Pudina Amla Juice",
    "cleanSearchName": "Carrot Beetroot Pudina Amla Juice",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 246,
    "calories": 92,
    "proteinGrams": 3,
    "carbsGrams": 16,
    "fatGrams": 1,
    "fiberGrams": 11,
    "carbonFootprintKgCO2e": 0.0784,
    "ingredients": "carrot-180 gms; Beet root-50 gms; Amla-10 gms; Mint leaves-6 gms",
    "parsedIngredients": [
      "carrot-180 gms",
      "Beet root-50 gms",
      "Amla-10 gms",
      "Mint leaves-6 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-129",
    "name": "TABBOULEH",
    "cleanSearchName": "TABBOULEH",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 304,
    "calories": 350,
    "proteinGrams": 7,
    "carbsGrams": 39,
    "fatGrams": 16,
    "fiberGrams": 10,
    "carbonFootprintKgCO2e": 0.3609,
    "ingredients": "Wheat-45 gms;Parsley-20 gms;Mint leaves-10 gms; Cucumber-40 gms; Tomato-120 gms; Onion-20 gms; Lemon-15 gms; Common salt-4 gms; Olive oil-15 gms; Black pepper-15 gms",
    "parsedIngredients": [
      "Wheat-45 gms",
      "Parsley-20 gms",
      "Mint leaves-10 gms",
      "Cucumber-40 gms",
      "Tomato-120 gms",
      "Onion-20 gms",
      "Lemon-15 gms",
      "Common salt-4 gms",
      "Olive oil-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-130",
    "name": "Lauki Cucumber Amla Lemon Juice",
    "cleanSearchName": "Lauki Cucumber Amla Lemon Juice",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 258,
    "calories": 55,
    "proteinGrams": 2,
    "carbsGrams": 8,
    "fatGrams": 0,
    "fiberGrams": 8,
    "carbonFootprintKgCO2e": 0.0762,
    "ingredients": "Bottle gourd-50 gms; Cucumber-200 gms; Amla-2.5 gms;Mint leaves-3 gms;",
    "parsedIngredients": [
      "Bottle gourd-50 gms",
      "Cucumber-200 gms",
      "Amla-2.5 gms",
      "Mint leaves-3 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-131",
    "name": "Jowar Roti (100%)",
    "cleanSearchName": "Jowar Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 350,
    "calories": 334,
    "proteinGrams": 10,
    "carbsGrams": 68,
    "fatGrams": 2,
    "fiberGrams": 10,
    "carbonFootprintKgCO2e": 0.2625,
    "ingredients": "Jowar Atta-350 gms",
    "parsedIngredients": [
      "Jowar Atta-350 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-132",
    "name": "Jowar Roti (50% Jawar 50% Wheat atta)",
    "cleanSearchName": "Jowar Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "6 medium",
    "totalWeightGrams": 315,
    "calories": 65,
    "proteinGrams": 2,
    "carbsGrams": 13,
    "fatGrams": 0,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.264,
    "ingredients": "Jowar Atta-150 gms; Atta-150 gms; Common salt-15 gms;",
    "parsedIngredients": [
      "Jowar Atta-150 gms",
      "Atta-150 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-133",
    "name": "Veg Kebab",
    "cleanSearchName": "Veg Kebab",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 number",
    "totalWeightGrams": 1010,
    "calories": 440,
    "proteinGrams": 19,
    "carbsGrams": 74,
    "fatGrams": 7,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.8625,
    "ingredients": "Common salt-15 gms; carrot-150 gms;Beans-150 gms; POTATO-150 gms; Peas-150 gms; Gram dal-150 gms;Onion-125 gms; Garlic powder-15 gms; Ginger powder-15 gms; Cumin seeds-15 gms; Coriander Powder-15 gms; Garam Masala-15 gms;Bread-15 gms; Corn Flour-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Common salt-15 gms",
      "carrot-150 gms",
      "Beans-150 gms",
      "POTATO-150 gms",
      "Peas-150 gms",
      "Gram dal-150 gms",
      "Onion-125 gms",
      "Garlic powder-15 gms",
      "Ginger powder-15 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-15 gms",
      "Garam Masala-15 gms",
      "Bread-15 gms",
      "Corn Flour-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-134",
    "name": "Egg Wrap",
    "cleanSearchName": "Egg Wrap",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "category": "Eggetarian",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 number",
    "totalWeightGrams": 386,
    "calories": 389,
    "proteinGrams": 15,
    "carbsGrams": 14,
    "fatGrams": 30,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 1.1329,
    "ingredients": "Onion-15 gms; Common salt-7 gms; EGG-120 gms; Milk-15 gms; Cooking oil-15 gms; Black Pepper-7 gms; MUSHROOM-150 gms;Capsicum-7 gms; Roti-50 gms",
    "parsedIngredients": [
      "Onion-15 gms",
      "Common salt-7 gms",
      "EGG-120 gms",
      "Milk-15 gms",
      "Cooking oil-15 gms",
      "Black Pepper-7 gms",
      "MUSHROOM-150 gms",
      "Capsicum-7 gms",
      "Roti-50 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-135",
    "name": "Falafel",
    "cleanSearchName": "Falafel",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 113,
    "calories": 185,
    "proteinGrams": 2,
    "carbsGrams": 7,
    "fatGrams": 16,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.217,
    "ingredients": "Onion-15 gms; Garlic-20 gms; Chillies-4 gms; CORIANDER LEAVES-15 gms;Mint leaves-7 gms; Cooking oil-15 gms; Common salt-7 gms; Cumin seeds-15 gms; Garam Masala-15 gms",
    "parsedIngredients": [
      "Onion-15 gms",
      "Garlic-20 gms",
      "Chillies-4 gms",
      "CORIANDER LEAVES-15 gms",
      "Mint leaves-7 gms",
      "Cooking oil-15 gms",
      "Common salt-7 gms",
      "Cumin seeds-15 gms",
      "Garam Masala-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-136",
    "name": "Brown Rice",
    "cleanSearchName": "Brown Rice",
    "associativity": "3",
    "associativityCategory": "Rice & Millet Dishes",
    "region": [
      "North",
      "South"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 small bowl",
    "totalWeightGrams": 132,
    "calories": 89,
    "proteinGrams": 2,
    "carbsGrams": 19,
    "fatGrams": 0,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.5007,
    "ingredients": "Rice-125 gms; Common salt-7 gms;",
    "parsedIngredients": [
      "Rice-125 gms",
      "Common salt-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-137",
    "name": "Boiled rice",
    "cleanSearchName": "Boiled rice",
    "associativity": "3",
    "associativityCategory": "Rice & Millet Dishes",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "3 medium katori",
    "totalWeightGrams": 132,
    "calories": 138,
    "proteinGrams": 3,
    "carbsGrams": 32,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.5007,
    "ingredients": "RICE-125 gms; Common salt-7 gms",
    "parsedIngredients": [
      "RICE-125 gms",
      "Common salt-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-138",
    "name": "Pyaazi Kebab",
    "cleanSearchName": "Pyaazi Kebab",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 number",
    "totalWeightGrams": 945,
    "calories": 1455,
    "proteinGrams": 109,
    "carbsGrams": 57,
    "fatGrams": 87,
    "fiberGrams": 15,
    "carbonFootprintKgCO2e": 4.458,
    "ingredients": "Common salt-15 gms; MUTTON-150 gms;Onion-160 gms; Besan-350 gms; Coriander leaves-150 gms;Mint leaves-15 gms; Ginger powder-15 gms; Garlic powder-15 gms; Red chilli Powder-15 gms; Coriander Powder-15 gms; Cumin seeds-15 gms; Garam Masala-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Common salt-15 gms",
      "MUTTON-150 gms",
      "Onion-160 gms",
      "Besan-350 gms",
      "Coriander leaves-150 gms",
      "Mint leaves-15 gms",
      "Ginger powder-15 gms",
      "Garlic powder-15 gms",
      "Red chilli Powder-15 gms",
      "Coriander Powder-15 gms",
      "Cumin seeds-15 gms",
      "Garam Masala-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-139",
    "name": "Ragi Roti (100%)",
    "cleanSearchName": "Ragi Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 medium",
    "totalWeightGrams": 395,
    "calories": 101,
    "proteinGrams": 2,
    "carbsGrams": 21,
    "fatGrams": 1,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.355,
    "ingredients": "Ragi flour-200 gms; Onion-150 gms;Coriander leaves-15 gms; Cumin seeds-15 gms; Common salt-15 gms;",
    "parsedIngredients": [
      "Ragi flour-200 gms",
      "Onion-150 gms",
      "Coriander leaves-15 gms",
      "Cumin seeds-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-140",
    "name": "Makki Methi Roti",
    "cleanSearchName": "Makki Methi Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 75,
    "calories": 34,
    "proteinGrams": 3,
    "carbsGrams": 5,
    "fatGrams": 1,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.045,
    "ingredients": "Makai Atta-30 gms; Methi-15 gms; Common salt-15 gms; Ajwain-15 gms;",
    "parsedIngredients": [
      "Makai Atta-30 gms",
      "Methi-15 gms",
      "Common salt-15 gms",
      "Ajwain-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-141",
    "name": "Makki Mooli Roti",
    "cleanSearchName": "Makki Mooli Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 75,
    "calories": 34,
    "proteinGrams": 2,
    "carbsGrams": 6,
    "fatGrams": 1,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.0495,
    "ingredients": "Makai Atta-30 gms; Radish-15 gms; Common salt-15 gms; Ajwain-15 gms;",
    "parsedIngredients": [
      "Makai Atta-30 gms",
      "Radish-15 gms",
      "Common salt-15 gms",
      "Ajwain-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-142",
    "name": "Makki Roti",
    "cleanSearchName": "Makki Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 60,
    "calories": 29,
    "proteinGrams": 2,
    "carbsGrams": 5,
    "fatGrams": 1,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.045,
    "ingredients": "Makai Atta-30 gms; Common salt-15 gms; Ajwain-15 gms;",
    "parsedIngredients": [
      "Makai Atta-30 gms",
      "Common salt-15 gms",
      "Ajwain-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-143",
    "name": "Jeera-Kari-Patta Water",
    "cleanSearchName": "Jeera-Kari-Patta Water",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 22,
    "calories": 15,
    "proteinGrams": 1,
    "carbsGrams": 1,
    "fatGrams": 1,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.056,
    "ingredients": "Curry leaves-7 gms; Cumin seeds-15 gms;",
    "parsedIngredients": [
      "Curry leaves-7 gms",
      "Cumin seeds-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-144",
    "name": "Jeera Water",
    "cleanSearchName": "Jeera Water",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 15,
    "calories": 18,
    "proteinGrams": 1,
    "carbsGrams": 2,
    "fatGrams": 1,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.0525,
    "ingredients": "Cumin seeds-15 gms",
    "parsedIngredients": [
      "Cumin seeds-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-145",
    "name": "Vegetable Cutlet",
    "cleanSearchName": "Vegetable Cutlet",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "3 number",
    "totalWeightGrams": 475,
    "calories": 92,
    "proteinGrams": 3,
    "carbsGrams": 11,
    "fatGrams": 3,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.2878,
    "ingredients": "POTATO-175 gms; Cabbage-62 gms; Peas-62 gms; carrot-62 gms; Onion-62 gms; Chillies-7 gms; Coriander leaves-15 gms;  Mustard oil-30 gms",
    "parsedIngredients": [
      "POTATO-175 gms",
      "Cabbage-62 gms",
      "Peas-62 gms",
      "carrot-62 gms",
      "Onion-62 gms",
      "Chillies-7 gms",
      "Coriander leaves-15 gms",
      "Mustard oil-30 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-146",
    "name": "Veg Grilled Salad",
    "cleanSearchName": "Veg Grilled Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 873,
    "calories": 69,
    "proteinGrams": 5,
    "carbsGrams": 7,
    "fatGrams": 0,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.66635,
    "ingredients": "Zucchini-118 gms; BRINJAL-200 gms; Capsicum-120 gms; Onion-60 gms; Tomato-90 gms; Mushroom-60 gms; Common salt-4 gms;Black Pepper-4 gms; Lettuce Leaf-125 gms; Cucumber-62 gms; Lemon-15 gms;Parsley-15 gms",
    "parsedIngredients": [
      "Zucchini-118 gms",
      "BRINJAL-200 gms",
      "Capsicum-120 gms",
      "Onion-60 gms",
      "Tomato-90 gms",
      "Mushroom-60 gms",
      "Common salt-4 gms",
      "Black Pepper-4 gms",
      "Lettuce Leaf-125 gms",
      "Cucumber-62 gms",
      "Lemon-15 gms",
      "Parsley-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-147",
    "name": "Gluten Free Wrap (Rice flour)",
    "cleanSearchName": "Gluten Free Wrap (Rice flour)",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 210,
    "calories": 582,
    "proteinGrams": 8,
    "carbsGrams": 97,
    "fatGrams": 16,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.6465,
    "ingredients": "Common salt-15 gms; Rice Flour-150 gms; ; Cumin seeds-15 gms; Garlic Powder-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Common salt-15 gms",
      "Rice Flour-150 gms",
      "Cumin seeds-15 gms",
      "Garlic Powder-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-148",
    "name": "Palak Patta Chaat",
    "cleanSearchName": "Palak Patta Chaat",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 1078,
    "calories": 698,
    "proteinGrams": 30,
    "carbsGrams": 86,
    "fatGrams": 23,
    "fiberGrams": 16,
    "carbonFootprintKgCO2e": 0.8538,
    "ingredients": "SPINACH-30 gms; Turmeric powder-4 gms; Chillies-4 gms; Common salt-4 gms; Mustard oil-15 gms; Tamarind-7 gms; Onion-62 gms; Tomato-62 gms; Coriander leaves-15 gms; Besan-875 gms;",
    "parsedIngredients": [
      "SPINACH-30 gms",
      "Turmeric powder-4 gms",
      "Chillies-4 gms",
      "Common salt-4 gms",
      "Mustard oil-15 gms",
      "Tamarind-7 gms",
      "Onion-62 gms",
      "Tomato-62 gms",
      "Coriander leaves-15 gms",
      "Besan-875 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-149",
    "name": "Veg Dalia(Broken wheat)",
    "cleanSearchName": "Veg Dalia(Broken wheat)",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 455,
    "calories": 218,
    "proteinGrams": 8,
    "carbsGrams": 29,
    "fatGrams": 6,
    "fiberGrams": 12,
    "carbonFootprintKgCO2e": 0.4878,
    "ingredients": "carrot-62 gms; Peas-62 gms; Onion-50 gms; Tomato-50 gms; Ginger-20 gms; Chillies-20 gms; Cumin seeds-7 gms; Soyabean oil-15 gms; Curry leaves-3 number; Coriander leaves-15 gms; Common salt-4 gms; dalia-150 gms",
    "parsedIngredients": [
      "carrot-62 gms",
      "Peas-62 gms",
      "Onion-50 gms",
      "Tomato-50 gms",
      "Ginger-20 gms",
      "Chillies-20 gms",
      "Cumin seeds-7 gms",
      "Soyabean oil-15 gms",
      "Curry leaves-3 number",
      "Coriander leaves-15 gms",
      "Common salt-4 gms",
      "dalia-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-150",
    "name": "Chana Dal bada",
    "cleanSearchName": "Chana Dal bada",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 number",
    "totalWeightGrams": 119,
    "calories": 508,
    "proteinGrams": 25,
    "carbsGrams": 71,
    "fatGrams": 15,
    "fiberGrams": 21,
    "carbonFootprintKgCO2e": 0.2295,
    "ingredients": "Chillies; Ginger; Coriander seeds-15 gms; FENUGREEK SEEDS-15 gms; Cumin seeds-7 gms; Cinnamon-0.5 medium; Asafoetida-7 gms; Curry leaves-15 medium; Coriander leaves-45 gms; Common salt-15 gms; Sunflower oil-15 gms; Channa Dal-1.5 large bowl",
    "parsedIngredients": [
      "Chillies",
      "Ginger",
      "Coriander seeds-15 gms",
      "FENUGREEK SEEDS-15 gms",
      "Cumin seeds-7 gms",
      "Cinnamon-0.5 medium",
      "Asafoetida-7 gms",
      "Curry leaves-15 medium",
      "Coriander leaves-45 gms",
      "Common salt-15 gms",
      "Sunflower oil-15 gms",
      "Channa Dal-1.5 large bowl"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-151",
    "name": "Channa Chat",
    "cleanSearchName": "Channa Chat",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 565,
    "calories": 191,
    "proteinGrams": 8,
    "carbsGrams": 33,
    "fatGrams": 2,
    "fiberGrams": 11,
    "carbonFootprintKgCO2e": 0.4335,
    "ingredients": "Chillies-15 gms; Coriander leaves-15 gms; Common salt-15 gms; Onion-125 gms; TOMATO-150 gms;Cucumber-200 gms ; Cumin seeds-15 gms; Chat Masala-15 gms; Lemon-15 gms",
    "parsedIngredients": [
      "Chillies-15 gms",
      "Coriander leaves-15 gms",
      "Common salt-15 gms",
      "Onion-125 gms",
      "TOMATO-150 gms",
      "Cucumber-200 gms",
      "Cumin seeds-15 gms",
      "Chat Masala-15 gms",
      "Lemon-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-152",
    "name": "Chana Dal and Cabbage Tikki",
    "cleanSearchName": "Chana Dal and Cabbage Tikki",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "3 medium",
    "totalWeightGrams": 95,
    "calories": 63,
    "proteinGrams": 1,
    "carbsGrams": 3,
    "fatGrams": 5,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.1405,
    "ingredients": "Cabbage-1 small; Onion-60 gms ; Chillies-20 gms;  Sunflower oil-15 gms;",
    "parsedIngredients": [
      "Cabbage-1 small",
      "Onion-60 gms",
      "Chillies-20 gms",
      "Sunflower oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-153",
    "name": "Rajma Tikki",
    "cleanSearchName": "Rajma Tikki",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "3 medium",
    "totalWeightGrams": 522,
    "calories": 132,
    "proteinGrams": 5,
    "carbsGrams": 16,
    "fatGrams": 5,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.3931,
    "ingredients": "Ginger-7 gms;Garlic-7 gms; Cumin seeds-4 gms; Common salt-7 gms; Coriander leaves-15 gms; Sunflower oil-15 gms; Red chilli Powder-7 gms; Rajma-300 gms;Onion-160 gms",
    "parsedIngredients": [
      "Ginger-7 gms",
      "Garlic-7 gms",
      "Cumin seeds-4 gms",
      "Common salt-7 gms",
      "Coriander leaves-15 gms",
      "Sunflower oil-15 gms",
      "Red chilli Powder-7 gms",
      "Rajma-300 gms",
      "Onion-160 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-154",
    "name": "Masala Poori",
    "cleanSearchName": "Masala Poori",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "3 medium",
    "totalWeightGrams": 356,
    "calories": 356,
    "proteinGrams": 8,
    "carbsGrams": 53,
    "fatGrams": 11,
    "fiberGrams": 10,
    "carbonFootprintKgCO2e": 0.3515,
    "ingredients": "Wheat-250 gms; Chillies-20 gms; Ginger-4 gms; Cumin seeds-7 gms; Common salt-15 gms; Sunflower oil-15 gms; Red chilli Powder-15 gms; Garam Masala-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Wheat-250 gms",
      "Chillies-20 gms",
      "Ginger-4 gms",
      "Cumin seeds-7 gms",
      "Common salt-15 gms",
      "Sunflower oil-15 gms",
      "Red chilli Powder-15 gms",
      "Garam Masala-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-155",
    "name": "Beetroot, Cucumber and Tomato Salad",
    "cleanSearchName": "Beetroot, Cucumber and Tomato Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 585,
    "calories": 88,
    "proteinGrams": 7,
    "carbsGrams": 11,
    "fatGrams": 1,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.3655,
    "ingredients": "Beet root-140 gms ; Cucumber-200 gms; Tomato-120 gms;  Parsley-125 gms",
    "parsedIngredients": [
      "Beet root-140 gms",
      "Cucumber-200 gms",
      "Tomato-120 gms",
      "Parsley-125 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-156",
    "name": "LETTUCE LEAVES & PAPAYA SALAD",
    "cleanSearchName": "LETTUCE LEAVES & PAPAYA SALAD",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 642,
    "calories": 156,
    "proteinGrams": 4,
    "carbsGrams": 23,
    "fatGrams": 4,
    "fiberGrams": 10,
    "carbonFootprintKgCO2e": 0.36125,
    "ingredients": "Papaya-250 gms; carrot-62 gms; Cucumber-62 gms; Lettuce Leaf-180 gms;Mint leaves-7 gms; Coriander leaves-7 gms; soya sauce-7 gms; Lemon-15 gms; Cherry Tomato-15 gms; Red chilli Powder-7 gms; Lemon-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Papaya-250 gms",
      "carrot-62 gms",
      "Cucumber-62 gms",
      "Lettuce Leaf-180 gms",
      "Mint leaves-7 gms",
      "Coriander leaves-7 gms",
      "soya sauce-7 gms",
      "Lemon-15 gms",
      "Cherry Tomato-15 gms",
      "Red chilli Powder-7 gms",
      "Lemon-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-157",
    "name": "Lettuce wrapped egg",
    "cleanSearchName": "Lettuce wrapped egg",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Eggetarian",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 number",
    "totalWeightGrams": 522,
    "calories": 44,
    "proteinGrams": 4,
    "carbsGrams": 3,
    "fatGrams": 2,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.7605,
    "ingredients": "Lettuce Leaf-20 gms; TOMATO RIPE-150 gms; Onion-150 gms; Coriander leaves-15 gms; Lemon-15 gms; Egg-130 gms; Common salt-15 gms; Chillies-20 gms; Olive oil-7 gms",
    "parsedIngredients": [
      "Lettuce Leaf-20 gms",
      "TOMATO RIPE-150 gms",
      "Onion-150 gms",
      "Coriander leaves-15 gms",
      "Lemon-15 gms",
      "Egg-130 gms",
      "Common salt-15 gms",
      "Chillies-20 gms",
      "Olive oil-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-158",
    "name": "Channa Salad (Black)",
    "cleanSearchName": "Channa Salad (Black)",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 623,
    "calories": 480,
    "proteinGrams": 30,
    "carbsGrams": 68,
    "fatGrams": 6,
    "fiberGrams": 24,
    "carbonFootprintKgCO2e": 0.55225,
    "ingredients": "Gram dal-125 gms; Onion-60 gms; Cucumber -150 gms; TOMATO-90 gms; Capsicum-150 gms;  Coriander leaves-15 gms;Mint leaves-15 gms; Lemon-7 gms; Common salt-7 gms;Black Pepper-4 gms",
    "parsedIngredients": [
      "Gram dal-125 gms",
      "Onion-60 gms",
      "Cucumber -150 gms",
      "TOMATO-90 gms",
      "Capsicum-150 gms",
      "Coriander leaves-15 gms",
      "Mint leaves-15 gms",
      "Lemon-7 gms",
      "Common salt-7 gms",
      "Black Pepper-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-159",
    "name": "Jau Vegetable Dalia",
    "cleanSearchName": "Jau Vegetable Dalia",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 small bowl",
    "totalWeightGrams": 517,
    "calories": 70,
    "proteinGrams": 2,
    "carbsGrams": 7,
    "fatGrams": 4,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.6785,
    "ingredients": "Cooking oil-15 gms; carrot-62 gms; TOMATO-150 gms; Cumin seeds-7 gms; Turmeric powder-4 gms; Common salt-7 gms; dalia-150 gms; Peas-100 gms; Ginger powder-15 gms; Garam Masala-7 gms",
    "parsedIngredients": [
      "Cooking oil-15 gms",
      "carrot-62 gms",
      "TOMATO-150 gms",
      "Cumin seeds-7 gms",
      "Turmeric powder-4 gms",
      "Common salt-7 gms",
      "dalia-150 gms",
      "Peas-100 gms",
      "Ginger powder-15 gms",
      "Garam Masala-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-160",
    "name": "Rice Tofu Sizzler",
    "cleanSearchName": "Rice Tofu Sizzler",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 small bowl",
    "totalWeightGrams": 489,
    "calories": 110,
    "proteinGrams": 4,
    "carbsGrams": 12,
    "fatGrams": 5,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.9144,
    "ingredients": "Ginger-7 gms;Garlic-7 gms; Cooking oil-15 gms; Common salt-15 gms; Capsicum-45 gms; Mint leaves-15 gms; Onion-150 gms; Lettuce Leaf-20 gms; Rice-50 gms; Tofu-150 gms; Cumin seeds-15 gms",
    "parsedIngredients": [
      "Ginger-7 gms",
      "Garlic-7 gms",
      "Cooking oil-15 gms",
      "Common salt-15 gms",
      "Capsicum-45 gms",
      "Mint leaves-15 gms",
      "Onion-150 gms",
      "Lettuce Leaf-20 gms",
      "Rice-50 gms",
      "Tofu-150 gms",
      "Cumin seeds-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-161",
    "name": "Cherry, Blueberries & Bell peppers salad",
    "cleanSearchName": "Cherry, Blueberries & Bell peppers salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 cup",
    "totalWeightGrams": 376,
    "calories": 63,
    "proteinGrams": 1,
    "carbsGrams": 23,
    "fatGrams": 1,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.6397,
    "ingredients": "Capsicum-100 gms; Common salt-7 gms;Black Pepper-4 gms; Olive oil-15 gms; Blueberries-250 gms",
    "parsedIngredients": [
      "Capsicum-100 gms",
      "Common salt-7 gms",
      "Black Pepper-4 gms",
      "Olive oil-15 gms",
      "Blueberries-250 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-162",
    "name": "Rice Vegetable sizzler",
    "cleanSearchName": "Rice Vegetable sizzler",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 189,
    "calories": 344,
    "proteinGrams": 6,
    "carbsGrams": 43,
    "fatGrams": 15,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.36015,
    "ingredients": "Ginger-7 gms;Garlic-7 gms; Common salt-15 gms; Cooking oil-15 gms; Capsicum-30 gms;  Beans-15 gms; carrot-15 gms;Mint leaves-15 gms; Lettuce Leaf-20 gms; Rice-50 gms",
    "parsedIngredients": [
      "Ginger-7 gms",
      "Garlic-7 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms",
      "Capsicum-30 gms",
      "Beans-15 gms",
      "carrot-15 gms",
      "Mint leaves-15 gms",
      "Lettuce Leaf-20 gms",
      "Rice-50 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-163",
    "name": "Quesedilla",
    "cleanSearchName": "Quesedilla",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 78,
    "calories": 104,
    "proteinGrams": 7,
    "carbsGrams": 0,
    "fatGrams": 8,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.1224,
    "ingredients": "Chicken-0.25 gms; Capsicum-30 gms; Common salt-4 gms; Black pepper-4 gms; Cooking oil-15 gms",
    "parsedIngredients": [
      "Chicken-0.25 gms",
      "Capsicum-30 gms",
      "Common salt-4 gms",
      "Black pepper-4 gms",
      "Cooking oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-164",
    "name": "Ragi Dosa",
    "cleanSearchName": "Ragi Dosa",
    "associativity": "14",
    "associativityCategory": "South Indian Dosas, Idlis & Uttapams",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 77,
    "calories": 126,
    "proteinGrams": 2,
    "carbsGrams": 22,
    "fatGrams": 3,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.1199,
    "ingredients": "Ragi flour-62 gms; Cumin seeds-4 gms; Common salt-4 gms; Cooking oil-7 gms;",
    "parsedIngredients": [
      "Ragi flour-62 gms",
      "Cumin seeds-4 gms",
      "Common salt-4 gms",
      "Cooking oil-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-165",
    "name": "Ragi Idli",
    "cleanSearchName": "Ragi Idli",
    "associativity": "14",
    "associativityCategory": "South Indian Dosas, Idlis & Uttapams",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 medium",
    "totalWeightGrams": 971,
    "calories": 296,
    "proteinGrams": 11,
    "carbsGrams": 55,
    "fatGrams": 4,
    "fiberGrams": 10,
    "carbonFootprintKgCO2e": 0.8907,
    "ingredients": "Ragi Flour-250 gms; Fenugreek seeds-7 gms; Common salt-7 gms; Cooking oil-7 gms; Urad Dal Flour-700 gms",
    "parsedIngredients": [
      "Ragi Flour-250 gms",
      "Fenugreek seeds-7 gms",
      "Common salt-7 gms",
      "Cooking oil-7 gms",
      "Urad Dal Flour-700 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-166",
    "name": "LOBIA CHAT",
    "cleanSearchName": "LOBIA CHAT",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 small bowl",
    "totalWeightGrams": 375,
    "calories": 77,
    "proteinGrams": 5,
    "carbsGrams": 13,
    "fatGrams": 0,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.30255,
    "ingredients": "Lobia-125 gms; Capsicum-62 gms; Cucumber-62 gms; Onion-62 gms; Coriander leaves-15 gms; Common salt-4 gms; Lemon-15 gms; Black pepper-15 gms; Chat Masala-15 gms",
    "parsedIngredients": [
      "Lobia-125 gms",
      "Capsicum-62 gms",
      "Cucumber-62 gms",
      "Onion-62 gms",
      "Coriander leaves-15 gms",
      "Common salt-4 gms",
      "Lemon-15 gms",
      "Black pepper-15 gms",
      "Chat Masala-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-167",
    "name": "ZUCCHINI SALAD",
    "cleanSearchName": "ZUCCHINI SALAD",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 414,
    "calories": 92,
    "proteinGrams": 5,
    "carbsGrams": 12,
    "fatGrams": 1,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.2653,
    "ingredients": "Zucchini-200 gms; Onion-30 gms; CUCUMBER-30 gms; Lemon-15 gms; Garlic-4 gms; Common salt-15 gms; Parsley-15 gms; Black pepper-15 gms; Tomato-90 gms",
    "parsedIngredients": [
      "Zucchini-200 gms",
      "Onion-30 gms",
      "CUCUMBER-30 gms",
      "Lemon-15 gms",
      "Garlic-4 gms",
      "Common salt-15 gms",
      "Parsley-15 gms",
      "Black pepper-15 gms",
      "Tomato-90 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-168",
    "name": "PITA BREAD (WHEAT)",
    "cleanSearchName": "PITA BREAD (WHEAT)",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 slice",
    "totalWeightGrams": 164,
    "calories": 413,
    "proteinGrams": 14,
    "carbsGrams": 78,
    "fatGrams": 4,
    "fiberGrams": 14,
    "carbonFootprintKgCO2e": 0.2145,
    "ingredients": "Atta-125 gms;  Yoghurt-30 gms; Sunflower oil-4 gms; Baking Soda-5 gms",
    "parsedIngredients": [
      "Atta-125 gms",
      "Yoghurt-30 gms",
      "Sunflower oil-4 gms",
      "Baking Soda-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-169",
    "name": "Bajra Khichadi",
    "cleanSearchName": "Bajra Khichadi",
    "associativity": "3",
    "associativityCategory": "Rice & Millet Dishes",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 1149,
    "calories": 1374,
    "proteinGrams": 49,
    "carbsGrams": 231,
    "fatGrams": 23,
    "fiberGrams": 32,
    "carbonFootprintKgCO2e": 0.62825,
    "ingredients": "Gram dal-15 gms; Cumin seeds-15 gms; Asafoetida-4 gms; Chillies-10 gms; Common salt-15 gms; Sunflower oil-15 gms; Coriander leaves-15 gms; Bajra-500 gms; Tomato-90 gms; carrot-150 gms;Onion-125 gms; POTATO-150 gms; Ginger-15 gms; Turmeric powder-15 gms; Red chilli Powder-15 gms",
    "parsedIngredients": [
      "Gram dal-15 gms",
      "Cumin seeds-15 gms",
      "Asafoetida-4 gms",
      "Chillies-10 gms",
      "Common salt-15 gms",
      "Sunflower oil-15 gms",
      "Coriander leaves-15 gms",
      "Bajra-500 gms",
      "Tomato-90 gms",
      "carrot-150 gms",
      "Onion-125 gms",
      "POTATO-150 gms",
      "Ginger-15 gms",
      "Turmeric powder-15 gms",
      "Red chilli Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-170",
    "name": "GHIYA CUCUMBER JUICE",
    "cleanSearchName": "GHIYA CUCUMBER JUICE",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 255,
    "calories": 42,
    "proteinGrams": 1,
    "carbsGrams": 7,
    "fatGrams": 1,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.14,
    "ingredients": "Bottle gourd-125 gms; CUCUMBER-75 gms; Ginger-10 gms;  Lemon-15 gms; Common salt-15 gms; Cumin seeds-15 gms;",
    "parsedIngredients": [
      "Bottle gourd-125 gms",
      "CUCUMBER-75 gms",
      "Ginger-10 gms",
      "Lemon-15 gms",
      "Common salt-15 gms",
      "Cumin seeds-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-171",
    "name": "GHIYA CUCUMBER AMLA JUICE",
    "cleanSearchName": "GHIYA CUCUMBER AMLA JUICE",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 293,
    "calories": 55,
    "proteinGrams": 0,
    "carbsGrams": 12,
    "fatGrams": 0,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.0922,
    "ingredients": "BOTTLE GOURD-150 gms; CUCUMBER-100 gms; Amla-40 gms;Mint leaves-3 gms;",
    "parsedIngredients": [
      "BOTTLE GOURD-150 gms",
      "CUCUMBER-100 gms",
      "Amla-40 gms",
      "Mint leaves-3 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-172",
    "name": "Veg Basil Cup",
    "cleanSearchName": "Veg Basil Cup",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 number",
    "totalWeightGrams": 231,
    "calories": 77,
    "proteinGrams": 2,
    "carbsGrams": 2,
    "fatGrams": 5,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.161,
    "ingredients": "Onion-15 gms; Tomato-15 gms; Cucumber-15 gms; Capsicum, red-14 gms; Zucchini-15 gms; Coriander leaves-15 gms; Lemon-15 gms;Mint leaves-4 gms; Black pepper-4 gms; Common salt-4 gms; Cooking Oil-15 gms; Basil-100 gms",
    "parsedIngredients": [
      "Onion-15 gms",
      "Tomato-15 gms",
      "Cucumber-15 gms",
      "Capsicum, red-14 gms",
      "Zucchini-15 gms",
      "Coriander leaves-15 gms",
      "Lemon-15 gms",
      "Mint leaves-4 gms",
      "Black pepper-4 gms",
      "Common salt-4 gms",
      "Cooking Oil-15 gms",
      "Basil-100 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-173",
    "name": "Boiled Aloo",
    "cleanSearchName": "Boiled Aloo",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 medium bowl",
    "totalWeightGrams": 384,
    "calories": 59,
    "proteinGrams": 2,
    "carbsGrams": 12,
    "fatGrams": 0,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.1189,
    "ingredients": "Potato-350 gms;Lemon-15 gms; Common salt-4 gms; Chat Masala-15 gms",
    "parsedIngredients": [
      "Potato-350 gms",
      "Lemon-15 gms",
      "Common salt-4 gms",
      "Chat Masala-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-174",
    "name": "Boiled Shakarkandi",
    "cleanSearchName": "Boiled Shakarkandi",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "North",
      "South"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 medium",
    "totalWeightGrams": 734,
    "calories": 170,
    "proteinGrams": 3,
    "carbsGrams": 38,
    "fatGrams": 1,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.6439,
    "ingredients": "Sweet potato-700 gms; Common salt-4 gms; Lemon-15 gms; Chat Masala-15 gms",
    "parsedIngredients": [
      "Sweet potato-700 gms",
      "Common salt-4 gms",
      "Lemon-15 gms",
      "Chat Masala-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-175",
    "name": "Jeera Rice (Brown Rice)",
    "cleanSearchName": "Jeera Rice (Brown Rice)",
    "associativity": "3",
    "associativityCategory": "Rice & Millet Dishes",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 88,
    "calories": 265,
    "proteinGrams": 5,
    "carbsGrams": 46,
    "fatGrams": 6,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.3329,
    "ingredients": "Rice-62 gms; Cumin seeds-7 gms; Common salt-4 gms; Cooking Oil-15 gms;",
    "parsedIngredients": [
      "Rice-62 gms",
      "Cumin seeds-7 gms",
      "Common salt-4 gms",
      "Cooking Oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-176",
    "name": "Jeera Rice (Basmati Rice)",
    "cleanSearchName": "Jeera Rice (Basmati Rice)",
    "associativity": "3",
    "associativityCategory": "Rice & Millet Dishes",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 85,
    "calories": 263,
    "proteinGrams": 5,
    "carbsGrams": 47,
    "fatGrams": 5,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.3224,
    "ingredients": "Rice-62 gms; Cumin seeds-4 gms; Common salt-4 gms; Cooking Oil-15 gms;",
    "parsedIngredients": [
      "Rice-62 gms",
      "Cumin seeds-4 gms",
      "Common salt-4 gms",
      "Cooking Oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-177",
    "name": "Stuffed Ragi Roti",
    "cleanSearchName": "Stuffed Ragi Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 307,
    "calories": 339,
    "proteinGrams": 8,
    "carbsGrams": 64,
    "fatGrams": 3,
    "fiberGrams": 12,
    "carbonFootprintKgCO2e": 0.68825,
    "ingredients": "Ragi flour-45 gms; Cauliflower-15 gms; Onion-15 gms; Ginger-15 gms; Coriander seeds-7 gms; Coriander leaves-15 gms; Common salt-15 gms; ; Rice Flour-150 gms; Garam Masala-15 gms; Cumin Powder-15 gms",
    "parsedIngredients": [
      "Ragi flour-45 gms",
      "Cauliflower-15 gms",
      "Onion-15 gms",
      "Ginger-15 gms",
      "Coriander seeds-7 gms",
      "Coriander leaves-15 gms",
      "Common salt-15 gms",
      "Rice Flour-150 gms",
      "Garam Masala-15 gms",
      "Cumin Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-178",
    "name": "Plain Dosa",
    "cleanSearchName": "Plain Dosa",
    "associativity": "14",
    "associativityCategory": "South Indian Dosas, Idlis & Uttapams",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 310,
    "calories": 987,
    "proteinGrams": 26,
    "carbsGrams": 200,
    "fatGrams": 7,
    "fiberGrams": 13,
    "carbonFootprintKgCO2e": 1.0675,
    "ingredients": "Rice-250 gms; Gram dal-30 gms; Common salt-15 gms; Mustard oil-15 gms;",
    "parsedIngredients": [
      "Rice-250 gms",
      "Gram dal-30 gms",
      "Common salt-15 gms",
      "Mustard oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-179",
    "name": "Uttapam",
    "cleanSearchName": "Uttapam",
    "associativity": "14",
    "associativityCategory": "South Indian Dosas, Idlis & Uttapams",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "3 number",
    "totalWeightGrams": 283,
    "calories": 80,
    "proteinGrams": 2,
    "carbsGrams": 15,
    "fatGrams": 1,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.56225,
    "ingredients": "Rice-62 gms; Fenugreek seeds-4 gms; Cooking oil-7 gms; Onion-15 gms; Tomato-120 gms; Capsicum-15 gms; carrot-15 gms; Coriander leaves-15 gms; Red chilli Powder-15 gms; Urad Dal Flour-15 gms",
    "parsedIngredients": [
      "Rice-62 gms",
      "Fenugreek seeds-4 gms",
      "Cooking oil-7 gms",
      "Onion-15 gms",
      "Tomato-120 gms",
      "Capsicum-15 gms",
      "carrot-15 gms",
      "Coriander leaves-15 gms",
      "Red chilli Powder-15 gms",
      "Urad Dal Flour-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-180",
    "name": "Ragi Wrap",
    "cleanSearchName": "Ragi Wrap",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 130,
    "calories": 241,
    "proteinGrams": 4,
    "carbsGrams": 32,
    "fatGrams": 9,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.1673,
    "ingredients": "Ragi Flour-45 gms;  Cumin seeds-4 gms; Coriander leaves-15 gms; Cooking oil-7 gms; Onion-15 gms; Tomato-7 gms; Capsicum-15 gms; Lettuce Leaf-15 gms; Mushroom-7 gms",
    "parsedIngredients": [
      "Ragi Flour-45 gms",
      "Cumin seeds-4 gms",
      "Coriander leaves-15 gms",
      "Cooking oil-7 gms",
      "Onion-15 gms",
      "Tomato-7 gms",
      "Capsicum-15 gms",
      "Lettuce Leaf-15 gms",
      "Mushroom-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-181",
    "name": "Bajra Methi Khakra",
    "cleanSearchName": "Bajra Methi Khakra",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 small",
    "totalWeightGrams": 861,
    "calories": 563,
    "proteinGrams": 16,
    "carbsGrams": 102,
    "fatGrams": 7,
    "fiberGrams": 14,
    "carbonFootprintKgCO2e": 0.2051,
    "ingredients": "Fenugreek leaves-62 gms; Mustard oil-15 gms; Turmeric powder-4 gms; Common salt-15 gms; Bajra-750 gms; Red chilli Powder-15 gms",
    "parsedIngredients": [
      "Fenugreek leaves-62 gms",
      "Mustard oil-15 gms",
      "Turmeric powder-4 gms",
      "Common salt-15 gms",
      "Bajra-750 gms",
      "Red chilli Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-182",
    "name": "Bajra Wrap",
    "cleanSearchName": "Bajra Wrap",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 344,
    "calories": 377,
    "proteinGrams": 11,
    "carbsGrams": 70,
    "fatGrams": 3,
    "fiberGrams": 11,
    "carbonFootprintKgCO2e": 0.0915,
    "ingredients": "Spinach-15 gms; Capsicum-15 gms; carrot-15 gms; Coriander leaves-15 gms; Common salt-15 gms;Black Pepper-4 gms; Bajra-250 gms; ; Green Chutney-15 gms",
    "parsedIngredients": [
      "Spinach-15 gms",
      "Capsicum-15 gms",
      "carrot-15 gms",
      "Coriander leaves-15 gms",
      "Common salt-15 gms",
      "Black Pepper-4 gms",
      "Bajra-250 gms",
      "Green Chutney-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-183",
    "name": "Besan Dhokla",
    "cleanSearchName": "Besan Dhokla",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 number",
    "totalWeightGrams": 591,
    "calories": 226,
    "proteinGrams": 11,
    "carbsGrams": 28,
    "fatGrams": 7,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.7103,
    "ingredients": "Turmeric powder-1 gms; Besan-250 gms; Yoghurt-75 gms; MUSTARD SEEDS-24 gms; Olive oil-15 gms; Coriander leaves-30 gms; Baking Soda-5 gms; Ginger-0.25 gms; Lemon-1 gms; Cumin seeds-15 gms; Semolina-150 gms",
    "parsedIngredients": [
      "Turmeric powder-1 gms",
      "Besan-250 gms",
      "Yoghurt-75 gms",
      "MUSTARD SEEDS-24 gms",
      "Olive oil-15 gms",
      "Coriander leaves-30 gms",
      "Baking Soda-5 gms",
      "Ginger-0.25 gms",
      "Lemon-1 gms",
      "Cumin seeds-15 gms",
      "Semolina-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-184",
    "name": "Millets Dosa (Foxtail)",
    "cleanSearchName": "Millets Dosa (Foxtail)",
    "associativity": "14",
    "associativityCategory": "South Indian Dosas, Idlis & Uttapams",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 180,
    "calories": 97,
    "proteinGrams": 1,
    "carbsGrams": 4,
    "fatGrams": 9,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.0874,
    "ingredients": "Common salt-4 gms; Cooking oil-7 gms; Cumin seeds-4 gms; ; Millets-150 gms; Rice Flour-15 gms",
    "parsedIngredients": [
      "Common salt-4 gms",
      "Cooking oil-7 gms",
      "Cumin seeds-4 gms",
      "Millets-150 gms",
      "Rice Flour-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-185",
    "name": "Methi Water",
    "cleanSearchName": "Methi Water",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 7,
    "calories": 33,
    "proteinGrams": 3,
    "carbsGrams": 4,
    "fatGrams": 1,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.0245,
    "ingredients": "FENUGREEK SEEDS-7 gms;",
    "parsedIngredients": [
      "FENUGREEK SEEDS-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-186",
    "name": "Pudina Water",
    "cleanSearchName": "Pudina Water",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 8,
    "calories": 3,
    "proteinGrams": 0,
    "carbsGrams": 0,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.0032,
    "ingredients": "Mint leaves-8 gms;",
    "parsedIngredients": [
      "Mint leaves-8 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-187",
    "name": "Methi-Ajwain Water",
    "cleanSearchName": "Methi-Ajwain Water",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 8,
    "calories": 12,
    "proteinGrams": 1,
    "carbsGrams": 1,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.0254,
    "ingredients": "FENUGREEK SEEDS-7 gms; Ajwain-1 gms;",
    "parsedIngredients": [
      "FENUGREEK SEEDS-7 gms",
      "Ajwain-1 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-188",
    "name": "Chicken Kebab",
    "cleanSearchName": "Chicken Kebab",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 number",
    "totalWeightGrams": 357,
    "calories": 102,
    "proteinGrams": 6,
    "carbsGrams": 5,
    "fatGrams": 6,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 1.309,
    "ingredients": "Gram dal-30 gms; Cooking oil-15 gms; Cumin seeds-15 gms; Cloves-2 gms; Black pepper-2 number; Cinnamon-0.25 gms; Chicken -150 gms; Common salt-15 gms; Mint leaves-15 gms; Coriander leaves-15 gms; Egg-15 gms; Ajwain-15 gms; Ginger powder-15 gms; Garlic Powder-15 gms; Red chilli Powder-15 gms",
    "parsedIngredients": [
      "Gram dal-30 gms",
      "Cooking oil-15 gms",
      "Cumin seeds-15 gms",
      "Cloves-2 gms",
      "Black pepper-2 number",
      "Cinnamon-0.25 gms",
      "Chicken -150 gms",
      "Common salt-15 gms",
      "Mint leaves-15 gms",
      "Coriander leaves-15 gms",
      "Egg-15 gms",
      "Ajwain-15 gms",
      "Ginger powder-15 gms",
      "Garlic Powder-15 gms",
      "Red chilli Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-189",
    "name": "Kadha",
    "cleanSearchName": "Kadha",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 71,
    "calories": 69,
    "proteinGrams": 1,
    "carbsGrams": 11,
    "fatGrams": 1,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.1915,
    "ingredients": "Ginger-7 gms; Cloves-4 gms; Black pepper-4 gms; Cinnamon-7 gms; Cardamom-4 gms; Turmeric powder-15 gms; Lemon-15 gms; Saunf-15 gms",
    "parsedIngredients": [
      "Ginger-7 gms",
      "Cloves-4 gms",
      "Black pepper-4 gms",
      "Cinnamon-7 gms",
      "Cardamom-4 gms",
      "Turmeric powder-15 gms",
      "Lemon-15 gms",
      "Saunf-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-190",
    "name": "Lemon Tea",
    "cleanSearchName": "Lemon Tea",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 cup",
    "totalWeightGrams": 22,
    "calories": 1,
    "proteinGrams": 0,
    "carbsGrams": 1,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.0478,
    "ingredients": "Tea-15 gms; Lemon-7 gms",
    "parsedIngredients": [
      "Tea-15 gms",
      "Lemon-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-191",
    "name": "Smoothie (In milk)",
    "cleanSearchName": "Smoothie (In milk)",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 425,
    "calories": 183,
    "proteinGrams": 8,
    "carbsGrams": 40,
    "fatGrams": 0,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.7,
    "ingredients": "Milk-250 gms; Banana-100 gms;Blueberries-50 gms, Strawberries-25 gms",
    "parsedIngredients": [
      "Milk-250 gms",
      "Banana-100 gms",
      "Blueberries-50 gms, Strawberries-25 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-192",
    "name": "Stuffed Bajara Roti",
    "cleanSearchName": "Stuffed Bajara Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 563,
    "calories": 840,
    "proteinGrams": 21,
    "carbsGrams": 162,
    "fatGrams": 11,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.227,
    "ingredients": "Onion-60 gms; Ginger-7 gms; Turmeric powder-4 gms; Cooking oil-15 gms; BAJRA-125 gms; POTATO-350 gms; Cumin seeds-1 gms; CORIANDER-1 gms",
    "parsedIngredients": [
      "Onion-60 gms",
      "Ginger-7 gms",
      "Turmeric powder-4 gms",
      "Cooking oil-15 gms",
      "BAJRA-125 gms",
      "POTATO-350 gms",
      "Cumin seeds-1 gms",
      "CORIANDER-1 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-193",
    "name": "HARA MASALA KEBAB (Spinach)",
    "cleanSearchName": "HARA MASALA KEBAB (Spinach)",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "3 medium",
    "totalWeightGrams": 243,
    "calories": 77,
    "proteinGrams": 1,
    "carbsGrams": 6,
    "fatGrams": 5,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.1197,
    "ingredients": "POTATO-1 75 gms; Coriander leaves-30 gms;Mint leaves-15 gms; Spinach-62 gms; Banana-25 gms; Ginger-7 gms;Garlic-7 gms; Common salt-7 gms; Cooking oil-15 gms",
    "parsedIngredients": [
      "POTATO-1 75 gms",
      "Coriander leaves-30 gms",
      "Mint leaves-15 gms",
      "Spinach-62 gms",
      "Banana-25 gms",
      "Ginger-7 gms",
      "Garlic-7 gms",
      "Common salt-7 gms",
      "Cooking oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-194",
    "name": "Chakhle's Shami Kebab",
    "cleanSearchName": "Chakhle's Shami Kebab",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 number",
    "totalWeightGrams": 85,
    "calories": 18,
    "proteinGrams": 1,
    "carbsGrams": 3,
    "fatGrams": 0,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.0227,
    "ingredients": "Onion-60 gms; Garlic-1 gms; Ginger-0.5 gms; CORIANDER-0.5 gms; Common salt-7 gms; Lemon-7 gms",
    "parsedIngredients": [
      "Onion-60 gms",
      "Garlic-1 gms",
      "Ginger-0.5 gms",
      "CORIANDER-0.5 gms",
      "Common salt-7 gms",
      "Lemon-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-195",
    "name": "Chana tikki (Kabuli chana)",
    "cleanSearchName": "Chana tikki (Kabuli chana)",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "3 small",
    "totalWeightGrams": 880,
    "calories": 261,
    "proteinGrams": 12,
    "carbsGrams": 33,
    "fatGrams": 9,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.5575,
    "ingredients": "POTATO-250 gms; Common salt-15 gms; Cabbage-400 gms;Onion-125 gms; Ginger-15 gms; Cumin seeds-15 gms; Coriander Powder-15 gms; Garam Masala-15 gms; Olive oil-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "POTATO-250 gms",
      "Common salt-15 gms",
      "Cabbage-400 gms",
      "Onion-125 gms",
      "Ginger-15 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-15 gms",
      "Garam Masala-15 gms",
      "Olive oil-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-196",
    "name": "Lettuce wrap Channa tikki",
    "cleanSearchName": "Lettuce wrap Channa tikki",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 499,
    "calories": 466,
    "proteinGrams": 24,
    "carbsGrams": 71,
    "fatGrams": 11,
    "fiberGrams": 17,
    "carbonFootprintKgCO2e": 0.2938,
    "ingredients": "POTATO-250 gms; Onion-2 gms; Common salt-7 gms; Coriander leaves-15 gms; Cooking oil-15 gms; Lettuce Leaf-20 gms; CUCUMBER-20 gms; Tomato-20 gms; Channa Dal-150 gms",
    "parsedIngredients": [
      "POTATO-250 gms",
      "Onion-2 gms",
      "Common salt-7 gms",
      "Coriander leaves-15 gms",
      "Cooking oil-15 gms",
      "Lettuce Leaf-20 gms",
      "CUCUMBER-20 gms",
      "Tomato-20 gms",
      "Channa Dal-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-197",
    "name": "Millets Khichdi",
    "cleanSearchName": "Millets Khichdi",
    "associativity": "5",
    "associativityCategory": "Khichdi, Pulao & Biryani",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 689,
    "calories": 442,
    "proteinGrams": 21,
    "carbsGrams": 69,
    "fatGrams": 6,
    "fiberGrams": 16,
    "carbonFootprintKgCO2e": 0.5777,
    "ingredients": "Gram dal-30 gms; carrot-125 gms; Peas-125 gms; Capsicum-125 gms; Fenugreek leaves-15 gms; Tomato-90 gms; Cooking oil-15 gms; Ginger-7 gms; Common salt-7 gms;Millets-150 gms;",
    "parsedIngredients": [
      "Gram dal-30 gms",
      "carrot-125 gms",
      "Peas-125 gms",
      "Capsicum-125 gms",
      "Fenugreek leaves-15 gms",
      "Tomato-90 gms",
      "Cooking oil-15 gms",
      "Ginger-7 gms",
      "Common salt-7 gms",
      "Millets-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-198",
    "name": "Aloo /Shakarkandi",
    "cleanSearchName": "Aloo /Shakarkandi",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 medium",
    "totalWeightGrams": 6,
    "calories": 79,
    "proteinGrams": 1,
    "carbsGrams": 19,
    "fatGrams": 0,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.0034,
    "ingredients": "SWEET POTATO-2 gms; Lemon-4 gms;",
    "parsedIngredients": [
      "SWEET POTATO-2 gms",
      "Lemon-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-199",
    "name": "Sambar",
    "cleanSearchName": "Sambar",
    "associativity": "13",
    "associativityCategory": "Traditional Sambars & Chutneys",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner",
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 tbsp",
    "totalWeightGrams": 26,
    "calories": 120,
    "proteinGrams": 1,
    "carbsGrams": 14,
    "fatGrams": 7,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.07222,
    "ingredients": "Drumstick-53 gms; Carrot-53 gms; Mustard seeds-4 gms; Chillies-4 gms; Curry leaves-4gms; Coriander-4 gms; Common salt-2 gms; Cooking oil-4 gms; Dal-12 gms; Potato-53 gms; Ladies finger-53 gms; Onion-16 gms; Tomato-14 gms; Cumin seeds-4 gms; Brinjal-16 gms",
    "parsedIngredients": [
      "Drumstick-53 gms",
      "Carrot-53 gms",
      "Mustard seeds-4 gms",
      "Chillies-4 gms",
      "Curry leaves-4gms",
      "Coriander-4 gms",
      "Common salt-2 gms",
      "Cooking oil-4 gms",
      "Dal-12 gms",
      "Potato-53 gms",
      "Ladies finger-53 gms",
      "Onion-16 gms",
      "Tomato-14 gms",
      "Cumin seeds-4 gms",
      "Brinjal-16 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-200",
    "name": "Aloo Tikki",
    "cleanSearchName": "Aloo Tikki",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 406,
    "calories": 279,
    "proteinGrams": 2,
    "carbsGrams": 32,
    "fatGrams": 15,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.211,
    "ingredients": "POTATO-350 gms; CORIANDER LEAVES-15 gms; Turmeric powder-4 gms; Cumin seeds-7 gms; Common salt-15 gms; Cooking oil-15 gms",
    "parsedIngredients": [
      "POTATO-350 gms",
      "CORIANDER LEAVES-15 gms",
      "Turmeric powder-4 gms",
      "Cumin seeds-7 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-201",
    "name": "ALMOND FLOUR CHEELA",
    "cleanSearchName": "ALMOND FLOUR CHEELA",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner",
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 435,
    "calories": 757,
    "proteinGrams": 19,
    "carbsGrams": 48,
    "fatGrams": 55,
    "fiberGrams": 18,
    "carbonFootprintKgCO2e": 0.4245,
    "ingredients": "Common salt-15 gms;Roti-100 gms; Besan-30 gms; SPINACH-15 gms;Onion-125 gms; Coriander leaves-15 gms; Cumin Powder-15 gms; Coriander Powder-15 gms; Turmeric powder-15 gms; Olive oil-15 gms; Tomato-75 gms",
    "parsedIngredients": [
      "Common salt-15 gms",
      "Roti-100 gms",
      "Besan-30 gms",
      "SPINACH-15 gms",
      "Onion-125 gms",
      "Coriander leaves-15 gms",
      "Cumin Powder-15 gms",
      "Coriander Powder-15 gms",
      "Turmeric powder-15 gms",
      "Olive oil-15 gms",
      "Tomato-75 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-202",
    "name": "Carrot, Bell Pepper, Broccoli, Cucumber, and Beetroot Salad",
    "cleanSearchName": "Carrot, Bell Pepper, Broccoli, Cucumber, and Beetroot Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 258,
    "calories": 103,
    "proteinGrams": 4,
    "carbsGrams": 20,
    "fatGrams": 0,
    "fiberGrams": 8,
    "carbonFootprintKgCO2e": 0.2018,
    "ingredients": "carrot-50 gms; Capsicum-60 gms; CUCUMBER-40 gms; BEET ROOT-15 gms;Garlic-1 gms; Common salt-15 gms; Black pepper-15 gms; Broccoli-62 gms",
    "parsedIngredients": [
      "carrot-50 gms",
      "Capsicum-60 gms",
      "CUCUMBER-40 gms",
      "BEET ROOT-15 gms",
      "Garlic-1 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Broccoli-62 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-203",
    "name": "SPROUTS SALAD",
    "cleanSearchName": "SPROUTS SALAD",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 620,
    "calories": 245,
    "proteinGrams": 16,
    "carbsGrams": 40,
    "fatGrams": 1,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.314,
    "ingredients": "BRUSSELS SPROUTS-250 gms; Tomato-62 gms; Onion-62 gms; CUCUMBER-62 gms; carrot-62 gms; Capsicum-62 gms; CORIANDER LEAVES-15 gms; Lemon-15 gms; Common salt-15 gms; Black pepper-15 gms",
    "parsedIngredients": [
      "BRUSSELS SPROUTS-250 gms",
      "Tomato-62 gms",
      "Onion-62 gms",
      "CUCUMBER-62 gms",
      "carrot-62 gms",
      "Capsicum-62 gms",
      "CORIANDER LEAVES-15 gms",
      "Lemon-15 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-204",
    "name": "Som Tam Green Papaya Salad",
    "cleanSearchName": "Som Tam Green Papaya Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 200,
    "calories": 80,
    "proteinGrams": 3,
    "carbsGrams": 15,
    "fatGrams": 0,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.1845,
    "ingredients": "Papaya-80 gms; carrot-30 gms; Beans-50 gms; HONEY-15 gms; Lemon-10 gms; Coriander leaves-5 number; Garlic powder-15 gms",
    "parsedIngredients": [
      "Papaya-80 gms",
      "carrot-30 gms",
      "Beans-50 gms",
      "HONEY-15 gms",
      "Lemon-10 gms",
      "Coriander leaves-5 number",
      "Garlic powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-205",
    "name": "Strawberry , orange Vegetable salad",
    "cleanSearchName": "Strawberry , orange Vegetable salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 564,
    "calories": 112,
    "proteinGrams": 4,
    "carbsGrams": 21,
    "fatGrams": 0,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.16395,
    "ingredients": "ORANGE-250 gms; Lettuce Leaf-100 gms; CUCUMBER-0.5 gms; Lemon-15 gms; Common salt-7 gms; Black pepper-7 gms; strawberry-15 gms; Chat Masala-15 gms; Vegetable Broth-150 gms",
    "parsedIngredients": [
      "ORANGE-250 gms",
      "Lettuce Leaf-100 gms",
      "CUCUMBER-0.5 gms",
      "Lemon-15 gms",
      "Common salt-7 gms",
      "Black pepper-7 gms",
      "strawberry-15 gms",
      "Chat Masala-15 gms",
      "Vegetable Broth-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-206",
    "name": "Chicken Salad with Plums",
    "cleanSearchName": "Chicken Salad with Plums",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 317,
    "calories": 263,
    "proteinGrams": 25,
    "carbsGrams": 17,
    "fatGrams": 9,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.7253,
    "ingredients": "Chicken-100 gms; Lettuce Leaf-100 gms; Onion-60 gms; Common salt-7 gms; Black pepper-7 gms;Garlic-3 gms; Lemon-15 gms; Plum-25 gms",
    "parsedIngredients": [
      "Chicken-100 gms",
      "Lettuce Leaf-100 gms",
      "Onion-60 gms",
      "Common salt-7 gms",
      "Black pepper-7 gms",
      "Garlic-3 gms",
      "Lemon-15 gms",
      "Plum-25 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-207",
    "name": "Boiled Chicken Salad",
    "cleanSearchName": "Boiled Chicken Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 301,
    "calories": 357,
    "proteinGrams": 25,
    "carbsGrams": 8,
    "fatGrams": 24,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.8111,
    "ingredients": "Chicken-100 gms; Lettuce Leaf-50 gms; CUCUMBER-50 gms; Onion-30 gms; Capsicum-20 gms; Common salt-7 gms; Black pepper-7 gms; Lemon-10 gms;Parsley-10 gms;Garlic-2 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Chicken-100 gms",
      "Lettuce Leaf-50 gms",
      "CUCUMBER-50 gms",
      "Onion-30 gms",
      "Capsicum-20 gms",
      "Common salt-7 gms",
      "Black pepper-7 gms",
      "Lemon-10 gms",
      "Parsley-10 gms",
      "Garlic-2 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-208",
    "name": "Veg Soup",
    "cleanSearchName": "Veg Soup",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 171,
    "calories": 236,
    "proteinGrams": 5,
    "carbsGrams": 18,
    "fatGrams": 15,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.1842,
    "ingredients": "carrot-30 gms; Celery-20 gms; Capsicum-30 gms; Peas-15 gms; Onion-50 gms;Garlic-1 gms; Common salt-0.5 gms; Black pepper-0.5 gms; Olive oil-15 gms;",
    "parsedIngredients": [
      "carrot-30 gms",
      "Celery-20 gms",
      "Capsicum-30 gms",
      "Peas-15 gms",
      "Onion-50 gms",
      "Garlic-1 gms",
      "Common salt-0.5 gms",
      "Black pepper-0.5 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-209",
    "name": "Veg Shorba (No Dal)",
    "cleanSearchName": "Veg Shorba (No Dal)",
    "associativity": "4",
    "associativityCategory": "Raitas & Yoghurt Accompaniments",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 187,
    "calories": 184,
    "proteinGrams": 4,
    "carbsGrams": 13,
    "fatGrams": 11,
    "fiberGrams": 8,
    "carbonFootprintKgCO2e": 0.17395,
    "ingredients": "carrot-30 gms; Celery-20 gms; Beans-15 gms; Onion-50 gms; Tomato-20 gms; Ginger-10 gms; Cooking oil-10 gms; Cumin seeds-5 gms; Turmeric powder-5 gms; Common salt-7 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "carrot-30 gms",
      "Celery-20 gms",
      "Beans-15 gms",
      "Onion-50 gms",
      "Tomato-20 gms",
      "Ginger-10 gms",
      "Cooking oil-10 gms",
      "Cumin seeds-5 gms",
      "Turmeric powder-5 gms",
      "Common salt-7 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-210",
    "name": "Jowar Cheela",
    "cleanSearchName": "Jowar Cheela",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 590,
    "calories": 302,
    "proteinGrams": 4,
    "carbsGrams": 31,
    "fatGrams": 16,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.558,
    "ingredients": "Onion-250 gms; Common salt-15 gms; Roti-100 gms ; Cumin seeds-15 gms; Red chilli Powder-15 gms; Turmeric powder-15 gms; Tomato-150 gms; Capsicum-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Onion-250 gms",
      "Common salt-15 gms",
      "Roti-100 gms",
      "Cumin seeds-15 gms",
      "Red chilli Powder-15 gms",
      "Turmeric powder-15 gms",
      "Tomato-150 gms",
      "Capsicum-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": true,
    "duplicateNote": "Alternative portion or variation for \"Jowar Cheela\" (1 medium, 590g)"
  },
  {
    "id": "food-211",
    "name": "Non-vegetarian tacos",
    "cleanSearchName": "Non-vegetarian tacos",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 small",
    "totalWeightGrams": 502,
    "calories": 79,
    "proteinGrams": 1,
    "carbsGrams": 1,
    "fatGrams": 8,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 7.59895,
    "ingredients": "Mutton-300 gms; Common salt-7 gms; Cooking oil-15 gms; Onion-15 gms; Tomato-120 gms; Lettuce Leaf-15 gms; Coriander leaves-15 gms; Lemon-15 gms; Maize",
    "parsedIngredients": [
      "Mutton-300 gms",
      "Common salt-7 gms",
      "Cooking oil-15 gms",
      "Onion-15 gms",
      "Tomato-120 gms",
      "Lettuce Leaf-15 gms",
      "Coriander leaves-15 gms",
      "Lemon-15 gms",
      "Maize"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-212",
    "name": "Gravy Chicken",
    "cleanSearchName": "Gravy Chicken",
    "associativity": "8",
    "associativityCategory": "Gravy Curries, Soups & Stews",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Gravy"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 407,
    "calories": 237,
    "proteinGrams": 9,
    "carbsGrams": 8,
    "fatGrams": 17,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 1.5568,
    "ingredients": "Onion-20 gms; Tomato-120 gms; Chillies-2 gms; Cooking oil-10 gms; Cardamom-1 gms; Cloves-2gms; Turmeric powder-1 gms; Fenugreek leaves-1 gms; Coriander leaves-5 gms; Common salt-15 gms; Garlic powder-15 gms; Ginger powder-15 gms; Chicken-200 gms",
    "parsedIngredients": [
      "Onion-20 gms",
      "Tomato-120 gms",
      "Chillies-2 gms",
      "Cooking oil-10 gms",
      "Cardamom-1 gms",
      "Cloves-2gms",
      "Turmeric powder-1 gms",
      "Fenugreek leaves-1 gms",
      "Coriander leaves-5 gms",
      "Common salt-15 gms",
      "Garlic powder-15 gms",
      "Ginger powder-15 gms",
      "Chicken-200 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-213",
    "name": "Amaranth Flour Cheela",
    "cleanSearchName": "Amaranth Flour Cheela",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner",
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 193,
    "calories": 323,
    "proteinGrams": 10,
    "carbsGrams": 60,
    "fatGrams": 3,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.1395,
    "ingredients": "Onion-120 gms;Garlic-5 gms; Cooking oil-4 gms; Common salt-15 gms;  Turmeric powder-4 gms; Tomato-30 gms; Capsicum-15 gms",
    "parsedIngredients": [
      "Onion-120 gms",
      "Garlic-5 gms",
      "Cooking oil-4 gms",
      "Common salt-15 gms",
      "Turmeric powder-4 gms",
      "Tomato-30 gms",
      "Capsicum-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-214",
    "name": "Shredded Chicken Wrapped (wrap)",
    "cleanSearchName": "Shredded Chicken Wrapped (wrap)",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 650,
    "calories": 959,
    "proteinGrams": 75,
    "carbsGrams": 65,
    "fatGrams": 45,
    "fiberGrams": 16,
    "carbonFootprintKgCO2e": 1.605,
    "ingredients": "Chicken-180 gms; Tomato-180 gms; Onion-125 gms; Avocado-150 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Chicken-180 gms",
      "Tomato-180 gms",
      "Onion-125 gms",
      "Avocado-150 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-215",
    "name": "Masoor Dal",
    "cleanSearchName": "Masoor Dal",
    "associativity": "2,8",
    "associativityCategory": "Combination Curries (Dry & Gravy)",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry",
      "Gravy"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "5 medium katori",
    "totalWeightGrams": 679,
    "calories": 217,
    "proteinGrams": 11,
    "carbsGrams": 31,
    "fatGrams": 4,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.4182,
    "ingredients": "Gram dal-250 gms; ONION-120 gms; Tomato- 240 gms; Garlic-6 gms; Ginger-4 gms; Chillies-2 gms; Turmeric powder-7 gms; Cumin seeds-24 gms; Common salt-5 gms; Cooking oil-15 gms; Coriander seeds-1 gms; Chillies-1.5 gms",
    "parsedIngredients": [
      "Gram dal-250 gms",
      "ONION-120 gms",
      "Tomato- 240 gms",
      "Garlic-6 gms",
      "Ginger-4 gms",
      "Chillies-2 gms",
      "Turmeric powder-7 gms",
      "Cumin seeds-24 gms",
      "Common salt-5 gms",
      "Cooking oil-15 gms",
      "Coriander seeds-1 gms",
      "Chillies-1.5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-216",
    "name": "Mattar ki sabzi",
    "cleanSearchName": "Mattar ki sabzi",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 297,
    "calories": 305,
    "proteinGrams": 14,
    "carbsGrams": 16,
    "fatGrams": 18,
    "fiberGrams": 21,
    "carbonFootprintKgCO2e": 0.4689,
    "ingredients": "Onion-1 gms; Tomato-240 gms; Garlic-2 gms; Ginger-4 gms; Chillies-3 gms; Cumin seeds-7 gms; Turmeric powder-7 gms; Cooking oil-15 gms; Common salt-15 gms; Coriander leaves-3 gms",
    "parsedIngredients": [
      "Onion-1 gms",
      "Tomato-240 gms",
      "Garlic-2 gms",
      "Ginger-4 gms",
      "Chillies-3 gms",
      "Cumin seeds-7 gms",
      "Turmeric powder-7 gms",
      "Cooking oil-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-3 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-217",
    "name": "Apple and Sprouts Salad",
    "cleanSearchName": "Apple and Sprouts Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 424,
    "calories": 150,
    "proteinGrams": 6,
    "carbsGrams": 24,
    "fatGrams": 4,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.2225,
    "ingredients": "Apple-200 gms; Lemon-15 gms; Common salt-15 gms; Black pepper-15 gms; Moong dal-150 gms; Lettuce Leaf-20 gms; Walnut-9 gms",
    "parsedIngredients": [
      "Apple-200 gms",
      "Lemon-15 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Moong dal-150 gms",
      "Lettuce Leaf-20 gms",
      "Walnut-9 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-218",
    "name": "Caesar Salad",
    "cleanSearchName": "Caesar Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 145,
    "calories": 116,
    "proteinGrams": 6,
    "carbsGrams": 12,
    "fatGrams": 5,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.0905,
    "ingredients": "Lettuce Leaf-100 gms; Lemon-5 gms; Garlic-5 gms; HONEY-5 gms; Common salt-15 gms; Black pepper-15 gms",
    "parsedIngredients": [
      "Lettuce Leaf-100 gms",
      "Lemon-5 gms",
      "Garlic-5 gms",
      "HONEY-5 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-219",
    "name": "TOMATO & CUCUMBER SALAD",
    "cleanSearchName": "TOMATO & CUCUMBER SALAD",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 402,
    "calories": 232,
    "proteinGrams": 11,
    "carbsGrams": 12,
    "fatGrams": 16,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.40025,
    "ingredients": "Tomato-240 gms; CUCUMBER-100 gms; Lettuce Leaf-2 gms; PUMPKIN SEED-15 gms; Sunflower seeds-15 gms; Lemon-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Tomato-240 gms",
      "CUCUMBER-100 gms",
      "Lettuce Leaf-2 gms",
      "PUMPKIN SEED-15 gms",
      "Sunflower seeds-15 gms",
      "Lemon-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-220",
    "name": "POTATO SALAD",
    "cleanSearchName": "POTATO SALAD",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 492,
    "calories": 994,
    "proteinGrams": 45,
    "carbsGrams": 141,
    "fatGrams": 25,
    "fiberGrams": 84,
    "carbonFootprintKgCO2e": 1.01285,
    "ingredients": "POTATO-2 gms; PUMPKIN SEED-15 gms; Sunflower seeds-15 gms; Common salt-15 gms; Curd-150 gms; Black pepper-250 gms; Red chilli Powder-15 gms; Onion-15 gms; Garlic powder-15 gms",
    "parsedIngredients": [
      "POTATO-2 gms",
      "PUMPKIN SEED-15 gms",
      "Sunflower seeds-15 gms",
      "Common salt-15 gms",
      "Curd-150 gms",
      "Black pepper-250 gms",
      "Red chilli Powder-15 gms",
      "Onion-15 gms",
      "Garlic powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-221",
    "name": "Avocado Salad",
    "cleanSearchName": "Avocado Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 485,
    "calories": 492,
    "proteinGrams": 15,
    "carbsGrams": 15,
    "fatGrams": 42,
    "fiberGrams": 15,
    "carbonFootprintKgCO2e": 0.59225,
    "ingredients": "Tomato-240 gms; CUCUMBER ; Lettuce Leaf-20 gms; Avocado-150 gms ; PUMPKIN SEED-15 gms; Sunflower seeds-15 gms; Lemon-15 gms; Common salt-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Tomato-240 gms",
      "CUCUMBER",
      "Lettuce Leaf-20 gms",
      "Avocado-150 gms",
      "PUMPKIN SEED-15 gms",
      "Sunflower seeds-15 gms",
      "Lemon-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-222",
    "name": "Veg & FRUIT SALAD",
    "cleanSearchName": "Veg & FRUIT SALAD",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 599,
    "calories": 476,
    "proteinGrams": 15,
    "carbsGrams": 51,
    "fatGrams": 23,
    "fiberGrams": 14,
    "carbonFootprintKgCO2e": 0.46875,
    "ingredients": "Lettuce Leaf-20 gms; Capsicum-150 gms; carrot-60 gms; CUCUMBER-70 gms; Apple-200gms; Almond-5 gms; PUMPKIN SEED-15 gms; Sunflower seeds-15 gms; Plum-55 gms; Walnut-9 gms",
    "parsedIngredients": [
      "Lettuce Leaf-20 gms",
      "Capsicum-150 gms",
      "carrot-60 gms",
      "CUCUMBER-70 gms",
      "Apple-200gms",
      "Almond-5 gms",
      "PUMPKIN SEED-15 gms",
      "Sunflower seeds-15 gms",
      "Plum-55 gms",
      "Walnut-9 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-223",
    "name": "QUINOA SALAD",
    "cleanSearchName": "QUINOA SALAD",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 155,
    "calories": 244,
    "proteinGrams": 9,
    "carbsGrams": 40,
    "fatGrams": 3,
    "fiberGrams": 11,
    "carbonFootprintKgCO2e": 0.1133,
    "ingredients": "Quinoa-62 gms; carrot-1 gms; Zucchini-62 gms; CUCUMBER-0.5 medium; Lemon-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Quinoa-62 gms",
      "carrot-1 gms",
      "Zucchini-62 gms",
      "CUCUMBER-0.5 medium",
      "Lemon-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-224",
    "name": "MILLETS SALAD",
    "cleanSearchName": "MILLETS SALAD",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 cup",
    "totalWeightGrams": 465,
    "calories": 71,
    "proteinGrams": 2,
    "carbsGrams": 14,
    "fatGrams": 1,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.0465,
    "ingredients": "carrot-10 gms; Zucchini-25 gms; CUCUMBER-100 gms; Lemon-15 gms; Common salt-15 gms; Millets-300 gms",
    "parsedIngredients": [
      "carrot-10 gms",
      "Zucchini-25 gms",
      "CUCUMBER-100 gms",
      "Lemon-15 gms",
      "Common salt-15 gms",
      "Millets-300 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-225",
    "name": "Soya wheat bran Roti (50% wheat bran & 50% soya flour)",
    "cleanSearchName": "Soya wheat bran Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 305,
    "calories": 503,
    "proteinGrams": 30,
    "carbsGrams": 66,
    "fatGrams": 12,
    "fiberGrams": 15,
    "carbonFootprintKgCO2e": 0.1065,
    "ingredients": "Soya flour-5 tablespoon; Common salt-15 gms; Cumin seeds-15 gms; Turmeric powder-15 gms; Warm Water-200 gms; Wheat Flour-Atta)-60 gms)",
    "parsedIngredients": [
      "Soya flour-5 tablespoon",
      "Common salt-15 gms",
      "Cumin seeds-15 gms",
      "Turmeric powder-15 gms",
      "Warm Water-200 gms",
      "Wheat Flour-Atta)-60 gms)"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-226",
    "name": "Risotto With Additional Dressing(Corn)",
    "cleanSearchName": "Risotto With Additional Dressing(Corn)",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 149,
    "calories": 83,
    "proteinGrams": 3,
    "carbsGrams": 15,
    "fatGrams": 0,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.148,
    "ingredients": "Babycorn-15 gms; Onion-62 gms;Garlic-7 gms; MUSHROOM-15 gms; Peas-15 gms; Common salt-15 gms; Black pepper-15 gms;Parsley-5 gms",
    "parsedIngredients": [
      "Babycorn-15 gms",
      "Onion-62 gms",
      "Garlic-7 gms",
      "MUSHROOM-15 gms",
      "Peas-15 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Parsley-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-227",
    "name": "Herbal Tea",
    "cleanSearchName": "Herbal Tea",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "East"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 cup",
    "totalWeightGrams": 24,
    "calories": 0,
    "proteinGrams": 0,
    "carbsGrams": 0,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.072,
    "ingredients": "Tea-24 gms",
    "parsedIngredients": [
      "Tea-24 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-228",
    "name": "Non-veg SOUP",
    "cleanSearchName": "Non-veg SOUP",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 649,
    "calories": 470,
    "proteinGrams": 30,
    "carbsGrams": 54,
    "fatGrams": 12,
    "fiberGrams": 37,
    "carbonFootprintKgCO2e": 1.20765,
    "ingredients": "carrot-60 gms; Onion-120 gms;Garlic-4 gms; Ginger-5 gms; Peas-125 gms; Beans-125 gms; Black pepper-62 gms; Cooking oil-15 gms; Common salt-15 gms; Coriander leaves-4 gms; Chicken-100 gms; Cumin seeds-7 gms; Coriander seeds-7 gms",
    "parsedIngredients": [
      "carrot-60 gms",
      "Onion-120 gms",
      "Garlic-4 gms",
      "Ginger-5 gms",
      "Peas-125 gms",
      "Beans-125 gms",
      "Black pepper-62 gms",
      "Cooking oil-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-4 gms",
      "Chicken-100 gms",
      "Cumin seeds-7 gms",
      "Coriander seeds-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-229",
    "name": "Oats Poha",
    "cleanSearchName": "Oats Poha",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 small bowl",
    "totalWeightGrams": 395,
    "calories": 255,
    "proteinGrams": 9,
    "carbsGrams": 38,
    "fatGrams": 7,
    "fiberGrams": 8,
    "carbonFootprintKgCO2e": 0.471,
    "ingredients": "Chillies-15 gms; ; Cumin seeds-15 gms; Turmeric powder-15 gms; Common salt-15 gms; Coriander leaves-15 gms; Oats-150 gms;Onion-125 gms; Red chilli Powder-15 gms; Lemon-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Chillies-15 gms",
      "Cumin seeds-15 gms",
      "Turmeric powder-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-15 gms",
      "Oats-150 gms",
      "Onion-125 gms",
      "Red chilli Powder-15 gms",
      "Lemon-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-230",
    "name": "Non-veg Platter (Chicken)",
    "cleanSearchName": "Non-veg Platter Chicken",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "3 number",
    "totalWeightGrams": 701,
    "calories": 73,
    "proteinGrams": 7,
    "carbsGrams": 5,
    "fatGrams": 3,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.7068,
    "ingredients": "Common salt-15 gms; Black pepper-15 gms; Spinach-250 gms; Lettuce Leaf-250 gms; CUCUMBER-70 gms; VINEGAR-15 gms; Chicken-75 gms; Chillies-7 gms; Garlic-4 gms",
    "parsedIngredients": [
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Spinach-250 gms",
      "Lettuce Leaf-250 gms",
      "CUCUMBER-70 gms",
      "VINEGAR-15 gms",
      "Chicken-75 gms",
      "Chillies-7 gms",
      "Garlic-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-231",
    "name": "Multigrain Paratha",
    "cleanSearchName": "Multigrain Paratha",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 375,
    "calories": 448,
    "proteinGrams": 16,
    "carbsGrams": 74,
    "fatGrams": 10,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.30575,
    "ingredients": "Wheat-62 gms; Common salt-15 gms; Cooking oil-15 gms; Cumin Powder-4 gms; Oats Flour-200 gms; TURMERIC-4 gms; Besan-75 gms",
    "parsedIngredients": [
      "Wheat-62 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms",
      "Cumin Powder-4 gms",
      "Oats Flour-200 gms",
      "TURMERIC-4 gms",
      "Besan-75 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-232",
    "name": "Methi Thepla",
    "cleanSearchName": "Methi Thepla",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 449,
    "calories": 76,
    "proteinGrams": 33,
    "carbsGrams": 174,
    "fatGrams": 10,
    "fiberGrams": 14,
    "carbonFootprintKgCO2e": 0.2802,
    "ingredients": "Wheat-250 gms; Fenugreek leaves-125 gms; Turmeric powder-7 gms; Common salt-7 gms; Cooking oil-15 gms; Red chilli Powder-15 gms; Coriander Powder-15 gms; Cumin Powder-15 gms",
    "parsedIngredients": [
      "Wheat-250 gms",
      "Fenugreek leaves-125 gms",
      "Turmeric powder-7 gms",
      "Common salt-7 gms",
      "Cooking oil-15 gms",
      "Red chilli Powder-15 gms",
      "Coriander Powder-15 gms",
      "Cumin Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-233",
    "name": "Baba Ganoush with Hummus",
    "cleanSearchName": "Baba Ganoush with Hummus",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 305,
    "calories": 243,
    "proteinGrams": 7,
    "carbsGrams": 11,
    "fatGrams": 17,
    "fiberGrams": 13,
    "carbonFootprintKgCO2e": 0.2568,
    "ingredients": "Brinjal-200 gms; Garlic-2 gms; Lemon-30 gms; Cooking oil-15 gms; Common salt-15 gms; Black pepper-15 gms;Parsley-4 gms; Cumin seeds -24 gms",
    "parsedIngredients": [
      "Brinjal-200 gms",
      "Garlic-2 gms",
      "Lemon-30 gms",
      "Cooking oil-15 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Parsley-4 gms",
      "Cumin seeds -24 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-234",
    "name": "Aloo Curry",
    "cleanSearchName": "Aloo Curry",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 482,
    "calories": 490,
    "proteinGrams": 8,
    "carbsGrams": 75,
    "fatGrams": 16,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.4747,
    "ingredients": "POTATO-200 gms; Onion-75 gms; Tomato-120 gms; Coriander leaves-15 gms; Turmeric powder-15 gms; Fenugreek leaves-0.5 gms; Common salt-7 gms; Cooking oil-15 gms; Chillies-15 gms; Coriander seeds-15 gms",
    "parsedIngredients": [
      "POTATO-200 gms",
      "Onion-75 gms",
      "Tomato-120 gms",
      "Coriander leaves-15 gms",
      "Turmeric powder-15 gms",
      "Fenugreek leaves-0.5 gms",
      "Common salt-7 gms",
      "Cooking oil-15 gms",
      "Chillies-15 gms",
      "Coriander seeds-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-235",
    "name": "Kale Chips",
    "cleanSearchName": "Kale Chips",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "3 number",
    "totalWeightGrams": 180,
    "calories": 39,
    "proteinGrams": 2,
    "carbsGrams": 5,
    "fatGrams": 2,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.1665,
    "ingredients": "Cooking oil-15 gms; Common salt-15 gms; Kale-150 gms",
    "parsedIngredients": [
      "Cooking oil-15 gms",
      "Common salt-15 gms",
      "Kale-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-236",
    "name": "Jau Wrap",
    "cleanSearchName": "Jau Wrap",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 number",
    "totalWeightGrams": 392,
    "calories": 591,
    "proteinGrams": 17,
    "carbsGrams": 99,
    "fatGrams": 12,
    "fiberGrams": 21,
    "carbonFootprintKgCO2e": 0.395,
    "ingredients": "Onion-75 gms; Capsicum-10 gms; carrot-10 gms; Common salt-7 gms; Cooking oil-7 gms; CABBAGE-75 gms; Turmeric powder-7 gms; Cumin seeds-7 gms; Besan-30 gms; Barley Flour-150 gms; CORIANDER LEAVES-7 gms; Coriander Powder-7 gms",
    "parsedIngredients": [
      "Onion-75 gms",
      "Capsicum-10 gms",
      "carrot-10 gms",
      "Common salt-7 gms",
      "Cooking oil-7 gms",
      "CABBAGE-75 gms",
      "Turmeric powder-7 gms",
      "Cumin seeds-7 gms",
      "Besan-30 gms",
      "Barley Flour-150 gms",
      "CORIANDER LEAVES-7 gms",
      "Coriander Powder-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-237",
    "name": "JAWAR WRAP",
    "cleanSearchName": "JAWAR WRAP",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "3 number",
    "totalWeightGrams": 80,
    "calories": 112,
    "proteinGrams": 3,
    "carbsGrams": 18,
    "fatGrams": 0,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.0636,
    "ingredients": "Onion-15 gms; Capsicum-2 gms; carrot-1 gms; Common salt-15 gms; Cooking oil-7 gms; Jowar-40 gms",
    "parsedIngredients": [
      "Onion-15 gms",
      "Capsicum-2 gms",
      "carrot-1 gms",
      "Common salt-15 gms",
      "Cooking oil-7 gms",
      "Jowar-40 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-238",
    "name": "GRILLED PINEAPPLE/ APPLE",
    "cleanSearchName": "GRILLED PINEAPPLE/ APPLE",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 number",
    "totalWeightGrams": 116,
    "calories": 7,
    "proteinGrams": 0,
    "carbsGrams": 2,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.1242,
    "ingredients": "Pineapple-75 gms; HONEY-15 gms; Cinnamon-15 gms; Common salt-7 gms; Ginger-4 gms",
    "parsedIngredients": [
      "Pineapple-75 gms",
      "HONEY-15 gms",
      "Cinnamon-15 gms",
      "Common salt-7 gms",
      "Ginger-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-239",
    "name": "Mixed Veg Soup",
    "cleanSearchName": "Mixed Veg Soup",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 871,
    "calories": 130,
    "proteinGrams": 5,
    "carbsGrams": 24,
    "fatGrams": 0,
    "fiberGrams": 8,
    "carbonFootprintKgCO2e": 0.5793,
    "ingredients": "Onion-62 gms;Garlic-30 gms; carrot-150 gms; Celery-150 gms; Cabbage-150 gms; Beans-150 gms; Tomato-150 gms; Peas-15 gms; Common salt-7 gms; Black pepper-7 gms",
    "parsedIngredients": [
      "Onion-62 gms",
      "Garlic-30 gms",
      "carrot-150 gms",
      "Celery-150 gms",
      "Cabbage-150 gms",
      "Beans-150 gms",
      "Tomato-150 gms",
      "Peas-15 gms",
      "Common salt-7 gms",
      "Black pepper-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-240",
    "name": "Veg Clear Soup",
    "cleanSearchName": "Veg Clear Soup",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 1154,
    "calories": 179,
    "proteinGrams": 6,
    "carbsGrams": 18,
    "fatGrams": 10,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 1.23665,
    "ingredients": "carrot-150 gms; Celery-150 gms; Onion-150 gms; Beans-150 gms; Peas-15 gms; MUSHROOM-150 gms; Capsicum-150 gms; Garlic-7 gms; soya sauce-15 gms; Parsley-15 gms; Common salt-15 gms; Black pepper-7 gms; Onion-150 gms; Olive oil-15 gms; Sesame Oil-15 gms",
    "parsedIngredients": [
      "carrot-150 gms",
      "Celery-150 gms",
      "Onion-150 gms",
      "Beans-150 gms",
      "Peas-15 gms",
      "MUSHROOM-150 gms",
      "Capsicum-150 gms",
      "Garlic-7 gms",
      "soya sauce-15 gms",
      "Parsley-15 gms",
      "Common salt-15 gms",
      "Black pepper-7 gms",
      "Onion-150 gms",
      "Olive oil-15 gms",
      "Sesame Oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-241",
    "name": "Soupy Noodles",
    "cleanSearchName": "Soupy Noodles",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 394,
    "calories": 96,
    "proteinGrams": 5,
    "carbsGrams": 18,
    "fatGrams": 0,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.2848,
    "ingredients": "carrot-100 gms; Onion-75 gms; Zucchini-50 gms; Peas-25 gms; Cabbage-75 gms; MUSHROOM-50 gms;Garlic-4 gms; VINEGAR-15 gms",
    "parsedIngredients": [
      "carrot-100 gms",
      "Onion-75 gms",
      "Zucchini-50 gms",
      "Peas-25 gms",
      "Cabbage-75 gms",
      "MUSHROOM-50 gms",
      "Garlic-4 gms",
      "VINEGAR-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-242",
    "name": "Spinach Soup",
    "cleanSearchName": "Spinach Soup",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 638,
    "calories": 98,
    "proteinGrams": 3,
    "carbsGrams": 16,
    "fatGrams": 0,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.2648,
    "ingredients": "Spinach-62 gms; Onion-150 gms; Garlic-15 gms; POTATO-75 gms; Celery-150 gms; carrot-150 gms; Common salt-7 gms; Black pepper-7 gms; Lemon-15 gms; Cumin seeds-7 gms",
    "parsedIngredients": [
      "Spinach-62 gms",
      "Onion-150 gms",
      "Garlic-15 gms",
      "POTATO-75 gms",
      "Celery-150 gms",
      "carrot-150 gms",
      "Common salt-7 gms",
      "Black pepper-7 gms",
      "Lemon-15 gms",
      "Cumin seeds-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-243",
    "name": "Sweet Corn Kernels",
    "cleanSearchName": "Sweet Corn Kernels",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 223,
    "calories": 96,
    "proteinGrams": 2,
    "carbsGrams": 17,
    "fatGrams": 0,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.1459,
    "ingredients": "Onion-75 gms; Garlic-15 gms; carrot-75 gms; Peas-15 gms; Common salt-7 gms; Black pepper-7 gms; Lemon-15 gms;Parsley-7 gms; Cumin seeds-7 gms",
    "parsedIngredients": [
      "Onion-75 gms",
      "Garlic-15 gms",
      "carrot-75 gms",
      "Peas-15 gms",
      "Common salt-7 gms",
      "Black pepper-7 gms",
      "Lemon-15 gms",
      "Parsley-7 gms",
      "Cumin seeds-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-244",
    "name": "Vegetable Oats Soup",
    "cleanSearchName": "Vegetable Oats Soup",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 276,
    "calories": 194,
    "proteinGrams": 6,
    "carbsGrams": 35,
    "fatGrams": 2,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.2076,
    "ingredients": "Onion-75 gms; Garlic-2 gms; carrot-30 gms; Celery-25 gms; Capsicum-50 gms; Zucchini-50 gms; OATMEAL-30 gms; Common salt-7 gms; Black pepper-7 gms",
    "parsedIngredients": [
      "Onion-75 gms",
      "Garlic-2 gms",
      "carrot-30 gms",
      "Celery-25 gms",
      "Capsicum-50 gms",
      "Zucchini-50 gms",
      "OATMEAL-30 gms",
      "Common salt-7 gms",
      "Black pepper-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-245",
    "name": "Green Salad",
    "cleanSearchName": "Green Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 283,
    "calories": 45,
    "proteinGrams": 3,
    "carbsGrams": 7,
    "fatGrams": 0,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.10975,
    "ingredients": "Lettuce Leaf-75 gms; Spinach-75 gms; Cabbage-62 gms; CUCUMBER-50 gms; VINEGAR-7 gms; Common salt-7 gms; Black pepper-7 gms",
    "parsedIngredients": [
      "Lettuce Leaf-75 gms",
      "Spinach-75 gms",
      "Cabbage-62 gms",
      "CUCUMBER-50 gms",
      "VINEGAR-7 gms",
      "Common salt-7 gms",
      "Black pepper-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-246",
    "name": "Green Papaya Salad",
    "cleanSearchName": "Green Papaya Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 432,
    "calories": 82,
    "proteinGrams": 3,
    "carbsGrams": 18,
    "fatGrams": 0,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.3259,
    "ingredients": "PAPAYA-250 gms; Beans-100 gms; carrot-60 gms;Garlic-7 gms; Lemon-15 gms",
    "parsedIngredients": [
      "PAPAYA-250 gms",
      "Beans-100 gms",
      "carrot-60 gms",
      "Garlic-7 gms",
      "Lemon-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-247",
    "name": "Quinoa Soup",
    "cleanSearchName": "Quinoa Soup",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 237,
    "calories": 255,
    "proteinGrams": 7,
    "carbsGrams": 34,
    "fatGrams": 9,
    "fiberGrams": 8,
    "carbonFootprintKgCO2e": 0.2928,
    "ingredients": "Quinoa-62 gms; carrot-50 gms; Onion-75 gms; Garlic-7 gms; Common salt-4 gms; Olive oil-24 gms; Celery-15 gms",
    "parsedIngredients": [
      "Quinoa-62 gms",
      "carrot-50 gms",
      "Onion-75 gms",
      "Garlic-7 gms",
      "Common salt-4 gms",
      "Olive oil-24 gms",
      "Celery-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-248",
    "name": "Pasta salad",
    "cleanSearchName": "Pasta salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 606,
    "calories": 29,
    "proteinGrams": 0,
    "carbsGrams": 5,
    "fatGrams": 0,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.3914,
    "ingredients": "CUCUMBER-150 gms; Capsicum-200 gms;Parsley-7 gms;Garlic-15 gms; Common salt-7 gms; Black pepper-7 gms, Pasta-150 gms, Tomato-70 gms",
    "parsedIngredients": [
      "CUCUMBER-150 gms",
      "Capsicum-200 gms",
      "Parsley-7 gms",
      "Garlic-15 gms",
      "Common salt-7 gms",
      "Black pepper-7 gms, Pasta-150 gms, Tomato-70 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-249",
    "name": "Pomegranate, Avocado, Grapes & Zucchini salad",
    "cleanSearchName": "Pomegranate, Avocado, Grapes & Zucchini salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 483,
    "calories": 167,
    "proteinGrams": 4,
    "carbsGrams": 18,
    "fatGrams": 7,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.3788,
    "ingredients": "Zucchini-62 gms; Grapes-62 gms; Avocado-150 gms; POMEGRANATE-150 gms;Mint leaves-15 gms; Lemon-15 gms; Common salt-7 gms; Black pepper-7 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Zucchini-62 gms",
      "Grapes-62 gms",
      "Avocado-150 gms",
      "POMEGRANATE-150 gms",
      "Mint leaves-15 gms",
      "Lemon-15 gms",
      "Common salt-7 gms",
      "Black pepper-7 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-250",
    "name": "Quinoa and chicken salad",
    "cleanSearchName": "Quinoa and chicken salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 516,
    "calories": 481,
    "proteinGrams": 29,
    "carbsGrams": 59,
    "fatGrams": 12,
    "fiberGrams": 18,
    "carbonFootprintKgCO2e": 0.9121,
    "ingredients": "Quinoa-100 gms; Chicken-70 gms; Common salt-7 gms; Black pepper-7 gms; Capsicum-150 gms; CUCUMBER-150 gms; Parsley-15 gms; Lemon-15 gms;Garlic-2 gms",
    "parsedIngredients": [
      "Quinoa-100 gms",
      "Chicken-70 gms",
      "Common salt-7 gms",
      "Black pepper-7 gms",
      "Capsicum-150 gms",
      "CUCUMBER-150 gms",
      "Parsley-15 gms",
      "Lemon-15 gms",
      "Garlic-2 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-251",
    "name": "Methi matar Vegetable",
    "cleanSearchName": "Methi matar Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 489,
    "calories": 210,
    "proteinGrams": 11,
    "carbsGrams": 20,
    "fatGrams": 7,
    "fiberGrams": 13,
    "carbonFootprintKgCO2e": 0.4845,
    "ingredients": "Fenugreek leaves-150 gms; Peas-75 gms; Tomato-120 gms; Onion-75 gms; Chillies-7 gms; Cumin powder-4 gms; Mustard seeds-4 gms; Turmeric powder-4 gms; Common salt-7 gms; Cooking oil-15 gms; Garlic-7 gms; Ginger-7 gms; Chillies-7 gms; Coriander seeds-7 gms",
    "parsedIngredients": [
      "Fenugreek leaves-150 gms",
      "Peas-75 gms",
      "Tomato-120 gms",
      "Onion-75 gms",
      "Chillies-7 gms",
      "Cumin powder-4 gms",
      "Mustard seeds-4 gms",
      "Turmeric powder-4 gms",
      "Common salt-7 gms",
      "Cooking oil-15 gms",
      "Garlic-7 gms",
      "Ginger-7 gms",
      "Chillies-7 gms",
      "Coriander seeds-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-252",
    "name": "Mooli Methi Vegetable",
    "cleanSearchName": "Mooli Methi Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 680,
    "calories": 196,
    "proteinGrams": 10,
    "carbsGrams": 16,
    "fatGrams": 7,
    "fiberGrams": 16,
    "carbonFootprintKgCO2e": 0.4531,
    "ingredients": "Radish-150 gms; Fenugreek leaves-300 gms; Tomato-75 gms; Onion-75 gms; Chillies-7 gms; Cumin powder-4 gms; Turmeric powder-4 gms; Common salt-7 gms; Cooking oil-15 gms; Coriander leaves-15 gms; Garlic-7 gms; Ginger-7 gms; Chillies-7 gms; Coriander seeds-7 gms",
    "parsedIngredients": [
      "Radish-150 gms",
      "Fenugreek leaves-300 gms",
      "Tomato-75 gms",
      "Onion-75 gms",
      "Chillies-7 gms",
      "Cumin powder-4 gms",
      "Turmeric powder-4 gms",
      "Common salt-7 gms",
      "Cooking oil-15 gms",
      "Coriander leaves-15 gms",
      "Garlic-7 gms",
      "Ginger-7 gms",
      "Chillies-7 gms",
      "Coriander seeds-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-253",
    "name": "Palak aloo Vegetable",
    "cleanSearchName": "Palak aloo Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 216,
    "calories": 246,
    "proteinGrams": 12,
    "carbsGrams": 30,
    "fatGrams": 7,
    "fiberGrams": 12,
    "carbonFootprintKgCO2e": 0.1097,
    "ingredients": "Spinach-1.5 cup; POTATO ; Tomato-120 gms)-1 gms; Onion-50 gms;; Cumin seeds-4 gms; Turmeric powder-4 gms; Common salt-7 gms; Cooking oil-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Spinach-1.5 cup",
      "POTATO",
      "Tomato-120 gms)-1 gms",
      "Onion-50 gms",
      "Cumin seeds-4 gms",
      "Turmeric powder-4 gms",
      "Common salt-7 gms",
      "Cooking oil-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-254",
    "name": "Mix Vegetable",
    "cleanSearchName": "Mix Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 203,
    "calories": 99,
    "proteinGrams": 2,
    "carbsGrams": 7,
    "fatGrams": 5,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.21325,
    "ingredients": "Cauliflower-15 gms; carrot-15 gms; Beans-15 gms; Cabbage-15 gms; Capsicum-15 gms; Peas-10 gms; Tomato-35 gms; Onion-15 gms; Chillies-0.25 gms; Cumin seeds-4 gms; Turmeric powder-4 gms; Common salt-0.5 gms; Cooking oil-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Cauliflower-15 gms",
      "carrot-15 gms",
      "Beans-15 gms",
      "Cabbage-15 gms",
      "Capsicum-15 gms",
      "Peas-10 gms",
      "Tomato-35 gms",
      "Onion-15 gms",
      "Chillies-0.25 gms",
      "Cumin seeds-4 gms",
      "Turmeric powder-4 gms",
      "Common salt-0.5 gms",
      "Cooking oil-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-255",
    "name": "Dal Cheela",
    "cleanSearchName": "Dal Cheela",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 234,
    "calories": 512,
    "proteinGrams": 31,
    "carbsGrams": 76,
    "fatGrams": 8,
    "fiberGrams": 15,
    "carbonFootprintKgCO2e": 0.24475,
    "ingredients": "Gram dal-125 gms; Onion-15 gms; Capsicum-15 gms; carrot-15 gms; Coriander leaves-15 gms; Turmeric powder-7 gms; Cumin seeds-7 gms; Common salt-15 gms; Cooking oil-15 gms; Ginger-0.5 gms",
    "parsedIngredients": [
      "Gram dal-125 gms",
      "Onion-15 gms",
      "Capsicum-15 gms",
      "carrot-15 gms",
      "Coriander leaves-15 gms",
      "Turmeric powder-7 gms",
      "Cumin seeds-7 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms",
      "Ginger-0.5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-256",
    "name": "Dhokla",
    "cleanSearchName": "Dhokla",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 number",
    "totalWeightGrams": 167,
    "calories": 209,
    "proteinGrams": 10,
    "carbsGrams": 31,
    "fatGrams": 4,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.1119,
    "ingredients": "Bread-2- gms; Avocado-60 gms;Garlic-7 gms; CUCUMBER-30 gms; Tomato-30 gms; Lemon-0.25 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Bread-2- gms",
      "Avocado-60 gms",
      "Garlic-7 gms",
      "CUCUMBER-30 gms",
      "Tomato-30 gms",
      "Lemon-0.25 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-257",
    "name": "SEEKH KEBAB (CHICKEN)",
    "cleanSearchName": "SEEKH KEBAB Chicken",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 number",
    "totalWeightGrams": 381,
    "calories": 248,
    "proteinGrams": 24,
    "carbsGrams": 6,
    "fatGrams": 14,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 1.0117,
    "ingredients": "Lemon-15 gms; Cooking oil-15 gms; Common salt-7 gms; Coriander Leaves-30 gms; Ginger powder-15 gms; Garlic powder-15 gms; Red chilli Powder-24 gms;Onion-125 gms; Cumin Powder-15 gms; Coriander Powder-15 gms; Garam Masala-15 gms; Chicken-90 gms",
    "parsedIngredients": [
      "Lemon-15 gms",
      "Cooking oil-15 gms",
      "Common salt-7 gms",
      "Coriander Leaves-30 gms",
      "Ginger powder-15 gms",
      "Garlic powder-15 gms",
      "Red chilli Powder-24 gms",
      "Onion-125 gms",
      "Cumin Powder-15 gms",
      "Coriander Powder-15 gms",
      "Garam Masala-15 gms",
      "Chicken-90 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-258",
    "name": "SAMAKHIA RICE",
    "cleanSearchName": "SAMAKHIA RICE",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 172,
    "calories": 263,
    "proteinGrams": 4,
    "carbsGrams": 38,
    "fatGrams": 10,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.5305,
    "ingredients": "Cumin seeds-15 gms; Cooking oil-7 gms; Samakhia Rice-150 gms",
    "parsedIngredients": [
      "Cumin seeds-15 gms",
      "Cooking oil-7 gms",
      "Samakhia Rice-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-259",
    "name": "Spring Roll",
    "cleanSearchName": "Spring Roll",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 number",
    "totalWeightGrams": 387,
    "calories": 125,
    "proteinGrams": 3,
    "carbsGrams": 20,
    "fatGrams": 4,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.3492,
    "ingredients": "carrot-75 gms; CABBAGE-125 gms; Capsicum-75 gms;Onion-60 gms; Ginger-15 gms; Rice Paper-8 gms; Black Pepper-7 gms; Common salt-7 gms; Cooking oil-15 gms",
    "parsedIngredients": [
      "carrot-75 gms",
      "CABBAGE-125 gms",
      "Capsicum-75 gms",
      "Onion-60 gms",
      "Ginger-15 gms",
      "Rice Paper-8 gms",
      "Black Pepper-7 gms",
      "Common salt-7 gms",
      "Cooking oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-260",
    "name": "Grilled Vegetables",
    "cleanSearchName": "Grilled Vegetables",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 76,
    "calories": 18,
    "proteinGrams": 1,
    "carbsGrams": 2,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.0064,
    "ingredients": "Capsicum-0.5 gms; Onion-0.5 gms; MUSHROOM-2 gms; Zucchini-0.5 gms; Tomato-0.5 gms; Common salt-4 gms; Black pepper-0.25 gms; Lemon-0.25 gms",
    "parsedIngredients": [
      "Capsicum-0.5 gms",
      "Onion-0.5 gms",
      "MUSHROOM-2 gms",
      "Zucchini-0.5 gms",
      "Tomato-0.5 gms",
      "Common salt-4 gms",
      "Black pepper-0.25 gms",
      "Lemon-0.25 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-261",
    "name": "Grilled Fruits",
    "cleanSearchName": "Grilled Fruits",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 115,
    "calories": 52,
    "proteinGrams": 0,
    "carbsGrams": 13,
    "fatGrams": 0,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.093,
    "ingredients": "PEACHES-5 gms; Watermelon-25 gms; Plum-15 gms; Pear-30 gms; Pineapple-40 gms",
    "parsedIngredients": [
      "PEACHES-5 gms",
      "Watermelon-25 gms",
      "Plum-15 gms",
      "Pear-30 gms",
      "Pineapple-40 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-262",
    "name": "Amla water",
    "cleanSearchName": "Amla water",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 11,
    "calories": 16,
    "proteinGrams": 0,
    "carbsGrams": 3,
    "fatGrams": 0,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.0024,
    "ingredients": "Amla-1 gms; Black pepper-1.5 gms;Mint leaves-5 gms",
    "parsedIngredients": [
      "Amla-1 gms",
      "Black pepper-1.5 gms",
      "Mint leaves-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-263",
    "name": "Prune and Imlie (Tamarind) Water",
    "cleanSearchName": "Prune and Imlie (Tamarind) Water",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 3,
    "calories": 44,
    "proteinGrams": 0,
    "carbsGrams": 10,
    "fatGrams": 0,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.00375,
    "ingredients": "PRUNES-2 gms; TAMARIND-1 gms",
    "parsedIngredients": [
      "PRUNES-2 gms",
      "TAMARIND-1 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-264",
    "name": "Imlie & Prune Water with Mishri",
    "cleanSearchName": "Imlie & Prune Water with Mishri",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 glass",
    "totalWeightGrams": 102,
    "calories": 100,
    "proteinGrams": 2,
    "carbsGrams": 21,
    "fatGrams": 1,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.1655,
    "ingredients": "PRUNES-2 gms; Tamarind-50 gms; Mishri-50 gms",
    "parsedIngredients": [
      "PRUNES-2 gms",
      "Tamarind-50 gms",
      "Mishri-50 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-265",
    "name": "Jau Roti (100%)",
    "cleanSearchName": "Jau Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 medium",
    "totalWeightGrams": 150,
    "calories": 79,
    "proteinGrams": 3,
    "carbsGrams": 15,
    "fatGrams": 0,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.165,
    "ingredients": "Barley-150 gms",
    "parsedIngredients": [
      "Barley-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-266",
    "name": "Kodo Millet Khichdi",
    "cleanSearchName": "Kodo Millet Khichdi",
    "associativity": "3",
    "associativityCategory": "Rice & Millet Dishes",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 small bowl",
    "totalWeightGrams": 469,
    "calories": 253,
    "proteinGrams": 6,
    "carbsGrams": 43,
    "fatGrams": 6,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.659,
    "ingredients": "carrot-75 gms; Capsicum-150 gms; Onion-75 gms; Peas-50 gms; Cumin seeds-15 gms; Common salt-15 gms; Cooking oil-15 gms; Coriander Leaves-15 gms; Kodo Millet-200 gm; Turmeric powder-7 gms; Coriander Powder-7 gms; Ginger powder-15 gms; Garlic powder-15 gms; Chillies-15 gms",
    "parsedIngredients": [
      "carrot-75 gms",
      "Capsicum-150 gms",
      "Onion-75 gms",
      "Peas-50 gms",
      "Cumin seeds-15 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms",
      "Coriander Leaves-15 gms",
      "Kodo Millet-200 gm",
      "Turmeric powder-7 gms",
      "Coriander Powder-7 gms",
      "Ginger powder-15 gms",
      "Garlic powder-15 gms",
      "Chillies-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-267",
    "name": "Chicken Curry",
    "cleanSearchName": "Chicken Curry",
    "associativity": "2,8",
    "associativityCategory": "Combination Curries (Dry & Gravy)",
    "region": [
      "North",
      "South",
      "East"
    ],
    "mealTypes": [
      "Dry Curry",
      "Gravy"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 medium bowl",
    "totalWeightGrams": 775,
    "calories": 285,
    "proteinGrams": 29,
    "carbsGrams": 8,
    "fatGrams": 15,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 2.8485,
    "ingredients": "Cooking oil-15 gms; Common salt-15 gms; Chicken-350 gms;Onion-120 gms; Tomato-140 gms; Cumin seeds-15 gms; Cinnamon-15 gms; cardamom powder-15 gms; Garlic powder-15 gms; Coriander Powder-15 gms; Garam Masala-15 gms; Red chilli Powder-15 gms; Coriander seeds-15 gms; Ginger powder-15 gms",
    "parsedIngredients": [
      "Cooking oil-15 gms",
      "Common salt-15 gms",
      "Chicken-350 gms",
      "Onion-120 gms",
      "Tomato-140 gms",
      "Cumin seeds-15 gms",
      "Cinnamon-15 gms",
      "cardamom powder-15 gms",
      "Garlic powder-15 gms",
      "Coriander Powder-15 gms",
      "Garam Masala-15 gms",
      "Red chilli Powder-15 gms",
      "Coriander seeds-15 gms",
      "Ginger powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-268",
    "name": "Chicken keema",
    "cleanSearchName": "Chicken keema",
    "associativity": "2,8",
    "associativityCategory": "Combination Curries (Dry & Gravy)",
    "region": [
      "North",
      "South",
      "East"
    ],
    "mealTypes": [
      "Dry Curry",
      "Gravy"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 small bowl",
    "totalWeightGrams": 601,
    "calories": 249,
    "proteinGrams": 26,
    "carbsGrams": 8,
    "fatGrams": 13,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 1.8555,
    "ingredients": "Chillies-7 gms; Cooking oil-15 gms; Cumin seeds-7 gms; Turmeric powder-7 gms; Common salt-15 gms;Onion-120 gms; Tomato-140 gms; Garlic powder-15 gms; Coriander Leaves-15 gms; Ginger powder-15 gms; Chicken-200 gms; Garam Masala-15 gms; Cumin Powder-15 gms; Coriander Powder-15 gms",
    "parsedIngredients": [
      "Chillies-7 gms",
      "Cooking oil-15 gms",
      "Cumin seeds-7 gms",
      "Turmeric powder-7 gms",
      "Common salt-15 gms",
      "Onion-120 gms",
      "Tomato-140 gms",
      "Garlic powder-15 gms",
      "Coriander Leaves-15 gms",
      "Ginger powder-15 gms",
      "Chicken-200 gms",
      "Garam Masala-15 gms",
      "Cumin Powder-15 gms",
      "Coriander Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-269",
    "name": "Chana Dal",
    "cleanSearchName": "Chana Dal",
    "associativity": "2,8",
    "associativityCategory": "Combination Curries (Dry & Gravy)",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry",
      "Gravy"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 small bowl",
    "totalWeightGrams": 466,
    "calories": 251,
    "proteinGrams": 14,
    "carbsGrams": 31,
    "fatGrams": 7,
    "fiberGrams": 11,
    "carbonFootprintKgCO2e": 0.6015,
    "ingredients": "Gram dal-250 gms; Onion; Tomato-120 gms; Turmeric powder-7 gms; Cumin seeds-7 gms; Common salt-15 gms; Cooking oil-15 gms; Ginger powder-7 gms; Red chilli Powder-15 gms; Coriander Leaves-15 gms; Coriander Powder-15 gms",
    "parsedIngredients": [
      "Gram dal-250 gms",
      "Onion",
      "Tomato-120 gms",
      "Turmeric powder-7 gms",
      "Cumin seeds-7 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms",
      "Ginger powder-7 gms",
      "Red chilli Powder-15 gms",
      "Coriander Leaves-15 gms",
      "Coriander Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-270",
    "name": "Rajma sabji",
    "cleanSearchName": "Rajma sabji",
    "associativity": "2,8",
    "associativityCategory": "Combination Curries (Dry & Gravy)",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry",
      "Gravy"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 small bowl",
    "totalWeightGrams": 570,
    "calories": 269,
    "proteinGrams": 15,
    "carbsGrams": 41,
    "fatGrams": 5,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.6855,
    "ingredients": "Rajma-250 gms; Cooking oil-15 gms; Cumin seeds-15 gms; Onion-50 gms; Tomato-150 gms; Garlic-15 gms; Chillies-15 gms; Turmeric powder-15 gms; Common salt-15 gms; Coriander leaves-15 gms; Ginger-15 gms",
    "parsedIngredients": [
      "Rajma-250 gms",
      "Cooking oil-15 gms",
      "Cumin seeds-15 gms",
      "Onion-50 gms",
      "Tomato-150 gms",
      "Garlic-15 gms",
      "Chillies-15 gms",
      "Turmeric powder-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-15 gms",
      "Ginger-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-271",
    "name": "Lobia sabji",
    "cleanSearchName": "Lobia sabji",
    "associativity": "2,8",
    "associativityCategory": "Combination Curries (Dry & Gravy)",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry",
      "Gravy"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 small bowl",
    "totalWeightGrams": 714,
    "calories": 115,
    "proteinGrams": 4,
    "carbsGrams": 14,
    "fatGrams": 4,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.787,
    "ingredients": "Cooking oil-15 gms; Cumin seeds-7 gms; Onion-190 gms; Chillies-15 gms; Turmeric powder-7 gms; Common salt-15 gms; Tomato-90 gms; Garlic powder-15 gms; Coriander Leaves-15 gms; Lobia-300 gms; Ginger powder-15 gms; Coriander Powder-15 gms; Cumin Powder-15 gms",
    "parsedIngredients": [
      "Cooking oil-15 gms",
      "Cumin seeds-7 gms",
      "Onion-190 gms",
      "Chillies-15 gms",
      "Turmeric powder-7 gms",
      "Common salt-15 gms",
      "Tomato-90 gms",
      "Garlic powder-15 gms",
      "Coriander Leaves-15 gms",
      "Lobia-300 gms",
      "Ginger powder-15 gms",
      "Coriander Powder-15 gms",
      "Cumin Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-272",
    "name": "Avocado, cherry Tomato, Cucumber, Lettuce leaves and Seeds Salad",
    "cleanSearchName": "Avocado, cherry Tomato, Cucumber, Lettuce leaves and Seeds Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 486,
    "calories": 393,
    "proteinGrams": 12,
    "carbsGrams": 13,
    "fatGrams": 31,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.33625,
    "ingredients": "Avocado-50 gms; Tomato-62 gms; CUCUMBER-62 gms; Lettuce Leaf-250 gms; Sunflower seeds-15 gms; PUMPKIN SEED-15 gms; Lemon-15 gms; Common salt-1 gms; Black pepper-1 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Avocado-50 gms",
      "Tomato-62 gms",
      "CUCUMBER-62 gms",
      "Lettuce Leaf-250 gms",
      "Sunflower seeds-15 gms",
      "PUMPKIN SEED-15 gms",
      "Lemon-15 gms",
      "Common salt-1 gms",
      "Black pepper-1 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-273",
    "name": "Baby Corn and Broccoli Salad",
    "cleanSearchName": "Baby Corn and Broccoli Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 334,
    "calories": 109,
    "proteinGrams": 6,
    "carbsGrams": 16,
    "fatGrams": 3,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.1242,
    "ingredients": "Babycorn-62 gms; CUCUMBER-62 gms;Parsley-30 gms; Lemon-7 ml; Common salt-15 gms; Black pepper-15 gms; Broccoli-150 gms",
    "parsedIngredients": [
      "Babycorn-62 gms",
      "CUCUMBER-62 gms",
      "Parsley-30 gms",
      "Lemon-7 ml",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Broccoli-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-274",
    "name": "Baby Tomato and Lettuce Salad",
    "cleanSearchName": "Baby Tomato and Lettuce Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 480,
    "calories": 205,
    "proteinGrams": 14,
    "carbsGrams": 30,
    "fatGrams": 4,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.169,
    "ingredients": "Lettuce Leaf-250 gms; Lemon-5 ml; Common salt-15 gms; Black pepper-15 gms; Cherry Tomato-50 gms; Lettuce Leaf-150 gms",
    "parsedIngredients": [
      "Lettuce Leaf-250 gms",
      "Lemon-5 ml",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Cherry Tomato-50 gms",
      "Lettuce Leaf-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-275",
    "name": "Beans Salad",
    "cleanSearchName": "Beans Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 324,
    "calories": 460,
    "proteinGrams": 30,
    "carbsGrams": 81,
    "fatGrams": 2,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.30455,
    "ingredients": "Rajma-125 gms; Capsicum-62 gms; CUCUMBER-62 gms; Parsley-30 gms; Lemon-15 gms; Common salt-15 gms; Black pepper-15 gms",
    "parsedIngredients": [
      "Rajma-125 gms",
      "Capsicum-62 gms",
      "CUCUMBER-62 gms",
      "Parsley-30 gms",
      "Lemon-15 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-276",
    "name": "Corn and spinach Salad",
    "cleanSearchName": "Corn and spinach Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 small bowl",
    "totalWeightGrams": 538,
    "calories": 124,
    "proteinGrams": 5,
    "carbsGrams": 21,
    "fatGrams": 2,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.208,
    "ingredients": "SPINACH-250 gms;Garlic-1 gms; Common salt-15 gms; Black pepper-15 gms; Lemon-7 gms; Babycorn-250 gms",
    "parsedIngredients": [
      "SPINACH-250 gms",
      "Garlic-1 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Lemon-7 gms",
      "Babycorn-250 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-277",
    "name": "Corn and Avocado salad",
    "cleanSearchName": "Corn and Avocado salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 small bowl",
    "totalWeightGrams": 337,
    "calories": 80,
    "proteinGrams": 2,
    "carbsGrams": 8,
    "fatGrams": 5,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.3776,
    "ingredients": "Avocado-50 gms; CUCUMBER-62 gms; Parsley-15 gms; Lemon-15 gms; Common salt-15 gms; Black pepper-15 gms; Corn-150 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Avocado-50 gms",
      "CUCUMBER-62 gms",
      "Parsley-15 gms",
      "Lemon-15 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Corn-150 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-278",
    "name": "Cucumber, Onion and Tomato Salad",
    "cleanSearchName": "Cucumber, Onion and Tomato Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 280,
    "calories": 64,
    "proteinGrams": 5,
    "carbsGrams": 8,
    "fatGrams": 1,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.2745,
    "ingredients": "CUCUMBER-70 gms; Tomato-120 gms; Parsley-15 gms; Common salt-15 gms; Black pepper-15 gms; Lemon-15 gms; Onion-30 gms",
    "parsedIngredients": [
      "CUCUMBER-70 gms",
      "Tomato-120 gms",
      "Parsley-15 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Lemon-15 gms",
      "Onion-30 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-279",
    "name": "Lettuce leaves salad",
    "cleanSearchName": "Lettuce leaves salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 101,
    "calories": 17,
    "proteinGrams": 1,
    "carbsGrams": 3,
    "fatGrams": 0,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.0615,
    "ingredients": "Lettuce Leaf-6 gms; CUCUMBER-0.25 gms; Capsicum-0.25 gms; Common salt-15 gms; Black pepper-15 gms; Lemon-15 gms",
    "parsedIngredients": [
      "Lettuce Leaf-6 gms",
      "CUCUMBER-0.25 gms",
      "Capsicum-0.25 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Lemon-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-280",
    "name": "Detox salad",
    "cleanSearchName": "Detox salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 medium bowl",
    "totalWeightGrams": 610,
    "calories": 154,
    "proteinGrams": 10,
    "carbsGrams": 8,
    "fatGrams": 9,
    "fiberGrams": 8,
    "carbonFootprintKgCO2e": 0.2595,
    "ingredients": "Spinach-500 gms; CUCUMBER-0.5 gms; carrot-5 gms; Avocado-25 gms; Sunflower seeds-15 gms; PUMPKIN SEED-15 gms; Lemon-15 gms; Common salt-15 gms; Black pepper-15 gms",
    "parsedIngredients": [
      "Spinach-500 gms",
      "CUCUMBER-0.5 gms",
      "carrot-5 gms",
      "Avocado-25 gms",
      "Sunflower seeds-15 gms",
      "PUMPKIN SEED-15 gms",
      "Lemon-15 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-281",
    "name": "Mint salad",
    "cleanSearchName": "Mint salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 273,
    "calories": 43,
    "proteinGrams": 3,
    "carbsGrams": 5,
    "fatGrams": 0,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.2426,
    "ingredients": "Mint leaves-62 gms; CUCUMBER-62 gms; Tomato-120 gms; Lemon-15 gms; Common salt-7 gms; Black pepper-7 gms",
    "parsedIngredients": [
      "Mint leaves-62 gms",
      "CUCUMBER-62 gms",
      "Tomato-120 gms",
      "Lemon-15 gms",
      "Common salt-7 gms",
      "Black pepper-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-282",
    "name": "Carrot Soup",
    "cleanSearchName": "Carrot Soup",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 291,
    "calories": 107,
    "proteinGrams": 5,
    "carbsGrams": 18,
    "fatGrams": 1,
    "fiberGrams": 8,
    "carbonFootprintKgCO2e": 0.3232,
    "ingredients": "carrot-60 gms; Onion-60 gms; Tomato-120 gms;Garlic-1 gms; Common salt-15 gms; Black pepper-15 gms;Parsley-5 gms; Cumin seeds-15 gms",
    "parsedIngredients": [
      "carrot-60 gms",
      "Onion-60 gms",
      "Tomato-120 gms",
      "Garlic-1 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Parsley-5 gms",
      "Cumin seeds-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-283",
    "name": "Peas soup",
    "cleanSearchName": "Peas soup",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 medium bowl",
    "totalWeightGrams": 350,
    "calories": 133,
    "proteinGrams": 9,
    "carbsGrams": 17,
    "fatGrams": 3,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.3618,
    "ingredients": "Peas-250 gms; Onion-50 gms; Garlic-1 gms; Common salt-15 gms; Black pepper-15 gms;Mint leaves-4 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Peas-250 gms",
      "Onion-50 gms",
      "Garlic-1 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Mint leaves-4 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-284",
    "name": "Tomato soup",
    "cleanSearchName": "Tomato soup",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 medium bowl",
    "totalWeightGrams": 163,
    "calories": 29,
    "proteinGrams": 1,
    "carbsGrams": 6,
    "fatGrams": 0,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.1677,
    "ingredients": "Tomato-60 gms; carrot-20 gms; Onion-50 gms;Garlic-1 gms; Common salt-15 gms; Black pepper-15 gms; Cinnamon-1 gms;  Ginger-1 gms",
    "parsedIngredients": [
      "Tomato-60 gms",
      "carrot-20 gms",
      "Onion-50 gms",
      "Garlic-1 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Cinnamon-1 gms",
      "Ginger-1 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-285",
    "name": "Chicken rice soup",
    "cleanSearchName": "Chicken rice soup",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "6 cup",
    "totalWeightGrams": 1572,
    "calories": 264,
    "proteinGrams": 31,
    "carbsGrams": 14,
    "fatGrams": 8,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 2.8657,
    "ingredients": "carrot-300 gms; Celery-300 gms; Common salt-15 gms; Parsley-7 gms; Olive oil-15 gms; Rice-300 gms; Onion-160 gms; Garlic-30 gms; Chicken Broth-230 gms; Black Pepper-15 gms; Chicken-200 gms",
    "parsedIngredients": [
      "carrot-300 gms",
      "Celery-300 gms",
      "Common salt-15 gms",
      "Parsley-7 gms",
      "Olive oil-15 gms",
      "Rice-300 gms",
      "Onion-160 gms",
      "Garlic-30 gms",
      "Chicken Broth-230 gms",
      "Black Pepper-15 gms",
      "Chicken-200 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-286",
    "name": "Baingan Bharta",
    "cleanSearchName": "Baingan Bharta",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 286,
    "calories": 332,
    "proteinGrams": 6,
    "carbsGrams": 40,
    "fatGrams": 16,
    "fiberGrams": 19,
    "carbonFootprintKgCO2e": 0.357,
    "ingredients": "Onion-50 gms ; Tomato-20 gms; Chillies 2 gms; Cumin seeds-7 gms; Common salt-15 gms; Cooking oil-15 gms; Ginger-10 gms; Coriander Leaves-15 gms; Brinjal-100 gms ; Turmeric powder-15 gms; Coriander Powder-15 gms; Red chilli Powder-7 gms; Garam Masala-15 gms",
    "parsedIngredients": [
      "Onion-50 gms",
      "Tomato-20 gms",
      "Chillies 2 gms",
      "Cumin seeds-7 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms",
      "Ginger-10 gms",
      "Coriander Leaves-15 gms",
      "Brinjal-100 gms",
      "Turmeric powder-15 gms",
      "Coriander Powder-15 gms",
      "Red chilli Powder-7 gms",
      "Garam Masala-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-287",
    "name": "Bharwa Baigan",
    "cleanSearchName": "Bharwa Baigan",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 248,
    "calories": 214,
    "proteinGrams": 2,
    "carbsGrams": 10,
    "fatGrams": 17,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.1932,
    "ingredients": "Turmeric powder-7 gms; Cumin seeds-7 gms; Common salt-15 gms; Cooking oil-15 gms; Coriander leaves-30 gms; MANGO POWDER-7 gms; Mustard seeds-7 gms; Curry leaves-10 gms; Brinjal-150 gms",
    "parsedIngredients": [
      "Turmeric powder-7 gms",
      "Cumin seeds-7 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms",
      "Coriander leaves-30 gms",
      "MANGO POWDER-7 gms",
      "Mustard seeds-7 gms",
      "Curry leaves-10 gms",
      "Brinjal-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-288",
    "name": "Bharwa Tinda",
    "cleanSearchName": "Bharwa Tinda",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 203,
    "calories": 75,
    "proteinGrams": 2,
    "carbsGrams": 5,
    "fatGrams": 4,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.1427,
    "ingredients": "BOTTLE GOURD-120 gms; Cumin seeds-7 gms; Common salt-15 gms; Cooking oil-7 gms; Coriander leaves-30 gms; MANGO POWDER-7 gms; Mustard seeds-7 gms; Curry leaves-10 gms",
    "parsedIngredients": [
      "BOTTLE GOURD-120 gms",
      "Cumin seeds-7 gms",
      "Common salt-15 gms",
      "Cooking oil-7 gms",
      "Coriander leaves-30 gms",
      "MANGO POWDER-7 gms",
      "Mustard seeds-7 gms",
      "Curry leaves-10 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-289",
    "name": "Bhindi",
    "cleanSearchName": "Bhindi",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 493,
    "calories": 243,
    "proteinGrams": 8,
    "carbsGrams": 28,
    "fatGrams": 10,
    "fiberGrams": 17,
    "carbonFootprintKgCO2e": 0.3431,
    "ingredients": "Ladies finger-250 gms; Cooking oil-7 gms; Cumin seeds-15 gms; Onion-180 gms; Common salt-15 gms; Coriander leaves-4 gms; MANGO POWDER-7 gms; Coriander Powder-15 gms",
    "parsedIngredients": [
      "Ladies finger-250 gms",
      "Cooking oil-7 gms",
      "Cumin seeds-15 gms",
      "Onion-180 gms",
      "Common salt-15 gms",
      "Coriander leaves-4 gms",
      "MANGO POWDER-7 gms",
      "Coriander Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-290",
    "name": "Green Beans Aloo",
    "cleanSearchName": "Green Beans Aloo",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 small bowl",
    "totalWeightGrams": 511,
    "calories": 106,
    "proteinGrams": 5,
    "carbsGrams": 20,
    "fatGrams": 1,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.4656,
    "ingredients": "Beans-250 gms; POTATO-100 gms ; Cumin seeds-15 gms; Onion ; Tomato-120 gms; Turmeric powder-7 gms; Common salt-15 gms; Coriander leaves-4 gms",
    "parsedIngredients": [
      "Beans-250 gms",
      "POTATO-100 gms",
      "Cumin seeds-15 gms",
      "Onion",
      "Tomato-120 gms",
      "Turmeric powder-7 gms",
      "Common salt-15 gms",
      "Coriander leaves-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-291",
    "name": "Karela Vegetable",
    "cleanSearchName": "Karela Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 small bowl",
    "totalWeightGrams": 65,
    "calories": 114,
    "proteinGrams": 2,
    "carbsGrams": 6,
    "fatGrams": 9,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.1485,
    "ingredients": "Karela-3 medium; Cooking oil-15 gms; Onion-1 gms; Cumin seeds-15 gms; Mustard seeds-7 gms; Turmeric powder-7 gms; Common salt-15 gms; Coriander leaves-5 gms",
    "parsedIngredients": [
      "Karela-3 medium",
      "Cooking oil-15 gms",
      "Onion-1 gms",
      "Cumin seeds-15 gms",
      "Mustard seeds-7 gms",
      "Turmeric powder-7 gms",
      "Common salt-15 gms",
      "Coriander leaves-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-292",
    "name": "Methi Vegetable",
    "cleanSearchName": "Methi Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 medium bowl",
    "totalWeightGrams": 692,
    "calories": 214,
    "proteinGrams": 11,
    "carbsGrams": 15,
    "fatGrams": 11,
    "fiberGrams": 14,
    "carbonFootprintKgCO2e": 0.308,
    "ingredients": "Fenugreek leaves-500 gms; Onion-125 gms; Cooking oil-15 gms; Cumin seeds-7 gms; Mustard seeds-7 gms; Asafoetida-4 gms;Garlic-4 gms; Common salt-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Fenugreek leaves-500 gms",
      "Onion-125 gms",
      "Cooking oil-15 gms",
      "Cumin seeds-7 gms",
      "Mustard seeds-7 gms",
      "Asafoetida-4 gms",
      "Garlic-4 gms",
      "Common salt-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-293",
    "name": "Palak Vegetable",
    "cleanSearchName": "Palak Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 small bowl",
    "totalWeightGrams": 769,
    "calories": 148,
    "proteinGrams": 6,
    "carbsGrams": 9,
    "fatGrams": 9,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.4564,
    "ingredients": "Spinach-500 gms; Onion-100 gms; Tomato-120 gms; Garlic-2 gms; Cumin seeds-7 gms; Common salt-15 gms; Cooking oil-15 gms; Ginger-10 gms",
    "parsedIngredients": [
      "Spinach-500 gms",
      "Onion-100 gms",
      "Tomato-120 gms",
      "Garlic-2 gms",
      "Cumin seeds-7 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms",
      "Ginger-10 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-294",
    "name": "Broccoli Vegetable",
    "cleanSearchName": "Broccoli Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 134,
    "calories": 33,
    "proteinGrams": 2,
    "carbsGrams": 6,
    "fatGrams": 0,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.0872,
    "ingredients": "Onion-100 gms; Garlic-2 gms; Common salt-15 gms; Black pepper-15 gms; Lemon-2 gms",
    "parsedIngredients": [
      "Onion-100 gms",
      "Garlic-2 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Lemon-2 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-295",
    "name": "Bell Peppers Vegetable",
    "cleanSearchName": "Bell Peppers Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 415,
    "calories": 118,
    "proteinGrams": 8,
    "carbsGrams": 18,
    "fatGrams": 1,
    "fiberGrams": 11,
    "carbonFootprintKgCO2e": 0.545,
    "ingredients": "Capsicum-180 gms; Onion-70 gms;Garlic-10 gms; Tomato-120 gms; Common salt-15 gms; Black pepper-15 gms; Basil-5 gms",
    "parsedIngredients": [
      "Capsicum-180 gms",
      "Onion-70 gms",
      "Garlic-10 gms",
      "Tomato-120 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Basil-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-296",
    "name": "Capsicum Vegetable",
    "cleanSearchName": "Capsicum Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 503,
    "calories": 357,
    "proteinGrams": 5,
    "carbsGrams": 12,
    "fatGrams": 31,
    "fiberGrams": 8,
    "carbonFootprintKgCO2e": 0.7141,
    "ingredients": "Capsicum-200 gms; Onion-100 gms; Tomato-120 gms; Garlic-20 gms; Cumin seeds-7 gms; Turmeric powder-7 gms; Common salt-15 gms; Cooking oil-30 gms; Coriander leaves-4 gms",
    "parsedIngredients": [
      "Capsicum-200 gms",
      "Onion-100 gms",
      "Tomato-120 gms",
      "Garlic-20 gms",
      "Cumin seeds-7 gms",
      "Turmeric powder-7 gms",
      "Common salt-15 gms",
      "Cooking oil-30 gms",
      "Coriander leaves-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-297",
    "name": "Cabbage Matar Vegetable",
    "cleanSearchName": "Cabbage Matar Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 681,
    "calories": 332,
    "proteinGrams": 20,
    "carbsGrams": 49,
    "fatGrams": 5,
    "fiberGrams": 12,
    "carbonFootprintKgCO2e": 0.4248,
    "ingredients": "CABBAGE-500 gms; Peas-125 gms; Onion-1 gms; Garlic-2 gms; Cumin seeds-7 gms; Turmeric powder-7 gms; Common salt-15 gms; Cooking oil-15 gms; Coriander leaves-4 gms; Ginger-5 gms",
    "parsedIngredients": [
      "CABBAGE-500 gms",
      "Peas-125 gms",
      "Onion-1 gms",
      "Garlic-2 gms",
      "Cumin seeds-7 gms",
      "Turmeric powder-7 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms",
      "Coriander leaves-4 gms",
      "Ginger-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-298",
    "name": "Aloo Gobhi Vegetable",
    "cleanSearchName": "Aloo Gobhi Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 small bowl",
    "totalWeightGrams": 230,
    "calories": 89,
    "proteinGrams": 2,
    "carbsGrams": 8,
    "fatGrams": 5,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.242,
    "ingredients": "POTATO-50 gms; Cauliflower-100 gms; Turmeric powder-15 gms; Common salt-15 gms; Mustard oil-30 gms; Coriander leaves-15 gms; Ginger-5 gms1",
    "parsedIngredients": [
      "POTATO-50 gms",
      "Cauliflower-100 gms",
      "Turmeric powder-15 gms",
      "Common salt-15 gms",
      "Mustard oil-30 gms",
      "Coriander leaves-15 gms",
      "Ginger-5 gms1"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-299",
    "name": "Aloo Matar Vegetable",
    "cleanSearchName": "Aloo Matar Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 small bowl",
    "totalWeightGrams": 495,
    "calories": 180,
    "proteinGrams": 9,
    "carbsGrams": 24,
    "fatGrams": 6,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.4545,
    "ingredients": "POTATO-150 gms; Peas-250 gms; Onion; Coriander leaves-15 gms; Cumin seeds-15 gms; Mustard oil-30 gms; Turmeric powder-15 gms; Common salt-15 gms; Ginger-5 gms",
    "parsedIngredients": [
      "POTATO-150 gms",
      "Peas-250 gms",
      "Onion",
      "Coriander leaves-15 gms",
      "Cumin seeds-15 gms",
      "Mustard oil-30 gms",
      "Turmeric powder-15 gms",
      "Common salt-15 gms",
      "Ginger-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-300",
    "name": "Aloo Matar Gravy",
    "cleanSearchName": "Aloo Matar Gravy",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 small bowl",
    "totalWeightGrams": 815,
    "calories": 244,
    "proteinGrams": 11,
    "carbsGrams": 36,
    "fatGrams": 6,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.846,
    "ingredients": "POTATO-150 gms ; Peas-250 gms; Onion-20 gms; Tomato-320 gms; Turmeric powder-15 gms; Mustard oil-30 gms; Coriander leaves-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "POTATO-150 gms",
      "Peas-250 gms",
      "Onion-20 gms",
      "Tomato-320 gms",
      "Turmeric powder-15 gms",
      "Mustard oil-30 gms",
      "Coriander leaves-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-301",
    "name": "BAKED BROCCOLI (NO WHITE SAUCE)",
    "cleanSearchName": "BAKED BROCCOLI",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 395,
    "calories": 643,
    "proteinGrams": 6,
    "carbsGrams": 23,
    "fatGrams": 58,
    "fiberGrams": 11,
    "carbonFootprintKgCO2e": 0.303,
    "ingredients": "Broccoli-350 gms; Olive oil-30 gms; Garlic-15 gms",
    "parsedIngredients": [
      "Broccoli-350 gms",
      "Olive oil-30 gms",
      "Garlic-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-302",
    "name": "BAKED CAULIFLOWER (NO WHITE SAUCE)",
    "cleanSearchName": "BAKED CAULIFLOWER",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 145,
    "calories": 74,
    "proteinGrams": 2,
    "carbsGrams": 3,
    "fatGrams": 5,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.214,
    "ingredients": "Cauliflower-100 gms; Common salt-15 gms; Olive oil-15 gms; Garlic Powder-15 gms",
    "parsedIngredients": [
      "Cauliflower-100 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms",
      "Garlic Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-303",
    "name": "BAKED MIX VegETABLES (WITH TOMATO SAUCE)",
    "cleanSearchName": "BAKED MIX VegETABLES (WITH TOMATO SAUCE)",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 1013,
    "calories": 375,
    "proteinGrams": 14,
    "carbsGrams": 53,
    "fatGrams": 10,
    "fiberGrams": 20,
    "carbonFootprintKgCO2e": 0.7293,
    "ingredients": "Beans-62 gms; Peas-62 gms; carrot-62 gms; Zucchini-62 gms; Garlic-10 gms; Common salt-15 gms; Broccoli-350 gms; Onion-125 gms; Olive oil-15 gms; Tomato-250 gms",
    "parsedIngredients": [
      "Beans-62 gms",
      "Peas-62 gms",
      "carrot-62 gms",
      "Zucchini-62 gms",
      "Garlic-10 gms",
      "Common salt-15 gms",
      "Broccoli-350 gms",
      "Onion-125 gms",
      "Olive oil-15 gms",
      "Tomato-250 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-304",
    "name": "BAINGAN ALOO VegETABLE",
    "cleanSearchName": "BAINGAN ALOO VegETABLE",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 135,
    "calories": 232,
    "proteinGrams": 4,
    "carbsGrams": 27,
    "fatGrams": 10,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.1735,
    "ingredients": "POTATO-50 gms ; Brinjal-15 gms; Ginger-5 gms; Turmeric powder-15 gms; Mustard oil-30 gms; Coriander leaves-15 gms; Common salt-0.5 gms",
    "parsedIngredients": [
      "POTATO-50 gms",
      "Brinjal-15 gms",
      "Ginger-5 gms",
      "Turmeric powder-15 gms",
      "Mustard oil-30 gms",
      "Coriander leaves-15 gms",
      "Common salt-0.5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-305",
    "name": "BAINGAN MATAR VegETABLE",
    "cleanSearchName": "BAINGAN MATAR VegETABLE",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 279,
    "calories": 237,
    "proteinGrams": 8,
    "carbsGrams": 23,
    "fatGrams": 10,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.3816,
    "ingredients": "Brinjal-15 gms; Peas-62 gms; Ginger-7 gms; Onion; Tomato-120 gms; Turmeric powder-15 gms; Mustard oil-30 gms; Coriander leaves-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Brinjal-15 gms",
      "Peas-62 gms",
      "Ginger-7 gms",
      "Onion",
      "Tomato-120 gms",
      "Turmeric powder-15 gms",
      "Mustard oil-30 gms",
      "Coriander leaves-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-306",
    "name": "CHHOTI ELAICHI WATER",
    "cleanSearchName": "CHHOTI ELAICHI WATER",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 3,
    "calories": 0,
    "proteinGrams": 0,
    "carbsGrams": 0,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.0105,
    "ingredients": "Cardamom-3 gms",
    "parsedIngredients": [
      "Cardamom-3 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-307",
    "name": "CINNAMON WATER",
    "cleanSearchName": "CINNAMON WATER",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 6,
    "calories": 0,
    "proteinGrams": 0,
    "carbsGrams": 0,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.021,
    "ingredients": "Cinnamon-6 gms",
    "parsedIngredients": [
      "Cinnamon-6 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-308",
    "name": "KHICHDI (BASMATI RICE)",
    "cleanSearchName": "KHICHDI (BASMATI RICE)",
    "associativity": "5",
    "associativityCategory": "Khichdi, Pulao & Biryani",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 324,
    "calories": 320,
    "proteinGrams": 91,
    "carbsGrams": 780,
    "fatGrams": 1,
    "fiberGrams": 15,
    "carbonFootprintKgCO2e": 0.9705,
    "ingredients": "Rice-200 gms; Gram dal-80 gms; Turmeric powder-7 gms; Cumin seeds-7 gms; Cooking oil-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Rice-200 gms",
      "Gram dal-80 gms",
      "Turmeric powder-7 gms",
      "Cumin seeds-7 gms",
      "Cooking oil-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-309",
    "name": "KHICHDI (BROWN RICE)",
    "cleanSearchName": "KHICHDI (BROWN RICE)",
    "associativity": "5",
    "associativityCategory": "Khichdi, Pulao & Biryani",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 299,
    "calories": 887,
    "proteinGrams": 34,
    "carbsGrams": 164,
    "fatGrams": 3,
    "fiberGrams": 16,
    "carbonFootprintKgCO2e": 0.8705,
    "ingredients": "Rice-175 gms; Gram dal-80 gms; Turmeric powder-7 gms; Cumin seeds-7 gms; Cooking oil-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Rice-175 gms",
      "Gram dal-80 gms",
      "Turmeric powder-7 gms",
      "Cumin seeds-7 gms",
      "Cooking oil-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-310",
    "name": "BLACK CHANNA RASEDAR",
    "cleanSearchName": "BLACK CHANNA RASEDAR",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 634,
    "calories": 920,
    "proteinGrams": 56,
    "carbsGrams": 120,
    "fatGrams": 5,
    "fiberGrams": 53,
    "carbonFootprintKgCO2e": 0.612,
    "ingredients": "Black gram-250 gms; Onion-200 gms; Tomato-120 gms; Chillies-15 gms; Turmeric powder-4 gms; Coriander leaves-15 gms; Cooking oil-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Black gram-250 gms",
      "Onion-200 gms",
      "Tomato-120 gms",
      "Chillies-15 gms",
      "Turmeric powder-4 gms",
      "Coriander leaves-15 gms",
      "Cooking oil-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-311",
    "name": "BLACK CHANNA (dry)",
    "cleanSearchName": "BLACK CHANNA (dry)",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 355,
    "calories": 882,
    "proteinGrams": 55,
    "carbsGrams": 111,
    "fatGrams": 5,
    "fiberGrams": 53,
    "carbonFootprintKgCO2e": 0.5125,
    "ingredients": "Black gram-250 gms; Cumin seeds-15 gms; Chillies-15 gms; Ginger-15 gms; MANGO POWDER-15 gms; Coriander leaves-15 gms; Cooking oil-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Black gram-250 gms",
      "Cumin seeds-15 gms",
      "Chillies-15 gms",
      "Ginger-15 gms",
      "MANGO POWDER-15 gms",
      "Coriander leaves-15 gms",
      "Cooking oil-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-312",
    "name": "DHANIYA CHUTNEY",
    "cleanSearchName": "DHANIYA CHUTNEY",
    "associativity": "7",
    "associativityCategory": "Fresh Herbal Chutneys",
    "region": [
      "North",
      "South",
      "East",
      "West",
      "Continental"
    ],
    "mealTypes": [
      "Appetizer",
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 tbsp",
    "totalWeightGrams": 263,
    "calories": 43,
    "proteinGrams": 4,
    "carbsGrams": 4,
    "fatGrams": 1,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.1019,
    "ingredients": "Coriander leaves-250 gms; Garlic-1 gms; Ginger-1 slice; Lemon-0.5 gms; Common salt-7 gms",
    "parsedIngredients": [
      "Coriander leaves-250 gms",
      "Garlic-1 gms",
      "Ginger-1 slice",
      "Lemon-0.5 gms",
      "Common salt-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-313",
    "name": "GREEN CHUTNEY",
    "cleanSearchName": "GREEN CHUTNEY",
    "associativity": "7",
    "associativityCategory": "Fresh Herbal Chutneys",
    "region": [
      "North",
      "South",
      "East",
      "West",
      "Continental"
    ],
    "mealTypes": [
      "Appetizer",
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 tbsp",
    "totalWeightGrams": 340,
    "calories": 60,
    "proteinGrams": 6,
    "carbsGrams": 5,
    "fatGrams": 1,
    "fiberGrams": 8,
    "carbonFootprintKgCO2e": 0.1563,
    "ingredients": "Coriander leaves-250 gms;Mint leaves-62 gms; Onion-0.5 medium; Ginger-1 gms; Chillies-1 slice; MANGO POWDER-7 gms; Lemon-0.5 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Coriander leaves-250 gms",
      "Mint leaves-62 gms",
      "Onion-0.5 medium",
      "Ginger-1 gms",
      "Chillies-1 slice",
      "MANGO POWDER-7 gms",
      "Lemon-0.5 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-314",
    "name": "Overnight soaked oats",
    "cleanSearchName": "Overnight soaked oats",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 354,
    "calories": 308,
    "proteinGrams": 11,
    "carbsGrams": 19,
    "fatGrams": 21,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.725,
    "ingredients": "Milk-200 gms; ALMOND-15 gms; BLACKBERRY-30 gms; Apple-100 gms; Walnut-9 gms",
    "parsedIngredients": [
      "Milk-200 gms",
      "ALMOND-15 gms",
      "BLACKBERRY-30 gms",
      "Apple-100 gms",
      "Walnut-9 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-315",
    "name": "Tomato chutney",
    "cleanSearchName": "Tomato chutney",
    "associativity": "13",
    "associativityCategory": "Traditional Sambars & Chutneys",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 tbsp",
    "totalWeightGrams": 372,
    "calories": 81,
    "proteinGrams": 3,
    "carbsGrams": 15,
    "fatGrams": 1,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.5307,
    "ingredients": "Tomato-200 gms; Onion-100 gms; Chillies-15 gms;Garlic-2 gms; Mustard seeds-4 gms; Cumin seeds-4 gms; Gram dal-4 gms; Asafoetida-30 gms; Turmeric powder-4 gms; Common salt-4 gms; Ginger-5 gms",
    "parsedIngredients": [
      "Tomato-200 gms",
      "Onion-100 gms",
      "Chillies-15 gms",
      "Garlic-2 gms",
      "Mustard seeds-4 gms",
      "Cumin seeds-4 gms",
      "Gram dal-4 gms",
      "Asafoetida-30 gms",
      "Turmeric powder-4 gms",
      "Common salt-4 gms",
      "Ginger-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-316",
    "name": "Chickpea Curry",
    "cleanSearchName": "Chickpea Curry",
    "associativity": "2,8",
    "associativityCategory": "Combination Curries (Dry & Gravy)",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry",
      "Gravy"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 381,
    "calories": 134,
    "proteinGrams": 6,
    "carbsGrams": 15,
    "fatGrams": 5,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.365,
    "ingredients": "Onion-95 gms; Tomato-90 gms; Cooking oil-7 gms; Cumin seeds-15 gms; Turmeric powder-4 gms; Common salt-15 gms; Coriander leaves-5 gms; Chickpeas-150 gms",
    "parsedIngredients": [
      "Onion-95 gms",
      "Tomato-90 gms",
      "Cooking oil-7 gms",
      "Cumin seeds-15 gms",
      "Turmeric powder-4 gms",
      "Common salt-15 gms",
      "Coriander leaves-5 gms",
      "Chickpeas-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-317",
    "name": "Mix Vegetable Pulav",
    "cleanSearchName": "Mix Vegetable Pulav",
    "associativity": "5",
    "associativityCategory": "Khichdi, Pulao & Biryani",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 694,
    "calories": 417,
    "proteinGrams": 15,
    "carbsGrams": 66,
    "fatGrams": 9,
    "fiberGrams": 10,
    "carbonFootprintKgCO2e": 1.0216,
    "ingredients": "carrot-125 gms; Peas-125 gms; Onion-125 gms; Tomato-125 gms; Cumin seeds-4 gms; Cooking oil-7 gms; Common salt-15 gms; Coriander leaves-4 gms; Chillies-4 gms; Garlic-0.5 gms; Ginger-0.5 gms; Rice-150 gms",
    "parsedIngredients": [
      "carrot-125 gms",
      "Peas-125 gms",
      "Onion-125 gms",
      "Tomato-125 gms",
      "Cumin seeds-4 gms",
      "Cooking oil-7 gms",
      "Common salt-15 gms",
      "Coriander leaves-4 gms",
      "Chillies-4 gms",
      "Garlic-0.5 gms",
      "Ginger-0.5 gms",
      "Rice-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-318",
    "name": "Broccoli SALAD",
    "cleanSearchName": "Broccoli SALAD",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 110,
    "calories": 123,
    "proteinGrams": 6,
    "carbsGrams": 13,
    "fatGrams": 6,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.0925,
    "ingredients": "Lemon-5 ml; Common salt-15 gms; Black pepper-15 gms; Sunflower seeds-10 gms; Broccoli-70 gms",
    "parsedIngredients": [
      "Lemon-5 ml",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Sunflower seeds-10 gms",
      "Broccoli-70 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-319",
    "name": "Bajra Dosa",
    "cleanSearchName": "Bajra Dosa",
    "associativity": "14",
    "associativityCategory": "South Indian Dosas, Idlis & Uttapams",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 36,
    "calories": 405,
    "proteinGrams": 12,
    "carbsGrams": 63,
    "fatGrams": 10,
    "fiberGrams": 13,
    "carbonFootprintKgCO2e": 0.0741,
    "ingredients": "Fenugreek seeds-15 gms; Common salt-15 gms; Cooking oil-5 gms; Bajra-1 gms",
    "parsedIngredients": [
      "Fenugreek seeds-15 gms",
      "Common salt-15 gms",
      "Cooking oil-5 gms",
      "Bajra-1 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-320",
    "name": "Parwal Aloo Vegetable",
    "cleanSearchName": "Parwal Aloo Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 534,
    "calories": 425,
    "proteinGrams": 10,
    "carbsGrams": 50,
    "fatGrams": 19,
    "fiberGrams": 17,
    "carbonFootprintKgCO2e": 0.313,
    "ingredients": "Parwal-250 gms; POTATO-150 gms; Cooking oil-15 gms; Cumin seeds-7 gms; ; Turmeric powder-7 gms; Chillies-15 gms; Common salt-15 gms; Coriander leaves-75 gms",
    "parsedIngredients": [
      "Parwal-250 gms",
      "POTATO-150 gms",
      "Cooking oil-15 gms",
      "Cumin seeds-7 gms",
      "Turmeric powder-7 gms",
      "Chillies-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-75 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-321",
    "name": "Pyaaz Sabzi",
    "cleanSearchName": "Pyaaz Sabzi",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 331,
    "calories": 331,
    "proteinGrams": 7,
    "carbsGrams": 34,
    "fatGrams": 17,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.2982,
    "ingredients": "Onion-250 gms; Cooking oil-15 gms; Cumin seeds-7 gms; Mustard seeds-7 gms; Turmeric powder-7 gms; Chillies-15 gms; Coriander seeds-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Onion-250 gms",
      "Cooking oil-15 gms",
      "Cumin seeds-7 gms",
      "Mustard seeds-7 gms",
      "Turmeric powder-7 gms",
      "Chillies-15 gms",
      "Coriander seeds-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-322",
    "name": "Sarson Saag",
    "cleanSearchName": "Sarson Saag",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 647,
    "calories": 374,
    "proteinGrams": 16,
    "carbsGrams": 33,
    "fatGrams": 18,
    "fiberGrams": 10,
    "carbonFootprintKgCO2e": 0.3777,
    "ingredients": "MUSTARD LEAVES-250 gms; SPINACH-250 gms; Bathua leaves-50 gms; Ginger-1 gms;Garlic-6 gms; Maize-30 gms; Common salt-15 gms; Ghee-15 gms; Cumin seeds-15 gms; Chillies-15 gms",
    "parsedIngredients": [
      "MUSTARD LEAVES-250 gms",
      "SPINACH-250 gms",
      "Bathua leaves-50 gms",
      "Ginger-1 gms",
      "Garlic-6 gms",
      "Maize-30 gms",
      "Common salt-15 gms",
      "Ghee-15 gms",
      "Cumin seeds-15 gms",
      "Chillies-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-323",
    "name": "Zucchini, asparagus, and bell peppers",
    "cleanSearchName": "Zucchini, asparagus, and bell peppers",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 347,
    "calories": 237,
    "proteinGrams": 7,
    "carbsGrams": 13,
    "fatGrams": 16,
    "fiberGrams": 13,
    "carbonFootprintKgCO2e": 0.3164,
    "ingredients": "Zucchini-200 gms; Capsicum-100 gms; Cooking oil-15 gms;Garlic-2 gms; Common salt-15 gms; Black pepper-15 gms",
    "parsedIngredients": [
      "Zucchini-200 gms",
      "Capsicum-100 gms",
      "Cooking oil-15 gms",
      "Garlic-2 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-324",
    "name": "Spring onions with bell peppers",
    "cleanSearchName": "Spring onions with bell peppers",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 354,
    "calories": 125,
    "proteinGrams": 10,
    "carbsGrams": 15,
    "fatGrams": 1,
    "fiberGrams": 20,
    "carbonFootprintKgCO2e": 0.3069,
    "ingredients": "Onion-200 gms; Capsicum-100 gms; Garlic-2 gms; Common salt-15 gms; Black pepper-15 gms; Chillies-7 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Onion-200 gms",
      "Capsicum-100 gms",
      "Garlic-2 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Chillies-7 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-325",
    "name": "Steamed Broccoli",
    "cleanSearchName": "Steamed Broccoli",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 123,
    "calories": 180,
    "proteinGrams": 11,
    "carbsGrams": 28,
    "fatGrams": 3,
    "fiberGrams": 16,
    "carbonFootprintKgCO2e": 0.1315,
    "ingredients": "Garlic-1 gms; Common salt-15 gms; Lemon-7 gms; Chillies-30 gms; Broccoli-70 gms",
    "parsedIngredients": [
      "Garlic-1 gms",
      "Common salt-15 gms",
      "Lemon-7 gms",
      "Chillies-30 gms",
      "Broccoli-70 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-326",
    "name": "Stuffed bell peppers",
    "cleanSearchName": "Stuffed bell peppers",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 517,
    "calories": 573,
    "proteinGrams": 22,
    "carbsGrams": 66,
    "fatGrams": 22,
    "fiberGrams": 25,
    "carbonFootprintKgCO2e": 0.6252,
    "ingredients": "Capsicum-200 gms; POTATO-125 gms; Peas-125 gms; Onion-1 gms; Garlic-2 gms; Cumin seeds-7 gms; Turmeric powder-7 gms; Chillies-15 gms; Common salt-15 gms; Cooking oil-15 gms; Coriander leaves-5 gms",
    "parsedIngredients": [
      "Capsicum-200 gms",
      "POTATO-125 gms",
      "Peas-125 gms",
      "Onion-1 gms",
      "Garlic-2 gms",
      "Cumin seeds-7 gms",
      "Turmeric powder-7 gms",
      "Chillies-15 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms",
      "Coriander leaves-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-327",
    "name": "Stuffed Karela",
    "cleanSearchName": "Stuffed Karela",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 168,
    "calories": 476,
    "proteinGrams": 11,
    "carbsGrams": 27,
    "fatGrams": 36,
    "fiberGrams": 11,
    "carbonFootprintKgCO2e": 0.304,
    "ingredients": "Karela-40 gms; Cooking oil-30 gms; Cumin seeds-15 gms; Asafoetida-7 gms; Turmeric powder-7 gms; Chillies-4 gms; Coriander seeds-15 gms; Common salt-15 gms; Coriander leaves-5 gms; Onion-30 gms",
    "parsedIngredients": [
      "Karela-40 gms",
      "Cooking oil-30 gms",
      "Cumin seeds-15 gms",
      "Asafoetida-7 gms",
      "Turmeric powder-7 gms",
      "Chillies-4 gms",
      "Coriander seeds-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-5 gms",
      "Onion-30 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-328",
    "name": "Turnip (Shalgum) Vegetable",
    "cleanSearchName": "Turnip (Shalgum) Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 434,
    "calories": 344,
    "proteinGrams": 6,
    "carbsGrams": 34,
    "fatGrams": 20,
    "fiberGrams": 12,
    "carbonFootprintKgCO2e": 0.3201,
    "ingredients": "TURNIP-250 gms; Onion-100 gms;Garlic-2 gms; Ginger-1 gms; Cumin seeds-15 gms; Mustard seeds-7 gms; Turmeric powder-7 gms; Coriander seeds-15 gms; Chillies-7 gms; Common salt-15 gms; Cooking oil-15 gms",
    "parsedIngredients": [
      "TURNIP-250 gms",
      "Onion-100 gms",
      "Garlic-2 gms",
      "Ginger-1 gms",
      "Cumin seeds-15 gms",
      "Mustard seeds-7 gms",
      "Turmeric powder-7 gms",
      "Coriander seeds-15 gms",
      "Chillies-7 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-329",
    "name": "Pudina Chutney",
    "cleanSearchName": "Pudina Chutney",
    "associativity": "7",
    "associativityCategory": "Fresh Herbal Chutneys",
    "region": [
      "North",
      "South",
      "East",
      "West",
      "Continental"
    ],
    "mealTypes": [
      "Appetizer",
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 tbsp",
    "totalWeightGrams": 99,
    "calories": 41,
    "proteinGrams": 3,
    "carbsGrams": 3,
    "fatGrams": 0,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.0417,
    "ingredients": "Mint leaves-50 gms; Coriander leaves-25 gms; Chillies-2 gms; Lemon-10 gms; Common salt-7 gms; Ginger-3.5 gms",
    "parsedIngredients": [
      "Mint leaves-50 gms",
      "Coriander leaves-25 gms",
      "Chillies-2 gms",
      "Lemon-10 gms",
      "Common salt-7 gms",
      "Ginger-3.5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-330",
    "name": "Upma",
    "cleanSearchName": "Upma",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner",
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 279,
    "calories": 500,
    "proteinGrams": 17,
    "carbsGrams": 77,
    "fatGrams": 13,
    "fiberGrams": 15,
    "carbonFootprintKgCO2e": 0.218,
    "ingredients": "Semolina-80 gms; Cooking oil-10 gms;  Gram dal-7 gms; Curry leaves-8 gms; Chillies-2 gms; Onion-50 gms; carrot-50 gms; Peas-50 gms; Common salt-15 gms; Channa Dal-7 gms",
    "parsedIngredients": [
      "Semolina-80 gms",
      "Cooking oil-10 gms",
      "Gram dal-7 gms",
      "Curry leaves-8 gms",
      "Chillies-2 gms",
      "Onion-50 gms",
      "carrot-50 gms",
      "Peas-50 gms",
      "Common salt-15 gms",
      "Channa Dal-7 gms"
    ],
    "isDuplicateName": true,
    "duplicateNote": "Alternative portion or variation for \"Upma\" (1 medium, 279g)"
  },
  {
    "id": "food-331",
    "name": "Quinoa Chicken Soup",
    "cleanSearchName": "Quinoa Chicken Soup",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 257,
    "calories": 417,
    "proteinGrams": 29,
    "carbsGrams": 40,
    "fatGrams": 15,
    "fiberGrams": 10,
    "carbonFootprintKgCO2e": 0.6714,
    "ingredients": "Chicken-80 gms; Quinoa-50 gms; carrot-50 gms; Celery-30 gms; Onion-10 gms; Garlic-2 gms; Cooking oil-5 gms; Common salt-15 gms; Black pepper-15 gms",
    "parsedIngredients": [
      "Chicken-80 gms",
      "Quinoa-50 gms",
      "carrot-50 gms",
      "Celery-30 gms",
      "Onion-10 gms",
      "Garlic-2 gms",
      "Cooking oil-5 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-332",
    "name": "Anjeer Water",
    "cleanSearchName": "Anjeer Water",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 50,
    "calories": 0,
    "proteinGrams": 0,
    "carbsGrams": 0,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.0425,
    "ingredients": "Fig-50 gms",
    "parsedIngredients": [
      "Fig-50 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-333",
    "name": "Dhaniya Ajwain Jaw Water",
    "cleanSearchName": "Dhaniya Ajwain Jaw Water",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 55,
    "calories": 14,
    "proteinGrams": 1,
    "carbsGrams": 1,
    "fatGrams": 1,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.0525,
    "ingredients": "Coriander seeds-15 gms; Barley-0.25 gms; Water-15 gms",
    "parsedIngredients": [
      "Coriander seeds-15 gms",
      "Barley-0.25 gms",
      "Water-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-334",
    "name": "Tinda Vegetable (Gravy)",
    "cleanSearchName": "Tinda Vegetable (Gravy)",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 361,
    "calories": 139,
    "proteinGrams": 5,
    "carbsGrams": 18,
    "fatGrams": 3,
    "fiberGrams": 12,
    "carbonFootprintKgCO2e": 0.3518,
    "ingredients": "Tinda-4 gms; Onion-180 gms; Tomato-120 gms; Cumin seeds-4 gms; Turmeric powder-7 gms; Chillies-15 gms; Coriander seeds-4 gms; Common salt-15 gms; Mustard oil-7 gms; Coriander leaves-5 gms",
    "parsedIngredients": [
      "Tinda-4 gms",
      "Onion-180 gms",
      "Tomato-120 gms",
      "Cumin seeds-4 gms",
      "Turmeric powder-7 gms",
      "Chillies-15 gms",
      "Coriander seeds-4 gms",
      "Common salt-15 gms",
      "Mustard oil-7 gms",
      "Coriander leaves-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-335",
    "name": "Baba Ganoush with Falafel",
    "cleanSearchName": "Baba Ganoush with Falafel",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 tbsp",
    "totalWeightGrams": 201,
    "calories": 110,
    "proteinGrams": 3,
    "carbsGrams": 6,
    "fatGrams": 8,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.1965,
    "ingredients": "Brinjal-100 gms;Garlic -2 gms; Lemon-4 gms; Cooking oil-15 gms; Cumin seeds-4 gms; Common salt-15 gms; Black pepper-15 gms;Parsley -4 gms; Onion-15 gms; Coriander leaves-15 gms; Mint leaves-4 gms; Coriander seeds-4 gms; Chillies-4 gms",
    "parsedIngredients": [
      "Brinjal-100 gms",
      "Garlic -2 gms",
      "Lemon-4 gms",
      "Cooking oil-15 gms",
      "Cumin seeds-4 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Parsley -4 gms",
      "Onion-15 gms",
      "Coriander leaves-15 gms",
      "Mint leaves-4 gms",
      "Coriander seeds-4 gms",
      "Chillies-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-336",
    "name": "GOBHI MATAR VegETABLE",
    "cleanSearchName": "GOBHI MATAR VegETABLE",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 657,
    "calories": 213,
    "proteinGrams": 11,
    "carbsGrams": 23,
    "fatGrams": 6,
    "fiberGrams": 16,
    "carbonFootprintKgCO2e": 0.6326,
    "ingredients": "Cauliflower-250 gms; Peas-62 gms; Tomato-120 gms; Onion-90 gms; Ginger-20 gms; Cumin seeds-7 gms; Coriander seeds-4 gms; Turmeric powder-7 gms; Chillies-7 gms; Common salt-15 gms; Cooking oil-15 gms; CORIANDER LEAVES-60 gms",
    "parsedIngredients": [
      "Cauliflower-250 gms",
      "Peas-62 gms",
      "Tomato-120 gms",
      "Onion-90 gms",
      "Ginger-20 gms",
      "Cumin seeds-7 gms",
      "Coriander seeds-4 gms",
      "Turmeric powder-7 gms",
      "Chillies-7 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms",
      "CORIANDER LEAVES-60 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-337",
    "name": "KASHMIRI BAINGAN",
    "cleanSearchName": "KASHMIRI BAINGAN",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 535,
    "calories": 110,
    "proteinGrams": 2,
    "carbsGrams": 10,
    "fatGrams": 5,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.4166,
    "ingredients": "Brinjal-250 gms; Tomato-120 gms; Onion-90 gms; Ginger-1.5 gms; Garlic-1.5 gms; Cumin seeds-4 gms; Chillies-7 gms; Turmeric powder-4 gms; Cinnamon-4 gms; Cardamom-4 gms; Cloves-4 gms; Black PEPPER-4 gms; Cooking oil-15 gms; Common salt-15 gms; Coriander leaves -4 gms",
    "parsedIngredients": [
      "Brinjal-250 gms",
      "Tomato-120 gms",
      "Onion-90 gms",
      "Ginger-1.5 gms",
      "Garlic-1.5 gms",
      "Cumin seeds-4 gms",
      "Chillies-7 gms",
      "Turmeric powder-4 gms",
      "Cinnamon-4 gms",
      "Cardamom-4 gms",
      "Cloves-4 gms",
      "Black PEPPER-4 gms",
      "Cooking oil-15 gms",
      "Common salt-15 gms",
      "Coriander leaves -4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-338",
    "name": "KASHMIRI GOBHI",
    "cleanSearchName": "KASHMIRI GOBHI",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 573,
    "calories": 245,
    "proteinGrams": 6,
    "carbsGrams": 14,
    "fatGrams": 16,
    "fiberGrams": 11,
    "carbonFootprintKgCO2e": 0.5191,
    "ingredients": "Cauliflower-250 gms; Tomato-120 gms; Onion-120 gms; Ginger-1.5 gms;Garlic-1.5 gms; Cumin seeds-0.25 gms; Chillies-7 gms; Turmeric powder-4 gms; Cinnamon-4 gms; Cardamom-4 gms; Cloves-4 gms; Black pepper-4 gms; Mustard oil-15 gms; Common salt-1 gms; Coriander leaves-5 gms",
    "parsedIngredients": [
      "Cauliflower-250 gms",
      "Tomato-120 gms",
      "Onion-120 gms",
      "Ginger-1.5 gms",
      "Garlic-1.5 gms",
      "Cumin seeds-0.25 gms",
      "Chillies-7 gms",
      "Turmeric powder-4 gms",
      "Cinnamon-4 gms",
      "Cardamom-4 gms",
      "Cloves-4 gms",
      "Black pepper-4 gms",
      "Mustard oil-15 gms",
      "Common salt-1 gms",
      "Coriander leaves-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-339",
    "name": "KASHMIRI PALAK",
    "cleanSearchName": "KASHMIRI PALAK",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 450,
    "calories": 154,
    "proteinGrams": 5,
    "carbsGrams": 14,
    "fatGrams": 7,
    "fiberGrams": 8,
    "carbonFootprintKgCO2e": 0.3981,
    "ingredients": "Spinach-250 gms; Tomato-120 gms; Onion-0.5 gms; Garlic-1.5 gms; Ginger-1.5 gms; Cumin seeds-4 gms; Chillies-7 gms; Turmeric powder-4 gms; Cinnamon-4 gms; Cardamom-4 gms; CLOVES-4 gms; Black PEPPER-4 gms; Mustard oil-15 gms; Common salt-15 gms; Coriander leaves -4 gms",
    "parsedIngredients": [
      "Spinach-250 gms",
      "Tomato-120 gms",
      "Onion-0.5 gms",
      "Garlic-1.5 gms",
      "Ginger-1.5 gms",
      "Cumin seeds-4 gms",
      "Chillies-7 gms",
      "Turmeric powder-4 gms",
      "Cinnamon-4 gms",
      "Cardamom-4 gms",
      "CLOVES-4 gms",
      "Black PEPPER-4 gms",
      "Mustard oil-15 gms",
      "Common salt-15 gms",
      "Coriander leaves -4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-340",
    "name": "Parwal",
    "cleanSearchName": "Parwal",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 379,
    "calories": 102,
    "proteinGrams": 1,
    "carbsGrams": 7,
    "fatGrams": 5,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.4981,
    "ingredients": "Onion-120 gms; Tomato-120 gms; Ginger-80 gms; Cumin seeds-7 gms; Turmeric powder-7 gms; Chillies-4 gms; Coriander seeds-7 gms; Mustard oil-15 gms; Common salt-15 gms; Coriander leaves-4 gms",
    "parsedIngredients": [
      "Onion-120 gms",
      "Tomato-120 gms",
      "Ginger-80 gms",
      "Cumin seeds-7 gms",
      "Turmeric powder-7 gms",
      "Chillies-4 gms",
      "Coriander seeds-7 gms",
      "Mustard oil-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-341",
    "name": "Mushroom Vegetable",
    "cleanSearchName": "Mushroom Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 297,
    "calories": 162,
    "proteinGrams": 7,
    "carbsGrams": 9,
    "fatGrams": 9,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.5883,
    "ingredients": "Mushroom-150 gms; Onion-90 gms; Ginger-1.5 gms; Cumin seeds-7 gms; Turmeric powder-7 gms; Chillies-4 gms; Coriander seeds-7 gms; Mustard oil-7 gms; Common salt-15 gms; Coriander leaves-5 gms",
    "parsedIngredients": [
      "Mushroom-150 gms",
      "Onion-90 gms",
      "Ginger-1.5 gms",
      "Cumin seeds-7 gms",
      "Turmeric powder-7 gms",
      "Chillies-4 gms",
      "Coriander seeds-7 gms",
      "Mustard oil-7 gms",
      "Common salt-15 gms",
      "Coriander leaves-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-342",
    "name": "Muli Saag",
    "cleanSearchName": "Muli Saag",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 212,
    "calories": 178,
    "proteinGrams": 6,
    "carbsGrams": 14,
    "fatGrams": 7,
    "fiberGrams": 14,
    "carbonFootprintKgCO2e": 0.1395,
    "ingredients": "Radish leaves-150 gms; RADISH-0.5 gms; Cumin seeds-7 gms; Turmeric powder-7 gms; Chillies-4 gms; Coriander seeds-7 gms; Chillies-2 gms; Mustard oil-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Radish leaves-150 gms",
      "RADISH-0.5 gms",
      "Cumin seeds-7 gms",
      "Turmeric powder-7 gms",
      "Chillies-4 gms",
      "Coriander seeds-7 gms",
      "Chillies-2 gms",
      "Mustard oil-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-343",
    "name": "Methi Aloo Vegetable",
    "cleanSearchName": "Methi Aloo Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 257,
    "calories": 270,
    "proteinGrams": 9,
    "carbsGrams": 35,
    "fatGrams": 7,
    "fiberGrams": 16,
    "carbonFootprintKgCO2e": 0.1995,
    "ingredients": "Fenugreek leaves-100 gms; POTATO-100 gms; Cumin seeds-7 gms; Turmeric powder-7 gms; Chillies-4 gms; Coriander seeds-7 gms; Chillies-2 gms; Mustard oil-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Fenugreek leaves-100 gms",
      "POTATO-100 gms",
      "Cumin seeds-7 gms",
      "Turmeric powder-7 gms",
      "Chillies-4 gms",
      "Coriander seeds-7 gms",
      "Chillies-2 gms",
      "Mustard oil-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-344",
    "name": "Methi Gajar Vegetable",
    "cleanSearchName": "Methi Gajar Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 257,
    "calories": 221,
    "proteinGrams": 8,
    "carbsGrams": 23,
    "fatGrams": 7,
    "fiberGrams": 17,
    "carbonFootprintKgCO2e": 0.2095,
    "ingredients": "Fenugreek leaves-100 gms; carrot-100 gms; Cumin seeds-7 gms; Turmeric powder-7 gms; Chillies-4 gms; Coriander seeds-7 gms; Chillies -2 gms; Mustard oil-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Fenugreek leaves-100 gms",
      "carrot-100 gms",
      "Cumin seeds-7 gms",
      "Turmeric powder-7 gms",
      "Chillies-4 gms",
      "Coriander seeds-7 gms",
      "Chillies -2 gms",
      "Mustard oil-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-345",
    "name": "Veg Entree (Grilled)",
    "cleanSearchName": "Veg Entree (Grilled)",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 383,
    "calories": 122,
    "proteinGrams": 7,
    "carbsGrams": 17,
    "fatGrams": 0,
    "fiberGrams": 12,
    "carbonFootprintKgCO2e": 0.252,
    "ingredients": "Garlic-2 gms; Common salt-15 gms; Black pepper-15 gms; Capsicum-90  gms; Onion-90 gms; Brinjal-123 gms; Mushroom-48 gms",
    "parsedIngredients": [
      "Garlic-2 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Capsicum-90  gms",
      "Onion-90 gms",
      "Brinjal-123 gms",
      "Mushroom-48 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-346",
    "name": "Tomato Rice (White Rice)",
    "cleanSearchName": "Tomato Rice (White Rice)",
    "associativity": "5",
    "associativityCategory": "Khichdi, Pulao & Biryani",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 303,
    "calories": 530,
    "proteinGrams": 12,
    "carbsGrams": 101,
    "fatGrams": 6,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.6382,
    "ingredients": "Puffed rice-125 gms; Tomato-120 gms; Onion-1 gms; Turmeric powder-4 gms; Chillies-7 gms; Cumin seeds-7 gms; Mustard seeds-7 gms; Fenugreek seeds-7 gms; Curry leaves-3 gms; Cooking oil-15 gms; Common salt-7 gms",
    "parsedIngredients": [
      "Puffed rice-125 gms",
      "Tomato-120 gms",
      "Onion-1 gms",
      "Turmeric powder-4 gms",
      "Chillies-7 gms",
      "Cumin seeds-7 gms",
      "Mustard seeds-7 gms",
      "Fenugreek seeds-7 gms",
      "Curry leaves-3 gms",
      "Cooking oil-15 gms",
      "Common salt-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-347",
    "name": "Moong Tikki",
    "cleanSearchName": "Moong Tikki",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "3 number",
    "totalWeightGrams": 201,
    "calories": 94,
    "proteinGrams": 5,
    "carbsGrams": 13,
    "fatGrams": 2,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.1273,
    "ingredients": "Dal dal-62 gms; POTATO-90 gms; Ginger-4 gms; Chillies-4 gms; Common salt-15 gms; Cumin seeds-4 gms; Lemon-7 gms; Cooking oil-15 gms",
    "parsedIngredients": [
      "Dal dal-62 gms",
      "POTATO-90 gms",
      "Ginger-4 gms",
      "Chillies-4 gms",
      "Common salt-15 gms",
      "Cumin seeds-4 gms",
      "Lemon-7 gms",
      "Cooking oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-348",
    "name": "Kari-Patta Water",
    "cleanSearchName": "Kari-Patta Water",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 11,
    "calories": 21,
    "proteinGrams": 0,
    "carbsGrams": 0,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.0075,
    "ingredients": "Curry leaves-6 gms;Ajwain-5 gms",
    "parsedIngredients": [
      "Curry leaves-6 gms",
      "Ajwain-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-349",
    "name": "Dal Soup",
    "cleanSearchName": "Dal Soup",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "3 medium katori",
    "totalWeightGrams": 374,
    "calories": 48,
    "proteinGrams": 2,
    "carbsGrams": 6,
    "fatGrams": 1,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.4585,
    "ingredients": "Onion-60 gms; Garlic-0.5 gms; Ginger-7 gms; Turmeric powder-4 gms; Cumin seeds-4 gms; Coriander seeds-4 gms; Common salt-15 gms; Black pepper-15 gms; Coriander leaves-5 gms; Olive oil-15 gms; Moong Dal-150 gms; Tomato -90 gms",
    "parsedIngredients": [
      "Onion-60 gms",
      "Garlic-0.5 gms",
      "Ginger-7 gms",
      "Turmeric powder-4 gms",
      "Cumin seeds-4 gms",
      "Coriander seeds-4 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Coriander leaves-5 gms",
      "Olive oil-15 gms",
      "Moong Dal-150 gms",
      "Tomato -90 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-350",
    "name": "Pumpkin Vegetable",
    "cleanSearchName": "Pumpkin Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 333,
    "calories": 111,
    "proteinGrams": 3,
    "carbsGrams": 13,
    "fatGrams": 4,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.1355,
    "ingredients": "PUMPKIN-250 gms; Mustard oil-7 gms; Mustard seeds-7 gms; Curry leaves-6 gms; Pomegranate, maroon seeds-15 gms; Common salt-15 gms; Turmeric powder-4 gms;Black Pepper-4 gms; Cumin seeds-0.25 gms",
    "parsedIngredients": [
      "PUMPKIN-250 gms",
      "Mustard oil-7 gms",
      "Mustard seeds-7 gms",
      "Curry leaves-6 gms",
      "Pomegranate, maroon seeds-15 gms",
      "Common salt-15 gms",
      "Turmeric powder-4 gms",
      "Black Pepper-4 gms",
      "Cumin seeds-0.25 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-351",
    "name": "Capsicum Potato Vegetable",
    "cleanSearchName": "Capsicum Potato Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 315,
    "calories": 126,
    "proteinGrams": 1,
    "carbsGrams": 14,
    "fatGrams": 5,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.3839,
    "ingredients": "POTATO-90 gms; Capsicum-40 gms; Onion-0.5 gms; Tomato-120 gms; Mustard oil-15 gms; Cumin seeds-7 gms; Turmeric powder-7 gms; Chillies-7 gms; Common salt-15 gms; Parsley-4 gms; Coriander leaves-5 gms",
    "parsedIngredients": [
      "POTATO-90 gms",
      "Capsicum-40 gms",
      "Onion-0.5 gms",
      "Tomato-120 gms",
      "Mustard oil-15 gms",
      "Cumin seeds-7 gms",
      "Turmeric powder-7 gms",
      "Chillies-7 gms",
      "Common salt-15 gms",
      "Parsley-4 gms",
      "Coriander leaves-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-352",
    "name": "Cauliflower Vegetable",
    "cleanSearchName": "Cauliflower Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 328,
    "calories": 94,
    "proteinGrams": 6,
    "carbsGrams": 9,
    "fatGrams": 1,
    "fiberGrams": 13,
    "carbonFootprintKgCO2e": 0.1545,
    "ingredients": "Cauliflower-250 gms; Onion-0.5 gms; Ginger-15 gms; Cumin seeds-7 gms; Coriander seeds-7 gms; Turmeric powder-4 gms; Common salt-15 gms; Black pepper-15 gms;Parsley-5 gms; Coriander leaves-5 gms",
    "parsedIngredients": [
      "Cauliflower-250 gms",
      "Onion-0.5 gms",
      "Ginger-15 gms",
      "Cumin seeds-7 gms",
      "Coriander seeds-7 gms",
      "Turmeric powder-4 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Parsley-5 gms",
      "Coriander leaves-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-353",
    "name": "Drumstick Curry",
    "cleanSearchName": "Drumstick Curry",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 182,
    "calories": 44,
    "proteinGrams": 0,
    "carbsGrams": 5,
    "fatGrams": 0,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.2601,
    "ingredients": "Drumstick-2 gms; Onion-0.5 gms; Tomato-120 gms)-1 small; Ginger-0.5 gms;Garlic-0.5 gms; Cumin seeds-7 gms; Turmeric powder-7 gms; Coriander seeds-7 gms; Chillies-4 gms; Common salt-15 gms; Coriander leaves-5 gms",
    "parsedIngredients": [
      "Drumstick-2 gms",
      "Onion-0.5 gms",
      "Tomato-120 gms)-1 small",
      "Ginger-0.5 gms",
      "Garlic-0.5 gms",
      "Cumin seeds-7 gms",
      "Turmeric powder-7 gms",
      "Coriander seeds-7 gms",
      "Chillies-4 gms",
      "Common salt-15 gms",
      "Coriander leaves-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-354",
    "name": "Ganth Gobhi Vegetable (Lump Cabbage)",
    "cleanSearchName": "Ganth Gobhi Vegetable (Lump Cabbage)",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 235,
    "calories": 92,
    "proteinGrams": 2,
    "carbsGrams": 6,
    "fatGrams": 5,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.3232,
    "ingredients": "Onion-15 gms;Garlic-1 gms; Cumin seeds-7 gms; Turmeric powder-4 gms; Coriander seeds-4 gms; Chillies-4 gms; Common salt-15 gms; Black pepper-15 gms; Coriander leaves-5 gms; CAULIFLOWER-150 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Onion-15 gms",
      "Garlic-1 gms",
      "Cumin seeds-7 gms",
      "Turmeric powder-4 gms",
      "Coriander seeds-4 gms",
      "Chillies-4 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Coriander leaves-5 gms",
      "CAULIFLOWER-150 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-355",
    "name": "Dry Matar Vegetable",
    "cleanSearchName": "Dry Matar Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 339,
    "calories": 452,
    "proteinGrams": 17,
    "carbsGrams": 40,
    "fatGrams": 23,
    "fiberGrams": 13,
    "carbonFootprintKgCO2e": 0.4198,
    "ingredients": "Peas-250 gms; Onion-15 gms; Ginger-7 gms; Mustard oil-7 gms; Cumin seeds-7 gms; Turmeric powder-7 gms; Coriander seeds-7 gms; Chillies-4 gms; Common salt-15 gms; Coriander leaves-5 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Peas-250 gms",
      "Onion-15 gms",
      "Ginger-7 gms",
      "Mustard oil-7 gms",
      "Cumin seeds-7 gms",
      "Turmeric powder-7 gms",
      "Coriander seeds-7 gms",
      "Chillies-4 gms",
      "Common salt-15 gms",
      "Coriander leaves-5 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-356",
    "name": "Beetroot Salad",
    "cleanSearchName": "Beetroot Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 325,
    "calories": 34,
    "proteinGrams": 2,
    "carbsGrams": 4,
    "fatGrams": 1,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.249,
    "ingredients": "Beetroot-50 gms; CUCUMBER-25 gms; Onion-25 gms; Tomato-90 gms; carrot-50 gms; Lettuce Leaf-30 gms; Lemon-15 gms; Common salt-15 gms; Black pepper-15 gms; Parsley-5 gms; CORIANDER-5 gms",
    "parsedIngredients": [
      "Beetroot-50 gms",
      "CUCUMBER-25 gms",
      "Onion-25 gms",
      "Tomato-90 gms",
      "carrot-50 gms",
      "Lettuce Leaf-30 gms",
      "Lemon-15 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Parsley-5 gms",
      "CORIANDER-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-357",
    "name": "Bellpepper Salad",
    "cleanSearchName": "Bellpepper Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 950,
    "calories": 153,
    "proteinGrams": 11,
    "carbsGrams": 17,
    "fatGrams": 3,
    "fiberGrams": 18,
    "carbonFootprintKgCO2e": 1.408,
    "ingredients": "Capsicum-750 gms; CUCUMBER-50 gms; Onion-25 gms; Tomato-90 gms; Common salt-15 gms; Black pepper-15 gms; Parsley-5 gms",
    "parsedIngredients": [
      "Capsicum-750 gms",
      "CUCUMBER-50 gms",
      "Onion-25 gms",
      "Tomato-90 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Parsley-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-358",
    "name": "Fresh Fruit Salad",
    "cleanSearchName": "Fresh Fruit Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 464,
    "calories": 313,
    "proteinGrams": 9,
    "carbsGrams": 32,
    "fatGrams": 16,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.23525,
    "ingredients": "APPLE-100 gms; BANANA-59 gms; Mango-150 gms; Common salt-15 gms; PUMPKIN SEED-15 gms; Sunflower seeds-15 gms; Mint leaves-5 gms; Strawberry-30 gms; Pineapple-75 gms",
    "parsedIngredients": [
      "APPLE-100 gms",
      "BANANA-59 gms",
      "Mango-150 gms",
      "Common salt-15 gms",
      "PUMPKIN SEED-15 gms",
      "Sunflower seeds-15 gms",
      "Mint leaves-5 gms",
      "Strawberry-30 gms",
      "Pineapple-75 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-359",
    "name": "Chicken soup",
    "cleanSearchName": "Chicken soup",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 248,
    "calories": 386,
    "proteinGrams": 39,
    "carbsGrams": 10,
    "fatGrams": 20,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.8119,
    "ingredients": "Chicken-100 gms; carrot-60 gms; Celery-17 gms; Onion-1 gms; Garlic-10 gms; Common salt-15 gms; Black pepper-15 gms; Parsley-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Chicken-100 gms",
      "carrot-60 gms",
      "Celery-17 gms",
      "Onion-1 gms",
      "Garlic-10 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Parsley-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-360",
    "name": "2 Pieces Stuffed idli",
    "cleanSearchName": "2 Pieces Stuffed idli",
    "associativity": "14",
    "associativityCategory": "South Indian Dosas, Idlis & Uttapams",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner",
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 number",
    "totalWeightGrams": 424,
    "calories": 386,
    "proteinGrams": 14,
    "carbsGrams": 73,
    "fatGrams": 4,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.7773,
    "ingredients": "RICE-125 gms; Gram dal-62 gms; Common salt-15 gms; carrot-62 gms; Peas-62 gms; Beans-62 gms; Mustard seeds-4 gms; Cumin seeds-4 gms; Turmeric powder-4 gms; Chillies-4 gms; Cooking oil-15 gms; CORIANDER LEAVES-5 gms",
    "parsedIngredients": [
      "RICE-125 gms",
      "Gram dal-62 gms",
      "Common salt-15 gms",
      "carrot-62 gms",
      "Peas-62 gms",
      "Beans-62 gms",
      "Mustard seeds-4 gms",
      "Cumin seeds-4 gms",
      "Turmeric powder-4 gms",
      "Chillies-4 gms",
      "Cooking oil-15 gms",
      "CORIANDER LEAVES-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-361",
    "name": "HALDI WATER",
    "cleanSearchName": "HALDI WATER",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 4,
    "calories": 4,
    "proteinGrams": 0,
    "carbsGrams": 1,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.014,
    "ingredients": "Turmeric powder-4 gms",
    "parsedIngredients": [
      "Turmeric powder-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-362",
    "name": "HONEY LEMON WATER",
    "cleanSearchName": "HONEY LEMON WATER",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 22,
    "calories": 10,
    "proteinGrams": 0,
    "carbsGrams": 2,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.0109,
    "ingredients": "Lemon-15 gms; HONEY-7 gms",
    "parsedIngredients": [
      "Lemon-15 gms",
      "HONEY-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-363",
    "name": "JEERA AJWAIN WATER",
    "cleanSearchName": "JEERA AJWAIN WATER",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 20,
    "calories": 35,
    "proteinGrams": 1,
    "carbsGrams": 1,
    "fatGrams": 1,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.057,
    "ingredients": "Cumin seeds-15 gms; Ajwain-5 gms",
    "parsedIngredients": [
      "Cumin seeds-15 gms",
      "Ajwain-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-364",
    "name": "Grilled Chicken Salad",
    "cleanSearchName": "Grilled Chicken Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 180,
    "calories": 156,
    "proteinGrams": 15,
    "carbsGrams": 6,
    "fatGrams": 5,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.5192,
    "ingredients": "Chicken-60 gms; Garlic-0.5 gms; Common salt-15 gms; Black pepper-15 gms; carrot-1 gms; Capsicum-20 gms; Lettuce Leaf-10 gms; Yoghurt-10 gms; Lemon-15 gms; Coriander leaves-20 gms; Mint leaves-2 gms; Cumin seeds-7 gms",
    "parsedIngredients": [
      "Chicken-60 gms",
      "Garlic-0.5 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "carrot-1 gms",
      "Capsicum-20 gms",
      "Lettuce Leaf-10 gms",
      "Yoghurt-10 gms",
      "Lemon-15 gms",
      "Coriander leaves-20 gms",
      "Mint leaves-2 gms",
      "Cumin seeds-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-365",
    "name": "TANDOORI CHICKEN (2 LEG & 2 BREAST)",
    "cleanSearchName": "TANDOORI CHICKEN (2 LEG & 2 BREAST)",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 medium",
    "totalWeightGrams": 230,
    "calories": 52,
    "proteinGrams": 1,
    "carbsGrams": 4,
    "fatGrams": 3,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 1.067,
    "ingredients": "Chicken-150 gms; Lemon-15 gms; Ginger-10 gms; Garlic-10 gms; Cumin seeds-7 gms; Turmeric powder-4 gms; Chillies-4 gms; Common salt-15 gms; Cooking oil-15 gms",
    "parsedIngredients": [
      "Chicken-150 gms",
      "Lemon-15 gms",
      "Ginger-10 gms",
      "Garlic-10 gms",
      "Cumin seeds-7 gms",
      "Turmeric powder-4 gms",
      "Chillies-4 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-366",
    "name": "Mixed Fresh Fruit Juice",
    "cleanSearchName": "Mixed Fresh Fruit Juice",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 glass",
    "totalWeightGrams": 428,
    "calories": 82,
    "proteinGrams": 1,
    "carbsGrams": 19,
    "fatGrams": 1,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.1955,
    "ingredients": "ORANGE-150 gms; Apple-150 gms; Pear-89 gms; Ginger-24 gms; Lemon-15 gms",
    "parsedIngredients": [
      "ORANGE-150 gms",
      "Apple-150 gms",
      "Pear-89 gms",
      "Ginger-24 gms",
      "Lemon-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-367",
    "name": "Shreded Chicken Dish",
    "cleanSearchName": "Shreded Chicken Dish",
    "associativity": "8",
    "associativityCategory": "Gravy Curries, Soups & Stews",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Gravy"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 705,
    "calories": 298,
    "proteinGrams": 21,
    "carbsGrams": 36,
    "fatGrams": 6,
    "fiberGrams": 11,
    "carbonFootprintKgCO2e": 1.112,
    "ingredients": "Chicken-150 gms; Onion-250 gms; Zucchini-250 gms; Garlic-10 gms; Common salt-15 gms; Black pepper-15 gms; Lemon-15 gms",
    "parsedIngredients": [
      "Chicken-150 gms",
      "Onion-250 gms",
      "Zucchini-250 gms",
      "Garlic-10 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Lemon-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-368",
    "name": "Black Rice (pulao)",
    "cleanSearchName": "Black Rice (pulao)",
    "associativity": "3",
    "associativityCategory": "Rice & Millet Dishes",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Lunch"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 501,
    "calories": 415,
    "proteinGrams": 11,
    "carbsGrams": 74,
    "fatGrams": 8,
    "fiberGrams": 11,
    "carbonFootprintKgCO2e": 1.6874,
    "ingredients": "carrot-1 gms; Peas-50 gms; Capsicum-50 gms; Cooking oil-15 gms; Turmeric powder-15 gms; Cumin seeds-15 gms; Coriander leaves-5 gms; Rice-350 gms",
    "parsedIngredients": [
      "carrot-1 gms",
      "Peas-50 gms",
      "Capsicum-50 gms",
      "Cooking oil-15 gms",
      "Turmeric powder-15 gms",
      "Cumin seeds-15 gms",
      "Coriander leaves-5 gms",
      "Rice-350 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-369",
    "name": "PULAO",
    "cleanSearchName": "PULAO",
    "associativity": "3",
    "associativityCategory": "Rice & Millet Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 583,
    "calories": 481,
    "proteinGrams": 17,
    "carbsGrams": 87,
    "fatGrams": 3,
    "fiberGrams": 14,
    "carbonFootprintKgCO2e": 0.8182,
    "ingredients": "Rice-62 gms; carrot-125 gms; Peas-125 gms; Capsicum-125 gms; Onion-1 gms; Tomato-90 gms; Ginger-2 gms; Garlic-2 gms; Cumin seeds-7 gms; Ghee-7 gms; Turmeric powder-5 gms; Coriander seeds-7 gms; Black pepper-5 gms; Common salt-15 gms; Coriander leaves-5 gms",
    "parsedIngredients": [
      "Rice-62 gms",
      "carrot-125 gms",
      "Peas-125 gms",
      "Capsicum-125 gms",
      "Onion-1 gms",
      "Tomato-90 gms",
      "Ginger-2 gms",
      "Garlic-2 gms",
      "Cumin seeds-7 gms",
      "Ghee-7 gms",
      "Turmeric powder-5 gms",
      "Coriander seeds-7 gms",
      "Black pepper-5 gms",
      "Common salt-15 gms",
      "Coriander leaves-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-370",
    "name": "Millets (Little) (Pulav)",
    "cleanSearchName": "Millets (Little) (Pulav)",
    "associativity": "3",
    "associativityCategory": "Rice & Millet Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 796,
    "calories": 503,
    "proteinGrams": 25,
    "carbsGrams": 94,
    "fatGrams": 1,
    "fiberGrams": 20,
    "carbonFootprintKgCO2e": 0.4827,
    "ingredients": "Garlic-1 gms; carrot-250 gms; Onion-250 gms; Peas-250 gms; Cumin seeds-15 gms; Common salt-15 gms; Black pepper-15 gms",
    "parsedIngredients": [
      "Garlic-1 gms",
      "carrot-250 gms",
      "Onion-250 gms",
      "Peas-250 gms",
      "Cumin seeds-15 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-371",
    "name": "Quinoa Khichdi",
    "cleanSearchName": "Quinoa Khichdi",
    "associativity": "3",
    "associativityCategory": "Rice & Millet Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 118,
    "calories": 307,
    "proteinGrams": 12,
    "carbsGrams": 40,
    "fatGrams": 9,
    "fiberGrams": 13,
    "carbonFootprintKgCO2e": 0.1927,
    "ingredients": "Quinoa-50 gms; Dal-20 gms; Cooking oil-5 gms; Cumin seeds-7 gms; Mustard seeds-7 gms; Turmeric powder-7 gms; Coriander seeds-7 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Quinoa-50 gms",
      "Dal-20 gms",
      "Cooking oil-5 gms",
      "Cumin seeds-7 gms",
      "Mustard seeds-7 gms",
      "Turmeric powder-7 gms",
      "Coriander seeds-7 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-372",
    "name": "Quinoa Pulao",
    "cleanSearchName": "Quinoa Pulao",
    "associativity": "3",
    "associativityCategory": "Rice & Millet Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 401,
    "calories": 411,
    "proteinGrams": 17,
    "carbsGrams": 61,
    "fatGrams": 8,
    "fiberGrams": 20,
    "carbonFootprintKgCO2e": 0.405,
    "ingredients": "Quinoa-50 gms; carrot-100 gms; Peas-100 gms; Beans-100 gms; Cooking oil-15 gms; Cumin seeds-7 gms; Turmeric powder-7 gms; Coriander seeds-7 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Quinoa-50 gms",
      "carrot-100 gms",
      "Peas-100 gms",
      "Beans-100 gms",
      "Cooking oil-15 gms",
      "Cumin seeds-7 gms",
      "Turmeric powder-7 gms",
      "Coriander seeds-7 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-373",
    "name": "Ragi Dalia",
    "cleanSearchName": "Ragi Dalia",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 628,
    "calories": 411,
    "proteinGrams": 7,
    "carbsGrams": 52,
    "fatGrams": 19,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.7422,
    "ingredients": "Cumin seeds-7 gms; Chillies-4 gms; Cooking oil-15 gms; Onion-125 gms; Tomato-120 gms; dalia-350 gms; Common salt-7 gms",
    "parsedIngredients": [
      "Cumin seeds-7 gms",
      "Chillies-4 gms",
      "Cooking oil-15 gms",
      "Onion-125 gms",
      "Tomato-120 gms",
      "dalia-350 gms",
      "Common salt-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-374",
    "name": "Cooked Arhar dal",
    "cleanSearchName": "Cooked Arhar dal",
    "associativity": "2,8",
    "associativityCategory": "Combination Curries (Dry & Gravy)",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry",
      "Gravy"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 282,
    "calories": 184,
    "proteinGrams": 6,
    "carbsGrams": 21,
    "fatGrams": 8,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.1962,
    "ingredients": "Turmeric powder-4 gms; Common salt-15 gms; Cooking oil-7 gms; Mustard seeds-4 gms; Cumin seeds-4 gms; Ginger-0.25 gms; Garlic-1 gms; Tomato-62.5 gms; Onion-62 gms; Coriander leaves-5 gms; Dal-150 gms",
    "parsedIngredients": [
      "Turmeric powder-4 gms",
      "Common salt-15 gms",
      "Cooking oil-7 gms",
      "Mustard seeds-4 gms",
      "Cumin seeds-4 gms",
      "Ginger-0.25 gms",
      "Garlic-1 gms",
      "Tomato-62.5 gms",
      "Onion-62 gms",
      "Coriander leaves-5 gms",
      "Dal-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-375",
    "name": "Chicken frittata",
    "cleanSearchName": "Chicken frittata",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 170,
    "calories": 138,
    "proteinGrams": 14,
    "carbsGrams": 4,
    "fatGrams": 5,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.554,
    "ingredients": "Chicken-60 gms; Egg-20 gms; Capsicum-20 gms; Onion-20 gms; Spinach-20 gms; Common salt-15 gms; Black pepper-15 gms",
    "parsedIngredients": [
      "Chicken-60 gms",
      "Egg-20 gms",
      "Capsicum-20 gms",
      "Onion-20 gms",
      "Spinach-20 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-376",
    "name": "Roasted Fish",
    "cleanSearchName": "Roasted Fish",
    "associativity": "8",
    "associativityCategory": "Gravy Curries, Soups & Stews",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Gravy"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "3 number",
    "totalWeightGrams": 99,
    "calories": 41,
    "proteinGrams": 5,
    "carbsGrams": 1,
    "fatGrams": 2,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.3335,
    "ingredients": "Lemon-1 gms; Common salt-15 gms; Black pepper-15 gms; Garlic-3 gms; Parsley-5 gms; Salmon-60 gms",
    "parsedIngredients": [
      "Lemon-1 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Garlic-3 gms",
      "Parsley-5 gms",
      "Salmon-60 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-377",
    "name": "Masala Fish",
    "cleanSearchName": "Masala Fish",
    "associativity": "8",
    "associativityCategory": "Gravy Curries, Soups & Stews",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Gravy"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 number",
    "totalWeightGrams": 139,
    "calories": 114,
    "proteinGrams": 8,
    "carbsGrams": 6,
    "fatGrams": 7,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.3889,
    "ingredients": "Salmon-20 gms; Onion-10 gms; Ginger-7 gms; Garlic-7 gms; Turmeric powder-15 gms; Chillies-15 gms; Cumin seeds-15 gms; Coriander seeds-15 gms; Common salt-15 gms; Cooking oil-15 gms; Coriander leaves-5 gms",
    "parsedIngredients": [
      "Salmon-20 gms",
      "Onion-10 gms",
      "Ginger-7 gms",
      "Garlic-7 gms",
      "Turmeric powder-15 gms",
      "Chillies-15 gms",
      "Cumin seeds-15 gms",
      "Coriander seeds-15 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms",
      "Coriander leaves-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-378",
    "name": "Ghiya Vegetable (gravy)",
    "cleanSearchName": "Ghiya Vegetable (gravy)",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 819,
    "calories": 114,
    "proteinGrams": 1,
    "carbsGrams": 10,
    "fatGrams": 5,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.4675,
    "ingredients": "BOTTLE GOURD-500 gms; Tomato-90 gms; Onion-160 gms ; Cumin seeds-4 gms; Turmeric powder-7 gms; Chillies-4 gms; Coriander seeds-4 gms; Ginger-15 gms; Common salt-15 gms; Mustard oil-15 gms; Coriander leaves-5 gms",
    "parsedIngredients": [
      "BOTTLE GOURD-500 gms",
      "Tomato-90 gms",
      "Onion-160 gms",
      "Cumin seeds-4 gms",
      "Turmeric powder-7 gms",
      "Chillies-4 gms",
      "Coriander seeds-4 gms",
      "Ginger-15 gms",
      "Common salt-15 gms",
      "Mustard oil-15 gms",
      "Coriander leaves-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-379",
    "name": "Thai Salad with Coconut Lime Dressing",
    "cleanSearchName": "Thai Salad with Coconut Lime Dressing",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 149,
    "calories": 112,
    "proteinGrams": 3,
    "carbsGrams": 8,
    "fatGrams": 6,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.1749,
    "ingredients": "Zucchini-10 gms; Capsicum-20 gms; Cabbage-1- gms; Lettuce Leaf-30 gms; COCONUT milk-15 gms; Lemon-15 gms; Coriander leaves-15 gms; Garlic-7 gms; Ginger-7 gms; Common salt-15 gms; Black pepper-15 gms",
    "parsedIngredients": [
      "Zucchini-10 gms",
      "Capsicum-20 gms",
      "Cabbage-1- gms",
      "Lettuce Leaf-30 gms",
      "COCONUT milk-15 gms",
      "Lemon-15 gms",
      "Coriander leaves-15 gms",
      "Garlic-7 gms",
      "Ginger-7 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-380",
    "name": "Chicken Greek Salad",
    "cleanSearchName": "Chicken Greek Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 83,
    "calories": 152,
    "proteinGrams": 15,
    "carbsGrams": 9,
    "fatGrams": 5,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.0897,
    "ingredients": "Chicken-1 gms; Garlic-7 gms; Common salt-15 gms; Black pepper-15 gms; CUCUMBER-1 gms; Tomato-1 gms; Capsicum-1 gms; Lettuce Leaf-30 gms; Lemon-5 gms; Garlic-7 gms",
    "parsedIngredients": [
      "Chicken-1 gms",
      "Garlic-7 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "CUCUMBER-1 gms",
      "Tomato-1 gms",
      "Capsicum-1 gms",
      "Lettuce Leaf-30 gms",
      "Lemon-5 gms",
      "Garlic-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-381",
    "name": "Lettuce Avocado Salad",
    "cleanSearchName": "Lettuce Avocado Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 57,
    "calories": 128,
    "proteinGrams": 4,
    "carbsGrams": 9,
    "fatGrams": 7,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.1077,
    "ingredients": "Lettuce leaf-1 gms; Avocado-1 gms; CUCUMBER-1 gms; Yoghurt-10 gms; Lemon-5 gms; Coriander leaves-2 gms; Cumin seeds-7 gms; Common salt-15 gms; Black pepper-15 gms",
    "parsedIngredients": [
      "Lettuce leaf-1 gms",
      "Avocado-1 gms",
      "CUCUMBER-1 gms",
      "Yoghurt-10 gms",
      "Lemon-5 gms",
      "Coriander leaves-2 gms",
      "Cumin seeds-7 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-382",
    "name": "Almond coriander soup",
    "cleanSearchName": "Almond coriander soup",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 216,
    "calories": 157,
    "proteinGrams": 3,
    "carbsGrams": 4,
    "fatGrams": 14,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.1964,
    "ingredients": "Coriander leaves-10 gms; Ginger-1 gms; Common salt-4 gms; Onion-150 gms; Black pepper-0.25 gms; Olive oil-15 gms; Almond-11 gms",
    "parsedIngredients": [
      "Coriander leaves-10 gms",
      "Ginger-1 gms",
      "Common salt-4 gms",
      "Onion-150 gms",
      "Black pepper-0.25 gms",
      "Olive oil-15 gms",
      "Almond-11 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-383",
    "name": "Lemon rice soup",
    "cleanSearchName": "Lemon rice soup",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 101,
    "calories": 239,
    "proteinGrams": 7,
    "carbsGrams": 42,
    "fatGrams": 3,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.2375,
    "ingredients": "Mustard seeds-5 gms; Cumin seeds-5 gms; Ginger-1 gms; Curry leaves-10 gms; Lemon-15 gms; Common salt-15 gms; Rice-50 gms",
    "parsedIngredients": [
      "Mustard seeds-5 gms",
      "Cumin seeds-5 gms",
      "Ginger-1 gms",
      "Curry leaves-10 gms",
      "Lemon-15 gms",
      "Common salt-15 gms",
      "Rice-50 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-384",
    "name": "Rice flour laddu",
    "cleanSearchName": "Rice flour laddu",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 gms",
    "totalWeightGrams": 305,
    "calories": 331,
    "proteinGrams": 6,
    "carbsGrams": 52,
    "fatGrams": 11,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 1.0385,
    "ingredients": "Rice-250 gms; COCONUT-50 gms; Cardamom-5 gms; Ghee-10 ml",
    "parsedIngredients": [
      "Rice-250 gms",
      "COCONUT-50 gms",
      "Cardamom-5 gms",
      "Ghee-10 ml"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-385",
    "name": "Thekua",
    "cleanSearchName": "Thekua",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "East"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "15 gms",
    "totalWeightGrams": 386,
    "calories": 91,
    "proteinGrams": 2,
    "carbsGrams": 15,
    "fatGrams": 2,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.368,
    "ingredients": "Atta-300 gms; Jaggery-40 gms; Cardamom-16 gms; Ghee-30 gms",
    "parsedIngredients": [
      "Atta-300 gms",
      "Jaggery-40 gms",
      "Cardamom-16 gms",
      "Ghee-30 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-386",
    "name": "Oats milk",
    "cleanSearchName": "Oats milk",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "3 glass",
    "totalWeightGrams": 94,
    "calories": 114,
    "proteinGrams": 4,
    "carbsGrams": 20,
    "fatGrams": 2,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.0004,
    "ingredients": "Rolled Oats-90 gms; Common salt-4 gms",
    "parsedIngredients": [
      "Rolled Oats-90 gms",
      "Common salt-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-387",
    "name": "Cooked Foxtail Millets",
    "cleanSearchName": "Cooked Foxtail Millets",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 150,
    "calories": 150,
    "proteinGrams": 0,
    "carbsGrams": 0,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0,
    "ingredients": "Millets-150 gms",
    "parsedIngredients": [
      "Millets-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-388",
    "name": "Cooked kuddo Millets",
    "cleanSearchName": "Cooked kuddo Millets",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 150,
    "calories": 43,
    "proteinGrams": 1,
    "carbsGrams": 9,
    "fatGrams": 0,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0,
    "ingredients": "Millets-150 gms",
    "parsedIngredients": [
      "Millets-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-389",
    "name": "Rice Noodles",
    "cleanSearchName": "Rice Noodles",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 165,
    "calories": 59,
    "proteinGrams": 1,
    "carbsGrams": 6,
    "fatGrams": 3,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.6015,
    "ingredients": "Rice Noodles-150 gms; ; Common salt-15 gms",
    "parsedIngredients": [
      "Rice Noodles-150 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-390",
    "name": "MILLET CHEELA",
    "cleanSearchName": "MILLET CHEELA",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West",
      "East"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 128,
    "calories": 119,
    "proteinGrams": 1,
    "carbsGrams": 15,
    "fatGrams": 4,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.0937,
    "ingredients": "Millets-45 gms; Onion-62.5 gms; carrot-40 gms; Spinach-37.5 gms; CORIANDER LEAVES-37.5 gms; Chillies-7 gms; Cumin seeds-7 gms; Cooking oil-7 gms; Common salt-7 gms",
    "parsedIngredients": [
      "Millets-45 gms",
      "Onion-62.5 gms",
      "carrot-40 gms",
      "Spinach-37.5 gms",
      "CORIANDER LEAVES-37.5 gms",
      "Chillies-7 gms",
      "Cumin seeds-7 gms",
      "Cooking oil-7 gms",
      "Common salt-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-391",
    "name": "Quinoa Cheela",
    "cleanSearchName": "Quinoa Cheela",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 443,
    "calories": 517,
    "proteinGrams": 17,
    "carbsGrams": 81,
    "fatGrams": 12,
    "fiberGrams": 10,
    "carbonFootprintKgCO2e": 0.6623,
    "ingredients": "Onion-15 gms; Capsicum-15 gms; carrot-15 gms; Coriander leaves-7 gms; Cumin seeds-4 gms; Chillies-7 gms; Cooking oil-15 gms; Common salt-15 gms; Quinoa-350 gms",
    "parsedIngredients": [
      "Onion-15 gms",
      "Capsicum-15 gms",
      "carrot-15 gms",
      "Coriander leaves-7 gms",
      "Cumin seeds-4 gms",
      "Chillies-7 gms",
      "Cooking oil-15 gms",
      "Common salt-15 gms",
      "Quinoa-350 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-392",
    "name": "Oats Dalia",
    "cleanSearchName": "Oats Dalia",
    "associativity": "3",
    "associativityCategory": "Rice & Millet Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 119,
    "calories": 107,
    "proteinGrams": 2,
    "carbsGrams": 9,
    "fatGrams": 6,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.19675,
    "ingredients": "Onion-15 gms; Peas-15 gms; carrot-15 gms; Beans-15 gms; Cumin seeds-15 gms; Turmeric powder-7 gms; Chillies-7 gms; Cooking oil-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Onion-15 gms",
      "Peas-15 gms",
      "carrot-15 gms",
      "Beans-15 gms",
      "Cumin seeds-15 gms",
      "Turmeric powder-7 gms",
      "Chillies-7 gms",
      "Cooking oil-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-393",
    "name": "Dal Tikki",
    "cleanSearchName": "Dal Tikki",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 number",
    "totalWeightGrams": 356,
    "calories": 143,
    "proteinGrams": 3,
    "carbsGrams": 10,
    "fatGrams": 10,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.26655,
    "ingredients": "Channa Dal-125 gms; POTATO-175 gms; Coriander leaves-7 gms; MANGO POWDER-7 gms; Cumin seeds-4 gms; Coriander seeds-4 gms; Chillies powder-4 gms; Common salt-15 gms; Cooking oil-15 gms",
    "parsedIngredients": [
      "Channa Dal-125 gms",
      "POTATO-175 gms",
      "Coriander leaves-7 gms",
      "MANGO POWDER-7 gms",
      "Cumin seeds-4 gms",
      "Coriander seeds-4 gms",
      "Chillies powder-4 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-394",
    "name": "Tea (ginger, Tulsi, cardamon, cinnamon sticks, black pepper)",
    "cleanSearchName": "Tea (ginger, Tulsi, cardamon, cinnamon sticks, black pepper)",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 cup",
    "totalWeightGrams": 910,
    "calories": 369,
    "proteinGrams": 14,
    "carbsGrams": 31,
    "fatGrams": 21,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 2.52,
    "ingredients": "Ginger-35 gms; Milk-875 gms",
    "parsedIngredients": [
      "Ginger-35 gms",
      "Milk-875 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-395",
    "name": "Spinach Salad",
    "cleanSearchName": "Spinach Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 184,
    "calories": 209,
    "proteinGrams": 2,
    "carbsGrams": 9,
    "fatGrams": 21,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.1677,
    "ingredients": "SPINACH-50 gms; CUCUMBER-20 gms; Sunflower Seeds-10 g; Pumpkin Seeds-30 gms; Lemon-15 gms; Common salt-7 gms; Black pepper-7 gms; Onion-62.5 gms; Tomato-45 gms; Olive oil-7.5 gms",
    "parsedIngredients": [
      "SPINACH-50 gms",
      "CUCUMBER-20 gms",
      "Sunflower Seeds-10 g",
      "Pumpkin Seeds-30 gms",
      "Lemon-15 gms",
      "Common salt-7 gms",
      "Black pepper-7 gms",
      "Onion-62.5 gms",
      "Tomato-45 gms",
      "Olive oil-7.5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-396",
    "name": "JAWAR STUFFED ROTI (Aloo)",
    "cleanSearchName": "JAWAR STUFFED ROTI (Aloo)",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 52,
    "calories": 57,
    "proteinGrams": 0,
    "carbsGrams": 2,
    "fatGrams": 5,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.0688,
    "ingredients": "Onion-15 gms; Coriander leaves-7 gms; Cooking oil-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Onion-15 gms",
      "Coriander leaves-7 gms",
      "Cooking oil-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-397",
    "name": "Aam Ras",
    "cleanSearchName": "Aam Ras",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 400,
    "calories": 208,
    "proteinGrams": 7,
    "carbsGrams": 26,
    "fatGrams": 8,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.8275,
    "ingredients": "MANGO-150 gms; Milk-250 gms",
    "parsedIngredients": [
      "MANGO-150 gms",
      "Milk-250 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-398",
    "name": "Lemon Coriander Soup",
    "cleanSearchName": "Lemon Coriander Soup",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 cup",
    "totalWeightGrams": 111,
    "calories": 20,
    "proteinGrams": 0,
    "carbsGrams": 1,
    "fatGrams": 2,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.1907,
    "ingredients": "Coriander leaves-15 gms; Ginger-1 gms; Garlic-1 gms; Common salt-15 gms; Lemon-15 gms; Olive oil-15 gms; Onion-31.25 gms; Coriander Powder -24 gms",
    "parsedIngredients": [
      "Coriander leaves-15 gms",
      "Ginger-1 gms",
      "Garlic-1 gms",
      "Common salt-15 gms",
      "Lemon-15 gms",
      "Olive oil-15 gms",
      "Onion-31.25 gms",
      "Coriander Powder -24 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-399",
    "name": "chicken stew",
    "cleanSearchName": "chicken stew",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 tbsp",
    "totalWeightGrams": 92,
    "calories": 34,
    "proteinGrams": 3,
    "carbsGrams": 2,
    "fatGrams": 1,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.3862,
    "ingredients": "Chicken-62 gms; POTATO-87.5 gms; carrot-20 gms; Peas-37.5 gms",
    "parsedIngredients": [
      "Chicken-62 gms",
      "POTATO-87.5 gms",
      "carrot-20 gms",
      "Peas-37.5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-400",
    "name": "moong dal puree",
    "cleanSearchName": "moong dal puree",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 small katori",
    "totalWeightGrams": 705,
    "calories": 84,
    "proteinGrams": 2,
    "carbsGrams": 8,
    "fatGrams": 5,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.603,
    "ingredients": "Moong Dal-150 gms; carrot-60 gms; POTATO-175 gms; TOMATO-90 gms; Onion-125 gms; Garlic-15 gms; Ginger-15 gms; Cumin seeds-15 gms; Turmeric powder-15 gms; Common salt-15 gms; Coriander leaves-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Moong Dal-150 gms",
      "carrot-60 gms",
      "POTATO-175 gms",
      "TOMATO-90 gms",
      "Onion-125 gms",
      "Garlic-15 gms",
      "Ginger-15 gms",
      "Cumin seeds-15 gms",
      "Turmeric powder-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-401",
    "name": "Rice Dosa",
    "cleanSearchName": "Rice Dosa",
    "associativity": "14",
    "associativityCategory": "South Indian Dosas, Idlis & Uttapams",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 24,
    "calories": 144,
    "proteinGrams": 5,
    "carbsGrams": 30,
    "fatGrams": 0,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.01165,
    "ingredients": "Urad Dal Flour-15 gms; Rice Flour-37.5 gms; Common salt-4 gms",
    "parsedIngredients": [
      "Urad Dal Flour-15 gms",
      "Rice Flour-37.5 gms",
      "Common salt-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-402",
    "name": "Quinoa Cutlet",
    "cleanSearchName": "Quinoa Cutlet",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 279,
    "calories": 184,
    "proteinGrams": 3,
    "carbsGrams": 27,
    "fatGrams": 9,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.20375,
    "ingredients": "Quinoa-75 gms; POTATO-87.5; carrot-60 gms; Beans-15 gms; Coriander leaves-7 gms; Ginger-0.25 gms; Cumin seeds-4 gms; Red chilli Powder-7 gms; Common salt-7 gms; Olive oil-3.75 gms; Garlic powder-4 gms",
    "parsedIngredients": [
      "Quinoa-75 gms",
      "POTATO-87.5",
      "carrot-60 gms",
      "Beans-15 gms",
      "Coriander leaves-7 gms",
      "Ginger-0.25 gms",
      "Cumin seeds-4 gms",
      "Red chilli Powder-7 gms",
      "Common salt-7 gms",
      "Olive oil-3.75 gms",
      "Garlic powder-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-403",
    "name": "Broccoli with mix bell pepper Vegetable",
    "cleanSearchName": "Broccoli with mix bell pepper Vegetable",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 732,
    "calories": 929,
    "proteinGrams": 34,
    "carbsGrams": 102,
    "fatGrams": 37,
    "fiberGrams": 67,
    "carbonFootprintKgCO2e": 1.1739,
    "ingredients": "Broccoli-200 gms; Capsicum-150 gms; Babycorn-100 gms; Tofu-250 gms; Black pepper-10 tbsp; Onion;Garlic-2 gms; Olive oil-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Broccoli-200 gms",
      "Capsicum-150 gms",
      "Babycorn-100 gms",
      "Tofu-250 gms",
      "Black pepper-10 tbsp",
      "Onion",
      "Garlic-2 gms",
      "Olive oil-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-404",
    "name": "Ragi Flour Cheela",
    "cleanSearchName": "Ragi Flour Cheela",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 169,
    "calories": 370,
    "proteinGrams": 5,
    "carbsGrams": 50,
    "fatGrams": 15,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.2712,
    "ingredients": "RAGI-60 gms; Onion-30 gms; TOMATO-30 gms; Capsicum-30 gms; Cumin seeds-2 gms; Common salt-2 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "RAGI-60 gms",
      "Onion-30 gms",
      "TOMATO-30 gms",
      "Capsicum-30 gms",
      "Cumin seeds-2 gms",
      "Common salt-2 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-405",
    "name": "Rice Flour Cheela",
    "cleanSearchName": "Rice Flour Cheela",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 211,
    "calories": 259,
    "proteinGrams": 2,
    "carbsGrams": 25,
    "fatGrams": 15,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.6626,
    "ingredients": "Rice Flour-150 gms; Cumin seeds-10 gms; CORIANDER-10 gms; Turmeric powder-10 gms; Red chilli Powder-15 gms; Common salt-1 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Rice Flour-150 gms",
      "Cumin seeds-10 gms",
      "CORIANDER-10 gms",
      "Turmeric powder-10 gms",
      "Red chilli Powder-15 gms",
      "Common salt-1 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-406",
    "name": "Vegetable Juice(Cucumber+Ghiya+1 Carrot)",
    "cleanSearchName": "Vegetable Juice(Cucumber+Ghiya+1 Carrot)",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 95,
    "calories": 67,
    "proteinGrams": 3,
    "carbsGrams": 13,
    "fatGrams": 0,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.0345,
    "ingredients": "CUCUMBER-20 gms; Bottle gourd-15 gms; Carrot-60 gms",
    "parsedIngredients": [
      "CUCUMBER-20 gms",
      "Bottle gourd-15 gms",
      "Carrot-60 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-407",
    "name": "Veg Shredded,Green Peas Mushroom Vegetable",
    "cleanSearchName": "Veg Shredded,Green Peas Mushroom Vegetable",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 1113,
    "calories": 360,
    "proteinGrams": 13,
    "carbsGrams": 46,
    "fatGrams": 11,
    "fiberGrams": 12,
    "carbonFootprintKgCO2e": 1.5138,
    "ingredients": "CABBAGE-250 gms; carrot-250 gms; Peas-250 gms; MUSHROOM-250 gms; Onion-1 gms; Garlic powder-15 gms; Cumin seeds-15 gms; CORIANDER-15 gms; Turmeric powder-7 gms; Red chilli Powder-15 gms; Common salt-15 gms; Olive oil-30 gms",
    "parsedIngredients": [
      "CABBAGE-250 gms",
      "carrot-250 gms",
      "Peas-250 gms",
      "MUSHROOM-250 gms",
      "Onion-1 gms",
      "Garlic powder-15 gms",
      "Cumin seeds-15 gms",
      "CORIANDER-15 gms",
      "Turmeric powder-7 gms",
      "Red chilli Powder-15 gms",
      "Common salt-15 gms",
      "Olive oil-30 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-408",
    "name": "Lemon Rice Soup With Red Rice",
    "cleanSearchName": "Lemon Rice Soup With Red Rice",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 small bowl",
    "totalWeightGrams": 1647,
    "calories": 154,
    "proteinGrams": 2,
    "carbsGrams": 19,
    "fatGrams": 10,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.3401,
    "ingredients": "Rice-1200gms; Onion-125 gms; Garlic-15 gms; carrot-125 gms; Olive oil-30 gms; Celery-62 gms; Lemon-90 gms",
    "parsedIngredients": [
      "Rice-1200gms",
      "Onion-125 gms",
      "Garlic-15 gms",
      "carrot-125 gms",
      "Olive oil-30 gms",
      "Celery-62 gms",
      "Lemon-90 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-409",
    "name": "Baingan Vegetable",
    "cleanSearchName": "Baingan Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 346,
    "calories": 278,
    "proteinGrams": 9,
    "carbsGrams": 39,
    "fatGrams": 6,
    "fiberGrams": 16,
    "carbonFootprintKgCO2e": 0.4495,
    "ingredients": "TOMATO-150 gms; Onion-125 gms; Cloves-1 gms; Cumin seeds-1 gms; Turmeric powder-15 gms; Red chilli Powder-15 gms; CORIANDER-24 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "TOMATO-150 gms",
      "Onion-125 gms",
      "Cloves-1 gms",
      "Cumin seeds-1 gms",
      "Turmeric powder-15 gms",
      "Red chilli Powder-15 gms",
      "CORIANDER-24 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-410",
    "name": "Millets Cheela",
    "cleanSearchName": "Millets Cheela",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 271,
    "calories": 233,
    "proteinGrams": 3,
    "carbsGrams": 20,
    "fatGrams": 16,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.2116,
    "ingredients": "Millets-150 gms; CARROT-30 gms; Onion-30 gms; Capsicum-30 gms; Cumin seeds-15 gms; Common salt-1 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Millets-150 gms",
      "CARROT-30 gms",
      "Onion-30 gms",
      "Capsicum-30 gms",
      "Cumin seeds-15 gms",
      "Common salt-1 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-411",
    "name": "Ragi Soup",
    "cleanSearchName": "Ragi Soup",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 medium bowl",
    "totalWeightGrams": 543,
    "calories": 230,
    "proteinGrams": 4,
    "carbsGrams": 34,
    "fatGrams": 8,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.4658,
    "ingredients": "Onion-300 gms;Garlic-10 gms; carrot-60 gms; Celery-17 gms; Coriander seeds-15 gms; Cumin seeds-15 gms; Turmeric powder-4 gms; Olive oil-15 gms; Common salt-7 gms; Ragi flour-100 gms",
    "parsedIngredients": [
      "Onion-300 gms",
      "Garlic-10 gms",
      "carrot-60 gms",
      "Celery-17 gms",
      "Coriander seeds-15 gms",
      "Cumin seeds-15 gms",
      "Turmeric powder-4 gms",
      "Olive oil-15 gms",
      "Common salt-7 gms",
      "Ragi flour-100 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-412",
    "name": "Fish Salad 1",
    "cleanSearchName": "Fish Salad 1",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 530,
    "calories": 378,
    "proteinGrams": 37,
    "carbsGrams": 14,
    "fatGrams": 17,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 1.226,
    "ingredients": "Fish-170 gms; Onion-60 gms; Tomato-90 gms; CUCUMBER-150 gms; Lemon-15 gms; Coriander Powder-5 gms; Red chilli Powder-15 gms; Olive oil-15 gms; CORIANDER LEAVES-10 gms",
    "parsedIngredients": [
      "Fish-170 gms",
      "Onion-60 gms",
      "Tomato-90 gms",
      "CUCUMBER-150 gms",
      "Lemon-15 gms",
      "Coriander Powder-5 gms",
      "Red chilli Powder-15 gms",
      "Olive oil-15 gms",
      "CORIANDER LEAVES-10 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-413",
    "name": "Rice Flour Wrap with Chicken and Veggies",
    "cleanSearchName": "Rice Flour Wrap with Chicken and Veggies",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 medium",
    "totalWeightGrams": 622,
    "calories": 330,
    "proteinGrams": 13,
    "carbsGrams": 40,
    "fatGrams": 12,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 2.0184,
    "ingredients": "Rice Flour-150 gms; Common salt-15 gms; Olive oil-15 gms; Chicken-150 gms; Onion-1 gms; Capsicum-201 gms; Ginger-15 gms; Garlic powder-15 gms; CORIANDER-15 gms; Cumin seeds-15 gms; Turmeric powder-15 gms; Red chilli Powder-15 gms",
    "parsedIngredients": [
      "Rice Flour-150 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms",
      "Chicken-150 gms",
      "Onion-1 gms",
      "Capsicum-201 gms",
      "Ginger-15 gms",
      "Garlic powder-15 gms",
      "CORIANDER-15 gms",
      "Cumin seeds-15 gms",
      "Turmeric powder-15 gms",
      "Red chilli Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-414",
    "name": "Masoor Dal Sambar",
    "cleanSearchName": "Masoor Dal Sambar",
    "associativity": "13",
    "associativityCategory": "Traditional Sambars & Chutneys",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 small bowl",
    "totalWeightGrams": 890,
    "calories": 157,
    "proteinGrams": 5,
    "carbsGrams": 14,
    "fatGrams": 9,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.78325,
    "ingredients": "Masoor Dal-300 gms; carrot-87.5 gms; Beans-150 gms; Drumstick-62 gms; Olive oil-30 gms; Cumin seeds-15 gms; Fenugreek seeds-15 gms; Onion-125 gms; Turmeric powder-7 gms; Common salt-7 gms; Coriander leaves-7 gms; Tamarind-15 gms; Sambar Powder-15 gms; Brinjal-137 gms",
    "parsedIngredients": [
      "Masoor Dal-300 gms",
      "carrot-87.5 gms",
      "Beans-150 gms",
      "Drumstick-62 gms",
      "Olive oil-30 gms",
      "Cumin seeds-15 gms",
      "Fenugreek seeds-15 gms",
      "Onion-125 gms",
      "Turmeric powder-7 gms",
      "Common salt-7 gms",
      "Coriander leaves-7 gms",
      "Tamarind-15 gms",
      "Sambar Powder-15 gms",
      "Brinjal-137 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-415",
    "name": "Moong Dal Tikki",
    "cleanSearchName": "Moong Dal Tikki",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "6 number",
    "totalWeightGrams": 945,
    "calories": 118,
    "proteinGrams": 4,
    "carbsGrams": 15,
    "fatGrams": 5,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.769,
    "ingredients": "Moong Dal-350 gms; POTATO-375 gms; Onion-125 gms; Chillies-30 gms; Coriander Powder-5 gms; Garam Masala-15 gms; Olive oil-30 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Moong Dal-350 gms",
      "POTATO-375 gms",
      "Onion-125 gms",
      "Chillies-30 gms",
      "Coriander Powder-5 gms",
      "Garam Masala-15 gms",
      "Olive oil-30 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-416",
    "name": "Oatmeal",
    "cleanSearchName": "Oatmeal",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 586,
    "calories": 375,
    "proteinGrams": 8,
    "carbsGrams": 18,
    "fatGrams": 27,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.9425,
    "ingredients": "Oats-150 gms; Almond Milk-200 gms; Apple-200 gms; Blueberries-10 gms; Walnut-11 gms; Cinnamon-15 gms",
    "parsedIngredients": [
      "Oats-150 gms",
      "Almond Milk-200 gms",
      "Apple-200 gms",
      "Blueberries-10 gms",
      "Walnut-11 gms",
      "Cinnamon-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-417",
    "name": "Boiled Aloo Chat",
    "cleanSearchName": "Boiled Aloo Chat",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 255,
    "calories": 176,
    "proteinGrams": 2,
    "carbsGrams": 29,
    "fatGrams": 5,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.261,
    "ingredients": "POTATO-150 gms; Cumin seeds-15 gms; Red chilli Powder-15 gms; Chat Masala-15 gms; Common salt-15 gms; Lemon-15 gms; Coriander leaves-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "POTATO-150 gms",
      "Cumin seeds-15 gms",
      "Red chilli Powder-15 gms",
      "Chat Masala-15 gms",
      "Common salt-15 gms",
      "Lemon-15 gms",
      "Coriander leaves-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-418",
    "name": "Saunf Ajwain Water",
    "cleanSearchName": "Saunf Ajwain Water",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 30,
    "calories": 7,
    "proteinGrams": 0,
    "carbsGrams": 1,
    "fatGrams": 0,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.066,
    "ingredients": "Saunf-15 gms; Ajwain-15 gms",
    "parsedIngredients": [
      "Saunf-15 gms",
      "Ajwain-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-419",
    "name": "Red Rice",
    "cleanSearchName": "Red Rice",
    "associativity": "3",
    "associativityCategory": "Rice & Millet Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 small katori",
    "totalWeightGrams": 180,
    "calories": 46,
    "proteinGrams": 1,
    "carbsGrams": 10,
    "fatGrams": 0,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.6075,
    "ingredients": "Rice-150 gms; Common salt-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Rice-150 gms",
      "Common salt-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-420",
    "name": "Saunf Elaichi Water",
    "cleanSearchName": "Saunf Elaichi Water",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 cup",
    "totalWeightGrams": 45,
    "calories": 13,
    "proteinGrams": 0,
    "carbsGrams": 2,
    "fatGrams": 0,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.1095,
    "ingredients": "Saunf-15 gms; cardamom-15 gms; Jaggery-15 gms",
    "parsedIngredients": [
      "Saunf-15 gms",
      "cardamom-15 gms",
      "Jaggery-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-421",
    "name": "Classic Avocado Salad",
    "cleanSearchName": "Classic Avocado Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 medium katori",
    "totalWeightGrams": 615,
    "calories": 597,
    "proteinGrams": 13,
    "carbsGrams": 25,
    "fatGrams": 51,
    "fiberGrams": 11,
    "carbonFootprintKgCO2e": 0.411,
    "ingredients": "Avacado-300 gms; Tomato-90 gms; Onion-150 gms; Olive oil-30 gms; Lemon-15 gms; Common salt-15 gms; Black pepper-15 gms",
    "parsedIngredients": [
      "Avacado-300 gms",
      "Tomato-90 gms",
      "Onion-150 gms",
      "Olive oil-30 gms",
      "Lemon-15 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-422",
    "name": "Corn Avocado Salad",
    "cleanSearchName": "Corn Avocado Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 medium katori",
    "totalWeightGrams": 1281,
    "calories": 748,
    "proteinGrams": 16,
    "carbsGrams": 41,
    "fatGrams": 59,
    "fiberGrams": 18,
    "carbonFootprintKgCO2e": 0.3832,
    "ingredients": "Babycorn-350 gms; Avacado-700 gms; Capsicum-37 gms; Onion-125 gms; Lemon-15 gms; Olive oil-15 gms; Common salt-15 gms; Black pepper-24 gms",
    "parsedIngredients": [
      "Babycorn-350 gms",
      "Avacado-700 gms",
      "Capsicum-37 gms",
      "Onion-125 gms",
      "Lemon-15 gms",
      "Olive oil-15 gms",
      "Common salt-15 gms",
      "Black pepper-24 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-423",
    "name": "Spinach Vegetable",
    "cleanSearchName": "Spinach Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 cup",
    "totalWeightGrams": 785,
    "calories": 71,
    "proteinGrams": 2,
    "carbsGrams": 14,
    "fatGrams": 0,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.574,
    "ingredients": "SPINACH-250 gms; POTATO-300 gms;Onion-125 gms; Cloves-30 gms; Cumin seeds-15 gms; Coriander Powder-5 gms; Turmeric powder-15 gms; Red chilli Powder-15 gms; Common salt-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "SPINACH-250 gms",
      "POTATO-300 gms",
      "Onion-125 gms",
      "Cloves-30 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-5 gms",
      "Turmeric powder-15 gms",
      "Red chilli Powder-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-424",
    "name": "Spinach Vegetable 2",
    "cleanSearchName": "Spinach Vegetable 2",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 small katori",
    "totalWeightGrams": 512,
    "calories": 37,
    "proteinGrams": 1,
    "carbsGrams": 5,
    "fatGrams": 1,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.4215,
    "ingredients": "Spinach-150 gms; Potato-150 gms;Onion-125 gms;Garlic-15 gms; Cumin seeds-15 gms; Coriander Powder-5 gms; Red chilli Powder-7 gms; Common salt-15 gms; Olive oil-30 gms",
    "parsedIngredients": [
      "Spinach-150 gms",
      "Potato-150 gms",
      "Onion-125 gms",
      "Garlic-15 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-5 gms",
      "Red chilli Powder-7 gms",
      "Common salt-15 gms",
      "Olive oil-30 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-425",
    "name": "Upma",
    "cleanSearchName": "Upma",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 small katori",
    "totalWeightGrams": 935,
    "calories": 64,
    "proteinGrams": 3,
    "carbsGrams": 8,
    "fatGrams": 2,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.74725,
    "ingredients": "Semolina-150 gms;Onion-125 gms; Peas-150 gms; carrot-250 gms; Beans-150 gms; Cumin seeds-15 gms; Gram dal-37.5 gms; Channa Dal-15 gms; Asafoetida-15 gms; Common salt-15 gms; Olive oil-15 gms; Lemon-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Semolina-150 gms",
      "Onion-125 gms",
      "Peas-150 gms",
      "carrot-250 gms",
      "Beans-150 gms",
      "Cumin seeds-15 gms",
      "Gram dal-37.5 gms",
      "Channa Dal-15 gms",
      "Asafoetida-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms",
      "Lemon-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": true,
    "duplicateNote": "Alternative portion or variation for \"Upma\" (4 small katori, 935g)"
  },
  {
    "id": "food-426",
    "name": "Dhaniya Jeera, Saunf Water",
    "cleanSearchName": "Dhaniya Jeera, Saunf Water",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 35,
    "calories": 3,
    "proteinGrams": 0,
    "carbsGrams": 0,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.105,
    "ingredients": "Coriander seeds-15 gms; Cumin seeds-15 gms;Fennel Seeds-5 gms",
    "parsedIngredients": [
      "Coriander seeds-15 gms",
      "Cumin seeds-15 gms",
      "Fennel Seeds-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-427",
    "name": "Shredded Chicken Breast Dry Gravy",
    "cleanSearchName": "Shredded Chicken Breast Dry Gravy",
    "associativity": "8",
    "associativityCategory": "Gravy Curries, Soups & Stews",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Gravy"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 450,
    "calories": 632,
    "proteinGrams": 90,
    "carbsGrams": 26,
    "fatGrams": 15,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 1.324,
    "ingredients": "Chicken-150 gms; Onion-160 gms; Garlic-30 gms; Chillies-15 gms; Coriander Powder-5 gms; Garam Masala-15 gms; Turmeric powder-15 gms; Red chilli Powder-15 gms; Common salt-15 gms; Olive oil-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Chicken-150 gms",
      "Onion-160 gms",
      "Garlic-30 gms",
      "Chillies-15 gms",
      "Coriander Powder-5 gms",
      "Garam Masala-15 gms",
      "Turmeric powder-15 gms",
      "Red chilli Powder-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-428",
    "name": "Arugula Salad(cheery tomato,carrot,cucumber and radish)",
    "cleanSearchName": "Arugula Salad(cheery tomato,carrot,cucumber and radish)",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 large bowl",
    "totalWeightGrams": 995,
    "calories": 112,
    "proteinGrams": 2,
    "carbsGrams": 8,
    "fatGrams": 8,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 1.3975,
    "ingredients": "CUCUMBER-150 gms; Cherry Tomato-150 gms; carrot-150 gms; Radish-150 gms; Arugula Leaves-150 gms; Lemon-15 gms; Olive oil-165 gms; Cumin seeds-15 gms; Coriander Powder-5 gms; Turmeric powder-15 gms; Red chilli Powder-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "CUCUMBER-150 gms",
      "Cherry Tomato-150 gms",
      "carrot-150 gms",
      "Radish-150 gms",
      "Arugula Leaves-150 gms",
      "Lemon-15 gms",
      "Olive oil-165 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-5 gms",
      "Turmeric powder-15 gms",
      "Red chilli Powder-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-429",
    "name": "Baby Spinach salad(cherry tomato,carrot,cucumber and radish)",
    "cleanSearchName": "Baby Spinach salad(cherry tomato,carrot,cucumber and radish)",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 large bowl",
    "totalWeightGrams": 1155,
    "calories": 116,
    "proteinGrams": 2,
    "carbsGrams": 9,
    "fatGrams": 8,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 1.4925,
    "ingredients": "Cucumber-200 gms; Cherry Tomato-150 gms; carrot-150 gms; Radish-150 gms; Spinach-250 gms; Lemon-15 gms; Olive oil-165 gms; Cumin seeds-15 gms; Coriander Powder-30 gms; Turmeric powder-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Cucumber-200 gms",
      "Cherry Tomato-150 gms",
      "carrot-150 gms",
      "Radish-150 gms",
      "Spinach-250 gms",
      "Lemon-15 gms",
      "Olive oil-165 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-30 gms",
      "Turmeric powder-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-430",
    "name": "lettuce salad(cheery tomato,carrot,cucumber and radish)",
    "cleanSearchName": "lettuce salad(cheery tomato,carrot,cucumber and radish)",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 large katori",
    "totalWeightGrams": 877,
    "calories": 102,
    "proteinGrams": 2,
    "carbsGrams": 7,
    "fatGrams": 8,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 1.3591,
    "ingredients": "Cucumber-100 gms; Cherry Tomato-187 gms; carrot-60 gms; Radish-150 gms; Lettuce leaf-150 gms; Olive oil-165 gms; Cumin seeds-15 gms; Coriander Powder-5 gms; Turmeric powder-15 gms; Red chilli Powder-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Cucumber-100 gms",
      "Cherry Tomato-187 gms",
      "carrot-60 gms",
      "Radish-150 gms",
      "Lettuce leaf-150 gms",
      "Olive oil-165 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-5 gms",
      "Turmeric powder-15 gms",
      "Red chilli Powder-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-431",
    "name": "Gobhi Gajar Matar Without Oil",
    "cleanSearchName": "Gobhi Gajar Matar Without Oil",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small katori",
    "totalWeightGrams": 770,
    "calories": 577,
    "proteinGrams": 24,
    "carbsGrams": 53,
    "fatGrams": 29,
    "fiberGrams": 37,
    "carbonFootprintKgCO2e": 0.6275,
    "ingredients": "Cauliflower-250 gms; carrot-150 gms; Peas-150 gms; Onion-125 gms; Chillies-15 gms; Cumin seeds-15 gms; Ginger powder-15 gms; Coriander Powder-5 gms; Turmeric powder-15 gms; Common salt-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Cauliflower-250 gms",
      "carrot-150 gms",
      "Peas-150 gms",
      "Onion-125 gms",
      "Chillies-15 gms",
      "Cumin seeds-15 gms",
      "Ginger powder-15 gms",
      "Coriander Powder-5 gms",
      "Turmeric powder-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-432",
    "name": "Gobhi Gajar Matar With Oil",
    "cleanSearchName": "Gobhi Gajar Matar With Oil",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 785,
    "calories": 486,
    "proteinGrams": 22,
    "carbsGrams": 53,
    "fatGrams": 18,
    "fiberGrams": 34,
    "carbonFootprintKgCO2e": 0.69,
    "ingredients": "Cauliflower-150 gms; carrot-150 gms; Peas-250 gms;Onion-125 gms; Chillies-15 gms; Red chilli Powder-15 gms; Cumin seeds-15 gms; Ginger powder-15 gms; Coriander Powder-5 gms; Turmeric powder-15 gms; Common salt-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Cauliflower-150 gms",
      "carrot-150 gms",
      "Peas-250 gms",
      "Onion-125 gms",
      "Chillies-15 gms",
      "Red chilli Powder-15 gms",
      "Cumin seeds-15 gms",
      "Ginger powder-15 gms",
      "Coriander Powder-5 gms",
      "Turmeric powder-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-433",
    "name": "Grilled Basa Fish",
    "cleanSearchName": "Grilled Basa Fish",
    "associativity": "8",
    "associativityCategory": "Gravy Curries, Soups & Stews",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Gravy"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 number",
    "totalWeightGrams": 212,
    "calories": 315,
    "proteinGrams": 20,
    "carbsGrams": 4,
    "fatGrams": 24,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.882,
    "ingredients": "Turmeric powder-7 gms; Red chilli Powder-15 gms; Garam Masala-15 gms; Coriander Powder-5 gms; Common salt-15 gms; Lemon-15 gms; Olive oil-15 gms; Fish-125 gms",
    "parsedIngredients": [
      "Turmeric powder-7 gms",
      "Red chilli Powder-15 gms",
      "Garam Masala-15 gms",
      "Coriander Powder-5 gms",
      "Common salt-15 gms",
      "Lemon-15 gms",
      "Olive oil-15 gms",
      "Fish-125 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-434",
    "name": "Cucumber ,Onion,Tomato and Carrot Salad",
    "cleanSearchName": "Cucumber ,Onion,Tomato and Carrot Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 500,
    "calories": 40,
    "proteinGrams": 0,
    "carbsGrams": 8,
    "fatGrams": 0,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.264,
    "ingredients": "Cucumber-200 gms; Onion-15 gms; Tomato-90 gms; carrot-150 gms; Coriander leaves-15 gms; Common salt-15 gms; Lemon-15 gms",
    "parsedIngredients": [
      "Cucumber-200 gms",
      "Onion-15 gms",
      "Tomato-90 gms",
      "carrot-150 gms",
      "Coriander leaves-15 gms",
      "Common salt-15 gms",
      "Lemon-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-435",
    "name": "Vegetable smoothie (cucumber,carrot,beetroot and apple)",
    "cleanSearchName": "Vegetable smoothie (cucumber,carrot,beetroot and apple)",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 glass",
    "totalWeightGrams": 801,
    "calories": 72,
    "proteinGrams": 2,
    "carbsGrams": 14,
    "fatGrams": 1,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.2668,
    "ingredients": "Cucumber-200 gms; carrot-250 gms; Beetroot-136 gms; Apples-200 gms; Lemon-15 gms",
    "parsedIngredients": [
      "Cucumber-200 gms",
      "carrot-250 gms",
      "Beetroot-136 gms",
      "Apples-200 gms",
      "Lemon-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-436",
    "name": "Baigan Bharta",
    "cleanSearchName": "Baigan Bharta",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 small bowl",
    "totalWeightGrams": 775,
    "calories": 45,
    "proteinGrams": 1,
    "carbsGrams": 7,
    "fatGrams": 1,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.8525,
    "ingredients": "Onion-125 gms; Chillies-15 gms; Cumin seeds-15 gms; Ginger powder-15 gms; Garlic powder-15 gms; Turmeric powder-15 gms; Coriander Powder-15 gms; Garam Masala-15 gms; Olive oil-15 gms; Common salt-15 gms; Tomato-250 gms; Eggplant-250 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Onion-125 gms",
      "Chillies-15 gms",
      "Cumin seeds-15 gms",
      "Ginger powder-15 gms",
      "Garlic powder-15 gms",
      "Turmeric powder-15 gms",
      "Coriander Powder-15 gms",
      "Garam Masala-15 gms",
      "Olive oil-15 gms",
      "Common salt-15 gms",
      "Tomato-250 gms",
      "Eggplant-250 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-437",
    "name": "Jowar Cheela",
    "cleanSearchName": "Jowar Cheela",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West",
      "East",
      "South"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner",
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 885,
    "calories": 536,
    "proteinGrams": 17,
    "carbsGrams": 93,
    "fatGrams": 9,
    "fiberGrams": 21,
    "carbonFootprintKgCO2e": 0.6195,
    "ingredients": "Jowar-250 gms; carrot-250 gms;Onion-160 gms; Coriander leaves-150 gms; Cumin seeds-30 gms; Red chilli Powder-15 gms; Common salt-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Jowar-250 gms",
      "carrot-250 gms",
      "Onion-160 gms",
      "Coriander leaves-150 gms",
      "Cumin seeds-30 gms",
      "Red chilli Powder-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": true,
    "duplicateNote": "Alternative portion or variation for \"Jowar Cheela\" (1 medium, 885g)"
  },
  {
    "id": "food-438",
    "name": "Brinjal Vegetable",
    "cleanSearchName": "Brinjal Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 645,
    "calories": 247,
    "proteinGrams": 10,
    "carbsGrams": 33,
    "fatGrams": 2,
    "fiberGrams": 19,
    "carbonFootprintKgCO2e": 0.6565,
    "ingredients": "Brinjal-150 gms;Onion-160 gms; Tomato-240 gms; Ginger powder-15 gms; Garlic powder-15 gms; Cumin seeds-15 gms; Coriander Powder-5 gms; Common salt-15 gms; Cooking oil-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Brinjal-150 gms",
      "Onion-160 gms",
      "Tomato-240 gms",
      "Ginger powder-15 gms",
      "Garlic powder-15 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-5 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-439",
    "name": "Fenugreek Vegetable",
    "cleanSearchName": "Fenugreek Vegetable",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 585,
    "calories": 229,
    "proteinGrams": 10,
    "carbsGrams": 28,
    "fatGrams": 8,
    "fiberGrams": 17,
    "carbonFootprintKgCO2e": 0.645,
    "ingredients": "Fenugreek leaves-250 gms;Onion-125 gms; Tomato-90 gms; Olive oil-15 gms; Cumin seeds-15 gms; Ginger powder-15 gms; Garlic powder-15 gms; Coriander Powder-15 gms; Turmeric powder-15 gms; Red chilli Powder-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Fenugreek leaves-250 gms",
      "Onion-125 gms",
      "Tomato-90 gms",
      "Olive oil-15 gms",
      "Cumin seeds-15 gms",
      "Ginger powder-15 gms",
      "Garlic powder-15 gms",
      "Coriander Powder-15 gms",
      "Turmeric powder-15 gms",
      "Red chilli Powder-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-440",
    "name": "Roasted Vegetable",
    "cleanSearchName": "Roasted Vegetable",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 625,
    "calories": 873,
    "proteinGrams": 27,
    "carbsGrams": 140,
    "fatGrams": 19,
    "fiberGrams": 47,
    "carbonFootprintKgCO2e": 0.4332,
    "ingredients": "Sweet potato-250 gms; Brussels sprouts-150 gms; carrot-150 gms; Olive oil-15 gms; Thyme-15 gms; Rosemary-15 gms; Garlic powder-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Sweet potato-250 gms",
      "Brussels sprouts-150 gms",
      "carrot-150 gms",
      "Olive oil-15 gms",
      "Thyme-15 gms",
      "Rosemary-15 gms",
      "Garlic powder-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-441",
    "name": "Mixed Vegetable Bhaji",
    "cleanSearchName": "Mixed Vegetable Bhaji",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 cup",
    "totalWeightGrams": 1450,
    "calories": 1254,
    "proteinGrams": 56,
    "carbsGrams": 142,
    "fatGrams": 60,
    "fiberGrams": 32,
    "carbonFootprintKgCO2e": 1.1685,
    "ingredients": "Potato-350 gms; carrot-250 gms; Beans-250 gms; Peas-250 gms;Onion-125 gms; Tomato-90 gms; Chillies-15 gms; Ginger powder-15 gms; Garlic powder-15 gms; Cumin seeds-15 gms; Red chilli Powder-15 gms; Turmeric powder-15 gms; Common salt-15 gms; Olive oil-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Potato-350 gms",
      "carrot-250 gms",
      "Beans-250 gms",
      "Peas-250 gms",
      "Onion-125 gms",
      "Tomato-90 gms",
      "Chillies-15 gms",
      "Ginger powder-15 gms",
      "Garlic powder-15 gms",
      "Cumin seeds-15 gms",
      "Red chilli Powder-15 gms",
      "Turmeric powder-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-442",
    "name": "Qunoia Flour Cheela",
    "cleanSearchName": "Qunoia Flour Cheela",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 641,
    "calories": 703,
    "proteinGrams": 20,
    "carbsGrams": 92,
    "fatGrams": 27,
    "fiberGrams": 12,
    "carbonFootprintKgCO2e": 0.6876,
    "ingredients": "Quinoa Flour-150 gms; Onion-125 gms; Tomato-90 gms; Capsicum-201 gms; Chillies-15 gms; Turmeric powder-15 gms; Common salt-15 gms; Olive oil-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Quinoa Flour-150 gms",
      "Onion-125 gms",
      "Tomato-90 gms",
      "Capsicum-201 gms",
      "Chillies-15 gms",
      "Turmeric powder-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-443",
    "name": "Steamed /Blanched Vegetable",
    "cleanSearchName": "Steamed /Blanched Vegetable",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 1151,
    "calories": 343,
    "proteinGrams": 13,
    "carbsGrams": 46,
    "fatGrams": 9,
    "fiberGrams": 23,
    "carbonFootprintKgCO2e": 0.6553,
    "ingredients": "Beetroot-136 gms; carrot-150 gms; Broccoli-150 gms; Cauliflower-250 gms; Spinach-150 gms; Onion-150 gms; Tomato-90 gms; Chillies-15 gms; Lemon-15 gms; Cumin seeds-15 gms; Common salt-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Beetroot-136 gms",
      "carrot-150 gms",
      "Broccoli-150 gms",
      "Cauliflower-250 gms",
      "Spinach-150 gms",
      "Onion-150 gms",
      "Tomato-90 gms",
      "Chillies-15 gms",
      "Lemon-15 gms",
      "Cumin seeds-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-444",
    "name": "Rasam",
    "cleanSearchName": "Rasam",
    "associativity": "8",
    "associativityCategory": "Gravy Curries, Soups & Stews",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Gravy"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 181,
    "calories": 47,
    "proteinGrams": 0,
    "carbsGrams": 7,
    "fatGrams": 1,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.34995,
    "ingredients": "Tomato-90 gms; Cumin seeds-15 gms; Turmeric powder-15 gms; Fenugreek seeds-15 gms; Chillies-15 gms; Garlic-1 gms; Common salt-15 gms; Tamarind-15 gms",
    "parsedIngredients": [
      "Tomato-90 gms",
      "Cumin seeds-15 gms",
      "Turmeric powder-15 gms",
      "Fenugreek seeds-15 gms",
      "Chillies-15 gms",
      "Garlic-1 gms",
      "Common salt-15 gms",
      "Tamarind-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-445",
    "name": "Kala Chana Sprouts",
    "cleanSearchName": "Kala Chana Sprouts",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "North",
      "West",
      "South"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 180,
    "calories": 73,
    "proteinGrams": 4,
    "carbsGrams": 10,
    "fatGrams": 1,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.0825,
    "ingredients": "Kala chana-150 gms; Lemon-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Kala chana-150 gms",
      "Lemon-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-446",
    "name": "Sauteed Vegetables",
    "cleanSearchName": "Sauteed Vegetables",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 cup",
    "totalWeightGrams": 280,
    "calories": 195,
    "proteinGrams": 1,
    "carbsGrams": 8,
    "fatGrams": 15,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.35475,
    "ingredients": "Olive oil-15 gms;Garlic-15 gms; Onion-150 gms; Beans-15 gms; carrot-15 gms; Capsicum-5 gms; Cumin seeds-15 gms; Coriander Powder-5 gms; Turmeric powder-15 gms; Red chilli Powder-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Olive oil-15 gms",
      "Garlic-15 gms",
      "Onion-150 gms",
      "Beans-15 gms",
      "carrot-15 gms",
      "Capsicum-5 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-5 gms",
      "Turmeric powder-15 gms",
      "Red chilli Powder-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-447",
    "name": "Pasta Salad",
    "cleanSearchName": "Pasta Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 cup",
    "totalWeightGrams": 1476,
    "calories": 581,
    "proteinGrams": 9,
    "carbsGrams": 93,
    "fatGrams": 17,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 1.4766,
    "ingredients": "Pasta-750 gms; Cherry Tomato-150 gms; CUCUMBER-150 gms; Onion-150 gms; Capsicum-201 gms;Parsley-15 gms; Lemon-30 gms; Olive oil-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Pasta-750 gms",
      "Cherry Tomato-150 gms",
      "CUCUMBER-150 gms",
      "Onion-150 gms",
      "Capsicum-201 gms",
      "Parsley-15 gms",
      "Lemon-30 gms",
      "Olive oil-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-448",
    "name": "Brown Rice Pulao",
    "cleanSearchName": "Brown Rice Pulao",
    "associativity": "5",
    "associativityCategory": "Khichdi, Pulao & Biryani",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 1022,
    "calories": 548,
    "proteinGrams": 13,
    "carbsGrams": 82,
    "fatGrams": 16,
    "fiberGrams": 10,
    "carbonFootprintKgCO2e": 1.717,
    "ingredients": "Rice-150 gms; Onion-150 gms; carrot-150 gms; Peas-150 gms; Cumin seeds-15 gms; CLOVES-150 gms; Cinnamon-15 gms; CARDAMOM-2 gms; Ginger powder-15 gms; Garlic powder-15 gms; Chillies-15 gms; Common salt-15 gms; Olive oil-15 gms; Coriander leaves-15 gms; Corn Kernels-150 gms",
    "parsedIngredients": [
      "Rice-150 gms",
      "Onion-150 gms",
      "carrot-150 gms",
      "Peas-150 gms",
      "Cumin seeds-15 gms",
      "CLOVES-150 gms",
      "Cinnamon-15 gms",
      "CARDAMOM-2 gms",
      "Ginger powder-15 gms",
      "Garlic powder-15 gms",
      "Chillies-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms",
      "Coriander leaves-15 gms",
      "Corn Kernels-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-449",
    "name": "Onion Masala Salad",
    "cleanSearchName": "Onion Masala Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 455,
    "calories": 90,
    "proteinGrams": 5,
    "carbsGrams": 15,
    "fatGrams": 1,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.208,
    "ingredients": "Onion-160 gms; Red chilli Powder-15 gms; Lemon-15 gms; Common salt-15 gms; Coriander leaves-250 gms",
    "parsedIngredients": [
      "Onion-160 gms",
      "Red chilli Powder-15 gms",
      "Lemon-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-250 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-450",
    "name": "Dhaniya Chutney",
    "cleanSearchName": "Dhaniya Chutney",
    "associativity": "7",
    "associativityCategory": "Fresh Herbal Chutneys",
    "region": [
      "North",
      "South",
      "East",
      "West",
      "Continental"
    ],
    "mealTypes": [
      "Appetizer",
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 tsp",
    "totalWeightGrams": 202,
    "calories": 54,
    "proteinGrams": 5,
    "carbsGrams": 4,
    "fatGrams": 2,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.1837,
    "ingredients": "Coriander leaves-150 gms; Chillies-15 gms;Garlic-15 gms; Cumin seeds-15 gms; Common salt-7 gms;",
    "parsedIngredients": [
      "Coriander leaves-150 gms",
      "Chillies-15 gms",
      "Garlic-15 gms",
      "Cumin seeds-15 gms",
      "Common salt-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-451",
    "name": "Salted Roasted Makhana",
    "cleanSearchName": "Salted Roasted Makhana",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 280,
    "calories": 322,
    "proteinGrams": 8,
    "carbsGrams": 62,
    "fatGrams": 5,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.404,
    "ingredients": "Makhana-250 gms; Olive oil-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Makhana-250 gms",
      "Olive oil-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-452",
    "name": "Chicken Do Pyaza",
    "cleanSearchName": "Chicken Do Pyaza",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 cup",
    "totalWeightGrams": 500,
    "calories": 1013,
    "proteinGrams": 159,
    "carbsGrams": 28,
    "fatGrams": 24,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 1.411,
    "ingredients": "Chicken-150 gms; Onion-150 gms; Tomato-90 gms; Chillies-15 gms; Olive oil-15 gms; Cumin seeds-15 gms; Coriander Powder-5 gms; Garam Masala-15 gms; Red chilli Powder-15 gms; Common salt-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Chicken-150 gms",
      "Onion-150 gms",
      "Tomato-90 gms",
      "Chillies-15 gms",
      "Olive oil-15 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-5 gms",
      "Garam Masala-15 gms",
      "Red chilli Powder-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-453",
    "name": "Chicken kebab",
    "cleanSearchName": "Chicken kebab",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 305,
    "calories": 1721,
    "proteinGrams": 107,
    "carbsGrams": 28,
    "fatGrams": 109,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 1.3825,
    "ingredients": "Chicken-150 gms; Yoghurt-15 gms; Ginger powder-15 gms; Garlic powder-15 gms; Lemon-15 gms; Red chilli Powder-15 gms; TURMERIC-15 gms; Cumin seeds-15 gms; Coriander Powder-5 gms; Garam Masala-15 gms; Common salt-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Chicken-150 gms",
      "Yoghurt-15 gms",
      "Ginger powder-15 gms",
      "Garlic powder-15 gms",
      "Lemon-15 gms",
      "Red chilli Powder-15 gms",
      "TURMERIC-15 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-5 gms",
      "Garam Masala-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-454",
    "name": "Green Chutney",
    "cleanSearchName": "Green Chutney",
    "associativity": "7",
    "associativityCategory": "Fresh Herbal Chutneys",
    "region": [
      "North",
      "South",
      "East",
      "West",
      "Continental"
    ],
    "mealTypes": [
      "Appetizer",
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 515,
    "calories": 86,
    "proteinGrams": 7,
    "carbsGrams": 10,
    "fatGrams": 1,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.33,
    "ingredients": "Coriander leaves-150 gms;Mint leaves-150 gms; Chillies-15 gms; Ginger powder-15 gms;Onion-125 gms; Cumin Powder-15 gms; Chat Masala-15 gms; Lemon-15 gms; Common salt-15 gms;",
    "parsedIngredients": [
      "Coriander leaves-150 gms",
      "Mint leaves-150 gms",
      "Chillies-15 gms",
      "Ginger powder-15 gms",
      "Onion-125 gms",
      "Cumin Powder-15 gms",
      "Chat Masala-15 gms",
      "Lemon-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-455",
    "name": "Kali Masoor Chat",
    "cleanSearchName": "Kali Masoor Chat",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small katori",
    "totalWeightGrams": 640,
    "calories": 229,
    "proteinGrams": 13,
    "carbsGrams": 41,
    "fatGrams": 1,
    "fiberGrams": 14,
    "carbonFootprintKgCO2e": 0.4095,
    "ingredients": "Dal-150 gms;Onion-125 gms; Tomato-90 gms;Cucumber-200 gms; Chillies-15 gms; Lemon-15 gms; Chat Masala-15 gms; Common salt-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Dal-150 gms",
      "Onion-125 gms",
      "Tomato-90 gms",
      "Cucumber-200 gms",
      "Chillies-15 gms",
      "Lemon-15 gms",
      "Chat Masala-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-456",
    "name": "Chana Salad",
    "cleanSearchName": "Chana Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 890,
    "calories": 414,
    "proteinGrams": 25,
    "carbsGrams": 63,
    "fatGrams": 8,
    "fiberGrams": 35,
    "carbonFootprintKgCO2e": 0.601,
    "ingredients": "Chickpeas-150 gms;Cucumber-200 gms; Tomato-90 gms;Onion-125 gms; Chillies-15 gms; Coriander leaves-250 gms; Lemon-15 gms; Common salt-15 gms; Black pepper-15 gms; Cumin seeds-15 gms",
    "parsedIngredients": [
      "Chickpeas-150 gms",
      "Cucumber-200 gms",
      "Tomato-90 gms",
      "Onion-125 gms",
      "Chillies-15 gms",
      "Coriander leaves-250 gms",
      "Lemon-15 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Cumin seeds-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-457",
    "name": "Kala Chana Chat",
    "cleanSearchName": "Kala Chana Chat",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 515,
    "calories": 363,
    "proteinGrams": 18,
    "carbsGrams": 54,
    "fatGrams": 4,
    "fiberGrams": 25,
    "carbonFootprintKgCO2e": 0.46125,
    "ingredients": "Chickpeas-150 gms;Onion-125 gms; Tomato-120 gms; Chillies-15 gms; Coriander leaves-15 gms; Tamarind-15 gms;Mint leaves-15 gms; Chat Masala-15 gms; Cumin seeds-15 gms; Common salt-15 gms; Lemon-15 gms",
    "parsedIngredients": [
      "Chickpeas-150 gms",
      "Onion-125 gms",
      "Tomato-120 gms",
      "Chillies-15 gms",
      "Coriander leaves-15 gms",
      "Tamarind-15 gms",
      "Mint leaves-15 gms",
      "Chat Masala-15 gms",
      "Cumin seeds-15 gms",
      "Common salt-15 gms",
      "Lemon-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-458",
    "name": "Spinach Chana Dal Cutlet",
    "cleanSearchName": "Spinach Chana Dal Cutlet",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 420,
    "calories": 573,
    "proteinGrams": 22,
    "carbsGrams": 69,
    "fatGrams": 24,
    "fiberGrams": 22,
    "carbonFootprintKgCO2e": 0.4715,
    "ingredients": "Spinach-150 gms;Onion-125 gms; Chillies-15 gms; Ginger powder-15 gms; Cumin seeds-15 gms; Coriander Powder-5 gms; Red chilli Powder-15 gms; Common salt-15 gms;Bread-50 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Spinach-150 gms",
      "Onion-125 gms",
      "Chillies-15 gms",
      "Ginger powder-15 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-5 gms",
      "Red chilli Powder-15 gms",
      "Common salt-15 gms",
      "Bread-50 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-459",
    "name": "Vegetable soup with Quinoa",
    "cleanSearchName": "Vegetable soup with Quinoa",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 535,
    "calories": 219,
    "proteinGrams": 6,
    "carbsGrams": 32,
    "fatGrams": 6,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.61825,
    "ingredients": "Quinoa-150 gms;Onion-125 gms;Garlic-15 gms; carrot-150 gms; Beans-15 gms; Cumin seeds-15 gms; Coriander Powder-5 gms; Turmeric powder-15 gms; Red chilli Powder-15 gms; Common salt-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Quinoa-150 gms",
      "Onion-125 gms",
      "Garlic-15 gms",
      "carrot-150 gms",
      "Beans-15 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-5 gms",
      "Turmeric powder-15 gms",
      "Red chilli Powder-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-460",
    "name": "Low-Fat Bajra Cheela",
    "cleanSearchName": "Low-Fat Bajra Cheela",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner",
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 850,
    "calories": 553,
    "proteinGrams": 19,
    "carbsGrams": 91,
    "fatGrams": 13,
    "fiberGrams": 20,
    "carbonFootprintKgCO2e": 0.6075,
    "ingredients": "Bajra flour-350 gms; Spinach-150 gms; Carrot-150 gms;Onion-125 gms; Coriander leaves-15 gms; Cumin seeds-15 gms; Coriander Powder-15 gms; Common salt-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Bajra flour-350 gms",
      "Spinach-150 gms",
      "Carrot-150 gms",
      "Onion-125 gms",
      "Coriander leaves-15 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-461",
    "name": "Low-Fat Grilled Chicken Breast",
    "cleanSearchName": "Low-Fat Grilled Chicken Breast",
    "associativity": "8",
    "associativityCategory": "Gravy Curries, Soups & Stews",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Gravy"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 482,
    "calories": 1122,
    "proteinGrams": 156,
    "carbsGrams": 4,
    "fatGrams": 48,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 1.3707,
    "ingredients": "Chicken-172 gms; VINEGAR-250 gms; Olive oil-15 gms; Oregano-15 gms; Common salt-15 gms; Black pepper-15 gms",
    "parsedIngredients": [
      "Chicken-172 gms",
      "VINEGAR-250 gms",
      "Olive oil-15 gms",
      "Oregano-15 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-462",
    "name": "Roasted Makhana Bhel Without Peanuts",
    "cleanSearchName": "Roasted Makhana Bhel Without Peanuts",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 820,
    "calories": 329,
    "proteinGrams": 8,
    "carbsGrams": 60,
    "fatGrams": 3,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.777,
    "ingredients": "Makhana-300 gms;Onion-125 gms; Tomato-90 gms; Cucumber-200 gms; Chillies-15 gms; Coriander leaves-15 gms; Red chilli Powder-15 gms; Cumin seeds-15 gms; Chat Masala-15 gms; Lemon-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Makhana-300 gms",
      "Onion-125 gms",
      "Tomato-90 gms",
      "Cucumber-200 gms",
      "Chillies-15 gms",
      "Coriander leaves-15 gms",
      "Red chilli Powder-15 gms",
      "Cumin seeds-15 gms",
      "Chat Masala-15 gms",
      "Lemon-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-463",
    "name": "Sprouts Cheela",
    "cleanSearchName": "Sprouts Cheela",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West",
      "East"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner",
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 520,
    "calories": 521,
    "proteinGrams": 25,
    "carbsGrams": 70,
    "fatGrams": 16,
    "fiberGrams": 17,
    "carbonFootprintKgCO2e": 0.3585,
    "ingredients": "Moong-250 gms;Onion-120 gms; Tomato-90 gms; Turmeric powder-15 gms; Cumin seeds-15 gms; Common salt-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Moong-250 gms",
      "Onion-120 gms",
      "Tomato-90 gms",
      "Turmeric powder-15 gms",
      "Cumin seeds-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-464",
    "name": "Bell pepper, onion, and tomato Vegetable",
    "cleanSearchName": "Bell pepper, onion, and tomato Vegetable",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 cup",
    "totalWeightGrams": 485,
    "calories": 142,
    "proteinGrams": 3,
    "carbsGrams": 17,
    "fatGrams": 5,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.6835,
    "ingredients": "Capsicum-150 gms; Onion-150 gms; Tomato-90 gms; Olive oil-15 gms; Cumin seeds-15 gms; Coriander Powder-5 gms; Turmeric powder-15 gms; Red chilli Powder-15 gms; Common salt-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Capsicum-150 gms",
      "Onion-150 gms",
      "Tomato-90 gms",
      "Olive oil-15 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-5 gms",
      "Turmeric powder-15 gms",
      "Red chilli Powder-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-465",
    "name": "Chicken gravy (low-fat)",
    "cleanSearchName": "Chicken gravy",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 cup",
    "totalWeightGrams": 570,
    "calories": 676,
    "proteinGrams": 56,
    "carbsGrams": 19,
    "fatGrams": 40,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 1.561,
    "ingredients": "Chicken-150 gms;Onion-160 gms; Tomato-120 gms; Olive oil-15 gms; Cumin seeds-15 gms; Ginger powder-15 gms; Garlic powder-15 gms; Turmeric powder-15 gms; Coriander Powder-5 gms; Garam Masala-15 gms; Red chilli Powder-15 gms; Common salt-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Chicken-150 gms",
      "Onion-160 gms",
      "Tomato-120 gms",
      "Olive oil-15 gms",
      "Cumin seeds-15 gms",
      "Ginger powder-15 gms",
      "Garlic powder-15 gms",
      "Turmeric powder-15 gms",
      "Coriander Powder-5 gms",
      "Garam Masala-15 gms",
      "Red chilli Powder-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-466",
    "name": "Tomato Basil Soup",
    "cleanSearchName": "Tomato Basil Soup",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 medium bowl",
    "totalWeightGrams": 440,
    "calories": 112,
    "proteinGrams": 2,
    "carbsGrams": 10,
    "fatGrams": 8,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.418,
    "ingredients": "Olive oil-15 gms;Onion-160 gms;Garlic-15 gms; Tomato-120 gms; Basil-100 gms; Common salt-15 gms; Black pepper-15 gms",
    "parsedIngredients": [
      "Olive oil-15 gms",
      "Onion-160 gms",
      "Garlic-15 gms",
      "Tomato-120 gms",
      "Basil-100 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-467",
    "name": "Saute zucchini, asparagus, and bell peppers",
    "cleanSearchName": "Saute zucchini, asparagus, and bell peppers",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 medium bowl",
    "totalWeightGrams": 1205,
    "calories": 130,
    "proteinGrams": 2,
    "carbsGrams": 5,
    "fatGrams": 11,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.874,
    "ingredients": "Zucchini-680 gms; Asparagus-150 gms; Capsicum-300 gms; Olive oil-15 gms; Garlic Powder-15 gms; Common salt-15 gms; Black pepper-15 gms;Parsley-15 gms",
    "parsedIngredients": [
      "Zucchini-680 gms",
      "Asparagus-150 gms",
      "Capsicum-300 gms",
      "Olive oil-15 gms",
      "Garlic Powder-15 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Parsley-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-468",
    "name": "Style Roasted Makhana",
    "cleanSearchName": "Style Roasted Makhana",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 780,
    "calories": 219,
    "proteinGrams": 5,
    "carbsGrams": 25,
    "fatGrams": 13,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 1.029,
    "ingredients": "Makhana-750 gms; Olive oil-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Makhana-750 gms",
      "Olive oil-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-469",
    "name": "Kalimirch Chicken",
    "cleanSearchName": "Kalimirch Chicken",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Non-veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 670,
    "calories": 1826,
    "proteinGrams": 109,
    "carbsGrams": 26,
    "fatGrams": 119,
    "fiberGrams": 8,
    "carbonFootprintKgCO2e": 1.9705,
    "ingredients": "Chicken-150 gms;Onion-125 gms; Tomato-120 gms; Chillies-15 gms; Cumin seeds-15 gms; Black pepper-150 gms; Turmeric powder-15 gms; Coriander Powder-5 gms; Garam Masala-15 gms; Common salt-15 gms; Yogurt-15 gms; Coriander leaves-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Chicken-150 gms",
      "Onion-125 gms",
      "Tomato-120 gms",
      "Chillies-15 gms",
      "Cumin seeds-15 gms",
      "Black pepper-150 gms",
      "Turmeric powder-15 gms",
      "Coriander Powder-5 gms",
      "Garam Masala-15 gms",
      "Common salt-15 gms",
      "Yogurt-15 gms",
      "Coriander leaves-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-470",
    "name": "Low Fat Besan Cheela",
    "cleanSearchName": "Low Fat Besan Cheela",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner",
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "4 medium",
    "totalWeightGrams": 682,
    "calories": 139,
    "proteinGrams": 7,
    "carbsGrams": 19,
    "fatGrams": 3,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.7147,
    "ingredients": "Besan-350 gms;Onion-160 gms; Tomato-90 gms; Turmeric powder-15 gms; Red chilli Powder-15 gms; Common salt-7 gms; Olive oil-15 gms; Chillies-15 gms; Ginger-15 gms",
    "parsedIngredients": [
      "Besan-350 gms",
      "Onion-160 gms",
      "Tomato-90 gms",
      "Turmeric powder-15 gms",
      "Red chilli Powder-15 gms",
      "Common salt-7 gms",
      "Olive oil-15 gms",
      "Chillies-15 gms",
      "Ginger-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-471",
    "name": "Low Fat Dal Cheela",
    "cleanSearchName": "Low Fat Dal Cheela",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 440,
    "calories": 324,
    "proteinGrams": 12,
    "carbsGrams": 32,
    "fatGrams": 15,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.525,
    "ingredients": "Moong Dal-150 gms;Onion-125 gms; Tomato-90 gms; Chillies-15 gms; Turmeric powder-15 gms; Red chilli Powder-15 gms; Common salt-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Moong Dal-150 gms",
      "Onion-125 gms",
      "Tomato-90 gms",
      "Chillies-15 gms",
      "Turmeric powder-15 gms",
      "Red chilli Powder-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-472",
    "name": "Tinda Vegetable (Low Fat)",
    "cleanSearchName": "Tinda Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "2 medium katori",
    "totalWeightGrams": 705,
    "calories": 116,
    "proteinGrams": 3,
    "carbsGrams": 9,
    "fatGrams": 8,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.7295,
    "ingredients": "Tinda-330 gms;Onion-125 gms; Tomato-120 gms; Cumin seeds-15 gms; Turmeric powder-15 gms; Coriander Powder-55 gms; Red chilli Powder-15 gms; Common salt-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Tinda-330 gms",
      "Onion-125 gms",
      "Tomato-120 gms",
      "Cumin seeds-15 gms",
      "Turmeric powder-15 gms",
      "Coriander Powder-55 gms",
      "Red chilli Powder-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-473",
    "name": "Green Chutney without any Nuts",
    "cleanSearchName": "Green Chutney without any Nuts",
    "associativity": "7",
    "associativityCategory": "Fresh Herbal Chutneys",
    "region": [
      "North",
      "South",
      "East",
      "West",
      "Continental"
    ],
    "mealTypes": [
      "Appetizer",
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "no-allergies"
    ],
    "serving": "1 small katori",
    "totalWeightGrams": 600,
    "calories": 66,
    "proteinGrams": 4,
    "carbsGrams": 8,
    "fatGrams": 0,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.34,
    "ingredients": "Coriander leaves-150 gms;Mint leaves-250 gms; Chillies-15 gms; Ginger-15 gms; Onion-125 gms; Cumin seeds-15 gms; Lemon-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Coriander leaves-150 gms",
      "Mint leaves-250 gms",
      "Chillies-15 gms",
      "Ginger-15 gms",
      "Onion-125 gms",
      "Cumin seeds-15 gms",
      "Lemon-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-474",
    "name": "French Fries",
    "cleanSearchName": "French Fries",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Snacks",
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "nightshade"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 530,
    "calories": 149,
    "proteinGrams": 2,
    "carbsGrams": 22,
    "fatGrams": 5,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.2415,
    "ingredients": "Potato-500 gms; Common salt-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Potato-500 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-475",
    "name": "Saute Bell Pepper",
    "cleanSearchName": "Saute Bell Pepper",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "nightshade"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 246,
    "calories": 320,
    "proteinGrams": 3,
    "carbsGrams": 12,
    "fatGrams": 28,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.4311,
    "ingredients": "Capsicum-201 gms; Olive oil-15 gms; Common salt-15 gms; Garlic-15 gms",
    "parsedIngredients": [
      "Capsicum-201 gms",
      "Olive oil-15 gms",
      "Common salt-15 gms",
      "Garlic-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-476",
    "name": "Chatpate Mushroom",
    "cleanSearchName": "Chatpate Mushroom",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "mushroom"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 247,
    "calories": 146,
    "proteinGrams": 6,
    "carbsGrams": 12,
    "fatGrams": 5,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.5565,
    "ingredients": "Mushroom-100 gms; Onion-50 gms; Chillies-15 gms; Cumin seeds-7 gms; Coriander seeds-7 gms; Lemon-7 gms; Sunflower oil-15 gms; Coriander leaves-15 gms; Ginger-4 gms; Coriander Powder-5 gms; Common salt-7 gms; Garam Masala-15 gms;",
    "parsedIngredients": [
      "Mushroom-100 gms",
      "Onion-50 gms",
      "Chillies-15 gms",
      "Cumin seeds-7 gms",
      "Coriander seeds-7 gms",
      "Lemon-7 gms",
      "Sunflower oil-15 gms",
      "Coriander leaves-15 gms",
      "Ginger-4 gms",
      "Coriander Powder-5 gms",
      "Common salt-7 gms",
      "Garam Masala-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-477",
    "name": "Mushroom Pepper Masala",
    "cleanSearchName": "Mushroom Pepper Masala",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "mushroom"
    ],
    "serving": "1 large katori",
    "totalWeightGrams": 428,
    "calories": 206,
    "proteinGrams": 8,
    "carbsGrams": 24,
    "fatGrams": 5,
    "fiberGrams": 12,
    "carbonFootprintKgCO2e": 0.7325,
    "ingredients": "Mushroom-100 gms; Onion-120 gms ; Capsicum-120 gms; Garlic-15 gms; Ginger-15 gms; Turmeric powder-7 gms; Chillies-7 gms; Cumin seeds-7 gms; Coriander leaves-15 gms; Sunflower oil-15 gms; Black pepper-7 gms",
    "parsedIngredients": [
      "Mushroom-100 gms",
      "Onion-120 gms",
      "Capsicum-120 gms",
      "Garlic-15 gms",
      "Ginger-15 gms",
      "Turmeric powder-7 gms",
      "Chillies-7 gms",
      "Cumin seeds-7 gms",
      "Coriander leaves-15 gms",
      "Sunflower oil-15 gms",
      "Black pepper-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-478",
    "name": "Potato Mushroom Kebab",
    "cleanSearchName": "Potato Mushroom Kebab",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "South",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "mushroom"
    ],
    "serving": "2 number",
    "totalWeightGrams": 950,
    "calories": 211,
    "proteinGrams": 6,
    "carbsGrams": 28,
    "fatGrams": 8,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 1.9345,
    "ingredients": "Potato-80 gms; Olive oil-15 gms;Onion-160 gms; Coriander Powder-5 gms; Mushroom-450 gms; Garlic powder-15 gms; Ginger-15 gms ; Coriander leaves-15 gms; Red chilli Powder-15 gms; Garam Masala-15 gms; Common salt-15 gms;Bread-150 gms",
    "parsedIngredients": [
      "Potato-80 gms",
      "Olive oil-15 gms",
      "Onion-160 gms",
      "Coriander Powder-5 gms",
      "Mushroom-450 gms",
      "Garlic powder-15 gms",
      "Ginger-15 gms",
      "Coriander leaves-15 gms",
      "Red chilli Powder-15 gms",
      "Garam Masala-15 gms",
      "Common salt-15 gms",
      "Bread-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-479",
    "name": "MUSHROOM SOUP",
    "cleanSearchName": "MUSHROOM SOUP",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "mushroom"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 505,
    "calories": 379,
    "proteinGrams": 15,
    "carbsGrams": 27,
    "fatGrams": 24,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 1.4465,
    "ingredients": "MUSHROOM-125 gms; Milk-250 gms; Common salt-15 gms; Milk-100 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "MUSHROOM-125 gms",
      "Milk-250 gms",
      "Common salt-15 gms",
      "Milk-100 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-480",
    "name": "Mushroom Capsicum Onion Vegetable",
    "cleanSearchName": "Mushroom Capsicum Onion Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "mushroom"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 547,
    "calories": 158,
    "proteinGrams": 5,
    "carbsGrams": 13,
    "fatGrams": 6,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.9995,
    "ingredients": "MUSHROOM-120 gms; Capsicum-150 gms; Tomato-120 gms; Onion-75 gms; Chillies-15 gms; Cumin seeds-4 gms; Turmeric powder-4 gms; Common salt-7 gms; Cooking oil-15 gms; Coriander leaves-15 gms; Ginger-4 gms; Garlic-4 gms; Chillies-7 gms; Coriander powder-7 gms",
    "parsedIngredients": [
      "MUSHROOM-120 gms",
      "Capsicum-150 gms",
      "Tomato-120 gms",
      "Onion-75 gms",
      "Chillies-15 gms",
      "Cumin seeds-4 gms",
      "Turmeric powder-4 gms",
      "Common salt-7 gms",
      "Cooking oil-15 gms",
      "Coriander leaves-15 gms",
      "Ginger-4 gms",
      "Garlic-4 gms",
      "Chillies-7 gms",
      "Coriander powder-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-481",
    "name": "Mushroom Do Pyaza",
    "cleanSearchName": "Mushroom Do Pyaza",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "mushroom"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 457,
    "calories": 180,
    "proteinGrams": 7,
    "carbsGrams": 15,
    "fatGrams": 7,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.9245,
    "ingredients": "MUSHROOM-150 gms; Yoghurt-30 gms; Tomato-120 gms; Onion-75 gms; Chillies-15 gms; Cumin powder-4 gms; Turmeric powder-4 gms; Common salt-7 gms; Cooking oil-15 gms; Coriander leaves-15 gms; Ginger-4 gms; Garlic-4 gms; Chillies-7 gms; Coriander seeds-7 gms",
    "parsedIngredients": [
      "MUSHROOM-150 gms",
      "Yoghurt-30 gms",
      "Tomato-120 gms",
      "Onion-75 gms",
      "Chillies-15 gms",
      "Cumin powder-4 gms",
      "Turmeric powder-4 gms",
      "Common salt-7 gms",
      "Cooking oil-15 gms",
      "Coriander leaves-15 gms",
      "Ginger-4 gms",
      "Garlic-4 gms",
      "Chillies-7 gms",
      "Coriander seeds-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-482",
    "name": "Mushroom masala",
    "cleanSearchName": "Mushroom masala",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "mushroom"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 463,
    "calories": 176,
    "proteinGrams": 6,
    "carbsGrams": 16,
    "fatGrams": 7,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.9096,
    "ingredients": "MUSHROOM-150 gms; Yoghurt-30 gms; Tomato-120 gms; Onion-75 gms; Chillies-15 gms; Cumin seeds-4 gms; Turmeric powder-4 gms; Common salt-7 gms; Cooking oil-15 gms; Coriander leaves-15 gms; Ginger-7 gms; Garlic-7 gms; Chillies powder-7 gms; Coriander powder-7 gms",
    "parsedIngredients": [
      "MUSHROOM-150 gms",
      "Yoghurt-30 gms",
      "Tomato-120 gms",
      "Onion-75 gms",
      "Chillies-15 gms",
      "Cumin seeds-4 gms",
      "Turmeric powder-4 gms",
      "Common salt-7 gms",
      "Cooking oil-15 gms",
      "Coriander leaves-15 gms",
      "Ginger-7 gms",
      "Garlic-7 gms",
      "Chillies powder-7 gms",
      "Coriander powder-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-483",
    "name": "Spinach masala",
    "cleanSearchName": "Spinach masala",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "mushroom"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 539,
    "calories": 201,
    "proteinGrams": 8,
    "carbsGrams": 21,
    "fatGrams": 7,
    "fiberGrams": 12,
    "carbonFootprintKgCO2e": 0.4167,
    "ingredients": "Spinach-250 gms; Tomato-120 gms; Onion-100 gms; Cumin seeds-4 gms; Turmeric powder-4 gms; Common salt-7 gms; Cooking oil-15 gms; Coriander leaves-15 gms; Garlic-2.5 gms; Chillies-7 gms; Coriander Powder-7 gms; Ginger-2.5 gms",
    "parsedIngredients": [
      "Spinach-250 gms",
      "Tomato-120 gms",
      "Onion-100 gms",
      "Cumin seeds-4 gms",
      "Turmeric powder-4 gms",
      "Common salt-7 gms",
      "Cooking oil-15 gms",
      "Coriander leaves-15 gms",
      "Garlic-2.5 gms",
      "Chillies-7 gms",
      "Coriander Powder-7 gms",
      "Ginger-2.5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-484",
    "name": "Mushroom saute",
    "cleanSearchName": "Mushroom saute",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "mushroom"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 380,
    "calories": 160,
    "proteinGrams": 6,
    "carbsGrams": 15,
    "fatGrams": 6,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.6127,
    "ingredients": "MUSHROOM-100 gms; Tomato-120 gms; Onion-50 gms; Cumin powder-0.25 gms; TURMERIC-4 gms; Common salt-7 gms; Cooking oil-15 gms; Coriander leaves-15 gms; Garlic-2.5 gms; Coriander Powder-7 gms; Chillies-7 gms; Ginger-0.25 gms",
    "parsedIngredients": [
      "MUSHROOM-100 gms",
      "Tomato-120 gms",
      "Onion-50 gms",
      "Cumin powder-0.25 gms",
      "TURMERIC-4 gms",
      "Common salt-7 gms",
      "Cooking oil-15 gms",
      "Coriander leaves-15 gms",
      "Garlic-2.5 gms",
      "Coriander Powder-7 gms",
      "Chillies-7 gms",
      "Ginger-0.25 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-485",
    "name": "Stuffed Mushroom",
    "cleanSearchName": "Stuffed Mushroom",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "mushroom"
    ],
    "serving": "2 number",
    "totalWeightGrams": 185,
    "calories": 43,
    "proteinGrams": 3,
    "carbsGrams": 6,
    "fatGrams": 0,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.1578,
    "ingredients": "MUSHROOM-2 large; Spinach-60 gms; Onion-30 gms; Capsicum-75 gms; carrot-1 gms;Garlic-5 gms; Common salt-0.5 gms; Black pepper-0.5 gms;Parsley-4 gms",
    "parsedIngredients": [
      "MUSHROOM-2 large",
      "Spinach-60 gms",
      "Onion-30 gms",
      "Capsicum-75 gms",
      "carrot-1 gms",
      "Garlic-5 gms",
      "Common salt-0.5 gms",
      "Black pepper-0.5 gms",
      "Parsley-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-486",
    "name": "Methi Mushroom Vegetable",
    "cleanSearchName": "Methi Mushroom Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "mushroom"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 357,
    "calories": 244,
    "proteinGrams": 11,
    "carbsGrams": 22,
    "fatGrams": 8,
    "fiberGrams": 17,
    "carbonFootprintKgCO2e": 0.4995,
    "ingredients": "Fenugreek leaves-100 gms; MUSHROOM-100 gms; Onion-100 gms; Cumin seeds-7 gms; Turmeric powder-7 gms; Chillies-4 gms; Coriander seeds-7 gms;  Chillies-2 gms; Mustard oil-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Fenugreek leaves-100 gms",
      "MUSHROOM-100 gms",
      "Onion-100 gms",
      "Cumin seeds-7 gms",
      "Turmeric powder-7 gms",
      "Chillies-4 gms",
      "Coriander seeds-7 gms",
      "Chillies-2 gms",
      "Mustard oil-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-487",
    "name": "Dry Matar Mushroom Vegetable",
    "cleanSearchName": "Dry Matar Mushroom Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "mushroom"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 459,
    "calories": 315,
    "proteinGrams": 17,
    "carbsGrams": 40,
    "fatGrams": 6,
    "fiberGrams": 13,
    "carbonFootprintKgCO2e": 1.0163,
    "ingredients": "Peas-62 gms; MUSHROOM-150 gms; TOMATO-150 gms; Cumin seeds-15 gms; Turmeric powder-15 gms; Coriander seeds-15 gms; Red chilli Powder-15 gms; Common salt-7 gms; Olive oil-15 gms; CORIANDER LEAVES-15 gms",
    "parsedIngredients": [
      "Peas-62 gms",
      "MUSHROOM-150 gms",
      "TOMATO-150 gms",
      "Cumin seeds-15 gms",
      "Turmeric powder-15 gms",
      "Coriander seeds-15 gms",
      "Red chilli Powder-15 gms",
      "Common salt-7 gms",
      "Olive oil-15 gms",
      "CORIANDER LEAVES-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-488",
    "name": "Kala Channa Tikki",
    "cleanSearchName": "Kala Channa Tikki",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "legume"
    ],
    "serving": "3 number",
    "totalWeightGrams": 601,
    "calories": 160,
    "proteinGrams": 5,
    "carbsGrams": 19,
    "fatGrams": 6,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.506,
    "ingredients": "Chickpeas-150 gms; POTATO-250 gms;Onion-125 gms; Chillies-15 gms; Ginger-15 gms; Cumin seeds-1 gms; Coriander Powder-15 gms; Garam Masala-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Chickpeas-150 gms",
      "POTATO-250 gms",
      "Onion-125 gms",
      "Chillies-15 gms",
      "Ginger-15 gms",
      "Cumin seeds-1 gms",
      "Coriander Powder-15 gms",
      "Garam Masala-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-489",
    "name": "Salami Sandwich (Chicken)",
    "cleanSearchName": "Salami Sandwich Chicken",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch"
    ],
    "category": "Non-veg",
    "allergens": [
      "gluten"
    ],
    "serving": "2 number",
    "totalWeightGrams": 784,
    "calories": 137,
    "proteinGrams": 13,
    "carbsGrams": 10,
    "fatGrams": 5,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 2.2545,
    "ingredients": "Chicken Salami-300 gms; Tomato-120 gms; Cucumber-200 gms; Lettuce Leaf-10 gms;Black Pepper-4 gms;Bread-150 gms",
    "parsedIngredients": [
      "Chicken Salami-300 gms",
      "Tomato-120 gms",
      "Cucumber-200 gms",
      "Lettuce Leaf-10 gms",
      "Black Pepper-4 gms",
      "Bread-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-490",
    "name": "Chicken Sandwich",
    "cleanSearchName": "Chicken Sandwich",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch"
    ],
    "category": "Non-veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 number",
    "totalWeightGrams": 389,
    "calories": 277,
    "proteinGrams": 16,
    "carbsGrams": 44,
    "fatGrams": 3,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 1.2543,
    "ingredients": "Bread-50 gms; Chicken-150 gms; Garlic-4 gms; Common salt-15 gms; Black pepper-15 gms;Lettuce Leaf-20 gms; Tomato-120 gms; Yoghurt-15 gms",
    "parsedIngredients": [
      "Bread-50 gms",
      "Chicken-150 gms",
      "Garlic-4 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Lettuce Leaf-20 gms",
      "Tomato-120 gms",
      "Yoghurt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-491",
    "name": "Stuffed Oats Bran wheat Roti",
    "cleanSearchName": "Stuffed Oats Bran wheat Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 176,
    "calories": 134,
    "proteinGrams": 4,
    "carbsGrams": 12,
    "fatGrams": 5,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.158,
    "ingredients": "Wheat-15 gms;  Cauliflower-62 gms; Spinach-62 gms; Ginger-7 gms; Chillies-7 gms; Cumin seeds-4 gms; CORIANDER-4 gms; Mustard oil-15 gms",
    "parsedIngredients": [
      "Wheat-15 gms",
      "Cauliflower-62 gms",
      "Spinach-62 gms",
      "Ginger-7 gms",
      "Chillies-7 gms",
      "Cumin seeds-4 gms",
      "CORIANDER-4 gms",
      "Mustard oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-492",
    "name": "Wheat Porridge",
    "cleanSearchName": "Wheat Porridge",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 289,
    "calories": 290,
    "proteinGrams": 9,
    "carbsGrams": 57,
    "fatGrams": 2,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.4225,
    "ingredients": "Wheat-62 gms; Milk-125 gms; Cardamom-4 gms; ALMOND-4 gms; Dates-8 gms; Raisins-6 gms; Apple-80 gms",
    "parsedIngredients": [
      "Wheat-62 gms",
      "Milk-125 gms",
      "Cardamom-4 gms",
      "ALMOND-4 gms",
      "Dates-8 gms",
      "Raisins-6 gms",
      "Apple-80 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-493",
    "name": "Chicken Shawarma (With Pita bread and Curd)",
    "cleanSearchName": "Chicken Shawarma (With Pita bread and Curd)",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "gluten"
    ],
    "serving": "2 number",
    "totalWeightGrams": 500,
    "calories": 535,
    "proteinGrams": 56,
    "carbsGrams": 5,
    "fatGrams": 31,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 2.07,
    "ingredients": "Chicken-300 gms; Lemon-15 gms; Cinnamon-15 gms; Common salt-15 gms; Onion-125 gms; Olive oil-15 gms; Cumin seeds-15 gms",
    "parsedIngredients": [
      "Chicken-300 gms",
      "Lemon-15 gms",
      "Cinnamon-15 gms",
      "Common salt-15 gms",
      "Onion-125 gms",
      "Olive oil-15 gms",
      "Cumin seeds-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-494",
    "name": "Open Sandwich",
    "cleanSearchName": "Open Sandwich",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "2 medium",
    "totalWeightGrams": 529,
    "calories": 197,
    "proteinGrams": 5,
    "carbsGrams": 23,
    "fatGrams": 11,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.6546,
    "ingredients": "Bread-50 gms; Onion-75 gms; Capsicum-75 gms; Cucumber-75 gms; Cherry Tomato-100 gms; Chaat Masala-15 gms; Common salt-15 gms; BUTTER-24 gms; Sweet Corn-100 gms",
    "parsedIngredients": [
      "Bread-50 gms",
      "Onion-75 gms",
      "Capsicum-75 gms",
      "Cucumber-75 gms",
      "Cherry Tomato-100 gms",
      "Chaat Masala-15 gms",
      "Common salt-15 gms",
      "BUTTER-24 gms",
      "Sweet Corn-100 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-495",
    "name": "Bread poha",
    "cleanSearchName": "Bread poha",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "West"
    ],
    "mealTypes": [
      "Breakfast",
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 496,
    "calories": 97,
    "proteinGrams": 2,
    "carbsGrams": 5,
    "fatGrams": 6,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.5236,
    "ingredients": "Bread-25 gms; Onion-125 gms; Tomato-120 gms; Peas-15 gms; Capsicum-75 gms; Mustard seeds-7 gms; Cumin seeds-7 gms; Turmeric powder-4 gms; Chillies-4 gms; Common salt-4 gms; Sunflower oil-15 gms; Coriander leaves-15 gms; Lemon-80 gms",
    "parsedIngredients": [
      "Bread-25 gms",
      "Onion-125 gms",
      "Tomato-120 gms",
      "Peas-15 gms",
      "Capsicum-75 gms",
      "Mustard seeds-7 gms",
      "Cumin seeds-7 gms",
      "Turmeric powder-4 gms",
      "Chillies-4 gms",
      "Common salt-4 gms",
      "Sunflower oil-15 gms",
      "Coriander leaves-15 gms",
      "Lemon-80 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-496",
    "name": "CHICKEN BREAD ROLL",
    "cleanSearchName": "CHICKEN BREAD ROLL",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Non-veg",
    "allergens": [
      "gluten"
    ],
    "serving": "6 slice",
    "totalWeightGrams": 667,
    "calories": 140,
    "proteinGrams": 14,
    "carbsGrams": 15,
    "fatGrams": 3,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 2.4058,
    "ingredients": "Capsicum-250 gms; Common salt-15 gms; Bread-50 gms; Chicken-258 gms; Garlic powder-15 gms; Ginger-4 gms; Chillies-15 gms; Coriander Powder-15 gms; Cumin seeds-15 gms; Garam Masala-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Capsicum-250 gms",
      "Common salt-15 gms",
      "Bread-50 gms",
      "Chicken-258 gms",
      "Garlic powder-15 gms",
      "Ginger-4 gms",
      "Chillies-15 gms",
      "Coriander Powder-15 gms",
      "Cumin seeds-15 gms",
      "Garam Masala-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-497",
    "name": "Whole wheat bread",
    "cleanSearchName": "Whole wheat bread",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 small",
    "totalWeightGrams": 147,
    "calories": 546,
    "proteinGrams": 15,
    "carbsGrams": 84,
    "fatGrams": 17,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.0907,
    "ingredients": "Wheat-125 gms;Common salt-7 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Wheat-125 gms",
      "Common salt-7 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-498",
    "name": "Bruschetta",
    "cleanSearchName": "Bruschetta",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 slice",
    "totalWeightGrams": 249,
    "calories": 107,
    "proteinGrams": 3,
    "carbsGrams": 10,
    "fatGrams": 7,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.2922,
    "ingredients": "TOMATO-90 gms;Garlic-5 gms; Common salt-7 gms; Black pepper-7 gms;Bread-25 gms; Basil-100 gms; Cooking oil-15 gms",
    "parsedIngredients": [
      "TOMATO-90 gms",
      "Garlic-5 gms",
      "Common salt-7 gms",
      "Black pepper-7 gms",
      "Bread-25 gms",
      "Basil-100 gms",
      "Cooking oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-499",
    "name": "Veg Sandwich",
    "cleanSearchName": "Veg Sandwich",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast",
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 365,
    "calories": 138,
    "proteinGrams": 4,
    "carbsGrams": 25,
    "fatGrams": 1,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.2,
    "ingredients": "Bread-50 gms; Capsicum-30 gms; Zucchini-30 gms; Cucumber-200 gms; Common salt-15 gms; Lettuce Leaf-10 gms; Carrot-30 gms",
    "parsedIngredients": [
      "Bread-50 gms",
      "Capsicum-30 gms",
      "Zucchini-30 gms",
      "Cucumber-200 gms",
      "Common salt-15 gms",
      "Lettuce Leaf-10 gms",
      "Carrot-30 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-500",
    "name": "Suji Veggie Pocket",
    "cleanSearchName": "Suji Veggie Pocket",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 190,
    "calories": 221,
    "proteinGrams": 7,
    "carbsGrams": 33,
    "fatGrams": 5,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.161,
    "ingredients": "Semolina-30 gms; Yoghurt-60 ml; Cumin seeds-4 gms; Sunflower oil-7 gms; carrot-20 gms; Beans-20 gms; Peas-20 gms; Onion-50 gms; Ginger-7 gms; Chillies-7 gms; Common salt-0.25 gms",
    "parsedIngredients": [
      "Semolina-30 gms",
      "Yoghurt-60 ml",
      "Cumin seeds-4 gms",
      "Sunflower oil-7 gms",
      "carrot-20 gms",
      "Beans-20 gms",
      "Peas-20 gms",
      "Onion-50 gms",
      "Ginger-7 gms",
      "Chillies-7 gms",
      "Common salt-0.25 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-501",
    "name": "Wheat Roti",
    "cleanSearchName": "Wheat Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 45,
    "calories": 96,
    "proteinGrams": 3,
    "carbsGrams": 19,
    "fatGrams": 0,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.0315,
    "ingredients": "Atta-30 gms; Common salt-15 gms;",
    "parsedIngredients": [
      "Atta-30 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-502",
    "name": "Chicken Wheat Wrap",
    "cleanSearchName": "Chicken Wheat Wrap",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 317,
    "calories": 239,
    "proteinGrams": 17,
    "carbsGrams": 14,
    "fatGrams": 11,
    "fiberGrams": 8,
    "carbonFootprintKgCO2e": 0.6686,
    "ingredients": "Chicken-60 gms; Sunflower oil-15 gms; Turmeric powder-7 gms; Chillies-4 gms; Onion-62 gms; Cabbage-62 gms; Capsicum-62 gms; CORIANDER LEAVES-15 gms; Cumin seeds-15 gms; Green Chutney-15 gms",
    "parsedIngredients": [
      "Chicken-60 gms",
      "Sunflower oil-15 gms",
      "Turmeric powder-7 gms",
      "Chillies-4 gms",
      "Onion-62 gms",
      "Cabbage-62 gms",
      "Capsicum-62 gms",
      "CORIANDER LEAVES-15 gms",
      "Cumin seeds-15 gms",
      "Green Chutney-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-503",
    "name": "Oats Wrap",
    "cleanSearchName": "Oats Wrap",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "2 small",
    "totalWeightGrams": 435,
    "calories": 202,
    "proteinGrams": 9,
    "carbsGrams": 34,
    "fatGrams": 4,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.2495,
    "ingredients": "Common salt-15 gms; Oats-150 gms; Black pepper-15 gms; Baking Soda-5 gms; Spinach-250 gms",
    "parsedIngredients": [
      "Common salt-15 gms",
      "Oats-150 gms",
      "Black pepper-15 gms",
      "Baking Soda-5 gms",
      "Spinach-250 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-504",
    "name": "Bread Roll",
    "cleanSearchName": "Bread Roll",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "2 number",
    "totalWeightGrams": 619,
    "calories": 85,
    "proteinGrams": 1,
    "carbsGrams": 3,
    "fatGrams": 8,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.5405,
    "ingredients": "Potato-450 gms;Bread-50 gms;  Chillies-20 gms;Garlic-15 gms; Coriander leaves-15 gms; Black pepper-15 gms; Onion; Sunflower oil-15 gms; Red chilli Powder-15 gms; Ginger powder-24 gms;",
    "parsedIngredients": [
      "Potato-450 gms",
      "Bread-50 gms",
      "Chillies-20 gms",
      "Garlic-15 gms",
      "Coriander leaves-15 gms",
      "Black pepper-15 gms",
      "Onion",
      "Sunflower oil-15 gms",
      "Red chilli Powder-15 gms",
      "Ginger powder-24 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-505",
    "name": "Avocado Toast",
    "cleanSearchName": "Avocado Toast",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "2 slice",
    "totalWeightGrams": 525,
    "calories": 215,
    "proteinGrams": 4,
    "carbsGrams": 21,
    "fatGrams": 15,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.5765,
    "ingredients": "Common salt-15 gms; Bread-25 gms; Tomato-150 gms; Avocado-150 gms;Onion-125 gms; Lemon-15 gms; Black Pepper-15 gms; Olive oil-15 gms;Parsley-15 gms",
    "parsedIngredients": [
      "Common salt-15 gms",
      "Bread-25 gms",
      "Tomato-150 gms",
      "Avocado-150 gms",
      "Onion-125 gms",
      "Lemon-15 gms",
      "Black Pepper-15 gms",
      "Olive oil-15 gms",
      "Parsley-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-506",
    "name": "POORI",
    "cleanSearchName": "POORI",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 number",
    "totalWeightGrams": 279,
    "calories": 265,
    "proteinGrams": 25,
    "carbsGrams": 154,
    "fatGrams": 29,
    "fiberGrams": 27,
    "carbonFootprintKgCO2e": 0.3379,
    "ingredients": "Atta-250 gms; Common salt-4 gms; Sunflower oil-25 gms",
    "parsedIngredients": [
      "Atta-250 gms",
      "Common salt-4 gms",
      "Sunflower oil-25 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-507",
    "name": "Suji Idli",
    "cleanSearchName": "Suji Idli",
    "associativity": "14",
    "associativityCategory": "South Indian Dosas, Idlis & Uttapams",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "2 medium",
    "totalWeightGrams": 530,
    "calories": 496,
    "proteinGrams": 17,
    "carbsGrams": 86,
    "fatGrams": 9,
    "fiberGrams": 12,
    "carbonFootprintKgCO2e": 0.3115,
    "ingredients": "Semolina-250 gms; CURD-250 gms; Cooking Oil-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Semolina-250 gms",
      "CURD-250 gms",
      "Cooking Oil-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-508",
    "name": "Missi Roti",
    "cleanSearchName": "Missi Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "3 medium",
    "totalWeightGrams": 745,
    "calories": 348,
    "proteinGrams": 13,
    "carbsGrams": 52,
    "fatGrams": 9,
    "fiberGrams": 11,
    "carbonFootprintKgCO2e": 0.796,
    "ingredients": "Coriander leaves-15 gms; Atta-250 gms; Besan-250 gms;Onion-125 gms; Turmeric powder-15 gms; Red chilli Powder-15 gms; Coriander Powder-15 gms; Cumin seeds-15 gms; Ajwain-15 gms; Common salt-15 gms;  Olive oil-15 gms",
    "parsedIngredients": [
      "Coriander leaves-15 gms",
      "Atta-250 gms",
      "Besan-250 gms",
      "Onion-125 gms",
      "Turmeric powder-15 gms",
      "Red chilli Powder-15 gms",
      "Coriander Powder-15 gms",
      "Cumin seeds-15 gms",
      "Ajwain-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-509",
    "name": "Aloo Toast",
    "cleanSearchName": "Aloo Toast",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "4 medium",
    "totalWeightGrams": 484,
    "calories": 172,
    "proteinGrams": 4,
    "carbsGrams": 35,
    "fatGrams": 2,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.4271,
    "ingredients": "Chillies-15 gms; Common salt-15 gms; Cumin seeds-15 gms; Bread-4 gms; POTATO-250 gms;Onion-125 gms; Turmeric powder-15 gms; Red chilli Powder-15 gms; Chat Masala-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Chillies-15 gms",
      "Common salt-15 gms",
      "Cumin seeds-15 gms",
      "Bread-4 gms",
      "POTATO-250 gms",
      "Onion-125 gms",
      "Turmeric powder-15 gms",
      "Red chilli Powder-15 gms",
      "Chat Masala-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-510",
    "name": "Wheat bran roti Roll",
    "cleanSearchName": "Wheat bran roti Roll",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 100,
    "calories": 147,
    "proteinGrams": 3,
    "carbsGrams": 19,
    "fatGrams": 5,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.1105,
    "ingredients": "Atta-30 gms; Mustard oil-15 gms; Lettuce Leaf-10 gms; Cucumber-15 gms; Capsicum-15 gms; carrot-15 gms;",
    "parsedIngredients": [
      "Atta-30 gms",
      "Mustard oil-15 gms",
      "Lettuce Leaf-10 gms",
      "Cucumber-15 gms",
      "Capsicum-15 gms",
      "carrot-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-511",
    "name": "Wheat Palak Wrap",
    "cleanSearchName": "Wheat Palak Wrap",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 480,
    "calories": 1072,
    "proteinGrams": 34,
    "carbsGrams": 198,
    "fatGrams": 13,
    "fiberGrams": 35,
    "carbonFootprintKgCO2e": 0.4589,
    "ingredients": "SPINACH-125 gms; Onion-15 gms; Capsicum-15 gms; Mushroom-15 gms; Zucchini-15 gms; Capsicum, red-15 gms; Cooking oil-7 gms; Cumin seeds-4 gms; Common salt-4 gms; ; Atta-250 gms; Garam Masala-15 gms",
    "parsedIngredients": [
      "SPINACH-125 gms",
      "Onion-15 gms",
      "Capsicum-15 gms",
      "Mushroom-15 gms",
      "Zucchini-15 gms",
      "Capsicum, red-15 gms",
      "Cooking oil-7 gms",
      "Cumin seeds-4 gms",
      "Common salt-4 gms",
      "Atta-250 gms",
      "Garam Masala-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-512",
    "name": "Stuffed Jau Roti (Spinach)",
    "cleanSearchName": "Stuffed Jau Roti (Spinach)",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 615,
    "calories": 254,
    "proteinGrams": 5,
    "carbsGrams": 20,
    "fatGrams": 17,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.6015,
    "ingredients": "Spinach-250 gms; Chillies-15 gms; Common salt-15 gms; dalia-150 gms; Onion-125 gms; Turmeric powder-15 gms; Cumin seeds-15 gms; Coriander Powder-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Spinach-250 gms",
      "Chillies-15 gms",
      "Common salt-15 gms",
      "dalia-150 gms",
      "Onion-125 gms",
      "Turmeric powder-15 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-513",
    "name": "Oats Stuffed Roti (Fenugreek)",
    "cleanSearchName": "Oats Stuffed Roti (Fenugreek)",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "4 medium",
    "totalWeightGrams": 600,
    "calories": 185,
    "proteinGrams": 7,
    "carbsGrams": 34,
    "fatGrams": 2,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.619,
    "ingredients": "Cumin seeds-15 gms; Common salt-15 gms; Atta-250 gms; ; Oats-150 gms; Fenugreek Leaves-125 gms ; Coriander Powder-15 gms; TURMERIC-15 gms; Red chilli Powder-15 gms",
    "parsedIngredients": [
      "Cumin seeds-15 gms",
      "Common salt-15 gms",
      "Atta-250 gms",
      "Oats-150 gms",
      "Fenugreek Leaves-125 gms",
      "Coriander Powder-15 gms",
      "TURMERIC-15 gms",
      "Red chilli Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-514",
    "name": "Oats Cheela",
    "cleanSearchName": "Oats Cheela",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West",
      "East"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 240,
    "calories": 454,
    "proteinGrams": 18,
    "carbsGrams": 69,
    "fatGrams": 12,
    "fiberGrams": 12,
    "carbonFootprintKgCO2e": 0.237,
    "ingredients": "Onion-15 gms; TOMATO-15 gms; Capsicum-15 gms; Common salt-15 gms; Coriander leaves-15 gms; Cooking oil-15 gms;  Oats-150 gms",
    "parsedIngredients": [
      "Onion-15 gms",
      "TOMATO-15 gms",
      "Capsicum-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-15 gms",
      "Cooking oil-15 gms",
      "Oats-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-515",
    "name": "Stuffed Wheat Bran Roti",
    "cleanSearchName": "Stuffed Wheat Bran Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 148,
    "calories": 264,
    "proteinGrams": 7,
    "carbsGrams": 44,
    "fatGrams": 6,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.168,
    "ingredients": "Onion-60 gms; Ginger-7 gms; Turmeric powder-4 gms; Cooking oil-15 gms; Atta-62 gms",
    "parsedIngredients": [
      "Onion-60 gms",
      "Ginger-7 gms",
      "Turmeric powder-4 gms",
      "Cooking oil-15 gms",
      "Atta-62 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-516",
    "name": "Vermicelli",
    "cleanSearchName": "Vermicelli",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 394,
    "calories": 710,
    "proteinGrams": 24,
    "carbsGrams": 117,
    "fatGrams": 14,
    "fiberGrams": 27,
    "carbonFootprintKgCO2e": 0.4979,
    "ingredients": "Cooking oil-30 gms; vermicelli-125 gms; Common salt-7 gms; Chillies-1 gms; Curry leaves-5 gms; Ginger-10 gms; Onion-1 gms; TURMERIC-7 gms; carrot-62 gms; Capsicum-62 gms; Peas-62 gms; Lemon-7 gms; CORIANDER-15 gms;",
    "parsedIngredients": [
      "Cooking oil-30 gms",
      "vermicelli-125 gms",
      "Common salt-7 gms",
      "Chillies-1 gms",
      "Curry leaves-5 gms",
      "Ginger-10 gms",
      "Onion-1 gms",
      "TURMERIC-7 gms",
      "carrot-62 gms",
      "Capsicum-62 gms",
      "Peas-62 gms",
      "Lemon-7 gms",
      "CORIANDER-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-517",
    "name": "Dal Wali Roti",
    "cleanSearchName": "Dal Wali Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 111,
    "calories": 263,
    "proteinGrams": 13,
    "carbsGrams": 42,
    "fatGrams": 2,
    "fiberGrams": 12,
    "carbonFootprintKgCO2e": 0.0962,
    "ingredients": "Atta-30 gms; Gram dal-30 gms; Ginger-7 gms; Cumin seeds-7 gms; Onion-15 gms; Common salt-7 gms; CORIANDER-15 gms;",
    "parsedIngredients": [
      "Atta-30 gms",
      "Gram dal-30 gms",
      "Ginger-7 gms",
      "Cumin seeds-7 gms",
      "Onion-15 gms",
      "Common salt-7 gms",
      "CORIANDER-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-518",
    "name": "Ragi Roti (20% Ragi & 80% wheat)",
    "cleanSearchName": "Ragi Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 76,
    "calories": 255,
    "proteinGrams": 4,
    "carbsGrams": 23,
    "fatGrams": 16,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.1515,
    "ingredients": "Wheat-25 gms; Ragi flour-6 gms; Common salt-15 gms; Cumin seeds-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Wheat-25 gms",
      "Ragi flour-6 gms",
      "Common salt-15 gms",
      "Cumin seeds-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-519",
    "name": "Ragi Roti (50% Ragi & 50% Normal Atta)",
    "cleanSearchName": "Ragi Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 186,
    "calories": 597,
    "proteinGrams": 13,
    "carbsGrams": 95,
    "fatGrams": 17,
    "fiberGrams": 10,
    "carbonFootprintKgCO2e": 0.15575,
    "ingredients": "Wheat-150 gms; Ragi flour-150 gms;Onion-125 gms; Coriander leaves-15 gms; Cumin seeds-1 gms;Olive oil-15 gms",
    "parsedIngredients": [
      "Wheat-150 gms",
      "Ragi flour-150 gms",
      "Onion-125 gms",
      "Coriander leaves-15 gms",
      "Cumin seeds-1 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-520",
    "name": "Soya Flour Roti (20% soya flour + 80% wheat)",
    "cleanSearchName": "Soya Flour Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 515,
    "calories": 346,
    "proteinGrams": 16,
    "carbsGrams": 57,
    "fatGrams": 5,
    "fiberGrams": 11,
    "carbonFootprintKgCO2e": 0.414,
    "ingredients": "Atta-250 gms; Soya flour-250 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Atta-250 gms",
      "Soya flour-250 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-521",
    "name": "Soya wheat Roti (50% soya atta & 50% wheat atta)",
    "cleanSearchName": "Soya wheat Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 161,
    "calories": 475,
    "proteinGrams": 29,
    "carbsGrams": 59,
    "fatGrams": 14,
    "fiberGrams": 14,
    "carbonFootprintKgCO2e": 0.14715,
    "ingredients": "Atta-60 gms; Soya flour-75 gms; Common salt-4 gms; Turmeric powder-7 gms; Ajwain-15 gms;",
    "parsedIngredients": [
      "Atta-60 gms",
      "Soya flour-75 gms",
      "Common salt-4 gms",
      "Turmeric powder-7 gms",
      "Ajwain-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-522",
    "name": "Bran Roti (25% wheat bran & 75 % normal atta)",
    "cleanSearchName": "Bran Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "10 medium",
    "totalWeightGrams": 532,
    "calories": 159,
    "proteinGrams": 6,
    "carbsGrams": 33,
    "fatGrams": 1,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.1507,
    "ingredients": "Wheat-375 gms; Common salt-7 gms; Atta-150 gms",
    "parsedIngredients": [
      "Wheat-375 gms",
      "Common salt-7 gms",
      "Atta-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-523",
    "name": "Bran Roti (20% wheat bran & 80% wheat)",
    "cleanSearchName": "Bran Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 689,
    "calories": 407,
    "proteinGrams": 12,
    "carbsGrams": 69,
    "fatGrams": 10,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.6455,
    "ingredients": "Wheat-150 gms; Atta -500 gms; Common salt-15 gms; Olive oil-24 gms;",
    "parsedIngredients": [
      "Wheat-150 gms",
      "Atta -500 gms",
      "Common salt-15 gms",
      "Olive oil-24 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-524",
    "name": "Wheat Burger with Oats Tikki & Salad",
    "cleanSearchName": "Wheat Burger with Oats Tikki & Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 585,
    "calories": 236,
    "proteinGrams": 2,
    "carbsGrams": 43,
    "fatGrams": 5,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.3908,
    "ingredients": "POTATO-175 gms ; Onion-24 gms; Coriander leaves-7 gms; Ginger-15 gms; carrot-7 gms; Common salt-30 gms; Cooking oil-15 gms; Lettuce Leaf-10 gms; CUCUMBER-20 gms; Avocado-60 gms; VINEGAR-7 gms; Green Chutney-15 gms; Tomato-90 gms; Onion-110 gms",
    "parsedIngredients": [
      "POTATO-175 gms",
      "Onion-24 gms",
      "Coriander leaves-7 gms",
      "Ginger-15 gms",
      "carrot-7 gms",
      "Common salt-30 gms",
      "Cooking oil-15 gms",
      "Lettuce Leaf-10 gms",
      "CUCUMBER-20 gms",
      "Avocado-60 gms",
      "VINEGAR-7 gms",
      "Green Chutney-15 gms",
      "Tomato-90 gms",
      "Onion-110 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-525",
    "name": "Banana Bread (Eggless)",
    "cleanSearchName": "Banana Bread (Eggless)",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 429,
    "calories": 1231,
    "proteinGrams": 44,
    "carbsGrams": 251,
    "fatGrams": 6,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.0004,
    "ingredients": "Banana-75 gms; Wheat-350 gms; Common salt-4 gms",
    "parsedIngredients": [
      "Banana-75 gms",
      "Wheat-350 gms",
      "Common salt-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-526",
    "name": "Plain Roti with Veggies",
    "cleanSearchName": "Plain Roti with Veggies",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 443,
    "calories": 243,
    "proteinGrams": 8,
    "carbsGrams": 37,
    "fatGrams": 6,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.4812,
    "ingredients": "Wheat-30 gms; Common salt-7 gms; carrot-75 gms; Capsicum-75 gms; Peas-30 gms; Tomato-120 gms; Onion-75 gms; Cumin seeds-4 gms; Turmeric powder-4 gms; Cooking oil-15 gms; Coriander seeds-4 gms; Chillies-4 gms",
    "parsedIngredients": [
      "Wheat-30 gms",
      "Common salt-7 gms",
      "carrot-75 gms",
      "Capsicum-75 gms",
      "Peas-30 gms",
      "Tomato-120 gms",
      "Onion-75 gms",
      "Cumin seeds-4 gms",
      "Turmeric powder-4 gms",
      "Cooking oil-15 gms",
      "Coriander seeds-4 gms",
      "Chillies-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-527",
    "name": "Wheat Roti with Veggie Wrap",
    "cleanSearchName": "Wheat Roti with Veggie Wrap",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "4 number",
    "totalWeightGrams": 441,
    "calories": 176,
    "proteinGrams": 7,
    "carbsGrams": 30,
    "fatGrams": 3,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.606,
    "ingredients": "Common salt-15 gms; carrot-75 gms; Capsicum-75 gms; Onion-75 gms; Cumin seeds-4 gms; Turmeric powder-62 gms; Cooking oil-15 gms; Wheat Roti-4 medium; CABBAGE-75 gms; Coriander Powder-15 gms; Garam Masala-15 gms; Coriander Leaves-15 gms",
    "parsedIngredients": [
      "Common salt-15 gms",
      "carrot-75 gms",
      "Capsicum-75 gms",
      "Onion-75 gms",
      "Cumin seeds-4 gms",
      "Turmeric powder-62 gms",
      "Cooking oil-15 gms",
      "Wheat Roti-4 medium",
      "CABBAGE-75 gms",
      "Coriander Powder-15 gms",
      "Garam Masala-15 gms",
      "Coriander Leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-528",
    "name": "Suji Dhokla",
    "cleanSearchName": "Suji Dhokla",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "4 number",
    "totalWeightGrams": 461,
    "calories": 235,
    "proteinGrams": 8,
    "carbsGrams": 43,
    "fatGrams": 3,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.7256,
    "ingredients": "Semolina-250 gms; Yoghurt-125 gms; Lemon-15 gms; Chillies-4 gms; Asafoetida-4 gms; Common salt-7 gms; Cooking oil-15 gms; Mustard seeds-4 gms; Curry leaves-7 gms; Ginger powder-15 gms; CORIANDER LEAVES-15 gms",
    "parsedIngredients": [
      "Semolina-250 gms",
      "Yoghurt-125 gms",
      "Lemon-15 gms",
      "Chillies-4 gms",
      "Asafoetida-4 gms",
      "Common salt-7 gms",
      "Cooking oil-15 gms",
      "Mustard seeds-4 gms",
      "Curry leaves-7 gms",
      "Ginger powder-15 gms",
      "CORIANDER LEAVES-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-529",
    "name": "Noodles Vegetable Sizzler",
    "cleanSearchName": "Noodles Vegetable Sizzler",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 745,
    "calories": 190,
    "proteinGrams": 8,
    "carbsGrams": 27,
    "fatGrams": 2,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 1.242,
    "ingredients": "Capsicum-30 gms; carrot-125 gms; Zucchini-125 gms; MUSHROOM-125 gms; Lettuce Leaf-20 gms; Spinach-15 gms; Common salt-15 gms; Onion-70 gms; Capsicum-70 gms; Rice Noodles-150 gms",
    "parsedIngredients": [
      "Capsicum-30 gms",
      "carrot-125 gms",
      "Zucchini-125 gms",
      "MUSHROOM-125 gms",
      "Lettuce Leaf-20 gms",
      "Spinach-15 gms",
      "Common salt-15 gms",
      "Onion-70 gms",
      "Capsicum-70 gms",
      "Rice Noodles-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-530",
    "name": "Avocado Sandwich",
    "cleanSearchName": "Avocado Sandwich",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 172,
    "calories": 195,
    "proteinGrams": 6,
    "carbsGrams": 40,
    "fatGrams": 0,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.1779,
    "ingredients": "Bread-2 slice; Avocado-0.5 gms;Garlic-7 gms; CUCUMBER-3 slice; Tomato-120 gms)-3 slice; Lemon-0.25 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Bread-2 slice",
      "Avocado-0.5 gms",
      "Garlic-7 gms",
      "CUCUMBER-3 slice",
      "Tomato-120 gms)-3 slice",
      "Lemon-0.25 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-531",
    "name": "Cocktail Idli",
    "cleanSearchName": "Cocktail Idli",
    "associativity": "14",
    "associativityCategory": "South Indian Dosas, Idlis & Uttapams",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 number",
    "totalWeightGrams": 89,
    "calories": 154,
    "proteinGrams": 2,
    "carbsGrams": 9,
    "fatGrams": 11,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.1569,
    "ingredients": "Gram dal-30 gms; Common salt-7 gms; Cooking oil-30 gms; Mustard seeds-7 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Gram dal-30 gms",
      "Common salt-7 gms",
      "Cooking oil-30 gms",
      "Mustard seeds-7 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-532",
    "name": "Suji wrap",
    "cleanSearchName": "Suji wrap",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "4 medium",
    "totalWeightGrams": 807,
    "calories": 232,
    "proteinGrams": 9,
    "carbsGrams": 39,
    "fatGrams": 4,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 1.1453,
    "ingredients": "Semolina-300 gms; Cumin seeds-4 gms; Common salt-7 gms; Coriander leaves-5 gms; Cooking oil-15 gms; carrot-62 gms; Capsicum-62 gms; Onion-62 gms; Yoghurt-200 gms; Tomato-90 gms",
    "parsedIngredients": [
      "Semolina-300 gms",
      "Cumin seeds-4 gms",
      "Common salt-7 gms",
      "Coriander leaves-5 gms",
      "Cooking oil-15 gms",
      "carrot-62 gms",
      "Capsicum-62 gms",
      "Onion-62 gms",
      "Yoghurt-200 gms",
      "Tomato-90 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-533",
    "name": "Chicken Wheat Noodles",
    "cleanSearchName": "Chicken Wheat Noodles",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "gluten"
    ],
    "serving": "2 medium bowl",
    "totalWeightGrams": 578,
    "calories": 231,
    "proteinGrams": 22,
    "carbsGrams": 21,
    "fatGrams": 7,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 1.31385,
    "ingredients": "Chicken-150 gms; carrot-125 gms; Capsicum-125 gms; Peas-125 gms;Garlic-3 gms; soya sauce-15 gms; VINEGAR-15 gms; Common salt-15 gms; Ginger-5 gms",
    "parsedIngredients": [
      "Chicken-150 gms",
      "carrot-125 gms",
      "Capsicum-125 gms",
      "Peas-125 gms",
      "Garlic-3 gms",
      "soya sauce-15 gms",
      "VINEGAR-15 gms",
      "Common salt-15 gms",
      "Ginger-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-534",
    "name": "Ragi Roti (30% Oats Bran + 70% Ragi atta)",
    "cleanSearchName": "Ragi Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 44,
    "calories": 91,
    "proteinGrams": 3,
    "carbsGrams": 18,
    "fatGrams": 0,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.042,
    "ingredients": "Ragi flour-24 gms; Oats-15 gms; Common salt-2.5 gms",
    "parsedIngredients": [
      "Ragi flour-24 gms",
      "Oats-15 gms",
      "Common salt-2.5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-535",
    "name": "Wheat Roti (20% Quinoa flour + 80% wheat flour)",
    "cleanSearchName": "Wheat Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "2 medium",
    "totalWeightGrams": 105,
    "calories": 166,
    "proteinGrams": 6,
    "carbsGrams": 32,
    "fatGrams": 2,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.03,
    "ingredients": "Atta-30 gms; Quinoa Flour-75 gms",
    "parsedIngredients": [
      "Atta-30 gms",
      "Quinoa Flour-75 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-536",
    "name": "Jau Roti (20% Jau atta and 80% wheat atta)",
    "cleanSearchName": "Jau Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 99,
    "calories": 311,
    "proteinGrams": 10,
    "carbsGrams": 62,
    "fatGrams": 1,
    "fiberGrams": 13,
    "carbonFootprintKgCO2e": 0.1014,
    "ingredients": "Barley-24 gms; Atta-75 gms",
    "parsedIngredients": [
      "Barley-24 gms",
      "Atta-75 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-537",
    "name": "Jau Roti (50% Jau atta & 50% Oats atta)",
    "cleanSearchName": "Jau Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 150,
    "calories": 343,
    "proteinGrams": 12,
    "carbsGrams": 61,
    "fatGrams": 5,
    "fiberGrams": 13,
    "carbonFootprintKgCO2e": 0.0825,
    "ingredients": "Barley-75 gms; Oats Atta-75 gms",
    "parsedIngredients": [
      "Barley-75 gms",
      "Oats Atta-75 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-538",
    "name": "20% flaxseed flour 80% wheat flour Roti",
    "cleanSearchName": "20% flaxseed flour 80% wheat flour Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 170,
    "calories": 195,
    "proteinGrams": 7,
    "carbsGrams": 13,
    "fatGrams": 13,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.15,
    "ingredients": "Atta-150 gms; Flaxseed flour-20 gms",
    "parsedIngredients": [
      "Atta-150 gms",
      "Flaxseed flour-20 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-539",
    "name": "JAWAR ROTI (20% JAWAR & 80% WHEAT)",
    "cleanSearchName": "JAWAR ROTI",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 160,
    "calories": 223,
    "proteinGrams": 7,
    "carbsGrams": 45,
    "fatGrams": 1,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.135,
    "ingredients": "Atta-135 gms; Jowar Roti-25 gms",
    "parsedIngredients": [
      "Atta-135 gms",
      "Jowar Roti-25 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-540",
    "name": "Baba Ganoush with Pita Bread",
    "cleanSearchName": "Baba Ganoush with Pita Bread",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "2 tbsp",
    "totalWeightGrams": 322,
    "calories": 289,
    "proteinGrams": 10,
    "carbsGrams": 46,
    "fatGrams": 7,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.2817,
    "ingredients": "Brinjal-100 gms ;Garlic-3 gms;Lemon-4 gms; Cooking oil-15 gms; Cumin seeds-15 gms;  Black pepper-15 gms;Parsley-15 gms; Wheat-125 gms; Yoghurt-30 gms",
    "parsedIngredients": [
      "Brinjal-100 gms",
      "Garlic-3 gms",
      "Lemon-4 gms",
      "Cooking oil-15 gms",
      "Cumin seeds-15 gms",
      "Black pepper-15 gms",
      "Parsley-15 gms",
      "Wheat-125 gms",
      "Yoghurt-30 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-541",
    "name": "Vermicelli Rolls",
    "cleanSearchName": "Vermicelli Rolls",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "2 medium",
    "totalWeightGrams": 819,
    "calories": 401,
    "proteinGrams": 12,
    "carbsGrams": 83,
    "fatGrams": 1,
    "fiberGrams": 14,
    "carbonFootprintKgCO2e": 0.7635,
    "ingredients": "carrot-75 gms; Peas-100 gms; Coriander Powder-15 gms; Vermicelli-350 gms; Turmeric powder-15 gms; Cumin seeds-7 gms; Red chilli Powder-7 gms; Coriander Leaves-75 gms; Common salt-15 gms;Onion-160 gms",
    "parsedIngredients": [
      "carrot-75 gms",
      "Peas-100 gms",
      "Coriander Powder-15 gms",
      "Vermicelli-350 gms",
      "Turmeric powder-15 gms",
      "Cumin seeds-7 gms",
      "Red chilli Powder-7 gms",
      "Coriander Leaves-75 gms",
      "Common salt-15 gms",
      "Onion-160 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-542",
    "name": "Wheat Pasta (Veg)",
    "cleanSearchName": "Wheat Pasta",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 gms",
    "totalWeightGrams": 233,
    "calories": 86,
    "proteinGrams": 5,
    "carbsGrams": 11,
    "fatGrams": 1,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.5046,
    "ingredients": "Common salt-15 gms; Onion-62 gms; Capsicum-62 gms; Zucchini-62 gms; Garlic-2 gms; Black pepper-15 gms; CHEESE-15 gms",
    "parsedIngredients": [
      "Common salt-15 gms",
      "Onion-62 gms",
      "Capsicum-62 gms",
      "Zucchini-62 gms",
      "Garlic-2 gms",
      "Black pepper-15 gms",
      "CHEESE-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-543",
    "name": "Wheat Pasta (Non-veg)",
    "cleanSearchName": "Wheat Pasta (Non-veg)",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 gms",
    "totalWeightGrams": 326,
    "calories": 167,
    "proteinGrams": 13,
    "carbsGrams": 18,
    "fatGrams": 4,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.7136,
    "ingredients": "Common salt-15 gms; Chicken-30 gms; Onion-62 gms; Capsicum-62 gms; Zucchini-62 gms; carrot-62 gms; Garlic-3 gms; Black pepper-15 gms; CHEESE-15 gms",
    "parsedIngredients": [
      "Common salt-15 gms",
      "Chicken-30 gms",
      "Onion-62 gms",
      "Capsicum-62 gms",
      "Zucchini-62 gms",
      "carrot-62 gms",
      "Garlic-3 gms",
      "Black pepper-15 gms",
      "CHEESE-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-544",
    "name": "BAJRA ROTI (100%)",
    "cleanSearchName": "BAJRA ROTI",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 0,
    "calories": 696,
    "proteinGrams": 22,
    "carbsGrams": 124,
    "fatGrams": 11,
    "fiberGrams": 23,
    "carbonFootprintKgCO2e": 0,
    "ingredients": "Bajra-200 grams",
    "parsedIngredients": [
      "Bajra-200 grams"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-545",
    "name": "BAJRA ROTI (50% BAJRA ATTA & 50% NORMAL ATTA)",
    "cleanSearchName": "BAJRA ROTI",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 300,
    "calories": 396,
    "proteinGrams": 13,
    "carbsGrams": 72,
    "fatGrams": 5,
    "fiberGrams": 13,
    "carbonFootprintKgCO2e": 0.0151,
    "ingredients": "Atta-150 gms; Bajra-150 gms;",
    "parsedIngredients": [
      "Atta-150 gms",
      "Bajra-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-546",
    "name": "BAJRA ROTI (20% BAJRA & 80% WHEAT)",
    "cleanSearchName": "BAJRA ROTI",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 175,
    "calories": 220,
    "proteinGrams": 275,
    "carbsGrams": 1548,
    "fatGrams": 136,
    "fiberGrams": 288,
    "carbonFootprintKgCO2e": 0.0165,
    "ingredients": "Atta-160 gms; Bajra-40 grams; Common salt-15 gms",
    "parsedIngredients": [
      "Atta-160 gms",
      "Bajra-40 grams",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-547",
    "name": "OATS BREAD",
    "cleanSearchName": "OATS BREAD",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 number",
    "totalWeightGrams": 202,
    "calories": 192,
    "proteinGrams": 6,
    "carbsGrams": 25,
    "fatGrams": 8,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.274,
    "ingredients": "Milk-45 gms; Cooking oil-7 gms; Oats-150 gms",
    "parsedIngredients": [
      "Milk-45 gms",
      "Cooking oil-7 gms",
      "Oats-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-548",
    "name": "Besan Roti (20% Besan & 80% Wheat)",
    "cleanSearchName": "Besan Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 415,
    "calories": 90,
    "proteinGrams": 3,
    "carbsGrams": 18,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.2715,
    "ingredients": "Wheat-25 gms; Common salt-15 gms; Onion-25 gms; Besan-350 gms",
    "parsedIngredients": [
      "Wheat-25 gms",
      "Common salt-15 gms",
      "Onion-25 gms",
      "Besan-350 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-549",
    "name": "Oats bran roti (50% Oats bran and 50% Normal (Wheat) atta)",
    "cleanSearchName": "Oats bran roti  atta)",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 300,
    "calories": 146,
    "proteinGrams": 9,
    "carbsGrams": 37,
    "fatGrams": 3,
    "fiberGrams": 8,
    "carbonFootprintKgCO2e": 0.15,
    "ingredients": "Atta-150 gms; Oats Bran-150 gms",
    "parsedIngredients": [
      "Atta-150 gms",
      "Oats Bran-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-550",
    "name": "Oats bran roti (20% Oats bran and 80% Normal (Wheat) atta)",
    "cleanSearchName": "Oats bran roti  atta)",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 200,
    "calories": 178,
    "proteinGrams": 10,
    "carbsGrams": 43,
    "fatGrams": 3,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.16,
    "ingredients": "Atta-160 gms; Oats Bran-40 gms",
    "parsedIngredients": [
      "Atta-160 gms",
      "Oats Bran-40 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-551",
    "name": "Quinoa Flour Roti (20% Quinoa Flour & 80% Wheat)",
    "cleanSearchName": "Quinoa Flour Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 200,
    "calories": 269,
    "proteinGrams": 10,
    "carbsGrams": 49,
    "fatGrams": 3,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0,
    "ingredients": "Wheat-160 gms; Quinoa Flour-40 gms",
    "parsedIngredients": [
      "Wheat-160 gms",
      "Quinoa Flour-40 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-552",
    "name": "Ragi Roti (25% Ragi & 75% Normal Atta)",
    "cleanSearchName": "Ragi Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 100,
    "calories": 100,
    "proteinGrams": 4,
    "carbsGrams": 21,
    "fatGrams": 0,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.03125,
    "ingredients": "Wheat-75 gms; Ragi flour-25 gms",
    "parsedIngredients": [
      "Wheat-75 gms",
      "Ragi flour-25 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-553",
    "name": "Dal peetha",
    "cleanSearchName": "Dal peetha",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "East"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "4 gms",
    "totalWeightGrams": 404,
    "calories": 239,
    "proteinGrams": 9,
    "carbsGrams": 39,
    "fatGrams": 5,
    "fiberGrams": 8,
    "carbonFootprintKgCO2e": 0.5095,
    "ingredients": "Atta-200 gms; Gram dal-50 gms; Cumin seeds-15 gms; Tomato-120 gms; Ginger-4 gms; Chillies-2 number; Mustard oil-15 gms",
    "parsedIngredients": [
      "Atta-200 gms",
      "Gram dal-50 gms",
      "Cumin seeds-15 gms",
      "Tomato-120 gms",
      "Ginger-4 gms",
      "Chillies-2 number",
      "Mustard oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-554",
    "name": "Tawa Roti",
    "cleanSearchName": "Tawa Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "2 number",
    "totalWeightGrams": 101,
    "calories": 192,
    "proteinGrams": 7,
    "carbsGrams": 39,
    "fatGrams": 1,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.1001,
    "ingredients": "Atta-100 gms; Common salt-1 gms",
    "parsedIngredients": [
      "Atta-100 gms",
      "Common salt-1 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-555",
    "name": "Missi Roti(1/3 Besan & 1/3 Wheat Atta & 1/3 Wheat Bran)",
    "cleanSearchName": "Missi Roti(1/3 Besan & 1/3 Wheat Atta & 1/3 Wheat Bran)",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 728,
    "calories": 1494,
    "proteinGrams": 55,
    "carbsGrams": 264,
    "fatGrams": 27,
    "fiberGrams": 59,
    "carbonFootprintKgCO2e": 0.6947,
    "ingredients": "Besan-250 gms; Atta-250 gms; Onion-160 gms; Ajwain-15 gms; Red chilli Powder-15 gms; CORIANDER-1 gms; Cumin seeds-15 gms; Common salt-7 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Besan-250 gms",
      "Atta-250 gms",
      "Onion-160 gms",
      "Ajwain-15 gms",
      "Red chilli Powder-15 gms",
      "CORIANDER-1 gms",
      "Cumin seeds-15 gms",
      "Common salt-7 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-556",
    "name": "Open Sandwich with one slice",
    "cleanSearchName": "Open Sandwich with one slice",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 slice",
    "totalWeightGrams": 380,
    "calories": 157,
    "proteinGrams": 8,
    "carbsGrams": 30,
    "fatGrams": 0,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.2174,
    "ingredients": "Bread-25 gms; carrot-62 gms; Beetroot-62 gms; CUCUMBER-62 gms; TOMATO-62 gms; Onion-62 gms; Coriander leaves-15 gms; Common salt-15 gms; Chat Masala-15 gms",
    "parsedIngredients": [
      "Bread-25 gms",
      "carrot-62 gms",
      "Beetroot-62 gms",
      "CUCUMBER-62 gms",
      "TOMATO-62 gms",
      "Onion-62 gms",
      "Coriander leaves-15 gms",
      "Common salt-15 gms",
      "Chat Masala-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-557",
    "name": "50% Barley Atta & 50% Oats Atta Roti",
    "cleanSearchName": "50% Barley Atta & 50% Oats Atta Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 number",
    "totalWeightGrams": 250,
    "calories": 367,
    "proteinGrams": 12,
    "carbsGrams": 70,
    "fatGrams": 4,
    "fiberGrams": 14,
    "carbonFootprintKgCO2e": 0.2625,
    "ingredients": "Barley Flour-125 gms; Oats Flour-125 gms",
    "parsedIngredients": [
      "Barley Flour-125 gms",
      "Oats Flour-125 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-558",
    "name": "Garlic Toast",
    "cleanSearchName": "Garlic Toast",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "2 number",
    "totalWeightGrams": 105,
    "calories": 252,
    "proteinGrams": 6,
    "carbsGrams": 31,
    "fatGrams": 12,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.448,
    "ingredients": "Bread-60 gms; Garlic-5 gms; Butter-30 gms; Common salt-10 gms",
    "parsedIngredients": [
      "Bread-60 gms",
      "Garlic-5 gms",
      "Butter-30 gms",
      "Common salt-10 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-559",
    "name": "Ragi Roti (50% Ragi atta + 50% Wheat atta)",
    "cleanSearchName": "Ragi Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "4 medium",
    "totalWeightGrams": 627,
    "calories": 100,
    "proteinGrams": 4,
    "carbsGrams": 20,
    "fatGrams": 1,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.6916,
    "ingredients": "Ragi flour-200 gms; Atta-250 gms; Onion-125 gms; Coriander leaves-20 gms; Chillies-15 gms; Cumin seeds-1 gms; Common salt-1 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Ragi flour-200 gms",
      "Atta-250 gms",
      "Onion-125 gms",
      "Coriander leaves-20 gms",
      "Chillies-15 gms",
      "Cumin seeds-1 gms",
      "Common salt-1 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-560",
    "name": "Quinoa Flour Roti (50% Quinoa Flour + 50% Normal Atta)",
    "cleanSearchName": "Quinoa Flour Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "2 medium",
    "totalWeightGrams": 535,
    "calories": 258,
    "proteinGrams": 10,
    "carbsGrams": 48,
    "fatGrams": 3,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.835,
    "ingredients": "Quinoa-350 gms; Atta-150 gms; Coriander Powder-5 gms; Red chilli Powder-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Quinoa-350 gms",
      "Atta-150 gms",
      "Coriander Powder-5 gms",
      "Red chilli Powder-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-561",
    "name": "Oats Bran Roti",
    "cleanSearchName": "Oats Bran Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 289,
    "calories": 386,
    "proteinGrams": 13,
    "carbsGrams": 66,
    "fatGrams": 7,
    "fiberGrams": 11,
    "carbonFootprintKgCO2e": 0.2855,
    "ingredients": "Common salt-15 gms; Oats Flour-250 gms; Cumin seeds-24 gms",
    "parsedIngredients": [
      "Common salt-15 gms",
      "Oats Flour-250 gms",
      "Cumin seeds-24 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-562",
    "name": "Bajra Roti(50% Bajra & 50 % Wheat Atta)",
    "cleanSearchName": "Bajra Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "6 medium",
    "totalWeightGrams": 515,
    "calories": 53,
    "proteinGrams": 2,
    "carbsGrams": 11,
    "fatGrams": 0,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.2765,
    "ingredients": "Bajra-250 gms; Atta-250 gms; Common salt-15 gms;",
    "parsedIngredients": [
      "Bajra-250 gms",
      "Atta-250 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-563",
    "name": "Amaranth Flour roti",
    "cleanSearchName": "Amaranth Flour roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "6 medium",
    "totalWeightGrams": 30,
    "calories": 2,
    "proteinGrams": 2,
    "carbsGrams": 4,
    "fatGrams": 1,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.0915,
    "ingredients": "Common salt-15 gms;Olive oil-15 gms; Amaranth Flour-1 gram",
    "parsedIngredients": [
      "Common salt-15 gms",
      "Olive oil-15 gms",
      "Amaranth Flour-1 gram"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-564",
    "name": "Amaranth Flour Roti 50% Amaranth Flour and 50% Wheat Flour",
    "cleanSearchName": "Amaranth Flour Roti 50% Amaranth Flour and 50% Wheat Flour",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "6 medium",
    "totalWeightGrams": 180,
    "calories": 33,
    "proteinGrams": 2,
    "carbsGrams": 9,
    "fatGrams": 1,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.2415,
    "ingredients": "Amaranth Flour-1 gram; Atta-150 gms; Common salt-15 gms ; Olive oil-15 gms",
    "parsedIngredients": [
      "Amaranth Flour-1 gram",
      "Atta-150 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-565",
    "name": "Bread Poha with Brown Bread",
    "cleanSearchName": "Bread Poha with Brown Bread",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 434,
    "calories": 107,
    "proteinGrams": 3,
    "carbsGrams": 19,
    "fatGrams": 1,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.6024,
    "ingredients": "Bread-100 gms; Onion-125 gms; Tomato-90 gms; Mustard seeds-24 gms; Cumin seeds-15 gms; Turmeric powder-15 gms; Red chilli Powder-15 gms; Coriander Powder-5 gms; Olive oil-15 gms; Common salt-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Bread-100 gms",
      "Onion-125 gms",
      "Tomato-90 gms",
      "Mustard seeds-24 gms",
      "Cumin seeds-15 gms",
      "Turmeric powder-15 gms",
      "Red chilli Powder-15 gms",
      "Coriander Powder-5 gms",
      "Olive oil-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-566",
    "name": "Ragi Roti Without Oil",
    "cleanSearchName": "Ragi Roti Without Oil",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 290,
    "calories": 0,
    "proteinGrams": 0,
    "carbsGrams": 0,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.2265,
    "ingredients": "Ragi-150 gms; Common salt-15 gms; Onion-125 gms",
    "parsedIngredients": [
      "Ragi-150 gms",
      "Common salt-15 gms",
      "Onion-125 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-567",
    "name": "Vegetable Wheat Vermicelli",
    "cleanSearchName": "Vegetable Wheat Vermicelli",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "North",
      "South"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "4 medium bowl",
    "totalWeightGrams": 765,
    "calories": 135,
    "proteinGrams": 4,
    "carbsGrams": 19,
    "fatGrams": 4,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.9382,
    "ingredients": "Vermicelli-300 gms;Onion-125 gms; Tomato-90 gms; Black pepper-7 gms; Peas-150 gms; Olive oil-15 gms; Cumin seeds-7 gms; Ginger-15 gms; Garlic powder-15 gms; Turmeric powder-4 gms; Garam Masala-15 gms; Common salt-7 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Vermicelli-300 gms",
      "Onion-125 gms",
      "Tomato-90 gms",
      "Black pepper-7 gms",
      "Peas-150 gms",
      "Olive oil-15 gms",
      "Cumin seeds-7 gms",
      "Ginger-15 gms",
      "Garlic powder-15 gms",
      "Turmeric powder-4 gms",
      "Garam Masala-15 gms",
      "Common salt-7 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-568",
    "name": "Amarnath Roti(50%Almond Flour+50%Normal Atta)",
    "cleanSearchName": "Amarnath Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 166,
    "calories": 380,
    "proteinGrams": 23,
    "carbsGrams": 80,
    "fatGrams": 12,
    "fiberGrams": 40,
    "carbonFootprintKgCO2e": 0.122,
    "ingredients": "Amaranth Flour-1 gms; Oats-150 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Amaranth Flour-1 gms",
      "Oats-150 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-569",
    "name": "Veggies Stuffed Jaw Roti",
    "cleanSearchName": "Veggies Stuffed Jaw Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 number",
    "totalWeightGrams": 770,
    "calories": 955,
    "proteinGrams": 23,
    "carbsGrams": 134,
    "fatGrams": 37,
    "fiberGrams": 35,
    "carbonFootprintKgCO2e": 0.8,
    "ingredients": "Barley Flour-250 gms; Common salt-15 gms; Olive oil-15 gms;Onion-125 gms; POTATO-150 gms; carrot-15 gms; Peas-150 gms; Cumin seeds-15 gms; Coriander Powder-5 gms; Turmeric powder-15 gms; Red chilli Powder-15 gms",
    "parsedIngredients": [
      "Barley Flour-250 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms",
      "Onion-125 gms",
      "POTATO-150 gms",
      "carrot-15 gms",
      "Peas-150 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-5 gms",
      "Turmeric powder-15 gms",
      "Red chilli Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-570",
    "name": "Whole Wheat Bread Poha",
    "cleanSearchName": "Whole Wheat Bread Poha",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "West"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 small katori",
    "totalWeightGrams": 315,
    "calories": 292,
    "proteinGrams": 6,
    "carbsGrams": 25,
    "fatGrams": 18,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.4475,
    "ingredients": "Bread-25 gms;Onion-125 gms; Tomato-90 gms; Chillies-15 gms; ; Cumin seeds-15 gms; Turmeric powder-15 gms; Common salt-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Bread-25 gms",
      "Onion-125 gms",
      "Tomato-90 gms",
      "Chillies-15 gms",
      "Cumin seeds-15 gms",
      "Turmeric powder-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-571",
    "name": "Oats bran roti(50% Oats bran & 50% wheat atta)",
    "cleanSearchName": "Oats bran roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "gluten"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 180,
    "calories": 496,
    "proteinGrams": 20,
    "carbsGrams": 52,
    "fatGrams": 23,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.1365,
    "ingredients": "Oats-150 gms; Common salt-15 gms;  Maida-15 gms",
    "parsedIngredients": [
      "Oats-150 gms",
      "Common salt-15 gms",
      "Maida-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-572",
    "name": "Garlic and Tomato Salad",
    "cleanSearchName": "Garlic and Tomato Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "garlic"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 241,
    "calories": 69,
    "proteinGrams": 4,
    "carbsGrams": 9,
    "fatGrams": 1,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.204,
    "ingredients": "Tomato-120 gms; Lettuce Leaf-100 gms;Garlic-5 gms; Common salt-15 gms; Black pepper-1 gms",
    "parsedIngredients": [
      "Tomato-120 gms",
      "Lettuce Leaf-100 gms",
      "Garlic-5 gms",
      "Common salt-15 gms",
      "Black pepper-1 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-573",
    "name": "FISH CURRY",
    "cleanSearchName": "FISH CURRY",
    "associativity": "8",
    "associativityCategory": "Gravy Curries, Soups & Stews",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Gravy"
    ],
    "category": "Non-veg",
    "allergens": [
      "fish"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 434,
    "calories": 196,
    "proteinGrams": 22,
    "carbsGrams": 12,
    "fatGrams": 6,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 1.2857,
    "ingredients": "Sunflower oil-7 gms; Onion-62 gms; Ginger-4 gms; Garlic-7 gms; Turmeric powder-7 gms; Tomato-125 gms; Common salt-7 gms; Coriander leaves-15 gms; Fish-200 gms",
    "parsedIngredients": [
      "Sunflower oil-7 gms",
      "Onion-62 gms",
      "Ginger-4 gms",
      "Garlic-7 gms",
      "Turmeric powder-7 gms",
      "Tomato-125 gms",
      "Common salt-7 gms",
      "Coriander leaves-15 gms",
      "Fish-200 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-574",
    "name": "Fish Salad",
    "cleanSearchName": "Fish Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "fish"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 487,
    "calories": 400,
    "proteinGrams": 43,
    "carbsGrams": 6,
    "fatGrams": 20,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 1.0611,
    "ingredients": "Salmon-200 gms; Lemon-15 gms; Common salt-7 gms; Lettuce Leaf-6 0 gms; Cucumber-62 gms; Capsicum-45 gms;Onion-150 gms; Garlic-4 gms;Black Pepper-4 gms",
    "parsedIngredients": [
      "Salmon-200 gms",
      "Lemon-15 gms",
      "Common salt-7 gms",
      "Lettuce Leaf-6 0 gms",
      "Cucumber-62 gms",
      "Capsicum-45 gms",
      "Onion-150 gms",
      "Garlic-4 gms",
      "Black Pepper-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-575",
    "name": "GRILLED FISH",
    "cleanSearchName": "GRILLED FISH",
    "associativity": "8",
    "associativityCategory": "Gravy Curries, Soups & Stews",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Gravy"
    ],
    "category": "Non-veg",
    "allergens": [
      "fish"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 120,
    "calories": 305,
    "proteinGrams": 21,
    "carbsGrams": 0,
    "fatGrams": 25,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.54,
    "ingredients": "Lemon-0.5 gms;Salmon-100 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Lemon-0.5 gms",
      "Salmon-100 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-576",
    "name": "Masala Fish Fry",
    "cleanSearchName": "Masala Fish Fry",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "East"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Non-veg",
    "allergens": [
      "fish"
    ],
    "serving": "3 number",
    "totalWeightGrams": 32,
    "calories": 22,
    "proteinGrams": 4,
    "carbsGrams": 1,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.061,
    "ingredients": "CAT FISH-2 gms; Turmeric powder-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "CAT FISH-2 gms",
      "Turmeric powder-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-577",
    "name": "Non-veg PLATTER (Fish)",
    "cleanSearchName": "Non-veg PLATTER (Fish)",
    "associativity": "8",
    "associativityCategory": "Gravy Curries, Soups & Stews",
    "region": [
      "East"
    ],
    "mealTypes": [
      "Gravy"
    ],
    "category": "Non-veg",
    "allergens": [
      "fish"
    ],
    "serving": "3 number",
    "totalWeightGrams": 269,
    "calories": 53,
    "proteinGrams": 9,
    "carbsGrams": 2,
    "fatGrams": 1,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 1.0358,
    "ingredients": "Garlic-4 gms;Lettuce Leaf-20 gms; Spinach-20 gms; CUCUMBER-0.25 gms; Fish-200 gms",
    "parsedIngredients": [
      "Garlic-4 gms",
      "Lettuce Leaf-20 gms",
      "Spinach-20 gms",
      "CUCUMBER-0.25 gms",
      "Fish-200 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-578",
    "name": "Samakiya Rice",
    "cleanSearchName": "Samakiya Rice",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "fish"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 150,
    "calories": 180,
    "proteinGrams": 3,
    "carbsGrams": 37,
    "fatGrams": 1,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.45,
    "ingredients": "Samakhia Rice-150 gms",
    "parsedIngredients": [
      "Samakhia Rice-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-579",
    "name": "Fish Tikka",
    "cleanSearchName": "Fish Tikka",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "fish"
    ],
    "serving": "4 medium",
    "totalWeightGrams": 515,
    "calories": 238,
    "proteinGrams": 30,
    "carbsGrams": 4,
    "fatGrams": 10,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 2.3335,
    "ingredients": "Ginger-15 gms; Turmeric powder-15 gms; Common salt-15 gms; Fish-360 gms; Garlic powder-15 gms; Lemon-15 gms; Coriander Powder-5 gms; Garam Masala-15 gms; Red chilli Powder-15 gms; Olive oil-30 gms; Cumin Powder-15 gms; Yoghurt-1 gm",
    "parsedIngredients": [
      "Ginger-15 gms",
      "Turmeric powder-15 gms",
      "Common salt-15 gms",
      "Fish-360 gms",
      "Garlic powder-15 gms",
      "Lemon-15 gms",
      "Coriander Powder-5 gms",
      "Garam Masala-15 gms",
      "Red chilli Powder-15 gms",
      "Olive oil-30 gms",
      "Cumin Powder-15 gms",
      "Yoghurt-1 gm"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-580",
    "name": "Baked Fish",
    "cleanSearchName": "Baked Fish",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "fish"
    ],
    "serving": "1 number",
    "totalWeightGrams": 170,
    "calories": 168,
    "proteinGrams": 19,
    "carbsGrams": 0,
    "fatGrams": 9,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.5735,
    "ingredients": "fish-100 gms;Parsley-0.25 gms; red chilli flakes-4 gms; Kali Mirch Powder-4 gms; Cooking Oil-7 gms; Lemon-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "fish-100 gms",
      "Parsley-0.25 gms",
      "red chilli flakes-4 gms",
      "Kali Mirch Powder-4 gms",
      "Cooking Oil-7 gms",
      "Lemon-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-581",
    "name": "Fish Cutlet (Grilled/Roasted)",
    "cleanSearchName": "Fish Cutlet (Grilled/Roasted)",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "fish"
    ],
    "serving": "1 number",
    "totalWeightGrams": 264,
    "calories": 216,
    "proteinGrams": 16,
    "carbsGrams": 13,
    "fatGrams": 10,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.4519,
    "ingredients": "fish-60 gms; Potato-150 gms; Onion-0.5 gms; Ginger-4 gms;Garlic-4 gms; Turmeric powder-4 gms; Red Chilli Powder-4 gms;Lemon-4 gms; Coriander leaves-15 gms; Cooking oil-7 gms; Cumin seeds-7 gms",
    "parsedIngredients": [
      "fish-60 gms",
      "Potato-150 gms",
      "Onion-0.5 gms",
      "Ginger-4 gms",
      "Garlic-4 gms",
      "Turmeric powder-4 gms",
      "Red Chilli Powder-4 gms",
      "Lemon-4 gms",
      "Coriander leaves-15 gms",
      "Cooking oil-7 gms",
      "Cumin seeds-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-582",
    "name": "Fish Tikka Kebab",
    "cleanSearchName": "Fish Tikka Kebab",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "East"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "fish"
    ],
    "serving": "1 number",
    "totalWeightGrams": 122,
    "calories": 177,
    "proteinGrams": 17,
    "carbsGrams": 2,
    "fatGrams": 10,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.4998,
    "ingredients": "fish-70 gms; Yoghurt-7 gms; Lemon-7 gms; Ginger powder-4 gms; Garlic powder-4 gms; Chilli powder-4 gms; Turmeric powder-4 gms; Cooking oil-7 gms; Cumin seeds-15 gms",
    "parsedIngredients": [
      "fish-70 gms",
      "Yoghurt-7 gms",
      "Lemon-7 gms",
      "Ginger powder-4 gms",
      "Garlic powder-4 gms",
      "Chilli powder-4 gms",
      "Turmeric powder-4 gms",
      "Cooking oil-7 gms",
      "Cumin seeds-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-583",
    "name": "Fish Sizzler",
    "cleanSearchName": "Fish Sizzler",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "fish"
    ],
    "serving": "1 number",
    "totalWeightGrams": 590,
    "calories": 106,
    "proteinGrams": 7,
    "carbsGrams": 13,
    "fatGrams": 3,
    "fiberGrams": 13,
    "carbonFootprintKgCO2e": 1.163,
    "ingredients": "fish-200 gms ; Zucchini-125 gms; carrot-125 gms;Garlic-15 gms;   Coriander leaves-125 gms",
    "parsedIngredients": [
      "fish-200 gms",
      "Zucchini-125 gms",
      "carrot-125 gms",
      "Garlic-15 gms",
      "Coriander leaves-125 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-584",
    "name": "Lettuce wrapped fish",
    "cleanSearchName": "Lettuce wrapped fish",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "fish"
    ],
    "serving": "2 number",
    "totalWeightGrams": 640,
    "calories": 110,
    "proteinGrams": 8,
    "carbsGrams": 3,
    "fatGrams": 7,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.953,
    "ingredients": "Lettuce Leaf-20 gms; TOMATO-150 gms; Onion-150 gms; Coriander leaves-15 gms; Lemon-15 gms; Avocado-150 gms;Garlic-10 gms; Common salt-15 gms; Salmon-100 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Lettuce Leaf-20 gms",
      "TOMATO-150 gms",
      "Onion-150 gms",
      "Coriander leaves-15 gms",
      "Lemon-15 gms",
      "Avocado-150 gms",
      "Garlic-10 gms",
      "Common salt-15 gms",
      "Salmon-100 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-585",
    "name": "Egg white omelette",
    "cleanSearchName": "Egg white omelette",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Eggetarian",
    "allergens": [
      "egg"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 135,
    "calories": 74,
    "proteinGrams": 7,
    "carbsGrams": 0,
    "fatGrams": 5,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.0175,
    "ingredients": "Egg-130 gms ; Sunflower oil-5 gms",
    "parsedIngredients": [
      "Egg-130 gms",
      "Sunflower oil-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-586",
    "name": "Egg white Scrambled",
    "cleanSearchName": "Egg white Scrambled",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Eggetarian",
    "allergens": [
      "egg"
    ],
    "serving": "2 medium bowl",
    "totalWeightGrams": 60,
    "calories": 35,
    "proteinGrams": 2,
    "carbsGrams": 1,
    "fatGrams": 3,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.2475,
    "ingredients": "Egg-30 gms ; Groundnut oil-15 gms; Black pepper-15 gms",
    "parsedIngredients": [
      "Egg-30 gms",
      "Groundnut oil-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-587",
    "name": "Poached Egg white",
    "cleanSearchName": "Poached Egg white",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Eggetarian",
    "allergens": [
      "egg"
    ],
    "serving": "1 gms",
    "totalWeightGrams": 195,
    "calories": 85,
    "proteinGrams": 8,
    "carbsGrams": 0,
    "fatGrams": 5,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.735,
    "ingredients": "Egg-150 gms ; Sunflower oil-15 gms; Lemon-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Egg-150 gms",
      "Sunflower oil-15 gms",
      "Lemon-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-588",
    "name": "Egg Bhurji",
    "cleanSearchName": "Egg Bhurji",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Eggetarian",
    "allergens": [
      "egg"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 201,
    "calories": 117,
    "proteinGrams": 8,
    "carbsGrams": 3,
    "fatGrams": 8,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.7329,
    "ingredients": "Egg-130 gms; Cooking oil-7 gms; Onion-20 gms; Capsicum-10 gms; Mushroom-15 gms; Common salt-4 gms; Red chilli Powder-15 gms",
    "parsedIngredients": [
      "Egg-130 gms",
      "Cooking oil-7 gms",
      "Onion-20 gms",
      "Capsicum-10 gms",
      "Mushroom-15 gms",
      "Common salt-4 gms",
      "Red chilli Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-589",
    "name": "EGG WHITE SALAD",
    "cleanSearchName": "EGG WHITE SALAD",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Eggetarian",
    "allergens": [
      "egg"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 244,
    "calories": 91,
    "proteinGrams": 15,
    "carbsGrams": 6,
    "fatGrams": 0,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.6688,
    "ingredients": "Egg-130 gms; Celery-62 gms; Capsicum-2 gms; Onion-15 gms;  Lettuce Leaf-20 gms ;Black pepper-15 gms",
    "parsedIngredients": [
      "Egg-130 gms",
      "Celery-62 gms",
      "Capsicum-2 gms",
      "Onion-15 gms",
      "Lettuce Leaf-20 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-590",
    "name": "EGG SALAD",
    "cleanSearchName": "EGG SALAD",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Eggetarian",
    "allergens": [
      "egg"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 276,
    "calories": 347,
    "proteinGrams": 18,
    "carbsGrams": 5,
    "fatGrams": 28,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.7961,
    "ingredients": "Egg-130 gms; Capsicum-62 gms; Common salt-4 gms; Lettuce Leaf-20 gms; Onion-15 gms; Black pepper-15 gms; Mustard oil-15 gms; Lemon-15 gms",
    "parsedIngredients": [
      "Egg-130 gms",
      "Capsicum-62 gms",
      "Common salt-4 gms",
      "Lettuce Leaf-20 gms",
      "Onion-15 gms",
      "Black pepper-15 gms",
      "Mustard oil-15 gms",
      "Lemon-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-591",
    "name": "Egg white Fritatta",
    "cleanSearchName": "Egg white Fritatta",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Eggetarian",
    "allergens": [
      "egg"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 292,
    "calories": 110,
    "proteinGrams": 11,
    "carbsGrams": 2,
    "fatGrams": 5,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 1.0325,
    "ingredients": "Egg-180 gms; Milk-15 gms; Common salt-15 gms; Cooking oil-15 gms; TOMATO-15 gms; Capsicum-15 gms; Mushroom-15 gms; Spinach-15 gms; Black pepper-7 gms",
    "parsedIngredients": [
      "Egg-180 gms",
      "Milk-15 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms",
      "TOMATO-15 gms",
      "Capsicum-15 gms",
      "Mushroom-15 gms",
      "Spinach-15 gms",
      "Black pepper-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-592",
    "name": "Carrot, Bell Pepper, Broccoli, Cucumber , Beetroot Salad and Egg Salad",
    "cleanSearchName": "Carrot, Bell Pepper, Broccoli, Cucumber , Beetroot Salad and Egg Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Eggetarian",
    "allergens": [
      "egg"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 388,
    "calories": 144,
    "proteinGrams": 11,
    "carbsGrams": 21,
    "fatGrams": 0,
    "fiberGrams": 8,
    "carbonFootprintKgCO2e": 0.7913,
    "ingredients": "Egg-130 gms; carrot-50 gms; Capsicum-60 gms; CUCUMBER-40 gms; BEETROOT-15 gms;Garlic-1 gms; Common salt-15 gms; Black pepper-15 gms;Broccoli-62 gms",
    "parsedIngredients": [
      "Egg-130 gms",
      "carrot-50 gms",
      "Capsicum-60 gms",
      "CUCUMBER-40 gms",
      "BEETROOT-15 gms",
      "Garlic-1 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Broccoli-62 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-593",
    "name": "Roast Chicken Tomato Salad",
    "cleanSearchName": "Roast Chicken Tomato Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "egg"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 327,
    "calories": 192,
    "proteinGrams": 13,
    "carbsGrams": 7,
    "fatGrams": 12,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 1.1139,
    "ingredients": "Lettuce Leaf-50 gms; Tomato-50 gms; Onion-30 gms; Common salt-0.5 gms; Black pepper-0.5 gms; Lemon-10 gms;Parsley-10 gms;Garlic-2 gms; Olive oil-15 gms;Chicken-150 gms",
    "parsedIngredients": [
      "Lettuce Leaf-50 gms",
      "Tomato-50 gms",
      "Onion-30 gms",
      "Common salt-0.5 gms",
      "Black pepper-0.5 gms",
      "Lemon-10 gms",
      "Parsley-10 gms",
      "Garlic-2 gms",
      "Olive oil-15 gms",
      "Chicken-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-594",
    "name": "Egg Rice",
    "cleanSearchName": "Egg Rice",
    "associativity": "5",
    "associativityCategory": "Khichdi, Pulao & Biryani",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Eggetarian",
    "allergens": [
      "egg"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 265,
    "calories": 143,
    "proteinGrams": 5,
    "carbsGrams": 23,
    "fatGrams": 2,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.7705,
    "ingredients": "Egg-2 gms; Onion-30 gms; Capsicum-20 gms; MUSHROOM-10 gms; Peas-10 gms; Garlic-5 gms; Ginger-2 gms; Chillies-2 gms; soya sauce-2 gms; Cooking oil-2 gms; Common salt-15 gms; Black pepper-15 gms; Rice-150 gms",
    "parsedIngredients": [
      "Egg-2 gms",
      "Onion-30 gms",
      "Capsicum-20 gms",
      "MUSHROOM-10 gms",
      "Peas-10 gms",
      "Garlic-5 gms",
      "Ginger-2 gms",
      "Chillies-2 gms",
      "soya sauce-2 gms",
      "Cooking oil-2 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Rice-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-595",
    "name": "Masala omelette",
    "cleanSearchName": "Masala omelette",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Eggetarian",
    "allergens": [
      "egg"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 381,
    "calories": 74,
    "proteinGrams": 5,
    "carbsGrams": 1,
    "fatGrams": 5,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.8948,
    "ingredients": "Egg-130 gms; Onion-90 gms; Tomato-120 gms; Chillies-15 gms; Common salt-7 gms; Coriander leaves-4 gms; Cooking oil-15 gms",
    "parsedIngredients": [
      "Egg-130 gms",
      "Onion-90 gms",
      "Tomato-120 gms",
      "Chillies-15 gms",
      "Common salt-7 gms",
      "Coriander leaves-4 gms",
      "Cooking oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-596",
    "name": "Banana Bread (egg)",
    "cleanSearchName": "Banana Bread (egg)",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Eggetarian",
    "allergens": [
      "egg"
    ],
    "serving": "2 slice",
    "totalWeightGrams": 116,
    "calories": 121,
    "proteinGrams": 6,
    "carbsGrams": 18,
    "fatGrams": 4,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.0837,
    "ingredients": "Banana-75 gms; BUTTER-7 gms; Egg-65; Wheat-30 gms; Common salt-4 gms",
    "parsedIngredients": [
      "Banana-75 gms",
      "BUTTER-7 gms",
      "Egg-65",
      "Wheat-30 gms",
      "Common salt-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-597",
    "name": "Veggies and Egg soup",
    "cleanSearchName": "Veggies and Egg soup",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Eggetarian",
    "allergens": [
      "egg"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 471,
    "calories": 83,
    "proteinGrams": 3,
    "carbsGrams": 16,
    "fatGrams": 0,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.9061,
    "ingredients": "Onion-75 gms;Garlic-7 gms; carrot-75 gms; Zucchini-50 gms; Spinach-50 gms; MUSHROOM-70 gms; Egg-130 gms; Common salt-7 gms; Black pepper-7 gms",
    "parsedIngredients": [
      "Onion-75 gms",
      "Garlic-7 gms",
      "carrot-75 gms",
      "Zucchini-50 gms",
      "Spinach-50 gms",
      "MUSHROOM-70 gms",
      "Egg-130 gms",
      "Common salt-7 gms",
      "Black pepper-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-598",
    "name": "Egg Wheat Noodles",
    "cleanSearchName": "Egg Wheat Noodles",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Eggetarian",
    "allergens": [
      "egg"
    ],
    "serving": "2 medium bowl",
    "totalWeightGrams": 808,
    "calories": 192,
    "proteinGrams": 15,
    "carbsGrams": 31,
    "fatGrams": 1,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 1.27385,
    "ingredients": "Egg-130 gms; carrot-125 gms; Capsicum-250 gms; Peas-250 gms;Garlic-3 gms; soya sauce-15 gms; VINEGAR-15 gms; Common salt-15 gms; Ginger-0.5 gms",
    "parsedIngredients": [
      "Egg-130 gms",
      "carrot-125 gms",
      "Capsicum-250 gms",
      "Peas-250 gms",
      "Garlic-3 gms",
      "soya sauce-15 gms",
      "VINEGAR-15 gms",
      "Common salt-15 gms",
      "Ginger-0.5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-599",
    "name": "Egg curry",
    "cleanSearchName": "Egg curry",
    "associativity": "2,8",
    "associativityCategory": "Combination Curries (Dry & Gravy)",
    "region": [
      "North",
      "South",
      "East"
    ],
    "mealTypes": [
      "Dry Curry",
      "Gravy"
    ],
    "category": "Eggetarian",
    "allergens": [
      "egg"
    ],
    "serving": "2 small bowl",
    "totalWeightGrams": 88,
    "calories": 122,
    "proteinGrams": 10,
    "carbsGrams": 3,
    "fatGrams": 8,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.2291,
    "ingredients": "Egg-30 gms; Onion-10 gms; Tomato-10 gms; Turmeric powder-4 gms; Common salt-15 gms; Cooking oil-15 gms; Coriander leaves-4 gms",
    "parsedIngredients": [
      "Egg-30 gms",
      "Onion-10 gms",
      "Tomato-10 gms",
      "Turmeric powder-4 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms",
      "Coriander leaves-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-600",
    "name": "Egg Sunny Sideup",
    "cleanSearchName": "Egg Sunny Sideup",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Non-veg",
    "allergens": [
      "egg"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 28,
    "calories": 69,
    "proteinGrams": 5,
    "carbsGrams": 0,
    "fatGrams": 5,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.0837,
    "ingredients": "Egg-2 gms; Cooking oil-15 gms; Common salt-7 gms;Black Pepper-4 gms",
    "parsedIngredients": [
      "Egg-2 gms",
      "Cooking oil-15 gms",
      "Common salt-7 gms",
      "Black Pepper-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-601",
    "name": "Egg White Sandwich",
    "cleanSearchName": "Egg White Sandwich",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Eggetarian",
    "allergens": [
      "egg"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 199,
    "calories": 231,
    "proteinGrams": 13,
    "carbsGrams": 30,
    "fatGrams": 7,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.1932,
    "ingredients": "Egg-20gms; Bread-30 gms; Olive oil-15 gms; Black Pepper-7 gms; Common salt-7 gms; Cherry Tomato-100 gms; Onion-37.5 gms; Coriander Leaves-15 gms",
    "parsedIngredients": [
      "Egg-20gms",
      "Bread-30 gms",
      "Olive oil-15 gms",
      "Black Pepper-7 gms",
      "Common salt-7 gms",
      "Cherry Tomato-100 gms",
      "Onion-37.5 gms",
      "Coriander Leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-602",
    "name": "Egg white Boiled",
    "cleanSearchName": "Egg white Boiled",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Eggetarian",
    "allergens": [
      "egg"
    ],
    "serving": "2 medium",
    "totalWeightGrams": 160,
    "calories": 69,
    "proteinGrams": 7,
    "carbsGrams": 0,
    "fatGrams": 5,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.594,
    "ingredients": "Egg-130 gms; VINEGAR-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Egg-130 gms",
      "VINEGAR-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-603",
    "name": "Kale Mushroom Frittata with 2 egg Whites",
    "cleanSearchName": "Kale Mushroom Frittata with 2 egg Whites",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Eggetarian",
    "allergens": [
      "egg"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 477,
    "calories": 128,
    "proteinGrams": 18,
    "carbsGrams": 4,
    "fatGrams": 3,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 1.7089,
    "ingredients": "Egg-100 gms; Kale-67 gms; MUSHROOM-250 gms; CHEESE-15 gms; Olive oil-15 gms; Common salt-15 gms; Black pepper-15 gms",
    "parsedIngredients": [
      "Egg-100 gms",
      "Kale-67 gms",
      "MUSHROOM-250 gms",
      "CHEESE-15 gms",
      "Olive oil-15 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-604",
    "name": "French Toast with 2 Egg Whites and Whole Wheat Bread",
    "cleanSearchName": "French Toast with 2 Egg Whites and Whole Wheat Bread",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Eggetarian",
    "allergens": [
      "egg"
    ],
    "serving": "1 slice",
    "totalWeightGrams": 110,
    "calories": 197,
    "proteinGrams": 11,
    "carbsGrams": 21,
    "fatGrams": 7,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.132,
    "ingredients": "Bread-30 gms; Eggs-65 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Bread-30 gms",
      "Eggs-65 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-605",
    "name": "Egg White Curry",
    "cleanSearchName": "Egg White Curry",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "South",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Eggetarian",
    "allergens": [
      "egg"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 460,
    "calories": 210,
    "proteinGrams": 2,
    "carbsGrams": 14,
    "fatGrams": 5,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.5425,
    "ingredients": "Eggs-3 g; Onion-125 gms; Tomato-90 gms; Ginger powder-15 gms; Garlic powder-15 gms; Cumin seeds-15 gms; Coriander Powder-5 gms; Red chilli Powder-15 gms; Common salt-15 gms; Olive oil-15 gms; Coriander leaves-150 gms",
    "parsedIngredients": [
      "Eggs-3 g",
      "Onion-125 gms",
      "Tomato-90 gms",
      "Ginger powder-15 gms",
      "Garlic powder-15 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-5 gms",
      "Red chilli Powder-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms",
      "Coriander leaves-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-606",
    "name": "Egg White Omelette with mushroom",
    "cleanSearchName": "Egg White Omelette with mushroom",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Eggetarian",
    "allergens": [
      "egg"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 571,
    "calories": 249,
    "proteinGrams": 13,
    "carbsGrams": 11,
    "fatGrams": 15,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 1.8299,
    "ingredients": "Onion-62.5 gms; Common salt-4 gms; Olive oil-15 gms; Coriander leaves-37.5 gms ; Egg-260 gms; MUSHROOM-75 gms; Capsicum-200 gms; Black Pepper-7 gms",
    "parsedIngredients": [
      "Onion-62.5 gms",
      "Common salt-4 gms",
      "Olive oil-15 gms",
      "Coriander leaves-37.5 gms",
      "Egg-260 gms",
      "MUSHROOM-75 gms",
      "Capsicum-200 gms",
      "Black Pepper-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-607",
    "name": "Egg Bhurji with 3 Egg Whites and 1 Yolk",
    "cleanSearchName": "Egg Bhurji with 3 Egg Whites and 1 Yolk",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Eggetarian",
    "allergens": [
      "egg"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 590,
    "calories": 253,
    "proteinGrams": 18,
    "carbsGrams": 11,
    "fatGrams": 13,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.2775,
    "ingredients": "Eggs-195 gms;Onion-125 gms; Tomato-90 gms; Chillies-15 gms; Common salt-15 gms; Coriander leaves-150 gms",
    "parsedIngredients": [
      "Eggs-195 gms",
      "Onion-125 gms",
      "Tomato-90 gms",
      "Chillies-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-608",
    "name": "Egg Fritttata with high fiber",
    "cleanSearchName": "Egg Fritttata with high fiber",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Eggetarian",
    "allergens": [
      "egg"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 761,
    "calories": 530,
    "proteinGrams": 43,
    "carbsGrams": 8,
    "fatGrams": 36,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.7056,
    "ingredients": "Eggs-3 egg; SPINACH-150 gms; Broccoli-350 gms; Capsicum-201 gms; Olive oil-30 gms; Common salt-15 gms; Black pepper-15 gms",
    "parsedIngredients": [
      "Eggs-3 egg",
      "SPINACH-150 gms",
      "Broccoli-350 gms",
      "Capsicum-201 gms",
      "Olive oil-30 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-609",
    "name": "Egg Frittata with high fiber content and low fat",
    "cleanSearchName": "Egg Frittata with high fiber content and low fat",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Eggetarian",
    "allergens": [
      "egg"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 1246,
    "calories": 645,
    "proteinGrams": 45,
    "carbsGrams": 14,
    "fatGrams": 44,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.6516,
    "ingredients": "Eggs-390 gms; Spinach-150 gms; Broccoli-350 gms; Capsicum-201 gms;Onion-125 gms; Olive oil-15 gms; Black pepper-15 gms",
    "parsedIngredients": [
      "Eggs-390 gms",
      "Spinach-150 gms",
      "Broccoli-350 gms",
      "Capsicum-201 gms",
      "Onion-125 gms",
      "Olive oil-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-610",
    "name": "Paneer Tikki",
    "cleanSearchName": "Paneer Tikki",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "3 number",
    "totalWeightGrams": 241,
    "calories": 116,
    "proteinGrams": 3,
    "carbsGrams": 5,
    "fatGrams": 8,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.649,
    "ingredients": "Potato-100 gms;Chillies-15 gms; Coriander leaves-15 gms; Sunflower oil-15 gms; Common salt-15 gms; Garam Masala-15 gms; Red chilli Powder-4 gms; Paneer-50 gms; Ginger-2.5 gms ,Cumin powder-7 gms",
    "parsedIngredients": [
      "Potato-100 gms",
      "Chillies-15 gms",
      "Coriander leaves-15 gms",
      "Sunflower oil-15 gms",
      "Common salt-15 gms",
      "Garam Masala-15 gms",
      "Red chilli Powder-4 gms",
      "Paneer-50 gms",
      "Ginger-2.5 gms ,Cumin powder-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-611",
    "name": "Dahi Paneer Kebab",
    "cleanSearchName": "Dahi Paneer Kebab",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 number",
    "totalWeightGrams": 174,
    "calories": 284,
    "proteinGrams": 10,
    "carbsGrams": 6,
    "fatGrams": 23,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.8319,
    "ingredients": "Paneer-70 gms; Yoghurt-15 gms; Ginger-7 gms;Garlic-7 gms; Lemon-15 gms; Coriander leaves-15 gms; Common salt-15 gms; Olive oil-15 gms; Red chilli Powder-15 gms",
    "parsedIngredients": [
      "Paneer-70 gms",
      "Yoghurt-15 gms",
      "Ginger-7 gms",
      "Garlic-7 gms",
      "Lemon-15 gms",
      "Coriander leaves-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms",
      "Red chilli Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-612",
    "name": "French Toast Baked",
    "cleanSearchName": "French Toast Baked",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 slice",
    "totalWeightGrams": 365,
    "calories": 102,
    "proteinGrams": 6,
    "carbsGrams": 15,
    "fatGrams": 1,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.9185,
    "ingredients": "Bread-25 gms; Egg-130 gms; Milk-15 gms; Common salt-15 gms; carrot-15 gms; Capsicum-15 gms; Onion-15 gms; Tomato-120 gms; Red chilli Powder-15 gms",
    "parsedIngredients": [
      "Bread-25 gms",
      "Egg-130 gms",
      "Milk-15 gms",
      "Common salt-15 gms",
      "carrot-15 gms",
      "Capsicum-15 gms",
      "Onion-15 gms",
      "Tomato-120 gms",
      "Red chilli Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-613",
    "name": "Filter Coffee (Skimmed milk)",
    "cleanSearchName": "Filter Coffee (Skimmed milk)",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy",
      "caffeine"
    ],
    "serving": "1 cup",
    "totalWeightGrams": 257,
    "calories": 70,
    "proteinGrams": 6,
    "carbsGrams": 11,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.8155,
    "ingredients": "Milk-250 gms; Coffee-7 gms",
    "parsedIngredients": [
      "Milk-250 gms",
      "Coffee-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-614",
    "name": "Chikoo Shake",
    "cleanSearchName": "Chikoo Shake",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 482,
    "calories": 234,
    "proteinGrams": 4,
    "carbsGrams": 50,
    "fatGrams": 2,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.672,
    "ingredients": "chikoo-350 gms; Milk-125 gms; Cinnamon-7 gms",
    "parsedIngredients": [
      "chikoo-350 gms",
      "Milk-125 gms",
      "Cinnamon-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-615",
    "name": "Paneer satay",
    "cleanSearchName": "Paneer satay",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "2 number",
    "totalWeightGrams": 292,
    "calories": 126,
    "proteinGrams": 10,
    "carbsGrams": 8,
    "fatGrams": 5,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 1.09105,
    "ingredients": "Paneer-60 gms; Lemon-7 gms; Common salt-15 gms; Yoghurt-150 gms; soya sauce-15 gms; Garlic powder-15 gms; Garam Masala-15 gms; Red chilli Powder-15 gms",
    "parsedIngredients": [
      "Paneer-60 gms",
      "Lemon-7 gms",
      "Common salt-15 gms",
      "Yoghurt-150 gms",
      "soya sauce-15 gms",
      "Garlic powder-15 gms",
      "Garam Masala-15 gms",
      "Red chilli Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-616",
    "name": "PANEER CUTLETS",
    "cleanSearchName": "PANEER CUTLETS",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "2 slice",
    "totalWeightGrams": 876,
    "calories": 547,
    "proteinGrams": 30,
    "carbsGrams": 45,
    "fatGrams": 27,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 2.3425,
    "ingredients": "Paneer-200 gms; Potato-150 gms; Ginger-15 gms; Turmeric powder-4 gms; Sunflower oil-15 gms; Garlic powder-15 gms; Chillies-2 gms; Coriander Powder-5 gms;Onion-125 gms; carrot-50 gms; Peas-250 gms; Cumin seeds-15 gms; Garam Masala-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Paneer-200 gms",
      "Potato-150 gms",
      "Ginger-15 gms",
      "Turmeric powder-4 gms",
      "Sunflower oil-15 gms",
      "Garlic powder-15 gms",
      "Chillies-2 gms",
      "Coriander Powder-5 gms",
      "Onion-125 gms",
      "carrot-50 gms",
      "Peas-250 gms",
      "Cumin seeds-15 gms",
      "Garam Masala-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-617",
    "name": "Chicken Tikka",
    "cleanSearchName": "Chicken Tikka",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "dairy"
    ],
    "serving": "4 number",
    "totalWeightGrams": 1127,
    "calories": 277,
    "proteinGrams": 27,
    "carbsGrams": 6,
    "fatGrams": 18,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 4.9525,
    "ingredients": "Ginger-7 gms; Turmeric powder-15 gms; Common salt-15 gms; Chicken-750 gms; Garlic powder-7 gms; Coriander Powder-24 gms; Yogurt-225 gms; Paprika powder-30 gms; Cumin Powder-24 gms; Lemon-30 gms",
    "parsedIngredients": [
      "Ginger-7 gms",
      "Turmeric powder-15 gms",
      "Common salt-15 gms",
      "Chicken-750 gms",
      "Garlic powder-7 gms",
      "Coriander Powder-24 gms",
      "Yogurt-225 gms",
      "Paprika powder-30 gms",
      "Cumin Powder-24 gms",
      "Lemon-30 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-618",
    "name": "Quinoa Tikki",
    "cleanSearchName": "Quinoa Tikki",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "2 number",
    "totalWeightGrams": 541,
    "calories": 230,
    "proteinGrams": 6,
    "carbsGrams": 32,
    "fatGrams": 10,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.5838,
    "ingredients": "Common salt-7 gms; Coriander leaves-7 gms; POTATO-150 gms;Onion-125 gms;Mint leaves-7 gms; Chillies-15 gms; Cumin seeds-15 gms; Olive oil-15 gms; Quinoa-200 gms",
    "parsedIngredients": [
      "Common salt-7 gms",
      "Coriander leaves-7 gms",
      "POTATO-150 gms",
      "Onion-125 gms",
      "Mint leaves-7 gms",
      "Chillies-15 gms",
      "Cumin seeds-15 gms",
      "Olive oil-15 gms",
      "Quinoa-200 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-619",
    "name": "Paneer Bhurji",
    "cleanSearchName": "Paneer Bhurji",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 229,
    "calories": 192,
    "proteinGrams": 9,
    "carbsGrams": 8,
    "fatGrams": 12,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.6482,
    "ingredients": "Paneer-50 gms; Onion-60 gms;Tomato-70 gms; Turmeric powder-4 gms; Cumin seeds-4 gms; Chillies-4 gms; Mustard oil-15 gms; CORIANDER LEAVES-15 gms; Common salt-7 gms",
    "parsedIngredients": [
      "Paneer-50 gms",
      "Onion-60 gms",
      "Tomato-70 gms",
      "Turmeric powder-4 gms",
      "Cumin seeds-4 gms",
      "Chillies-4 gms",
      "Mustard oil-15 gms",
      "CORIANDER LEAVES-15 gms",
      "Common salt-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-620",
    "name": "MURGH PALAK KORMA KEBAB",
    "cleanSearchName": "MURGH PALAK KORMA KEBAB",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "dairy"
    ],
    "serving": "4 medium",
    "totalWeightGrams": 695,
    "calories": 290,
    "proteinGrams": 30,
    "carbsGrams": 5,
    "fatGrams": 17,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.8475,
    "ingredients": "Chicken-60 gms; Spinach-500 gms; Ginger-30 gms; Chillies-15 gms; Garlic powder-15 gms; Cumin seeds-15 gms; Common salt-15 gms; Curd-15 gms; Garam Masala-15 gms; Cooking oil-15 gms",
    "parsedIngredients": [
      "Chicken-60 gms",
      "Spinach-500 gms",
      "Ginger-30 gms",
      "Chillies-15 gms",
      "Garlic powder-15 gms",
      "Cumin seeds-15 gms",
      "Common salt-15 gms",
      "Curd-15 gms",
      "Garam Masala-15 gms",
      "Cooking oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-621",
    "name": "Paneer Masala",
    "cleanSearchName": "Paneer Masala",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 564,
    "calories": 554,
    "proteinGrams": 31,
    "carbsGrams": 35,
    "fatGrams": 31,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 1.7647,
    "ingredients": "Paneer-100 gms; Turmeric powder-7 gms; Common salt-7 gms; Cooking oil-15 gms; Onion-90 gms; Garlic-20 gms; TOMATO-90 gms; Coriander Powder-5 gms; Garam Masala-15 gms; Red chilli Powder-15 gms;Yoghurt-200 gms",
    "parsedIngredients": [
      "Paneer-100 gms",
      "Turmeric powder-7 gms",
      "Common salt-7 gms",
      "Cooking oil-15 gms",
      "Onion-90 gms",
      "Garlic-20 gms",
      "TOMATO-90 gms",
      "Coriander Powder-5 gms",
      "Garam Masala-15 gms",
      "Red chilli Powder-15 gms",
      "Yoghurt-200 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-622",
    "name": "Papaya shake",
    "cleanSearchName": "Papaya shake",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "2 glass",
    "totalWeightGrams": 557,
    "calories": 68,
    "proteinGrams": 5,
    "carbsGrams": 11,
    "fatGrams": 0,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.9795,
    "ingredients": "Papaya-300 gms; MILK-250 gms; Black Pepper-7 gms",
    "parsedIngredients": [
      "Papaya-300 gms",
      "MILK-250 gms",
      "Black Pepper-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-623",
    "name": "Peas raita",
    "cleanSearchName": "Peas raita",
    "associativity": "4",
    "associativityCategory": "Raitas & Yoghurt Accompaniments",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 small katori",
    "totalWeightGrams": 445,
    "calories": 226,
    "proteinGrams": 13,
    "carbsGrams": 18,
    "fatGrams": 11,
    "fiberGrams": 8,
    "carbonFootprintKgCO2e": 0.8515,
    "ingredients": "Peas -150 gms; Yoghurt-250 gms; Common salt-15 gms; Cumin seeds-15 gms; Red chilli Powder-15 gms",
    "parsedIngredients": [
      "Peas -150 gms",
      "Yoghurt-250 gms",
      "Common salt-15 gms",
      "Cumin seeds-15 gms",
      "Red chilli Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-624",
    "name": "Garlic Cheese Toast",
    "cleanSearchName": "Garlic Cheese Toast",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 195,
    "calories": 230,
    "proteinGrams": 6,
    "carbsGrams": 14,
    "fatGrams": 16,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.707,
    "ingredients": "Bread-25 gms;Garlic-5 gms; BUTTER-15 gms; CHEESE-15 gms; Tomato-120 gms; Common salt-15 gms;",
    "parsedIngredients": [
      "Bread-25 gms",
      "Garlic-5 gms",
      "BUTTER-15 gms",
      "CHEESE-15 gms",
      "Tomato-120 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-625",
    "name": "Banana Shake",
    "cleanSearchName": "Banana Shake",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "2 glass",
    "totalWeightGrams": 518,
    "calories": 184,
    "proteinGrams": 8,
    "carbsGrams": 37,
    "fatGrams": 1,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 1.12,
    "ingredients": "Banana-118 gms;Milk-400 gms",
    "parsedIngredients": [
      "Banana-118 gms",
      "Milk-400 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-626",
    "name": "Lauki Raita",
    "cleanSearchName": "Lauki Raita",
    "associativity": "4",
    "associativityCategory": "Raitas & Yoghurt Accompaniments",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "4 medium katori",
    "totalWeightGrams": 525,
    "calories": 37,
    "proteinGrams": 4,
    "carbsGrams": 4,
    "fatGrams": 1,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.695,
    "ingredients": "Bottle gourd-250 gms; Common salt-15 gms;Yoghurt-200 gms; Cumin seeds-15 gms; Chat Masala-15 gms; Black pepper-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Bottle gourd-250 gms",
      "Common salt-15 gms",
      "Yoghurt-200 gms",
      "Cumin seeds-15 gms",
      "Chat Masala-15 gms",
      "Black pepper-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-627",
    "name": "Egg Sandwich",
    "cleanSearchName": "Egg Sandwich",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Eggetarian",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 212,
    "calories": 313,
    "proteinGrams": 16,
    "carbsGrams": 27,
    "fatGrams": 16,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.3827,
    "ingredients": "Egg-2 number; bread-50 gms; Common salt-7 gms; Tomato-120 gms; CUCUMBER-5 gms; Black pepper-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Egg-2 number",
      "bread-50 gms",
      "Common salt-7 gms",
      "Tomato-120 gms",
      "CUCUMBER-5 gms",
      "Black pepper-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-628",
    "name": "Beetroot Raita",
    "cleanSearchName": "Beetroot Raita",
    "associativity": "4",
    "associativityCategory": "Raitas & Yoghurt Accompaniments",
    "region": [
      "North",
      "South"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 350,
    "calories": 160,
    "proteinGrams": 8,
    "carbsGrams": 9,
    "fatGrams": 10,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.6325,
    "ingredients": "Yoghurt-250 gms; Beet root-70 gms;Mint leaves-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Yoghurt-250 gms",
      "Beet root-70 gms",
      "Mint leaves-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-629",
    "name": "Cucumber Raita",
    "cleanSearchName": "Cucumber Raita",
    "associativity": "4",
    "associativityCategory": "Raitas & Yoghurt Accompaniments",
    "region": [
      "North",
      "South"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 489,
    "calories": 173,
    "proteinGrams": 8,
    "carbsGrams": 10,
    "fatGrams": 11,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.7399,
    "ingredients": "Yoghurt-250 gms; Cucumber-200 gms; Cumin seeds-15 gms;Common salt -24 gms",
    "parsedIngredients": [
      "Yoghurt-250 gms",
      "Cucumber-200 gms",
      "Cumin seeds-15 gms",
      "Common salt -24 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-630",
    "name": "Almond and Raisins Raita",
    "cleanSearchName": "Almond and Raisins Raita",
    "associativity": "4",
    "associativityCategory": "Raitas & Yoghurt Accompaniments",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 295,
    "calories": 168,
    "proteinGrams": 8,
    "carbsGrams": 9,
    "fatGrams": 11,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.685,
    "ingredients": "Yoghurt-250 gms; Almond-5 number; RAISINS-7 number;  Coriander leaves-15 gms; Common salt-15 gms; Cumin seeds-15 gms",
    "parsedIngredients": [
      "Yoghurt-250 gms",
      "Almond-5 number",
      "RAISINS-7 number",
      "Coriander leaves-15 gms",
      "Common salt-15 gms",
      "Cumin seeds-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-631",
    "name": "French Toast",
    "cleanSearchName": "French Toast",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 slice",
    "totalWeightGrams": 107,
    "calories": 180,
    "proteinGrams": 7,
    "carbsGrams": 20,
    "fatGrams": 8,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.4303,
    "ingredients": "Bread-25 gms; Egg-60 gms; milk-15 gms; BUTTER-7 gms",
    "parsedIngredients": [
      "Bread-25 gms",
      "Egg-60 gms",
      "milk-15 gms",
      "BUTTER-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-632",
    "name": "Mango Shake",
    "cleanSearchName": "Mango Shake",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "2 glass",
    "totalWeightGrams": 1200,
    "calories": 233,
    "proteinGrams": 10,
    "carbsGrams": 46,
    "fatGrams": 2,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 1.995,
    "ingredients": "MANGO-700 gms; Milk-500 gms",
    "parsedIngredients": [
      "MANGO-700 gms",
      "Milk-500 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-633",
    "name": "Strawberry Shake",
    "cleanSearchName": "Strawberry Shake",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 350,
    "calories": 79,
    "proteinGrams": 7,
    "carbsGrams": 13,
    "fatGrams": 0,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.785,
    "ingredients": "strawberry-100 gms; Milk-250 gms",
    "parsedIngredients": [
      "strawberry-100 gms",
      "Milk-250 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-634",
    "name": "Aloo Raita",
    "cleanSearchName": "Aloo Raita",
    "associativity": "4",
    "associativityCategory": "Raitas & Yoghurt Accompaniments",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 270,
    "calories": 534,
    "proteinGrams": 55,
    "carbsGrams": 73,
    "fatGrams": 6,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.435,
    "ingredients": "POTATO-150 gms; Yoghurt-30 gms; Cumin seeds-15 gms; Red chilli Powder-15 gms; Black pepper-15 gms; Coriander Powder-15 gms; Ginger powder-15 gms; Chillies-15 gms",
    "parsedIngredients": [
      "POTATO-150 gms",
      "Yoghurt-30 gms",
      "Cumin seeds-15 gms",
      "Red chilli Powder-15 gms",
      "Black pepper-15 gms",
      "Coriander Powder-15 gms",
      "Ginger powder-15 gms",
      "Chillies-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-635",
    "name": "Lettuce Wrap (paneer)",
    "cleanSearchName": "Lettuce Wrap Paneer",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 number",
    "totalWeightGrams": 341,
    "calories": 165,
    "proteinGrams": 7,
    "carbsGrams": 8,
    "fatGrams": 10,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 1.5845,
    "ingredients": "Paneer-150 gms; Onion-15 gms; Tomato-15 gms; Cucumber-15 gms; Carrot-15 gms; Capsicum-15 gms; Chillies-10 gms; Coriander leaves-15 gms; Lemon-15 gms; Black pepper-4 gms; Cooking Oil-15 gms; Common salt-15 gms; Cumin seeds-15 gms; Turmeric powder-7 gms; Lettuce Leaf-20 gms",
    "parsedIngredients": [
      "Paneer-150 gms",
      "Onion-15 gms",
      "Tomato-15 gms",
      "Cucumber-15 gms",
      "Carrot-15 gms",
      "Capsicum-15 gms",
      "Chillies-10 gms",
      "Coriander leaves-15 gms",
      "Lemon-15 gms",
      "Black pepper-4 gms",
      "Cooking Oil-15 gms",
      "Common salt-15 gms",
      "Cumin seeds-15 gms",
      "Turmeric powder-7 gms",
      "Lettuce Leaf-20 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-636",
    "name": "Paneer Pakora",
    "cleanSearchName": "Paneer Pakora",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "3 number",
    "totalWeightGrams": 640,
    "calories": 451,
    "proteinGrams": 27,
    "carbsGrams": 37,
    "fatGrams": 17,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 1.804,
    "ingredients": "Turmeric powder-15 gms; Cumin seeds-15 gms; Common salt-15 gms; Paneer-50 gms; Besan-250 gms; Red chilli Powder-250 gms; Coriander Powder-15 gms; Garam Masala-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Turmeric powder-15 gms",
      "Cumin seeds-15 gms",
      "Common salt-15 gms",
      "Paneer-50 gms",
      "Besan-250 gms",
      "Red chilli Powder-250 gms",
      "Coriander Powder-15 gms",
      "Garam Masala-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-637",
    "name": "Paneer & Salsa Tortilla Wrap",
    "cleanSearchName": "Paneer & Salsa Tortilla Wrap",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 number",
    "totalWeightGrams": 289,
    "calories": 247,
    "proteinGrams": 13,
    "carbsGrams": 18,
    "fatGrams": 12,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.6725,
    "ingredients": "Paneer-50 gms; Tomato-62 gms; Capsicum-62 gms; Onion-62 gms; Coriander leaves-15 gms;Black Pepper-4 gms; Common salt-4 gms; Soyabean oil-15 gms; Chat Masala-15 gms",
    "parsedIngredients": [
      "Paneer-50 gms",
      "Tomato-62 gms",
      "Capsicum-62 gms",
      "Onion-62 gms",
      "Coriander leaves-15 gms",
      "Black Pepper-4 gms",
      "Common salt-4 gms",
      "Soyabean oil-15 gms",
      "Chat Masala-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-638",
    "name": "Rawa Dosa",
    "cleanSearchName": "Rawa Dosa",
    "associativity": "14",
    "associativityCategory": "South Indian Dosas, Idlis & Uttapams",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 287,
    "calories": 642,
    "proteinGrams": 18,
    "carbsGrams": 95,
    "fatGrams": 19,
    "fiberGrams": 19,
    "carbonFootprintKgCO2e": 0.3695,
    "ingredients": "Semolina-125 gms; Yoghurt-15 gms; Black pepper-7 gms; Curry leaves-5 gms; Coriander leaves-30 gms; Onion-60 gms; Sunflower oil-15 gms; ; Cumin seeds-15 gms; Rice Flour-15 gms",
    "parsedIngredients": [
      "Semolina-125 gms",
      "Yoghurt-15 gms",
      "Black pepper-7 gms",
      "Curry leaves-5 gms",
      "Coriander leaves-30 gms",
      "Onion-60 gms",
      "Sunflower oil-15 gms",
      "Cumin seeds-15 gms",
      "Rice Flour-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-639",
    "name": "Malai Tikka",
    "cleanSearchName": "Malai Tikka",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 635,
    "calories": 514,
    "proteinGrams": 37,
    "carbsGrams": 26,
    "fatGrams": 29,
    "fiberGrams": 19,
    "carbonFootprintKgCO2e": 1.9745,
    "ingredients": "Cauliflower-125 gms; Mushroom-125 gms; Paneer-125 gms; Yoghurt-30 gms; Cashew-5 gms; Ginger-20 gms;Garlic-5 gms; Lemon-15 gms; Cumin seeds-15 gms; Coriander seeds-15 gms; Turmeric powder-15 gms;  Coriander leaves-125 gms; Sunflower oil-15 gms",
    "parsedIngredients": [
      "Cauliflower-125 gms",
      "Mushroom-125 gms",
      "Paneer-125 gms",
      "Yoghurt-30 gms",
      "Cashew-5 gms",
      "Ginger-20 gms",
      "Garlic-5 gms",
      "Lemon-15 gms",
      "Cumin seeds-15 gms",
      "Coriander seeds-15 gms",
      "Turmeric powder-15 gms",
      "Coriander leaves-125 gms",
      "Sunflower oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-640",
    "name": "Hung Curd Salad",
    "cleanSearchName": "Hung Curd Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 955,
    "calories": 409,
    "proteinGrams": 23,
    "carbsGrams": 56,
    "fatGrams": 8,
    "fiberGrams": 18,
    "carbonFootprintKgCO2e": 0.968,
    "ingredients": "Yoghurt-125 gms; Cucumber-200 gms; Tomato-120 gms; Onion-125 gms; Capsicum-125 gms; Lettuce Leaf-10 gms; carrot-125 gms;  Parsley-125 gms",
    "parsedIngredients": [
      "Yoghurt-125 gms",
      "Cucumber-200 gms",
      "Tomato-120 gms",
      "Onion-125 gms",
      "Capsicum-125 gms",
      "Lettuce Leaf-10 gms",
      "carrot-125 gms",
      "Parsley-125 gms"
    ],
    "isDuplicateName": true,
    "duplicateNote": "Alternative portion or variation for \"Hung Curd Salad\" (1 small bowl, 955g)"
  },
  {
    "id": "food-641",
    "name": "Mint raita",
    "cleanSearchName": "Mint raita",
    "associativity": "4",
    "associativityCategory": "Raitas & Yoghurt Accompaniments",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "4 small katori",
    "totalWeightGrams": 275,
    "calories": 45,
    "proteinGrams": 7,
    "carbsGrams": 5,
    "fatGrams": 1,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.261,
    "ingredients": "Mint leaves-15 gms; Yoghurt-15 gms;Onion-125 gms; Tomato-90 gms; Cumin seeds-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Mint leaves-15 gms",
      "Yoghurt-15 gms",
      "Onion-125 gms",
      "Tomato-90 gms",
      "Cumin seeds-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-642",
    "name": "Lauki raita (lactose free)",
    "cleanSearchName": "Lauki raita (lactose free)",
    "associativity": "4",
    "associativityCategory": "Raitas & Yoghurt Accompaniments",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "4 small bowl",
    "totalWeightGrams": 484,
    "calories": 47,
    "proteinGrams": 7,
    "carbsGrams": 5,
    "fatGrams": 1,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.643,
    "ingredients": "Bottle gourd-250 gms; Common salt-15 gms;Yoghurt-200 gms; Cumin seeds-15 gms; Chaat Masala-4 gms",
    "parsedIngredients": [
      "Bottle gourd-250 gms",
      "Common salt-15 gms",
      "Yoghurt-200 gms",
      "Cumin seeds-15 gms",
      "Chaat Masala-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-643",
    "name": "Rice Paneer Sizzler",
    "cleanSearchName": "Rice Paneer Sizzler",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "4 small bowl",
    "totalWeightGrams": 444,
    "calories": 134,
    "proteinGrams": 5,
    "carbsGrams": 14,
    "fatGrams": 6,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 1.7064,
    "ingredients": "Paneer-150 gms; Ginger-7 gms; Garlic-7 gms; Cooking oil-15 gms; Capsicum-30 gms; Onion-150 gms;Mint leaves-15 gms; Lettuce Leaf-20 gms; Rice-50 gms",
    "parsedIngredients": [
      "Paneer-150 gms",
      "Ginger-7 gms",
      "Garlic-7 gms",
      "Cooking oil-15 gms",
      "Capsicum-30 gms",
      "Onion-150 gms",
      "Mint leaves-15 gms",
      "Lettuce Leaf-20 gms",
      "Rice-50 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-644",
    "name": "PANEER SALAD",
    "cleanSearchName": "PANEER SALAD",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 284,
    "calories": 332,
    "proteinGrams": 23,
    "carbsGrams": 25,
    "fatGrams": 15,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.9892,
    "ingredients": "Paneer-100 gms; Cucumber-62 gms; Onion-62 gms; Coriander leaves-15 gms;  Lemon-15 gms; Black pepper-15 gms; Chat Masala-15 gms",
    "parsedIngredients": [
      "Paneer-100 gms",
      "Cucumber-62 gms",
      "Onion-62 gms",
      "Coriander leaves-15 gms",
      "Lemon-15 gms",
      "Black pepper-15 gms",
      "Chat Masala-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-645",
    "name": "Suji Cheela",
    "cleanSearchName": "Suji Cheela",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West",
      "East"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 310,
    "calories": 239,
    "proteinGrams": 8,
    "carbsGrams": 37,
    "fatGrams": 4,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 0.4573,
    "ingredients": "Semolina-62 gms; Yoghurt-30 gms; Onion-30 gms; Tomato-120 gms; Capsicum-15 gms; Chillies-4 gms; MUSTARD SEEDS-4 gms; Coriander leaves-15 gms; Cooking oil-7 gms; Common salt-4 gms; Cumin seeds-4 gms; Red chilli Powder-15 gms",
    "parsedIngredients": [
      "Semolina-62 gms",
      "Yoghurt-30 gms",
      "Onion-30 gms",
      "Tomato-120 gms",
      "Capsicum-15 gms",
      "Chillies-4 gms",
      "MUSTARD SEEDS-4 gms",
      "Coriander leaves-15 gms",
      "Cooking oil-7 gms",
      "Common salt-4 gms",
      "Cumin seeds-4 gms",
      "Red chilli Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-646",
    "name": "KADHI (NO PAKORA)",
    "cleanSearchName": "KADHI (NO PAKORA)",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 958,
    "calories": 551,
    "proteinGrams": 27,
    "carbsGrams": 48,
    "fatGrams": 26,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 1.8233,
    "ingredients": "Yoghurt-500 gms; Turmeric powder-4 gms; Common salt-7 gms; Cumin seeds-7 gms; MUSTARD SEEDS-7 gms; Chillies-40 gms; Ginger-7 gms; Garlic-7 gms; Sunflower oil-7 gms; Cumin seeds-7 gms; Curry leaves-4 number; Besan-350 gms; Red chilli Powder-15 gms",
    "parsedIngredients": [
      "Yoghurt-500 gms",
      "Turmeric powder-4 gms",
      "Common salt-7 gms",
      "Cumin seeds-7 gms",
      "MUSTARD SEEDS-7 gms",
      "Chillies-40 gms",
      "Ginger-7 gms",
      "Garlic-7 gms",
      "Sunflower oil-7 gms",
      "Cumin seeds-7 gms",
      "Curry leaves-4 number",
      "Besan-350 gms",
      "Red chilli Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-647",
    "name": "PANEER ROTI",
    "cleanSearchName": "PANEER ROTI",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 number",
    "totalWeightGrams": 142,
    "calories": 262,
    "proteinGrams": 13,
    "carbsGrams": 38,
    "fatGrams": 6,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 0.4385,
    "ingredients": "Atta-45 gms; Paneer-30 gms; Onion-15 gms; Ginger-7 gms; Coriander leaves-15 gms; Cumin seeds-15 gms; Garam Masala-15 gms;",
    "parsedIngredients": [
      "Atta-45 gms",
      "Paneer-30 gms",
      "Onion-15 gms",
      "Ginger-7 gms",
      "Coriander leaves-15 gms",
      "Cumin seeds-15 gms",
      "Garam Masala-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-648",
    "name": "Paneer Sandwich",
    "cleanSearchName": "Paneer Sandwich",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "2 medium",
    "totalWeightGrams": 626,
    "calories": 334,
    "proteinGrams": 15,
    "carbsGrams": 28,
    "fatGrams": 18,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 2.7225,
    "ingredients": "Cucumber-75 gms; Tomato-75 gms; Onion-75 gms; Black pepper-7 gms; Red chilli Powder-7 gms; Common salt-15 gms; Bread-100 gms; Paneer-250 gms; Chat Masala-7 gms; BUTTER-15 gms",
    "parsedIngredients": [
      "Cucumber-75 gms",
      "Tomato-75 gms",
      "Onion-75 gms",
      "Black pepper-7 gms",
      "Red chilli Powder-7 gms",
      "Common salt-15 gms",
      "Bread-100 gms",
      "Paneer-250 gms",
      "Chat Masala-7 gms",
      "BUTTER-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-649",
    "name": "Paneer Tikka",
    "cleanSearchName": "Paneer Tikka",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "3 number",
    "totalWeightGrams": 471,
    "calories": 152,
    "proteinGrams": 7,
    "carbsGrams": 7,
    "fatGrams": 10,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 1.4053,
    "ingredients": "Paneer-100 gms; Yoghurt-15 gms; Ginger-15 gms;Garlic-15 gms; Turmeric powder-4 gms; Lemon-7 gms; Common salt-15 gms; Mustard oil-15 gms; Capsicum-225 gms; Tomato-1 small; Onion-60 gms",
    "parsedIngredients": [
      "Paneer-100 gms",
      "Yoghurt-15 gms",
      "Ginger-15 gms",
      "Garlic-15 gms",
      "Turmeric powder-4 gms",
      "Lemon-7 gms",
      "Common salt-15 gms",
      "Mustard oil-15 gms",
      "Capsicum-225 gms",
      "Tomato-1 small",
      "Onion-60 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-650",
    "name": "Yogurt Kebab",
    "cleanSearchName": "Yogurt Kebab",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "3 number",
    "totalWeightGrams": 1190,
    "calories": 281,
    "proteinGrams": 23,
    "carbsGrams": 18,
    "fatGrams": 12,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 2.5625,
    "ingredients": "Common salt-15 gms; Curd-350 gms;Paneer-250 gms; POTATO-250 gms; Coriander leaves-250 gms;Mint leaves-15 gms; Ginger-15 gms; Chat Masala-15 gms; Cumin seeds-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Common salt-15 gms",
      "Curd-350 gms",
      "Paneer-250 gms",
      "POTATO-250 gms",
      "Coriander leaves-250 gms",
      "Mint leaves-15 gms",
      "Ginger-15 gms",
      "Chat Masala-15 gms",
      "Cumin seeds-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-651",
    "name": "Saute Paneer",
    "cleanSearchName": "Saute Paneer",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 236,
    "calories": 282,
    "proteinGrams": 15,
    "carbsGrams": 10,
    "fatGrams": 19,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 1.3859,
    "ingredients": "Paneer -150 gms; Cooking oil-7 gms; Onion-15 gms; Capsicum-15 gms; Capsicum, red-15 gms; Zucchini-15 gms; Common salt-4 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Paneer -150 gms",
      "Cooking oil-7 gms",
      "Onion-15 gms",
      "Capsicum-15 gms",
      "Capsicum, red-15 gms",
      "Zucchini-15 gms",
      "Common salt-4 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-652",
    "name": "Makhana Milk",
    "cleanSearchName": "Makhana Milk",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 530,
    "calories": 701,
    "proteinGrams": 18,
    "carbsGrams": 89,
    "fatGrams": 10,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 1.1025,
    "ingredients": "Makhana-250 gms; Milk-250 gms; Brown sugar-15 gms; cardamom-15 gms",
    "parsedIngredients": [
      "Makhana-250 gms",
      "Milk-250 gms",
      "Brown sugar-15 gms",
      "cardamom-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-653",
    "name": "Milk Tea",
    "cleanSearchName": "Milk Tea",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "2 cup",
    "totalWeightGrams": 280,
    "calories": 45,
    "proteinGrams": 5,
    "carbsGrams": 7,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.775,
    "ingredients": "Tea-15 gms; Ginger-15 gms; MILK-250 gms",
    "parsedIngredients": [
      "Tea-15 gms",
      "Ginger-15 gms",
      "MILK-250 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-654",
    "name": "Chicken Biryani",
    "cleanSearchName": "Chicken Biryani",
    "associativity": "5",
    "associativityCategory": "Khichdi, Pulao & Biryani",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 441,
    "calories": 763,
    "proteinGrams": 25,
    "carbsGrams": 37,
    "fatGrams": 35,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 1.66035,
    "ingredients": "Chicken-100 gms; Yoghurt-30 gms; Common salt-15 gms; Cardamom-2 gms; Cooking oil-15 gms; Onion-30 gms; Cumin seeds-7 gms; Cinnamon-5 gms; Cloves-10 gms; Nutmeg-15 gms;Mint leaves-2 gms; Milk-15 gms; Rice-150 gms; Red chilli Powder-15 gms; Ginger powder-15 gms; Garlic powder-15 gms",
    "parsedIngredients": [
      "Chicken-100 gms",
      "Yoghurt-30 gms",
      "Common salt-15 gms",
      "Cardamom-2 gms",
      "Cooking oil-15 gms",
      "Onion-30 gms",
      "Cumin seeds-7 gms",
      "Cinnamon-5 gms",
      "Cloves-10 gms",
      "Nutmeg-15 gms",
      "Mint leaves-2 gms",
      "Milk-15 gms",
      "Rice-150 gms",
      "Red chilli Powder-15 gms",
      "Ginger powder-15 gms",
      "Garlic powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-655",
    "name": "CHEESY CHICKEN PATTIES (Tikki)",
    "cleanSearchName": "CHEESY CHICKEN PATTIES (Tikki)",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 226,
    "calories": 491,
    "proteinGrams": 30,
    "carbsGrams": 7,
    "fatGrams": 37,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 2.0701,
    "ingredients": "Chicken-60 gms; CHEESE-62 gms; Egg-60 gms; Onion-15 gms; Common salt-7 gms; Black pepper-7 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Chicken-60 gms",
      "CHEESE-62 gms",
      "Egg-60 gms",
      "Onion-15 gms",
      "Common salt-7 gms",
      "Black pepper-7 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-656",
    "name": "ACHARI TIKKA (PANEER)",
    "cleanSearchName": "ACHARI TIKKA Paneer",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 401,
    "calories": 1186,
    "proteinGrams": 68,
    "carbsGrams": 68,
    "fatGrams": 73,
    "fiberGrams": 13,
    "carbonFootprintKgCO2e": 2.714,
    "ingredients": "Paneer-250 gms; Common salt-15 gms ; Fenugreek seeds-15 gms; Yoghurt-1 gms; Ginger powder-15 gms; Garlic powder-15 gms; Red chilli Powder-15 gms; Turmeric powder-15 gms; Coriander Powder-15 gms; Cumin seeds-15 gms; Garam Masala-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Paneer-250 gms",
      "Common salt-15 gms",
      "Fenugreek seeds-15 gms",
      "Yoghurt-1 gms",
      "Ginger powder-15 gms",
      "Garlic powder-15 gms",
      "Red chilli Powder-15 gms",
      "Turmeric powder-15 gms",
      "Coriander Powder-15 gms",
      "Cumin seeds-15 gms",
      "Garam Masala-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-657",
    "name": "Paneer Wrap In Soya Palak Roti",
    "cleanSearchName": "Paneer Wrap In Soya Palak Roti",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner",
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 180,
    "calories": 210,
    "proteinGrams": 11,
    "carbsGrams": 28,
    "fatGrams": 4,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.3707,
    "ingredients": "Spinach-30 gms; Atta-30 gms; Cumin seeds-4 gms; Paneer-30 gms; Onion-15 gms; Ginger-4 gms; Common salt-7 gms; Capsicum-15 gms; carrot-15 gms; CUCUMBER-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Spinach-30 gms",
      "Atta-30 gms",
      "Cumin seeds-4 gms",
      "Paneer-30 gms",
      "Onion-15 gms",
      "Ginger-4 gms",
      "Common salt-7 gms",
      "Capsicum-15 gms",
      "carrot-15 gms",
      "CUCUMBER-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-658",
    "name": "Dahi Vada",
    "cleanSearchName": "Dahi Vada",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "2 medium",
    "totalWeightGrams": 251,
    "calories": 179,
    "proteinGrams": 8,
    "carbsGrams": 17,
    "fatGrams": 9,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.5007,
    "ingredients": "Gram dal-60 gms; Cumin seeds-4 gms; Common salt-7 gms; Cooking oil-15 gms; Yoghurt-150 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Gram dal-60 gms",
      "Cumin seeds-4 gms",
      "Common salt-7 gms",
      "Cooking oil-15 gms",
      "Yoghurt-150 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-659",
    "name": "Curd Rice",
    "cleanSearchName": "Curd Rice",
    "associativity": "3",
    "associativityCategory": "Rice & Millet Dishes",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 286,
    "calories": 483,
    "proteinGrams": 12,
    "carbsGrams": 84,
    "fatGrams": 9,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.7827,
    "ingredients": "Rice-100 gms; Yoghurt-100 gms; Milk-30 gms; carrot-10 gms; CUCUMBER-10 gms; Coriander leaves-5 gms; Chillies-5 gms; Ginger-2 gms; Curry leaves-2 gms; Mustard seeds-2 gms; Gram dal-2 gms; Asafoetida-1 gms; Cooking oil-2 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Rice-100 gms",
      "Yoghurt-100 gms",
      "Milk-30 gms",
      "carrot-10 gms",
      "CUCUMBER-10 gms",
      "Coriander leaves-5 gms",
      "Chillies-5 gms",
      "Ginger-2 gms",
      "Curry leaves-2 gms",
      "Mustard seeds-2 gms",
      "Gram dal-2 gms",
      "Asafoetida-1 gms",
      "Cooking oil-2 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-660",
    "name": "Matar Paneer",
    "cleanSearchName": "Matar Paneer",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 595,
    "calories": 631,
    "proteinGrams": 33,
    "carbsGrams": 42,
    "fatGrams": 35,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 1.689,
    "ingredients": "Paneer-125 gms; Peas-150 gms; Tomato-120 gms; Onion-75 gms; Garlic-2 gms; Ginger-4 gms; Chillies-3 gms; Yoghurt-75 gms; Cumin seeds-1.5 gms; Turmeric powder-2 gms; Cooking oil-15 gms; Common salt-15 gms; Coriander leaves-4 gms",
    "parsedIngredients": [
      "Paneer-125 gms",
      "Peas-150 gms",
      "Tomato-120 gms",
      "Onion-75 gms",
      "Garlic-2 gms",
      "Ginger-4 gms",
      "Chillies-3 gms",
      "Yoghurt-75 gms",
      "Cumin seeds-1.5 gms",
      "Turmeric powder-2 gms",
      "Cooking oil-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-661",
    "name": "Palak Paneer",
    "cleanSearchName": "Palak Paneer",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 990,
    "calories": 893,
    "proteinGrams": 52,
    "carbsGrams": 57,
    "fatGrams": 49,
    "fiberGrams": 20,
    "carbonFootprintKgCO2e": 2.2817,
    "ingredients": "Paneer-200 gms; Spinach-400 gms; Onion-150 gms; Tomato-200 gms; Garlic-1 gms; Chillies-2 gms; Cumin seeds-1.5 gms; Turmeric powder-2 gms; Cooking oil-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Paneer-200 gms",
      "Spinach-400 gms",
      "Onion-150 gms",
      "Tomato-200 gms",
      "Garlic-1 gms",
      "Chillies-2 gms",
      "Cumin seeds-1.5 gms",
      "Turmeric powder-2 gms",
      "Cooking oil-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-662",
    "name": "Palak Mushroom",
    "cleanSearchName": "Palak Mushroom",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 562,
    "calories": 811,
    "proteinGrams": 47,
    "carbsGrams": 44,
    "fatGrams": 48,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 2.4288,
    "ingredients": "Paneer-200 gms; MUSHROOM-200 gms; Onion-10 gms; Tomato-120 gms)-2 gms;Garlic-1 slice; Chillies 2 gms; Cumin seeds-1.5 gms; Turmeric powder-2 gms; Cooking oil-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Paneer-200 gms",
      "MUSHROOM-200 gms",
      "Onion-10 gms",
      "Tomato-120 gms)-2 gms",
      "Garlic-1 slice",
      "Chillies 2 gms",
      "Cumin seeds-1.5 gms",
      "Turmeric powder-2 gms",
      "Cooking oil-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-663",
    "name": "Pineapple Raita",
    "cleanSearchName": "Pineapple Raita",
    "associativity": "4",
    "associativityCategory": "Raitas & Yoghurt Accompaniments",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "10 small katori",
    "totalWeightGrams": 2065,
    "calories": 22,
    "proteinGrams": 1,
    "carbsGrams": 3,
    "fatGrams": 1,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 1.891,
    "ingredients": "Yoghurt-250 gms; Coriander leaves-10 gms; Mint leaves-5 gms; Pineapple-1800 gms",
    "parsedIngredients": [
      "Yoghurt-250 gms",
      "Coriander leaves-10 gms",
      "Mint leaves-5 gms",
      "Pineapple-1800 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-664",
    "name": "Strawberry Yogurt",
    "cleanSearchName": "Strawberry Yogurt",
    "associativity": "4",
    "associativityCategory": "Raitas & Yoghurt Accompaniments",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 small katori",
    "totalWeightGrams": 375,
    "calories": 144,
    "proteinGrams": 7,
    "carbsGrams": 12,
    "fatGrams": 8,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.73125,
    "ingredients": "Yoghurt-250 gms; strawberry-125 gms",
    "parsedIngredients": [
      "Yoghurt-250 gms",
      "strawberry-125 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-665",
    "name": "Vegetable Raita",
    "cleanSearchName": "Vegetable Raita",
    "associativity": "4",
    "associativityCategory": "Raitas & Yoghurt Accompaniments",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 small katori",
    "totalWeightGrams": 510,
    "calories": 207,
    "proteinGrams": 9,
    "carbsGrams": 23,
    "fatGrams": 8,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.7115,
    "ingredients": "Yoghurt-250 gms; CUCUMBER-80 gms; carrot-80 gms; Onion-50 gms; Coriander leaves-30 gms;Mint leaves-5 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Yoghurt-250 gms",
      "CUCUMBER-80 gms",
      "carrot-80 gms",
      "Onion-50 gms",
      "Coriander leaves-30 gms",
      "Mint leaves-5 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-666",
    "name": "CHICKEN SALAD",
    "cleanSearchName": "CHICKEN SALAD",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Non-veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 555,
    "calories": 705,
    "proteinGrams": 88,
    "carbsGrams": 7,
    "fatGrams": 36,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 1.6615,
    "ingredients": "Common salt-15 gms; Chicken-250 gms; Celery-150 gms; Onion-125 gms; Black pepper-15 gms",
    "parsedIngredients": [
      "Common salt-15 gms",
      "Chicken-250 gms",
      "Celery-150 gms",
      "Onion-125 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-667",
    "name": "BROCCOLI SOUP",
    "cleanSearchName": "BROCCOLI SOUP",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 310,
    "calories": 297,
    "proteinGrams": 12,
    "carbsGrams": 28,
    "fatGrams": 16,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.7285,
    "ingredients": "Garlic-15 gms; Onion-30 gms; Milk-250 gms; Common salt-15 gms; Broccoli-50 g",
    "parsedIngredients": [
      "Garlic-15 gms",
      "Onion-30 gms",
      "Milk-250 gms",
      "Common salt-15 gms",
      "Broccoli-50 g"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-668",
    "name": "Smoothie (In Curd)",
    "cleanSearchName": "Smoothie (In Curd)",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 439,
    "calories": 218,
    "proteinGrams": 7,
    "carbsGrams": 14,
    "fatGrams": 15,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.50965,
    "ingredients": "Papaya-150 gms; Apple-62 gms; ORANGE-80 gms; Sunflower seeds-15 gms; Yoghurt-125 gms; Chia Seeds-7 gms; Almond-5 pieces",
    "parsedIngredients": [
      "Papaya-150 gms",
      "Apple-62 gms",
      "ORANGE-80 gms",
      "Sunflower seeds-15 gms",
      "Yoghurt-125 gms",
      "Chia Seeds-7 gms",
      "Almond-5 pieces"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-669",
    "name": "Masala Tea",
    "cleanSearchName": "Masala Tea",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "2 cup",
    "totalWeightGrams": 270,
    "calories": 40,
    "proteinGrams": 4,
    "carbsGrams": 6,
    "fatGrams": 0,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.755,
    "ingredients": "Milk-250 gms; Ginger-5 gms; Tea-15 gms",
    "parsedIngredients": [
      "Milk-250 gms",
      "Ginger-5 gms",
      "Tea-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-670",
    "name": "Tea",
    "cleanSearchName": "Tea",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 cup",
    "totalWeightGrams": 165,
    "calories": 15,
    "proteinGrams": 1,
    "carbsGrams": 3,
    "fatGrams": 0,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.465,
    "ingredients": "Tea-15 gms; Milk-150 gms",
    "parsedIngredients": [
      "Tea-15 gms",
      "Milk-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-671",
    "name": "Haldi Milk",
    "cleanSearchName": "Haldi Milk",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 132,
    "calories": 42,
    "proteinGrams": 3,
    "carbsGrams": 7,
    "fatGrams": 0,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.3745,
    "ingredients": "Turmeric powder-7 gms; Milk-125 gms",
    "parsedIngredients": [
      "Turmeric powder-7 gms",
      "Milk-125 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-672",
    "name": "Coffee Double Expresso (Skimmed milk)",
    "cleanSearchName": "Coffee Double Expresso (Skimmed milk)",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy",
      "caffeine"
    ],
    "serving": "1 cup",
    "totalWeightGrams": 132,
    "calories": 40,
    "proteinGrams": 3,
    "carbsGrams": 6,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.4655,
    "ingredients": "Milk-125 gms; coffee-7 gms",
    "parsedIngredients": [
      "Milk-125 gms",
      "coffee-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-673",
    "name": "Chilli Paneer",
    "cleanSearchName": "Chilli Paneer",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 256,
    "calories": 254,
    "proteinGrams": 12,
    "carbsGrams": 9,
    "fatGrams": 17,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.19605,
    "ingredients": "Black pepper-15 gms; Common salt-15 gms; Cooking oil-15 gms;Garlic-15 gms; Ginger-15 gms; Onion-0.25 small bowl; Capsicum-0.25 small -150 gms;; soya sauce-15 gms; VINEGAR-15 gms; Onion-1 gms; Paneer-2 Medium cube",
    "parsedIngredients": [
      "Black pepper-15 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms",
      "Garlic-15 gms",
      "Ginger-15 gms",
      "Onion-0.25 small bowl",
      "Capsicum-0.25 small -150 gms",
      "soya sauce-15 gms",
      "VINEGAR-15 gms",
      "Onion-1 gms",
      "Paneer-2 Medium cube"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-674",
    "name": "Corn Cutlet",
    "cleanSearchName": "Corn Cutlet",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "2 number",
    "totalWeightGrams": 493,
    "calories": 137,
    "proteinGrams": 3,
    "carbsGrams": 19,
    "fatGrams": 5,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.388,
    "ingredients": "POTATO-175 gms; Chillies-15 gms; Coriander leaves-15 gms; Common salt-15 gms; Cooking oil-15 gms; Cumin seeds-4 gms; Chillies-4 gms; Besan-250 gms",
    "parsedIngredients": [
      "POTATO-175 gms",
      "Chillies-15 gms",
      "Coriander leaves-15 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms",
      "Cumin seeds-4 gms",
      "Chillies-4 gms",
      "Besan-250 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-675",
    "name": "Chilli Paneer & Baby corn",
    "cleanSearchName": "Chilli Paneer & Baby corn",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "2 small bowl",
    "totalWeightGrams": 365,
    "calories": 148,
    "proteinGrams": 5,
    "carbsGrams": 8,
    "fatGrams": 10,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.32175,
    "ingredients": "Babycorn-75 gms; Black pepper-7 gms; Common salt-7 gms; Cooking oil-30 gms;Garlic-15 gms; Ginger-15 gms; Chillies-15 gms; soya sauce-15 gms; Onion-1 gms; Paneer-125 gmans;Onion-90 gms; Green Bell pepper-95 gms",
    "parsedIngredients": [
      "Babycorn-75 gms",
      "Black pepper-7 gms",
      "Common salt-7 gms",
      "Cooking oil-30 gms",
      "Garlic-15 gms",
      "Ginger-15 gms",
      "Chillies-15 gms",
      "soya sauce-15 gms",
      "Onion-1 gms",
      "Paneer-125 gmans",
      "Onion-90 gms",
      "Green Bell pepper-95 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-676",
    "name": "Chilli Paneer with Salad (Bell peppers, Broccoli & Cherry tomatoes)",
    "cleanSearchName": "Chilli Paneer with Salad (Bell peppers, Broccoli & Cherry tomatoes)",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 392,
    "calories": 282,
    "proteinGrams": 12,
    "carbsGrams": 16,
    "fatGrams": 17,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 1.0491,
    "ingredients": "Paneer-75 gms; Black pepper-15 gms; Common salt-15 gms; Cooking oil-30 gms;Garlic-15 gms; Ginger-15 gms; Capsicum-75 gms; Lemon-15 gms; Onion-75 gms; Broccoli-62 gms",
    "parsedIngredients": [
      "Paneer-75 gms",
      "Black pepper-15 gms",
      "Common salt-15 gms",
      "Cooking oil-30 gms",
      "Garlic-15 gms",
      "Ginger-15 gms",
      "Capsicum-75 gms",
      "Lemon-15 gms",
      "Onion-75 gms",
      "Broccoli-62 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-677",
    "name": "Dal Kebab",
    "cleanSearchName": "Dal Kebab",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "3 medium",
    "totalWeightGrams": 206,
    "calories": 96,
    "proteinGrams": 4,
    "carbsGrams": 12,
    "fatGrams": 3,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.2601,
    "ingredients": "POTATO-125 gm; Chillies-15 gms; Coriander leaves-4 gms; Common salt-7 gms; Cooking oil-15 gms; Cumin seeds-4 gms; Ginger-7 gms; Garlic-4 gms; Besan-150 gms",
    "parsedIngredients": [
      "POTATO-125 gm",
      "Chillies-15 gms",
      "Coriander leaves-4 gms",
      "Common salt-7 gms",
      "Cooking oil-15 gms",
      "Cumin seeds-4 gms",
      "Ginger-7 gms",
      "Garlic-4 gms",
      "Besan-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-678",
    "name": "Dahi Channa Kebab",
    "cleanSearchName": "Dahi Channa Kebab",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 number",
    "totalWeightGrams": 347,
    "calories": 417,
    "proteinGrams": 20,
    "carbsGrams": 57,
    "fatGrams": 12,
    "fiberGrams": 18,
    "carbonFootprintKgCO2e": 0.4215,
    "ingredients": "Yoghurt-15 gms; Tomato-120 gms;Coriander leaves-15 gms; Common salt-15 gms; Cooking oil-15 gms; Cumin seeds-4 gms; Coriander seeds-4 gms; Ginger-4 gms; Garlic-1.5 gms; Channa Dal-150 gms",
    "parsedIngredients": [
      "Yoghurt-15 gms",
      "Tomato-120 gms",
      "Coriander leaves-15 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms",
      "Cumin seeds-4 gms",
      "Coriander seeds-4 gms",
      "Ginger-4 gms",
      "Garlic-1.5 gms",
      "Channa Dal-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-679",
    "name": "Grilled Paneer",
    "cleanSearchName": "Grilled Paneer",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "4 medium",
    "totalWeightGrams": 153,
    "calories": 76,
    "proteinGrams": 4,
    "carbsGrams": 3,
    "fatGrams": 6,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.7142,
    "ingredients": "Paneer-50 gms; Turmeric powder-4 gms; Common salt-7 gms; Cooking oil-15 gms; Chillies-7 gms; Yoghurt-70 gms",
    "parsedIngredients": [
      "Paneer-50 gms",
      "Turmeric powder-4 gms",
      "Common salt-7 gms",
      "Cooking oil-15 gms",
      "Chillies-7 gms",
      "Yoghurt-70 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-680",
    "name": "Pav Bhaji",
    "cleanSearchName": "Pav Bhaji",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 1533,
    "calories": 548,
    "proteinGrams": 27,
    "carbsGrams": 77,
    "fatGrams": 11,
    "fiberGrams": 33,
    "carbonFootprintKgCO2e": 1.4193,
    "ingredients": "POTATO-200 gms; Capsicum-250 gms; carrot-250 gms; Peas-250 gms; Cauliflower-250 gms; Onion-150 gms; Tomato-120 gms; Turmeric powder-7 gms; Common salt-7 gms; BUTTER-15 gms; Cooking oil-15 gms; Coriander leaves-4 gms; Lemon-15 gms",
    "parsedIngredients": [
      "POTATO-200 gms",
      "Capsicum-250 gms",
      "carrot-250 gms",
      "Peas-250 gms",
      "Cauliflower-250 gms",
      "Onion-150 gms",
      "Tomato-120 gms",
      "Turmeric powder-7 gms",
      "Common salt-7 gms",
      "BUTTER-15 gms",
      "Cooking oil-15 gms",
      "Coriander leaves-4 gms",
      "Lemon-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-681",
    "name": "Paneer Tikka Kathi Roll",
    "cleanSearchName": "Paneer Tikka Kathi Roll",
    "associativity": "11",
    "associativityCategory": "Healthy Chaats, Makhana & Snacks",
    "region": [
      "East"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 number",
    "totalWeightGrams": 565,
    "calories": 403,
    "proteinGrams": 23,
    "carbsGrams": 57,
    "fatGrams": 7,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 1.70105,
    "ingredients": "Lemon-4 gms; Common salt-7 gms; Onion-120 gms; Capsicum-125 gms; Lettuce Leaf-125 gms; Cooking oil-15 gms; Yoghurt-15 gms; Chillies-4 gms; Paneer-150 gms",
    "parsedIngredients": [
      "Lemon-4 gms",
      "Common salt-7 gms",
      "Onion-120 gms",
      "Capsicum-125 gms",
      "Lettuce Leaf-125 gms",
      "Cooking oil-15 gms",
      "Yoghurt-15 gms",
      "Chillies-4 gms",
      "Paneer-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-682",
    "name": "Noodles Paneer Sizzler",
    "cleanSearchName": "Noodles Paneer Sizzler",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 382,
    "calories": 521,
    "proteinGrams": 27,
    "carbsGrams": 26,
    "fatGrams": 33,
    "fiberGrams": 6,
    "carbonFootprintKgCO2e": 1.4333,
    "ingredients": "Paneer-125 gms; Lettuce Leaf-20 gms; Common salt-15 gms; Capsicum-70 gms; Onion-70 gms;Mint leaves-15 gms; Ginger-7 gms;Garlic-15 gms; Cumin seeds-7 gms; Coriander seeds-4 gms; Garlic-4 gms; Chillies-15 gms; Cooking oil-15 gms",
    "parsedIngredients": [
      "Paneer-125 gms",
      "Lettuce Leaf-20 gms",
      "Common salt-15 gms",
      "Capsicum-70 gms",
      "Onion-70 gms",
      "Mint leaves-15 gms",
      "Ginger-7 gms",
      "Garlic-15 gms",
      "Cumin seeds-7 gms",
      "Coriander seeds-4 gms",
      "Garlic-4 gms",
      "Chillies-15 gms",
      "Cooking oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-683",
    "name": "Methi Paneer Vegetable",
    "cleanSearchName": "Methi Paneer Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 335,
    "calories": 239,
    "proteinGrams": 11,
    "carbsGrams": 12,
    "fatGrams": 12,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.9593,
    "ingredients": "Paneer-75 gms; Fenugreek leaves-62 gms; Tomato-75 gms; Onion-60 gms; Chillies-7 gms; Cumin powder-4 gms; Turmeric powder-4 gms; Common salt-7 gms; Cooking oil-15 gms; Coriander leaves-15 gms; Chillies-4 gms; Coriander seeds-7 gms",
    "parsedIngredients": [
      "Paneer-75 gms",
      "Fenugreek leaves-62 gms",
      "Tomato-75 gms",
      "Onion-60 gms",
      "Chillies-7 gms",
      "Cumin powder-4 gms",
      "Turmeric powder-4 gms",
      "Common salt-7 gms",
      "Cooking oil-15 gms",
      "Coriander leaves-15 gms",
      "Chillies-4 gms",
      "Coriander seeds-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-684",
    "name": "Mushroom Paneer masala",
    "cleanSearchName": "Mushroom Paneer masala",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 489,
    "calories": 213,
    "proteinGrams": 15,
    "carbsGrams": 17,
    "fatGrams": 7,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 1.9567,
    "ingredients": "MUSHROOM-100 gms; Tomato-120 gms; Onion-50 gms; Cumin powder-4 gms; Turmeric powder-4 gms; Common salt-7 gms; Cooking oil-15 gms; Coriander leaves-15 gms; Garlic-2.5 gms; Chillies-7 gms; Coriander powder-7 gms; Paneer-150 gms; Ginger-5 gms",
    "parsedIngredients": [
      "MUSHROOM-100 gms",
      "Tomato-120 gms",
      "Onion-50 gms",
      "Cumin powder-4 gms",
      "Turmeric powder-4 gms",
      "Common salt-7 gms",
      "Cooking oil-15 gms",
      "Coriander leaves-15 gms",
      "Garlic-2.5 gms",
      "Chillies-7 gms",
      "Coriander powder-7 gms",
      "Paneer-150 gms",
      "Ginger-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-685",
    "name": "Vegetable idli (Rice idli)",
    "cleanSearchName": "Vegetable idli (Rice idli)",
    "associativity": "14",
    "associativityCategory": "South Indian Dosas, Idlis & Uttapams",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "3 medium",
    "totalWeightGrams": 266,
    "calories": 59,
    "proteinGrams": 1,
    "carbsGrams": 10,
    "fatGrams": 1,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.7221,
    "ingredients": "CARROT-30 gms; Peas-30 gms; Capsicum-30 gms; Mustard seeds-4 gms; Gram dal-4 gms; Curry leaves-4 gms; Cooking oil-7 gms; Common salt-7 gms; Rice-150 gms",
    "parsedIngredients": [
      "CARROT-30 gms",
      "Peas-30 gms",
      "Capsicum-30 gms",
      "Mustard seeds-4 gms",
      "Gram dal-4 gms",
      "Curry leaves-4 gms",
      "Cooking oil-7 gms",
      "Common salt-7 gms",
      "Rice-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-686",
    "name": "SAMAKHIA KHEER",
    "cleanSearchName": "SAMAKHIA KHEER",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "2 medium bowl",
    "totalWeightGrams": 87,
    "calories": 273,
    "proteinGrams": 10,
    "carbsGrams": 31,
    "fatGrams": 12,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.26925,
    "ingredients": "Milk-500 ml; Almond-5 gms; Dates-2 gms; RAISINS-5 gms; Samakhia Rice-75 gms",
    "parsedIngredients": [
      "Milk-500 ml",
      "Almond-5 gms",
      "Dates-2 gms",
      "RAISINS-5 gms",
      "Samakhia Rice-75 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-687",
    "name": "Makhana Kheer",
    "cleanSearchName": "Makhana Kheer",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "4 small bowl",
    "totalWeightGrams": 294,
    "calories": 277,
    "proteinGrams": 15,
    "carbsGrams": 50,
    "fatGrams": 2,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.44625,
    "ingredients": "Makhana-250 gms; Almond-5 gms; Milk-30 gms; Dates-4 gms; Raisins-5 gms",
    "parsedIngredients": [
      "Makhana-250 gms",
      "Almond-5 gms",
      "Milk-30 gms",
      "Dates-4 gms",
      "Raisins-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-688",
    "name": "Reshami Tikka",
    "cleanSearchName": "Reshami Tikka",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "3 medium",
    "totalWeightGrams": 258,
    "calories": 28,
    "proteinGrams": 4,
    "carbsGrams": 2,
    "fatGrams": 1,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.6071,
    "ingredients": "Turmeric powder-4 gms; Yoghurt-15 gms; Common salt-15 gms; Black pepper-15 gms; Coriander leaves-4 gms; Lemon-0.5 gms;Yoghurt-200 gms",
    "parsedIngredients": [
      "Turmeric powder-4 gms",
      "Yoghurt-15 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Coriander leaves-4 gms",
      "Lemon-0.5 gms",
      "Yoghurt-200 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-689",
    "name": "Reshami Tikka (Paneer)",
    "cleanSearchName": "Reshami Tikka Paneer",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 378,
    "calories": 157,
    "proteinGrams": 9,
    "carbsGrams": 13,
    "fatGrams": 6,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 1.7178,
    "ingredients": "Capsicum-62 gms; Onion-62 gms; Turmeric powder-4 gms; Common salt-15 gms; Cooking oil-1 ml; Lemon-0.5 gms; Coriander leaves-5 gms; Paneer-150 gms; Ginger powder-15 gms; Garlic powder-15 gms; Garam Masala-15 gms; Red chilli Powder-15 gms; Cumin Powder-15 gms",
    "parsedIngredients": [
      "Capsicum-62 gms",
      "Onion-62 gms",
      "Turmeric powder-4 gms",
      "Common salt-15 gms",
      "Cooking oil-1 ml",
      "Lemon-0.5 gms",
      "Coriander leaves-5 gms",
      "Paneer-150 gms",
      "Ginger powder-15 gms",
      "Garlic powder-15 gms",
      "Garam Masala-15 gms",
      "Red chilli Powder-15 gms",
      "Cumin Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-690",
    "name": "Risotto recipe (No cheese)",
    "cleanSearchName": "Risotto recipe (No cheese)",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 1039,
    "calories": 980,
    "proteinGrams": 20,
    "carbsGrams": 185,
    "fatGrams": 16,
    "fiberGrams": 11,
    "carbonFootprintKgCO2e": 2.13022,
    "ingredients": "Onion-62 gms;Garlic-7 gms; MUSHROOM-62 gms; Common salt-15 gms; Black pepper-15 gms;Parsley-15 gms; Vegetable Broth-300 gms; Arborio rice-500 gms; Rosemary-24 gms; thyme-24 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Onion-62 gms",
      "Garlic-7 gms",
      "MUSHROOM-62 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Parsley-15 gms",
      "Vegetable Broth-300 gms",
      "Arborio rice-500 gms",
      "Rosemary-24 gms",
      "thyme-24 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-691",
    "name": "Besan Milk",
    "cleanSearchName": "Besan Milk",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "2 cup",
    "totalWeightGrams": 281,
    "calories": 47,
    "proteinGrams": 3,
    "carbsGrams": 7,
    "fatGrams": 1,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.7425,
    "ingredients": "Besan-24 gms; CARDAMOM-7 gms; Milk-250 gms",
    "parsedIngredients": [
      "Besan-24 gms",
      "CARDAMOM-7 gms",
      "Milk-250 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-692",
    "name": "Curd",
    "cleanSearchName": "Curd",
    "associativity": "4",
    "associativityCategory": "Raitas & Yoghurt Accompaniments",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "2 small bowl",
    "totalWeightGrams": 504,
    "calories": 183,
    "proteinGrams": 8,
    "carbsGrams": 13,
    "fatGrams": 11,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 1.41,
    "ingredients": "Milk-500 gms; Yoghurt-4 gms",
    "parsedIngredients": [
      "Milk-500 gms",
      "Yoghurt-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-693",
    "name": "Boondi Raita",
    "cleanSearchName": "Boondi Raita",
    "associativity": "4",
    "associativityCategory": "Raitas & Yoghurt Accompaniments",
    "region": [
      "North"
    ],
    "mealTypes": [
      "Lunch"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 404,
    "calories": 194,
    "proteinGrams": 11,
    "carbsGrams": 13,
    "fatGrams": 11,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.6266,
    "ingredients": "Yoghurt-250 gms; Coriander leaves-4 gms; Boondi-150 gms",
    "parsedIngredients": [
      "Yoghurt-250 gms",
      "Coriander leaves-4 gms",
      "Boondi-150 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-694",
    "name": "Beetroot and Paneer Salad",
    "cleanSearchName": "Beetroot and Paneer Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 262,
    "calories": 104,
    "proteinGrams": 11,
    "carbsGrams": 9,
    "fatGrams": 2,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.5456,
    "ingredients": "BEETROOT-90 gms; CUCUMBER-62 gms; CORIANDER-15 gms; Common salt-15 gms; Black pepper-15 gms; Lemon-15 gms; Paneer-50 gms",
    "parsedIngredients": [
      "BEETROOT-90 gms",
      "CUCUMBER-62 gms",
      "CORIANDER-15 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Lemon-15 gms",
      "Paneer-50 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-695",
    "name": "Creamy Cucumber Salad",
    "cleanSearchName": "Creamy Cucumber Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental",
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "2 small bowl",
    "totalWeightGrams": 88,
    "calories": 34,
    "proteinGrams": 3,
    "carbsGrams": 1,
    "fatGrams": 2,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.4971,
    "ingredients": "CUCUMBER-1 gms; Mint leaves-7 gms; Common salt-15 gms; Black pepper-15 gms; Paneer-50 gms",
    "parsedIngredients": [
      "CUCUMBER-1 gms",
      "Mint leaves-7 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Paneer-50 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-696",
    "name": "CARROT MILK",
    "cleanSearchName": "CARROT MILK",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 cup",
    "totalWeightGrams": 330,
    "calories": 247,
    "proteinGrams": 10,
    "carbsGrams": 23,
    "fatGrams": 3,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.8015,
    "ingredients": "Milk-250 gms; carrot-60 gms; Almond-5 gms; Cardamom-15 gms",
    "parsedIngredients": [
      "Milk-250 gms",
      "carrot-60 gms",
      "Almond-5 gms",
      "Cardamom-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-697",
    "name": "BUTTERMILK",
    "cleanSearchName": "BUTTERMILK",
    "associativity": "4",
    "associativityCategory": "Raitas & Yoghurt Accompaniments",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 162,
    "calories": 93,
    "proteinGrams": 5,
    "carbsGrams": 5,
    "fatGrams": 1,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.3817,
    "ingredients": "Yoghurt-125 gms; Common salt-15 gms; Mint leaves-3 gms; Cumin seeds-15 gms; Black Pepper-4 gms",
    "parsedIngredients": [
      "Yoghurt-125 gms",
      "Common salt-15 gms",
      "Mint leaves-3 gms",
      "Cumin seeds-15 gms",
      "Black Pepper-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-698",
    "name": "MUSHROOM SOUP (WITH ALMOND MILK)",
    "cleanSearchName": "MUSHROOM SOUP (WITH ALMOND MILK)",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 340,
    "calories": 180,
    "proteinGrams": 8,
    "carbsGrams": 8,
    "fatGrams": 13,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 1.0765,
    "ingredients": "MUSHROOM-125 gms; Common salt-15 gms; Almond Milk-200 gms",
    "parsedIngredients": [
      "MUSHROOM-125 gms",
      "Common salt-15 gms",
      "Almond Milk-200 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-699",
    "name": "Broccoli SOUP (WITH LACTOSE FREE MILK)",
    "cleanSearchName": "Broccoli SOUP (WITH LACTOSE FREE MILK)",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 410,
    "calories": 304,
    "proteinGrams": 15,
    "carbsGrams": 7,
    "fatGrams": 3,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.7735,
    "ingredients": "Garlic-15 gms; Onion-30 gms; Common salt-15 gms;  Broccoli-150 gms; Lactose Free Milk-200 gms",
    "parsedIngredients": [
      "Garlic-15 gms",
      "Onion-30 gms",
      "Common salt-15 gms",
      "Broccoli-150 gms",
      "Lactose Free Milk-200 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-700",
    "name": "Paneer Capsicum Onion Vegetable",
    "cleanSearchName": "Paneer Capsicum Onion Vegetable",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 607,
    "calories": 559,
    "proteinGrams": 27,
    "carbsGrams": 37,
    "fatGrams": 33,
    "fiberGrams": 17,
    "carbonFootprintKgCO2e": 1.6195,
    "ingredients": "Paneer-100 gms; Capsicum-200 gms; Onion-100 gms; Tomato-100 gms; Cooking oil-15 gms; Cumin seeds-15 gms; Ginger-2.5 gms;Garlic-2.5 gms; Turmeric powder-7 gms; Chillies-15 gms; Coriander seeds-15 gms; Common salt-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Paneer-100 gms",
      "Capsicum-200 gms",
      "Onion-100 gms",
      "Tomato-100 gms",
      "Cooking oil-15 gms",
      "Cumin seeds-15 gms",
      "Ginger-2.5 gms",
      "Garlic-2.5 gms",
      "Turmeric powder-7 gms",
      "Chillies-15 gms",
      "Coriander seeds-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-701",
    "name": "Hazelnut Asian Lettuce Wrap (Vegetarian with Paneer)",
    "cleanSearchName": "Hazelnut Asian Lettuce Wrap (Vegetarian with Paneer)",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 number",
    "totalWeightGrams": 336,
    "calories": 330,
    "proteinGrams": 16,
    "carbsGrams": 32,
    "fatGrams": 14,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.83075,
    "ingredients": "Paneer-60 gms; carrot-80 gms; Capsicum-80 gms; Water Chestnut-40 gms; soya sauce-15 gms; VINEGAR-15 gms; Cooking oil-15 gms; Ginger-7 gms; Chillies-4 gms; Lettuce leaf-20 gms",
    "parsedIngredients": [
      "Paneer-60 gms",
      "carrot-80 gms",
      "Capsicum-80 gms",
      "Water Chestnut-40 gms",
      "soya sauce-15 gms",
      "VINEGAR-15 gms",
      "Cooking oil-15 gms",
      "Ginger-7 gms",
      "Chillies-4 gms",
      "Lettuce leaf-20 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-702",
    "name": "GREEN BEANS PANEER VegETABLE",
    "cleanSearchName": "GREEN BEANS PANEER VegETABLE",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 482,
    "calories": 270,
    "proteinGrams": 16,
    "carbsGrams": 18,
    "fatGrams": 13,
    "fiberGrams": 15,
    "carbonFootprintKgCO2e": 0.9345,
    "ingredients": "Beans-250 gms; Paneer-50 gms; Tomato-120 gmsl; Onion-0.5 gms; Garlic-2 gms; Cumin seeds-7 gms; Turmeric powder-7 gms; Chillies-7 gms; Common salt-15 gms; Cooking oil-15 gms; Coriander leaves-4 gms",
    "parsedIngredients": [
      "Beans-250 gms",
      "Paneer-50 gms",
      "Tomato-120 gmsl",
      "Onion-0.5 gms",
      "Garlic-2 gms",
      "Cumin seeds-7 gms",
      "Turmeric powder-7 gms",
      "Chillies-7 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms",
      "Coriander leaves-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-703",
    "name": "Dahi Aloo Gravy",
    "cleanSearchName": "Dahi Aloo Gravy",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 301,
    "calories": 163,
    "proteinGrams": 5,
    "carbsGrams": 21,
    "fatGrams": 5,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.5847,
    "ingredients": "POTATO ; Yoghurt-125 gms; Onion-0.5 gms; Tomato-120 gms)-1 small; Ginger-7 gms; Cumin seeds-7 gms; Turmeric powder-7 gms; Coriander seeds-7 gms; Chillies-4 gms; Common salt-15 gms; Fenugreek leaves-4 gms",
    "parsedIngredients": [
      "POTATO",
      "Yoghurt-125 gms",
      "Onion-0.5 gms",
      "Tomato-120 gms)-1 small",
      "Ginger-7 gms",
      "Cumin seeds-7 gms",
      "Turmeric powder-7 gms",
      "Coriander seeds-7 gms",
      "Chillies-4 gms",
      "Common salt-15 gms",
      "Fenugreek leaves-4 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-704",
    "name": "Cold Coffee",
    "cleanSearchName": "Cold Coffee",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy",
      "caffeine"
    ],
    "serving": "2 cup",
    "totalWeightGrams": 765,
    "calories": 100,
    "proteinGrams": 6,
    "carbsGrams": 12,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 5.5625,
    "ingredients": "Coffee-250 gms; Brown sugar-15 gms; Milk-500 gms",
    "parsedIngredients": [
      "Coffee-250 gms",
      "Brown sugar-15 gms",
      "Milk-500 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-705",
    "name": "Fruit Raita",
    "cleanSearchName": "Fruit Raita",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 350,
    "calories": 239,
    "proteinGrams": 8,
    "carbsGrams": 26,
    "fatGrams": 10,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.7059,
    "ingredients": "Yoghurt-250 gms; Apple-10 gms; Pomegranate-10 gms; Grapes-50 gms; Mint leaves-10 gms; Common salt-15 gms; Black pepper-5 gms",
    "parsedIngredients": [
      "Yoghurt-250 gms",
      "Apple-10 gms",
      "Pomegranate-10 gms",
      "Grapes-50 gms",
      "Mint leaves-10 gms",
      "Common salt-15 gms",
      "Black pepper-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-706",
    "name": "Grilled Caesar Salad (non Veg)",
    "cleanSearchName": "Grilled Caesar Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Non-veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 122,
    "calories": 199,
    "proteinGrams": 19,
    "carbsGrams": 11,
    "fatGrams": 9,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.35215,
    "ingredients": "Chicken-1 gms; Garlic-7 gms; Common salt-15 gms; Black pepper-15 gms; Lettuce Leaf-30 gms; CHEESE-10 gms; Lemon-15 gms; Yoghurt-15 gms; soya sauce-7 gms; Garlic-7 gms",
    "parsedIngredients": [
      "Chicken-1 gms",
      "Garlic-7 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms",
      "Lettuce Leaf-30 gms",
      "CHEESE-10 gms",
      "Lemon-15 gms",
      "Yoghurt-15 gms",
      "soya sauce-7 gms",
      "Garlic-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-707",
    "name": "Bathua raita",
    "cleanSearchName": "Bathua raita",
    "associativity": "4",
    "associativityCategory": "Raitas & Yoghurt Accompaniments",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 212,
    "calories": 98,
    "proteinGrams": 6,
    "carbsGrams": 7,
    "fatGrams": 4,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.3165,
    "ingredients": "Bathua leaves-100 gms; Yoghurt-100 gms; Mint leaves-5 gms; Cumin seeds-7 gms",
    "parsedIngredients": [
      "Bathua leaves-100 gms",
      "Yoghurt-100 gms",
      "Mint leaves-5 gms",
      "Cumin seeds-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-708",
    "name": "Sugarcane kheer",
    "cleanSearchName": "Sugarcane kheer",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "4 gms",
    "totalWeightGrams": 180,
    "calories": 150,
    "proteinGrams": 4,
    "carbsGrams": 31,
    "fatGrams": 2,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.6515,
    "ingredients": "Rice-150 gms; Almond-5.5 gms; Cashew-10 gms; Sugarcane juice-15 gms",
    "parsedIngredients": [
      "Rice-150 gms",
      "Almond-5.5 gms",
      "Cashew-10 gms",
      "Sugarcane juice-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-709",
    "name": "Spinach and Walnut Raita",
    "cleanSearchName": "Spinach and Walnut Raita",
    "associativity": "4",
    "associativityCategory": "Raitas & Yoghurt Accompaniments",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "4 medium katori",
    "totalWeightGrams": 326,
    "calories": 140,
    "proteinGrams": 5,
    "carbsGrams": 7,
    "fatGrams": 11,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.2915,
    "ingredients": "Cumin seeds-15 gms; Common salt-15 gms; Yoghurt-15 gms; SPINACH-250 gms; Walnut-11 gms; Coriander Powder-5 gms; Red chilli Powder-15 gms",
    "parsedIngredients": [
      "Cumin seeds-15 gms",
      "Common salt-15 gms",
      "Yoghurt-15 gms",
      "SPINACH-250 gms",
      "Walnut-11 gms",
      "Coriander Powder-5 gms",
      "Red chilli Powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-710",
    "name": "HOMEMADE PANEER",
    "cleanSearchName": "HOMEMADE PANEER",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 gms",
    "totalWeightGrams": 60,
    "calories": 20,
    "proteinGrams": 0,
    "carbsGrams": 1,
    "fatGrams": 1,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.0645,
    "ingredients": "Milk-15 gms; VINEGAR-45 gms",
    "parsedIngredients": [
      "Milk-15 gms",
      "VINEGAR-45 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-711",
    "name": "Herb Paneer",
    "cleanSearchName": "Herb Paneer",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "4 number",
    "totalWeightGrams": 129,
    "calories": 14,
    "proteinGrams": 1,
    "carbsGrams": 1,
    "fatGrams": 1,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.2406,
    "ingredients": "VINEGAR-45 gms; Capsicum-45 gms; Coriander leaves-7 gms;Mint leaves-7 gms; Black pepper-15 gms; Paneer-10 gms",
    "parsedIngredients": [
      "VINEGAR-45 gms",
      "Capsicum-45 gms",
      "Coriander leaves-7 gms",
      "Mint leaves-7 gms",
      "Black pepper-15 gms",
      "Paneer-10 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-712",
    "name": "Paneer Kebab",
    "cleanSearchName": "Paneer Kebab",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "2 medium",
    "totalWeightGrams": 91,
    "calories": 141,
    "proteinGrams": 2,
    "carbsGrams": 5,
    "fatGrams": 4,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.0861,
    "ingredients": "Paneer-50 g; POTATO-10 gms; Ginger-7 gms; Mint leaves-4 gms; Coriander leaves-15 gms; Cumin seeds powder-15 gms; Black Pepper Powder-10 gms; Common salt-15 gms; Cooking oil-15 gms",
    "parsedIngredients": [
      "Paneer-50 g",
      "POTATO-10 gms",
      "Ginger-7 gms",
      "Mint leaves-4 gms",
      "Coriander leaves-15 gms",
      "Cumin seeds powder-15 gms",
      "Black Pepper Powder-10 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-713",
    "name": "Coffee Espresso (Skimmed milk)",
    "cleanSearchName": "Coffee Espresso (Skimmed milk)",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy",
      "caffeine"
    ],
    "serving": "1 cup",
    "totalWeightGrams": 265,
    "calories": 80,
    "proteinGrams": 6,
    "carbsGrams": 11,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.9475,
    "ingredients": "Milk-250 gms; coffee-15 gms",
    "parsedIngredients": [
      "Milk-250 gms",
      "coffee-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-714",
    "name": "Greek Salad",
    "cleanSearchName": "Greek Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 small bowl",
    "totalWeightGrams": 170,
    "calories": 128,
    "proteinGrams": 2,
    "carbsGrams": 9,
    "fatGrams": 1,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.1865,
    "ingredients": "CUCUMBER-50 gms; Tomato-50 gms; Capsicum-25 gms; Paneer-20 g; VINEGAR-15 gms; Common salt-15 gms; Black pepper-15 gms",
    "parsedIngredients": [
      "CUCUMBER-50 gms",
      "Tomato-50 gms",
      "Capsicum-25 gms",
      "Paneer-20 g",
      "VINEGAR-15 gms",
      "Common salt-15 gms",
      "Black pepper-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-715",
    "name": "Hariyali Tikka Veg",
    "cleanSearchName": "Hariyali Tikka Veg",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "3 number",
    "totalWeightGrams": 245,
    "calories": 104,
    "proteinGrams": 4,
    "carbsGrams": 3,
    "fatGrams": 8,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.6545,
    "ingredients": "MUSHROOM-15 gms; Cauliflower-15 gms; Capsicum-15 gms; Zucchini-15 gms; Paneer-50 gms; Yoghurt-15 gms; Coriander leaves-30 gms; Mint leaves-15 gms; Spinach-30 gms; Lemon-15 gms; Common salt-15 gms; Cooking oil-15 gms",
    "parsedIngredients": [
      "MUSHROOM-15 gms",
      "Cauliflower-15 gms",
      "Capsicum-15 gms",
      "Zucchini-15 gms",
      "Paneer-50 gms",
      "Yoghurt-15 gms",
      "Coriander leaves-30 gms",
      "Mint leaves-15 gms",
      "Spinach-30 gms",
      "Lemon-15 gms",
      "Common salt-15 gms",
      "Cooking oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-716",
    "name": "Lactose Free Milk Coffee With Brown Sugar",
    "cleanSearchName": "Lactose Free Milk Coffee With Brown Sugar",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy",
      "caffeine"
    ],
    "serving": "1 cup",
    "totalWeightGrams": 390,
    "calories": 200,
    "proteinGrams": 7,
    "carbsGrams": 12,
    "fatGrams": 4,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 2.8,
    "ingredients": "Milk-250 gms; Brown sugar-15 gms; Coffee-125 gms",
    "parsedIngredients": [
      "Milk-250 gms",
      "Brown sugar-15 gms",
      "Coffee-125 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-717",
    "name": "Skimmed Milk Coffee Without Sugar",
    "cleanSearchName": "Skimmed Milk Coffee Without Sugar",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy",
      "caffeine"
    ],
    "serving": "1 cup",
    "totalWeightGrams": 382,
    "calories": 74,
    "proteinGrams": 6,
    "carbsGrams": 12,
    "fatGrams": 0,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 2.787,
    "ingredients": "Milk-250 gms; Coffee-125 gms; Cinnamon-7 gms",
    "parsedIngredients": [
      "Milk-250 gms",
      "Coffee-125 gms",
      "Cinnamon-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-718",
    "name": "Gujiya",
    "cleanSearchName": "Gujiya",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 number",
    "totalWeightGrams": 231,
    "calories": 1192,
    "proteinGrams": 15,
    "carbsGrams": 126,
    "fatGrams": 68,
    "fiberGrams": 14,
    "carbonFootprintKgCO2e": 0.18075,
    "ingredients": "Atta-100 gms; Ghee-15 gms; COCONUT-50 gms; Jaggery-50 gms; RAISINS-15 gms; Cardamom-1 gms; Sunflower oil-20 ml",
    "parsedIngredients": [
      "Atta-100 gms",
      "Ghee-15 gms",
      "COCONUT-50 gms",
      "Jaggery-50 gms",
      "RAISINS-15 gms",
      "Cardamom-1 gms",
      "Sunflower oil-20 ml"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-719",
    "name": "Rice kheer",
    "cleanSearchName": "Rice kheer",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 195,
    "calories": 223,
    "proteinGrams": 1,
    "carbsGrams": 12,
    "fatGrams": 5,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.6735,
    "ingredients": "Milk-20 gms; Rice-150 gms; Jaggery-0.5 gms; CARDAMOM-5 gms; Ghee-15 gms",
    "parsedIngredients": [
      "Milk-20 gms",
      "Rice-150 gms",
      "Jaggery-0.5 gms",
      "CARDAMOM-5 gms",
      "Ghee-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-720",
    "name": "Paneer Wrap(Cabbage Leaves)",
    "cleanSearchName": "Paneer Wrap(Cabbage Leaves)",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 136,
    "calories": 679,
    "proteinGrams": 27,
    "carbsGrams": 50,
    "fatGrams": 39,
    "fiberGrams": 13,
    "carbonFootprintKgCO2e": 0.3225,
    "ingredients": "Atta-30 gms; Paneer-10 gms; Cabbage-20 g; carrot-15 gms; Onion-20 gms; Ginger-5 gms; Red chilli Powder-7 gms; Cumin seeds-4 gms; Coriander seeds-15 gms; Common salt-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Atta-30 gms",
      "Paneer-10 gms",
      "Cabbage-20 g",
      "carrot-15 gms",
      "Onion-20 gms",
      "Ginger-5 gms",
      "Red chilli Powder-7 gms",
      "Cumin seeds-4 gms",
      "Coriander seeds-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-721",
    "name": "Paneer Wrap(icebarg Leaves)",
    "cleanSearchName": "Paneer Wrap(icebarg Leaves)",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 125,
    "calories": 530,
    "proteinGrams": 26,
    "carbsGrams": 33,
    "fatGrams": 33,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.1909,
    "ingredients": "Atta-30 gms; Paneer-10 gm; Capsicum-20 gmsr; Onion-15 gms; TOMATO-10 gms; CUCUMBER-15 gms; Cumin seeds-4 gms; CORIANDER leaves-1 gms; Common salt-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Atta-30 gms",
      "Paneer-10 gm",
      "Capsicum-20 gmsr",
      "Onion-15 gms",
      "TOMATO-10 gms",
      "CUCUMBER-15 gms",
      "Cumin seeds-4 gms",
      "CORIANDER leaves-1 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-722",
    "name": "Smoothie",
    "cleanSearchName": "Smoothie",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 1194,
    "calories": 265,
    "proteinGrams": 15,
    "carbsGrams": 23,
    "fatGrams": 13,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 1.60025,
    "ingredients": "Apple-200 gms; Pear-178 gms; Banana-101 gms; Grapes-150 gms; Strawberries-75 gms; Blueberries-75 gms; Mint leaves-15 gms; Yoghurt-150 gms; Milk-250 gms",
    "parsedIngredients": [
      "Apple-200 gms",
      "Pear-178 gms",
      "Banana-101 gms",
      "Grapes-150 gms",
      "Strawberries-75 gms",
      "Blueberries-75 gms",
      "Mint leaves-15 gms",
      "Yoghurt-150 gms",
      "Milk-250 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-723",
    "name": "Pumpkin Soup",
    "cleanSearchName": "Pumpkin Soup",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "4 cup",
    "totalWeightGrams": 970,
    "calories": 82,
    "proteinGrams": 4,
    "carbsGrams": 10,
    "fatGrams": 3,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 1.3375,
    "ingredients": "PUMPKIN-200 gms; Onion-160 gms; Garlic-15 gms; Olive oil-30 gms; Common salt-15 gms; Broth-300 gms; Milk-250 gms",
    "parsedIngredients": [
      "PUMPKIN-200 gms",
      "Onion-160 gms",
      "Garlic-15 gms",
      "Olive oil-30 gms",
      "Common salt-15 gms",
      "Broth-300 gms",
      "Milk-250 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-724",
    "name": "Tea with Skimmed Milk",
    "cleanSearchName": "Tea with Skimmed Milk",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy",
      "caffeine"
    ],
    "serving": "1 cup",
    "totalWeightGrams": 275,
    "calories": 36,
    "proteinGrams": 2,
    "carbsGrams": 7,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.752,
    "ingredients": "HONEY-10 gms; Milk-250 gms; Tea-15 gms",
    "parsedIngredients": [
      "HONEY-10 gms",
      "Milk-250 gms",
      "Tea-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-725",
    "name": "Paneer Stuffed Roti",
    "cleanSearchName": "Paneer Stuffed Roti",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "2 number",
    "totalWeightGrams": 591,
    "calories": 199,
    "proteinGrams": 7,
    "carbsGrams": 39,
    "fatGrams": 1,
    "fiberGrams": 8,
    "carbonFootprintKgCO2e": 1.8726,
    "ingredients": "Atta-250 gms; Common salt-1 gms; Olive oil-15 gms; Paneer-150 gms; Onion-125 gms; Chillies-15 gms; Coriander seeds-15 gms; Coriander Powder-5 gms; Turmeric powder-15 gms",
    "parsedIngredients": [
      "Atta-250 gms",
      "Common salt-1 gms",
      "Olive oil-15 gms",
      "Paneer-150 gms",
      "Onion-125 gms",
      "Chillies-15 gms",
      "Coriander seeds-15 gms",
      "Coriander Powder-5 gms",
      "Turmeric powder-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-726",
    "name": "Saute Paneer For Fasting",
    "cleanSearchName": "Saute Paneer For Fasting",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 179,
    "calories": 10,
    "proteinGrams": 0,
    "carbsGrams": 0,
    "fatGrams": 0,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 1.1847,
    "ingredients": "Paneer-112 gms; Olive oil-15 gms; Cumin seeds-15 gms; Common salt-1 gms; Red chilli Powder-15 gms; Lemon-1 gms Coriander leaves-10 gms;Mint leaves-10 gms",
    "parsedIngredients": [
      "Paneer-112 gms",
      "Olive oil-15 gms",
      "Cumin seeds-15 gms",
      "Common salt-1 gms",
      "Red chilli Powder-15 gms",
      "Lemon-1 gms Coriander leaves-10 gms",
      "Mint leaves-10 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-727",
    "name": "Paneer Stuffed Roti using a combination of Oats Bran and Oats Atta",
    "cleanSearchName": "Paneer Stuffed Roti using a combination of Oats Bran and Oats Atta",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Lunch",
      "Dinner"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "4 medium",
    "totalWeightGrams": 188,
    "calories": 36,
    "proteinGrams": 0,
    "carbsGrams": 0,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 1.3695,
    "ingredients": "Cumin seeds-1 gms; Coriander Powder-5 gms; Red chilli Powder-7 gms; Paneer-150 gms; Coriander leaves-10 gms; GHEE-15 gms",
    "parsedIngredients": [
      "Cumin seeds-1 gms",
      "Coriander Powder-5 gms",
      "Red chilli Powder-7 gms",
      "Paneer-150 gms",
      "Coriander leaves-10 gms",
      "GHEE-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-728",
    "name": "Paneer Vegetable curry",
    "cleanSearchName": "Paneer Vegetable curry",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "2 medium katori",
    "totalWeightGrams": 825,
    "calories": 44,
    "proteinGrams": 2,
    "carbsGrams": 7,
    "fatGrams": 1,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 3.2985,
    "ingredients": "Paneer-300 gms; Onion-125 gms; Tomato-90 gms; POTATO-150 gms; Capsicum-15 gms; Zucchini-15 gms; Peas-15 gms; Ginger powder-15 gms; Cumin seeds-15 gms; Coriander Powder-5 gms; Garam Masala-15 gms; Red chilli Powder-15 gms; Common salt-15 gms; Olive oil-30 gms; Coriander leaves-5 gms",
    "parsedIngredients": [
      "Paneer-300 gms",
      "Onion-125 gms",
      "Tomato-90 gms",
      "POTATO-150 gms",
      "Capsicum-15 gms",
      "Zucchini-15 gms",
      "Peas-15 gms",
      "Ginger powder-15 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-5 gms",
      "Garam Masala-15 gms",
      "Red chilli Powder-15 gms",
      "Common salt-15 gms",
      "Olive oil-30 gms",
      "Coriander leaves-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-729",
    "name": "Garden Cress Seeds Kheer without Sugar",
    "cleanSearchName": "Garden Cress Seeds Kheer without Sugar",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Snacks"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 cup",
    "totalWeightGrams": 577,
    "calories": 68,
    "proteinGrams": 1,
    "carbsGrams": 5,
    "fatGrams": 5,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 1.4225,
    "ingredients": "Garden cress seeds-30 gms; Milk-500 gms; cardamom powder-15 gms; HONEY-15 gms; Ghee-15 gms; Almonds-2.2 gms",
    "parsedIngredients": [
      "Garden cress seeds-30 gms",
      "Milk-500 gms",
      "cardamom powder-15 gms",
      "HONEY-15 gms",
      "Ghee-15 gms",
      "Almonds-2.2 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-730",
    "name": "Style Beetroot & Paneer Salad",
    "cleanSearchName": "Style Beetroot & Paneer Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "2 small bowl",
    "totalWeightGrams": 860,
    "calories": 20,
    "proteinGrams": 1,
    "carbsGrams": 4,
    "fatGrams": 0,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 2.739,
    "ingredients": "beetroot-240 gms; Paneer-280 gms; Cucumber-200 gms; Tomato-90 gms; Onion ; Coriander leaves-5 gms; Chat Masala-15 gms; Common salt-15 gms; Lemon-15 gms",
    "parsedIngredients": [
      "beetroot-240 gms",
      "Paneer-280 gms",
      "Cucumber-200 gms",
      "Tomato-90 gms",
      "Onion",
      "Coriander leaves-5 gms",
      "Chat Masala-15 gms",
      "Common salt-15 gms",
      "Lemon-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-731",
    "name": "Buttermilk(Toned Milk)",
    "cleanSearchName": "Buttermilk(Toned Milk)",
    "associativity": "4",
    "associativityCategory": "Raitas & Yoghurt Accompaniments",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 295,
    "calories": 147,
    "proteinGrams": 8,
    "carbsGrams": 13,
    "fatGrams": 8,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.7075,
    "ingredients": "Milk-250 gms; Curd-15 gms;  Common salt-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Milk-250 gms",
      "Curd-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-732",
    "name": "Banana Smoothie",
    "cleanSearchName": "Banana Smoothie",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 537,
    "calories": 258,
    "proteinGrams": 2,
    "carbsGrams": 59,
    "fatGrams": 0,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 0.7105,
    "ingredients": "Banana-272 gms; Milk-250 gms; HONEY-15 gms",
    "parsedIngredients": [
      "Banana-272 gms",
      "Milk-250 gms",
      "HONEY-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-733",
    "name": "Mango Smoothie",
    "cleanSearchName": "Mango Smoothie",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 537,
    "calories": 145,
    "proteinGrams": 1,
    "carbsGrams": 32,
    "fatGrams": 1,
    "fiberGrams": 4,
    "carbonFootprintKgCO2e": 0.9417,
    "ingredients": "Mango-272 gms; Milk-250 gms; HONEY-15 gms",
    "parsedIngredients": [
      "Mango-272 gms",
      "Milk-250 gms",
      "HONEY-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-734",
    "name": "Strawberry Smoothie with Skimmed Milk",
    "cleanSearchName": "Strawberry Smoothie with Skimmed Milk",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 295,
    "calories": 123,
    "proteinGrams": 0,
    "carbsGrams": 31,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.736,
    "ingredients": "strawberry-30 gms; Milk-250 gms; HONEY-15 gms",
    "parsedIngredients": [
      "strawberry-30 gms",
      "Milk-250 gms",
      "HONEY-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-735",
    "name": "Apple Smoothie with Skimmed Milk",
    "cleanSearchName": "Apple Smoothie with Skimmed Milk",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 450,
    "calories": 186,
    "proteinGrams": 9,
    "carbsGrams": 40,
    "fatGrams": 0,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 0.7,
    "ingredients": "Apple-200 gms; Milk-250 gms",
    "parsedIngredients": [
      "Apple-200 gms",
      "Milk-250 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-736",
    "name": "Oatmeal Skimmed Milk",
    "cleanSearchName": "Oatmeal Skimmed Milk",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 810,
    "calories": 354,
    "proteinGrams": 13,
    "carbsGrams": 66,
    "fatGrams": 5,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 1.2805,
    "ingredients": "Oats-150 gms; Milk-250 gms; Common salt-15 gms; Banana-118 gms ; Blueberries-250 gms; Almond-3.3 gms; Cinnamon-24 gms",
    "parsedIngredients": [
      "Oats-150 gms",
      "Milk-250 gms",
      "Common salt-15 gms",
      "Banana-118 gms",
      "Blueberries-250 gms",
      "Almond-3.3 gms",
      "Cinnamon-24 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-737",
    "name": "Qunioa Porridge With Double Toned Milk",
    "cleanSearchName": "Qunioa Porridge With Double Toned Milk",
    "associativity": "9",
    "associativityCategory": "Breakfast Staples, Porridges & Toasts",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 541,
    "calories": 960,
    "proteinGrams": 36,
    "carbsGrams": 91,
    "fatGrams": 52,
    "fiberGrams": 14,
    "carbonFootprintKgCO2e": 0.9868,
    "ingredients": "Quinoa-150 gms; Milk-250 gms; Nutmeg-15 gms; DATES-15 gms; Almonds-5.5 gms; Walnut-58.5 gms; Banana-101 gms",
    "parsedIngredients": [
      "Quinoa-150 gms",
      "Milk-250 gms",
      "Nutmeg-15 gms",
      "DATES-15 gms",
      "Almonds-5.5 gms",
      "Walnut-58.5 gms",
      "Banana-101 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-738",
    "name": "Oats Smoothie With Sugar Skimmed Milk",
    "cleanSearchName": "Oats Smoothie With Sugar Skimmed Milk",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 501,
    "calories": 186,
    "proteinGrams": 11,
    "carbsGrams": 32,
    "fatGrams": 1,
    "fiberGrams": 1,
    "carbonFootprintKgCO2e": 0.82,
    "ingredients": "Oats-150 gms; Banana-101 gms; Milk-250 gms",
    "parsedIngredients": [
      "Oats-150 gms",
      "Banana-101 gms",
      "Milk-250 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-739",
    "name": "Hung Curd Salad",
    "cleanSearchName": "Hung Curd Salad",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "2 cup",
    "totalWeightGrams": 600,
    "calories": 79,
    "proteinGrams": 3,
    "carbsGrams": 6,
    "fatGrams": 3,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.7855,
    "ingredients": "Yoghurt-150 gms; Cucumber-200 gms; Tomato-90 gms; Capsicum-100 gms; Onion-15 gms; Coriander leaves-15 gms; Black pepper-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Yoghurt-150 gms",
      "Cucumber-200 gms",
      "Tomato-90 gms",
      "Capsicum-100 gms",
      "Onion-15 gms",
      "Coriander leaves-15 gms",
      "Black pepper-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": true,
    "duplicateNote": "Alternative portion or variation for \"Hung Curd Salad\" (2 cup, 600g)"
  },
  {
    "id": "food-740",
    "name": "Matar Paneer (with low fat)",
    "cleanSearchName": "Matar Paneer (with low fat)",
    "associativity": "2",
    "associativityCategory": "Dry Curries & Sabzis",
    "region": [
      "North",
      "East",
      "West",
      "South"
    ],
    "mealTypes": [
      "Dry Curry"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 985,
    "calories": 919,
    "proteinGrams": 56,
    "carbsGrams": 76,
    "fatGrams": 39,
    "fiberGrams": 24,
    "carbonFootprintKgCO2e": 2.77,
    "ingredients": "Paneer-150 gms; Peas-150 gms;Onion-125 gms; Ginger powder-15 gms; Garlic powder-15 gms; Tomato-90 gms; Cumin seeds-225 gms; Coriander Powder-5 gms; Garam Masala-15 gms; Red chilli Powder-15 gms; Common salt-15 gms; Coriander leaves-150 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Paneer-150 gms",
      "Peas-150 gms",
      "Onion-125 gms",
      "Ginger powder-15 gms",
      "Garlic powder-15 gms",
      "Tomato-90 gms",
      "Cumin seeds-225 gms",
      "Coriander Powder-5 gms",
      "Garam Masala-15 gms",
      "Red chilli Powder-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-150 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-741",
    "name": "Cauliflower Paneer Tikki",
    "cleanSearchName": "Cauliflower Paneer Tikki",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "2 number",
    "totalWeightGrams": 570,
    "calories": 112,
    "proteinGrams": 8,
    "carbsGrams": 10,
    "fatGrams": 6,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 1.3685,
    "ingredients": "Cauliflower-250 gms; Paneer-120 gms; carrot-150 gms; Coriander leaves-15 gms; Red chilli Powder-15 gms; Coriander Powder-5 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Cauliflower-250 gms",
      "Paneer-120 gms",
      "carrot-150 gms",
      "Coriander leaves-15 gms",
      "Red chilli Powder-15 gms",
      "Coriander Powder-5 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-742",
    "name": "Paneer Tikka in Green Chutney",
    "cleanSearchName": "Paneer Tikka in Green Chutney",
    "associativity": "0",
    "associativityCategory": "Salads, Wraps & General Dishes",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium katori",
    "totalWeightGrams": 555,
    "calories": 720,
    "proteinGrams": 47,
    "carbsGrams": 33,
    "fatGrams": 40,
    "fiberGrams": 3,
    "carbonFootprintKgCO2e": 1.692,
    "ingredients": "Paneer-150 gms; Coriander leaves-150 gms;Mint leaves-150 gms; Chillies-15 gms; Ginger-15 gms;Garlic-15 gms; Cumin seeds-15 gms; Chat Masala-15 gms; Common salt-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Paneer-150 gms",
      "Coriander leaves-150 gms",
      "Mint leaves-150 gms",
      "Chillies-15 gms",
      "Ginger-15 gms",
      "Garlic-15 gms",
      "Cumin seeds-15 gms",
      "Chat Masala-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-743",
    "name": "Paneer kebab",
    "cleanSearchName": "Paneer kebab",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium",
    "totalWeightGrams": 590,
    "calories": 776,
    "proteinGrams": 49,
    "carbsGrams": 44,
    "fatGrams": 42,
    "fiberGrams": 9,
    "carbonFootprintKgCO2e": 1.9846,
    "ingredients": "Paneer-150 gms; Capsicum-201 gms; Onion-150 gms; Olive oil-15 gms; Cumin Powder-15 gms; Coriander Powder-5 gms; Garam Masala-15 gms; Red chilli Powder-24 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Paneer-150 gms",
      "Capsicum-201 gms",
      "Onion-150 gms",
      "Olive oil-15 gms",
      "Cumin Powder-15 gms",
      "Coriander Powder-5 gms",
      "Garam Masala-15 gms",
      "Red chilli Powder-24 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-744",
    "name": "Nuts and seeds raita with skimmed milk curd",
    "cleanSearchName": "Nuts and seeds raita with skimmed milk curd",
    "associativity": "4",
    "associativityCategory": "Raitas & Yoghurt Accompaniments",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 cup",
    "totalWeightGrams": 234,
    "calories": 188,
    "proteinGrams": 16,
    "carbsGrams": 4,
    "fatGrams": 10,
    "fiberGrams": 2,
    "carbonFootprintKgCO2e": 0.5075,
    "ingredients": "Yoghurt-150 gms; Almond-5.5 gms; Walnut-4 gms; Pumpkin Seeds-15 gms; Sunflower Seeds-15 gms; Cumin seeds-15 gms; Common salt-15 gms; Coriander leaves-15 gms",
    "parsedIngredients": [
      "Yoghurt-150 gms",
      "Almond-5.5 gms",
      "Walnut-4 gms",
      "Pumpkin Seeds-15 gms",
      "Sunflower Seeds-15 gms",
      "Cumin seeds-15 gms",
      "Common salt-15 gms",
      "Coriander leaves-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-745",
    "name": "Low Fat Paneer Tikki",
    "cleanSearchName": "Low Fat Paneer Tikki",
    "associativity": "6",
    "associativityCategory": "Kebabs, Tikkis & Cutlets",
    "region": [
      "North",
      "East",
      "West"
    ],
    "mealTypes": [
      "Appetizer"
    ],
    "category": "Veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 large katori",
    "totalWeightGrams": 810,
    "calories": 1017,
    "proteinGrams": 56,
    "carbsGrams": 74,
    "fatGrams": 57,
    "fiberGrams": 13,
    "carbonFootprintKgCO2e": 2.051,
    "ingredients": "Paneer-150 gms; Sweet potato-180 gms; Peas-250 gms;Onion-125 gms; Chillies-15 gms; Ginger-15 gms; Red chilli Powder-15 gms; Cumin seeds-15 gms; Garam Masala-15 gms; Common salt-15 gms; Olive oil-15 gms",
    "parsedIngredients": [
      "Paneer-150 gms",
      "Sweet potato-180 gms",
      "Peas-250 gms",
      "Onion-125 gms",
      "Chillies-15 gms",
      "Ginger-15 gms",
      "Red chilli Powder-15 gms",
      "Cumin seeds-15 gms",
      "Garam Masala-15 gms",
      "Common salt-15 gms",
      "Olive oil-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-746",
    "name": "No Fat Grilled Chicken Breast with Skimmed Milk Curd",
    "cleanSearchName": "No Fat Grilled Chicken Breast with Skimmed Milk Curd",
    "associativity": "8",
    "associativityCategory": "Gravy Curries, Soups & Stews",
    "region": [
      "Continental"
    ],
    "mealTypes": [
      "Gravy"
    ],
    "category": "Non-veg",
    "allergens": [
      "dairy"
    ],
    "serving": "1 medium bowl",
    "totalWeightGrams": 567,
    "calories": 270,
    "proteinGrams": 42,
    "carbsGrams": 9,
    "fatGrams": 6,
    "fiberGrams": 5,
    "carbonFootprintKgCO2e": 2.0807,
    "ingredients": "Chicken-172 gms; Yoghurt-300 gms; Ginger powder-15 gms; Garlic powder-15 gms; Turmeric powder-15 gms; Cumin seeds-15 gms; Coriander Powder-5 gms; Red chilli Powder-15 gms; Common salt-15 gms",
    "parsedIngredients": [
      "Chicken-172 gms",
      "Yoghurt-300 gms",
      "Ginger powder-15 gms",
      "Garlic powder-15 gms",
      "Turmeric powder-15 gms",
      "Cumin seeds-15 gms",
      "Coriander Powder-5 gms",
      "Red chilli Powder-15 gms",
      "Common salt-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-747",
    "name": "Coffee (Skimmed milk)",
    "cleanSearchName": "Coffee (Skimmed milk)",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "South"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "dairy",
      "caffeine"
    ],
    "serving": "1 cup",
    "totalWeightGrams": 45,
    "calories": 19,
    "proteinGrams": 1,
    "carbsGrams": 1,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.3315,
    "ingredients": "Milk-30 gms; coffee-15 gms",
    "parsedIngredients": [
      "Milk-30 gms",
      "coffee-15 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-748",
    "name": "Nimbupani",
    "cleanSearchName": "Nimbupani",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "citrus"
    ],
    "serving": "4 glass",
    "totalWeightGrams": 132,
    "calories": 11,
    "proteinGrams": 0,
    "carbsGrams": 0,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.0507,
    "ingredients": "Lemon-125 gms; Common salt-7 gms;",
    "parsedIngredients": [
      "Lemon-125 gms",
      "Common salt-7 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-749",
    "name": "Lemon Water",
    "cleanSearchName": "Lemon Water",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "citrus"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 5,
    "calories": 0,
    "proteinGrams": 0,
    "carbsGrams": 0,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.002,
    "ingredients": "Lemon-5 gms",
    "parsedIngredients": [
      "Lemon-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-750",
    "name": "Dalcheeni Water",
    "cleanSearchName": "Dalcheeni Water",
    "associativity": "10",
    "associativityCategory": "Herbal Infusions, Kadha & Wellness Waters",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "cinnamon"
    ],
    "serving": "1 glass",
    "totalWeightGrams": 5,
    "calories": 0,
    "proteinGrams": 0,
    "carbsGrams": 0,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.0175,
    "ingredients": "Cinnamon-5 gms",
    "parsedIngredients": [
      "Cinnamon-5 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-751",
    "name": "Besan Cheela",
    "cleanSearchName": "Besan Cheela",
    "associativity": "1",
    "associativityCategory": "Rotis, Cheelas & Flatbreads",
    "region": [
      "North",
      "West",
      "East"
    ],
    "mealTypes": [
      "Breakfast"
    ],
    "category": "Veg",
    "allergens": [
      "chickpea "
    ],
    "serving": "1 medium",
    "totalWeightGrams": 151,
    "calories": 277,
    "proteinGrams": 15,
    "carbsGrams": 38,
    "fatGrams": 5,
    "fiberGrams": 7,
    "carbonFootprintKgCO2e": 0.204,
    "ingredients": "Onion-15 gms; Tomato-15 gms;  Cumin seeds-15 gms; Coriander leaves-15 gms; Common salt-7 gms; Mustard oil-7 gms; Turmeric powder-15 gms; Besan-62 gms",
    "parsedIngredients": [
      "Onion-15 gms",
      "Tomato-15 gms",
      "Cumin seeds-15 gms",
      "Coriander leaves-15 gms",
      "Common salt-7 gms",
      "Mustard oil-7 gms",
      "Turmeric powder-15 gms",
      "Besan-62 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-752",
    "name": "Filter Coffee Without Sugar",
    "cleanSearchName": "Filter Coffee Without Sugar",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "caffeine"
    ],
    "serving": "2 glass",
    "totalWeightGrams": 280,
    "calories": 60,
    "proteinGrams": 2,
    "carbsGrams": 3,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 1.195,
    "ingredients": "Coffee-30 gms; Milk-250 gms",
    "parsedIngredients": [
      "Coffee-30 gms",
      "Milk-250 gms"
    ],
    "isDuplicateName": false
  },
  {
    "id": "food-753",
    "name": "Black Filter Coffee Without Sugar",
    "cleanSearchName": "Black Filter Coffee Without Sugar",
    "associativity": "12",
    "associativityCategory": "Healthy Milks, Smoothies & Beverages",
    "region": [
      "North",
      "South",
      "East",
      "West"
    ],
    "mealTypes": [
      "Beverages"
    ],
    "category": "Veg",
    "allergens": [
      "caffeine"
    ],
    "serving": "2 cup",
    "totalWeightGrams": 30,
    "calories": 0,
    "proteinGrams": 0,
    "carbsGrams": 0,
    "fatGrams": 0,
    "fiberGrams": 0,
    "carbonFootprintKgCO2e": 0.495,
    "ingredients": "Coffee-30 gms",
    "parsedIngredients": [
      "Coffee-30 gms"
    ],
    "isDuplicateName": false
  }
];

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
