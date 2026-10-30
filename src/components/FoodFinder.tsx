import React, { useState, useMemo } from 'react';
import { AppScreen } from '../types';
import { IndianFoodItem, INDIAN_FOOD_ITEMS, ALL_REGIONS } from '../data/foodsData';
import { FoodCard } from './FoodCard';
import { Search, Sparkles, MapPin, ShoppingBag, Leaf, Flame, ShieldAlert, Info, ExternalLink } from 'lucide-react';

interface FoodFinderProps {
  setScreen: (screen: AppScreen) => void;
}

type DiningGoal = 'all' | 'high_protein' | 'high_fiber' | 'low_calorie' | 'eco_friendly' | 'quick_bites';

export const FoodFinder: React.FC<FoodFinderProps> = ({ setScreen }) => {
  const [selectedGoal, setSelectedGoal] = useState<DiningGoal>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [userCity, setUserCity] = useState<string>('Bangalore');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const diningGoals = [
    { id: 'all', label: 'All Healthy Dishes', desc: 'Browse all 753 curated Indian foods' },
    { id: 'high_protein', label: 'High Protein (≥15g)', desc: 'Lean dal, paneer, sprouts, chicken & fish' },
    { id: 'high_fiber', label: 'High Fiber (≥10g)', desc: 'Stabilize post-meal blood glucose' },
    { id: 'low_calorie', label: 'Light Bites (<150 kcal)', desc: 'Fresh salads, clear soups & infusions' },
    { id: 'eco_friendly', label: 'Eco-Friendly (<0.3 kg CO₂e)', desc: 'Climate-conscious plant meals' },
    { id: 'quick_bites', label: 'Evening Snacks & Chaats', desc: 'Makhana, cutlets, vadas & chaats' }
  ];

  const filteredFoods = useMemo(() => {
    return INDIAN_FOOD_ITEMS.filter((f) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        if (!f.name.toLowerCase().includes(q) && !f.ingredients.toLowerCase().includes(q)) {
          return false;
        }
      }

      // Region
      if (selectedRegion !== 'All' && !f.region.includes(selectedRegion)) {
        return false;
      }

      // Goal
      if (selectedGoal === 'high_protein' && f.proteinGrams < 15) return false;
      if (selectedGoal === 'high_fiber' && f.fiberGrams < 10) return false;
      if (selectedGoal === 'low_calorie' && f.calories >= 150) return false;
      if (selectedGoal === 'eco_friendly' && f.carbonFootprintKgCO2e > 0.3) return false;
      if (selectedGoal === 'quick_bites' && !f.mealTypes.includes('Snacks') && !['6', '11'].includes(f.associativity)) return false;

      return true;
    });
  }, [selectedGoal, selectedRegion, searchQuery]);

  return (
    <div className="min-h-[calc(100vh-80px)] p-4 sm:p-6 lg:p-8 bg-[#FAF6F4]">
      <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in">
        
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-[#F2E8E6] shadow-xs">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5F2EE] text-[#62AA98] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Smart Indian Dining & Takeaway Companion</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#312328]">
              Healthy Food Discovery & Direct Ordering
            </h1>
            <p className="text-sm text-[#584149] max-w-2xl leading-relaxed">
              Find nutritious dishes from our verified healthy Indian foods dataset and discover nearby restaurants serving them on Swiggy and Zomato.
            </p>
          </div>

          {/* Quick city selector */}
          <div className="flex items-center gap-2 bg-[#FAF6F4] p-2.5 rounded-2xl border border-[#F2E8E6] shrink-0">
            <MapPin className="w-4 h-4 text-[#B85062]" />
            <div className="text-xs">
              <span className="block text-[10px] text-[#8E717B] font-semibold">City for Delivery:</span>
              <input
                type="text"
                value={userCity}
                onChange={(e) => setUserCity(e.target.value)}
                placeholder="e.g. Bangalore, Delhi..."
                className="bg-transparent font-bold text-[#312328] focus:outline-none w-28 text-xs"
              />
            </div>
          </div>
        </div>

        {/* NUTRITION & RESTAURANT DISCLAIMER BANNER */}
        <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
          <Info className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
          <div className="leading-relaxed">
            <strong>Important ordering distinction:</strong> HerLytics displays reference home-cooked healthy nutrition. Restaurant dishes ordered through Swiggy and Zomato may differ in cooking oils, portion sizes, calories, sodium, and allergens. Buttons initiate a targeted food search for comparable dishes.
          </div>
        </div>

        {/* GOAL SELECTOR CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {diningGoals.map((goal) => {
            const isSelected = selectedGoal === goal.id;
            return (
              <button
                key={goal.id}
                onClick={() => setSelectedGoal(goal.id as any)}
                className={`p-3 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#B85062] text-white border-[#B85062] shadow-xs'
                    : 'bg-white text-[#584149] border-[#F2E8E6] hover:border-[#D97A88]'
                }`}
              >
                <div>
                  <span className="block font-bold text-xs">{goal.label}</span>
                  <span
                    className={`block text-[10px] mt-0.5 line-clamp-1 ${
                      isSelected ? 'text-white/80' : 'text-[#8E717B]'
                    }`}
                  >
                    {goal.desc}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* SEARCH & REGION CONTROLS */}
        <div className="bg-white p-5 rounded-3xl border border-[#F2E8E6] shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8E717B]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by food name or ingredients (e.g. palak paneer, khichdi, soup)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-[#F2E8E6] bg-[#FAF6F4] text-xs text-[#312328] focus:bg-white focus:outline-none focus:border-[#B85062]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <span className="text-[11px] font-bold text-[#8E717B] pr-1">Region:</span>
            {['All', ...ALL_REGIONS].map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRegion(r)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                  selectedRegion === r
                    ? 'bg-[#584149] text-white shadow-xs'
                    : 'bg-[#FAF6F4] text-[#584149] hover:bg-[#F2E8E6]'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* ACTIVE RESULTS SUMMARY */}
        <div className="flex items-center justify-between text-xs text-[#8E717B] px-1">
          <span>
            Found <strong>{filteredFoods.length}</strong> eligible dishes matching your filters
          </span>
          <span className="text-[11px]">
            Targeting delivery in: <strong className="text-[#312328]">{userCity || 'Any location'}</strong>
          </span>
        </div>

        {/* FOOD CARDS GRID */}
        {filteredFoods.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFoods.map((food) => (
              <FoodCard key={food.id} food={food} userCity={userCity} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-3xl border border-[#F2E8E6] space-y-3">
            <p className="font-serif text-lg font-bold text-[#312328]">
              No dishes found matching this combination.
            </p>
            <p className="text-xs text-[#584149]">
              Try choosing "All Healthy Dishes" or clearing the search box.
            </p>
            <button
              onClick={() => {
                setSelectedGoal('all');
                setSelectedRegion('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-[#B85062] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
