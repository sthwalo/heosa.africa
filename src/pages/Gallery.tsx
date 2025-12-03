import { useState } from 'react';
import { GalleryImage } from '../types';
import { getYears, getCategories, filterImages } from '../data/galleryData';
import { GalleryFilters, GalleryGrid, ImageModal } from '../components/features/gallery';
import { useModal } from '../hooks';

const Gallery = () => {
  const [selectedYear, setSelectedYear] = useState(getYears()[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const imageModal = useModal<GalleryImage>();

  const years = getYears();
  const categories = getCategories(selectedYear);
  const filteredImages = filterImages(selectedYear, selectedCategory);

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    setSelectedCategory('All');
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#2B2A29] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/events/5.png"
            alt="Gallery background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Gallery
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Capturing moments of excellence and celebration in African healthcare
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <GalleryFilters
          years={years}
          categories={categories}
          selectedYear={selectedYear}
          selectedCategory={selectedCategory}
          onYearChange={handleYearChange}
          onCategoryChange={setSelectedCategory}
        />

        {/* Gallery Grid */}
        <GalleryGrid images={filteredImages} onImageClick={imageModal.open} />
      </div>

      {/* Image Modal */}
      <ImageModal image={imageModal.data} onClose={imageModal.close} />
    </div>
  );
};

export default Gallery;