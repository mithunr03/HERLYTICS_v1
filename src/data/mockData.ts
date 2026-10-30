import { Article, Meal, Recipe, UserProfile, AssessmentData, RiskPredictionResult, DailyLog } from '../types';
import { calculateGuidelineAssessmentResult } from './assessmentLogic';

export const initialUserProfile: UserProfile = {
  name: 'Maya Sharma',
  email: 'maya.sharma@example.com',
  age: 26,
  heightCm: 165,
  weightKg: 58.5,
  cycleLength: 29,
  periodDuration: 5,
  goals: ['Cycle Regularity', 'Hormonal Balance', 'Better Sleep & Energy', 'PCOS Awareness'],
  wellnessScore: 84,
  onboarded: true,
  hasCompletedAssessment: false,
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
};

export const defaultAssessment: AssessmentData = {
  // Area A: Basic Profile & Measurements (Q1-Q5)
  age: 26,
  ageGroup: '25-29',
  menarcheAge: 13,
  menarcheStatus: 'started',
  yearsSinceMenarche: 13,
  heightCm: 165,
  weightKg: 58.5,
  weightChangeRecentMonths: 'stable',
  bmi: 21.5,
  bmiCategory: 'Standard Healthy Range (18.5–24.9)',
  bmiAdolescentNote: undefined,

  // Area B: Menstrual Patterns (Q6-Q9)
  cycleRegularity: 'regular',
  cycleLengthDays: 29,
  cycleLengthCategory: 'normal_21_35',
  missedPeriodsGaps: 'no_gaps_over_35',
  patternsChangedOverTime: 'always_regular',
  bleedingDurationDays: 5,
  bleedingFlow: 'moderate',
  periodsPerYear: '9-12',

  // Area C: Relevant Symptoms (Q10-Q13)
  acneExperience: 'mild_period',
  facialBodyHair: 'none_peach_fuzz',
  scalpThinning: 'none_normal',
  priorPCOSEvaluation: 'none',

  // Area D: Medical & Family History (Q14-Q16)
  bloodGlucoseMetabolic: 'normal_tested',
  familyPCOSDiabetes: 'family_type2_diabetes',
  medicalConditionsMedications: {
    onHormonalBirthControl: false,
    hasThyroidCondition: false,
    hasElevatedProlactin: false,
    hasRecentAcuteStressOrWeightLoss: false,
    noneOfAbove: true,
    notSureOrPreferNotToSay: false,
  },

  // Area E: Lifestyle & Wellbeing (Q17-Q20)
  sleepHoursHabit: '7_to_8_5',
  sleepQualityHabit: 'fair',
  stressLevelCurrent: 'moderate',
  physicalActivityLevel: 'moderate_3_4_days',
  eatingPattern: 'balanced_whole_foods',

  // Legacy mappings for backward compatibility
  symptoms: {
    acne: true,
    facialHair: false,
    hairLoss: false,
    weightGain: false,
    moodSwings: true,
    fatigue: true,
    pelvicPain: false,
    darkPatches: false,
  },
  lifestyle: {
    sleepHours: 7.2,
    waterLiters: 1.8,
    exerciseFrequency: '3-4_times',
    stressLevel: 'moderate',
    sugarIntake: 'moderate',
  },
  healthBackground: {
    familyPCOS: false,
    familyDiabetes: true,
    familyThyroid: false,
    previousClinicalCheck: true,
  },
  androgenLevels: {
    facialHairSeverity: 'none',
    acneSeverity: 'mild_occasional',
    hairThinningSeverity: 'none',
  },
  metabolicHealth: {
    glucoseHistory: 'normal',
    darkenedSkinFolds: 'no',
    bloodPressureOrLipids: 'normal',
  },
  familyHistoryDetails: {
    familyPCOS: 'no',
    familyType2Diabetes: 'yes',
    familyCardiovascular: 'no',
  },
  medicalHistory: {
    onHormonalContraception: 'no',
    thyroidCondition: 'none',
    elevatedProlactin: 'no',
    extremeStressOrWeightChange: false,
  },
  lifestyleWellbeing: {
    sleepQuality: 'fair',
    dietaryFocus: 'balanced',
  },
};

export const defaultRiskResult: RiskPredictionResult = calculateGuidelineAssessmentResult(defaultAssessment);

export const mockRecipes: Recipe[] = [
  {
    id: 'rec-1',
    title: 'Avocado & Sprouted Chickpea Buddha Bowl',
    category: 'PCOS Friendly',
    prepTime: '20 mins',
    calories: 380,
    proteinGrams: 14,
    carbsGrams: 42,
    fatGrams: 18,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    tags: ['PCOS Friendly', 'High Fiber', 'Vegan', 'Anti-inflammatory'],
    healthBenefits: 'Rich in healthy monounsaturated fats and bioavailable zinc to support insulin sensitivity and skin clarity.',
    ingredients: [
      '1 cup sprouted chickpeas (boiled)',
      '1/2 ripe avocado, sliced',
      '1/2 cup cooked quinoa',
      '1 cup fresh baby spinach & arugula',
      '1 tbsp toasted pumpkin & sunflower seeds',
      'Dressing: Lemon juice, extra virgin olive oil, tahini, pinch of turmeric & pink salt'
    ],
    instructions: [
      'Rinse sprouted chickpeas and steam or lightly sauté in 1 tsp olive oil for 3 minutes.',
      'Arrange baby spinach and arugula as the base in a warm bowl.',
      'Add cooked quinoa, sprouted chickpeas, and sliced avocado side by side.',
      'Whisk lemon juice, tahini, olive oil, turmeric, salt, and 1 tbsp warm water into a smooth dressing.',
      'Drizzle dressing over the bowl and garnish with toasted pumpkin and sunflower seeds.'
    ],
    isFavorite: true,
  },
  {
    id: 'rec-2',
    title: 'Golden Turmeric & Golden Seed Hormone Smoothie',
    category: 'Hormone Balance',
    prepTime: '8 mins',
    calories: 290,
    proteinGrams: 12,
    carbsGrams: 32,
    fatGrams: 13,
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=800&q=80',
    tags: ['Hormone Balance', 'Anti-inflammatory', 'Quick & Easy'],
    healthBenefits: 'Curcumin supports hepatic estrogen clearance while chia and flaxseeds aid healthy luteal phase progesterone balance.',
    ingredients: [
      '1 cup unsweetened almond or coconut milk',
      '1/2 frozen banana or 1/2 cup frozen cauliflower florets',
      '1/2 tsp fresh grated turmeric (or organic turmeric powder)',
      '1/4 tsp organic cinnamon',
      '1 tbsp ground flaxseeds',
      '1 tbsp plant protein or collagen powder',
      '1 pinch fresh black pepper (enhances curcumin absorption)'
    ],
    instructions: [
      'Add unsweetened almond milk and frozen fruit/cauliflower to a high-speed blender.',
      'Add turmeric, cinnamon, ground flaxseed, plant protein, and a pinch of black pepper.',
      'Blend on high for 60 seconds until creamy and golden.',
      'Pour into a chilled glass and top with extra ground flaxseeds.'
    ],
    isFavorite: false,
  },
  {
    id: 'rec-3',
    title: 'Herb-Crusted Baked Salmon with Roasted Asparagus',
    category: 'Anti-inflammatory',
    prepTime: '25 mins',
    calories: 450,
    proteinGrams: 36,
    carbsGrams: 12,
    fatGrams: 28,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    tags: ['Anti-inflammatory', 'High Protein', 'PCOS Friendly'],
    healthBenefits: 'Loaded with potent Omega-3 DHA/EPA that calms systemic follicular inflammation and promotes calm mood.',
    ingredients: [
      '180g wild-caught salmon fillet',
      '1 bundle fresh asparagus, woody ends trimmed',
      '1 tbsp extra virgin olive oil',
      '1 tbsp minced fresh dill and parsley',
      '1 clove garlic, minced',
      'Lemon wedges for serving'
    ],
    instructions: [
      'Preheat oven to 200°C (400°F) and line a baking sheet with parchment paper.',
      'Mix olive oil, minced garlic, fresh herbs, salt, and black pepper in a small bowl.',
      'Place salmon fillet and asparagus on the baking sheet and brush evenly with the herb mixture.',
      'Bake for 12 to 15 minutes until salmon flakes easily with a fork.',
      'Serve warm with a squeeze of fresh lemon juice.'
    ],
    isFavorite: true,
  },
  {
    id: 'rec-4',
    title: 'Spiced Lentil & Berry Antioxidant Bowl',
    category: 'High Protein',
    prepTime: '15 mins',
    calories: 340,
    proteinGrams: 18,
    carbsGrams: 48,
    fatGrams: 8,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    tags: ['High Protein', 'Vegetarian', 'Anti-inflammatory'],
    healthBenefits: 'High in bioavailable iron and polyphenol antioxidants that combat cellular oxidative stress during your cycle.',
    ingredients: [
      '1 cup cooked brown lentils',
      '1/2 cup fresh wild blueberries or raspberries',
      '1/2 cup diced cucumbers & cherry tomatoes',
      '2 tbsp crumbled feta or vegan almond cheese',
      '1 tbsp pumpkin seeds',
      'Dressing: Apple cider vinegar & extra virgin olive oil'
    ],
    instructions: [
      'In a salad bowl, toss cooked lentils with apple cider vinegar and olive oil.',
      'Add cucumbers, cherry tomatoes, and fresh berries.',
      'Top with crumbled cheese and pumpkin seeds.',
      'Serve cold or at room temperature.'
    ],
    isFavorite: false,
  }
];

export const mockDailyMeals: Meal[] = [
  {
    id: 'm-1',
    type: 'Breakfast',
    name: 'Cinnamon Seed Overnight Oats & Berries',
    calories: 320,
    proteinGrams: 14,
    carbsGrams: 44,
    fatGrams: 10,
    prepTime: '5 mins (prep night before)',
    image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=800&q=80',
    tags: ['Low GI', 'PCOS Friendly', 'High Fiber'],
    ingredients: ['1/2 cup rolled oats', '1 tbsp chia seeds', '1/2 tsp cinnamon', '1 cup almond milk', '1/2 cup raspberries']
  },
  {
    id: 'm-2',
    type: 'Lunch',
    name: 'Grilled Tofu & Quinoa Rainbow Power Bowl',
    calories: 410,
    proteinGrams: 22,
    carbsGrams: 48,
    fatGrams: 14,
    prepTime: '20 mins',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    tags: ['Plant Power', 'High Protein', 'Anti-inflammatory'],
    ingredients: ['150g firm organic tofu', '1/2 cup cooked quinoa', '1/2 avocado', '1 cup steamed broccoli & purple cabbage']
  },
  {
    id: 'm-3',
    type: 'Snack',
    name: 'Toasted Almonds & Dark Cocoa Bark (85%)',
    calories: 180,
    proteinGrams: 6,
    carbsGrams: 12,
    fatGrams: 12,
    prepTime: '2 mins',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
    tags: ['Magnesium Rich', 'Stress Relief'],
    ingredients: ['15 raw almonds', '2 squares 85% dark chocolate', 'Pinch of sea salt']
  },
  {
    id: 'm-4',
    type: 'Dinner',
    name: 'Herb Baked Paneer/Tofu with Steamed Vegetables',
    calories: 390,
    proteinGrams: 24,
    carbsGrams: 20,
    fatGrams: 22,
    prepTime: '20 mins',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    tags: ['Comforting', 'Hormone Balanced'],
    ingredients: ['150g cottage cheese (paneer) or tofu', '1 cup roasted zucchini & peppers', '1 tsp olive oil', 'Fresh herbs']
  }
];

export const mockArticles: Article[] = [
  {
    id: 'art-1',
    title: 'Understanding Your Cycle: The Four Phases of Female Vitality',
    category: 'Menstrual Health',
    readTime: '5 min read',
    description: 'Learn how your hormones naturally fluctuate through the Menstrual, Follicular, Ovulatory, and Luteal phases — and how to optimize your lifestyle for each.',
    author: 'Dr. Ananya Roy, Women’s Wellness Advisor',
    date: 'Oct 2, 2026',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    content: [
      'Your menstrual cycle is much more than just your monthly period. It is a dynamic, 28-to-35 day biological rhythm driven by four key hormones: Estrogen, Progesterone, Follicle-Stimulating Hormone (FSH), and Luteinizing Hormone (LH).',
      'Phase 1: Menstrual Phase (Days 1–5)\nDuring this phase, hormone levels are at their lowest. Focus on rest, warm nutrient-dense foods (soups, stews), iron-rich greens, and gentle movement like slow walking or gentle yoga.',
      'Phase 2: Follicular Phase (Days 6–13)\nEstrogen rises, boosting your energy, mental clarity, and social confidence. This is the optimal time for creative projects, trying new exercises, and fresh crunchy salads.',
      'Phase 3: Ovulatory Phase (Days 14–16)\nEstrogen peaks alongside an LH surge. Libido and energy reach high levels. Seed cycling (sunflower and sesame) and anti-inflammatory berries help flush surplus estrogen.',
      'Phase 4: Luteal Phase (Days 17–28)\nProgesterone becomes dominant. Energy turns inward. If progesterone drops too fast, PMS symptoms may arise. Support your body with complex carbs, magnesium-rich dark chocolate, and extra hydration.'
    ]
  },
  {
    id: 'art-2',
    title: 'Demystifying PCOS: Root Causes, Insulin & Gentle Prevention',
    category: 'PCOS',
    readTime: '7 min read',
    description: 'An evidence-informed, compassionate look into polycystic ovary syndrome, insulin sensitivity, and holistic lifestyle strategies for lifelong harmony.',
    author: 'Elena Vance, MS Nutritionist',
    date: 'Sep 28, 2026',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    content: [
      'Polycystic Ovary Syndrome (PCOS) is one of the most common endocrine conditions among women globally, affecting roughly 1 in 10 women of reproductive age. However, there is still widespread mystery and fear around it.',
      'First, remember: HerLytics is built on preventive awareness. A risk insight is an invitation to tune into your body, not a medical sentence.',
      'Underlying Mechanisms:\nIn up to 70% of women with PCOS symptoms, insulin resistance plays a central role. When body cells resist insulin, the pancreas produces more. Higher blood insulin can stimulate ovaries to produce excess androgenic hormones (like testosterone), leading to irregular cycles, acne, or unwanted hair growth.',
      'Actionable Lifestyle Pillars:\n1. Glucose-balanced meals: Pair every carbohydrate with protein and healthy fats.\n2. Morning sunlight & circadian alignment: Helps lower baseline cortisol.\n3. Strength & resistance exercise: Increases muscle glucose uptake without spiking stress hormones.\n4. Mindful hydration & targeted sleep.'
    ]
  },
  {
    id: 'art-3',
    title: 'Nourishing Your Nervous System: Cortisol, Sleep & Hormonal Quietude',
    category: 'Stress Management',
    readTime: '4 min read',
    description: 'Discover how chronic micro-stress impacts ovulation and progesterone, plus simple daily rituals to restore calm.',
    author: 'Maya Lin, Somatic Specialist',
    date: 'Sep 24, 2026',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80',
    content: [
      'When your nervous system senses constant deadlines, notification fatigue, or sleep deficit, it signals the adrenal glands to secrete cortisol and adrenaline.',
      'The "Pregnenolone Steal":\nBecause your body prioritizes immediate survival over reproduction, high cortisol demands can divert precursor hormones away from progesterone production.',
      'Practical Micro-Habits for Peace:\n- 4-7-8 Breathing before sleep.\n- Evening digital sunset 1 hour before bed.\n- Herbal tea rituals with chamomile or ashwagandha.\n- Gentle morning stretching.'
    ]
  },
  {
    id: 'art-4',
    title: 'Seed Cycling 101: A Simple Daily Ritual for Natural Balance',
    category: 'Nutrition',
    readTime: '6 min read',
    description: 'How rotating pumpkin, flax, sesame, and sunflower seeds throughout your cycle supports natural estrogen and progesterone harmony.',
    author: 'Sophia Chen, Holistic Culinary Therapist',
    date: 'Sep 19, 2026',
    image: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=800&q=80',
    content: [
      'Seed cycling is an ancient, gentle nutrition practice that involves eating specific freshly ground seeds during the two main phases of your menstrual cycle.',
      'Days 1 to 14 (Follicular Phase):\n1 tablespoon freshly ground flaxseeds + 1 tablespoon freshly ground pumpkin seeds. Rich in lignans and zinc to support healthy estrogen metabolism.',
      'Days 15 to 28 (Luteal Phase):\n1 tablespoon freshly ground sunflower seeds + 1 tablespoon freshly ground sesame seeds. High in vitamin E and selenium to promote progesterone production.',
      'Easy ways to consume: Blend into your morning HerLytics smoothie or sprinkle over warm oat porridge.'
    ]
  }
];

export const mockDailyLogs: DailyLog[] = [
  { date: 'Mon', waterIntakeLiters: 1.6, sleepHours: 6.5, sleepQuality: 'fair', steps: 4200, weightKg: 58.6, mood: 'Calm' },
  { date: 'Tue', waterIntakeLiters: 2.1, sleepHours: 7.2, sleepQuality: 'good', steps: 6800, weightKg: 58.5, mood: 'Energized' },
  { date: 'Wed', waterIntakeLiters: 1.8, sleepHours: 6.8, sleepQuality: 'fair', steps: 5100, weightKg: 58.5, mood: 'Focused' },
  { date: 'Thu', waterIntakeLiters: 2.4, sleepHours: 8.0, sleepQuality: 'restful', steps: 8400, weightKg: 58.4, mood: 'Peaceful' },
  { date: 'Fri', waterIntakeLiters: 2.0, sleepHours: 7.5, sleepQuality: 'good', steps: 7200, weightKg: 58.5, mood: 'Balanced' },
  { date: 'Sat', waterIntakeLiters: 2.2, sleepHours: 8.2, sleepQuality: 'restful', steps: 9100, weightKg: 58.3, mood: 'Joyful' },
  { date: 'Sun', waterIntakeLiters: 1.9, sleepHours: 7.4, sleepQuality: 'good', steps: 6300, weightKg: 58.5, mood: 'Reflective' },
];

export const mockHealthyFoods = [
  {
    name: 'Grilled Paneer / Tofu Quinoa Salad',
    badge: 'Protein Rich · Balanced GI',
    desc: 'High protein option packed with roasted seeds, cucumbers, and olive oil dressing.',
    calories: '380 kcal',
    protein: '22g Protein',
    searchQuery: 'healthy grilled paneer quinoa salad near me',
  },
  {
    name: 'Wild Salmon & Avocado Poke Bowl',
    badge: 'Omega-3 Rich · Hormone Harmony',
    desc: 'Loaded with wild salmon, avocado slices, brown rice, edamame, and sesame.',
    calories: '440 kcal',
    protein: '28g Protein',
    searchQuery: 'salmon avocado bowl restaurant near me',
  },
  {
    name: 'Spiced Lentil & Mediterranean Hummus Wrap',
    badge: 'High Fiber · Plant Power',
    desc: 'Whole wheat wrap stuffed with spiced sprouted lentils, hummus, spinach, and olives.',
    calories: '350 kcal',
    protein: '16g Protein',
    searchQuery: 'mediterranean lentil wrap healthy food near me',
  },
  {
    name: 'Golden Turmeric Roasted Cauliflower & Chickpea Salad',
    badge: 'Anti-inflammatory · Low Carb',
    desc: 'Warm roasted cauliflower with turmeric spices, crispy chickpeas, and tahini.',
    calories: '310 kcal',
    protein: '14g Protein',
    searchQuery: 'turmeric cauliflower salad healthy cafe',
  }
];
