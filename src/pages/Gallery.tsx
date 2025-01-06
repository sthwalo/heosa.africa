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
    url: '/images/summit/27.png',
    images: [
      '/images/summit/8.png',
      '/images/summit/9.png',
      '/images/summit/10.png',
      '/images/summit/11.png',
      '/images/summit/12.png',
      '/images/summit/13.png',
      '/images/summit/15.png',
      '/images/summit/18.png',
      '/images/summit/19.png',
      '/images/summit/20.png',
      '/images/summit/21.png',
      '/images/summit/23.png',
      '/images/summit/25.png',
      '/images/summit/26.png',
      '/images/summit/27.png',
      '/images/summit/28.png',
      '/images/summit/30.png',
      '/images/summit/32.png',
      '/images/summit/33.png',
      '/images/summit/34.png',
      '/images/summit/35.png',
    ],
    title: 'Summit & Exhibition',
    category: 'Events',
    description: 'Celebrating excellence in healthcare',
  },
  {
    id: 2,
    url: '/images/events/2.png',
    images: [
      '/images/events/1.png',
      '/images/events/2.png',
      '/images/events/3.png',
      '/images/events/4.png',
      '/images/events/5.png',
      '/images/events/6.png',
      '/images/events/7.png',
    ],
    title: 'Award Gala',
    category: 'Awards',
    description: 'Honoring the achievements of healthcare professionals.',
  },
  {
    id: 3,
    url: '/images/events/1.png',
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
    category: 'Videos',
    description: 'Showcasing the latest innovations in healthcare.',
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
        <div className="max-w-7xl w-full h-[80vh] relative flex items-center justify-center">
          {selectedImage.images ? (
            <>
              {selectedImage.images[currentImageIndex].endsWith('.mp4') ? (
                <video
                  src={selectedImage.images[currentImageIndex]}
                  controls
                  className="max-w-full max-h-full rounded-lg"
                />
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={selectedImage.images[currentImageIndex]}
                    alt={selectedImage.title}
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
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          )}
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

      <ImageModal />
    </div>
  );
};

export default Gallery;