/**
 * Type definitions for Gallery
 */

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
  year: string;
  description?: string;
  images?: string[];
}

export interface GalleryFilters {
  year: string;
  category: string;
}
