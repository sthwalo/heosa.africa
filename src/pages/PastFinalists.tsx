import { useState } from 'react';
import { X } from 'lucide-react';
import { finalistsData, type Finalist } from '../data/finalistsData';

const PastFinalists = () => {
  const [selectedFinalist, setSelectedFinalist] = useState<Finalist | null>(null);

  // Get unique years from the data
  const years = Array.from(new Set(finalistsData.map(f => f.year))).sort().reverse();
  const [selectedYear, setSelectedYear] = useState(years[0]);

  const categories = Object.values(
    finalistsData
      .filter(f => f.year === selectedYear)
      .reduce((acc, finalist) => {
        if (!acc[finalist.category]) {
          acc[finalist.category] = {
            title: finalist.category,
            finalists: []
          };
        }
        acc[finalist.category].finalists.push(finalist);
        return acc;
      }, {} as Record<string, { title: string; finalists: Finalist[] }>)
  );

  const ImageModal = () => {
    if (!selectedFinalist) return null;

    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-4xl w-full p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-semibold text-[#2B2A29]">{selectedFinalist.name}</h3>
              <p className="text-gray-600">{selectedFinalist.category}</p>
              <p className="text-sm text-[#962326]">{selectedFinalist.year}</p>
            </div>
            <button
              onClick={() => setSelectedFinalist(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <img
            src={selectedFinalist.image}
            alt={selectedFinalist.name}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#2B2A29] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/events/1.png"
            alt="Past Finalists background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Past Finalists
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Celebrating our previous finalists who have demonstrated excellence in healthcare
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Year Selection */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all ${
                selectedYear === year
                  ? 'bg-[#962326] text-white'
                  : 'bg-white text-[#2B2A29] hover:bg-[#F2C849] hover:text-white'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Categories */}
        {categories.map((category) => (
          <div key={category.title} className="mb-12">
            <h2 className="text-2xl font-bold text-[#2B2A29] mb-6">{category.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.finalists.map((finalist) => (
                <div
                  key={finalist.id}
                  onClick={() => setSelectedFinalist(finalist)}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                >
                  <div className="aspect-w-3 aspect-h-4 relative">
                    <img
                      src={finalist.image}
                      alt={finalist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-[#2B2A29] mb-1">{finalist.name}</h3>
                    <p className="text-sm text-gray-600">{finalist.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <ImageModal />
    </div>
  );
};

export default PastFinalists;
