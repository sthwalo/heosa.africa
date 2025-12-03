/**
 * URL utility functions
 * Helpers for building URLs and handling navigation
 */

/**
 * Build an SMS URL for voting
 */
export function buildSmsUrl(number: string, message: string): string {
  return `sms:${number}?body=${encodeURIComponent(message)}`;
}

/**
 * Build a WhatsApp URL
 */
export function buildWhatsAppUrl(number: string, message: string): string {
  const cleanNumber = number.replace(/\s+/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Build a phone call URL
 */
export function buildPhoneUrl(number: string): string {
  return `tel:${number.replace(/\s+/g, '')}`;
}

/**
 * Build an email URL
 */
export function buildEmailUrl(
  email: string,
  subject?: string,
  body?: string
): string {
  const params = new URLSearchParams();
  if (subject) params.append('subject', subject);
  if (body) params.append('body', body);
  
  const queryString = params.toString();
  return `mailto:${email}${queryString ? '?' + queryString : ''}`;
}

/**
 * Build Google Maps URL
 */
export function buildMapsUrl(address: string): string {
  return `https://maps.google.com/?q=${encodeURIComponent(address)}`;
}

/**
 * Parse hash from URL
 */
export function getHashFromUrl(url: string): string | null {
  const [, hash] = url.split('#');
  return hash || null;
}

/**
 * Scroll to element by ID
 */
export function scrollToElement(elementId: string, behavior: ScrollBehavior = 'smooth'): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior });
  }
}
