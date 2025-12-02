/**
 * Voting Configuration Constants
 * 
 * ⚠️ FALLBACK DATA - Currently using hardcoded values
 * TODO: Replace with API configuration when backend is implemented
 */

import { EVENT_DATES } from './events.constants';
import { formatDateLong } from '../utils/date.utils';

export const VOTING_CONFIG = {
  // Voting deadline (using centralized event dates)
  deadline: EVENT_DATES.votingClose,
  
  // Auto-formatted deadline text (dynamically generated from deadline Date)
  get deadlineText(): string {
    return formatDateLong(this.deadline);
  },
  
  // Voting open date
  openDate: EVENT_DATES.votingOpen,
  
  // SMS numbers
  sms: {
    southAfrica: '34855',
    africa: '34855',
  },
  
  // WhatsApp number
  whatsapp: '+27799501565',
  
  // Email
  email: 'vote@heosa.africa',
  
  // Status - Computed dynamically, use useVotingStatus hook instead
  // @deprecated Use useVotingStatus from hooks/useEventStatus.ts
  get isOpen() {
    const now = new Date();
    return now >= EVENT_DATES.votingOpen && now <= EVENT_DATES.votingClose;
  },
} as const;

/**
 * Voting methods configuration
 * These are the available voting channels
 */
export const VOTING_METHODS_CONFIG = [
  {
    id: 'sms-sa',
    title: 'SMS Voting - South Africa',
    type: 'sms' as const,
    number: '33351',
    country: 'ZA',
  },
  {
    id: 'sms-africa',
    title: 'SMS Voting - Africa',
    type: 'sms' as const,
    number: '34433',
    country: 'AFRICA',
    note: 'SMS to 34855 or Pay via Bank details',
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Voting',
    type: 'whatsapp' as const,
    number: '+27799501565',
  },
  {
    id: 'email',
    title: 'Email Voting',
    type: 'email' as const,
    email: 'vote@heosa.africa',
  },
] as const;
