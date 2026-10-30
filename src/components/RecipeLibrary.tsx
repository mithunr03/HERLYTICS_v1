import React, { useState, useMemo } from 'react';
import { AppScreen } from '../types';
import { IndianFoodItem, INDIAN_FOOD_ITEMS, ALL_REGIONS, ALL_MEAL_TYPES, ALL_ALLERGENS } from '../data/foodsData';
import { FoodCard } from './FoodCard';
import { getOrderingLinks, openProviderLink } from '../utils/orderingLinks';
import {
  Search,
  Sparkles,
  Filter,
  Flame,
  ArrowUpDown,
  X,
  ShoppingBag,
  ExternalLink,
  Leaf,
  ShieldAlert,
  ChevronRight,
  Info
} from 'lucide-react';

interface RecipeLibraryProps {
  setScreen: (screen: AppScreen) => void;
}

export const RecipeLibrary: React.FC<RecipeLibraryProps> = ({ setScreen }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedMealType, setSelectedMealType] = useState<string>('All');
  const [selectedAllergies, setSelectedAllergies] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'default' | 'calories_asc' | 'calories_desc' | 'protein_desc' | 'fiber_desc' | 'carbon_asc'>('default');

  const [activeFood, setActiveFood] = useState<IndianFoodItem | null>(null);
  const [userCity, setUserCity] = useState<string>('');

  const toggleAllergy = (allergy: string) => {
    setSelectedAllergies((prev) =>
      prev.includes(allergy) ? prev.filter((a) => a !== allergy) : [...prev, allergy]
    );
  };

  const filteredFoods = useMemo(() => {
    let result = INDIAN_FOOD_ITEMS.filter((f) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = f.name.toLowerCase().includes(q);
        const matchesIngredients = f.ingredients.toLowerCase().includes(q);
        const matchesCategory = f.associativityCategory.toLowerCase().includes(q);
        if (!matchesName && !matchesIngredients && !matchesCategory) return false;
      }

      // Region
      if (selectedRegion !== 'All' && !f.region.includes(selectedRegion)) {
        return false;
      }

      // Category
      if (selectedCategory !== 'All' && f.category !== selectedCategory) {
        return false;
      }

      // Meal Type
      if (selectedMealType !== 'All' && !f.mealTypes.includes(selectedMealType)) {
        return false;
      }

      // Allergy exclusions
      if (selectedAllergies.length > 0) {
        const allergensLower = f.allergens.map((a) => a.toLowerCase().trim());
        const ingredientsLower = f.ingredients.toLowerCase();
        for (const alg of selectedAllergies) {
          if (allergensLower.includes(alg)) return false;
          if (ingredientsLower.includes(alg)) return false;
        }
      }

      return true;
    });

    // Sorting
    if (sortBy === 'calories_asc') {
      result.sort((a, b) => a.calories - b.calories);
    } else if (sortBy === 'calories_desc') {
      result.sort((a, b) => b.calories - a.calories);
    } else if (sortBy === 'protein_desc') {
      result.sort((a, b) => b.proteinGrams - a.proteinGrams);
    } else if (sortBy === 'fiber_desc') {
      result.sort((a, b) => b.fiberGrams - a.fiberGrams);
    } else if (sortBy === 'carbon_asc') {
      result.sort((a, b) => a.carbonFootprintKgCO2e - b.carbonFootprintKgCO2e);
    }

    return result;
  }, [searchQuery, selectedRegion, selectedCategory, selectedMealType, selectedAllergies, sortBy]);

  // Find relevant alternatives when modal is open
  const relatedAlternatives = useMemo(() => {
    if (!activeFood) return [];
    return INDIAN_FOOD_ITEMS.filter(
      (f) =>
        f.id !== activeFood.id &&
        f.category === activeFood.category &&
        f.associativity === activeFood.associativity
    ).slice(0, 3);
  }, [activeFood]);

  return (
    <div className="min-h-[calc(100vh-80px)] p-4 sm:p-6 lg:p-8 bg-[#FAF6F4]">
      <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in">
        
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-[#F2E8E6] shadow-xs">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF5F1] text-emerald-800 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Healthy Indian Food Dataset • 753 Records</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#312328]">
              Indian Recipe & Food Library
            </h1>
            <p className="text-sm text-[#584149] max-w-2xl leading-relaxed">
              Explore authentic regional Indian dishes with laboratory-calibrated nutrition, ingredients, carbon footprints, and direct buying links for Swiggy & Zomato.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setScreen('nutrition')}
              className="px-5 py-2.5 rounded-2xl bg-[#B85062] hover:bg-[#A04253] text-white text-xs font-bold transition-all shadow-md active:scale-98"
            >
              Open Diet Planner
            </button>
          </div>
        </div>

        {/* SEARCH & FILTERS BAR */}
        <div className="bg-white p-6 rounded-3xl border border-[#F2E8E6] shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8E717B]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search food name, ingredients (e.g. cauliflower, dal, chicken, millets)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-[#F2E8E6] bg-[#FAF6F4] text-xs text-[#312328] focus:bg-white focus:outline-none focus:border-[#B85062]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8E717B] hover:text-[#312328]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 shrink-0">
              <ArrowUpDown className="w-4 h-4 text-[#8E717B]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2.5 rounded-2xl border border-[#F2E8E6] bg-[#FAF6F4] text-xs text-[#584149] font-semibold focus:bg-white focus:outline-none focus:border-[#B85062]"
              >
                <option value="default">Default Order</option>
                <option value="calories_asc">Calories (Lowest first)</option>
                <option value="calories_desc">Calories (Highest first)</option>
                <option value="protein_desc">Protein (Highest first)</option>
                <option value="fiber_desc">Fiber (Highest first)</option>
                <option value="carbon_asc">Carbon Footprint (Lowest first)</option>
              </select>
            </div>
          </div>

          {/* FILTER PILLS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 border-t border-[#FAF6F4]">
            {/* Region */}
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-[#8E717B] tracking-wider block">
                Region
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['All', ...ALL_REGIONS].map((r) => (
                  <button
                    key={r}
                    onClick={() => setSelectedRegion(r)}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                      selectedRegion === r
                        ? 'bg-[#B85062] text-white shadow-xs'
                        : 'bg-[#FAF6F4] text-[#584149] hover:bg-[#F2E8E6]'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Dietary Category */}
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-[#8E717B] tracking-wider block">
                Dietary Category
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['All', 'Veg', 'Eggetarian', 'Non-veg'].map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedCategory(c)}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                      selectedCategory === c
                        ? 'bg-[#584149] text-white shadow-xs'
                        : 'bg-[#FAF6F4] text-[#584149] hover:bg-[#F2E8E6]'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Meal Course */}
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-bold text-[#8E717B] tracking-wider block">
                Meal Course
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['All', 'Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Beverages'].map((m) => (
                  <button
                    key={m}
                    onClick={() => setSelectedMealType(m)}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                      selectedMealType === m
                        ? 'bg-[#B85062] text-white shadow-xs'
                        : 'bg-[#FAF6F4] text-[#584149] hover:bg-[#F2E8E6]'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ALLERGEN EXCLUSIONS */}
          <div className="pt-2 border-t border-[#FAF6F4] space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#584149]">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-500" />
              <span>Filter Out Allergens:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {ALL_ALLERGENS.map((alg) => {
                const isSelected = selectedAllergies.includes(alg);
                return (
                  <button
                    key={alg}
                    onClick={() => toggleAllergy(alg)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all capitalize ${
                      isSelected
                        ? 'bg-rose-600 text-white shadow-xs'
                        : 'bg-[#FAF6F4] text-[#584149] hover:bg-[#F2E8E6]'
                    }`}
                  >
                    {isSelected ? `✕ ${alg}` : `+ ${alg}`}
                  </button>
                );
              })}
              {selectedAllergies.length > 0 && (
                <button
                  onClick={() => setSelectedAllergies([])}
                  className="px-2 py-1 text-[11px] text-[#8E717B] hover:text-[#312328] underline"
                >
                  Clear all
                </button>
              )}
            </div>
          </div>

          {/* ACTIVE COUNT & DISCLAIMER */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#8E717B] pt-1">
            <span>
              Showing <strong>{filteredFoods.length}</strong> matching Indian healthy food records
            </span>
            <span className="italic text-[11px]">
              Every card includes verified direct search redirects to Swiggy & Zomato
            </span>
          </div>
        </div>

        {/* FOOD CARDS GRID */}
        {filteredFoods.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFoods.map((food) => (
              <FoodCard key={food.id} food={food} userCity={userCity} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-3xl border border-[#F2E8E6] space-y-4">
            <Info className="w-10 h-10 text-[#8E717B] mx-auto opacity-40" />
            <h3 className="font-serif text-xl font-bold text-[#312328]">
              No dishes found matching your criteria
            </h3>
            <p className="text-xs text-[#584149] max-w-md mx-auto">
              Try loosening your search terms or clearing some of the allergen exclusions.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('All');
                setSelectedCategory('All');
                setSelectedMealType('All');
                setSelectedAllergies([]);
              }}
              className="px-4 py-2 rounded-xl bg-[#B85062] text-white text-xs font-bold hover:bg-[#A04253] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
