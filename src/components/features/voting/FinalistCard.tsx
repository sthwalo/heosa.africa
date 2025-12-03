/**
 * Finalist Card Component
 * Displays a single finalist with vote button
 */

import { Finalist } from '../../../types';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';

export interface FinalistCardProps {
  finalist: Finalist;
  onVote: (finalist: Finalist) => void;
}

export function FinalistCard({ finalist, onVote }: FinalistCardProps) {
  return (
    <Card padding="none" hover>
      <div className="relative aspect-square">
        <img
          src={finalist.image}
          alt={finalist.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-[#2B2A29] mb-4">{finalist.name}</h3>
        <Button
          fullWidth
          onClick={() => onVote(finalist)}
          variant="primary"
        >
          Vote Now
        </Button>
      </div>
    </Card>
  );
}
