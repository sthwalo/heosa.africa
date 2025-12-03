/**
 * API Configuration
 * Central configuration for API endpoints
 * 
 * ⚠️ FALLBACK CONFIG - Update when backend is implemented
 */

// Get base URL from environment or use default
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

export const API_ENDPOINTS = {
  // Finalists
  finalists: {
    getAll: () => `${API_BASE_URL}/nominations/read.php`,
    getOne: (id: number) => `${API_BASE_URL}/nominations/read_one.php?id=${id}`,
    create: () => `${API_BASE_URL}/nominations/create.php`,
    update: (id: number) => `${API_BASE_URL}/nominations/update.php?id=${id}`,
    delete: (id: number) => `${API_BASE_URL}/nominations/delete.php?id=${id}`,
  },
  
  // Voting
  voting: {
    submit: () => `${API_BASE_URL}/votes/create.php`,
    getResults: () => `${API_BASE_URL}/votes/results.php`,
  },
  
  // Contact/Email
  contact: {
    send: () => `${API_BASE_URL}/test-email.php`,
  },
} as const;

/**
 * API request headers
 */
export const API_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
} as const;

/**
 * API request timeout (ms)
 */
export const API_TIMEOUT = 10000;
