import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryImage, getYears, getCategories, filterImages } from '../data/galleryData';

const Gallery = () => {
  const [selectedYear, setSelectedYear] = useState(getYears()[0]); // Default to most recent year
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const years = getYears();
  const categories = getCategories(selectedYear);
  const filteredImages = filterImages(selectedYear, selectedCategory);

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    setSelectedCategory('All'); // Reset category when year changes
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
        {/* Year Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`px-8 py-4 text-lg font-medium border-b-2 transition-colors ${
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
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                    <span className="text-sm text-gray-200">{image.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Component */}
      {selectedImage && <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  );
};

// Separate ImageModal into its own component for better organization
const ImageModal = ({ image, onClose }: { image: GalleryImage; onClose: () => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  if (!image.images) return null;
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % image.images!.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? image.images!.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
      >
        <X className="h-8 w-8" />
      </button>
      <div className="max-w-7xl w-full h-[80vh] relative flex items-center justify-center">
        {image.images ? (
          <>
            {image.images[currentImageIndex].endsWith('.mp4') ? (
              <video
                src={image.images[currentImageIndex]}
                controls
                className="max-w-full max-h-full rounded-lg"
              />
            ) : (
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={image.images[currentImageIndex]}
                  alt={image.title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            )}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 p-2 rounded-full bg-black/30"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 p-2 rounded-full bg-black/30"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        ) : (
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={image.url}
              alt={image.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;