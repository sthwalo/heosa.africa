/**
 * Voting Methods Component
 * Displays available voting methods for a finalist
 */

import { Phone, Mail, Share2 } from 'lucide-react';
import { Finalist } from '../../../types';
import { buildSmsUrl, buildWhatsAppUrl, buildEmailUrl } from '../../../utils';
import { shareFinalist } from '../../../utils/share.utils';
import { VOTING_METHODS_CONFIG, VOTING_CONFIG } from '../../../constants';

export interface VotingMethodsProps {
  finalist: Finalist;
}

export function VotingMethods({ finalist }: VotingMethodsProps) {
  // Ensure voteCode exists
  const voteCode = finalist.voteCode || '';
  
  const votingMethods = [
    {
      title: VOTING_METHODS_CONFIG[0].title,
      icon: <Phone className="h-6 w-6" />,
      description: `SMS ${voteCode} to ${VOTING_METHODS_CONFIG[0].number}`,
      action: () => {
        window.location.href = buildSmsUrl(
          VOTING_METHODS_CONFIG[0].number,
          voteCode
        );
      },
    },
    {
      title: VOTING_METHODS_CONFIG[1].title,
      icon: <Phone className="h-6 w-6" />,
      description: `SMS ${voteCode} to ${VOTING_METHODS_CONFIG[1].number} or Pay via Bank details`,
      action: () => {
        window.location.href = buildSmsUrl(
          VOTING_METHODS_CONFIG[1].number,
          voteCode
        );
      },
    },
    {
      title: VOTING_METHODS_CONFIG[2].title,
      icon: <Phone className="h-6 w-6" />,
      description: `WhatsApp ${voteCode} to ${VOTING_CONFIG.whatsapp}`,
      action: () => {
        window.location.href = buildWhatsAppUrl(
          VOTING_CONFIG.whatsapp,
          voteCode
        );
      },
    },
    {
      title: 'Email Voting',
      icon: <Mail className="h-6 w-6" />,
      description: 'Vote via email',
      action: () => {
        window.location.href = buildEmailUrl(
          VOTING_CONFIG.email,
          `Vote for ${finalist.name}`,
          `I would like to vote for ${finalist.name} (${voteCode})`
        );
      },
    },
    {
      title: 'Share',
      icon: <Share2 className="h-6 w-6" />,
      description: 'Share with friends',
      action: () => {
        shareFinalist(finalist.name, voteCode);
      },
    },
  ];

  return (
    <div className="space-y-4">
      {votingMethods.map((method, index) => (
        <button
          key={index}
          onClick={method.action}
          className="w-full flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-[#962326] hover:bg-gray-50 transition-colors"
        >
          <div className="flex-shrink-0 text-[#962326]">{method.icon}</div>
          <div className="text-left">
            <h4 className="font-semibold text-[#2B2A29]">{method.title}</h4>
            <p className="text-sm text-gray-600">{method.description}</p>
          </div>
        </button>
      ))}
    </div>
  );
}
