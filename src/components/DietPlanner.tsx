import React, { useState, useEffect } from 'react';
import { AppScreen, UserProfile } from '../types';
import {
  DailyMealPlan,
  generatePersonalizedMealPlan,
  saveMealPlanToStorage,
  loadMealPlanFromStorage,
  UserNutritionProfile,
  calculateSlotTotals
} from '../data/dietEngine';
import { FoodCard } from './FoodCard';
import { ALL_REGIONS, ALL_ALLERGENS } from '../data/foodsData';
import { generateDietChartPdf } from '../utils/dietChartPdf';
import {
  Sparkles,
  Download,
  RotateCw,
  Filter,
  Flame,
  ShieldAlert,
  Leaf,
  Info,
  Calendar,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface DietPlannerProps {
  setScreen: (screen: AppScreen) => void;
  userProfile?: UserProfile;
}

export const DietPlanner: React.FC<DietPlannerProps> = ({ setScreen, userProfile }) => {
  // Try to prefill from userProfile or assessment draft
  const initialAge = userProfile?.age || 26;
  const initialHeight = userProfile?.heightCm || 162;
  const initialWeight = userProfile?.weightKg || 60;

  const [dietPreference, setDietPreference] = useState<'All' | 'Veg' | 'Non-veg' | 'Eggetarian'>('Veg');
  const [regionPreference, setRegionPreference] = useState<'All' | 'North' | 'South' | 'East' | 'West' | 'Continental'>('All');
  const [selectedAllergies, setSelectedAllergies] = useState<string[]>([]);
  const [activityLevel, setActivityLevel] = useState<'sedentary' | 'light' | 'moderate' | 'active'>('moderate');
  const [userCity, setUserCity] = useState<string>('');

  const [mealPlan, setMealPlan] = useState<DailyMealPlan | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'breakfast' | 'mid_morning' | 'lunch' | 'evening_snack' | 'dinner'>('all');
  const [showConfig, setShowConfig] = useState(false);

  // Initialize or load meal plan
  useEffect(() => {
    const saved = loadMealPlanFromStorage();
    if (saved) {
      setMealPlan(saved);
      if (saved.profileSnapshot) {
        setDietPreference(saved.profileSnapshot.dietPreference || 'Veg');
        setRegionPreference(saved.profileSnapshot.regionPreference || 'All');
        setSelectedAllergies(saved.profileSnapshot.allergies || []);
        setActivityLevel(saved.profileSnapshot.activityLevel || 'moderate');
      }
    } else {
      generateNewPlan();
    }
  }, []);

  const generateNewPlan = (
    overrideDiet = dietPreference,
    overrideRegion = regionPreference,
    overrideAllergies = selectedAllergies
  ) => {
    const profile: UserNutritionProfile = {
      age: initialAge,
      heightCm: initialHeight,
      weightKg: initialWeight,
      activityLevel,
      dietPreference: overrideDiet,
      regionPreference: overrideRegion,
      allergies: overrideAllergies,
      goal: 'hormone_support'
    };

    const newPlan = generatePersonalizedMealPlan(profile);
    setMealPlan(newPlan);
    saveMealPlanToStorage(newPlan);
  };

  const toggleAllergy = (allergy: string) => {
    const updated = selectedAllergies.includes(allergy)
      ? selectedAllergies.filter((a) => a !== allergy)
      : [...selectedAllergies, allergy];
    setSelectedAllergies(updated);
    generateNewPlan(dietPreference, regionPreference, updated);
  };

  const handlePortionChange = (slotId: string, itemIndex: number, newMultiplier: number) => {
    if (!mealPlan) return;
    const updatedMeals = mealPlan.meals.map((slot) => {
      if (slot.slotId !== slotId) return slot;

      const updatedItems = slot.items.map((item, idx) => {
        if (idx !== itemIndex) return item;
        const food = item.food;
        return {
          ...item,
          portionMultiplier: newMultiplier,
          calculatedCalories: Math.round(food.calories * newMultiplier),
          calculatedProtein: parseFloat((food.proteinGrams * newMultiplier).toFixed(1)),
          calculatedCarbs: parseFloat((food.carbsGrams * newMultiplier).toFixed(1)),
          calculatedFat: parseFloat((food.fatGrams * newMultiplier).toFixed(1)),
          calculatedFiber: parseFloat((food.fiberGrams * newMultiplier).toFixed(1)),
          calculatedCarbon: parseFloat((food.carbonFootprintKgCO2e * newMultiplier).toFixed(4))
        };
      });

      return {
        ...slot,
        items: updatedItems,
        slotTotals: calculateSlotTotals(updatedItems)
      };
    });

    const newDailyTotals = updatedMeals.reduce(
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

    const updatedPlan: DailyMealPlan = {
      ...mealPlan,
      meals: updatedMeals,
      dailyTotals: newDailyTotals
    };

    setMealPlan(updatedPlan);
    saveMealPlanToStorage(updatedPlan);
  };

  const handleDownloadPdf = () => {
    if (!mealPlan) return;
    generateDietChartPdf(mealPlan, userProfile);
  };

  if (!mealPlan) {
    return (
      <div className="min-h-[calc(100vh-80px)] p-8 bg-[#FAF6F4] flex items-center justify-center">
        <div className="text-center space-y-3">
          <RotateCw className="w-8 h-8 text-[#B85062] animate-spin mx-auto" />
          <p className="text-sm text-[#584149]">Building your personalized Indian nutrition plan...</p>
        </div>
      </div>
    );
  }

  const displayedMeals =
    activeTab === 'all' ? mealPlan.meals : mealPlan.meals.filter((m) => m.slotId === activeTab);

  return (
    <div className="min-h-[calc(100vh-80px)] p-4 sm:p-6 lg:p-8 bg-[#FAF6F4]">
      <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-[#F2E8E6] shadow-xs">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDEEE9] text-[#B85062] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Healthy Indian Foods Dataset • 753 Real Dishes</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#312328]">
              Personalized Indian Diet Plan
            </h1>
            <p className="text-sm text-[#584149] max-w-2xl leading-relaxed">
              Curated from verified regional Indian recipes to support steady energy, low-glycemic response, and hormone balance. Every dish can be discovered and ordered directly on Swiggy and Zomato.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setShowConfig(!showConfig)}
              className="px-4 py-2.5 rounded-2xl bg-[#FAF6F4] hover:bg-[#F2E8E6] text-[#584149] border border-[#F2E8E6] text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <Filter className="w-4 h-4 text-[#8E717B]" />
              <span>{showConfig ? 'Hide Filters' : 'Personalize Filters'}</span>
            </button>

            <button
              onClick={() => generateNewPlan()}
              className="px-4 py-2.5 rounded-2xl bg-white hover:bg-[#FAF6F4] text-[#B85062] border border-[#B85062] text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs"
            >
              <RotateCw className="w-4 h-4" />
              <span>Regenerate Plan</span>
            </button>

            <button
              onClick={handleDownloadPdf}
              className="px-5 py-2.5 rounded-2xl bg-[#B85062] hover:bg-[#A04253] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-98"
            >
              <Download className="w-4 h-4" />
              <span>Download Diet Chart PDF</span>
            </button>
          </div>
        </div>

        {/* PERSONALIZATION CONTROLS DRAWER */}
        {showConfig && (
          <div className="bg-white p-6 rounded-3xl border border-[#F2E8E6] space-y-5 animate-in fade-in shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-[#FAF6F4]">
              <h3 className="font-serif text-lg font-bold text-[#312328]">
                Dietary Preferences & Allergy Restrictions
              </h3>
              <span className="text-xs text-[#8E717B]">
                Changes automatically recalculate your meal plan
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Diet Preference */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#584149] uppercase tracking-wider block">
                  Diet Category
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(['Veg', 'Eggetarian', 'Non-veg', 'All'] as const).map((d) => (
                    <button
                      key={d}
                      onClick={() => {
                        setDietPreference(d);
                        generateNewPlan(d, regionPreference, selectedAllergies);
                      }}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all text-center ${
                        dietPreference === d
                          ? 'bg-[#B85062] text-white shadow-xs'
                          : 'bg-[#FAF6F4] text-[#584149] hover:bg-[#F2E8E6]'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Regional Preference */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#584149] uppercase tracking-wider block">
                  Preferred Region / Cuisine
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {['All', ...ALL_REGIONS].map((r) => (
                    <button
                      key={r}
                      onClick={() => {
                        setRegionPreference(r as any);
                        generateNewPlan(dietPreference, r as any, selectedAllergies);
                      }}
                      className={`py-2 px-2 rounded-xl text-[11px] font-semibold transition-all text-center ${
                        regionPreference === r
                          ? 'bg-[#584149] text-white shadow-xs'
                          : 'bg-[#FAF6F4] text-[#584149] hover:bg-[#F2E8E6]'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional City for Ordering */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#584149] uppercase tracking-wider block">
                  Delivery City (Optional for Zomato)
                </label>
                <input
                  type="text"
                  value={userCity}
                  onChange={(e) => setUserCity(e.target.value)}
                  placeholder="e.g. Bangalore, Delhi, Mumbai, Chennai"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#F2E8E6] text-xs bg-[#FAF6F4] text-[#312328] focus:bg-white focus:outline-none focus:border-[#B85062]"
                />
                <p className="text-[10px] text-[#8E717B]">
                  Used only to refine external search destination without tracking location.
                </p>
              </div>
            </div>

            {/* ALLERGY HARD EXCLUSIONS */}
            <div className="space-y-2 pt-2 border-t border-[#FAF6F4]">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#584149]">
                <ShieldAlert className="w-4 h-4 text-rose-500" />
                <span>Allergy Hard Exclusions (Excludes allergen tags & ingredients)</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {ALL_ALLERGENS.map((allergy) => {
                  const isSelected = selectedAllergies.includes(allergy);
                  return (
                    <button
                      key={allergy}
                      onClick={() => toggleAllergy(allergy)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all capitalize ${
                        isSelected
                          ? 'bg-rose-600 text-white shadow-xs'
                          : 'bg-[#FAF6F4] text-[#584149] hover:bg-[#F2E8E6] border border-[#F2E8E6]'
                      }`}
                    >
                      {isSelected ? `✕ Excluded: ${allergy}` : `+ ${allergy}`}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ENERGY REQUIREMENTS & WEIGHT-NEUTRAL GUIDANCE BANNER */}
        <div className="bg-gradient-to-r from-[#FAF0ED] via-white to-[#F7F2F6] p-6 rounded-3xl border border-[#F2E8E6] shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-white text-[#B85062] text-[11px] font-bold border border-[#F2E8E6]">
                Mifflin-St Jeor Energy Estimation
              </span>
              <span className="text-xs text-[#8E717B]">
                {initialAge} yrs • {initialHeight} cm • {initialWeight} kg ({mealPlan.energyRequirement.bmiCategory})
              </span>
            </div>
            <p className="text-xs text-[#584149] leading-relaxed">
              {mealPlan.energyRequirement.clinicalGuidanceNote}
            </p>
            <p className="text-[11px] text-[#8E717B] italic">
              {mealPlan.energyRequirement.weightNeutralityStatement}
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-[#F2E8E6] shrink-0">
            <div className="text-center pr-4 border-r border-[#FAF6F4]">
              <span className="block text-[10px] text-[#8E717B] uppercase font-semibold">Daily Energy Needs</span>
              <span className="text-lg font-bold text-[#312328]">{mealPlan.energyRequirement.tdee}</span>
              <span className="text-[10px] text-[#8E717B]"> kcal</span>
            </div>
            <div className="text-center">
              <span className="block text-[10px] text-[#8E717B] uppercase font-semibold">Plan Target</span>
              <span className="text-lg font-bold text-[#B85062]">{mealPlan.energyRequirement.mealPlanTargetCalories}</span>
              <span className="text-[10px] text-[#8E717B]"> kcal</span>
            </div>
          </div>
        </div>

        {/* DAILY NUTRITION METRICS TOTALS BAR */}
        <div className="bg-white p-6 rounded-3xl border border-[#F2E8E6] shadow-xs space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="font-serif text-lg font-bold text-[#312328]">
                Daily Calculated Nutritional Totals
              </h2>
              <p className="text-xs text-[#8E717B]">
                Sum of all 5 planned meals based on current portion sizes
              </p>
            </div>
            <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100 flex items-center gap-1 self-start sm:self-auto">
              <Leaf className="w-3.5 h-3.5" />
              <span>Carbon footprint: {mealPlan.dailyTotals.carbonFootprintKgCO2e} kg CO₂e</span>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-[#FDEEE9] text-center">
              <span className="block text-[10px] text-[#8E717B] uppercase font-bold tracking-wider">Total Energy</span>
              <span className="text-xl font-bold text-[#B85062]">{mealPlan.dailyTotals.calories}</span>
              <span className="text-xs text-[#8E717B]"> kcal</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF6F4] text-center">
              <span className="block text-[10px] text-[#8E717B] uppercase font-bold tracking-wider">Protein</span>
              <span className="text-xl font-bold text-[#312328]">{mealPlan.dailyTotals.proteinGrams}g</span>
              <span className="text-[10px] text-[#8E717B] block">Satiety & repair</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF6F4] text-center">
              <span className="block text-[10px] text-[#8E717B] uppercase font-bold tracking-wider">Carbs</span>
              <span className="text-xl font-bold text-[#312328]">{mealPlan.dailyTotals.carbsGrams}g</span>
              <span className="text-[10px] text-[#8E717B] block">Slow-release energy</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF6F4] text-center">
              <span className="block text-[10px] text-[#8E717B] uppercase font-bold tracking-wider">Healthy Fats</span>
              <span className="text-xl font-bold text-[#312328]">{mealPlan.dailyTotals.fatGrams}g</span>
              <span className="text-[10px] text-[#8E717B] block">Hormone precursors</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-emerald-50 text-center col-span-2 sm:col-span-1 border border-emerald-100">
              <span className="block text-[10px] text-emerald-800 uppercase font-bold tracking-wider">Dietary Fiber</span>
              <span className="text-xl font-bold text-emerald-700">{mealPlan.dailyTotals.fiberGrams}g</span>
              <span className="text-[10px] text-emerald-600 block">Glycemic stabilization</span>
            </div>
          </div>
        </div>

        {/* MEAL TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: 'all', label: 'All 5 Meals' },
            { id: 'breakfast', label: '1. Breakfast' },
            { id: 'mid_morning', label: '2. Mid-Morning' },
            { id: 'lunch', label: '3. Lunch' },
            { id: 'evening_snack', label: '4. Evening Snack' },
            { id: 'dinner', label: '5. Dinner' }
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              className={`px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === t.id
                  ? 'bg-[#B85062] text-white shadow-xs'
                  : 'bg-white text-[#584149] border border-[#F2E8E6] hover:border-[#D97A88]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* MEAL SECTIONS */}
        <div className="space-y-8">
          {displayedMeals.map((slot) => (
            <div key={slot.slotId} className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#F2E8E6]">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#312328]">
                    {slot.title}
                  </h3>
                  <p className="text-xs text-[#8E717B]">
                    Recommended timing: {slot.recommendedTime}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-[#584149] bg-white px-3 py-1.5 rounded-full border border-[#F2E8E6]">
                  <span className="flex items-center gap-1 text-[#B85062]">
                    <Flame className="w-3.5 h-3.5" />
                    <span>{slot.slotTotals.calories} kcal</span>
                  </span>
                  <span>•</span>
                  <span>{slot.slotTotals.proteinGrams}g Protein</span>
                  <span>•</span>
                  <span>{slot.slotTotals.fiberGrams}g Fiber</span>
                </div>
              </div>

              {/* MEAL ITEMS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {slot.items.map((item, itemIdx) => (
                  <FoodCard
                    key={`${item.food.id}-${itemIdx}`}
                    food={item.food}
                    portionMultiplier={item.portionMultiplier}
                    onPortionChange={(newMult) => handlePortionChange(slot.slotId, itemIdx, newMult)}
                    userCity={userCity}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM EXPLORE ACTION BAR */}
        <div className="p-6 rounded-3xl bg-white border border-[#F2E8E6] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-serif text-lg font-bold text-[#312328]">
              Looking for alternative healthy Indian dishes?
            </h4>
            <p className="text-xs text-[#584149]">
              Search through all 753 curated Indian foods by region, ingredients, or nutrients in the Recipe Library.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setScreen('food_finder')}
              className="px-4 py-2.5 rounded-2xl bg-[#FAF6F4] text-[#584149] hover:bg-[#F2E8E6] text-xs font-bold border border-[#F2E8E6] transition-all"
            >
              Food Discovery
            </button>
            <button
              onClick={() => setScreen('recipes')}
              className="px-5 py-2.5 rounded-2xl bg-[#584149] hover:bg-[#312328] text-white text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <span>Explore All 753 Recipes</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
