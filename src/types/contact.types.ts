/**
 * Type definitions for Contact information
 */

export interface PhoneNumber {
  number: string;
  label: string;
}

export interface Address {
  street: string;
  city: string;
  province: string;
  country: string;
  postal: string;
}

export interface ContactInfo {
  phoneNumbers: PhoneNumber[];
  whatsapp: string;
  email: string;
  address: Address;
}
