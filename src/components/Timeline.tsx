import { Check, Clock } from 'lucide-react';
import { timelineData } from '../data/timelineData';

const Timeline = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h3 className="text-2xl font-semibold text-[#2B2A29] mb-8 text-center">Awards Timeline</h3>
      <div className="space-y-4">
        {timelineData.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className={`p-2 rounded-full ${
              item.status === 'completed' ? 'bg-[#962326]' : 
              item.status === 'active' ? 'bg-[#A7864B]' : 'bg-gray-200'
            }`}>
              {item.status === 'completed' ? (
                <Check className="h-5 w-5 text-white" />
              ) : (
                <Clock className="h-5 w-5 text-white" />
              )}
            </div>
            <div>
              <p className="font-medium text-gray-900">{item.phase}</p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Timeline;