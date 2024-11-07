import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
      title: "2023 Awards Ceremony",
      category: "Events"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80",
      title: "Healthcare Innovation Summit",
      category: "Events"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
      title: "Medical Technology Expo",
      category: "Exhibitions"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80",
      title: "Leadership Conference",
      category: "Conferences"
    }
  ];

  const categories = Array.from(new Set(images.map(img => img.category)));

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
            <p className="text-gray-300">{selectedImage.category}</p>
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
              className="px-6 py-2 rounded-full bg-white shadow-md hover:shadow-lg text-[#2B2A29] hover:bg-[#F2C849] hover:text-white transition-all"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  <p className="text-gray-200">{image.category}</p>
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