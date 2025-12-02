/**
 * Gallery Grid Component
 * Displays gallery images in a grid layout
 */

import { GalleryImage } from '../../../types';

export interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
}

export function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((image) => (
        <div
          key={image.id}
          onClick={() => onImageClick(image)}
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
  );
}
