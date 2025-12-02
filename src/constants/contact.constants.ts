/**
 * Contact Information Constants
 * 
 * ⚠️ FALLBACK DATA - Currently using hardcoded values
 * TODO: Replace with API/CMS data when backend is implemented
 */

import { ContactInfo } from '../types';
import { EVENT_DATES } from './events.constants';
import { formatDateLong } from '../utils/date.utils';

export const CONTACT_INFO: ContactInfo = {
  phoneNumbers: [
    { number: '+27824355370', label: 'Main Office' },
    { number: '+27799501565', label: 'Support' }
  ],
  whatsapp: '+27824355370',
  email: 'info@heosa.africa',
  address: {
    street: 'Suite 1018, 6 Waxbill Street',
    city: 'Mbombela',
    province: 'Mpumalanga',
    country: 'South Africa',
    postal: '1200'
  }
};

/**
 * Accommodation booking information
 * For the awards event venue
 * Event date auto-formats from EVENT_DATES
 */
export const ACCOMMODATION_INFO = {
  venue: 'The Capital Zimbali',
  
  // Auto-formatted date (dynamically generated)
  get eventDate(): string {
    return formatDateLong(EVENT_DATES.awards2025);
  },
  
  bookingPhone: '079 950 1565',
  bookingEmail: 'info@heosa.africa',
  discountCode: 'African Health Excellence Awards 2025',
};

/**
 * Google Maps embed URL for office location
 */
export const OFFICE_MAP_URL = 
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.5276813242584!2d30.97894631544384!3d-25.47750968377558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee84a1017f005f9%3A0x2748e0d27e501adf!2s6%20Waxbill%20St%2C%20Riverside%20Park%2C%20Mbombela%2C%201200!5e0!3m2!1sen!2sza!4v1647856231074!5m2!1sen!2sza";
