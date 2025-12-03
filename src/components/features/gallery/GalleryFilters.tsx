/**
 * Gallery Filters Component
 * Year and category filters for gallery
 */

export interface GalleryFiltersProps {
  years: string[];
  categories: string[];
  selectedYear: string;
  selectedCategory: string;
  onYearChange: (year: string) => void;
  onCategoryChange: (category: string) => void;
}

export function GalleryFilters({
  years,
  categories,
  selectedYear,
  selectedCategory,
  onYearChange,
  onCategoryChange,
}: GalleryFiltersProps) {
  return (
    <div className="space-y-8">
      {/* Year Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex overflow-x-auto">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => onYearChange(year)}
              className={`px-8 py-4 text-lg font-medium border-b-2 transition-colors whitespace-nowrap ${
                selectedYear === year
                  ? 'border-[#962326] text-[#962326]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all ${
              selectedCategory === category
                ? 'bg-[#962326] text-white'
                : 'bg-white text-[#2B2A29] hover:bg-[#F2C849] hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
