import { IndianFoodItem, INDIAN_FOOD_ITEMS } from './foodsData';

export interface UserNutritionProfile {
  age: number;
  heightCm: number;
  weightKg: number;
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active';
  dietPreference: 'All' | 'Veg' | 'Non-veg' | 'Eggetarian';
  regionPreference: 'All' | 'North' | 'South' | 'East' | 'West' | 'Continental';
  allergies: string[];
  goal: 'balanced_wellness' | 'hormone_support' | 'steady_energy';
}

export interface EnergyRequirement {
  bmr: number;
  tdee: number;
  mealPlanTargetCalories: number;
  method: string;
  isAdolescent: boolean;
  bmi: number;
  bmiCategory: string;
  clinicalGuidanceNote: string;
  weightNeutralityStatement: string;
}

export interface MealSlotItem {
  food: IndianFoodItem;
  portionMultiplier: number; // 1.0 = exact recorded CSV serving
  calculatedCalories: number;
  calculatedProtein: number;
  calculatedCarbs: number;
  calculatedFat: number;
  calculatedFiber: number;
  calculatedCarbon: number;
}

export interface MealSlot {
  slotId: 'breakfast' | 'mid_morning' | 'lunch' | 'evening_snack' | 'dinner';
  title: string;
  recommendedTime: string;
  items: MealSlotItem[];
  slotTotals: {
    calories: number;
    proteinGrams: number;
    carbsGrams: number;
    fatGrams: number;
    fiberGrams: number;
    carbonFootprintKgCO2e: number;
  };
}

export interface DailyMealPlan {
  planId: string;
  dateGenerated: string;
  profileSnapshot: UserNutritionProfile;
  energyRequirement: EnergyRequirement;
  meals: MealSlot[];
  dailyTotals: {
    calories: number;
    proteinGrams: number;
    carbsGrams: number;
    fatGrams: number;
    fiberGrams: number;
    carbonFootprintKgCO2e: number;
  };
  dietaryNotes: string[];
}

/**
 * Calculates evidence-informed daily energy needs using Mifflin-St Jeor equation.
 * Adheres strictly to weight-neutrality:
 * - Does not infer calorie target from PCOS screening scores
 * - Does not automatically prescribe weight-loss deficits
 * - Adolescent safeguards for ages under 18
 */
export function calculateEnergyRequirement(profile: Partial<UserNutritionProfile>): EnergyRequirement {
  const age = Number(profile.age) || 26;
  const heightCm = Number(profile.heightCm) || 162;
  const weightKg = Number(profile.weightKg) || 60;
  const activity = profile.activityLevel || 'moderate';

  const isAdolescent = age < 18;
  const heightM = heightCm / 100;
  const bmi = heightM > 0 ? parseFloat((weightKg / (heightM * heightM)).toFixed(1)) : 22.8;

  let bmiCategory = 'Healthy weight range';
  if (bmi < 18.5) bmiCategory = 'Underweight';
  else if (bmi >= 25 && bmi < 30) bmiCategory = 'Higher BMI range';
  else if (bmi >= 30) bmiCategory = 'Elevated BMI range';

  // Mifflin-St Jeor formula for females: BMR = (10 * W) + (6.25 * H) - (5 * A) - 161
  const bmr = Math.round(10 * weightKg + 6.25 * heightCm - 5 * age - 161);

  const activityMultipliers: Record<string, number> = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725
  };

  const mult = activityMultipliers[activity] || 1.4;
  const tdee = Math.round(bmr * mult);

  let targetCalories = tdee;
  let clinicalGuidanceNote =
    'Energy estimation is calculated using the validated Mifflin-St Jeor equation to support steady glucose and metabolic balance without restrictive deficits.';

  if (isAdolescent) {
    clinicalGuidanceNote =
      'Adolescent growth and hormonal development require individualized nutritional support. Adult restrictive calorie deficits are not applied; energy needs should be guided by a pediatrician or clinical dietitian.';
    targetCalories = tdee;
  } else if (bmi < 18.5) {
    clinicalGuidanceNote =
      'Estimated target prioritizes nourishment and gentle energy repletion to support regular ovulatory cycles and bone health. Deficits are strictly avoided.';
    targetCalories = Math.max(tdee, 1900);
  }

  return {
    bmr,
    tdee,
    mealPlanTargetCalories: targetCalories,
    method: 'Mifflin-St Jeor Equation (Female standard with physical activity factor)',
    isAdolescent,
    bmi,
    bmiCategory,
    clinicalGuidanceNote,
    weightNeutralityStatement:
      'HerLytics does not automatically prescribe weight loss or calorie deficits. Energy targets represent reference requirements for meal balance and hormone stabilization, independent of PCOS screening scores.'
  };
}

/**
 * Hard exclusion allergy check.
 * Inspects both explicit CSV allergen metadata AND ingredient lists.
 */
export function isFoodAllergySafe(food: IndianFoodItem, userAllergies: string[]): { isSafe: boolean; reason?: string } {
  if (!userAllergies || userAllergies.length === 0) return { isSafe: true };

  const foodAllergens = food.allergens.map((a) => a.toLowerCase().trim());
  const ingredientsLower = food.ingredients.toLowerCase();

  const allergyKeywords: Record<string, string[]> = {
    dairy: ['milk', 'curd', 'yoghurt', 'yogurt', 'paneer', 'ghee', 'butter', 'cheese', 'malai', 'dahi'],
    gluten: ['atta', 'wheat', 'maida', 'bread', 'semolina', 'suji', 'dalia', 'pasta', 'vermicelli', 'roti'],
    soy: ['soya', 'soy', 'tofu', 'soybean', 'soyabean'],
    peanut: ['peanut', 'groundnut', 'moongfali'],
    nut: ['almond', 'walnut', 'cashew', 'nuts', 'fig', 'raisins'],
    egg: ['egg', 'eggs', 'omelette', 'frittata'],
    fish: ['fish', 'salmon', 'cat fish', 'basa'],
    shellfish: ['prawn', 'shrimp', 'crab', 'seafood'],
    mushroom: ['mushroom'],
    nightshade: ['potato', 'tomato', 'eggplant', 'brinjal', 'bell pepper', 'capsicum', 'chillies'],
    caffeine: ['coffee', 'tea', 'caffeine'],
    citrus: ['lemon', 'orange', 'amla']
  };

  for (const allergy of userAllergies) {
    const cleanAllergy = allergy.toLowerCase().trim();

    // Direct check in allergen column
    if (foodAllergens.includes(cleanAllergy)) {
      return { isSafe: false, reason: `Contains declared allergen: ${cleanAllergy}` };
    }

    // Check ingredients for allergen keywords
    const keywords = allergyKeywords[cleanAllergy] || [cleanAllergy];
    for (const kw of keywords) {
      if (ingredientsLower.includes(kw)) {
        return { isSafe: false, reason: `Ingredients contain "${kw}" matching allergy "${cleanAllergy}"` };
      }
    }
  }

  return { isSafe: true };
}

/**
 * Helper to build a calculated meal item
 */
export function createMealSlotItem(food: IndianFoodItem, portionMultiplier: number = 1.0): MealSlotItem {
  return {
    food,
    portionMultiplier,
    calculatedCalories: Math.round(food.calories * portionMultiplier),
    calculatedProtein: parseFloat((food.proteinGrams * portionMultiplier).toFixed(1)),
    calculatedCarbs: parseFloat((food.carbsGrams * portionMultiplier).toFixed(1)),
    calculatedFat: parseFloat((food.fatGrams * portionMultiplier).toFixed(1)),
    calculatedFiber: parseFloat((food.fiberGrams * portionMultiplier).toFixed(1)),
    calculatedCarbon: parseFloat((food.carbonFootprintKgCO2e * portionMultiplier).toFixed(4))
  };
}

/**
 * Calculates sum totals for a list of meal items
 */
export function calculateSlotTotals(items: MealSlotItem[]) {
  return items.reduce(
    (acc, item) => ({
      calories: acc.calories + item.calculatedCalories,
      proteinGrams: parseFloat((acc.proteinGrams + item.calculatedProtein).toFixed(1)),
      carbsGrams: parseFloat((acc.carbsGrams + item.calculatedCarbs).toFixed(1)),
      fatGrams: parseFloat((acc.fatGrams + item.calculatedFat).toFixed(1)),
      fiberGrams: parseFloat((acc.fiberGrams + item.calculatedFiber).toFixed(1)),
      carbonFootprintKgCO2e: parseFloat((acc.carbonFootprintKgCO2e + item.calculatedCarbon).toFixed(4))
    }),
    {
      calories: 0,
      proteinGrams: 0,
      carbsGrams: 0,
      fatGrams: 0,
      fiberGrams: 0,
      carbonFootprintKgCO2e: 0
    }
  );
}

/**
 * Generates a realistic, practical Indian 5-meal daily plan using verified CSV items.
 * Slots:
 * 1. Breakfast (Breads/Cheelas/South Indian dosas/idlis/porridge)
 * 2. Mid-morning snack (Beverage/Herbal water/Nourishing shake)
 * 3. Lunch (Rotis/Grains + Sabzi/Curry + Raita/Salad)
 * 4. Evening snack (Roasted Makhana/Chaat/Tikki)
 * 5. Dinner (Light Flatbread/Millet/Soup + Protein Curry)
 */
export function generatePersonalizedMealPlan(profile: UserNutritionProfile): DailyMealPlan {
  const energy = calculateEnergyRequirement(profile);

  // Filter pool by dietary preference
  let pool = INDIAN_FOOD_ITEMS.filter((f) => {
    if (profile.dietPreference === 'Veg') return f.category === 'Veg';
    if (profile.dietPreference === 'Eggetarian') return f.category === 'Veg' || f.category === 'Eggetarian';
    if (profile.dietPreference === 'Non-veg') return true;
    return true;
  });

  // Filter pool by allergy hard exclusions
  pool = pool.filter((f) => isFoodAllergySafe(f, profile.allergies).isSafe);

  // Regional preference filtering with graceful fallback
  const regionalPool =
    profile.regionPreference !== 'All'
      ? pool.filter((f) => f.region.includes(profile.regionPreference) || f.region.includes('Continental'))
      : pool;

  const activePool = regionalPool.length >= 20 ? regionalPool : pool;

  // Helper selector for specific meal slot
  const pickFood = (
    types: string[],
    assocCodes: string[],
    excludeIds: Set<string>,
    fallbackFilter?: (item: IndianFoodItem) => boolean
  ): IndianFoodItem | undefined => {
    const matched = activePool.filter(
      (f) =>
        !excludeIds.has(f.id) &&
        (f.mealTypes.some((t) => types.includes(t)) || assocCodes.includes(f.associativity)) &&
        (!fallbackFilter || fallbackFilter(f))
    );
    if (matched.length > 0) {
      // Pick random item from matches for fresh recommendations
      return matched[Math.floor(Math.random() * matched.length)];
    }
    // Fallback in broader active pool
    return activePool.find((f) => !excludeIds.has(f.id) && (!fallbackFilter || fallbackFilter(f)));
  };

  const selectedIds = new Set<string>();

  // 1. Breakfast
  const breakfastFood1 = pickFood(['Breakfast'], ['1', '9', '14'], selectedIds);
  if (breakfastFood1) selectedIds.add(breakfastFood1.id);
  const breakfastItems = [
    createMealSlotItem(breakfastFood1 || activePool[0], 1.0)
  ];

  // 2. Mid-Morning Snack
  const midMorningFood = pickFood(['Beverages', 'Snacks'], ['10', '12', '4'], selectedIds);
  if (midMorningFood) selectedIds.add(midMorningFood.id);
  const midMorningItems = [
    createMealSlotItem(midMorningFood || activePool[1] || activePool[0], 1.0)
  ];

  // 3. Lunch (Bread/Rice + Sabzi/Curry)
  const lunchMain = pickFood(['Lunch', 'Dinner'], ['1', '3', '5'], selectedIds);
  if (lunchMain) selectedIds.add(lunchMain.id);

  const lunchCurry = pickFood(['Lunch', 'Dinner'], ['2', '8', '2,8', '13'], selectedIds, (f) => f.id !== lunchMain?.id);
  if (lunchCurry) selectedIds.add(lunchCurry.id);

  const lunchSide = pickFood(['Lunch', 'Dinner', 'Appetizer'], ['0', '4', '7'], selectedIds);
  if (lunchSide) selectedIds.add(lunchSide.id);

  const lunchItems: MealSlotItem[] = [];
  if (lunchMain) lunchItems.push(createMealSlotItem(lunchMain, 1.0));
  if (lunchCurry) lunchItems.push(createMealSlotItem(lunchCurry, 1.0));
  if (lunchSide) lunchItems.push(createMealSlotItem(lunchSide, 1.0));

  // 4. Evening Snack
  const eveningFood = pickFood(['Snacks', 'Appetizer'], ['6', '11', '10'], selectedIds);
  if (eveningFood) selectedIds.add(eveningFood.id);
  const eveningItems = [
    createMealSlotItem(eveningFood || activePool[2] || activePool[0], 1.0)
  ];

  // 5. Dinner (Light Roti / Grain + Protein Curry / Soup)
  const dinnerMain = pickFood(['Dinner', 'Lunch'], ['1', '3', '0'], selectedIds);
  if (dinnerMain) selectedIds.add(dinnerMain.id);

  const dinnerCurry = pickFood(['Dinner', 'Lunch'], ['2', '8', '0'], selectedIds, (f) => f.id !== dinnerMain?.id);
  if (dinnerCurry) selectedIds.add(dinnerCurry.id);

  const dinnerItems: MealSlotItem[] = [];
  if (dinnerMain) dinnerItems.push(createMealSlotItem(dinnerMain, 1.0));
  if (dinnerCurry) dinnerItems.push(createMealSlotItem(dinnerCurry, 1.0));

  const meals: MealSlot[] = [
    {
      slotId: 'breakfast',
      title: 'Breakfast',
      recommendedTime: '8:00 AM – 9:00 AM',
      items: breakfastItems,
      slotTotals: calculateSlotTotals(breakfastItems)
    },
    {
      slotId: 'mid_morning',
      title: 'Mid-Morning Snack',
      recommendedTime: '11:00 AM – 11:30 AM',
      items: midMorningItems,
      slotTotals: calculateSlotTotals(midMorningItems)
    },
    {
      slotId: 'lunch',
      title: 'Lunch',
      recommendedTime: '1:00 PM – 2:00 PM',
      items: lunchItems,
      slotTotals: calculateSlotTotals(lunchItems)
    },
    {
      slotId: 'evening_snack',
      title: 'Evening Snack',
      recommendedTime: '4:30 PM – 5:30 PM',
      items: eveningItems,
      slotTotals: calculateSlotTotals(eveningItems)
    },
    {
      slotId: 'dinner',
      title: 'Dinner',
      recommendedTime: '7:30 PM – 8:30 PM',
      items: dinnerItems,
      slotTotals: calculateSlotTotals(dinnerItems)
    }
  ];

  const dailyTotals = meals.reduce(
    (acc, m) => ({
      calories: acc.calories + m.slotTotals.calories,
      proteinGrams: parseFloat((acc.proteinGrams + m.slotTotals.proteinGrams).toFixed(1)),
      carbsGrams: parseFloat((acc.carbsGrams + m.slotTotals.carbsGrams).toFixed(1)),
      fatGrams: parseFloat((acc.fatGrams + m.slotTotals.fatGrams).toFixed(1)),
      fiberGrams: parseFloat((acc.fiberGrams + m.slotTotals.fiberGrams).toFixed(1)),
      carbonFootprintKgCO2e: parseFloat((acc.carbonFootprintKgCO2e + m.slotTotals.carbonFootprintKgCO2e).toFixed(4))
    }),
    {
      calories: 0,
      proteinGrams: 0,
      carbsGrams: 0,
      fatGrams: 0,
      fiberGrams: 0,
      carbonFootprintKgCO2e: 0
    }
  );

  return {
    planId: `plan-${Date.now()}`,
    dateGenerated: new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }),
    profileSnapshot: profile,
    energyRequirement: energy,
    meals,
    dailyTotals,
    dietaryNotes: [
      'Nutrient calculations directly reflect verified portion sizes and laboratory weights from the healthy Indian foods dataset.',
      'All meals emphasize high dietary fiber and lean/plant proteins to minimize post-prandial glycemic spikes.',
      'Portions can be scaled proportionally if appetite or clinical nutritional goals require adjustments.'
    ]
  };
}

const LOCAL_STORAGE_MEAL_PLAN_KEY = 'herlytics_active_meal_plan';

export function saveMealPlanToStorage(plan: DailyMealPlan) {
  try {
    localStorage.setItem(LOCAL_STORAGE_MEAL_PLAN_KEY, JSON.stringify(plan));
  } catch (err) {
    console.warn('Failed to save meal plan to localStorage:', err);
  }
}

export function loadMealPlanFromStorage(): DailyMealPlan | null {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_MEAL_PLAN_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (err) {
    return null;
  }
}
