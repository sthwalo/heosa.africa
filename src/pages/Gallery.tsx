import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
  description?: string;
  images?: string[];
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    url: 'images/summit/388.png',
    images: [
      '/images/summit/306.png',
      '/images/summit/307.png',
      '/images/summit/310.png',
      '/images/summit/314.png',
      '/images/summit/325.png',
      '/images/summit/339.png',
      '/images/summit/340.png',
      '/images/summit/411.png',

    ],
    title: 'Summit & Exhibition',
    category: 'Events',
    description: 'Celebrating excellence in healthcare',
  },
  {
    id: 2,
    url: 'images/events/File 10.png',
    images: [
      '/videos/Nominees1.mp4',
      '/videos/Nominees2.mp4',
      '/videos/Nominees3.mp4',
      '/videos/Nominees4.mp4',
      '/videos/Nominees5.mp4',
      '/videos/Nominees6.mp4',
      '/videos/Nominees7.mp4',
      '/videos/Nominees8.mp4',
      '/videos/Nominees9.mp4',
      '/videos/Nominees10.mp4',
      '/videos/Nominees11.mp4',
    ],
    title: 'Ceremony',
    category: 'Awards',
    description: 'Showcasing the latest innovations in healthcare.',
  },
  {
    id: 3,
    url: 'images/events/File 28.png',
    images: [
      '/images/events/File 10.png',
      '/images/events/File 11.png',
      '/images/events/File 12.png',
      '/images/events/File 17.png',
      '/images/events/File 19.png',
      '/images/events/File 20.png',
      '/images/events/File 21.png',
      '/images/events/File 23.png',
      '/images/events/File 27.png',
      '/images/events/File 28.png',

    ],
    title: 'Award Gala',
    category: 'Awards',
    description: 'Honoring the achievements of healthcare professionals.',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(GALLERY_IMAGES.map(img => img.category)))];

  const filteredImages = selectedCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  const ImageModal = () => {
    if (!selectedImage) return null;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    if (!selectedImage) return null;
    if (!selectedImage.images) return null;
    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % selectedImage.images!.length
      );
    };

    const handlePrevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedImage.images!.length - 1 : prevIndex - 1
      );
    };

    return (
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
        <button
          onClick={() => setSelectedImage(null)}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <X className="h-8 w-8" />
        </button>
        <div className="max-w-4xl w-full relative">
          {selectedImage.images ? (
            <>
              {selectedImage.images[currentImageIndex].endsWith('.mp4') ? (
                <video
                  src={selectedImage.images[currentImageIndex]}
                  controls
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <img
                  src={selectedImage.images[currentImageIndex]}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg"
                />
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
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
          )}
          <div className="mt-4 text-white text-center">
            <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
            {selectedImage.description && (
              <p className="text-gray-300">{selectedImage.description}</p>
            )}
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

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all ${selectedCategory === category
                ? 'bg-[#962326] text-white'
                : 'bg-white text-[#2B2A29] hover:bg-[#F2C849] hover:text-white'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

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