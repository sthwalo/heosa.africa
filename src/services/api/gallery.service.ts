/**
 * Gallery Service
 * Service layer for fetching gallery images
 * 
 * ⚠️ FALLBACK IMPLEMENTATION - Uses hardcoded data from /data files
 * TODO: Replace with actual API calls when backend/CMS is implemented
 */

import { GalleryImage } from '../../types';
import { GALLERY_IMAGES, getYears, getCategories, filterImages } from '../../data/galleryData';

/**
 * Get all gallery images
 * 
 * @fallback Returns data from galleryData
 */
export async function getAllImages(): Promise<GalleryImage[]> {
  try {
    // TODO: Replace with actual API call
    // const response = await fetch(API_ENDPOINTS.gallery.getAll());
    // return await response.json();
    
    // FALLBACK: Use hardcoded data
    return GALLERY_IMAGES;
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return GALLERY_IMAGES;
  }
}

/**
 * Get gallery images filtered by year and category
 * 
 * @fallback Returns filtered data from galleryData
 */
export async function getFilteredImages(
  year: string,
  category: string
): Promise<GalleryImage[]> {
  try {
    // TODO: Replace with actual API call with query parameters
    // const response = await fetch(
    //   `${API_ENDPOINTS.gallery.getAll()}?year=${year}&category=${category}`
    // );
    // return await response.json();
    
    // FALLBACK: Use hardcoded data
    return filterImages(year, category);
  } catch (error) {
    console.error('Error fetching filtered images:', error);
    return filterImages(year, category);
  }
}

/**
 * Get available years for gallery
 * 
 * @fallback Returns years from galleryData
 */
export async function getGalleryYears(): Promise<string[]> {
  try {
    // TODO: Replace with actual API call
    // const response = await fetch(API_ENDPOINTS.gallery.getYears());
    // return await response.json();
    
    // FALLBACK: Use hardcoded data
    return getYears();
  } catch (error) {
    console.error('Error fetching gallery years:', error);
    return getYears();
  }
}

/**
 * Get available categories for a specific year
 * 
 * @fallback Returns categories from galleryData
 */
export async function getGalleryCategories(year: string): Promise<string[]> {
  try {
    // TODO: Replace with actual API call
    // const response = await fetch(
    //   `${API_ENDPOINTS.gallery.getCategories()}?year=${year}`
    // );
    // return await response.json();
    
    // FALLBACK: Use hardcoded data
    return getCategories(year);
  } catch (error) {
    console.error('Error fetching gallery categories:', error);
    return getCategories(year);
  }
}
