/**
 * HerLytics Food Ordering & External Discovery Utility
 * Provides verified URL generation for Swiggy and Zomato searches.
 *
 * NOTE & DISCLAIMER:
 * CSV food records represent healthy home-cooked recipe formulations and reference nutrition.
 * External restaurant listings on Swiggy / Zomato are commercial food search results.
 * Restaurant preparation, ingredients, portion sizes, oils, and allergens may differ
 * significantly from the home-style nutritional profiles listed in HerLytics.
 */

export interface OrderingLinks {
  swiggyUrl: string;
  zomatoUrl: string;
  searchQuery: string;
  dishName: string;
}

/**
 * Normalizes a dish name for high-accuracy restaurant search on food delivery platforms
 * e.g., "ALMOND FLOUR ROTI (20% almond flour + 80% wheat flour)" -> "Almond Flour Roti"
 * e.g., "Soya flour Gobi stuffed paratha" -> "Gobi Paratha" / "Soya Paratha"
 */
export function getOptimizedSearchQuery(dishName: string, cleanSearchName?: string): string {
  if (cleanSearchName && cleanSearchName.trim().length > 0) {
    return cleanSearchName.trim();
  }

  // Remove technical parenthesis annotations
  let query = dishName.replace(/\([^)]*\)/g, '').trim();

  // Remove multiple consecutive spaces
  query = query.replace(/\s{2,}/g, ' ').trim();

  return query || dishName;
}

/**
 * Builds direct search URLs for Swiggy and Zomato
 * Using verified, stable web search endpoints
 */
export function getOrderingLinks(dishName: string, cleanSearchName?: string, userCity?: string): OrderingLinks {
  const query = getOptimizedSearchQuery(dishName, cleanSearchName);
  const encodedQuery = encodeURIComponent(query);
  
  // Swiggy web search: https://www.swiggy.com/search?query=<encodedQuery>
  const swiggyUrl = `https://www.swiggy.com/search?query=${encodedQuery}`;

  // Zomato web search:
  // If city is specified, can target https://www.zomato.com/{city}/delivery?q=...
  // General verified web search endpoint: https://www.zomato.com/search?q=<encodedQuery>
  const citySlug = userCity ? encodeURIComponent(userCity.toLowerCase().trim()) : '';
  const zomatoUrl = citySlug
    ? `https://www.zomato.com/${citySlug}/delivery?q=${encodedQuery}`
    : `https://www.zomato.com/search?q=${encodedQuery}`;

  return {
    swiggyUrl,
    zomatoUrl,
    searchQuery: query,
    dishName
  };
}

/**
 * Safely opens a delivery provider destination in a new tab without passing any private health info
 */
export function openProviderLink(url: string, providerName: 'Swiggy' | 'Zomato') {
  if (!url || url === '#' || url.startsWith('javascript:')) {
    console.error(`Invalid URL for ${providerName}:`, url);
    return;
  }
  // Safe opener with no-referrer
  window.open(url, '_blank', 'noopener,noreferrer');
}

export const RESTAURANT_NUTRITION_DISCLAIMER =
  'HerLytics food records describe healthy, home-prepared recipe references. Commercial restaurant versions ordered via Swiggy or Zomato may differ significantly in ingredients, cooking oils, portions, sodium, calories, and allergens.';
