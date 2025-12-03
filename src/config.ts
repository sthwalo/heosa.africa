/**
 * Application Configuration
 * 
 * ⚠️ FALLBACK CONFIG - Update with environment variables when backend is ready
 * 
 * Environment variables should be prefixed with VITE_ to be accessible:
 * - VITE_API_BASE_URL
 * - VITE_APP_NAME
 * - VITE_ENV (development, staging, production)
 */

export const config = {
  app: {
    name: import.meta.env.VITE_APP_NAME || 'HEOSA',
    fullName: 'African Health Excellence Organisation',
    environment: import.meta.env.VITE_ENV || 'development',
  },
  
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
    timeout: 10000,
  },
  
  features: {
    enableVoting: import.meta.env.VITE_ENABLE_VOTING !== 'false', // Default: enabled
    enableGallery: true,
    enableContact: true,
  },
  
  // Development flags
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
} as const;

export default config;
