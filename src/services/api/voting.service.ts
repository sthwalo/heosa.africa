/**
 * Voting Service
 * Service layer for submitting and managing votes
 * 
 * ⚠️ FALLBACK IMPLEMENTATION - Simulates voting (no backend yet)
 * TODO: Replace with actual API calls when backend is implemented
 */

import { VotePayload } from '../../types';
// import { API_ENDPOINTS, API_HEADERS } from './config'; // TODO: Uncomment when API is ready

export interface VoteResponse {
  success: boolean;
  message: string;
  voteId?: number;
}

/**
 * Submit a vote for a finalist
 * 
 * @fallback Simulates API call (logs to console)
 */
export async function submitVote(payload: VotePayload): Promise<VoteResponse> {
  try {
    // TODO: Replace with actual API call
    // const response = await fetch(API_ENDPOINTS.voting.submit(), {
    //   method: 'POST',
    //   headers: API_HEADERS,
    //   body: JSON.stringify(payload),
    // });
    // return await response.json();
    
    // FALLBACK: Simulate API call
    console.log('Vote submitted (SIMULATED):', payload);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      success: true,
      message: 'Vote submitted successfully!',
      voteId: Math.floor(Math.random() * 10000),
    };
  } catch (error) {
    console.error('Error submitting vote:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to submit vote',
    };
  }
}

/**
 * Get voting results (if available)
 * 
 * @fallback Returns null (no data available)
 */
export async function getVotingResults(): Promise<Record<number, number> | null> {
  try {
    // TODO: Replace with actual API call
    // const response = await fetch(API_ENDPOINTS.voting.getResults());
    // return await response.json();
    
    // FALLBACK: No results available yet
    console.log('Voting results not available (no backend)');
    return null;
  } catch (error) {
    console.error('Error fetching voting results:', error);
    return null;
  }
}
