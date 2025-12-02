/**
 * Type definitions for Voting
 */

import { ReactNode } from 'react';
import { Finalist } from './finalist.types';

export interface VotingMethod {
  title: string;
  icon: ReactNode;
  description: string;
  action: () => void;
}

export interface VotePayload {
  finalistId: number;
  voteCode: string;
  method: 'sms' | 'whatsapp' | 'email' | 'online';
  timestamp: Date;
}
