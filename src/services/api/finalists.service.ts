/**
 * Finalists Service
 * Service layer for fetching and managing finalists data
 * 
 * ⚠️ FALLBACK IMPLEMENTATION - Uses hardcoded data from /data files
 * TODO: Replace with actual API calls when backend is implemented
 */

import { Finalist, Category } from '../../types';
import { finalists25Data } from '../../data/finalists25';
import { finalistsData } from '../../data/finalistsData';

/**
 * Get all finalists for a specific year
 * 
 * @fallback Returns data from finalists25Data or finalistsData
 */
export async function getFinalistsByYear(year: string): Promise<Finalist[]> {
  try {
    // TODO: Replace with actual API call
    // const response = await fetch(API_ENDPOINTS.finalists.getAll());
    // const data = await response.json();
    // return data.filter(f => f.year === year);
    
    // FALLBACK: Use hardcoded data
    if (year === '2025') {
      return finalists25Data.filter(f => f.year === year);
    } else {
      return finalistsData.filter(f => f.year === year);
    }
  } catch (error) {
    console.error('Error fetching finalists:', error);
    // Fallback to local data on error
    if (year === '2025') {
      return finalists25Data.filter(f => f.year === year);
    } else {
      return finalistsData.filter(f => f.year === year);
    }
  }
}

/**
 * Get a single finalist by ID
 * 
 * @fallback Returns data from finalists25Data or finalistsData
 */
export async function getFinalistById(id: string | number): Promise<Finalist | null> {
  try {
    // TODO: Replace with actual API call
    // const response = await fetch(API_ENDPOINTS.finalists.getOne(id));
    // return await response.json();
    
    // FALLBACK: Use hardcoded data
    const allFinalists = [...finalists25Data, ...finalistsData];
    return allFinalists.find(f => String(f.id) === String(id)) || null;
  } catch (error) {
    console.error('Error fetching finalist:', error);
    const allFinalists = [...finalists25Data, ...finalistsData];
    return allFinalists.find(f => String(f.id) === String(id)) || null;
  }
}

/**
 * Get finalists grouped by category
 * 
 * @fallback Returns data from finalists25Data or finalistsData
 */
export async function getFinalistsByCategory(year: string): Promise<Category[]> {
  try {
    const finalists = await getFinalistsByYear(year);
    
    // Group by category
    const categories = Object.values(
      finalists.reduce((acc, finalist) => {
        if (!acc[finalist.category]) {
          acc[finalist.category] = {
            title: finalist.category,
            finalists: []
          };
        }
        acc[finalist.category].finalists.push(finalist);
        return acc;
      }, {} as Record<string, Category>)
    );
    
    return categories;
  } catch (error) {
    console.error('Error grouping finalists by category:', error);
    return [];
  }
}

/**
 * Get all available years with finalists
 * 
 * @fallback Returns data from finalists25Data and finalistsData
 */
export async function getAvailableYears(): Promise<string[]> {
  try {
    // TODO: Replace with actual API call
    // const response = await fetch(API_ENDPOINTS.finalists.getYears());
    // return await response.json();
    
    // FALLBACK: Use hardcoded data
    const allFinalists = [...finalists25Data, ...finalistsData];
    const years = Array.from(new Set(allFinalists.map(f => f.year).filter((y): y is string => !!y)));
    return years.sort((a, b) => parseInt(b) - parseInt(a));
  } catch (error) {
    console.error('Error fetching years:', error);
    return ['2025', '2024', '2023', '2022'];
  }
}
