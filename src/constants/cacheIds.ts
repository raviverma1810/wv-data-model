// list of cache ids used in the application
export const CACHE_IDS = {
  CITIES: "wv-cities-cache",
  PINCODES_CITY: (cityId: string) => `wv-pincodes-city-cache-${cityId}`,
  AREA: (cityId: string, pincode: string) => `wv-area-cache-${cityId}-${pincode}`,
  CATEGORIES: (areaId: string) => `wv-categories-cache-${areaId}`,
  CATEGORY_SUMMARY: (areaId: string) => `wv-category-summary-cache-${areaId}`,
  PRODUCTS_CATEGORY: (areaId: string, categoryId: string) => `wv-products-category-cache-${areaId}-${categoryId}`,
  PRODUCT_AREA: (areaId: string, productId: string) => `wv-product-area-cache-${areaId}-${productId}`,  
  PRODUCTS_SEASONAL_AREA: (areaId: string) => `wv-products-seasonal-area-cache-${areaId}`,
  PRODUCTS_SEASONAL_CATEGORY: (areaId: string, categoryId: string) => `wv-products-seasonal-category-cache-${areaId}-${categoryId}`,
  PRODUCT_DETAILS_AREA: (areaId: string, productId: string) => `wv-product-details-area-cache-${areaId}-${productId}`,
  PRODUCTS_TAG_AREA: (areaId: string, tag: string) => `wv-products-tag-area-cache-${areaId}-${tag}`,
  PRODUCT_SEARCH_AREA: (areaId: string, searchKeyword: string) => `wv-product-search-area-cache-${areaId}-${searchKeyword}`,
};
