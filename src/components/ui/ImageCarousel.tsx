/**
 * Image Carousel Component
 * For navigating through multiple images
 */

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface ImageCarouselProps {
  images: string[];
  title?: string;
  className?: string;
}

export function ImageCarousel({ images, title, className = '' }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const isVideo = (url: string) => url.endsWith('.mp4');

  if (images.length === 0) {
    return null;
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Current Image/Video */}
      <div className="flex items-center justify-center w-full h-full">
        {isVideo(images[currentIndex]) ? (
          <video
            src={images[currentIndex]}
            controls
            className="max-w-full max-h-full rounded-lg"
            key={images[currentIndex]}
          />
        ) : (
          <img
            src={images[currentIndex]}
            alt={title ? `${title} - ${currentIndex + 1}` : `Image ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        )}
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}
