const config = {
  apiBaseUrl: process.env.NODE_ENV === 'production' 
    ? 'https://heosa.africa/api'
    : 'http://localhost:8000/api',
  debug: true  // Add this for debugging
};

console.log('Current API URL:', config.apiBaseUrl); // Add this debug log
export default config;
