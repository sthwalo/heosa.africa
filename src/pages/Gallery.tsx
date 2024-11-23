import { useState } from 'react';
import { X } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants/galleryImages';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
  description?: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(GALLERY_IMAGES.map(img => img.category)))];

  const filteredImages = selectedCategory === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  const ImageModal = () => {
    if (!selectedImage) return null;

    return (
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <X className="h-8 w-8" />
        </button>
        <div className="max-w-4xl w-full">
          <img
            src={selectedImage.url}
            alt={selectedImage.title}
            className="w-full h-auto rounded-lg"
          />
          <div className="mt-4 text-white">
            <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
            <p className="text-gray-300">{selectedImage.description}</p>
            <p className="text-gray-400 mt-2">{selectedImage.category}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2B2A29] mb-4">Gallery</h1>
          <p className="text-lg text-gray-600">
            Explore moments from our events and celebrations
          </p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer bg-white shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ImageModal />
    </div>
  );
};

export default Gallery;