import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Global error handler
window.addEventListener('error', (event) => {
  if (import.meta.env.DEV) {
    console.error('Global error caught:', event.error);
  }
});

// Unhandled promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
  if (import.meta.env.DEV) {
    console.error('Unhandled promise rejection:', event.reason);
  }
});

try {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    throw new Error('Root element #root not found in DOM');
  }
  
  const root = createRoot(rootElement);
  
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} catch (error) {
  if (import.meta.env.DEV) {
    console.error('Failed to initialize app:', error);
  }
  
  // Show visible error to user
  const errorDiv = document.createElement('div');
  errorDiv.style.cssText = 'padding: 40px; font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; border: 2px solid #ef4444; background: #fee; border-radius: 8px;';
  errorDiv.innerHTML = `
    <h1 style="color: #dc2626; margin: 0 0 20px 0;">Application Failed to Load</h1>
    <p style="margin: 0 0 10px 0;"><strong>Error:</strong> ${error instanceof Error ? error.message : String(error)}</p>
    <p style="margin: 0 0 20px 0; color: #666;">Please contact support if this issue persists.</p>
  `;
  document.body.appendChild(errorDiv);
}
