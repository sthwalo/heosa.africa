/**
 * Custom hook for voting functionality
 * Handles vote submission logic and state with real-time status checking
 * 
 * ⚠️ FALLBACK IMPLEMENTATION - Currently simulates voting
 * TODO: Connect to actual voting API when backend is implemented
 */

import { useState, useCallback } from 'react';
import { Finalist } from '../types';
import { VOTING_CONFIG } from '../constants';
import { useVotingStatus } from './useEventStatus';

export interface UseVotingReturn {
  isVoting: boolean;
  error: string | null;
  success: boolean;
  submitVote: (finalist: Finalist, method: string) => Promise<void>;
  resetVoteState: () => void;
  isVotingOpen: boolean;
  votingStatus: 'not-started' | 'open' | 'closed';
}

export function useVoting(): UseVotingReturn {
  const [isVoting, setIsVoting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Get real-time voting status
  const { isOpen: isVotingOpen, status: votingStatus } = useVotingStatus(
    VOTING_CONFIG.openDate,
    VOTING_CONFIG.deadline
  );

  const submitVote = useCallback(async (finalist: Finalist, method: string) => {
    setIsVoting(true);
    setError(null);
    setSuccess(false);

    try {
      // Check if voting is open with real-time status
      if (!isVotingOpen) {
        throw new Error(
          votingStatus === 'not-started' 
            ? 'Voting has not started yet' 
            : 'Voting period has ended'
        );
      }

      // TODO: Replace with actual API call when backend is ready
      // Example: await votingService.submitVote({ finalistId: finalist.id, method });
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulate success
      console.log('Vote submitted (SIMULATED):', {
        finalist: finalist.name,
        voteCode: finalist.voteCode,
        method,
        timestamp: new Date().toISOString(),
      });

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit vote');
      console.error('Voting error:', err);
    } finally {
      setIsVoting(false);
    }
  }, [isVotingOpen, votingStatus]);

  const resetVoteState = useCallback(() => {
    setIsVoting(false);
    setError(null);
    setSuccess(false);
  }, []);

  return {
    isVoting,
    error,
    success,
    submitVote,
    resetVoteState,
    isVotingOpen,
    votingStatus,
  };
}
