/**
 * Vote Modal Component
 * Modal for displaying voting options for a finalist with real-time status
 */

import { Modal } from '../../ui/Modal';
import { VotingMethods } from './VotingMethods';
import { Finalist } from '../../../types';
import { VOTING_CONFIG } from '../../../constants';
import { useVotingStatus } from '../../../hooks';
import { EventCountdownDisplay } from '../events';

export interface VoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  finalist: Finalist | null;
}

export function VoteModal({ isOpen, onClose, finalist }: VoteModalProps) {
  // Get real-time voting status
  const { isOpen: isVotingOpen, status: votingStatus } = useVotingStatus(
    VOTING_CONFIG.openDate,
    VOTING_CONFIG.deadline
  );

  if (!finalist) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Vote for ${finalist.name}`}
      maxWidth="md"
    >
      {/* Dynamic Voting Status */}
      {votingStatus === 'not-started' && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-blue-800 font-semibold text-center mb-2">
            📅 Voting Opens In:
          </p>
          <EventCountdownDisplay 
            targetDate={VOTING_CONFIG.openDate} 
            compact={true}
            className="justify-center"
          />
        </div>
      )}
      
      {votingStatus === 'open' && (
        <div className="bg-[#F2C849] bg-opacity-20 border border-[#F2C849] rounded-lg p-4 mb-6">
          <p className="text-sm text-[#962326] font-semibold text-center mb-2">
            ⏰ Voting Closes In:
          </p>
          <EventCountdownDisplay 
            targetDate={VOTING_CONFIG.deadline} 
            compact={true}
            className="justify-center"
          />
        </div>
      )}
      
      {votingStatus === 'closed' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-red-800 font-semibold text-center">
            🔒 Voting Has Closed
          </p>
          <p className="text-xs text-red-600 text-center mt-1">
            Closed on {VOTING_CONFIG.deadlineText}
          </p>
        </div>
      )}

      {/* Voting Methods (disabled if not open) */}
      {isVotingOpen ? (
        <VotingMethods finalist={finalist} />
      ) : (
        <div className="text-center py-8 text-gray-500">
          <p>Voting is currently {votingStatus === 'not-started' ? 'not yet available' : 'closed'}.</p>
        </div>
      )}
    </Modal>
  );
}
