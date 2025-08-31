'use client';

import { useAppSelector, useAppDispatch } from '../store/hooks';
import { setFilters, clearFilters } from '../store/slices/productsSlice';

export default function FilterSidebar() {
  const dispatch = useAppDispatch();
  const { categories, brands, filters } = useAppSelector(state => state.products);

  const handleFilterChange = (key, value) => {
    dispatch(setFilters({ [key]: value }));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <div className="w-64 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Filters</h3>
        <button
          onClick={handleClearFilters}
          className="text-sm text-blue-500 hover:text-blue-600 transition-colors"
        >
          Clear All
        </button>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Category</h4>
        <select
          value={filters.category}
          onChange={(e) => handleFilterChange('category', e.target.value)}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Brand</h4>
        <select
          value={filters.brand}
          onChange={(e) => handleFilterChange('brand', e.target.value)}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
        >
          <option value="">All Brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Price Range</h4>
        <div className="space-y-3">
          <input
            type="number"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={(e) => handleFilterChange('minPrice', e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          />
        </div>
      </div>

      {/* Rating Filter */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">Minimum Rating</h4>
        <select
          value={filters.minRating}
          onChange={(e) => handleFilterChange('minRating', parseFloat(e.target.value))}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
        >
          <option value={0}>Any Rating</option>
          <option value={4.5}>4.5+ Stars</option>
          <option value={4.0}>4.0+ Stars</option>
          <option value={3.5}>3.5+ Stars</option>
          <option value={3.0}>3.0+ Stars</option>
        </select>
      </div>
    </div>
  );
}
