/**
 * Type definitions for Finalists and Winners
 * Centralized type definitions for better type safety and reusability
 */

export interface Finalist {
  id: string | number;
  name: string;
  category: string;
  image: string;
  voteCode?: string;
  year?: string;
  description?: string;
  organization?: string;
}

export interface Winner extends Finalist {
  award: string;
  achievements?: string[];
}

export interface Category {
  title: string;
  finalists: Finalist[];
}

// Re-export award category types
export type { AwardCategory } from '../data/awardCategories';
