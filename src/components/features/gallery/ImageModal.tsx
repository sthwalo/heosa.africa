/**
 * Image Modal Component
 * Full-screen modal for viewing gallery images with carousel
 */

import { GalleryImage } from '../../../types';
import { ImageCarousel } from '../../ui/ImageCarousel';
import { X } from 'lucide-react';

export interface ImageModalProps {
  image: GalleryImage | null;
  onClose: () => void;
}

export function ImageModal({ image, onClose }: ImageModalProps) {
  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
        aria-label="Close"
      >
        <X className="h-8 w-8" />
      </button>
      
      <div className="max-w-7xl w-full h-[80vh] relative">
        {image.images && image.images.length > 0 ? (
          <ImageCarousel images={image.images} title={image.title} />
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
}
