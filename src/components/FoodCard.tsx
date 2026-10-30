import React, { useState } from 'react';
import { IndianFoodItem } from '../data/foodsData';
import { getOrderingLinks, openProviderLink } from '../utils/orderingLinks';
import { Flame, Clock, Leaf, AlertTriangle, ChevronDown, ChevronUp, ShoppingBag, ExternalLink, Info } from 'lucide-react';

interface FoodCardProps {
  food: IndianFoodItem;
  portionMultiplier?: number;
  onPortionChange?: (newMultiplier: number) => void;
  showMealControls?: boolean;
  onAddToMealPlan?: (slot: 'breakfast' | 'mid_morning' | 'lunch' | 'evening_snack' | 'dinner') => void;
  userCity?: string;
}

export const FoodCard: React.FC<FoodCardProps> = ({
  food,
  portionMultiplier = 1.0,
  onPortionChange,
  showMealControls = false,
  onAddToMealPlan,
  userCity
}) => {
  const [showIngredients, setShowIngredients] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const ordering = getOrderingLinks(food.name, food.cleanSearchName, userCity);

  // Scaled nutrient values
  const currentCalories = Math.round(food.calories * portionMultiplier);
  const currentProtein = parseFloat((food.proteinGrams * portionMultiplier).toFixed(1));
  const currentCarbs = parseFloat((food.carbsGrams * portionMultiplier).toFixed(1));
  const currentFat = parseFloat((food.fatGrams * portionMultiplier).toFixed(1));
  const currentFiber = parseFloat((food.fiberGrams * portionMultiplier).toFixed(1));
  const currentWeight = Math.round(food.totalWeightGrams * portionMultiplier);
  const currentCarbon = parseFloat((food.carbonFootprintKgCO2e * portionMultiplier).toFixed(3));

  const hasAllergies = food.allergens.length > 0 && !food.allergens.includes('no-allergies');

  return (
    <div className="bg-white rounded-3xl border border-[#F2E8E6] p-5 sm:p-6 space-y-4 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
      <div className="space-y-3">
        {/* TOP BADGES */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                food.category === 'Veg'
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : food.category === 'Non-veg'
                  ? 'bg-rose-50 text-rose-700 border border-rose-200'
                  : 'bg-amber-50 text-amber-700 border border-amber-200'
              }`}
            >
              {food.category}
            </span>

            {food.region.map((r, i) => (
              <span key={i} className="px-2.5 py-0.5 rounded-full bg-[#FAF6F4] text-[#584149] text-[10px] font-medium border border-[#F2E8E6]">
                {r}
              </span>
            ))}

            <span className="px-2.5 py-0.5 rounded-full bg-[#F4EBE8] text-[#8E717B] text-[10px] font-medium">
              {food.associativityCategory}
            </span>
          </div>

          {/* Carbon Footprint Pill */}
          {food.carbonFootprintKgCO2e > 0 && (
            <span
              title="Carbon footprint in kg CO2 equivalent"
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-700 text-[10px] font-semibold border border-teal-100"
            >
              <Leaf className="w-3 h-3 text-teal-600" />
              <span>{currentCarbon} kg CO₂e</span>
            </span>
          )}
        </div>

        {/* FOOD TITLE & SERVING */}
        <div>
          <h3 className="font-serif text-lg font-bold text-[#312328] leading-tight">
            {food.name}
          </h3>
          <p className="text-xs text-[#8E717B] mt-0.5">
            Listed serving: <strong className="text-[#584149]">{food.serving}</strong> ({currentWeight}g)
          </p>
        </div>

        {/* DUPLICATE NOTE / VARIATION FLAG */}
        {food.isDuplicateName && (
          <div className="p-2 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-800 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 shrink-0 text-amber-600" />
            <span>{food.duplicateNote}</span>
          </div>
        )}

        {/* NUTRITION METRICS GRID */}
        <div className="grid grid-cols-5 gap-2 p-3 rounded-2xl bg-[#FAF6F4] text-center">
          <div>
            <span className="block text-[10px] text-[#8E717B] uppercase tracking-wider font-semibold">Energy</span>
            <span className="font-bold text-xs text-[#B85062] flex items-center justify-center gap-0.5">
              <Flame className="w-3 h-3" />
              {currentCalories}
            </span>
            <span className="text-[9px] text-[#8E717B]">kcal</span>
          </div>
          <div>
            <span className="block text-[10px] text-[#8E717B] uppercase tracking-wider font-semibold">Protein</span>
            <span className="font-bold text-xs text-[#312328]">{currentProtein}g</span>
          </div>
          <div>
            <span className="block text-[10px] text-[#8E717B] uppercase tracking-wider font-semibold">Carbs</span>
            <span className="font-bold text-xs text-[#312328]">{currentCarbs}g</span>
          </div>
          <div>
            <span className="block text-[10px] text-[#8E717B] uppercase tracking-wider font-semibold">Fat</span>
            <span className="font-bold text-xs text-[#312328]">{currentFat}g</span>
          </div>
          <div>
            <span className="block text-[10px] text-[#8E717B] uppercase tracking-wider font-semibold">Fiber</span>
            <span className="font-bold text-xs text-emerald-700">{currentFiber}g</span>
          </div>
        </div>

        {/* ALLERGENS BAR */}
        <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
          <span className="font-semibold text-[#8E717B]">Allergy Info:</span>
          {hasAllergies ? (
            food.allergens.map((alg, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 border border-rose-200 text-[10px] font-semibold"
              >
                <AlertTriangle className="w-3 h-3 text-rose-500" />
                <span>{alg}</span>
              </span>
            ))
          ) : (
            <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-semibold">
              No major declared allergens
            </span>
          )}
        </div>

        {/* INGREDIENTS ACCORDION */}
        <div>
          <button
            onClick={() => setShowIngredients(!showIngredients)}
            className="flex items-center justify-between w-full text-xs text-[#8E717B] hover:text-[#B85062] py-1 border-t border-[#F2E8E6] transition-colors"
          >
            <span className="font-semibold">
              {showIngredients ? 'Hide Recipe Ingredients' : 'View Recipe Ingredients'}
            </span>
            {showIngredients ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
          {showIngredients && (
            <div className="mt-2 p-3 rounded-2xl bg-[#FCFAF9] border border-[#F2E8E6] text-[11px] text-[#584149] space-y-1 animate-in fade-in">
              <p className="font-semibold text-[#312328]">Ingredients Breakdown:</p>
              <div className="flex flex-wrap gap-1">
                {food.parsedIngredients.map((ing, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-md bg-white border border-[#E8DCD9] text-[10px]">
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* PORTION ADJUSTER & ORDERING BUTTONS */}
      <div className="pt-3 border-t border-[#F2E8E6] space-y-3">
        {onPortionChange && (
          <div className="flex items-center justify-between text-xs bg-[#FAF6F4] p-2 rounded-xl">
            <span className="font-semibold text-[#584149]">Adjust Portion:</span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => onPortionChange(Math.max(0.5, portionMultiplier - 0.5))}
                className="w-6 h-6 rounded-lg bg-white border border-[#E8DCD9] font-bold text-[#584149] hover:bg-[#F2E8E6]"
              >
                -
              </button>
              <span className="w-10 text-center font-bold text-[#312328]">
                {portionMultiplier}x
              </span>
              <button
                onClick={() => onPortionChange(portionMultiplier + 0.5)}
                className="w-6 h-6 rounded-lg bg-white border border-[#E8DCD9] font-bold text-[#584149] hover:bg-[#F2E8E6]"
              >
                +
              </button>
            </div>
          </div>
        )}

        {/* SWIGGY & ZOMATO DIRECT BUYING BUTTONS */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] text-[#8E717B]">
            <span className="font-bold uppercase tracking-wider text-[10px]">Order Comparable Dish:</span>
            <button
              onClick={() => setShowDisclaimer(!showDisclaimer)}
              className="text-[#B85062] hover:underline flex items-center gap-0.5 text-[10px]"
            >
              <Info className="w-3 h-3" />
              <span>Nutrition note</span>
            </button>
          </div>

          {showDisclaimer && (
            <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[10px] text-amber-900 leading-relaxed animate-in fade-in">
              <strong>Important distinction:</strong> HerLytics displays reference home-cooked healthy nutrition. Restaurant dishes ordered through Swiggy/Zomato may differ in oils, portion sizes, calories, and allergens.
            </div>
          )}

          <div className="grid grid-cols-2 gap-2">
            {/* SWIGGY BUTTON */}
            <button
              type="button"
              onClick={() => openProviderLink(ordering.swiggyUrl, 'Swiggy')}
              title={`Find "${ordering.searchQuery}" on Swiggy`}
              className="w-full py-2.5 px-3 rounded-2xl bg-[#FC8019] hover:bg-[#E86E08] text-white font-bold text-xs shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1.5 active:scale-98"
            >
              <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Buy on Swiggy</span>
              <ExternalLink className="w-3 h-3 opacity-80 shrink-0" />
            </button>

            {/* ZOMATO BUTTON */}
            <button
              type="button"
              onClick={() => openProviderLink(ordering.zomatoUrl, 'Zomato')}
              title={`Find "${ordering.searchQuery}" on Zomato`}
              className="w-full py-2.5 px-3 rounded-2xl bg-[#E23744] hover:bg-[#CB202D] text-white font-bold text-xs shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1.5 active:scale-98"
            >
              <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Buy on Zomato</span>
              <ExternalLink className="w-3 h-3 opacity-80 shrink-0" />
            </button>
          </div>
        </div>

        {/* MEAL SLOT SELECTOR (if in Food Finder or Recipe Library mode) */}
        {showMealControls && onAddToMealPlan && (
          <div className="pt-2 flex items-center justify-between gap-1 border-t border-[#F2E8E6]">
            <span className="text-[10px] font-semibold text-[#8E717B]">Add to Plan:</span>
            <div className="flex gap-1">
              {(['breakfast', 'lunch', 'dinner', 'evening_snack'] as const).map((slot) => (
                <button
                  key={slot}
                  onClick={() => onAddToMealPlan(slot)}
                  className="px-2 py-1 rounded-lg bg-[#FAF6F4] text-[#584149] text-[10px] font-semibold hover:bg-[#B85062] hover:text-white transition-colors"
                >
                  {slot === 'evening_snack' ? 'Snack' : slot.charAt(0).toUpperCase() + slot.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
